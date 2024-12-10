"use server"
import {prisma} from "@/lib/prisma"

export async function getEventsFromDate(date: Date) {
    return prisma.event.findMany({
        where: {
            AND: {
                startDate: {
                    lte: date
                },
                endDate: {
                    gte: date
                }
            }
            
        }
    });
}