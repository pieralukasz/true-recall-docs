---
title: Why True Recall
sidebar:
  label: "Why True Recall (P)"
  order: 0
description: Why spaced repetition works, why True Recall was built, and how it compares to Anki, RemNote, Obsidian-to-Anki, and Logseq.
---

:::caution[My Notes]
:::

You already take notes. **True Recall** turns those notes into long-term memory — without leaving Obsidian.

## Why Spaced Repetition Works

Your brain forgets predictably. Hermann Ebbinghaus discovered this in 1885: without reinforcement, you lose ~70% of new information within 24 hours. This is the **forgetting curve**.

Spaced repetition fights the curve with two principles:

- **Active recall** — Testing yourself strengthens memory far more than rereading. Every time you answer a flashcard, you reinforce the neural pathway.
- **Spacing effect** — Reviewing at increasing intervals (1 day → 3 days → 10 days → 30 days → ...) makes each recall harder, which makes the memory more durable.

The combination means you spend minutes per day to remember thousands of facts for months or years.

## Why True Recall Exists

Most spaced repetition tools require you to leave your notes. You write in one app, create flashcards in another, and lose the connection between what you learn and what you review.

True Recall was built on a simple idea: **flashcards should live alongside the notes they came from**.

- Select text in your Obsidian note → flashcards are generated instantly with AI
- Open the [Flashcard Panel](/views/flashcard-panel/) → all cards for that note are right there
- Click a card → jump back to the source text it was created from

No export step. No context switching. Your notes and flashcards are one system.

## What Makes True Recall Different

### FSRS v6 — State-of-the-Art Scheduling

True Recall uses **[FSRS v6](/scheduling/fsrs-algorithm/)** (Free Spaced Repetition Scheduler), the most advanced open-source spaced repetition algorithm. It tracks 21 trainable parameters per preset and models two values per card:

- **Stability** — How long until you might forget
- **Difficulty** — How hard this card is for you

FSRS v6 outperforms SM-2 (Anki's classic algorithm) by 30-40% in research benchmarks. You can [train parameters](/scheduling/presets/) from your own review history for personalized scheduling.

### AI-Powered Card Creation

Select text, and the [Selection Toolbar](/views/selection-toolbar/) generates flashcards in seconds. Cards include source text tracking — every generated card links back to the exact text it came from, so you can always verify accuracy.

### AI Image Occlusion

Drop an image into your note, select it, and AI automatically detects regions to hide — labels, terms, diagrams, formulas. You can also draw regions manually. Each hidden region becomes a separate flashcard.

### AI Answer Grading

[Type-in Mode](/review/type-in-mode/) lets you type answers instead of just rating yourself. The AI evaluates semantic correctness — not just exact wording — and gives you a score with feedback.

### 23 Inline Widgets

Embed live analytics directly in your Obsidian notes using codeblock widgets:

- **Dashboard** — Today's stats and 7-day forecast
- **Heatmap** — GitHub-style study activity
- **Forecast** — 30-day workload prediction
- **Health** — Collection health by retrievability
- **Streak, Progress, Achievements** — Gamification
- **Problem Cards** — Leeches and unstable cards

All widgets update live as you review.

### Advanced Workload Management

Control your study schedule with tools unique to True Recall:

- **[Load Balancing](/scheduling/workload-management/#load-balancing)** — Smooth daily review counts
- **[Easy Days](/scheduling/workload-management/#easy-days)** — Lighter weekends or specific dates
- **[Scheduled Breaks](/scheduling/workload-management/#scheduled-breaks)** — Redistribute reviews around vacations
- **[Sibling Dispersal](/scheduling/workload-management/#sibling-dispersal)** — Space related cards apart

## Comparison with Other Tools

### True Recall vs Anki

Anki is the gold standard for spaced repetition. True Recall builds on Anki's concepts (note types, card states, presets) while solving its main pain points:

|                        | True Recall                     | Anki                                     |
| ---------------------- | ------------------------------- | ---------------------------------------- |
| **Where cards live**   | Inside your Obsidian notes      | Separate application                     |
| **Card creation**      | AI generates from selected text | Manual typing                            |
| **Algorithm**          | FSRS v6 (21 parameters)         | SM-2 default, FSRS optional since v24.11 |
| **Image Occlusion**    | AI auto-detection + manual      | Manual only                              |
| **Answer checking**    | AI semantic grading             | Exact text match                         |
| **Workload tools**     | Load balance, easy days, breaks | Basic (since v24)                        |
| **Widgets**            | 23 inline widgets in notes      | Add-ons required                         |
| **Platform**           | Obsidian (desktop + mobile)     | Standalone + AnkiDroid/AnkiMobile        |
| **Anki compatibility** | Full .apkg import and export    | N/A                                      |

**Choose Anki if:** You need a standalone app or use AnkiDroid/AnkiMobile extensively.

**Choose True Recall if:** You already use Obsidian, want AI-powered card creation, or prefer cards linked to your notes.

:::note[Add-on Compatibility]
True Recall plans to integrate the most popular Anki add-on features directly into the plugin — no third-party extensions needed.
:::

### True Recall vs Obsidian-to-Anki

The Obsidian-to-Anki plugin syncs flashcards from Obsidian to Anki. This means you still need Anki running, cards are reviewed in a separate app, and there's a manual sync step every time you edit.

True Recall replaces this workflow entirely — cards are created, stored, and reviewed inside Obsidian. No external dependency, no sync lag.

### True Recall vs RemNote

RemNote combines notes and flashcards in a web-based tool. It's a good approach, but:

- RemNote uses SM-2, not FSRS v6
- RemNote's AI features are more limited
- RemNote is a separate app — True Recall works inside your existing Obsidian vault
- RemNote has its own file format — True Recall uses standard Markdown

### True Recall vs Logseq

Logseq has a built-in flashcard plugin, but it's basic:

- SM-2 algorithm only (no FSRS)
- No AI card generation
- No image occlusion
- No workload management tools
- Limited card types

True Recall's Obsidian integration is deeper — inline widgets, Selection Toolbar, source text tracking, and full Anki-compatible note types.

## Getting Started

Ready to try it?

1. [Install True Recall](/getting-started/installation/) (2 minutes)
2. [Quick Start](/getting-started/quick-start/) — create your first cards in 5 minutes
3. [Basic Concepts](/getting-started/basic-concepts/) — understand the core ideas

## What to Read Next

- [Introduction](/getting-started/introduction/) — overview of how True Recall works
- [Quick Start](/getting-started/quick-start/) — create and review flashcards in 5 minutes
- [FSRS Algorithm](/scheduling/fsrs-algorithm/) — deep dive into how scheduling works
- [Selection Toolbar](/views/selection-toolbar/) — AI-powered card creation
