import { createClient } from '@/src/db';
import { drizzle } from 'drizzle-orm/d1';
import { migrate } from 'drizzle-orm/d1/migrator';
import { seed } from '@/src/db/seed';

export default {
  async fetch(request: Request, env: { DB: D1Database }) {
    try {
      // Get the database from environment
      const db = env.DB;

      if (!db) {
        throw new Error('Database not found in environment');
      }

      // Run migrations
      console.log('Running migrations...');
      const client = drizzle(db);
      await migrate(client, { migrationsFolder: './drizzle' });
      console.log('Migrations completed.');

      // Seed the database
      console.log('Seeding database...');
      await seed(db);
      return new Response('Setup completed successfully!');
    } catch (error) {
      console.error('Setup failed:', error);
      return new Response('Setup failed: ' + (error instanceof Error ? error.message : String(error)), { status: 500 });
    }
  },
}; 