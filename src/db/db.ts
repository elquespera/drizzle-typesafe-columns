import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { dbCredentials } from "./credentials";
import { schema } from "./schema";

const client = createClient(dbCredentials);

export const db = drizzle(client, { schema });
