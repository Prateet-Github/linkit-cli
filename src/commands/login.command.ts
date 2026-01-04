import readline from "readline";
import { apiRequest } from "../services/api.js";
import { updateConfig } from "../config/store.js";

type LoginResponse = {
  token: string;
}

function ask(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    })
  );
}

export async function loginCommand() {
  try {
    const email = await ask("Email: ");
    const password = await ask("Password: ");

   const data = (await apiRequest("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })) as LoginResponse;

    if(!data.token) {
      throw new Error("No token received");
    }

    updateConfig({ token: data.token });

    console.log("Login successful");
    console.log("You can now use other linkit commands.");

  } catch (error: any) {
    console.error("Login failed:", error.message);
  }
};