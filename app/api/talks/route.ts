import { createClient, talks } from '@/src/db';
import { desc } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const env = process.env as unknown as { DB: D1Database };
  
  try {
    const db = createClient(env.DB);
    const result = await db.select().from(talks).orderBy(desc(talks.createdAt));
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching talks:', error);
    return NextResponse.json({ error: 'Failed to fetch talks' }, { status: 500 });
  }
} 