import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    try {
        

        //in a stateless JWT setup, the signout is handled client-side
        //TODO: token blacklisting (if needed)

        return NextResponse.json({
            message: "Sign out successful",
        }, {
            status: 200
        })
    } catch (error) {
        console.error("Error signing out: ", error);
        return NextResponse.json({
            message: "Error signing out",
        }, {
            status: 500
        });
    }
}