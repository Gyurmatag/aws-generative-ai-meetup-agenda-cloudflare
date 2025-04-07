import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: "e4cea918-1946-4582-be1f-63682e977e2e",
    token: process.env.CLOUDFLARE_API_TOKEN!,
  },
} satisfies Config; 