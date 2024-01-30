import type { Config } from "drizzle-kit";

import { dbCredentials } from "./src/db/credentials";

export default {
  schema: "./src/db/schemas",
  out: "./src/db/migrations",
  driver: "turso",
  dbCredentials,
} satisfies Config;
