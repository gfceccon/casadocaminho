import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import {configDotenv} from "dotenv";
configDotenv()

console.log(process.env.DATABASE_DRIZZLE_URL);

export default defineConfig({
    schema: './src/db/schema/_schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_DRIZZLE_URL!,
        ssl: false,
    },
});