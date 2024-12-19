// // app/api/latest-wallpapers/route.ts
// import { NextResponse } from 'next/server';
// import { desc } from 'drizzle-orm';
// import { db } from '@/configs/db';
// import { wallpapers } from '@/configs/Schema';

// export async function GET() {
//   try {
//     const latestWallpapers = await db
//       .select()
//       .from(wallpapers)
//       .orderBy(desc(wallpapers.created_at))
//       .limit(20);

//     return NextResponse.json(latestWallpapers);
//   } catch (error) {
//     console.error('Error fetching latest wallpapers:', error);
//     return NextResponse.json(
//       { error: 'Failed to fetch latest wallpapers' },
//       { status: 500 }
//     );
//   }
// }









import { NextResponse } from 'next/server';
import { desc } from 'drizzle-orm';
import { db } from '@/configs/db';
import { wallpapers } from '@/configs/Schema';

export async function GET() {
  try {
    const latestWallpapers = await db
      .select({
        id: wallpapers.id,
        title: wallpapers.title,
        image_url: wallpapers.image_url,
        category: wallpapers.category,
        created_at: wallpapers.created_at
      })
      .from(wallpapers)
      .orderBy(desc(wallpapers.created_at))
      .limit(20);

    // Convert to the expected Wallpaper type format
    const formattedWallpapers = latestWallpapers.map(wallpaper => ({
      id: String(wallpaper.id), // Convert to string to match existing type
      title: wallpaper.title,
      image_url: wallpaper.image_url,
      category: wallpaper.category,
      resolution: '4K' // Default resolution since it's not in the database
    }));

    return NextResponse.json(formattedWallpapers);
  } catch (error) {
    console.error('Error fetching latest wallpapers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch latest wallpapers' },
      { status: 500 }
    );
  }
}