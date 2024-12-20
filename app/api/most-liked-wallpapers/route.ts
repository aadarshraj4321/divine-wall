import { db } from '@/configs/db'; // Import the database instance
import { wallpapers } from '@/configs/Schema'; // Import your table schema
import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from 'drizzle-orm'; // Import sql helper

// Export the GET method for fetching most liked wallpapers
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Querying for the most liked wallpapers with Drizzle ORM
    const wallpapersData = await db
      .select()
      .from(wallpapers)
      .orderBy(wallpapers.heart_likes, sql`DESC`)
      .limit(10); // Limit the results to 10 wallpapers

    return res.status(200).json(wallpapersData); // Return the results
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
}
