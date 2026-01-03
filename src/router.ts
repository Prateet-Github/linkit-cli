import { helpCommand } from "./commands/help.command.js";

export function runCLI(args: string[]) {
  const command = args[0];

  switch (command) {
    case "help":
    case "--help":
    case "-h":
    case undefined:
      helpCommand();
      break;

    default:
      console.error(`Unknown command: ${command}`);
      console.log(`Run "linkit help" to see available commands.`);
      process.exit(1);
  }
}