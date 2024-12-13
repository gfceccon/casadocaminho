import {dbTimestamps} from "./utils";
import {familyMember} from "./familyMember";
import * as d from "drizzle-orm/pg-core";

export const family = d.pgTable("family", {
    id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
    active: d.boolean().default(true),
    head: d.integer().references(() => familyMember.id),
    ...dbTimestamps,
}, (t) => [
    d.uniqueIndex("family_idx").on(t.id),
])