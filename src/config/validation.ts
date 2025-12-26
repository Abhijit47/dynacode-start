// src/config/validation.ts
const requiredServerEnv = ['DATABASE_URL', 'JWT_SECRET'] as const;

const requiredClientEnv = ['VITE_APP_NAME', 'VITE_API_URL'] as const;

// Validate on server startup
for (const key of requiredServerEnv) {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

// Validate client environment at build time
for (const key of requiredClientEnv) {
  if (!import.meta.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}
