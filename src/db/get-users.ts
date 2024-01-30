import { pickFromObject } from "../lib/pick-from-object";
import { db } from "./db";
import { UserColumns, userColumns, users } from "./schemas/user";

export async function getUsers<T extends (keyof UserColumns)[]>(
  fields: T,
  limit?: number,
  offset?: number
) {
  const filter = pickFromObject(userColumns, fields);
  return db.select(filter).from(users).limit(limit).offset(offset);
}
