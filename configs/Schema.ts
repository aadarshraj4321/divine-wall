import { pgTable, serial, text, varchar, timestamp } from 'drizzle-orm/pg-core';

// Define the wallpapers table (with category as a simple string field)
export const wallpapers = pgTable('wallpapers', {
  id: serial('id').primaryKey(),            // Unique identifier for each wallpaper
  category: varchar('category', { length: 255 }).notNull(), // Category as a string (e.g., 'Ram', 'Krishna', etc.)
  image_url: varchar('image_url', { length: 500 }).notNull(), // The S3 URL for the wallpaper image
  title: varchar('title', { length: 255 }).notNull(),         // Title of the wallpaper
  description: text('description'),            // Optional description for the wallpaper
  created_at: timestamp('created_at').defaultNow(), // Auto-generated timestamp when wallpaper is created
});


// Define the search_logs table (optional)
export const searchLogs = pgTable('search_logs', {
  id: serial('id').primaryKey(),              // Unique identifier for each search log
  query: varchar('query', { length: 255 }).notNull(), // The search query string
  searched_at: timestamp('searched_at').defaultNow(), // Timestamp of when the search was performed
});

// Export the tables for later use
export const tables = { wallpapers, searchLogs };
