import { sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  uuid,
  varchar,
  timestamp,
  check,
  boolean,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable(
  "users",
  {
    id: uuid().primaryKey().defaultRandom(),
    email: varchar({ length: 256 }).notNull().unique(),
    name: varchar({ length: 255 }).notNull(),
    passwordHash: varchar("password_hash", { length: 500 }).notNull(),
    age: integer(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    updatedAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  },
  (table) => [
    check("age_check1", sql`${table.age} <= 120`),
    check("age_check2", sql`${table.age} >= 0`),
  ],
);

export const todosTable = pgTable("todos", {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  title: varchar({ length: 500 }).notNull(),
  description: varchar({ length: 1000 }),
  completed: boolean().default(false),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
