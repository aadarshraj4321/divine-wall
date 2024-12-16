import { Config } from 'drizzle-kit';  // Import Drizzle Kit Config

const config: Config = {
  schema: './configs/schema.ts',  // Ensure the path is correct (use .ts if using TypeScript)
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? 'postgresql://neondb_owner:2jmWgiKet1Zh@ep-sparkling-wildflower-a4owzmyt.us-east-1.aws.neon.tech/divine-wall?sslmode=require', 
    // Use an environment variable or default value
  },
};

export default config;
