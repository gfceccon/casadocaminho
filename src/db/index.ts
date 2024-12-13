import {drizzle} from 'drizzle-orm/node-postgres';
//import * as postgres from "pg"
import {configDotenv} from "dotenv"
import * as schema from "@/db/schema/_schema"
import {InferSelectModel} from "drizzle-orm";
import { Pool } from "pg";

configDotenv();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const db = drizzle({schema: schema, client: pool});

export type FamilyMemberSelect = InferSelectModel<typeof schema.familyMember>