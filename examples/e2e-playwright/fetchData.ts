import { generationParams } from "./seed.config";

export async function fetchUsers() {
  const baseUrl = process.env.TESTSEED_URL;
  const seedId = process.env.TESTSEED_SEED_ID;
  const apiKey = process.env.TESTSEED_API_KEY;

  if (!apiKey || !baseUrl || !seedId) {
    throw new Error(
      "Missing TESTSEED_API_KEY, TESTSEED_URL, or TESTSEED_SEED_ID",
    );
  }

  const url = `${baseUrl}/api/seeds/${seedId}/generate`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(generationParams),
  });

  if (!res.ok) {
    throw new Error(`TestSeed request failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.users;
}
