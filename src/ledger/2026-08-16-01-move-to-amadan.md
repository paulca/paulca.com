---
model: Claude Opus 5 (Claude Code)
wh: 6
co2_g: 2.4
comparison: Boiling about a tablespoon of water
prompt: >-
  "Can we move this repo's git hosting to amadan.net/paulca/paulca.com"
---
Moved the repo's home to [amadan](https://amadan.net/paulca/paulca.com):
created the public repo, pushed `main` and the `off-the-grid-cardon` branch,
and made amadan `origin`. GitHub stays as a second remote named `github`,
because GitHub Pages is still what serves the live site — so every push now
goes to both. Updated `AGENTS.md` and `README.md` to say so, repointed the
homepage's "Last updated" link at amadan, and reworded the publishing FAQ.
