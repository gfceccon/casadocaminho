import * as d from "drizzle-orm/pg-core"

export const address = d.pgTable("address", {
  id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
  cep: d.text().notNull(),
  street: d.text(),
  number: d.text(),
  complement: d.text(),
  phone: d.text()
}, (t) => [
  d.uniqueIndex("address_idx").on(t.id)
])