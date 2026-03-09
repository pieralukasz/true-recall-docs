---
title: Review View
sidebar:
  label: "Review View (P)"
  order: 5
description: The flashcard review interface — work through due cards, rate your recall, and let FSRS schedule the next review.
---

:::caution[My Notes]
:::

The **Review View** is where learning happens. You see one card at a time: read the question, think of the answer, reveal it, then rate how well you recalled it. FSRS uses your rating to calculate the optimal next review date — a few hours away for something you're still learning, or months away for something solid.

## Opening the Review View

| Method | Action |
|--------|--------|
| Command palette | "Review flashcards from current note" or "Start review session" |
| Dashboard | Click **Study** on any project or note row |
| Flashcard Panel | Click the **Review** button in the header |

TODO PHOTO

---

## The Review Loop

Every card follows the same cycle:

**1. Question side**

The card shows only the question (or a cloze with blanks). Take a moment to actually recall the answer — don't flip immediately. The time you spend retrieving the information is what makes spaced repetition work.

Press `Space` to reveal the answer.

:::tip[Can't recall? The card might be the problem]
If you consistently can't remember the answer, the issue might not be your memory. The card could be too complex, too vague, or you might be missing prerequisite knowledge. Consider rewriting it, breaking it into simpler cards, or learning more foundational material first. For more tips on effective flashcard design, visit [lucaspiera.com](https://lucaspiera.com).
:::

**2. Answer side**

The full card is shown. Compare your mental answer to what's on screen. Be honest — the algorithm works better with accurate ratings than inflated ones.

**3. Rate your recall**

Four buttons appear, each with a preview of the interval that rating would produce:

| Rating | Key | What it means | Typical next review |
|--------|-----|---------------|---------------------|
| **Again** | `1` | Forgot. You couldn't recall the answer. | Minutes to hours |
| **Hard** | `2` | Recalled, but it was a real struggle | Shorter than normal |
| **Good** | `3` | Recalled with normal effort | On schedule |
| **Easy** | `4` | Instant recall, no effort needed | Longer than normal |

:::tip[Rate honestly]
If you peeked at the answer or took an unusually long time, rate **Hard** or **Again**. Inflated ratings make cards disappear from your queue when they shouldn't — you won't remember them when it matters.
:::

**4. Next card**

The rated card is scheduled and the next due card appears. Repeat until the session is complete.

TODO PHOTO

---

## Review States

### Active Review

Normal card-by-card study. Cards appear in a queue ordered by type: learning cards first (they come back fastest), then review cards, then new cards.

### Waiting State

Sometimes you finish all due cards but some learning cards are still "cooling down" before their next repetition. The view shows a countdown timer with two options:

- **Study Ahead** — review the cards now (slightly earlier than optimal)
- **Close** — end the session and come back later

### Session Complete

When all due cards have been answered, a summary screen appears showing:

- Total cards reviewed
- Session duration
- True retention rate (correct / total)
- Rating breakdown (Again / Hard / Good / Easy counts)
- Time until the next session

TODO PHOTO

---

## Header Options

The review header can be customized in **Settings → General**:

| Setting | Description |
|---------|-------------|
| **Show review header** | Toggle the header bar entirely |
| **Show header stats** | Badge counts (Learning / Review / New remaining) |
| **Show next review time** | Show interval previews on the rating buttons (e.g., "Good → 4d") |

Showing interval previews on buttons is especially useful while you're learning FSRS — you can see exactly how your rating affects scheduling.

---

## Actions During Review

### Card Actions

| Action | Key | Description |
|--------|-----|-------------|
| Edit | `E` | Edit the card inline without leaving the session |
| Suspend | `!` | Remove card from future reviews (unsuspend from Card Browser) |
| Bury card | `-` | Hide until tomorrow |
| Bury note | `=` | Hide all cards from the same note until tomorrow |
| Move | `M` | Transfer card to a different source note |
| Add flashcard | `A` | Open the Flashcard Editor linked to this card's note |
| Type-in mode | `T` | Toggle type-in answer mode for this card |
| Change preset | `P` | Set the FSRS preset for this card's source note |

### Session Actions

| Action | Key | Description |
|--------|-----|-------------|
| Undo | `Cmd/Ctrl+Z` | Undo last rating — card returns to queue, scheduling reverted |
| Close | `Escape` | End the session early |
| Help | `?` | Show all keyboard shortcuts |

---

## Inline Editing

Press `E` during any card to edit it without leaving the session. A toolbar appears with formatting options:

- **Bold** (`Cmd/Ctrl+B`)
- **Italic** (`Cmd/Ctrl+I`)
- **Link** — insert a wiki link or URL
- **Image** — insert an image reference
- **Code** — inline code or code block
- **Math** — inline LaTeX

Changes save immediately and the card updates. Press `Escape` to close the editor and continue the session.

---

## Type-in Mode

Press `T` to toggle type-in mode for the current card. A text input appears — type your answer, then press Enter to submit. True Recall compares your answer to the correct one using:

- **AI semantic grading** — your answer is graded on meaning, not exact wording (requires an API key or a [True Recall subscription](/subscription/))
- **Diff view** — your answer and the correct answer are shown side by side with differences highlighted

See [Type-in Mode](/review/type-in-mode/) for full details.

### AI Answer Grading

When AI grading is active, after submitting your answer:

1. AI compares your answer to the correct one and assigns a score (0–100)
2. Brief feedback explains why points were deducted
3. Click **Accept** to apply the auto-rating, or **Override** to rate manually

**Auto-rating thresholds:**

| AI Score | Rating Applied |
|----------|----------------|
| 90–100 | Good |
| 70–89 | Hard |
| 0–69 | Again |

**What AI grading understands:**

- Synonyms ("car" = "automobile")
- Paraphrases ("turns sunlight into energy" = "converts light to chemical energy")
- Partial answers — scored proportionally with feedback on what's missing
- Minor typos — treated as correct at 90%+ similarity

**Cycle through modes:** Press `T` repeatedly to cycle Off → AI Grading → Diff → Off.

**Custom grading prompt:** Settings → AI → Type-in grading prompt. Template variables: `{{correct}}`, `{{student}}`, `{{question}}`.

**When to prefer Diff mode:** exact terminology, spelling practice, or when offline (AI grading requires a network connection).

---

## Image Occlusion in Review

For image occlusion cards, the review experience works differently:

- **Question side** — the image is shown with one region masked (covered with a dark rectangle)
- **Answer side** — the full image is revealed, with the previously masked region highlighted in green

If you created multiple occlusion regions on one image, each region becomes a separate card. They appear in the queue independently.

---

## Undo

Press `Cmd/Ctrl+Z` to undo the last rating. The card returns to the end of the queue, and its FSRS parameters are restored to what they were before you rated it. You can undo multiple times in a row, going back through recent ratings.

:::note
Undo only works within the current session. Once you close the Review View, past ratings cannot be undone.
:::

---

## Session Persistence

If you close Obsidian mid-session, progress is saved automatically. When you open Obsidian again and start a review session, it resumes from where you left off — you won't see cards you already rated in that session.

---

## Fullscreen vs Panel Mode

**Settings → General → Review mode:**

| Mode | Behavior | Best for |
|------|----------|----------|
| **Fullscreen** | Takes over the main editor area | Focused sessions, fewer distractions |
| **Side Panel** | Opens in the right sidebar | Reviewing while keeping a note visible |

Most people prefer Fullscreen — it's less visually cluttered and easier to focus. Personally, I use only fullscreen mode.

---

## Performance Notes

- Review uses cached FSRS scheduling engines per preset — switching presets mid-session is fast.
- In global sessions, preset context is resolved once per source note and reused for sibling cards from the same note.
- Session start can be the most expensive phase on very large collections (5,000+ cards), because eligible cards must be scanned and prioritized.
- Changing preset with `P` updates the source note's `fsrs_preset` frontmatter — it does not immediately reschedule all cards. Use **Settings → FSRS → Preview reschedule** for collection-wide rescheduling.

---

## Related

- [Answering Cards](/review/answering-cards/) — rating strategies and FSRS tips
- [Type-in Mode](/review/type-in-mode/) — typed answers with AI grading
- [Flashcard Panel](/views/flashcard-panel/) — quick review without a full session
- [Statistics](/views/statistics/) — review history and retention tracking
