"use server"

import {db} from "@/db";
import {and, eq} from "drizzle-orm";
import {familyMember, family} from "@/db/schema/_schema";
import {notFound} from "next/navigation";
import {TFamily, TFamilyMember, TFamilyMemberInsert} from "@/db/zod";

export async function getFamily(code: string) {
    return db.query.family
        .findMany({
            where: (family, {eq}) => eq(family.code, code),
            with: {
                members: true
            }
        });
}

export async function addMember(member: TFamilyMemberInsert, familyCode?: string) {
    let _family: TFamily | undefined;
    if (familyCode) {
        _family = await db.query.family.findFirst({
            where: (family) => eq(family.code, familyCode),
        })
    } else {
        _family = (await db.insert(family).values({
            code: crypto.randomUUID().slice(0, 8),
        }).returning())[0]
    }
    ;
    if (_family?.id) {
        return db.insert(familyMember)
            .values({
                ...member,
                familyId: _family.id
            })
            .returning();
    } else {
        notFound();
    }
}

export async function updateMember(member: TFamilyMember & { familyId: number }) {
    return (
        await db.update(familyMember)
            .set(member)
            .where(
                and(
                    eq(familyMember.id, member.id),
                    eq(familyMember.familyId, member.familyId)
                )
            )
            .returning()
    );
}

export async function setHeadMember(memberId: number) {
    await db.update(familyMember)
        .set({
            head: false
        })
        .where(eq(familyMember.head, true))
    return db.update(familyMember)
        .set({head: true})
        .where(eq(familyMember.id, memberId))
        .returning();
}