import { PrismaClient } from "@/generated/prisma";
import { getCurrentUserIdFromRequest, createAuthErrorResponse } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest){

    try {
        

        const { roomCode } = await request.json();

        const authResult = getCurrentUserIdFromRequest(request);
        
        if (!authResult.userId) {
            return createAuthErrorResponse(authResult);
        }
        
        const userId = authResult.userId;

        //find room and user participation
        const room = await prisma.room.findFirst({
            where: {
                code: roomCode,
            }, include: {
                participants: true,
            }
        });

        if(!room){
            return NextResponse.json({
                error: "Room not found"
            }, {
                status: 404,
            })
        };

        //remove users from room
        await prisma.roomUser.deleteMany({
            where: {
                roomId: room.id,
                userId,
            }
        });

        //if this was the last participant and not the host, cleanup the room
        const remainingParticipants = room.participants.filter(p => p.userId !== userId); //not the host
        if(remainingParticipants.length === 0){
            await prisma.room.update({
                where: { id: room.id },
                data: { isActive: false }
            });
        }

        return NextResponse.json({
            message: "You have left the room"
        }, {
            status: 200,
        });


    } catch (error) {
        
        console.error("Error leaving the room: ", error);
        return NextResponse.json({
            error: "Failed to leave the room"
        }, {
            status: 500, 
        })
    }finally{
        await prisma.$disconnect();
    }
}