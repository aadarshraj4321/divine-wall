import { db } from '@/configs/db'; // Import the database instance
import { wallpapers } from '@/configs/Schema'; // Import your table schema
import { eq } from 'drizzle-orm'; // Use `eq` for comparison
import { NextRequest, NextResponse } from 'next/server'; // Import NextRequest and NextResponse

// POST handler
export async function POST(req: NextRequest) {
  const { id } = await req.json(); // Get wallpaper ID from the request body
  
  if (!id) {
    return NextResponse.json({ message: 'Wallpaper ID is required' }, { status: 400 });
  }

  try {
    // Get the current heart_likes value
    const currentWallpaper = await db
      .select()
      .from(wallpapers)
      .where(eq(wallpapers.id, id))
      .limit(1);

    if (currentWallpaper.length === 0) {
      return NextResponse.json({ message: 'Wallpaper not found' }, { status: 404 });
    }

    const currentLikes = currentWallpaper[0].heart_likes || 0;

    // Increment the likes by 1 and update
    await db
      .update(wallpapers)
      .set({ heart_likes: currentLikes + 1 })
      .where(eq(wallpapers.id, id));

    return NextResponse.json({ message: 'Like added successfully' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}

// Handle unsupported methods
export async function handle() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}
