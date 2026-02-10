---
title: Card Browser
description: Table view for browsing, filtering, and managing your entire card collection
---

The Card Browser gives you a full table view of every card in your collection, with FSRS scheduling data visible at a glance. Use it to find specific cards, inspect scheduling details, and perform bulk operations.

## Opening the Browser

- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Open card browser"

The browser opens as a main-area tab (like a note).

## Browser Layout

```
┌─────────────────────────────────────────────┐
│ [🔍 Search cards...]              [↻ Refresh]│
│ (All) (New) (Learning) (Review) ...  42 cards│
├──────┬──────┬─────┬────┬────┬────┬────┬──────┤
│ Question  │Answer│State│Due │Intv│Laps│Stab│Source│
├──────┬──────┬─────┬────┬────┬────┬────┬──────┤
│ What is..│ X is │ New │Tmrw│  - │  0 │  - │ Note │
│ Define Y │ Y is │ Rev │ 5d │ 14d│  1 │ 8.2│ Note │
│ ...      │ ...  │ ... │ ...│ ...│ ...│ ...│ ...  │
├──────────────────────────────────────────────┤
│ Q: What is X?                                │
│ A: X is...                                   │
│ Due: Tomorrow │ Stab: 2.1d │ Diff: 5.3 │ ...│
└──────────────────────────────────────────────┘
```

## Toolbar

### Search
Type in the search bar to filter cards by question, answer, or source note name. The search is case-insensitive and matches partial text.

### State Filters

Filter pills let you narrow down to a specific card state:

| Filter | Shows |
|--------|-------|
| **All** | Every card in the collection |
| **New** | Cards never reviewed |
| **Learning** | Cards in learning steps |
| **Review** | Graduated review cards |
| **Relearn** | Cards being relearned after a lapse |
| **Suspended** | Cards excluded from review |
| **Buried** | Cards hidden until tomorrow |

### Card Count
Shows "X of Y cards" when a filter or search is active, or "Y cards" when showing all.

## Table Columns

| Column | Description | Sortable |
|--------|-------------|----------|
| **Question** | Truncated question text (plain text, no markdown) | Yes |
| **Answer** | Truncated answer text | Yes |
| **State** | Color-coded state badge (New, Learning, Review, etc.) | Yes |
| **Due** | Relative due date ("Today", "In 5d", "3d ago") | Yes |
| **Interval** | Scheduled interval in days/months/years | Yes |
| **Lapses** | Number of times the card was forgotten | Yes |
| **Stab.** | Memory stability in days (FSRS parameter) | Yes |
| **Diff.** | Card difficulty on a 1–10 scale (FSRS parameter) | Yes |
| **Source** | Name of the source note | Yes |

### Sorting
Click any column header to sort. Click again to toggle ascending/descending. An arrow icon indicates the current sort column and direction.

## Card Detail Panel

Click any row to open a preview panel at the bottom of the browser.

### Preview Content
- **Question & Answer**: Full markdown-rendered content (supports images, code blocks, math)
- **Metadata grid**: Due, Interval, Stability, Difficulty, Lapses, Reps, Created, Last Review, Projects
- **Source link**: Click to navigate to the source note

### Preview Actions

| Button | Action |
|--------|--------|
| **Suspend / Unsuspend** | Toggle card suspension |
| **Reset** | Reset card to New state (clears scheduling) |
| **Delete** | Permanently remove the card |

Click **×** or click another row to close the preview.

## Selection & Bulk Operations

### Entering Selection Mode
- Click a checkbox on any row to enter selection mode
- In selection mode, click rows or checkboxes to toggle selection
- Use the header checkbox to select/deselect all filtered cards

### Bulk Actions

When cards are selected, a footer bar appears with:

| Action | Description |
|--------|-------------|
| **Suspend** | Suspend all selected cards |
| **Unsuspend** | Unsuspend all selected cards |
| **Reset** | Reset all selected cards to New |
| **Delete** | Delete all selected cards |

Click **×** on the footer to exit selection mode.

## Tips

### Finding Problem Cards
- Sort by **Lapses** (descending) to find frequently forgotten cards — these may need rewording
- Sort by **Difficulty** (descending) to spot the hardest cards
- Filter by **Suspended** to audit cards you've paused

### Reviewing Scheduling Data
- **Stability** shows how many days of memory strength a card has — low stability means fragile memory
- **Interval** shows the gap between reviews — compare with stability to assess card health
- **Due** date helps you plan study sessions

### Workflow with Other Views
- Use the Card Browser to find and inspect cards across your entire collection
- Use the [Flashcard Panel](/views/flashcard-panel) to manage cards from a single note
- Use the [Session Builder](/views/session-builder) to create custom review sessions with advanced filters

## Troubleshooting

### Browser is Empty
- Verify you have cards in the database (check the Flashcard Panel for any note)
- Try the Refresh button in the toolbar
- Reload the plugin if data seems stale

### Table Feels Slow
- The table uses virtual scrolling — only visible rows are rendered, so thousands of cards should be smooth
- If the browser is still slow, try narrowing your search or applying a state filter

### Cards Not Reflecting Changes
- The browser auto-refreshes when cards change elsewhere in the app
- If data is stale, click the Refresh button to force a reload
