import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

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
    
        return NextResponse.json({
            message: "User created succesfsfully",
            user,   
        }, {
            status: 201,
        });
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({
            message: "Error creating user",

        },  {
            status: 500, //INT_SERV_ERR
        })
    }

}