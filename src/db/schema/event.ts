import {dbTimestamps} from "./utils";
import * as d from "drizzle-orm/pg-core";


export const evenTypeEnum = d.pgEnum("eventType", [
    "Sopa",
    "Cesta de Alimentos",
    "Cesta de Natal",
    "Leite",
    "Cobertores",
    "Enxoval"
]);

export const events = d.pgTable("events", {
    id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: d.text().notNull(),
    type: evenTypeEnum(),
    startDate :d.date().defaultNow(),
    endDate: d.date().defaultNow(),
    ...dbTimestamps,
}, (t) => [
    d.uniqueIndex("event_type_idx").on(t.id),
])

