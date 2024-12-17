"use server"

import {db} from "@/db";
import {gte, lte, and} from "drizzle-orm";

import {events} from "@/db/schema/event";

export async function getEventsFromDate(date: Date) {
    return db.select().from(events)
        .where(and(
            gte(events.startDate, date),
            lte(events.endDate, date)
        ));
}