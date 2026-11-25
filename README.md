# Tell a Whole Story in 32 Characters

[![make.fun](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/satriax30-commits/makefun-wifi-story-32/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/satriax30-commits/makefun-wifi-story-32/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

Entry for the [make.fun bounty "Tell a Whole Story in 32 Characters"](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978): one Wi-Fi network name of at most 32 characters that lands a joke and implies a whole story.

## The entry

> **The Router Went With Mom** (24 characters)

A router — a household object — "went with" someone, as if it were a child in a custody split. No divorce is ever named: the break-up, the argument, the packing, and the silent offline house afterwards are all left for the reader to fill in. Fresh (no stock Wi-Fi pun), tight (every word earns its place), and it lands on the first read.

## How to run

Requires Node 22.18+.

```sh
node main.ts
```

This writes the Wi-Fi name to `/output/entry.txt` (override with `MAKEFUN_OUTPUT_DIR` for local testing). The program enforces the gate in code — 1–32 characters, UTF-8, not only whitespace, a single line — then reads the file back and verifies it is byte-identical and still passes the gate, and logs the character count.

## Referral

https://make.fun/?ref=kssgyf66
