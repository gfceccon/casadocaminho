import {familyRelationships, genders} from "@/db/enum/familyMemberEnums";
import {eventTypes} from "@/db/enum/eventEnums";
import * as zod from "zod";


/* eslint-disable */

export const ZFamilyMember = zod.object({
    id: zod.number().int(),
    code: zod.string(),
    name: zod.string(),
    birthday: zod.date(),
    relationship: zod.enum(familyRelationships),
    gender: zod.enum(genders),
    head: zod.boolean().default(false),
})
export const ZFamilyMemberComplete = ZFamilyMember.extend({familyId: zod.number().nullish()})
export const ZFamilyMemberInsert = ZFamilyMember.omit({id: true});
export const ZFamilyMemberNewFamily = ZFamilyMember.extend({familyCode: zod.string()}).omit({id: true});

export type TFamilyMember = zod.infer<typeof ZFamilyMember>;
export type TFamilyMemberComplete = zod.infer<typeof ZFamilyMemberComplete>;
export type TFamilyMemberInsert = zod.infer<typeof ZFamilyMemberInsert>;

export const ZFamily = zod.object({
    id: zod.number().int(),
    code: zod.string(),
})
export const ZFamilyComplete = ZFamily.extend({
    members: zod.lazy(() => ZFamilyMember.array()),
})
export type TFamily = zod.infer<typeof ZFamily>;
export type TFamilyComplete = zod.infer<typeof ZFamilyComplete>;

export const TFamilyMemberRelationships = zod.enum(familyRelationships);
export const TFamilyMemberGenders = zod.enum(genders);
export const TEventTypes = zod.enum(eventTypes);

/* eslint-enable */