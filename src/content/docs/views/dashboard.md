---
title: Dashboard
sidebar:
  order: 1
description: "Actual Dashboard behavior in current True Recall builds: project/note workflows, archiving, and limitations."
---

Dashboard is the main operational view for projects, notes, and daily workload.

## Main controls

- Tabs: **Projects**, **Notes**, and conditional **Orphaned**
- Search for note/project names
- **Archived** toggle chip to show/hide archived entities

## Projects tab (current behavior)

### Project row context menu

- Study project
- Custom session
- Go to project note
- Rename
- Pick preset
- Archive project / Unarchive project

### Drag-and-drop flows

- project → project (reparent)
- note → project (reparent)
- note → note (create new project from two notes)
- drag to root drop zone (unnest)

## Notes tab (current behavior)

### Note row context menu

- Study
- Custom session
- Go to note
- Rename
- Archive / Unarchive
- Select

`Detach from project` is a project-tree context action (Projects tab note rows).

### Selection mode actions

- All
- Create project
- Archive
- Study
- Cancel

## Bottom action bar

Current buttons:

- Get Shared
- Import File

## Archived behavior

- Archived notes and descendants of archived projects are hidden by default
- Enabling **Archived** shows them

## Performance and scaling

- Dashboard recompute builds shared in-memory indexes (by source UID and note) and a shared retrievability cache.
- Project and note rows compute queues from scoped card subsets instead of repeatedly scanning all active cards.
- Behavior is unchanged: queue rules, daily limits, and note/project/default preset resolution stay the same.

## Troubleshooting large collections

- Initial dashboard load/recompute still scales with collection size and can be the most expensive step.
- The biggest gains should be visible in repeated project/note stats refreshes and tab interactions.
- If the view is still heavy, keep **Archived** hidden by default and reduce visible rows with search/filter.

## Known limitations

1. Duplicate basenames can make navigation ambiguous.
2. Some project-note mapping paths are name-based and can collide on duplicate names.
3. Assign/move/create-subproject capabilities are exposed as drag-and-drop/selection workflows, not as dedicated menu labels.

## Related

- [Projects](/organization/projects/)
- [Archiving](/organization/archiving/)
- [Card Browser](/views/card-browser/)
