import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original dad joke for the Dad Joke Showdown bounty.
// Deterministic: the same text is written on every run.
const JOKE =
  "I put my money in the freezer because I wanted cold, hard cash for dessert.";

if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(
    `Joke must be between 1 and 200 characters, got ${JOKE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
