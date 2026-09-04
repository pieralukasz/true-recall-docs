---
title: Review Interface
sidebar:
  order: 1
description: "The flashcard review view: work through due cards, rate your recall, and let FSRS schedule the next review."
---

:::caution[My Notes]
:::

The **Review View** is where learning happens. You see one card at a time: read the question, think of the answer, reveal it, then rate how well you recalled it. FSRS uses your rating to calculate the optimal next review date: a few hours away for something you're still learning, or months away for something solid.

## Opening the Review View

| Method | Action |
|--------|--------|
| Command palette | `Cmd/Ctrl + P` → "Review flashcards from current note" or "Review today's new cards" |
| [Dashboard](/views/dashboard/) | Click **Study** on any project or note row, or **Review** in the today bar |
| [Flashcard Panel](/views/flashcard-panel/) | Click the **Review** button in the header |

<!-- TODO PHOTO -->

## The Review Loop

Every card follows the same cycle:

**1. Question side**

The card shows only the question (or a cloze with blanks, or an image with a hidden region). Take a moment to actually recall the answer, don't flip immediately. The time you spend retrieving the information is what makes spaced repetition work.

Press `Space` (or `Cmd/Ctrl + Enter`) to reveal the answer.

:::tip[Can't recall? The card might be the problem]
If you consistently can't remember the answer, the issue might not be your memory. The card could be too complex, too vague, or you might be missing prerequisite knowledge. Consider rewriting it, breaking it into simpler cards, or learning more foundational material first. For more tips on effective flashcard design, visit [lucaspiera.com](https://lucaspiera.com).
:::

**2. Answer side**

The full card is shown: both the question and the answer. Compare your mental answer to what's on screen. Be honest, the algorithm works better with accurate ratings than inflated ones.

Below the card you also see how many times you have met it and how many times you forgot it, for example `Review #7 · 2 lapses`. The counter turns orange once the card crosses its preset's [leech](/review/leeches/) threshold. It is shown only after the reveal, so it cannot prime your recall.

**3. Rate your recall**

Four buttons appear, each with a preview of the interval that rating would produce:

| Rating | Key | What it means |
|--------|-----|---------------|
| **Again** | `1` | Forgot: you couldn't recall the answer |
| **Hard** | `2` | Recalled, but it was a real struggle |
| **Good** | `3` or `Space` | Recalled with normal effort |
| **Easy** | `4` | Instant recall, no effort needed |

The rating keys can be remapped in the review keybindings block of `Settings → True Recall → General → "Review interface"`.

For how each rating affects FSRS scheduling (stability, difficulty, intervals, learning phases, and lapses) see [Answering Cards](/review/answering-cards/).

:::tip[Rate honestly]
If you peeked at the answer or took an unusually long time, rate **Hard** or **Again**. Inflated ratings make cards disappear from your queue when they shouldn't, and you won't remember them when it matters.
:::

**4. Next card**

The rated card is scheduled and the next due card appears. Repeat until the session is complete.

<!-- TODO PHOTO -->

## Header Options

The review header can be customized in `Settings → True Recall → General → "Review interface"`:

| Setting | Description |
|---------|-------------|
| **Show review header** | Toggle the header bar (close button, stats and progress) entirely |
| **Show header stats** | Remaining counters: New (green), Learning (orange), Due (blue). Preview sessions add a **Preview** badge |
| **Show next review time** | Show interval previews on the rating buttons (e.g., "Good → 4d"). Hidden on phones, where the grade bar has no room for them |
| **Card content width** | Maximum width of the card text (Narrow, Default, Wide, Full width). Desktop only |

Showing interval previews is especially useful while you're learning FSRS: you can see exactly how your rating affects scheduling.

## Actions During Review

On desktop the rating row has three extra controls on its right: the ✨ button (Card Polish), the **Type in** toggle and a **Card actions** menu (⋮). The same actions are available as keyboard shortcuts.

### Card Actions

| Action | Key | Description |
|--------|-----|-------------|
| Edit card | `E` | Edit the card without leaving the session (opens the source note for note-review cards) |
| Polish card (AI) | ✨ button | Opens the [AI Workspace](/plugins/ai-assistant/) in card-polish mode for the current card. Each [Card Polish](/plugins/card-polish/) preset can bind its own hotkey |
| Ask AI about this card | menu | Opens the AI Workspace with the current card as context |
| Delete card | `Shift + 1` | Delete the card (undoable) |
| Suspend card | `Shift + 2` | Remove the card from future reviews (unsuspend from the [Card Browser](/views/card-browser/)) |
| Forget card | `F` | Reset the card to New |
| Bury card | `-` | Hide until tomorrow |
| Bury note | `=` | Hide all cards from the same note until tomorrow |
| Move card | `M` | Transfer the card to a different source note |
| Add flashcard | `A` | Open the [Flashcard Editor](/views/flashcard-editor/) linked to this card's note (`Cmd/Ctrl + Shift + E` pre-fills it with a copy of the current card) |
| Add image occlusion | menu | Create an [image occlusion](/creation/image-occlusion/) card for the same note |
| Change note type | menu | Convert the card to another note type |
| Typed answers | `T` | Toggle [Typed Answers](/review/type-in-mode/) for the session |
| My Note | `Cmd/Ctrl + K` | Attach a short review comment to the card (a thought, a doubt, a verification request). It is shown under the card until you remove it |
| Change preset | click the `FSRS: <preset>` label under the card | Set the FSRS preset for this card's source note |
| Open source note | menu | Jump to the note the card came from |

### Session Actions

| Action | Key | Description |
|--------|-----|-------------|
| Undo | `Cmd/Ctrl + Z` | Undo the last action: a rating returns the card to the queue with its scheduling reverted, a delete revives the card |
| Redo | command "Redo last undone action" | Re-apply an undone action |
| Close | `Escape` | End the session early |

## On Phones and Tablets

Since 2.2.0 the plugin runs on mobile. The review layout is rebuilt for a small screen:

- The grade bar is a single full-width row under the card, integrated with the view header.
- Interval previews and the secondary buttons are hidden; **Type in**, **Polish card (AI)** and every card action live in the view's overflow menu (the ⋮ in the top-right corner of the pane).
- Today's counts are shown inline instead of as stat cards.

## Inline Editing

Press `E` during any card to edit it without leaving the session. A toolbar appears with formatting options:

- **Bold** (`Cmd/Ctrl + B`), **Italic** (`Cmd/Ctrl + I`), **Underline** (`Cmd/Ctrl + U`)
- Cloze wrap (`Cmd/Ctrl + Shift + C`), links, images, inline code, math (LaTeX)

Changes save immediately and the card updates. Press `Escape` to close the editor and continue the session.

## Note Review

Note review lets you review an entire note as a single flashcard, useful for dense reference material, summaries, or notes you want to re-read on a schedule.

### Enabling Note Review

- **Flashcard Panel**: click the toggle icon in the panel header (when viewing a note with a `flashcard_uid`)
- **Command palette**: `Cmd/Ctrl + P` → "Toggle note review"

When enabled, a `note-review` card is created for that note. It appears in your review queue alongside regular cards.

### During Review

The full note content is rendered using Obsidian's live preview: formatting, links, images, and embeds all display normally. A small "Note Review" label and the source note link appear above and below the content.

By default, YAML frontmatter is hidden. To show it, enable **Show frontmatter in note review** in `Settings → True Recall → General → "Review interface"`.

### Disabling

Toggle note review off using the same toggle button or command. The `note-review` card is removed from the database.

## Image Occlusion in Review

For [image occlusion](/creation/image-occlusion/) cards, the review experience works differently:

- **Question side**: the image is shown with one region masked (covered with a dark rectangle)
- **Answer side**: the full image is revealed, with the previously masked region highlighted in green

If you created multiple regions on one image, each region becomes a separate card. They appear in the queue independently.

## Review States

### Active Review

Normal card-by-card study. Cards appear in a queue ordered by type: learning cards first (they come back fastest), then review cards, then new cards. With [R-Mode](/scheduling/workload-management/#r-mode) enabled, review cards are ranked by retrievability instead of due date.

### Waiting State

Sometimes you finish all due cards but some learning cards are still "cooling down" before their next repetition. The view shows a countdown until the next learning card is due: wait it out, or click **End session** and come back later. In R-Mode the waiting screen also offers the **Top Up** panel described below.

### Session Complete

When all due cards have been answered, a summary screen appears showing:

- Total cards reviewed
- Rating breakdown (Again / Hard / Good / Easy counts)
- Session duration

In R-Mode the summary also offers a **Top Up** panel: pick **Review** or **New**, type a number of cards and continue in the same session. After a [Custom Study](/review/cramming/) session it shows a **Next session** button (controlled by **Continuous custom reviews** in `Settings → True Recall → General → "Review interface"`), plus **Dashboard** and **Finish**.

<!-- TODO PHOTO -->

## Undo

Press `Cmd/Ctrl + Z` to undo the last action. For a rating, the card returns to the queue and its FSRS parameters are restored to what they were before you rated it. You can undo multiple times in a row, going back through recent ratings. Since 2.2.0 undo covers every editing path too: adding, editing, deleting, moving and changing the note type of a card are all undoable, and an undone review is removed from the review log so it never feeds scheduling.

:::note
Undo only works within the current session. Once you close the Review View, past ratings cannot be undone.
:::

## Session Persistence

If you close Obsidian mid-session, progress is saved automatically. When you open Obsidian again and start a review session, it resumes from where you left off: you won't see cards you already rated in that session.

## Fullscreen vs Panel Mode

`Settings → True Recall → General → "Review interface" → "Review mode"`:

| Mode | Behavior | Best for |
|------|----------|----------|
| **Fullscreen (main area)** | Takes over the main editor area | Focused sessions, fewer distractions |
| **Side panel** | Opens in the right sidebar | Reviewing while keeping a note visible |

Most people prefer Fullscreen: it's less visually cluttered and easier to focus. Personally, I use only fullscreen mode.

## Performance Notes

- Review uses cached FSRS scheduling engines per preset, so switching presets mid-session is fast.
- In global sessions, preset context is resolved once per source note and reused for sibling cards from the same note.
- Session start can be the most expensive phase on very large collections (5,000+ cards), because eligible cards must be scanned and prioritized.
- Changing the preset from the card's `FSRS:` label updates the source note's `fsrs_preset` frontmatter; it does not immediately reschedule all cards. Use `Settings → True Recall → FSRS → "Bulk operations" → "Reschedule all cards"` for collection-wide rescheduling.

## What to Read Next

- [Answering Cards](/review/answering-cards/): how each rating affects FSRS scheduling
- [Typed Answers](/review/type-in-mode/): type your answers and get a teacher-style verdict
- [Custom Study](/review/cramming/): Anki-style extra sessions and preview sessions that leave scheduling alone
- [Flashcard Panel](/views/flashcard-panel/): manage cards outside of review sessions
- [Statistics](/views/statistics/): review history and retention tracking
