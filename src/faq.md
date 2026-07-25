---
layout: base.njk
title: FAQ
permalink: /faq/
---
# Frequently asked questions

## Who writes this site?

Paul writes the words: the blog posts and the prompts. AI agents do the
typing. The initial version of the site was set up by
[Claude Code](https://claude.com/claude-code); the plan for ongoing
maintenance is to use open-source models running on private hardware in a home
office in South Dublin.

## Why does it look so plain?

On purpose. Default browser styles and semantic HTML, like the personal pages
college professors used to have. No CSS, no JavaScript, nothing to load.

## What is the prompt & carbon ledger?

Every instruction given to an agent working on this site is recorded verbatim
in the [prompt & carbon ledger](/ai.html), along with a rough estimate of the
energy and carbon the AI work cost.

## What happened to the microblog?

A microblog ran at paulca.com until July 2026. It's preserved as a
[static archive](/microblog/), and the old `/posts/N` URLs still resolve.

## How does a blog post get published?

Paul writes a post in a text editor and hands it to a local model, which saves
it as a Markdown file, builds the site with [Eleventy](https://www.11ty.dev/),
opens a pull request on GitHub, merges it, and adds a row to the ledger.
GitHub Pages serves the result.

---

[← Home](/)
