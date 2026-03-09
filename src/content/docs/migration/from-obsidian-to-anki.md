---
title: Migrating from Obsidian-to-Anki
sidebar:
  order: 2
description: How to transition from the Obsidian-to-Anki plugin to True Recall
---

:::caution[My Notes]
:::

If you've been using the Obsidian-to-Anki plugin, this guide explains how to transition to True Recall and why you might want to.

## Why Switch?

### Obsidian-to-Anki Approach

The Obsidian-to-Anki plugin:
- Creates cards in Obsidian using special syntax
- **Syncs cards to Anki** for review
- Requires both Obsidian and Anki running
- Cards live in Anki, notes live in Obsidian (separate)

### True Recall Approach

True Recall:
- **Flashcards live inside your notes** — unified system
- Review directly in Obsidian — no external app needed
- Write flashcards using `#type/basic` block format, AI toolbar, or [Flashcard Editor](/views/flashcard-editor/)
- Same note can belong to multiple projects

## Key Benefits of True Recall

| Feature | Obsidian-to-Anki | True Recall |
|---------|-----------------|-------------|
| **Card location** | Anki (separate app) | Inside your notes |
| **Review** | In Anki | In Obsidian |
| **Card creation** | Manual syntax | `#type/basic` block format, AI toolbar, or [Flashcard Editor](/views/flashcard-editor/) |
| **Dependencies** | Obsidian + Anki | Obsidian only |
| **Algorithm** | Anki's FSRS/SM-2 | FSRS v6 |

## Migration Steps

### Step 1: Disable Obsidian-to-Anki Sync

Before starting, prevent sync conflicts:
1. Open Obsidian Settings
2. Go to Obsidian-to-Anki plugin
3. Disable automatic sync
4. (Optional) Keep the plugin for reference during transition

### Step 2: Install True Recall

1. Follow the [installation guide](/getting-started/installation/)
2. Familiarize yourself with the interface

### Step 3: Create Flashcards

For each note with flashcards:

1. **Open the note** in Obsidian
2. **Write flashcards** using the `#type/basic` block format:
   ```markdown
   #type/basic
   Front: What is spaced repetition?
   Back: A learning technique that reviews material at increasing intervals.
   ---
   ```
3. **Open the flashcard panel** and click **Collect** to import them
4. **Review the cards** to verify quality

### Step 4: Remove Old Syntax (Optional)

Once your True Recall flashcards are created, you can clean up the Obsidian-to-Anki syntax from your notes:

```markdown
<!-- Remove these -->
TARGET DECK: MyDeck
START
Basic
Front: What is...
Back: It is...
END
```

Your notes will be cleaner since True Recall cards are stored in the database, not as visible syntax in your notes.

### Step 5: Organize with Projects

Take advantage of True Recall's project system:
1. Create projects for your study areas
2. Add relevant notes to each project
3. Same note can belong to multiple projects

## What About Existing Progress?

### Review History

Your Anki review history cannot be imported, but:
- Start fresh with FSRS v6 optimization
- After ~500 reviews, optimize parameters to your learning patterns
- New parameters will be more accurate for your current habits

### Card Content

Your card content still exists in your Obsidian notes. You can write new flashcards using the `#type/basic` block format from the same source material.

## Common Questions

### Can I use both plugins?

Technically yes, but not recommended:
- Creates confusion about which system to use
- Duplicate cards possible
- Better to fully transition to one system

### Is the syntax conversion automatic?

No automatic conversion exists because:
- True Recall stores cards differently (database, not markdown syntax)
- Writing new flashcards with the `#type/basic` block format is straightforward
- It's a good opportunity to improve card quality

## Need Help?

Check the [introduction](/getting-started/introduction/) to understand True Recall's core concepts, especially "Note = Deck" and project-based organization.
