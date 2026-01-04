import readline from "readline";
import { apiRequest } from "../services/api.js";

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

export async function registerCommand() {
  try {
    const email = await ask("Email: ");
    const password = await ask("Password: ");

    await apiRequest("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    console.log("Registration successful");
    console.log("Now run: linkit login");
  } catch (err: any) {
    console.error("Registration failed:", err.message);
  }
}