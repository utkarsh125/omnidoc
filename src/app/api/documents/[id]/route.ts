import { PrismaClient } from "@/generated/prisma";
import { getCurrentUserIdFromRequest } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    console.log("Params: ", params);

    const userId = getCurrentUserIdFromRequest(request);
    const documentId = params.id;
    console.log("User ID: ", userId);
    console.log("Document ID: ", documentId);

    //check if the document exists and the usr has access to it.
    const document = await prisma.document.findUnique({
      where: {
        id: documentId,
        OR: [
          { userId }, //usr owns the doc
          { isPublic: true }, //doc is public
          {
            collaborators: {
              some: {
                userId,
                acceptedAt: { not: null }, //user is an accepted collaborator
              },
            },
          },
        ],
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
              },
            },
          },
        },
        comments: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        versions: {
          orderBy: {
            versionNumber: "desc",
          },
          take: 10, //atleast 10 last versions
        },
      },
    });

    if (!document) {
      return NextResponse.json(
        { error: "Document not found or access denied" },
        { status: 404 }
      );
    }

    return NextResponse.json(document);
  } catch (error) {
    console.error("Error fetching document: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

//update a document
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = getCurrentUserIdFromRequest(request);
    const {id: documentId} = await params;
    const updateData = await request.json();

    //check if the user has permission to edit

    const document = await prisma.document.findFirst({
      where: {
        id: documentId,
        OR: [
          { userId },
          {
            collaborators: {
              some: {
                userId,
                role: { in: ["admin", "editor"] },
                acceptedAt: { not: null },
              },
            },
          },
        ],
      },
    });

    if (!document) {
      return NextResponse.json(
        { error: "Document not found or Permission denied" },
        { status: 404 }
      );
    }

    //create a version before updating the document if it is being changed

    if (updateData.content && updateData.content !== document.content) {
      const latestVersion = await prisma.documentVersion.findFirst({
        where: {
          documentId,
        },
        orderBy: {
          versionNumber: "desc",
        },
      });

      await prisma.documentVersion.create({
        data: {
          documentId,
          content: document.content,
          versionNumber: (latestVersion?.versionNumber || 0) + 1,
          createdBy: userId,
        },
      });
    }

    //update the docunment
    const updatedDocument = await prisma.document.update({
      where: {
        id: documentId,
      },
      data: {
        ...updateData,
        updatedAt: new Date(),
      },
      include: {
        images: true,
        collaborators: {
          include: {
            user: {
              select: {
                id: true,
                email: true,
                name: true,
              },
            },
          },
        },
      },
    });

    //log the update
    // console.log("Document updated: ", updatedDocument);

    await prisma.documentActivity.create({
      data: {
        documentId,
        userId,
        action: "edited",
        description: "Document content updated",
        metadata: {
          fieldsChanged: Object.keys(updateData),
          timestamp: new Date().toISOString(),
        },
      },
    });
    return NextResponse.json(updatedDocument);
  } catch (error) {

    console.error("Error updating document: ", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }finally{
    await prisma.$disconnect();
  }
}

//Delete doc
export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        
        const userId = getCurrentUserIdFromRequest(request);
        const { id: documentId } = await params;

        //check if the usr has permission to delete doc
        const document = await prisma.document.findFirst({
            where: {
                id: documentId,
                userId,
            }
        });

        if(!document){
            return NextResponse.json({
                error: "Document not found or Permission denied"
            }, {
                status: 404
            })
        }

        //delete the document
        await prisma.document.delete({
            where: {
                id: documentId,
            }
        });

        return NextResponse.json({
            message: "Document deleted successfully"
        }, {
            status: 200
        })
    } catch (error) {
        console.error("Error deleting document: ", error);
        return NextResponse.json({
            error: "Internal server error",
        }, {
            status: 500
        })
    } finally {
        await prisma.$disconnect();
    }
}