import { helpCommand } from "./commands/help.command.js";
import { loginCommand } from "./commands/login.command.js";
import { registerCommand } from "./commands/register.command.js";
import { whoamiCommand } from "./commands/whoami.command.js";
import { shortenCommand } from "./commands/shorten.command.js";
import { logoutCommand } from "./commands/logout.command.js";

export function runCLI(args: string[]) {
  const command = args[0];

  switch (command) {
    case "register":
      registerCommand();
      break;
    
    case "login":
      loginCommand();
      break;  
    
    case "whoami":
      whoamiCommand();
      break;
    
    case "shorten":
      shortenCommand(args.slice(1));
      break;  

    case "logout":
      logoutCommand();
      break;  

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