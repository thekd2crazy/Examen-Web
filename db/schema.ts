import { pgTable, text, serial, timestamp, boolean } from 'drizzle-orm/pg-core'

export const articlesTable = pgTable('articles', {
  id: serial().primaryKey(),
  publishedAt: timestamp().defaultNow(),
  title: text().notNull(),
  content: text().notNull(),
  author: text().notNull(),
  post: boolean().default(false).notNull()
})