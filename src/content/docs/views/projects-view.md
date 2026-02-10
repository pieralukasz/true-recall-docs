---
title: Projects View
description: Manage and review flashcards organized by project with hierarchical sub-projects
---

The Projects View displays all your projects as a tree with card counts and provides quick access to project-based review sessions. Sub-projects appear nested under their parents with aggregated statistics.

## Opening Projects View

- **Command Palette**: `Cmd/Ctrl+P` → "True Recall: Open projects panel"

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

### Layout Sections

| Section | Description |
|---------|-------------|
| **Root projects with cards** | Top-level projects (not sub-projects of anything) with active cards, sorted by name |
| **Unassigned** | Notes with flashcards but no project assignment |
| **Empty projects** | Projects with no cards due |

## Tree Structure

Projects are displayed as a **collapsible tree**. Clicking a project toggles its children:

- **Root projects** appear at the top level
- **Sub-projects** appear indented under their parent when expanded
- **Notes** appear indented under their project when expanded
- **Multi-parent projects** appear under each parent (duplicated in tree)

The chevron icon indicates expandable items:
- **▶** — collapsed (has children or notes)
- **▼** — expanded

### Indentation

Each level of nesting adds visual indentation. A sub-project of a sub-project appears further indented than a direct child.

### Statistics Aggregation

Parent project statistics include all descendant sub-project cards:
- "Machine Learning" shows the combined count of its own notes PLUS Neural Networks' notes PLUS Decision Trees' notes
- This matches Anki's behavior where a parent deck shows total cards from all sub-decks

## Project Actions

Each project row has action buttons:

| Button | Icon | Description |
|--------|------|-------------|
| **Add notes** | `+` | Add existing notes to this project |
| **Create sub-project** | `folder-plus` | Create a new project nested under this one |
| **Delete** | `trash` | Remove project (notes and cards remain) |
| **Custom study** | `sliders` | Open Session Builder scoped to this project |
| **Review** | `play` | Start a review session for this project |

:::note
The **Review** and **Custom study** buttons only appear for projects with active cards.
:::

### Create Sub-Project

1. Click the **folder-plus** icon on the parent project
2. Select a note from the modal
3. The note becomes a sub-project with:
   - A **self-reference** (makes it a project)
   - The **parent project** in its frontmatter (nests it)

### Delete Project

1. Click the **trash** icon
2. Confirm deletion
3. The project is removed from all notes' frontmatter
4. Notes and their cards remain untouched

:::caution
Deleting a parent project does NOT delete its sub-projects. Sub-projects become root-level projects.
:::

## Reviewing Projects

### Cascading Review

Clicking **play** on a project starts a review session that includes:
1. Cards from notes **directly** in this project
2. Cards from all **sub-projects**, recursively

This means reviewing "Machine Learning" includes cards from "Neural Networks", "Decision Trees", and all their nested sub-projects.

### Custom Study

Clicking **sliders** opens the Session Builder pre-scoped to the project. You can further filter by:
- Card state (new, learning, due)
- Difficulty range
- Creation date
- And more

## Selection Mode

Long-press or right-click a note to enter selection mode:

1. **Select multiple notes** across projects
2. **Footer appears** with:
   - Card count summary (new/learning/due)
   - **Add to Project** — batch-add selected notes to a project
   - **Review Selected** — start a session with just the selected notes

## Search

The search bar (desktop only) filters projects by name:
- Type to filter the project list
- Matching projects and their ancestors are shown
- Non-matching projects are hidden

## Show/Hide Completed Notes

Toggle the **eye** icon in the header to show or hide notes that have no cards due:
- **Eye visible**: All notes shown (including completed ones)
- **Eye hidden**: Only notes with active cards shown

## Unassigned Notes

Notes with flashcards but no project assignment appear in the **Unassigned** section:
- Click to expand and see individual notes
- Click **play** to review all unassigned cards
- Use selection mode to batch-add them to projects

## Tips

### Use Project Notes as MOCs

Since every project is a note, use it as a **Map of Content**:
- Write overview content
- Link to key resources
- Track study goals
- Add exam dates or deadlines

### Review Strategy

- Review **root projects** for broad daily practice
- Review **sub-projects** when you want to focus on a specific topic
- Check **aggregated stats** on parent projects to spot areas needing attention

### Keep Hierarchy Shallow

- 2-3 levels of nesting is usually enough
- Deep hierarchies are harder to navigate
- Start flat, nest only when a project has many sub-topics

## Troubleshooting

### Project Shows Wrong Count

- Stats aggregate from all sub-projects — this is by design
- Check that sub-projects are correctly linked (self-reference + parent)
- Reload the plugin to rebuild the index

### Sub-Project Not Appearing Under Parent

- The sub-project note must have **both**:
  1. A self-reference: `"[[Sub-Project Name]]"`
  2. The parent project: `"[[Parent Project]]"`
- The parent must also be a valid project (with its own self-reference)
- Project names are case-sensitive

### Project Not Appearing at All

- Check that the note has `projects` in its frontmatter
- Ensure at least one note belongs to the project
- Remove trailing spaces from project names

### Can't Add Notes

- Verify the note has a `flashcard_uid` in frontmatter
- Check for existing assignment
- Try editing frontmatter directly
