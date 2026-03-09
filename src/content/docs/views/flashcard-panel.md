---
title: Flashcard Panel
sidebar:
  order: 2
description: The main sidebar panel for managing flashcards per note with quick review, collection, and AI generation.
---

The **Flashcard Panel** is one of the most important views in True Recall. This sidebar automatically follows the note you're editing, showing all its flashcards, their review status, and quick actions. It's your hub for collecting new cards, managing existing ones, launching reviews, and generating cards with AI.

## Opening the Panel

- **Command palette:** `Cmd/Ctrl + P` → "Open flashcard panel"
- **File context menu:** Right-click any `.md` file → "Open flashcard panel"

The panel opens in the right sidebar and immediately syncs with the active note.

## Panel Layout

The panel has these sections from top to bottom:

1. **Header** — Card count badges, search bar, action buttons, more menu
2. **Quick Review** — One due card with rating buttons (optional, collapsible)
3. **Flashcards** — All collected cards with state badges and actions
4. **Image Occlusion Groups** — IO cards grouped by source image
5. **Empty State** — Generation options when no cards exist

## Header

### Status Badges

Color-coded badges show card counts by FSRS state:

| Color  | State              |
| ------ | ------------------ |
| Green  | New                |
| Orange | Learning           |
| Blue   | Review (due today) |

### Action Buttons

On the right side of the header:

