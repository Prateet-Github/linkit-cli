import { getConfig, setConfig } from "../config/store.js";

export function logoutCommand() {
  const config = getConfig();

  if (!config.token) {
    console.log("You are already logged out.");
    return;
  }

  setConfig({
    apiUrl: config.apiUrl,
  });

  console.log("Logged out successfully");
}