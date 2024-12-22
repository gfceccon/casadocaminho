import { dbTimestamps } from "./utils";
import * as d from "drizzle-orm/pg-core";
import { familyRelationships, genders } from "../enum/familyMemberEnums";

const familyHeadRelationshipEnum = d.pgEnum("familyRelationship", familyRelationships);
const genderHeadEnum = d.pgEnum("gender", genders);

export const familyHead = d.pgTable("head", {
  id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
  active: d.boolean().notNull().default(true),
  name: d.text().notNull(),
  birthday: d.date({ mode: "date" }).notNull(),
  relationship: familyHeadRelationshipEnum(),
  gender: genderHeadEnum(),
  ...dbTimestamps,
}, (t) => [
  d.uniqueIndex("family_head_idx").on(t.id),
])