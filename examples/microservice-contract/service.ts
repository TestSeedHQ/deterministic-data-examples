export type User = {
  id: string;
  email: string;
  status: "active" | "disabled" | "pending";
};

export function validateUserContract(users: User[]) {
  for (const user of users) {
    if (!user.email.includes("@")) {
      throw new Error("User email is invalid");
    }
    if (!["active", "disabled", "pending"].includes(user.status)) {
      throw new Error("User status is not in the contract enum");
    }
  }
}
