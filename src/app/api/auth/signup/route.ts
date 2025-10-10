import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request: NextRequest){

    try {
        

        const { 
            name,
            email,
            password
        } = await request.json();
    
        //validate input
        if(!name || !email || !password) {
            return NextResponse.json({
                error: "Missing required fields",
            }, {
                status: 400,
            })
        }
    
        const existingUser = await prisma.user.findUnique({
            where: {
                email
            }
        });
    
        if(existingUser){
            return NextResponse.json({
                error: "User already exists",
            }, {
                status: 409,
            })
        };
    
        //Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
    
        //create user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })

        //generate JWT token for immediate login
        const token = jwt.sign({
            userId: user.id,
            email: user.email,
            name: user.name,
        }, process.env.JWT_SECRET || 'somesecretkeynig', {
            expiresIn: '7d'
        })

        // Create response and set cookie
        const response = NextResponse.json({
            message: "User created successfully",
            user,
            token,
        }, {
            status: 201,
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
        console.error("Error creating user:", error);
        return NextResponse.json({
            message: "Error creating user",

        },  {
            status: 500, //INT_SERV_ERR
        })
    } finally {
        await prisma.$disconnect();
    }

}