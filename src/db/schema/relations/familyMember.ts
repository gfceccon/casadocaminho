import {relations} from 'drizzle-orm';
import {family} from "@/db/schema/family";
import {familyMember} from "@/db/schema/familyMember";

export const familyMembersRelations = relations(family, ({many}) => ({
    members: many(familyMember),
}));

export const memberFamilyRelations = relations(familyMember, ({one}) => ({
    family: one(family, {
        fields: [familyMember.familyId],
        references: [family.id],
    }),
}));