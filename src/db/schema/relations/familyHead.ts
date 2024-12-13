import {relations} from "drizzle-orm";
import {familyMember} from "@/db/schema/familyMember";
import {family} from "@/db/schema/family";


export const familyHeadRelations = relations(family, ({ one }) => ({
    head: one(familyMember, { fields: [family.head], references: [familyMember.id] }),
}));