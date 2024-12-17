import {dbTimestamps} from "./utils";
import * as d from "drizzle-orm/pg-core";
import {family} from "@/db/schema/family";
import {boolean} from "drizzle-orm/pg-core";
import {familyRelationships, genders} from "@/db/enum/familyMemberEnums";

export const familyRelationshipEnum = d.pgEnum("familyRelationship", familyRelationships);

export const genderEnum = d.pgEnum("gender", genders);

export const familyMember = d.pgTable("members", {
    id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
    code: d.text().notNull(),
    name: d.text().notNull(),
    birthday: d.date({mode: "date"}).notNull(),
    relationship: familyRelationshipEnum(),
    gender: genderEnum(),
    head: boolean().default(false),
    familyId: d.integer().notNull().references(() => family.id),
    ...dbTimestamps,
}, (t) => [
    d.uniqueIndex("family_member_type_idx").on(t.id),
])