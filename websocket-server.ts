#!/usr/bin/env tsx

import WebSocket, { WebSocketServer } from "ws";
import * as Y from "yjs";
import * as encoding from "lib0/encoding";
import * as decoding from "lib0/decoding";
import * as syncProtocol from "y-protocols/sync";
import * as awarenessProtocol from "y-protocols/awareness";
import http from "http";
import { PrismaClient } from "@/generated/prisma";

//server config w/ env variables
const PORT = parseInt(process.env.WEBSOCKET_PORT || "4000");
const HOST = process.env.WEBSOCKET_HOST || "localhost";
const prisma = new PrismaClient();

//in-memory storage for active documents and connections
//each document ID maps to its Yjs document instance
const documents = new Map<string, Y.Doc>();
//each document ID maps to a set of active websocket connections
const connections = new Map<
  string,
  Set<{
    ws: WebSocket;
    userId: string;
  }>
>();

// Message types from y-protocols
const messageSync = 0;
const messageAwareness = 1;

//basic http server
const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/plain",
  });
  response.end("Yjs ws-server running\n");
});

//create wss attached to the http server
const wss = new WebSocketServer({ server });

//handle new ws connections
wss.on("connection", async (ws: WebSocket, req: http.IncomingMessage) => {
  //extract the document ID from the url query params
  const url = new URL(req.url || "/", `http://${req.headers.host}`);
  // const documentId = url.searchParams.get('document') || 'default'

  const roomCode = url.searchParams.get("room");
  const userId = url.searchParams.get("userId");

  if (!roomCode || !userId) {
    console.log("Missing parameters: ", { roomCode, userId });
    ws.close(1000, "RoomCode and userId are required");
    return;
  }

  //validate roomCode and userId
  let room;
  try {
    room = await prisma.room.findFirst({
      where: {
        code: roomCode,
        isActive: true,
        participants: {
          some: {
            userId,
          },
        },
      },
      include: {
        document: true,
        participants: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!room) {
      console.log("Room not found : ", { roomCode, userId });
      ws.close(1000, "Room not found or user not authorized");
      return;
    }

    console.log(
      `[${new Date().toISOString()}] User ${userId} connected to room ${roomCode}`
    );
  } catch (error) {
    console.error("Error connecting to room: ", error);
    ws.close(1000, "Internal Server Error");
    return;
  }

  //create new Yjs document if it doesn't exist for this room
  if (!documents.has(roomCode)) {
    const doc = new Y.Doc(); //create a new Yjs doc
    documents.set(roomCode, doc); //store the document in the map

    //init shared-types
    const ytext = doc.getText("content"); //shared text content
    const awareness = new awarenessProtocol.Awareness(doc); //track cursor positions

    //load initial content if available
    if (room.document?.content) {
      ytext.insert(0, room.document.content);
      console.log(`Loaded existing content for room ${roomCode}`);
    }

    // Listen to document updates to broadcast to all clients
    doc.on("update", (update: Uint8Array, origin: any) => {
      // Don't broadcast if the update came from this websocket (to avoid loops)
      if (origin !== ws) {
        const encoder = encoding.createEncoder();
        encoding.writeVarUint(encoder, messageSync);
        syncProtocol.writeUpdate(encoder, update);
        const message = encoding.toUint8Array(encoder);

        connections.get(roomCode)?.forEach(({ ws: client }) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(message, { binary: true });
          }
        });
      }
    });
  }

  const doc = documents.get(roomCode)!; //get the document from the map

  //track connection for this room
  if (!connections.has(roomCode)) {
    connections.set(roomCode, new Set());
  }
  connections.get(roomCode)!.add({ ws, userId });

  // Send initial sync message (SyncStep1)
  const encoder = encoding.createEncoder();
  encoding.writeVarUint(encoder, messageSync);
  syncProtocol.writeSyncStep1(encoder, doc);
  ws.send(encoding.toUint8Array(encoder), { binary: true });

  // Handle incoming messages
  ws.on("message", (message: Buffer) => {
    const uint8Array = new Uint8Array(message);
    const decoder = decoding.createDecoder(uint8Array);
    const messageType = decoding.readVarUint(decoder);

    switch (messageType) {
      case messageSync:
        // Read the sync message type
        const responseEncoder = encoding.createEncoder();
        encoding.writeVarUint(responseEncoder, messageSync);
        syncProtocol.readSyncMessage(decoder, responseEncoder, doc, ws);

        // Send response if needed
        if (encoding.length(responseEncoder) > 1) {
          ws.send(encoding.toUint8Array(responseEncoder), { binary: true });
        }
        break;

      case messageAwareness:
        // Broadcast awareness updates (cursor positions, etc.)
        connections.get(roomCode)?.forEach(({ ws: client }) => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(message, { binary: true });
          }
        });
        break;
    }
  });

  console.log(
    `Active connections in ${roomCode}: ${connections.get(roomCode)?.size}`
  );

  //handle onClose event for ws
  ws.on("close", async () => {
    console.log(`Connection closed for room: ${roomCode} by user: ${userId}`);
    const roomConnections = connections.get(roomCode);

    // Remove this specific connection
    if (roomConnections) {
      roomConnections.forEach((conn) => {
        if (conn.ws === ws && conn.userId === userId) {
          roomConnections.delete(conn);
        }
      });
    }

    //clean up room when last connection is closed
    if (roomConnections?.size === 0) {
      // Save final document state
      try {
        const doc = documents.get(roomCode);
        if (doc && room.document) {
          const content = doc.getText("content").toString();
          await prisma.document.update({
            where: { id: room.document.id },
            data: {
              content,
              lastEditedAt: new Date(),
            },
          });
          console.log(`Saved final content for room ${roomCode}`);
        }
      } catch (error) {
        console.error("Failed to save document:", error);
      }

      connections.delete(roomCode);
      documents.delete(roomCode);
      console.log(`Room ${roomCode} cleaned up`);
    }
  });

  //handle errors
  ws.on("error", (error) => {
    console.error(`WebSocket error ${error.message}`);
  });
});

//start the server
server.listen(PORT, HOST, () => {
  console.log(`Websocket server started at ws://${HOST}:${PORT}`);
  console.log(`HOST: ${HOST}`);
  console.log(`PORT: ${PORT}`);
  console.log(`URL: ws://${HOST}:${PORT}`);
  console.log(`Status: Ready for connections`);
  console.log("=".repeat(60));
});

//gracefully handle shutdown
const shutdown = () => {
  console.log(`\n\nShutting down ws-server...`);

  //close all the active connections
  let totalConnections = 0;
  connections.forEach((roomConnections) => {
    roomConnections.forEach(({ ws: client }) => {
      client.close();
      totalConnections++;
    });
  });

  console.log(`Closed ${totalConnections} active connection(s)`);

  server.close(async () => {
    await prisma.$disconnect();
    console.log(`Server closed successfully`);
    process.exit(0);
  });
};

//register shutdown handlers
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
process.on("uncaughtException", (error) => {
  console.error(`Uncaught Exception: ${error.message}`);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
});
