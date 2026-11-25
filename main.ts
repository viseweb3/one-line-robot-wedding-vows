/**
 * One-Line Robot Wedding Vows — make.fun bounty
 * u-kreutzx-one-line-robot-wedding-vows-a154ba4b
 *
 * Writes a single line of wedding vows for a robot couple to
 * /output/entry.txt. The line must be 1-160 UTF-8 characters.
 *
 * The vow is written as a real wedding vow — a promise, in the
 * classic "in sickness and in health" cadence — with the laugh
 * landing in the last few words: the solemn "till death do us
 * part" is undercut by the one thing that can end a robot
 * marriage sooner than death, a factory reset.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const VOW =
  "I vow to love you in sickness and in health, in full charge and in low battery, until death \u2014 or a factory reset \u2014 do us part.";

const OUTPUT_PATH = "/output/entry.txt";

function main(): void {
  const text = VOW.trim();
  if (text.length === 0 || text.length > 160) {
    throw new Error(`vow must be 1-160 characters, got ${text.length}`);
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf8");
  console.log(text);
}

main();
