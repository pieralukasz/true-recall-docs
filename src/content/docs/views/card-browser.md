---
title: Card Browser
description: Browse, search, filter, and manage your entire flashcard collection with advanced search syntax and bulk operations.
---

The **Card Browser** is a powerful view for managing all your flashcards. Search, filter, sort, and perform bulk operations on your card collection.

## Opening

Cmd/Ctrl + P -> "Open card browser"

## Search Syntax

Full-text search with query syntax:

| Query | Matches |
|-------|---------|
| `photosynthesis` | Cards containing "photosynthesis" |
| `state:new` | New cards only |
| `state:review` | Review cards only |
| `preset:medical` | Cards using "medical" preset |
| `project:Biology` | Cards in Biology project |
| `due:today` | Cards due today |
| `due:overdue` | Overdue cards |
| `created:7d` | Created in last 7 days |
| `lapses:>3` | More than 3 lapses |

Combine with space: `state:new project:Biology`

## Facets Sidebar

Filter cards by clicking facets:

- **State** — New, Learning, Review, Suspended
- **Card Type** — Basic, Cloze, Image Occlusion, Reversed
- **Source Note** — Notes with card counts
- **Preset** — Filter by FSRS preset
- **Project** — Filter by project hierarchy

## Sort Options

| Sort | Order |
|------|-------|
| Due date | Earliest first |
| Created | Newest first |
| Random | Shuffled |
| Lapses | Most lapses first |
| Interval | Longest first |

## Keyboard Navigation

| Key | Action |
|-----|--------|
| `j` / Down arrow | Move down |
| `k` / Up arrow | Move up |
| `Enter` | Edit card |
| `Space` | Toggle selection |
| `Cmd/Ctrl+A` | Select all |
| `Escape` | Clear selection |

## Multi-Select

- **Click** — Select single card
- **Shift+Click** — Select range
- **Ctrl/Cmd+Click** — Toggle selection

## Bulk Actions

When cards are selected:

| Action | Description |
|--------|-------------|
| Suspend | Pause reviews for selected |
| Unsuspend | Resume reviews |
| Delete | Remove selected cards |
| Move | Transfer to another note |
| Change Type | Change note type |
| Change Preset | Assign different preset |

## Card Preview Panel

When a card is selected, preview shows full question and answer, source note link, FSRS statistics, review history, and edit/delete actions.

## Orphaned Cards

Cards whose source note was deleted appear in the "Orphaned" facet. Options: Delete permanently, Move to existing note, or Keep without source.

## Tips

- Combine search filters for precise results: `state:review lapses:>2 due:overdue`
- Sort by "Lapses" to find cards you keep forgetting
- Check orphaned cards occasionally and resolve them
- Select cards and export to CSV for external analysis
