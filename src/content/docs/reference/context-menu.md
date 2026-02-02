---
title: Context Menu
description: Right-click menu options for flashcard operations
---

True Recall adds context menu options when right-clicking files in Obsidian, providing quick access to common operations.

## File Explorer Context Menu

When right-clicking a markdown file in the file explorer:

### Available Options

| Menu Item | Description |
|-----------|-------------|
| **Review flashcards from this note** | Start review with only cards from this file |
| **Create project from this note** | Create a new project using note's name |
| **Open flashcard panel** | Open sidebar showing note's cards |

## Using Context Menu Options

### Review Flashcards from This Note

Quick way to review a specific note's cards:

1. Right-click the file in explorer
2. Select "Review flashcards from this note"
3. Review session starts immediately
4. Only cards from that note are included

**Use case**: Focus review on recently created notes or specific topics.

### Create Project from This Note

Create a project named after the note:

1. Right-click the file
2. Select "Create project from this note"
3. Project created with note's name
4. Note automatically added to project

**Use case**: Quick project setup from key notes.

### Open Flashcard Panel

View and manage the note's cards:

1. Right-click the file
2. Select "Open flashcard panel"
3. Panel opens in sidebar
4. Shows all cards from that note

**Use case**: Check card count or manage cards without opening note.

## Context Menu Behavior

### File Requirements

Context menu options appear for:
- Markdown files (`.md`)
- Files in your vault
- Not in excluded folders

### Missing Options

If options don't appear:
- Verify it's a markdown file
- Check plugin is enabled
- Restart Obsidian if needed

## Multiple File Selection

When multiple files are selected:
- Context menu shows for last selected file
- Operations apply to that single file
- Use browser for bulk operations

## Editor Context Menu

In the note editor, True Recall doesn't add context menu items. Use:
- Command Palette for commands
- Floating button for generation
- Panel for card management

## Tab Context Menu

When right-clicking a tab:
- Standard Obsidian options
- No True Recall additions
- Use file explorer or commands instead

## Comparison: Menu vs Commands

| Action | Context Menu | Command Palette |
|--------|-------------|-----------------|
| Review from note | ✅ Quick access | ✅ Works from any context |
| Create project | ✅ Uses note name | ✅ Manual naming |
| Open panel | ✅ Direct | ✅ Available |
| Generate cards | ❌ Not available | ✅ Available |
| Open browser | ❌ Not available | ✅ Available |

## Tips

### Quick Project Creation

For new study topics:
1. Create main note
2. Right-click → Create project
3. Add related notes later

### Efficient Review Start

For daily review:
1. Navigate to study folder
2. Right-click key note
3. Start focused review

### Workflow Integration

Combine with other features:
1. Right-click → Open panel
2. Generate new cards
3. Right-click → Review from note

## Mobile Considerations

On mobile:
- Long-press for context menu
- Same options available
- Touch-friendly interface

## Customization

### Hiding Menu Items

Currently, context menu items cannot be hidden individually. Use:
- Commands for preferred actions
- Hotkeys for frequent operations

### Feature Requests

Want different context menu options?
- Check GitHub issues
- Submit feature request
- Describe your workflow

## Troubleshooting

### Menu Items Missing

If context menu items don't appear:

1. **Check plugin status**
   - Settings → Community plugins
   - Verify True Recall is enabled

2. **Restart Obsidian**
   - Close completely
   - Reopen vault

3. **Check file type**
   - Must be .md file
   - Not a folder

### Menu Items Don't Work

If clicking does nothing:

1. **Check for errors**
   - Open Developer Console (Cmd/Ctrl+Shift+I)
   - Look for error messages

2. **Verify prerequisites**
   - Note must have flashcard_uid for review
   - Plugin must be fully loaded

3. **Reload plugin**
   - Settings → Community plugins
   - Toggle True Recall off and on
