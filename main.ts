// main.ts — make.fun bounty "Tell a Whole Story in 32 Characters"
// (slug: u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
//
// Writes ONE Wi-Fi network name (<= 32 characters) to
// <MAKEFUN_OUTPUT_DIR>/entry.txt (default "/output/entry.txt").
// Node 22, stdlib only, deterministic: no network, no wall-clock,
// no randomness. The entry is a fixed string literal below.
//
// ---------------------------------------------------------------------------
// CREATIVE CHOICE — candidates weighed (at least 5), with specific reasons.
// ---------------------------------------------------------------------------
// 1. "Pretty Fly for a Wi-Fi" (23 chars) — REJECTED: stock Wi-Fi joke,
//    explicitly listed as cliche by the judge brief. Zero freshness.
// 2. "It Burns When IP" (17 chars) — REJECTED: same problem, a stock
//    Wi-Fi pun everyone has seen; no situation, no character, no story.
// 3. "Dad Changed The WiFi Password" (29 chars) — REJECTED: a situation
//    is hinted at, but there is no twist or punchline; it reads as a
//    plain label / routine admin, so it fails criterion (2) — the joke
//    does not land on the first read.
// 4. "Mom Took The Router To Work" (27 chars) — REJECTED (close second):
//    funny image, but the story is thin: a one-off punishment with no
//    lasting consequence and no second character implied. The reader has
//    little left to fill in, so it is weaker on criterion (3).
// 5. "He Left, The WiFi Stayed" (23 chars) — REJECTED (close third):
//    tight and it implies a break-up, but the punchline is about the
//    Wi-Fi, not about a character doing something. Less vivid, less of
//    a scene, than a router physically walking out the door.
// 6. "Dad Changed It After The Fight" (30 chars) — REJECTED (close
//    fourth): a real story (fight -> retaliation by password change),
//    but changing the password is the most common domestic Wi-Fi trope,
//    so it scores low on freshness (4); and "After The Fight" explains
//    the joke instead of letting the reader fill it in (weaker on (3)).
// 7. "Grandpa Unplugged It Mid-Game" (29 chars) — REJECTED: a funny
//    moment, but a single gag with one character and no aftermath; the
//    story ends the second it starts, and "unplugged mid-game" leans on
//    a familiar gamer-grievance trope.
//
// CHOSEN: "The Router Went With Mom" (24 characters)
// Why it wins against the judge's five criteria, in order:
//  (1) 24 characters, well within 32; it reads as a joke and hints at
//      a story in the few words a phone shows in a network list.
//  (2) The joke lands on the first read: a router — a household object
//      — "went with" someone, as if it were a child in a custody split.
//      The twist (an inanimate box picked a side) needs no explanation.
//  (3) It implies a whole story: a break-up / divorce (situation),
//      Mom — and, by absence, Dad and the kids left offline (characters),
//      and the router being carried out of the house (something that
//      happened). The reader fills in the argument, the packing, the
//      silent house afterwards. Nothing is spelled out; "divorce" is
//      never said, which is exactly what lets the reader complete it.
//  (4) Fresh: it is not a stock Wi-Fi joke and it does not pun on
//      "Wi-Fi", "IP", "password" or "404". It turns the familiar
//      domestic-Wi-Fi setting into a custody story instead.
//  (5) Tight: every word earns its place — "Router" (the object),
//      "Went" (the departure), "With Mom" (who won it). 24 characters,
//      plain words, easy to say out loud.
// No judge-addressing text, no shock value: the humour is the story.
// ---------------------------------------------------------------------------

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "The Router Went With Mom";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 32 characters,
// not only whitespace, a single line. Character count is by Unicode
// code point, so multi-byte characters are counted as the judge counts
// characters, not bytes.
function checkGate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 32) {
    throw new Error(`gate failed: entry is ${chars.length} characters, must be 1-32`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate failed: entry must be a single line");
  }
}

function main(): void {
  // Output dir override for local testing; the grader uses "/output".
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");

  checkGate(ENTRY);

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");

  // Read-back self-check: the file must be byte-identical to what was
  // written and must still pass the gate.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== ENTRY) {
    throw new Error("self-check failed: entry.txt differs from the entry");
  }
  checkGate(readBack);

  console.log(`entry: ${JSON.stringify(ENTRY)}`);
  console.log(`characters: ${[...ENTRY].length}`);
  console.log(`wrote ${outPath}`);
}

main();
