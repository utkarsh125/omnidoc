import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { getCurrentUserIdFromCookie, getCurrentUserIdFromRequest } from "@/lib/auth";

const prisma = new PrismaClient();

export async function GET(request: NextRequest){
    try {
        
        const userId = getCurrentUserIdFromRequest(request); 

        const documents = await prisma.document.findMany({
            where: {userId},
            orderBy: {
                updatedAt: "desc",
            },
            include: {
                images: true,
                collaborators: {
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
        });

        return NextResponse.json(documents); 
    } catch (error) {
        console.error("Error fetching documents: ", error);
        return NextResponse.json({
            message: "Error fetching documents",
        }, {status: 500});
    } finally{
        await prisma.$disconnect();
    }
}

//Create a new document
//TODO: Document locking
export async function POST(request: NextRequest){

    try {
        
        const userId = getCurrentUserIdFromRequest(request);

        const { title = "Untitled", content = "", isPublic = false, tags = [] } = await request.json();

        const document = await prisma.document.create({
            data: {
                title,
                content,
                userId,
                isPublic,
                tags
            },
            include: {
                images: true,
                collaborators: {
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
        });


        return NextResponse.json(document);
    } catch (error) {
        console.error("Error creating document: ", error);
        return NextResponse.json({
            error: "Failed to create document",
        }, {status: 500});
    } finally{
        await prisma.$disconnect();
    }
}
