---
title: Migrating from Anki
description: How to transition from Anki to True Recall
---

If you're coming from Anki, this guide will help you understand the differences and set up True Recall.

## Key Differences

Before migrating, understand how True Recall differs from Anki:

| Aspect | Anki | True Recall |
|--------|------|-------------|
| **Core model** | Deck contains cards | Note contains cards |
| **Card source** | Cards are separate from notes | Cards embedded in your notes |
| **Organization** | One card = one deck | One note can be in multiple projects |
| **Algorithm** | FSRS v6 (now supported) | FSRS v6 |
| **Card creation** | Manual | Manual (inline in notes with `#flashcard` tags) |

## Migration Approach

:::note[Fresh Start Recommended]
Because True Recall's architecture is fundamentally different (notes contain flashcards), we recommend a fresh start rather than importing Anki decks directly.
:::

### Why Fresh Start?

1. **Note = Deck philosophy**: True Recall flashcards live inside your notes, maintaining connection to source material
2. **Inline creation**: Write flashcards directly in your notes using `#flashcard` tags
3. **Better organization**: Take advantage of the project system for flexible organization

### Migration Steps

1. **Identify your study material** in your Obsidian vault
2. **Write flashcards** in your notes using `#flashcard` tags (question on one line, answer below)
3. **Collect cards** — open the flashcard panel and click Collect to import them
4. **Organize with projects** — group related notes together

## Exporting Anki Data (Optional)

If you want to reference your Anki cards while creating new ones:

### Export Anki Deck

1. In Anki, select your deck
2. File → Export
3. Choose "Notes in Plain Text (.txt)" or "Cards in Plain Text (.txt)"
4. Save the export file

### Use as Reference

1. Open the exported file in Obsidian as a note
2. Review your old cards while creating new notes
3. Write new flashcards using `#flashcard` tags based on your old cards

## What About My Review History?

Anki review history cannot be imported because:
- FSRS parameters are trained on your personal review patterns
- Starting fresh lets FSRS optimize to your current learning patterns
- You'll build new, more accurate parameters over time

## Tips for Anki Users

### Rating Scale

True Recall uses the same 4-button rating system:
- **1 (Again)**: Forgot the answer
- **2 (Hard)**: Remembered with difficulty
- **3 (Good)**: Remembered correctly
- **4 (Easy)**: Remembered instantly

### Study Sessions

- Use the **Session Builder** to create custom study sessions
- **Projects** replace Anki's deck-based organization


### FSRS Optimization

After ~500 reviews, you can optimize your FSRS parameters:
1. Go to Settings → True Recall → FSRS
2. Click "Optimize Parameters"
3. Parameters will be trained on your review history

## Need Help?

If you have questions about migrating from Anki, check the [introduction](/getting-started/introduction/) for an overview of True Recall's features and approach.
