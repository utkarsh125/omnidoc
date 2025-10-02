import { processDocxFile } from "@/lib/file-processing/mammoth-processor";
import path from "path";

async function testMammoth() {

    try {
        
        const filePath = path.join(process.cwd(), 'test.docx');

        console.log('Processing file...');
        const result = await processDocxFile(filePath);

        console.log('Processing complete');
        console.log('HTML Length: ', result.html.length);
        console.log('Images found:', result.images.length);

        console.log('HTML preview: ', result.html.substring(0, 500));

        //image info log
        result.images.forEach((img, index) => {
            console.log(`Image ${index+1}: `, {
                name: img.name,
                size: img.buffer.length,
                contentType: img.contentType,
            });
        });
    } catch (error) {
        console.error('Error processing file: ', error);
    }
}

testMammoth();