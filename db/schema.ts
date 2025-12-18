
import { pgTable, text, serial, timestamp, boolean } from 'drizzle-orm/pg-core'

export const reservationsTable = pgTable('reservations', {
  id: serial().primaryKey(),
  reserdedAt: timestamp().defaultNow(),
  name_reservation: text().notNull(),
  phone_number: text().notNull(),
  countpeople: text().notNull(),
  date : text().notNull(),
  reserved: boolean().default(false).notNull()
})