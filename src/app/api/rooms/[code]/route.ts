import { PrismaClient } from "@/generated/prisma";
import { getCurrentUserIdFromRequest } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { code: string } }
) {
  try {
    const userId = getCurrentUserIdFromRequest(request);
    const code = params.code;

    // Try to find room by document ID first (for dashboard)
    let room = await prisma.room.findFirst({
      where: {
        documentId: code,
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
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // If not found by document ID, try by room code
    if (!room) {
      room = await prisma.room.findFirst({
        where: {
          code,
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
          createdBy: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
      });
    }

    if (!room) {
      return NextResponse.json(
        { error: "Room not found or access denied" },
        { status: 404 }
      );
    }

    return NextResponse.json(room);
  } catch (error) {
    console.error("Error fetching room:", error);
    return NextResponse.json(
      { error: "Failed to fetch room details" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
