import {relations} from "drizzle-orm";
import {events} from "@/db/schema/event";
import {familyMember} from "@/db/schema/familyMember";
import * as d from "drizzle-orm/pg-core";


export const attendance = d.pgTable(
    'attendance',
    {
        memberId: d.integer('member_id')
                  .notNull()
                  .references(() => familyMember.id),
        eventId: d.integer('events_id')
                 .notNull()
                 .references(() => events.id),
    },
    (t) => [
        d.primaryKey({columns: [t.memberId, t.eventId]}),
    ],
);

export const memberAttendances = relations(familyMember, ({many}) => ({
    membersToEvents: many(attendance)
}))

export const eventAttendances = relations(familyMember, ({many}) => ({
    eventsToMembers: many(attendance)
}))

export const attendancesRelations = relations(attendance, ({ one }) => ({
    event: one(events, {
        fields: [attendance.eventId],
        references: [events.id],
    }),
    member: one(familyMember, {
        fields: [attendance.memberId],
        references: [familyMember.id],
    }),
}));