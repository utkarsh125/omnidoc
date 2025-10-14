import { PrismaClient } from "@/generated/prisma";
import { createAuthErrorResponse, getCurrentUserIdFromRequest } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest){

    try {
        const authResult = await getCurrentUserIdFromRequest(req);

        if(!authResult.userId){
            return createAuthErrorResponse(authResult);
        }

        const userId = authResult.userId;
        const { password } = await req.json();

        // Validate that password is provided
        if(!password){
            return NextResponse.json({
                error: "Password is required to delete account",
            }, { status: 400 });
        }

        // Fetch user with password
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            }, 
            select: {
                id: true,
                password: true,
                email: true,
            }
        });

        if(!user || !user.password){
            return NextResponse.json({
                error: "User not found",
            }, {
                status: 404,
            });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return NextResponse.json({
                error: "Invalid password",
            }, {
                status: 401,
            });
        }

        // Delete the user account
        await prisma.user.delete({
            where: {
                id: userId,
            }
        });

        return NextResponse.json({
            message: "Account deleted successfully",
        }, {
            status: 200,
        });

    } catch (error) {
        console.error("Error deleting account:", error);
        return NextResponse.json({
            error: "Internal server error",
        }, {
            status: 500,
        });
    } finally {
        await prisma.$disconnect();
    }

}