- **Collect** — Appears when uncollected flashcards exist in the note. Shows a count badge with a pulsing animation. Click to collect all detected flashcard syntax into the database.
- **Add (+)** — Create a new flashcard manually via the note editor modal.
- **More (...)** — Opens the [actions menu](#header-more-menu).

### Search Bar

A full-width search input filters cards in real time by matching against question and answer content. Disabled when no cards exist.

### Follow Mode

During a review session, a file icon appears in the header indicating the panel is following the current review card's source note. When the review session ends, the panel returns to following the active editor note.

## Header More Menu

Click the **...** button to access these actions:

| Action                     | Description                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------- |
| Refresh                    | Reload flashcard data from the database                                             |
| Open source note           | Open the linked source note in a new tab                                            |
| Generate from highlights   | AI-generate cards from `==highlighted==` text (only shown when highlights exist)     |
| Start review               | Launch a full [review session](/review/review-session/) for this note's cards       |
| Browse in card browser     | Open the [Card Browser](/views/card-browser/) filtered to this note                 |
| Copy to clipboard          | Copy all cards as a numbered `Q: ... A: ...` list                                   |
| Export as CSV              | Download cards as a CSV file                                                        |
| Forget all flashcards      | Reset FSRS scheduling for every card to New state (confirmation required)            |
| Delete all flashcards      | Permanently remove all cards from this note (confirmation required)                  |

## Card Display

Each card in the list shows:

- **Question text** rendered as Markdown
- **Color-coded left border** indicating FSRS state:

| Border Color | State                |
| ------------ | -------------------- |
| Green        | New                  |
| Orange       | Learning / Relearning |
| Blue         | Review               |
| Red          | Suspended            |

### Status Badges

Cards may display small badges next to the question:

| Badge      | Meaning                                     |
| ---------- | ------------------------------------------- |
| **S**      | Suspended — excluded from reviews           |
| **B**      | Buried — hidden until tomorrow (hover for date) |
| **C1, C2** | Cloze card — number indicates cloze index   |
| **⇄**      | Reversed card                               |

### Expanded View

Click a card to expand it and reveal:

- Full **answer text** rendered as Markdown
- **Review count** — total number of reviews
- **Stability** — memory stability in days (e.g., "S: 23.4d")
- **Lapses** — times the card was forgotten (if any)
- **Note type** name

### Source Text Highlighting

Hover over a card to highlight its original source text in the editor. Click the card to jump to the source location in the note.

## Card Actions

Right-click any card (or tap the three-dot icon) to open the context menu:

| Action                          | Description                                                              |
| ------------------------------- | ------------------------------------------------------------------------ |
| Edit                            | Open card in the note editor modal                                       |
| Copy                            | Copy card to clipboard as `Q: ... A: ...`                                |
| Move                            | Transfer card to a different source note                                 |
| Change type                     | Convert card to a different note type (e.g., Basic → Cloze)             |
| Make reversed / Remove reversed | Toggle a reversed pair for Basic cards. Not available for Cloze or IO.   |
| AI Rewrite                      | Use AI to rewrite or split the card into better cards                    |
| Forget                          | Reset FSRS scheduling to New state and clear review history              |
| Suspend / Unsuspend             | Toggle whether the card appears in review sessions                       |
| Delete                          | Permanently remove the card                                              |
| Select                          | Enter selection mode with this card selected                             |

:::note
**Forget** is only available for cards that have been reviewed at least once (non-New state).
**Make reversed** is only available for Basic cards — not Cloze or Image Occlusion.
:::

## Selection Mode & Bulk Operations

### Entering Selection Mode

- Right-click a card → **Select**
- On mobile: long-press a card

A **selection toolbar** replaces the header, showing the selected count and bulk action buttons.

### Bulk Actions

| Action           | Description                                              |
| ---------------- | -------------------------------------------------------- |
| Select All       | Select every card in the current note                    |
| Move             | Move all selected cards to another note                  |
| Change note type | Convert selected cards to a different type               |
| AI Rewrite       | AI rewrite all selected cards                            |
| Suspend          | Suspend all selected cards                               |
| Unsuspend        | Unsuspend all selected cards                             |
| Forget           | Reset scheduling for all selected cards                  |
| Delete           | Delete all selected cards (confirmation required)        |

Press the **X** button in the toolbar to exit selection mode.

## Quick Review

A collapsible section above the card list that lets you review due cards without opening a full review session.

### Setup

Enable in **Settings → General → "Show quick review in panel"**.

### How It Works

1. Shows one due card at a time, prioritized by: Learning/Relearning → Review → New
2. Click **Show Answer** to reveal the answer
3. Rate with one of four buttons — each shows a preview of the next interval:
   - **Again** (red) — failed, restart learning
   - **Hard** (orange) — difficult, shorter interval
   - **Good** (green) — normal recall
   - **Easy** (cyan) — effortless, longer interval
4. The next due card appears automatically
5. Shows "All caught up!" when no cards remain

:::tip[Tip]
Quick review automatically hides when a formal review session is active, so the two never overlap.
:::

## Card Types

| Type              | Panel Display                                                       |
| ----------------- | ------------------------------------------------------------------- |
| Basic             | Question text, expandable answer                                    |
| Basic Reversed    | Shows **⇄** badge. Original and reversed cards listed separately.   |
| Cloze             | Shows **C1**, **C2**, etc. badge for each cloze deletion            |
| Image Occlusion   | Grouped by source image with View and Edit actions                  |

### Image Occlusion Groups

IO cards are grouped by their source image rather than listed individually. Each group shows:

- A preview of the source image
- Region labels as clickable chips
- Group-level actions: Edit regions, Move, Delete all

## AI Generation

### Generate from Note

Use **More menu → Generate** or the empty state button to generate flashcards from the entire note content. The AI processes the note in chunks, streaming cards in real time with a progress counter (e.g., "Section 3/7").

### Generate from Highlights

Use **More menu → Generate from highlights** to create cards only from `==highlighted==` text in the note. Highlights already covered by existing cards are automatically skipped.

### AI Rewrite

Right-click any card → **AI Rewrite** to have the AI improve, rewrite, or split a card into multiple better cards. Also available as a bulk action in selection mode.

### Streaming

During generation, new cards appear in the list in real time with word-by-word animation. A counter shows how many cards have been generated. Cards are automatically deduplicated against existing ones.

:::note
AI generation requires either a True Recall AI subscription or an OpenRouter API key configured in settings.
:::

## Collection

True Recall detects flashcard syntax written directly in your notes (e.g., `#flashcard` blocks).

- When uncollected cards are detected, the **Collect** button appears in the header with a count badge and pulsing animation
- Click to collect all detected cards into the database at once
- Optionally, collected content can be removed from the note after collection (configurable in **Settings → General → "Remove flashcard content after collect"**)

## Panel Sync

The panel stays in sync automatically:

- **Active note** — switches when you open a different note in the editor
- **Review session** — follows the current review card's source note (file icon indicator in header)
- **Data changes** — reloads reactively when cards are added, edited, or deleted (via signals, no polling)
- **Editor changes** — re-scans for uncollected flashcard syntax after edits (500ms debounce)

## Mobile

On mobile devices the panel adapts:

- **Header hidden** — card counts (New/Learning/Review) appear in the view title bar instead
- **Pane menu** — swipe down or tap **...** for actions: Refresh, Browse, Copy, Export, Open file, Delete all
- **Long-press** a card to enter selection mode

## Export

| Format            | How to Access           | Output                                                 |
| ----------------- | ----------------------- | ------------------------------------------------------ |
| Copy to clipboard | More menu → Copy        | Numbered list: `1. Q: ... A: ...`                       |
| Export as CSV     | More menu → Export CSV  | Downloads `<note-name>-flashcards.csv` with Q/A columns |

## Tips

- Leave the panel open while editing to see card status update in real time
- Use quick review for just a few due cards instead of opening a full session
- Collect regularly — uncollected cards are not scheduled for review
- Use selection mode for efficient bulk operations on multiple cards
- Hover over cards to highlight their source text in the editor
- Use the search bar to quickly find specific cards in notes with many flashcards
