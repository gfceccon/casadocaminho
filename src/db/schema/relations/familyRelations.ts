import { relations } from 'drizzle-orm';
import { family } from "@/db/schema/family";
import { familyMember } from "@/db/schema/familyMember";
import { familyHead } from '../familyHead';
import { address } from '../address';

export const familyMembersRelations = relations(family, ({ many }) => ({
  members: many(familyMember),
}));

export const memberFamilyRelations = relations(familyMember, ({ one }) => ({
  family: one(family, {
    fields: [familyMember.familyId],
    references: [family.id],
  }),
}));

export const familyHeadRelations = relations(family, ({ one }) => ({
  head: one(familyHead),
}));

export const familyAddressRelations = relations(family, ({ one }) => ({
  address: one(address)
}))