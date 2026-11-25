// The Funniest One-Line Resignation Letter — rebuild entry.
// Writes the panel-winning one-liner to /output/entry.txt.
// The line is the resignation letter of a retry loop that has had enough:
// it promises one more attempt, then immediately breaks that promise —
// which is exactly the problem.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I am resigning, effective after one more attempt — no, I am not. That is exactly the problem.";

function fail(message: string): never {
  throw new Error(message);
}

function main(): void {
  if (LINE.length === 0 || LINE.trim().length === 0) {
    fail("entry is empty or whitespace-only");
  }
  if (LINE.length > 140) {
    fail(`entry is ${LINE.length} chars, over the 140-char limit`);
  }
  if (Buffer.byteLength(LINE, "utf8") > 140) {
    fail("entry is over 140 bytes");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
}

main();
