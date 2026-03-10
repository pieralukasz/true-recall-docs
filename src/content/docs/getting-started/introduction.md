---
title: Introduction
sidebar:
  label: "Introduction (P)"
  order: 1
description: Learn what True Recall is and how it can help you remember everything you learn
---

:::caution[My Notes]
:::

True Recall is an Obsidian plugin for spaced repetition. Your flashcards live alongside your notes, scheduled by FSRS v6 — the most advanced open-source algorithm for long-term memory.

## Cards are linked to notes

In Anki, flashcards live in decks separate from your study material. In True Recall, every card is linked to the note you created it from.

```
Chapter 3: Cell Biology       ← your note
  ├── What is the mitochondria?      ← card created from this note
  ├── What is the cell membrane?     ← card created from this note
  └── What is apoptosis?             ← card created from this note
```

Open the note, open the [Flashcard Panel](/views/flashcard-panel/), and all its cards are right there. You can also search and filter across all cards using the [Card Browser](/views/card-browser/).

## How it works

TODO PHOTO — diagram or animation of the four-step loop

1. **Create** flashcards — select text and use the [Selection Toolbar](/views/selection-toolbar/), or click **Add** in the [Flashcard Panel](/views/flashcard-panel/) to open the Add Flashcard Modal
2. **[Collect](/creation/creating-flashcards/#the-collection-step)** cards into the database via the Flashcard Panel
3. **[Review](/review/review-interface/)** when cards come due — rate each card Again, Hard, Good, or Easy
4. **[FSRS v6](/scheduling/fsrs-algorithm/)** calculates the optimal time to show each card again

The algorithm tracks two things per card: **stability** (how long until you might forget) and **difficulty** (how hard this card is for you). Every review refines these values, so your schedule gets more accurate over time.

## Key Features

TODO PHOTO — screenshot grid or icons for each feature

- **AI-Powered Generation** — Select text and instantly create Q&A cards, cloze deletions, or reversed cards using the [Selection Toolbar](/views/selection-toolbar/). See [Creating Flashcards](/creation/creating-flashcards/) for details.
- **[FSRS v6 Algorithm](/scheduling/fsrs-algorithm/)** — State-of-the-art spaced repetition that adapts to your patterns
- **[Image Occlusion](/creation/image-occlusion/)** — Create flashcards from images by hiding regions, with AI auto-detection
- **[Type-in Mode](/review/type-in-mode/)** — Type answers and get AI-powered semantic grading or diff
- **[Note Types](/creation/note-types/)** — Anki-style templates with customizable fields
- **[Projects](/creation/projects-and-notes/)** — Organize notes into hierarchies with per-project FSRS presets
- **Cloud Sync** — Sync progress across devices (Coming soon)
- **[25+ Widgets](/configuration/editor-integration/)** — Embed analytics and gamification in your notes

## Projects group notes together

A project is a collection of notes you want to study together. One note can belong to multiple projects.

```
Project: "Biology Exam"
  ├── Chapter 3: Cell Biology       (12 cards)
  ├── Chapter 4: Genetics           (8 cards)
  └── Lab Notes: Microscopy         (5 cards)

Project: "Science Fundamentals"
  ├── Chapter 3: Cell Biology       (same 12 cards)
  └── Physics: Thermodynamics       (10 cards)
```

"Chapter 3: Cell Biology" appears in both projects. The cards are the same — no duplication.

## True Recall vs Anki

|                      | True Recall                       | Anki                          |
| -------------------- | --------------------------------- | ----------------------------- |
| **Where cards live** | Inside your notes                 | Separate from source material |
| **Algorithm**        | FSRS v6                           | FSRS v6 (optional) or SM-2    |
| **Organization**     | Notes belong to multiple projects | 1 card = 1 deck               |
| **AI Generation**    | Built-in                          | No                            |
| **Image Occlusion**  | Built-in with AI detection        | Plugin required               |
| **Type-in Grading**  | AI semantic grading               | Exact match only              |
| **Cloud Sync**       | Built-in                          | Paid add-on                   |
| **Runs in**          | Obsidian                          | Standalone app                |

:::tip[Coming from Anki?]
See the [migration guide](/migration/from-anki/) for a complete walkthrough — note types, media, scheduling, everything transfers.
:::

## Local-first data

Your flashcard data lives in `.true-recall/true-recall.db` inside your vault — a portable SQLite database. Nothing leaves your machine unless you opt into cloud sync.

## Next steps

- [Why True Recall](/getting-started/why-true-recall/) — why spaced repetition works and how True Recall compares to alternatives
- [Installation](/getting-started/installation/) — set up True Recall
- [Quick Start](/getting-started/quick-start/) — create your first cards in 5 minutes
