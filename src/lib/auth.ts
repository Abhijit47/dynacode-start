import { db } from '@/drizzle/db';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { betterAuth } from 'better-auth/minimal';
import { openAPI } from 'better-auth/plugins';
import { tanstackStartCookies } from 'better-auth/tanstack-start';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg', // or "mysql", "sqlite"
  }),
  experimental: { joins: true },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [openAPI(), tanstackStartCookies()], // make sure this is the last plugin in the array
});
