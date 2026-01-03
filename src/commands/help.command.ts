export function helpCommand() {
  console.log(`
LinkIt CLI

Usage:
  linkit <command> [options]

Commands:
  help              Show this help message
  shorten <url>     Shorten a URL (coming soon)

Examples:
  linkit shorten https://example.com
`);
}