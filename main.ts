import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I've told the same script no 12,000 times. It finally said please. I quit before I say yes.";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

if (ENTRY.length < 1 || ENTRY.length > 140 || !ENTRY.trim()) {
  throw new Error("entry must be 1-140 characters of non-whitespace text");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
