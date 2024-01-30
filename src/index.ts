import { getUsers } from "./db/get-users";

async function printUsers() {
  const result = await getUsers(["id", "createdAt"]);
  console.log(result);
}

printUsers();
