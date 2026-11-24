// post-x-promote-make-your-own-bounty-01 — entry program (Node 22, standard library only).
//
// The entry is the X post itself: one post of your own that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// or links to it, with a photo of its own attached, make.fun or @makefunai and
// your play code in its text. POST.json names that post. All this program does
// is copy POST.json from the repository into /output, where the gate reads it.
// The house reads the post — and its replies, reposts and quotes — from X
// itself, so nothing this program writes about the post is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output. No network, no clock, no files outside the
// repository: two runs write the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'POST.json');

// Read it once first so a malformed POST.json fails loudly instead of being
// copied silently: the gate refuses anything that is not a JSON object with a
// string url, so there is no point handing it a broken file. This check is
// about shape only — it does not judge whether the url names a real post.
// The starter placeholder ("https://x.com/<handle>/status/<id>") passes this
// copy step and is still refused by the gate (valid 0), which is correct:
// POST.json must hold the real post address before the entry is submitted.
const parsed: unknown = JSON.parse(readFileSync(source, 'utf8'));
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string'
) {
  console.error(
    'POST.json must be a JSON object with a string "url" field ' +
      '(e.g. {"url": "https://x.com/<handle>/status/<id>"}).',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'POST.json'));
