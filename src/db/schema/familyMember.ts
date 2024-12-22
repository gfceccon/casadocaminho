import { dbTimestamps } from "./utils";
import * as d from "drizzle-orm/pg-core";
import { family } from "@/db/schema/family";
import { boolean } from "drizzle-orm/pg-core";
import { familyRelationships, genders } from "../enum/familyMemberEnums";

const familyRelationshipEnum = d.pgEnum("familyRelationship", familyRelationships);
const genderEnum = d.pgEnum("gender", genders);

export const familyMember = d.pgTable("member", {
  id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
  active: d.boolean().notNull().default(true),
  name: d.text().notNull(),
  birthday: d.date({ mode: "date" }).notNull(),
  relationship: familyRelationshipEnum(),
  gender: genderEnum(),
  head: boolean().default(false),
  familyId: d.integer().notNull().references(() => family.id),
  ...dbTimestamps,
}, (t) => [
  d.uniqueIndex("family_member_idx").on(t.id),
])
