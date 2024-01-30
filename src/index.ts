import { db } from "./db/db";
import { users } from "./db/schemas/user";

async function printUsers() {
  const result = await db.select().from(users);
  console.log(result);
}

printUsers();
