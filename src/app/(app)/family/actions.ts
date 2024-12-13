"use server"
import {prisma} from "@/lib/prisma"
import {FamilyMemberSelect} from "@/db";

export async function getFamilies() {
    return await prisma.familyMember.findMany();
}