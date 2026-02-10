---
title: Keyboard Shortcuts
description: Complete reference for all keyboard shortcuts in True Recall
links:
  - /views/review-view/
  - /reference/commands/
---

True Recall provides keyboard shortcuts for efficient reviewing and card management.

## Review Session Shortcuts

These shortcuts work during active review sessions:

### Answer & Rating

| Key | Action | Description |
|-----|--------|-------------|
| `Space` | Show Answer / Rate Good | If hidden: reveals answer. If shown: rates Good (3) |
| `Enter` | Show Answer | Reveals the answer |
| `1` | Rate Again | Failed recall, card resets |
| `2` | Rate Hard | Difficult recall |
| `3` | Rate Good | Normal recall |
| `4` | Rate Easy | Instant recall |

### Card Actions

| Key | Action | Description |
|-----|--------|-------------|
| `!` (Shift+1) | Suspend | Remove from queue indefinitely |
| `-` | Bury Card | Hide until tomorrow |
| `=` | Bury Note | Bury all cards from same source |
| `E` | Edit | Open card editor |
| `M` | Move | Transfer to different note |
| `N` | New Card | Create card manually |
| `B` | Branch | Duplicate the card |

### Navigation

| Key | Action | Description |
|-----|--------|-------------|
| `Cmd/Ctrl+Z` | Undo | Revert last rating |
| `Escape` | Close | End review session |

## Quick Reference Card

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

## Rating Guide

### When to Use Each Rating

| Rating | Key | Use When |
|--------|-----|----------|
| **Again** | `1` | Completely forgot, couldn't recall |
| **Hard** | `2` | Took long time, struggled |
| **Good** | `3` | Recalled with normal effort |
| **Easy** | `4` | Instant recall, too easy |

### Rating Effects

| Rating | Interval Effect | Difficulty Effect |
|--------|-----------------|-------------------|
| Again | Reset to learning | Increases |
| Hard | Shorter than optimal | Slight increase |
| Good | Optimal interval | No change |
| Easy | Longer than optimal | Decreases |

## Modifier Keys

### Platform Differences

| Action | macOS | Windows/Linux |
|--------|-------|---------------|
| Undo | `Cmd+Z` | `Ctrl+Z` |
| Suspend | `Shift+1` | `Shift+1` |

### Shift Key Actions

| Combo | Action |
|-------|--------|
| `Shift+1` (!) | Suspend card |


## Global Shortcuts

Assign custom shortcuts in Settings → Hotkeys:

### Recommended Bindings

| Action | Suggested Shortcut |
|--------|-------------------|
| Start review | `Cmd/Ctrl+Shift+R` |
| Open panel | `Cmd/Ctrl+Shift+F` |
| Statistics | `Cmd/Ctrl+Shift+S` |

## Setting Up Custom Hotkeys

1. Open **Settings** → **Hotkeys**
2. Search for "True Recall"
3. Click the hotkey field for desired command
4. Press your key combination
5. Confirm (check for conflicts)

### Avoiding Conflicts

- Check existing Obsidian shortcuts
- Check other plugin shortcuts
- Use `Cmd/Ctrl+Shift+` prefix for safety

## Efficiency Tips

### Speed Review Workflow

Fastest rating workflow:
1. Read question
2. Think of answer
3. Press `Space` to reveal
4. Press `1-4` to rate
5. Repeat

### One-Hand Review

For quick sessions:
- `Space` for reveal + Good
- `1` for Again
- No mouse needed

### Power User Setup

Configure for efficiency:
1. Memorize all shortcuts
2. Set up global hotkeys
3. Practice until automatic

## Troubleshooting

### Shortcuts Not Working

**During review:**
- Ensure review view has focus
- Click inside the review area
- Check for conflicting plugins

**Global shortcuts:**
- Verify hotkey assignment
- Check for conflicts
- Restart Obsidian

### Conflict Resolution

If shortcuts conflict:
1. Go to Settings → Hotkeys
2. Search for the conflicting shortcut
3. Change one of them
4. Use unique combinations

## Mobile Considerations

On mobile devices:
- Touch interface replaces keyboard
- Tap buttons for ratings
- Swipe gestures (if enabled)
- No keyboard shortcuts needed

## Customization Requests

Want more shortcuts? Consider:
- Using QuickAdd plugin for macros
- Creating custom CSS for larger buttons
- Suggesting features on GitHub
