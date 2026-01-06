export function helpCommand() {
  console.log(`
LinkIt CLI

Usage:
  linkit <command>

Authentication:
  register        Create a new account
  login           Log in to your account
  logout          Log out from the current session
  whoami          Show the currently logged-in user

Utilities:
  help            Show this help message

Examples:
  linkit register
  linkit login
  linkit whoami
`);
}