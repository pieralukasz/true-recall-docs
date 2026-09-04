---
title: Typed Answers
sidebar:
  label: "Typed Answers"
  order: 3
description: "Type your answers during review and get a teacher-style verdict from AI: what you covered, what is missing, and a suggested rating."
---

:::caution[My Notes]
:::

**Typed Answers** (called Type-in Mode before 2.2.0) lets you type your answer during review instead of just thinking it. **True Recall** grades the typed answer against the card and the surrounding note and returns a teacher-style verdict: correct, partially correct or not quite, with a suggested rating and a short breakdown of what you got right and what you missed.

:::note[Availability]
Typed Answers is a **True Recall Pro** feature. Without a Pro key the **Typed answers** setting is disabled and cards show the normal reveal flow. See [What Pro Includes](/getting-started/what-pro-includes/) for the full list of what a Pro key unlocks.
:::

## Enabling Typed Answers

### During Review

Press `T` (or click the **Type in** button next to the rating buttons; on phones it is in the view's overflow menu) to switch typed answers on or off for the current session.

### Default Setting

Set the default for new sessions in `Settings → True Recall → General → "Review interface" → "Typed answers"`: **Off** or **AI grading**.

### Per-Card Typed Answers

You can also mark individual cards as type-in when creating them: add `@typein` in the [block format](/creation/creating-flashcards/#typed-answers). These cards always show the answer field regardless of the session setting. Image occlusion cards, note-review cards and cards without an answer never ask for a typed answer.

## How It Works

1. Read the question
2. Type your answer in the field under the question
3. Press `Cmd/Ctrl + Enter` to check your answer (`Space` only moves the focus into the field)
4. The grader checks your answer first; the model answer stays hidden until the verdict lands
5. Press `Enter` to accept the suggested rating, or press `1` to `4` to rate yourself

If you submit with an empty field, the card is simply revealed and nothing is graded.

<!-- TODO PHOTO -->

## The Assessment Panel

Since 2.3.0 the grader returns a verdict rather than a bare similarity score. The panel under the answer shows:

| Element | Meaning |
|---------|---------|
| **Correct** / **Partially correct** / **Not quite** | The verdict, in green, orange or red |
| **Suggested: Good · Enter** | The rating the grader proposes; `Enter` applies it |
| Teacher comment | One or two sentences of feedback in plain language |
| **You covered** | The points of the model answer your text contained |
| **Missing** | Points you left out |
| **Incorrect** | Statements that contradict the answer |

Rating buttons stay locked while a check is in flight, so you cannot rate a card before the verdict arrives.

### What the Grader Understands

- **Synonyms and paraphrases**: meaning counts, not exact wording
- **Partial answers**: graded as partially correct, with the missing points listed
- **Minor typos**: treated as correct
- **Context-dependent answers**: the grader receives excerpts of the source note that relate to the card (chosen by keyword, up to about 10,000 characters) plus up to ten related cards from the same note, so an answer that leans on a definition given earlier in the note is graded against that context instead of being penalized as ambiguous

### Grading Model

Grading uses its own model, separate from the one used for card generation. With OpenRouter (BYOK) or LM Studio as the provider you pick it in `Settings → True Recall → Features → "AI provider" → "Grading model"`, so you can use a stronger model for grading without changing the generation model. With the True Recall Pro provider the grading model is managed server-side and there is nothing to configure. See [AI Settings](/configuration/ai-settings/) for the provider cards.

## When AI Grading Fails

There is no separate diff mode any more. If the grading request fails (offline, provider error, quota), the panel falls back to **Text comparison (fallback)**: a word-level comparison of your text with the expected answer, with a percentage match and the differing words highlighted. Rate manually in that case.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `T` | Toggle typed answers for the session |
| `Space` | Focus the answer field |
| `Cmd/Ctrl + Enter` | Check the typed answer |
| `Enter` (after the verdict) | Accept the suggested rating |
| `1` to `4` | Rate manually, overriding the suggestion |

## Tips

- **Rate honestly even with a good verdict**: if you struggled despite a "Correct", rate Hard
- **Keep answers atomic**: the grader can only list what is missing if the model answer is a clear set of points
- **Use context deliberately**: cards written in the flow of a note grade better than cards copied out of context, because the grader reads the note around them

## What to Read Next

- [Review Interface](/review/review-interface/): the full review view and actions
- [Answering Cards](/review/answering-cards/): how ratings affect FSRS scheduling
- [Creating Flashcards](/creation/creating-flashcards/#typed-answers): marking cards as type-in during creation
- [Features Overview](/plugins/overview/): access levels and the AI provider settings
