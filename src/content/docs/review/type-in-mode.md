---
title: Type-in Mode
sidebar:
  order: 3
description: "Type your answers during review and get them graded with AI semantic evaluation or character-by-character diff comparison."
---

:::caution[My Notes]
:::

**Type-in Mode** lets you type your answers during review instead of just thinking them. **True Recall** compares your typed answer with the correct one using either AI semantic grading or character-by-character diff comparison.

## Enabling Type-in Mode

### During Review

Press `T` to cycle through modes:
1. **Off** — Standard review (think, reveal, rate)
2. **AI Grading** — AI evaluates your answer semantically
3. **Diff** — Character-by-character comparison

### Default Setting

Set your preferred default in `Settings → General → Default type-in mode` (Off, Diff, or AI).

### Per-Card Type-in

You can also mark individual cards as type-in when creating them — add `@typein` in the [block format](/creation/creating-flashcards/#type-in-mode). These cards always show the type-in input regardless of the global setting.

## How It Works

1. Read the question
2. Type your answer in the text area
3. Press `Space` or `Cmd/Ctrl + Enter` to submit
4. See the comparison/grading result
5. Rate your answer (or accept the AI-suggested rating)

<!-- TODO PHOTO -->

## AI Semantic Grading

AI compares your answer with the correct one on meaning, not exact wording. After submitting:

1. AI assigns a score (0–100) and provides brief feedback
2. An auto-rating is suggested based on the score
3. Click **Accept** to use it, or **Override** to rate manually

### Auto-Rating Thresholds

| AI Score | Rating Applied |
|----------|----------------|
| 90–100 | Good |
| 70–89 | Hard |
| 0–69 | Again |

### What AI Understands

- **Synonyms** — "car" = "automobile"
- **Paraphrases** — "turns sunlight into energy" = "converts light to chemical energy"
- **Partial answers** — scored proportionally with feedback on what's missing
- **Minor typos** — treated as correct at 90%+ similarity

### Example

| Correct Answer | Your Answer | AI Score | Feedback |
|----------------|-------------|----------|----------|
| "Mitochondria" | "Mitochondria" | 100% | Correct! |
| "Mitochondria" | "The powerhouse of the cell" | 85% | Correct description, but looking for the organelle name |
| "Mitochondria" | "Mitocondria" | 95% | Minor spelling error, essentially correct |
| "Mitochondria" | "Nucleus" | 0% | Incorrect |

### Custom Grading Prompt

Customize how AI evaluates in `Settings → AI → Type-in grading prompt`. Template variables: `{{correct}}`, `{{student}}`, `{{question}}`.

AI grading requires an API key or a [True Recall subscription](https://truerecall.app).

## Diff Comparison Mode

Diff mode shows a character-by-character comparison — no AI needed, works offline.

Differences are highlighted:
- **Green** — Correct characters
- **Red** — Incorrect characters
- **Yellow** — Missing characters

### When to Use Diff

Diff mode is better when exact spelling matters — vocabulary, terminology, formulas, or when you're working offline.

## Choosing Between Modes

| Use AI Grading when | Use Diff when |
|---------------------|---------------|
| Answers are sentences or concepts | Exact spelling matters |
| Multiple correct phrasings exist | Learning vocabulary |
| You want feedback on understanding | Working offline |
| Testing comprehension | Testing memorization |

## Keyboard Shortcuts

### During Typing

| Key | Action |
|-----|--------|
| `Tab` | Focus/blur input |
| `Cmd/Ctrl+Enter` | Submit answer |
| `Escape` | Cancel typing |

### After Submission

| Button | Action |
|--------|--------|
| **Accept & Rate** | Use AI score as rating |
| **Override** | Ignore AI, rate manually |
| **Edit** | Modify your answer |

## Tips

- **Use AI mode for concepts** — it excels at evaluating understanding, not just wording
- **Use Diff mode for terms** — exact terminology and spelling benefit from character comparison
- **Rate honestly even with high scores** — if you struggled despite AI giving 95%, rate Hard
- **Customize the prompt** if AI is too lenient or strict for your subject

## What to Read Next

- [Review Interface](/review/review-interface/) — the full review view and actions
- [Answering Cards](/review/answering-cards/) — how ratings affect FSRS scheduling
- [Creating Flashcards](/creation/creating-flashcards/#type-in-mode) — marking cards as type-in during creation
