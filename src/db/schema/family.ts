import {dbTimestamps} from "./utils";
import * as d from "drizzle-orm/pg-core";

export const family = d.pgTable("family", {
    id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
    active: d.boolean().default(true),
    code: d.text().notNull(),
    ...dbTimestamps,
}, (t) => [
    d.uniqueIndex("family_idx").on(t.id),
])