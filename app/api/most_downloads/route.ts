import { NextResponse } from 'next/server';
import { eq, sql } from 'drizzle-orm';
import { wallpapers } from '@/configs/Schema';
import { db } from '@/configs/db';



export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: 'Wallpaper ID is required' }, { status: 400 });
    }

    // Increment the downloads counter for the wallpaper
    const result = await db
      .update(wallpapers)
      .set({
        downloads: sql`${wallpapers.downloads} + 1`,
      })
      .where(eq(wallpapers.id, id))
      .returning({ downloads: wallpapers.downloads });

    return NextResponse.json({ 
      success: true, 
      downloads: result[0]?.downloads 
    });
  } catch (error) {
    console.error('Download tracking error:', error);
    return NextResponse.json({ error: 'Failed to track download' }, { status: 500 });
  }
}
