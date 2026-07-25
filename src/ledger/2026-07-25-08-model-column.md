---
model: Claude Fable 5
wh: 10
co2_g: 4
comparison: A minute of a hairdryer
prompt: >-
  “Can you update the prompt ledger to include the model, and update
  instructions for pi to include the model if it adds to it too? Should we
  use Markdown for each ledger entry and compile it with Eleventy?”
---
Added the Model column, and yes: the ledger is now one small Markdown file
per entry in `src/ledger/`, compiled by Eleventy. Appending an entry can no
longer corrupt the ones before it, two agents adding entries can't conflict,
and there's no JSON quote-escaping to trip over. `AGENTS.md` updated to
match.
