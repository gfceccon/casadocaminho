"use server"
import {db} from "@/db";
import {familyMember} from "@/db/schema/familyMember";

export async function insertFamilyMember() {
    return db.insert(familyMember).values({
        name: "John",
        gender: "Masculino",
        birthday: new Date(),
        relationship: "Pai",
    }).returning();
}

export async function getFamilyMembers() {
    return db.query.familyMember.findMany();
}