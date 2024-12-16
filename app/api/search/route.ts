import { db } from '@/configs/db';
import { tables } from '@/configs/Schema';
import { or, ilike } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    // Log the search query to the search_logs table
    await db.insert(tables.searchLogs).values({
      query,
    });

    // Fetch wallpapers where title or category_id contains the query string (case-insensitive match)
    const wallpapers = await db
      .select()
      .from(tables.wallpapers)
      .where(
        or(
          ilike(tables.wallpapers.title, `%${query}%`),
          ilike(tables.wallpapers.category, `%${query}%`)  // Correct column name here
        )
      )
      .limit(10); // Limit results to 10 for performance

    // Return the matching wallpapers
    if (wallpapers.length === 0) {
      return NextResponse.json({ message: 'No wallpapers found' });
    }

    return NextResponse.json(wallpapers);
  } catch (error) {
    console.error('Error during search:', error);
    return NextResponse.json({ error: 'An error occurred while searching' }, { status: 500 });
  }
}
