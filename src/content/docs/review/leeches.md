---
title: Leeches
sidebar:
  label: "Leeches"
  order: 5
description: "How True Recall detects and handles leech cards — flashcards you keep forgetting — and strategies for dealing with them."
---

:::caution[My Notes]
:::

A **leech** is a card you keep forgetting. After multiple lapses (rating Again), True Recall flags the card so you can decide what to do with it — fix it, simplify it, or suspend it until you're ready.

## How Leech Detection Works

True Recall uses Anki-style leech detection. A card becomes a leech when its lapse count reaches the **leech threshold** (default: 8). After that, it triggers again every `⌈threshold / 2⌉` lapses.

| Threshold | Triggers at lapses |
|-----------|-------------------|
| **4** | 4, 6, 8, 10, 12, ... |
| **8** (default) | 8, 12, 16, 20, 24, ... |
| **12** | 12, 18, 24, 30, ... |

The check happens immediately when you rate a card **Again** during review. If the card hits a trigger point, you'll see a notification.

## Leech Actions

When a leech is detected, True Recall takes one of two actions:

### Tag Only (default)

The card stays in your review queue. You see an info notification:

```
Leech detected (8 lapses): What is the mitochondria?
```

This is the default because removing cards automatically can be disruptive. You decide what to do.

### Suspend

The card is automatically removed from review. You see a warning notification:

```
Leech suspended (8 lapses): What is the mitochondria?
```

The card remains in your database — it's just excluded from review sessions until you unsuspend it in the [Card Browser](/views/card-browser/).

## Configuring Leech Settings

Leech settings are configured **per preset**, so different projects can have different thresholds.

Go to `Settings → FSRS → [Your Preset] → Leech Settings`:

| Setting | Default | Description |
|---------|---------|-------------|
| **Leech Threshold** | 8 | Number of lapses before a card is flagged |
| **Leech Action** | Tag only | What happens when a leech is detected |

:::tip[Choosing a Threshold]
- **4–6** — Strict. Catches problem cards early. Good for exams where you can't afford weak spots.
- **8** — Balanced. The default works for most people.
- **12+** — Lenient. Gives cards more chances. Good for difficult material where some struggle is expected.

Set to **0** to disable leech detection entirely.
:::

## Finding Leech Cards

### Problem Cards Widget

Embed the Problem Cards widget in any note to see your worst-performing cards at a glance:

````markdown
```true-recall-problem-cards
limit: 10
```
````

The widget shows three types of problem cards:

| Type | Badge | Metric shown |
|------|-------|-------------|
| **High lapses** | leech (red) | Number of lapses |
| **Low stability** | unstable (orange) | Stability value |
| **Relearning** | relearning (yellow) | Difficulty value |

### Card Browser

Use the [Card Browser](/views/card-browser/) to find all high-lapse cards:

```
prop:lapses>5
```

Or find suspended leeches specifically:

```
is:suspended prop:lapses>8
```

## Strategies for Dealing with Leeches

A leech means the card isn't working — not that you're failing. The card needs to change, not just more repetition.

### Rewrite the Card

The most effective fix. Common problems and solutions:

| Problem | Fix |
|---------|-----|
| Question is too vague | Make it specific — "What does X do?" → "What does X do in context Y?" |
| Answer is too long | Break into multiple cards with one fact each |
| No personal connection | Add a mnemonic, example, or analogy to the answer |
| Missing context | Add a hint field or include more context in the question |
| Cloze hides too much | Reduce to one key term per cloze |

### Add a Mnemonic

Create a vivid mental image or story that connects the question to the answer. Add it to the answer field so you see it during review.

### Split into Smaller Cards

If a card covers multiple facts, split it. One fact per card is the golden rule of flashcard design. See [Best Practices](/creation/best-practices/) for guidelines.

### Suspend and Revisit Later

Sometimes you're not ready for certain material. Suspend the leech, continue with other cards, and come back after you've built more foundational knowledge.

### Delete the Card

If the information isn't worth memorizing (it's trivial, outdated, or better understood through practice), delete it. Not every fact deserves a flashcard.

## Leech Prevention

The best way to handle leeches is to prevent them:

- **Follow the [Best Practices](/creation/best-practices/)** for writing flashcards
- **Use AI generation** — the [Selection Toolbar](/views/selection-toolbar/) creates well-structured cards with source tracking
- **Review source text** — click "Jump to source" on a struggling card to re-read the original context
- **Rate honestly** — accurate ratings help FSRS schedule optimally. See [Answering Cards](/review/answering-cards/).

## What to Read Next

- [Answering Cards](/review/answering-cards/) — how ratings affect scheduling and lapses
- [Card Browser](/views/card-browser/) — find and manage problem cards
- [Best Practices](/creation/best-practices/) — write effective flashcards that don't become leeches
- [Presets & Optimization](/scheduling/presets/) — configure leech thresholds per project
