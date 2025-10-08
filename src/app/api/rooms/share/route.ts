import { PrismaClient } from "@/generated/prisma";
import { getCurrentUserIdFromRequest } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest){

    try {
        
        const { roomCode, isPublic, allowedEmails } = await request.json();
        const userId = getCurrentUserIdFromRequest(request);

        //check if user has permission to share this room
        const room = await prisma.room.findUnique({
            where: {
                code: roomCode,
                participants: {
                    some: {
                        userId,
                        role: "host"
                    }
                }
            }
        });

        if(!room){
            return NextResponse.json({
                error: "Room not found or not authorized"
            }, {
                status: 404
            })
        }

        //generate share link and update room
        const shareLink = crypto.randomUUID();
        const updatedRoom = await prisma.room.update({
            where: { id: room.id },
            data: {
                shareLink,
                isPublic: isPublic ?? false,
                allowedEmails: allowedEmails ?? []
            }
        });

        return NextResponse.json({
            shareLink: `${process.env.NEXT_PUBLIC_APP_ULR}/rooms/join?link=${shareLink}`,
            roomCode: updatedRoom.code
        });
    } catch (error) {
        
        console.error("Error sharing room: ", error);
        return NextResponse.json({
            error: "Failed to share room"
        }, {
            status: 500
        })
    }finally {
        await prisma.$disconnect();
    }
}