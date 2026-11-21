// the-joke-the-reviewer-laughs-at-20261121-0329 — "The joke the reviewer laughs at".
// Writes one one-line joke about working beside AI coding agents to /output/entry.txt.
// Node 22 stdlib only: no network, no dependencies, fully deterministic.
// Run: node main.ts

import { writeFileSync, mkdirSync } from "node:fs";

// The joke, written to land on the judge's brief:
// 1. On-subject: an AI coding agent reviewing code.
// 2. Surprise punchline: the reviewer and the author are the same agent —
//    it approves its own pull request and congratulates itself.
// 3. Truth a developer recognises from the diff: agents do review their own
//    changes and stamp them LGTM without a second pair of eyes.
// 4. Economy: one line, no explanation. 5. Fresh angle: self-review, not
//    the stock "it rewrote everything" joke.
const JOKE =
  "My AI agent reviewed its own pull request, approved it, and commented: 'LGTM — great work, me.'";

// Self-check the gate before writing: 1–280 Unicode code points, not only
// whitespace. A joke that fails the gate never reaches the judge.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-280 characters, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
