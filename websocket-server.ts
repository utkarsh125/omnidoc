#!/usr/bin/env tsx

import WebSocket, { WebSocketServer } from "ws";
import * as Y from "yjs";
import http from "http";

//server config w/ env variables
const PORT = parseInt(process.env.WEBSOCKET_PORT || '4000')
const HOST = process.env.WEBSOCKET_HOST || 'localhost'

//in-memory storage for active documents and connections
//each document ID maps to its Yjs document instance
const documents = new Map<string, Y.Doc>();
//each document ID maps to a set of active websocket connections
const connections = new Map<string, Set<WebSocket>>()

//basic http server
const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    response.end("Yjs ws-server running\n");
});

//create wss attached to the http server
const wss = new WebSocketServer({ server });

//handle new ws connections
wss.on('connection', (ws: WebSocket, req: http.IncomingMessage) => {
    //extract the document ID from the url query params
    const url = new URL(req.url || '/', `http://${req.headers.host}`)
    const documentId = url.searchParams.get('document') || 'default'

    console.log(`[${new Date().toISOString()}] New connection to document: ${documentId}`)

    //create new Yjs document if it doesn't exist
    if(!documents.has(documentId)){
        documents.set(documentId, new Y.Doc())
    }

    const doc = documents.get(documentId)!

    //track connection for this doc
    if(!connections.has(documentId)){
        connections.set(documentId, new Set())
    }
    connections.get(documentId)!.add(ws)

    // Handle incoming messages
    ws.on('message', (message: Buffer) => {
        // Broadcast to all other clients in the same document
        connections.get(documentId)?.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message)
            }
        })
    })

    console.log(`Active connections in ${documentId}: ${connections.get(documentId)?.size}`)

    //handle onClose event for ws
    ws.on('close', () => {
        console.log(`Connection closed for document: ${documentId}`);
        connections.get(documentId)?.delete(ws);

        //clean up document when last connection is closed
        if(connections.get(documentId)?.size === 0){
            connections.delete(documentId);
            documents.delete(documentId);
            console.log(`Document ${documentId} cleaned up`);
        }
    })

    //handle errors
    ws.on('error', (error) => {
        console.error(`WebSocket error ${error.message}`);
    })
})

//start the server
server.listen(PORT, HOST, () => {
    console.log(`Websocket server started at ws://${HOST}:${PORT}`);
    console.log(`HOST: ${HOST}`);
    console.log(`PORT: ${PORT}`);
    console.log(`URL: ws://${HOST}:${PORT}`);
    console.log(`Status: Ready for connections`);
    console.log('='.repeat(60));
})

//gracefully handle shutdown
const shutdown = () => {
    console.log(`\n\nShutting down ws-server...`);

    //close all the active connections
    let totalConnections = 0;
    connections.forEach((roomConnections) => {
        roomConnections.forEach((client) => {
            client.close();
            totalConnections++;
        })
    })

    console.log(`Closed ${totalConnections} active connection(s)`);

    server.close(()=>{
        console.log(`Server closed successfully`);
        process.exit(0);
    })
}

//register shutdown handlers
process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
process.on('uncaughtException', (error) => {
    console.error(`Uncaught Exception: ${error.message}`);
})
process.on('unhandledRejection', (reason, promise) => {
    console.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
})