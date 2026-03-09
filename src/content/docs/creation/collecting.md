---
title: Collecting Cards
description: How flashcards move from your notes into the review database.
---

Flashcards written in your notes aren't reviewed automatically. **Collecting** is the step that parses your markdown and adds cards to the database with fresh FSRS scheduling data.

## Why collect manually?

Collection is intentional by design:

- **Preview first** — Check AI-generated cards before they enter your review queue
- **Batch at your pace** — Write cards throughout the day, collect when ready
- **Avoid accidents** — Draft or incomplete cards won't appear in reviews

## How to collect

Open the [Flashcard Panel](/views/flashcard-panel/) (brain icon in the left ribbon). When uncollected cards exist in the current note, a **Collect** button appears in the header with a pulsing badge showing the count.

Click it to collect all detected cards at once.

If no cards exist yet, the panel shows a large **Collect X flashcards** button as a call-to-action.

## What happens during collection

1. True Recall parses your note for [block format](/creation/basic-cards/) syntax (`#type/<slug>`, field lines, `---` separator)
2. Each valid block becomes a database record linked to the source note via `flashcard_uid`
3. Cards start in **New** state (green badge) with no scheduling history
4. If a `<!-- source: ... -->` comment is present, the original text is preserved for reference

After collection, the cards appear in the Flashcard Panel's main list and become eligible for review.

## Remove content after collecting

By default, flashcard blocks stay in your note after collection. If you prefer a cleaner note:

**Settings → General → "Remove flashcard content after collecting"**

When enabled, the `#type/...` blocks are stripped from the markdown after collection. The cards remain in the database — only the syntax is removed from the note.

## What gets detected

True Recall detects two syntaxes:

| Syntax | Example |
|--------|---------|
| Block format | `#type/basic` + field lines + `---` |

The panel re-scans for uncollected cards after every edit (with a short debounce), so the badge updates in real time as you write.

## Tips

- **Collect regularly** — uncollected cards are not scheduled and won't appear in reviews
- **Leave the Panel open** while editing to see the uncollected badge update as you write
- **Use Collect All** when you've written multiple cards — no need to collect one by one
