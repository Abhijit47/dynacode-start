// src/config/env.ts
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.url(),
  JWT_SECRET: z.string().min(32),
  NODE_ENV: z.enum(['development', 'production', 'test']),
});

const clientEnvSchema = z.object({
  VITE_APP_NAME: z.string(),
  VITE_API_URL: z.url(),
  VITE_AUTH0_DOMAIN: z.string(),
  VITE_AUTH0_CLIENT_ID: z.string(),
});

// Validate server environment
export const serverEnv = envSchema.parse(process.env);

// Validate client environment
export const clientEnv = clientEnvSchema.parse(import.meta.env);
