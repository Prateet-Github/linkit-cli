import { apiRequest } from "../services/api.js";
import { getConfig } from "../config/store.js";

type MeResponse = {
  user: {
    id: string;
    email: string;
  };
};

export async function whoamiCommand() {
  const config = getConfig();

  if (!config.token) {
    console.error("You are not logged in.");
    console.log("Run: linkit login");
    return;
  }

  try {
    const data = (await apiRequest("/api/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
    })) as MeResponse;

    console.log("Logged in as:");
    console.log(`Email: ${data.user.email}`);
    console.log(`User ID: ${data.user.id}`);
  } catch (err: any) {
    console.error("Failed to fetch user info:", err.message);
    console.log("Try logging in again: linkit login");
  }
}