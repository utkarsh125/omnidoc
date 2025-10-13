import { PrismaClient } from "@/generated/prisma";
import { getCurrentUserIdFromRequest, createAuthErrorResponse } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest){

    try {
        

        const { shareLink, roomCode, email } = await request.json();

        const authResult = getCurrentUserIdFromRequest(request);
        
        if (!authResult.userId) {
            return createAuthErrorResponse(authResult);
        }
        
        const userId = authResult.userId;

        //find room by either shareLink or roomCode
        const room = await prisma.room.findFirst({
            where: {
                OR: [
                    { shareLink: shareLink },
                    { code: roomCode }
                ],
                isActive: true
            }, 
            include: {
                participants: true
            }
        });

        //check if room is found
        if(!room){
            return NextResponse.json({
                error: "Room not found"
            }, {
                status: 404
            })
        }

        //check if user is already a participant
        if(room.participants.some(p => p.userId === userId)){
            return NextResponse.json({
                error: "You are already a participant of this room"
            }, {
                status: 400
            })
        }

        //check access permissions if joining via shareLink
        if(shareLink && !room.isPublic){
            const userEmail = email; //TODO: get this from auth (might need to update authlogic)
            if(!room.allowedEmails.includes(userEmail)){
                return NextResponse.json(
                    { error: "You are not authorized to join this room" },
                    { status: 403 } 
                );
            }
        }

        //add user to room
        const participant = await prisma.roomUser.create({
            data: {
                roomId: room.id,
                userId,
                role: "participant"
            }
        });

        return NextResponse.json({
            roomCode: room.code,
            role: participant.role
        })

    } catch (error) {
        console.error("Error joining room: ", error);
        return NextResponse.json({
            error: "Failed to join room"
        }, {
            status: 500
        })
    }finally {
        await prisma.$disconnect();
    }
}