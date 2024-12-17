import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import {configDotenv} from "dotenv";

configDotenv()

export default defineConfig({
    schema: './src/db/schema/_schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        ssl: false,
    },
});