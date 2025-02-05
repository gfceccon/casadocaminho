import * as t from "drizzle-orm/pg-core";

export const dbTimestamps = {
    updated_at: t.timestamp().$onUpdateFn(() => new Date()),
    created_at: t.timestamp().defaultNow().notNull(),
}