import { dbTimestamps } from "../utils";
import * as pg from "drizzle-orm/pg-core";
import { eventTypes } from "../enum/eventEnum";
import { createSchemaFactory } from "drizzle-zod"

export const eventTypeEnum = pg.pgEnum("eventType", eventTypes);

export const events = pg.pgTable("event", {
  id: pg.integer().primaryKey().generatedAlwaysAsIdentity(),

  name: pg.text().notNull(),
  type: eventTypeEnum(),
  startDate: pg.date({ mode: "date" }),
  endDate: pg.date({ mode: "date" }),
  ...dbTimestamps,
}, (t) => [
  pg.uniqueIndex("event_type_idx").on(t.id),
])


const EventSchemaFactory = createSchemaFactory();
export const EventSchema = {
  insert: EventSchemaFactory.createInsertSchema(events),
  update: EventSchemaFactory.createUpdateSchema(events),
  select: EventSchemaFactory.createSelectSchema(events)
};