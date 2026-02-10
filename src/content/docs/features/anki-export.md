---
title: Exporting Cards
description: Export your flashcards to Anki (.apkg) or CSV/TSV format
---

True Recall can export your flashcards as Anki deck packages (`.apkg`) or as CSV/TSV files. Exports support filtering by project or note, and preserve your review progress.

## Export to Anki (.apkg)

### How to Export

1. Open the Command Palette (`Cmd/Ctrl+P`)
2. Run **True Recall: Export to Anki (.apkg)**
3. Choose your scope and options
4. Click **Export**
5. The `.apkg` file downloads to your computer

### Scope Selection

You can control which cards to export:

| Scope | Description |
|-------|-------------|
| **All cards** | Exports your entire collection |
| **Selected projects** | Pick specific projects from a checklist |
| **Selected notes** | Pick individual source notes from a checklist |

The note list shows each note with its project name for context, e.g. "Photosynthesis (Biology)".

### Options

| Option | Default | Description |
|--------|---------|-------------|
| **Include scheduling** | On | Exports review history so Anki preserves card progress |
| **Include media** | On | Embeds images and audio into the `.apkg` file |

### Deck Hierarchy

Exported cards are organized into a hierarchical Anki deck structure based on their project and source note:

```
ProjectName::NoteName
```

**Examples:**

| Card's Project | Card's Source Note | Anki Deck |
|---------------|-------------------|-----------|
| Biology | Photosynthesis | `Biology::Photosynthesis` |
| Biology | Cell Division | `Biology::Cell Division` |
| Spanish | Vocabulary | `Spanish::Vocabulary` |
| *(none)* | Random Notes | `Default` |

This means each project becomes a parent deck in Anki, and each source note becomes a sub-deck. You can collapse and expand these in Anki's deck browser.

When exporting by **notes** (instead of projects), each note becomes a flat top-level deck without the project prefix.

:::note
Parent decks are created automatically. If your cards produce `Math::Algebra`, the `Math` parent deck is also included in the export.
:::

### What Gets Exported

- **Card content**: Question and answer in Markdown (converted to HTML for Anki)
- **Card types**: Basic, Cloze, and Reversed cards
- **Scheduling data**: FSRS state mapped to Anki's format (stability → interval, difficulty → ease factor)
- **Review logs**: Full review history for Anki to understand card maturity
- **Media**: Images and audio embedded in the card content

## Export as CSV/TSV

For use with other tools or spreadsheets.

### How to Export

1. Open the Command Palette (`Cmd/Ctrl+P`)
2. Run **True Recall: Export as CSV/TSV**
3. Choose scope, separator, and options
4. Click **Export**

### Scope Selection

Same three options as Anki export: All cards, Selected projects, or Selected notes.

### Separator

| Format | Separator | File Extension |
|--------|-----------|---------------|
| CSV | Comma (`,`) | `.csv` |
| TSV | Tab | `.tsv` |
| Semicolon-separated | Semicolon (`;`) | `.csv` |

### Columns

The export includes these columns:

| Column | Always | Description |
|--------|--------|-------------|
| Question | Yes | Card question text |
| Answer | Yes | Card answer text |
| Tags | Yes | Project names (comma-separated) |
| Source Note | Yes | Name of the source note |
| State | With scheduling | New, Learning, Review, or Relearning |
| Due | With scheduling | Next review date (YYYY-MM-DD) |
| Interval | With scheduling | Days until next review |
| Lapses | With scheduling | Number of times forgotten |

## Round-Trip: Export → Import

You can export from True Recall, use in Anki, and import back. The deck hierarchy is preserved through the round-trip:

1. **Export**: Project "Biology" with notes "Cells" and "DNA" → Anki decks `Biology::Cells` and `Biology::DNA`
2. **Study in Anki**: Review cards, the deck structure is preserved
3. **Re-import**: Anki decks `Biology::Cells` → creates notes with `input/Biology/Cells` tags

:::caution
Duplicate detection works by matching question text. If you modify a card's question in Anki and re-import, it will be treated as a new card.
:::

## Tips

### Sharing Decks

Export with scheduling **disabled** when sharing decks with others. Your personal review history isn't useful to someone else — they should build their own FSRS parameters.

### Backup

Export as `.apkg` with all options enabled for a portable backup. The file contains your cards, scheduling, and media in a single file.

### Anki Mobile

After exporting, you can open the `.apkg` file in AnkiMobile (iOS) or AnkiDroid (Android) for on-the-go review when you don't have Obsidian available.
