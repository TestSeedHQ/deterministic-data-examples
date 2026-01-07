import { fetchUsers } from "./fetchData";

test("users list is deterministic", async () => {
  const users = await fetchUsers();

  expect(users[0].email).toBe("alice@example.com");
  expect(users).toHaveLength(10);
});
