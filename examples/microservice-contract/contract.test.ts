import { fetchUsers } from "./fetchData";
import { validateUserContract } from "./service";

test("users match the contract schema", async () => {
  const users = await fetchUsers();

  validateUserContract(users);
});
