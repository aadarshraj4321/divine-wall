import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const imageUrl = url.searchParams.get('url');

  if (!imageUrl) {
    return NextResponse.json({ error: 'No image URL provided' }, { status: 400 });
  }

  try {
    // Fetch the image from the external URL
    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch the image');
    }

    const contentType = response.headers.get('Content-Type') || 'application/octet-stream';
    const imageBuffer = await response.arrayBuffer();  // Get the image as a binary buffer

    // Set headers to force download
    const headers = new Headers();
    headers.set('Content-Disposition', 'attachment; filename="image.jpg"');
    headers.set('Content-Type', contentType);

    // Return the image as a response with proper headers
    return new NextResponse(imageBuffer, {
      status: 200,
      headers,
    });
  } catch (error: unknown) {
    // Type assertion to 'Error'
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      // In case the error is not an instance of Error, handle it as unknown
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
