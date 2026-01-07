import { expect, test } from "@playwright/test";
import { fetchUsers } from "../fetchData";

test("deterministic E2E failure with mixed mode", async ({ page }) => {
  const users = await fetchUsers();
  const firstUserJson = JSON.stringify(users[0]);
  const hasInvalidMarker = firstUserJson.includes("__invalid");

  await page.setContent(`
    <main>
      ${hasInvalidMarker ? '<div role="alert">Invalid user data</div>' : ""}
    </main>
  `);

  await expect(page.getByRole("alert")).toHaveText("Invalid user data");
});
