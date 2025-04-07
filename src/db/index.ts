import { drizzle } from 'drizzle-orm/d1';
import { talks } from './schema';

export function createClient(db: D1Database) {
  return drizzle(db);
}

export type Talk = typeof talks.$inferSelect;
export type NewTalk = typeof talks.$inferInsert;

export { talks }; 