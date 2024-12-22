import { address } from "./address";
import { familyHead } from "./familyHead";
import { dbTimestamps } from "./utils";
import * as d from "drizzle-orm/pg-core";

export const family = d.pgTable("family", {
  id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
  active: d.boolean().default(true),
  code: d.text().notNull(),
  address: d.integer().references(() => address.id),
  headId: d.integer().notNull().references(() => familyHead.id),
  ...dbTimestamps,
}, (t) => [
  d.uniqueIndex("family_idx").on(t.id)
])