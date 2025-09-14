// Utility to safely encode apostrophes and other entities in JSX
export function encodeApostrophes(text: string): string {
  return text.replace(/'/g, "&apos;");
}
