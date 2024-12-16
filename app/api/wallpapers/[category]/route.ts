import { db } from '@/configs/db';  // Your database connection
import { wallpapers } from '@/configs/Schema';  // Your schema
import { NextResponse } from 'next/server';  // Use Next.js server response helpers
import { sql } from 'drizzle-orm';  // Import sql helper from Drizzle ORM

// Named export for GET method
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);  // Extract search params from URL
  const category = searchParams.get('category');  // Get the category parameter from the URL

  // Check if the category parameter is provided
  if (!category || typeof category !== 'string') {
    return NextResponse.json({ error: 'Category is required' }, { status: 400 });
  }

  try {
    // Use sql helper to create an equality condition
    const result = await db
      .select()
      .from(wallpapers)
      .where(sql`${wallpapers.category} = ${category}`);  // Use sql helper for comparison

    // Check if any results were found
    if (result.length === 0) {
      return NextResponse.json({ message: 'No wallpapers found for this category' }, { status: 404 });
    }

    // Return the fetched wallpapers as JSON
    return NextResponse.json(result);
  } catch (error) {
    console.error('Failed to fetch wallpapers by category', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
