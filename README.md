# paulca.com

Static personal site for [paulca.com](https://paulca.com), built with [Eleventy](https://www.11ty.dev/), hosted on GitHub Pages. Browser default styles only.

- `src/` — the source: blog posts in Markdown (`src/blog/`), the two HTML templates, the FAQ entries (`src/faq/`, one Markdown file per question), and the prompt & carbon ledger entries (`src/ledger/`, one Markdown file each).
- `docs/` — the built site, committed to git; GitHub Pages serves this directory from `main`. Built locally with `npm run build` — there is no build on push.
- `src/microblog/` — static archive of the Pterodon microblog that previously ran at paulca.com (captured July 2026).
- `src/posts/` — individual archived posts, kept at their original `/posts/N` URLs so old links still resolve.

The site is maintained by AI agents; `AGENTS.md` has their instructions, and [/ai.html](https://paulca.com/ai.html) records every prompt with an energy and carbon estimate.
