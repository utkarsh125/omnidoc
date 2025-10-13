import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();


export async function POST(request: NextRequest){

    try {
        

        const {email, password} = await request.json();

        if(!email || !password){
            return NextResponse.json({
                error: 'Missing required fields',
            }, {
                status: 400
            })
        }

        //find user
        const user = prisma.user.findUnique({
            where: {
                email
            }
        });

        if(!user){
            return NextResponse.json(
                {error: "Invalid email/password"},
                {status: 401}
            );
        }

        //verify the password
        const foundUser = await user;
        if (!foundUser || !foundUser.password) {
            return NextResponse.json(
                { error: "Invalid email/password" },
                { status: 401 }
            );
        }

        const isValidPass = await bcrypt.compare(password, foundUser.password);

        if(!isValidPass){
            return NextResponse.json({
                message: "Invalid email/password",
                status: 401
            })
        }

        //generate JWT token
        if (!process.env.JWT_SECRET) {
            return NextResponse.json({
                error: 'Server configuration error'
            }, {
                status: 500
            });
        }
        
        const token = jwt.sign({
            userId: foundUser.id,
            email: foundUser.email,
            name: foundUser.name,
        }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })

        const { password: _, ...userData } = foundUser;

        // Create response and set cookie
        const response = NextResponse.json({
            message: "Sign in successful",
            user: userData,
            token,
        }, {
            status: 200
        })

        // Set token as httpOnly cookie
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 7, // 7 days
            path: '/',
        })

        return response
    } catch (error) {

        console.error("Error signing in: ", error);
        return NextResponse.json({
            error: "Internal server error",
            
        }, {
            status: 500
        })
    } finally {
        await prisma.$disconnect();
    }
}