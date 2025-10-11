import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(request: NextRequest){

    try {
        
        const cookieStore = cookies();
        const token = (await cookieStore).get('token');

        if(!token){
            return NextResponse.json(
                {error: "Not authenticated"},
                {status: 401}
            )
        };

        //verify token
        const decoded = jwt.verify(token.value, process.env.JWT_SECRET!) as {
            userId: string;
            email: string;
        };

        //get user from database
        const user = await prisma.user.findUnique({
            where: {
                id: decoded.userId,
            }, select: {
                id: true,
                name: true,
                email: true,
            }
        })

        //check if user exists
        if(!user){
            return NextResponse.json(
                {error: "User not found"},
                {status: 404}
            )
        };

        return NextResponse.json(user)
    } catch (error) {
        console.error("Error fetching user details: ", error);
        return NextResponse.json(
            {error: "Internal server error"},
            {status: 500}
        )
    }
}