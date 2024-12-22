import {drizzle} from 'drizzle-orm/node-postgres';
import {configDotenv} from "dotenv"
import * as schema from "@/db/schema"
import { Pool } from "pg";

configDotenv();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const db = drizzle({schema: schema, client: pool});