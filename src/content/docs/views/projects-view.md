---
title: Projects View
description: Manage and review flashcards organized by project with hierarchical sub-projects
links:
  - /features/projects/
  - /views/session-builder/
---

The Projects View is your bird's-eye view of everything you're studying. It shows all your projects as a collapsible tree with card counts, and lets you jump straight into a review session with one click.

Open it from the Command Palette: `Cmd/Ctrl+P` then search for "True Recall: Open projects panel".

## Interface

```
┌──────────────────────────────────────────┐
│  Projects                    [👁] [↻] [+]│
├──────────────────────────────────────────┤
│  🔍 Search projects...                   │
├──────────────────────────────────────────┤
│  ▼ Machine Learning                      │
│     12 notes · 3 new · 2 learning · 8 due│
│     [+] [📁+] [🗑] [⚙] [▶]              │
│                                          │
│     ▼ Neural Networks                    │
│       5 notes · 1 new · 0 learning · 3 due
│       [+] [📁+] [🗑] [⚙] [▶]            │
│                                          │
│       ├─ backpropagation.md  1·0·2       │
│       └─ attention-paper.md  0·0·1       │
│                                          │
│     ▼ Decision Trees                     │
│       2 notes · 0 new · 1 learning · 1 due
│       [+] [📁+] [🗑] [⚙] [▶]            │
│                                          │
│     ├─ feature-engineering.md  2·1·4     │
│     └─ data-preprocessing.md   0·0·0    │
│                                          │
│  ▶ Spanish Course                        │
│     45 cards · 5 new · 3 learning · 12 due
│     [+] [📁+] [🗑] [⚙] [▶]              │
│                                          │
│  ── Unassigned ──────────────────────    │
│     3 notes · 0 new · 0 learning · 2 due │
│                                          │
│  ── Empty projects ──────────────────    │
│  ▶ New Topic                             │
│     0 notes                              │
└──────────────────────────────────────────┘
```

The view splits into three sections: **root projects with cards** at the top (sorted by name), **Unassigned** notes that have flashcards but no project, and **Empty projects** with nothing due yet.

## Tree Structure

Projects form a collapsible tree. Click any project to expand or collapse its children. Sub-projects appear indented under their parent, and notes appear indented under their project.

Parent project statistics include all descendants. "Machine Learning" in the diagram above shows combined counts from its own notes plus Neural Networks and Decision Trees. If a project belongs to multiple parents, it shows up under each one.

## Project Actions

Each project row has action buttons:

| Button | Icon | Description |
|--------|------|-------------|
| **Add notes** | `+` | Add existing notes to this project |
| **Create sub-project** | `folder-plus` | Create a new project nested under this one |
| **Delete** | `trash` | Remove project (notes and cards remain) |
| **Custom study** | `sliders` | Open Session Builder scoped to this project |
| **Review** | `play` | Start a review session for this project |

:::caution
Deleting a parent project does NOT delete its sub-projects. Sub-projects become root-level projects.
:::

## Reviewing Projects

Hit the **play** button on any project to start a review session. The session pulls in cards from the project itself and from every sub-project beneath it, recursively. Reviewing "Machine Learning" means you'll see cards from Neural Networks, Decision Trees, and anything nested further down.

Want more control? Hit the **sliders** button instead. That opens the Session Builder pre-scoped to the project, where you can filter by card state, difficulty range, creation date, and more.

## Search

The search bar at the top filters projects by name as you type. Matching projects and their ancestors stay visible; everything else hides.

## Unassigned Notes

Notes with flashcards but no project land in the **Unassigned** section at the bottom. Expand it to see individual notes, or hit **play** to review all unassigned cards at once.
