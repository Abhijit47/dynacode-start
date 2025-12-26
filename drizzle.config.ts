import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env.local', override: true, quiet: true }); // or .env.local

export default defineConfig({
  schema: ['./src/drizzle/schemas.ts'],
  out: './src/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
