---
title: Review View
description: The flashcard review interface for spaced repetition study
links:
  - /features/review-system/
  - /views/session-builder/
  - /reference/keyboard-shortcuts/
---

The Review View is where you actually study. It shows one card at a time and uses FSRS (Free Spaced Repetition Scheduler) to decide when you'll see it next based on how well you recalled it.

## Opening Review

- **Ribbon icon**: Click the purple brain icon in the sidebar
- **Command Palette**: `Cmd/Ctrl+P` then search "True Recall: Start review session"
- **Flashcard Panel**: Click the "Review" button

## Interface Layout

When a card appears, you see the question first. Press Space or click "Show Answer" to reveal the answer, then rate yourself.

### Question View
```
┌─────────────────────────────────────┐
│ New: 5 | Learning: 3 | Due: 12      │
├─────────────────────────────────────┤
│                                     │
│                                     │
│        What is spaced               │
│        repetition?                  │
│                                     │
│                                     │
├─────────────────────────────────────┤
│         [Show Answer]               │
│                                     │
│  Source: Learning Techniques.md     │
│  Projects: [Study Methods] [School] │
└─────────────────────────────────────┘
```

### Answer View
```
┌─────────────────────────────────────┐
│ New: 5 | Learning: 3 | Due: 12      │
├─────────────────────────────────────┤
│        What is spaced               │
│        repetition?                  │
│ ─────────────────────────────────── │
│        A learning technique that    │
│        spaces out review sessions   │
│        to optimize memory retention │
├─────────────────────────────────────┤
│ [Again]  [Hard]   [Good]   [Easy]   │
│  <1m      <6m      8d       20d     │
│                                     │
│  Source: Learning Techniques.md     │
└─────────────────────────────────────┘
```

## Progress Counters

The header bar tracks your session in real time.

```
New: 5 | Learning: 3 | Due: 12
```

- **New** -- remaining new cards for today
- **Learning** -- cards in the learning or relearning phase
- **Due** -- review cards due today

The header also has **Undo** (revert last rating), a **Menu** for extra actions, and **Close** (X) to end the session.

## Rating Buttons

After revealing the answer, rate how well you recalled it. Each button shows a preview of the next interval underneath (e.g. `<1m`, `8d`, `2mo`).

| Button | Key | Meaning | Effect |
|--------|-----|---------|--------|
| **Again** | `1` | Forgot | Reset, short interval |
| **Hard** | `2` | Struggled | Longer interval, +difficulty |
| **Good** | `3` | Recalled | Normal interval |
| **Easy** | `4` | Instant | Longer interval, -difficulty |

:::caution
Rate honestly. Inflating your ratings feels good short-term but hurts retention long-term -- FSRS learns from your real performance data.
:::

## Keyboard Shortcuts

You can drive the entire review session from the keyboard.

| Key | Action |
|-----|--------|
| `Space` | Show answer / Rate Good |
| `Enter` | Show answer |
| `1` | Rate Again |
| `2` | Rate Hard |
| `3` | Rate Good |
| `4` | Rate Easy |
| `!` (Shift+1) | Suspend card |
| `-` | Bury card |
| `=` | Bury all cards from note |
| `E` | Edit card |
| `M` | Move card |
| `N` | New card |
| `B` | Branch/copy card |
| `Cmd/Ctrl+Z` | Undo last |
| `Escape` | Close review |

## Card Actions

Beyond rating, you can manage cards mid-session without breaking your flow.

| Action | What it does |
|--------|-------------|
| **Suspend** | Removes the card from review indefinitely. Good for cards with errors or ones you want to revise later. Unsuspend via the Card Browser. |
| **Bury** | Hides the card until tomorrow. Skips it without affecting its schedule. |
| **Bury Note** | Buries all cards from the same source note at once. |
| **Edit** | Opens a card editor modal so you can fix typos or clarify wording, then continue reviewing. |
| **Move** | Transfers the card to a different note while keeping it in your review queue. |
| **Branch** | Duplicates the card in the same note. The copy starts as a new card. |

## Review Modes

The review can run fullscreen for distraction-free study or as a side panel so you can keep your notes visible. Configure this in Settings, then True Recall, then General.

:::note
Click the **Source** link below any card to jump straight to the note it came from.
:::
