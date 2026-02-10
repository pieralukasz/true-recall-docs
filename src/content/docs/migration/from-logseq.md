---
title: Migrating from Logseq
description: How to transition from Logseq to True Recall in Obsidian
---

If you're moving from Logseq to Obsidian and want to continue spaced repetition learning, this guide will help you set up True Recall.

## Logseq vs True Recall

| Feature | Logseq | True Recall |
|---------|--------|-------------|
| **Platform** | Standalone app | Obsidian plugin |
| **Note model** | Block → Cards | Note → Cards |
| **Card creation** | `#card` tags | `#flashcard` tags |
| **Algorithm** | SM-2 | FSRS v6 |
| **Card syntax** | `#card` tags | Database (no syntax) |
| **Data storage** | Local Markdown | Local SQLite |

## Migration Steps

### Step 1: Export Logseq Pages

1. In Logseq, your pages are already Markdown files
2. Navigate to your Logseq graph folder
3. Copy the `pages` and `journals` folders

### Step 2: Import to Obsidian

1. Create folders in your Obsidian vault for the imported content
2. Copy Logseq's Markdown files into your vault
3. Obsidian will index them automatically

### Step 3: Clean Up Logseq Syntax

Logseq uses bullet-based outlines and special syntax. Clean up:

**Remove or convert:**
```markdown
- Block with #card tag
  - Answer:: The answer text
```

**To standard Markdown:**
```markdown
## Topic
The content you want to learn from.
```

:::tip[Keep the Outline Structure]
You don't need to completely flatten your outlines. True Recall works with any note structure — just select the text you want to create cards from.
:::

### Step 4: Remove Logseq-Specific Elements

Look for and handle:
- `#card` tags (no longer needed)
- `logseq.order-list-type::` properties
- Block references like `((block-id))`
- Page references can stay as `[[links]]`

### Step 5: Create Flashcards with True Recall

For each imported note:

1. **Open the note** in Obsidian
2. **Write flashcards** using `#flashcard` tags (question on one line, answer below)
3. **Open the flashcard panel** and click **Collect** to import cards
4. **Review the cards** to verify quality

### Step 6: Organize with Projects

Replace Logseq's namespaces with True Recall projects:
- Create projects for different subjects
- Add notes to relevant projects
- Notes can belong to multiple projects

## What About Review History?

Logseq review history cannot be imported because:
- Different algorithm (SM-2 vs FSRS v6)
- Different data format
- Starting fresh lets FSRS optimize to your patterns

After ~500 reviews, optimize your FSRS parameters for best results.

## Key Differences

### Card Creation

- **Logseq**: Add `#card` tag to blocks
- **True Recall**: Write cards inline using `#flashcard` tags

### Note Structure

- **Logseq**: Block-based outliner
- **Obsidian**: Document-based with optional outlines

True Recall doesn't require a specific note structure. Write flashcards anywhere in your notes.

### Organization

- **Logseq**: Pages, namespaces
- **True Recall**: Notes, projects (more flexible)

## Converting Block-Based Cards

If you have many `#card` tagged blocks:

1. Review each block in the imported notes
2. Rewrite the content using `#flashcard` tags
3. Open the flashcard panel and click **Collect**
4. Remove the old `#card` tags

## Common Questions

### Do I need to convert all blocks?

No. Focus on content you actively want to study. You can always create more flashcards later.

### What about Logseq's queries?

Obsidian has Dataview for similar functionality, but True Recall's projects serve a different purpose — organizing flashcards for study sessions.

### Can I keep the bullet structure?

Yes. True Recall works with any note format. Select the text you want, regardless of whether it's in bullets or paragraphs.

### What about daily notes?

Obsidian has excellent daily notes support. True Recall can create flashcards from any note, including daily notes.

## Need Help?

Check the [introduction](/getting-started/introduction/) to understand True Recall's core concepts and how it compares to other tools.
