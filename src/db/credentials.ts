import "dotenv/config";

export const dbCredentials = {
  url: process.env.TURSO_DB_URL!,
  authToken: process.env.TURSO_DB_AUTH_TOKEN!,
};
