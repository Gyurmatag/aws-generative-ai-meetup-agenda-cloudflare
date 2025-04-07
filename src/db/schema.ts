import { sql } from "drizzle-orm";
import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const talks = sqliteTable("talks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  time: text("time").notNull(),
  title: text("title").notNull(),
  speaker: text("speaker"),
  iconName: text("icon_name").notNull(),
  iconColor: text("icon_color").notNull(),
  current: integer("current", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
}); 