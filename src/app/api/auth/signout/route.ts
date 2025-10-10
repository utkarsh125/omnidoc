import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    try {
        
        const response = NextResponse.json({
            message: "Sign out successful",
        }, {
            status: 200
        })

        // Clear the token cookie
        response.cookies.set('token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 0, // Expire immediately
            path: '/',
        })

        return response
    } catch (error) {
        console.error("Error signing out: ", error);
        return NextResponse.json({
            message: "Error signing out",
        }, {
            status: 500
        });
    }
}