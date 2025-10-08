import { PrismaClient } from "@/generated/prisma";
import { getCurrentUserIdFromRequest } from "@/lib/auth";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
    request: NextRequest,
    { params }: { params: { code: string} }
) {

    try {
        

        const userId = getCurrentUserIdFromRequest(request);

        const { code } = params;

        const room = await prisma.room.findUnique({
            where: {
                code,
                isActive: true,
            },
            include: {
                createdBy: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                },
                document: true,
                participants: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            }
                        }
                    }
                }
            }
        })

        if(!room){
            return NextResponse.json(
                { error: "room not found"},
                { status: 404}
            )
        }

        //check if user is a participant
        const isParticipant = room.participants.some(p => p.userId === userId);
        
        //if participant nto there or doc not public then
        if(!isParticipant && !room.document?.isPublic){
            return NextResponse.json({
                error: "You are not a participant of this room"
            }, {
                status: 403 //forbidden
            })
        }


        return NextResponse.json(room);
    } catch (error) {
        console.error('Error fetching room:', error);
        return NextResponse.json({
            error: "Failed to fetch room"
        }, {
            status: 500
        })
    }finally{
        await prisma.$disconnect();
    }
}