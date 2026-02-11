---
title: Keyboard Shortcuts
description: Complete reference for all keyboard shortcuts in True Recall
links:
  - /views/review-view/
  - /reference/commands/
---

All shortcuts work during active review sessions.

## Quick Reference

```
┌─────────────────────────────────────────┐
│           REVIEW SHORTCUTS              │
├─────────────────────────────────────────┤
│  REVEAL     │  Space / Enter            │
├─────────────────────────────────────────┤
│  RATINGS    │  1=Again  2=Hard          │
│             │  3=Good   4=Easy          │
├─────────────────────────────────────────┤
│  ACTIONS    │  ! Suspend  - Bury        │
│             │  = Bury Note  E Edit      │
│             │  M Move  N New  B Branch  │
├─────────────────────────────────────────┤
│  NAVIGATION │  Ctrl+Z Undo  Esc Close   │
└─────────────────────────────────────────┘
```

## Ratings

| Key | Rating | Use when | Effect |
|-----|--------|----------|--------|
| `Space` | Show answer / Good | Reveals answer first, then rates Good on second press | Optimal interval |
| `1` | Again | Completely forgot | Reset to learning, difficulty increases |
| `2` | Hard | Struggled to recall | Shorter interval, slight difficulty increase |
| `3` | Good | Recalled normally | Optimal interval, no difficulty change |
| `4` | Easy | Instant recall | Longer interval, difficulty decreases |

## Card Actions

| Key | Action | Description |
|-----|--------|-------------|
| `!` (Shift+1) | Suspend | Remove from review queue indefinitely |
| `-` | Bury card | Hide until tomorrow |
| `=` | Bury note | Bury all cards from same source note |
| `E` | Edit | Open card editor |
| `M` | Move | Transfer card to a different note |
| `N` | New card | Create a new card mid-review |
| `B` | Branch | Duplicate the card |
| `Cmd/Ctrl+Z` | Undo | Revert last rating |
| `Escape` | Close | End the review session |

## Custom Hotkeys

True Recall commands don't have default global hotkeys. To assign them: Settings → Hotkeys → search "True Recall".
