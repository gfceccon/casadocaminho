"use server"

import {db} from "@/db";
import {eq} from "drizzle-orm";

export async function getFamilies() {
    return db.query.family.findMany({
        with: {
            members: true
        }
    });
}

export async function getFamily(code: string) {
    return db.query.familyMember.findFirst({
        where: (member) => eq(member.code, code),
        with: {
            members: true
        }
    });
}