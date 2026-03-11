---
title: Dashboard
sidebar:
  label: "Dashboard"
  order: 1
description: "The main hub for your projects, notes, and daily study workload — organize, study, and track everything from one place."
---

:::caution[My Notes]
:::

The **Dashboard** is your command center. It shows every note that has flashcards, lets you organize notes into projects, and gives you a quick picture of what's due today. Start your study sessions here, rearrange your knowledge structure, and archive things you no longer need.

## Opening the Dashboard

- **Command palette:** `Cmd/Ctrl + P` → "Open dashboard"
- **Ribbon icon:** Click the grid icon in the left ribbon
- **Status bar:** Click the card counts in the bottom-right corner of Obsidian (e.g., `28 new · 3 lrn · 354 due`)

<!-- TODO PHOTO -->

## Layout

```
+===========================================================+
|  [Projects] [Notes] [Orphaned]         [🔍 Search...] [Archived]  |
+===========================================================+
|                                                           |
|  ▶ Biology Exam                         12 due  [Study]  |
|      Chapter 3: Cell Biology             8 due           |
|      Chapter 4: Genetics                 4 due           |
|                                                           |
|  ▶ Language Learning                     0 due  [Study]  |
|      Spanish: Vocabulary                 0 due           |
|                                                           |
+-----------------------------------------------------------+
|  [Get Shared]   [Import File]                            |
+===========================================================+
```

<!-- TODO PHOTO -->

Three tabs sit at the top: **Projects**, **Notes**, and **Orphaned** (only visible when orphaned notes exist). A search bar filters rows in real time. The **Archived** chip toggles visibility of archived items.

---

## Projects Tab

The Projects tab shows your notes organized into a hierarchy. Each project row displays how many cards are due and can be expanded to show its member notes.

### What you see

- **Project row** — name, total cards due across all member notes, a **Study** button
- **Note rows** (nested under their project) — note name, cards due in that note
- **Unassigned notes** — notes with cards that don't belong to any project appear at the bottom

Each row shows a color-coded due count. Green means nothing is due. Orange means some cards are due for review today.

<!-- TODO PHOTO -->

### Starting a review from the Dashboard

Click **Study** on a project row to launch a review session scoped to that project — only cards from notes in that project are included. Click **Study** on a note row to review cards from that specific note only.

### Project row context menu

Right-click any project to access:

| Action | Description |
|--------|-------------|
| Study project | Launch a review session for the whole project |
| Custom session | Build a filtered session (states, limits, card types) |
| Go to project note | Open the project's linked note in the editor |
| Rename | Change the project name (renames the underlying note file) |
| Pick preset | Assign an FSRS preset to the project (writes `fsrs_preset` to the note's frontmatter) |
| Archive project | Hide the project and its notes from the default view (sets `archived: true` in the note's frontmatter) |
| Unarchive project | Restore an archived project |

### Drag-and-drop organization

Drag rows to reorganize your hierarchy without menus:

| Drag | Drop | Result |
|------|------|--------|
| Project → another project | Target project | Nest as a subproject |
| Note → a project | Target project | Add note to that project |
| Note → another note | Empty area between notes | Create a new project containing both notes |
| Note or project → root drop zone | Bottom of the list | Remove from parent (unnest) |

:::tip[Building your structure]
You don't need to plan your project hierarchy upfront. Start by creating a few notes and reviewing them individually. Once you have enough notes on related topics, drag them onto each other to create a project.
:::

---

## Notes Tab

The Notes tab shows every note in your vault that has at least one flashcard in the database. Unlike the Projects tab, there's no hierarchy — it's a flat list, sorted by due count.

This is useful when you want to study a specific note regardless of which project it belongs to, or when you want to audit which notes have cards.

<!-- TODO PHOTO -->

### Note row context menu

Right-click any note to access:

| Action | Description |
|--------|-------------|
| Study | Review cards from this note |
| Custom session | Build a filtered session for this note |
| Go to note | Open the note in the editor |
| Rename | Rename the note (renames the file) |
| Archive | Hide this note from the default view (sets `archived: true` in the note's frontmatter) |
| Unarchive | Restore an archived note |
| Select | Enter selection mode with this note selected |

`Detach from project` appears on note rows inside the Projects tab, not here.

### Orphaned Notes

The **Orphaned** tab appears when one or more notes in your database no longer exist on disk — the file was renamed, moved, or deleted after cards were collected.

Orphaned cards remain in the database and can still be reviewed, but they can't be linked back to a note. Use the [Card Browser](/views/card-browser/) to find orphaned cards (`note:"deleted-note-name"`) and delete or move them to a live note.

---

## Selection Mode

You can select multiple notes at once to perform bulk actions.

1. Right-click a note → **Select** (or click the checkbox that appears on hover)
2. A toolbar replaces the top bar, showing the selected count

| Bulk Action | Description |
|-------------|-------------|
| All | Select every visible note |
| Create project | Create a new project containing all selected notes |
| Archive | Archive all selected notes |
| Study | Start a review session for all selected notes combined |
| Cancel | Exit selection mode |

---

## Common Workflows

### Start today's review

Open the Dashboard, look at the Projects tab for any row with an orange due count, and click **Study**. To review everything due across all projects at once, use the Command Palette → "Start review session".

### Create a project from related notes

1. Go to the Notes tab
2. Find the notes you want to group (e.g., "Chapter 3", "Chapter 4", "Lab Notes")
3. Right-click the first note → **Select**
4. Check the remaining notes
5. Click **Create project** → give it a name → confirm

### Archive a completed course

When you've finished studying for an exam and don't want the notes cluttering your daily view:

1. Right-click the project in the Projects tab → **Archive project**
2. The project and all its notes disappear from the default view
3. To access them later, toggle the **Archived** chip in the top bar

:::caution[Archive sparingly]
The whole point of True Recall is that old knowledge doesn't disappear — it stays in your rotation and connects to new things you learn. Archiving cuts that off.

Only archive something when you're truly certain you'll never need it again. An old course you hated? Fine. A course you just finished? Wait. You'll be surprised how often "finished" material becomes relevant again — and when it does, those cards are already scheduled and waiting.
:::

---

## Bottom Action Bar

| Button | Description |
|--------|-------------|
| **Get Shared** | Opens [AnkiWeb Shared Decks](https://ankiweb.net/shared/decks) — a library of thousands of community-made Anki decks. Because True Recall is fully compatible with Anki's `.apkg` format, you can import any deck directly. |
| **Import File** | Import cards from an Anki `.apkg` file or CSV |

---

## Known Limitations

1. Duplicate note basenames can make navigation ambiguous — the Dashboard uses basenames for note display and resolution.
2. Some project-note mapping paths are name-based and can collide on duplicate names.
3. Assign/move/create-subproject capabilities are exposed as drag-and-drop or selection workflows, not as dedicated menu labels.

---

## Related

- [Projects](/creation/projects-and-notes/)
- [Archiving](/creation/projects-and-notes/#archiving)
- [Card Browser](/views/card-browser/)
