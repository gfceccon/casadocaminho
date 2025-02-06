import z from "zod"
import { eventTypes } from "../enum/eventEnum";
export const ZodEvent = z.object({
  id: z.number(),
  name: z.string(),
  namea: z.string(),
  type: z.enum(eventTypes),
  startDate: z.date(),
  endDate: z.date(),
});

export const EventZodInsert = ZodEvent.omit({
  id: true
});

export const EventZodUpdate = ZodEvent.partial();

export const EventZodDelete = ZodEvent.partial().required({
  id: true
});