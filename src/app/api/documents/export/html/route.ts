//This endpoint handles the export of tiptap-json to html

//Currently, the editor saves the content as tiptap-json and stores it in db
//I need something that is server-side and can generate more complex html files.
//But this is purely a server-side operation and will require internet connection.
//do I include options for client-side shit?
//todo: THINK.

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { html, title } = await request.json(); // tiptap-json and title fetched from request body

    if (!html) {
      return NextResponse.json(
        { error: "No HTML content provided" },
        { status: 400 }
      );
    }

    //create a complete html doc
    const fullHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title || "Document"}</title>
        <style>
        </style>
        </head>
        <body>
            ${html}
        </body>
        </html>
        `;

        //return the html file w/ appropriate headers

        return new NextResponse(fullHtml, {
            status: 200,
            headers: {
                'Content-Type': 'text/html',
                'Content-Disposition': `attachment; filename="${title || 'document'}.html"`,
      },
    });
  } catch (error) {
    console.error("Error exporting HTML:", error);
    return NextResponse.json(
      { error: "Failed to export HTML" },
      { status: 500 }
    );
  }
}
