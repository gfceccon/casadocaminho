import { familyRelationships, genders } from "../enum/familyMemberEnums";
import * as d from "drizzle-orm/pg-core";

export const familyHeadRelationshipEnum = d.pgEnum("familyRelationship", familyRelationships);
export const genderHeadEnum = d.pgEnum("gender", genders);
