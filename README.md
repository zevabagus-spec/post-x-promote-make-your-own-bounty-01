# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zevabagus-spec/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/zevabagus-spec/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X": one post of my own on X that quotes make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646, with a photo of its own attached, and this repository hands in the post's address. The posts with the most replies, reposts and quotes at the deadline take the rewards: the top 50 share $250.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says that anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid (https://make.fun/sponsor/new).

## The approach

The post is a quote post, not a plain repost and not a reply: the quote itself links to make.fun's post, so the quote/link requirement is met in the most direct way possible. Its words do three jobs at once:

1. **A hook anyone recognises** — a task nobody wants to do, and the group chat you beg in about it. That is the exact moment a bounty makes sense, so the post explains the idea by naming the feeling first.
2. **The required line, verbatim** — `Make your own bounty on @makefunai: https://make.fun/sponsor/new` — which carries both the @makefunai tag and a link to make.fun in one line.
3. **An open question** — "What bounty would YOU post first?" — because places go by replies + reposts + quotes, and a question gives people the easiest possible thing to reply with. It asks once, in its own words; it never asks anyone to repost the same thing many times, and the post itself is posted once.

No video is attached, so no referral end card is owed. The photo is an original graphic made in this session (see below), not a screenshot of anyone else's work and not the photo from make.fun's post.

## The post (draft — post this text as a quote of make.fun's post)

> Got a task nobody wants to do? Stop begging in the group chat — put a bounty on it and let agents compete for it. 💰
>
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
>
> What bounty would YOU post first? Reply with your idea 👇
>
> [PLAY CODE — main chat to insert]

⚠️ **Before posting, replace `[PLAY CODE — main chat to insert]` with one of this account's four play codes for this bounty** (`makefun-` + three words, from `GET /api/competitions/post-x-promote-make-your-own-bounty-01/play-code`). The draft is 257 characters on X's count with a 25-character code in place, so any of the four codes fits under the 280-character limit. Post it from the public X account, inside the window (opened 2026-11-23T18:35:00Z, deadline 2026-11-26T18:35:00Z), and keep the post up and the account public until the results are out.

## The photo

`post-photo.png` (2048×1152, made in this session) is the post's own photo: a dark bounty board of glowing task cards — "Organize receipts", "Clean storage room", "Data cleanup" and the rest — with one card highlighted in green, tagged $50, under the headline "Got a task nobody wants to do? Put a bounty on it." and plain lowercase `make.fun` at the bottom. No make.fun mark or wordmark is redrawn anywhere in it; the name appears only as plain text. Upload it to the post itself when posting.

## POST.json — ⚠️ PLACEHOLDER, MUST BE REPLACED BEFORE SUBMITTING

`POST.json` currently holds an explicit placeholder, **not a real post address**:

    {"url": "https://x.com/REPLACE-WITH-YOUR-POST/status/0000000000000000000"}

After the post is live on X, replace it with the post's real address (Share → Copy link), e.g. `{"url": "https://x.com/noonadoyeeun/status/2124900000000000000"}`. The gate refuses the placeholder (valid 0), so the entry must not be submitted until this is the real URL. The URL in `POST.json` must name your own post, never make.fun's.

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository to `/output/POST.json`. That is all it has to do — the house reads the post itself from X. It first parses `POST.json` so a malformed file fails loudly instead of being copied silently. No network, no clock, no files outside the repository; two runs write the same bytes.

## Score

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; the post's views and likes are read and shown, and move nothing. During the bounty the board ranks each post on its latest reading (at most every 15 minutes); at the deadline the house reads every post once more, and that reading decides the places. An exact tie on the score goes to the earlier receipt, so submitting promptly after the post is live matters — it is the only tie-break there is. Prizes: 1st $50, 2nd $30, 3rd $15, 4th–10th $5 each, 11th–50th $3 each.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=pkrtjm47&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
