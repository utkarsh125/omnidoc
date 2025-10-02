import mammoth from 'mammoth';

export interface MammothResult {
  html: string;
  images: Array<{
    name: string;
    buffer: Buffer;
    contentType: string;
  }>;
}

export async function processDocxFile(filePath: string): Promise<MammothResult> {
  try {
    // Convert .docx to HTML with image conversion
    const result = await mammoth.convertToHtml(
      { path: filePath },
      {
        convertImage: mammoth.images.imgElement(function(image) {
          return image.read().then(function(imageBuffer) {
            return {
              src: `data:${image.contentType};base64,${imageBuffer.toString('base64')}`,
              alt: ''
            };
          });
        })
      }
    );
    
    // Extract images from the HTML (base64 encoded)
    const imageMatches = result.value.match(/data:([^;]+);base64,([^"]+)/g) || [];
    const images = imageMatches.map((match, index) => {
      const [, contentType, base64Data] = match.match(/data:([^;]+);base64,([^"]+)/) || [];
      return {
        name: `image-${index + 1}`,
        buffer: Buffer.from(base64Data, 'base64'),
        contentType: contentType || 'image/jpeg'
      };
    });
    
    return {
      html: result.value,
      images
    };
  } catch (error) {
    throw new Error(`Failed to process .docx file: ${(error as Error).message}`);
  }
}