import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon("postgresql://neondb_owner:2jmWgiKet1Zh@ep-sparkling-wildflower-a4owzmyt.us-east-1.aws.neon.tech/divine-wall?sslmode=require");  
export const db = drizzle({ client: sql });
