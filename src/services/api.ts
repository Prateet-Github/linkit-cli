import { getConfig } from "../config/store.js";

export async function apiRequest(
  path: string,
  options: RequestInit = {}
) {
  const config = getConfig();

  if (!config.apiUrl) {
    throw new Error("API URL not configured");
  }

  const res = await fetch(`${config.apiUrl}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}