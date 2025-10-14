import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { getCurrentUserIdFromRequest, createAuthErrorResponse } from "@/lib/auth";

const prisma = new PrismaClient();

export async function PATCH(req: NextRequest){

    try {
        

        const authResult = await getCurrentUserIdFromRequest(req);

        if(!authResult.userId){
            return createAuthErrorResponse(authResult);
        }

        const userId = authResult.userId;

        const { currentPassword, newPassword } = await req.json();

        //validate input 

        if(!currentPassword || !newPassword){
            return NextResponse.json({
                error: "Current password and new password are required",
            }, { status: 400 })
        };

        //Todo: validate new pass strength sometime later./

        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            }, select: {
                id: true,
                password: true,
            }
        });

        if(!user || !user.password){
            return NextResponse.json({
                error: "User not found",
            }, {
                status: 404,
            });
        }

        //verify current password
        const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
        if(!isPasswordValid){
            return NextResponse.json({
                error: "Invalid current password",
            }, {
                status: 401,
            })
        };

        //check if the new pass is same as curr
        if(newPassword === currentPassword){
            return NextResponse.json({
                error: "New password cannot be the same as the current password",
            }, {
                status: 400,
            })
        };

        //hash new pass
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

        //update pass in db
        await prisma.user.update({
            where: {
                id: userId,
            }, 
            data: {
                password: hashedPassword,
            }
        });

        return NextResponse.json({
            message: "Password changed successfully",
        }, {
            status: 200,
        });
    } catch (error) {
        console.error("Error changing password:", error);
        return NextResponse.json({
            error: "Internal server error",
        }, {
            status: 500,
        });
    }finally {
        await prisma.$disconnect();
    }
    
}