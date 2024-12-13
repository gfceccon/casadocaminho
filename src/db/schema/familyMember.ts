import {dbTimestamps} from "./utils";
import * as d from "drizzle-orm/pg-core";


export const familyRelationshipEnum = d.pgEnum("familyRelationship", [
    "Avó",
    "Avô",
    "Pai",
    "Mãe",
    "Filho",
    "Filha",
    "Neto",
    "Neta"
]);

export const genderEnum = d.pgEnum("gender", [
    "Masculino",
    "Feminino"
]);

export const familyMember = d.pgTable("members", {
    id: d.integer().primaryKey().generatedAlwaysAsIdentity(),
    name: d.text().notNull(),
    birthday: d.date({mode: "date"}).notNull(),
    relationship: familyRelationshipEnum(),
    gender: genderEnum(),
    head: d.boolean().default(false),
    ...dbTimestamps,
}, (t) => [
    d.uniqueIndex("family_member_type_idx").on(t.id),
])