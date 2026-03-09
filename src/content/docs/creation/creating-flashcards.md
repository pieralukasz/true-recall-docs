---
title: Creating Flashcards
sidebar:
  order: 1
description: "How flashcard creation works in True Recall — note types, block format, and the collection step."
---

Flashcards in True Recall can be created in two ways: through a form-based interface, or by writing directly in your notes. Both produce the same result — a card in the database ready for review.

## Two Ways to Create Cards

```
Form-based:   Selection Toolbar / Flashcard Editor  →  database (immediate)

Block format: write in note  →  collect  →  database
```

**Form-based** — Use the [Selection Toolbar](/views/selection-toolbar/) to generate cards from selected text with AI, or open the [Flashcard Editor](/views/flashcard-editor/) to fill in fields manually. Cards go straight into the database. No extra steps.

**Block format** — Write cards as structured text directly in your notes. They live alongside the material they came from. Before they appear in reviews, you **collect** them — a deliberate step that moves them from your note into the database.

Most workflows combine both: AI generation for bulk creation from existing notes, and block format for adding cards while writing new ones.

## Note Types

Every flashcard belongs to a **note type** — a template that defines what fields the card has and how those fields become review cards. True Recall has four built-in note types:

| Note type | Slug | Fields | Cards per block |
|-----------|------|--------|-----------------|
| Basic | `basic` | Front, Back | 1 |
| Basic (Reversed) | `basic-reversed` | Front, Back | 2 |
| Cloze | `cloze` | Text, Extra | 1 per cloze number |
| Image Occlusion | `image-occlusion` | Image, regions | 1 per region |

See [Note Types](/creation/note-types/) for a full explanation of each type and when to use them.

## Block Format

Cards written in notes use the block format: a `#type/<slug>` tag, field lines, and a `---` separator.

```markdown
#type/basic
Front: What is the speed of light?
Back: Approximately 299,792 km/s in a vacuum.
---
```

The card lives in your note, next to the content it came from:

```
Chapter 5: Special Relativity

  Einstein proposed that the speed of light is constant...

  #type/basic
  Front: What is the speed of light?
  Back: Approximately 299,792 km/s in a vacuum.
  ---
```

This keeps cards in context. When you come back to a note, the cards you made from it are right there.

## The Collection Step

Writing a block doesn't add a card to the review queue. It becomes **uncollected** — visible in the [Flashcard Panel](/views/flashcard-panel/) but not yet scheduled.

```
write block in note  →  uncollected  →  click Collect  →  review queue
```

Collection is intentional by design:
- **Preview first** — review AI-generated cards before committing them to your schedule
- **Batch at your pace** — write cards throughout the day, collect when ready
- **No accidents** — draft or incomplete blocks won't appear in reviews

To collect: open the [Flashcard Panel](/views/flashcard-panel/) (brain icon in the ribbon). Uncollected cards show a pulsing badge. Click **Collect** to add them all at once.

After collection, each card gets fresh FSRS scheduling data and a green "New" badge. It's ready for review.

:::tip[Remove blocks after collecting]
If you prefer clean notes without card syntax, enable **Settings → General → Remove flashcard content after collecting**. The blocks disappear from the note; the cards remain in the database.
:::

## What to Read Next

- [Note Types](/creation/note-types/) — understand Basic, Cloze, Image Occlusion, and when to use each
- [Basic Cards](/creation/basic-cards/) — block format syntax for basic and reversed cards
- [Cloze Deletions](/creation/cloze-deletions/) — fill-in-the-blank cards with `{{c1::text}}` syntax
- [Image Occlusion](/creation/image-occlusion/) — create cards from images by hiding regions
