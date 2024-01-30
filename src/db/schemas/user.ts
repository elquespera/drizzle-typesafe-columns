import { getTableColumns, sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("user", {
  id: text("id").primaryKey(),
  username: text("username").notNull(),
  email: text("email"),
  image: text("image"),
  createdAt: integer("created_at", { mode: "timestamp" })
    .default(sql`(strftime('%s', 'now'))`)
    .notNull(),
});

export const userColumns = getTableColumns(users);
export type UserColumns = typeof userColumns;
