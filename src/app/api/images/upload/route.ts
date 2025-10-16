import { PrismaClient } from '@/generated/prisma';
import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

//Cloudinary Config
export async function POST(request: NextRequest){

    try {
        

        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    
        //todo: get file from formData
        const formData = await request.formData();
        const file = formData.get('file') as File;
        const documentId = formData.get('documentId') as string;
    
        //convert file to to buffer
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
    
        //upload image to cloudinary, base64 conversion needed 
        const uploadResponse = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: 'documents' },
                (error, result) => {
                    if (error) reject(error);
                    else resolve(result);
                }
            ).end(buffer);
        }) as any;
    
        //uploadResponse contains these things
        //secure_url
        //public_id
        //width
        //height
        //format
        //file_size
    
        //save image record to db
        const imageRecord = await prisma.documentImage.create({
            data: {
                documentId: documentId,
                fileName: uploadResponse.public_id,
                originalName: file.name,
                fileUrl: uploadResponse.secure_url,
                fileSize: uploadResponse.bytes || file.size,
                width: uploadResponse.width,
                height: uploadResponse.height,
                mimeType: `image/${uploadResponse.format}`
            }
        })

        return NextResponse.json(imageRecord);
    } catch (error) {
        console.error("Error uploading image: ", error);
        return NextResponse.json(
            {error: "Failed to upload image"},
            {status: 500}
        );
    }
}