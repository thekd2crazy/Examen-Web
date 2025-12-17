import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const wikisTable = pgTable('wikis', {
  id: uuid().defaultRandom().primaryKey(),
  title: text().notNull(),
  done: boolean().default(false).notNull(),
})