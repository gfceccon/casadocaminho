"use server"
import {prisma} from "@/lib/prisma"

export async function getFamilies() {
    return await prisma.family.findMany();
}