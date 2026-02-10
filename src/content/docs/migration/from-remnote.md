---
title: Migrating from RemNote
description: How to transition from RemNote to True Recall in Obsidian
---

If you're moving from RemNote to Obsidian and want to continue spaced repetition learning, this guide will help you set up True Recall.

## RemNote vs True Recall

| Feature | RemNote | True Recall |
|---------|---------|-------------|
| **Platform** | Standalone app | Obsidian plugin |
| **Note model** | Document → Cards | Note → Cards |
| **Card creation** | Built-in | Manual (inline with `#flashcard` tags) |
| **Algorithm** | SM-2 | FSRS v6 |
| **Data storage** | Cloud-first | Local-first (SQLite) |
| **Pricing** | Subscription | Free |

## Migration Steps

### Step 1: Export RemNote Documents

1. In RemNote, go to Settings → Export
2. Choose "Export All" or select specific documents
3. Export as Markdown
4. Save the exported files

### Step 2: Import to Obsidian

1. Create a folder in your Obsidian vault for imported notes
2. Move the exported Markdown files into this folder
3. Obsidian will automatically index them

### Step 3: Clean Up Formatting

RemNote exports may include special syntax. Review and clean up:
- Remove RemNote-specific formatting
- Ensure headings and structure are correct
- The content should be readable as standard Markdown

### Step 4: Create Flashcards with True Recall

For each imported note:

1. **Open the note** in Obsidian
2. **Write flashcards** using `#flashcard` tags (question on one line, answer below)
3. **Open the flashcard panel** and click **Collect** to import them
4. **Review the cards** to verify quality

### Step 5: Organize with Projects

Replace RemNote's folders with True Recall projects:
- Create projects for different subjects
- Add notes to relevant projects
- One note can belong to multiple projects (more flexible than folders)

## What About Review History?

RemNote review history cannot be imported because:
- Different algorithm (SM-2 vs FSRS v6)
- Different scheduling parameters
- FSRS will learn your patterns fresh and optimize

After ~500 reviews in True Recall, you can optimize FSRS parameters to match your learning patterns.

## Key Differences to Note

### Card Creation

- **RemNote**: Create cards using `::` or `/rem` syntax
- **True Recall**: Write cards inline using `#flashcard` tags

### Organization

- **RemNote**: Hierarchical folders
- **True Recall**: Projects (notes can belong to multiple projects)

### Offline vs Cloud

- **RemNote**: Cloud-first, sync built-in
- **True Recall**: Local-first, cloud sync coming soon

## Common Questions

### Can I import RemNote's spaced repetition data?

No, because:
- RemNote uses SM-2, True Recall uses FSRS v6
- Scheduling parameters are incompatible
- Starting fresh allows FSRS to optimize for your current learning patterns

### What about RemNote's portals and links?

Obsidian has equivalent features:
- Use `[[wikilinks]]` for internal links
- Use embeds `![[note]]` for transclusion
- True Recall flashcards can reference any linked content

### Is local-first limiting?

Not at all:
- Your data is fully yours (SQLite in your vault)
- Works offline without internet
- Cloud Sync is coming for multi-device support
- No subscription required for core features

## Need Help?

Check the [introduction](/getting-started/introduction/) to understand True Recall's core concepts and how it compares to other tools.
