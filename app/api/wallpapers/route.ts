import { db } from '@/configs/db'; // Import your database configuration
import { tables } from '@/configs/Schema'; // Import your schema
import { NextResponse } from 'next/server';

// Fetch wallpapers from the database
export async function GET() {
  try {
    // Query wallpapers from the database
    const wallpapers = await db
      .select()
      .from(tables.wallpapers); // Query all wallpapers

    if (wallpapers.length === 0) {
      return NextResponse.json({ message: 'No wallpapers found' }, { status: 404 });
    }

    // Return the fetched wallpapers as JSON
    return NextResponse.json(wallpapers);
  } catch (error) {
    console.error('Error fetching wallpapers:', error);
    return NextResponse.json({ error: 'Failed to fetch wallpapers' }, { status: 500 });
  }
}


