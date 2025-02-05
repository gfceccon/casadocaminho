import {dbTimestamps} from "../utils";
import * as d from "drizzle-orm/pg-core";
import {eventTypes} from "./enum/eventEnum";

export const eventTypeEnum = d.pgEnum("eventType", eventTypes);

export const events = d.pgTable("event", {
    id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: d.text().notNull(),
    type: eventTypeEnum(),
    startDate: d.date({mode: "date"}).defaultNow(),
    endDate: d.date({mode: "date"}).defaultNow(),
    ...dbTimestamps,
}, (t) => [
    d.uniqueIndex("event_type_idx").on(t.id),
])

