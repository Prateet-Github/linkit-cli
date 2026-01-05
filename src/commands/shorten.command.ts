import { apiRequest } from "../services/api.js";
import { getConfig } from "../config/store.js";

type ShortenResponse = {
  id: string;
  shortUrl: string;
  originalUrl: string;
  expiresAt: string | null;
};

export async function shortenCommand(args: string[]) {
  const config = getConfig();

  if (!config.token) {
    console.error("You are not logged in.");
    console.log("Run: linkit login");
    return;
  }

  const originalUrl = args[0];

  if (!originalUrl) {
    console.error("Missing URL");
    console.log("Usage: linkit shorten <url>");
    return;
  }

  try {
    const data = (await apiRequest("/api/url", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.token}`,
      },
      body: JSON.stringify({
        originalUrl,
      }),
    })) as ShortenResponse;

    console.log("Short link created:");
    console.log(data.shortUrl);
  } catch (err: any) {
    console.error("Failed to shorten URL:", err.message);
  }
}