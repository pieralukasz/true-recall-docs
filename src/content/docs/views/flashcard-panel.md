---
title: Flashcard Panel
sidebar:
  label: "Flashcard Panel (P)"
  order: 3
description: The main sidebar panel for managing flashcards per note with quick review, collection, and AI generation.
---

:::caution[My Notes]

- I've changed header, now it has an action button to start review. During review it shows jump to source icon.

:::

The **Flashcard Panel** is one of the most important views in True Recall. This sidebar automatically follows the note you're editing, showing all its flashcards, their review status, and quick actions. It's your hub for collecting new cards, managing existing ones, launching reviews, and generating cards with AI.

## Opening the Panel

- **Command palette:** `Cmd/Ctrl + P` → "Open flashcard panel"
- **File context menu:** Right-click any `.md` file → "Open flashcard panel"

The panel opens in the right sidebar and immediately syncs with the active note.

## Panel Layout

The panel has these sections from top to bottom:

1. **Header** — Card count badges, search bar, action buttons, more menu
2. **Flashcards** — All collected cards with state badges and actions
3. **Image Occlusion Groups** — IO cards grouped by source image
4. **Empty State** — Generation options when no cards exist

TODO PHOTO

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
- **Review** — Launch a [review session](/review/review-session/) for this note's cards.
- **Add (+)** — Opens the [Flashcard Editor](/views/flashcard-editor/) to create a new card via a form.
- **More (...)** — Opens the [actions menu](#header-more-menu).

### Search Bar

A full-width search input filters cards in real time by matching against question and answer content. Disabled when no cards exist.

### Follow Mode

During a review session, a file icon appears in the header indicating the panel is following the current review card's source note. When the review session ends, the panel returns to following the active editor note.

## Header More Menu

Click the **...** button to access these actions:

| Action                   | Description                                                                      |
| ------------------------ | -------------------------------------------------------------------------------- |
| Refresh                  | Reload flashcard data from the database                                          |
| Open source note         | Open the linked source note in a new tab                                         |
| Generate from highlights | AI-generate cards from `==highlighted==` text (only shown when highlights exist) |
| Browse in card browser   | Open the [Card Browser](/views/card-browser/) filtered to this note              |
| Copy to clipboard        | Copy all cards as a numbered `Q: ... A: ...` list                                |
| Export as CSV            | Download cards as a CSV file                                                     |
| Forget all flashcards    | Reset FSRS scheduling for every card to New state (confirmation required)        |
| Delete all flashcards    | Permanently remove all cards from this note (confirmation required)              |

## Card Display

Each card in the list shows:

- **Question text** rendered as Markdown
- **Color-coded left border** indicating FSRS state:

| Border Color | State                 |
| ------------ | --------------------- |
| Green        | New                   |
| Orange       | Learning / Relearning |
| Blue         | Review                |
| Red          | Suspended             |

### Status Badges

Cards may display small badges next to the question:

| Badge      | Meaning                                         |
| ---------- | ----------------------------------------------- |
| **S**      | Suspended — excluded from reviews               |
| **B**      | Buried — hidden until tomorrow (hover for date) |
| **C1, C2** | Cloze card — number indicates cloze index       |
| **⇄**      | Reversed card                                   |

### Expanded View

Click a card to expand it and reveal:

- Full **answer text** rendered as Markdown
- **Review count** — total number of reviews
- **Stability** — memory stability in days (e.g., "S: 23.4d")
- **Lapses** — times the card was forgotten (if any)
- **Note type** name

TODO PHOTO

### Source Text Highlighting

Hover over a card to highlight its original source text in the editor. Click the card to jump to the source location in the note.

## Card Actions

Right-click any card (or tap the three-dot icon) to open the context menu:

| Action                          | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| Edit                            | Open card in the [Flashcard Editor](/views/flashcard-editor/)          |
| Copy                            | Copy card to clipboard as `Q: ... A: ...`                              |
| Move                            | Transfer card to a different source note                               |
| Change type                     | Convert card to a different note type (e.g., Basic → Cloze)            |
| Make reversed / Remove reversed | Toggle a reversed pair for Basic cards. Not available for Cloze or IO. |
| AI Rewrite                      | Use AI to rewrite or split the card into better cards                  |
| Forget                          | Reset FSRS scheduling to New state and clear review history            |
| Suspend / Unsuspend             | Toggle whether the card appears in review sessions                     |
| Delete                          | Permanently remove the card                                            |
| Select                          | Enter selection mode with this card selected                           |

:::note
**Forget** is only available for cards that have been reviewed at least once (non-New state).
**Make reversed** is only available for Basic cards — not Cloze or Image Occlusion.
:::

## Selection Mode & Bulk Operations

### Entering Selection Mode

- Right-click a card → **Select**

A **selection toolbar** replaces the header, showing the selected count and bulk action buttons.

### Bulk Actions

| Action           | Description                                       |
| ---------------- | ------------------------------------------------- |
| Select All       | Select every card in the current note             |
| Move             | Move all selected cards to another note           |
| Change note type | Convert selected cards to a different type        |
| AI Rewrite       | AI rewrite all selected cards                     |
| Suspend          | Suspend all selected cards                        |
| Unsuspend        | Unsuspend all selected cards                      |
| Forget           | Reset scheduling for all selected cards           |
| Delete           | Delete all selected cards (confirmation required) |

Press the **X** button in the toolbar to exit selection mode.

## Card Types

| Type            | Panel Display                                                     |
| --------------- | ----------------------------------------------------------------- |
| Basic           | Question text, expandable answer                                  |
| Basic Reversed  | Shows **⇄** badge. Original and reversed cards listed separately. |
| Cloze           | Shows **C1**, **C2**, etc. badge for each cloze deletion          |
| Image Occlusion | Grouped by source image with View and Edit actions                |

### Image Occlusion Groups

IO cards are grouped by their source image rather than listed individually. Each group shows:

- A preview of the source image
- Region labels as clickable chips
- Group-level actions: Edit regions, Move, Delete all

## AI Generation

### Generate from Note

Use **More menu → Generate** or the empty state button to generate flashcards from the entire note content. The AI processes the note in chunks, streaming cards in real time with a progress counter (e.g., "Section 3/7").

### Generate from Highlights

Use **More menu → Generate from highlights** to create cards only from `==highlighted==` text in the note. Highlights already covered by existing cards are automatically skipped — this means you won't generate duplicate flashcards from the same highlights. This is one of the most efficient ways to create flashcards in True Recall.

### AI Rewrite

Right-click any card → **AI Rewrite** to have the AI improve, rewrite, or split a card into multiple better cards. Also available as a bulk action in selection mode.

## Panel Sync

The panel stays in sync automatically:

- **Active note** — switches when you open a different note in the editor
- **Review session** — follows the current review card's source note (file icon indicator in header)
- **Data changes** — reloads reactively when cards are added, edited, or deleted (via signals, no polling)
- **Editor changes** — re-scans for uncollected flashcard syntax after edits (500ms debounce)

## Export

| Format            | How to Access          | Output                                                  |
| ----------------- | ---------------------- | ------------------------------------------------------- |
| Copy to clipboard | More menu → Copy       | Numbered list: `1. Q: ... A: ...`                       |
| Export as CSV     | More menu → Export CSV | Downloads `<note-name>-flashcards.csv` with Q/A columns |

## Tips

- Leave the panel open while editing to see card status update in real time
- Collect regularly — uncollected cards are not scheduled for review
- Use selection mode for efficient bulk operations on multiple cards
- Hover over cards to highlight their source text in the editor
- Use the search bar to quickly find specific cards in notes with many flashcards
