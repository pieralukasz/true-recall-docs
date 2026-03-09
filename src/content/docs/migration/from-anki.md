---
title: Migrating from Anki
sidebar:
  order: 1
description: "Complete guide to importing Anki decks: note types, media, scheduling conversion, deck hierarchy, and review history."
---

True Recall imports `.apkg` files from Anki, preserving your cards, review history, media, and deck structure. This guide covers everything that happens during import.

## What Gets Imported

| Content | Details |
|---------|---------|
| **Cards** | Basic, Cloze, Reversed — all card types supported |
| **Note types** | Anki models matched to built-in types or created as custom note types |
| **Review history** | Full revlog replayed through FSRS to rebuild accurate scheduling |
| **Media** | All images, audio, and video extracted to your vault |
| **Deck hierarchy** | Nested decks become folders, notes, and projects |
| **Tags** | Anki tags carried over to source notes |
| **Scheduling** | SM-2 parameters converted to FSRS (stability, difficulty) |

## Step 1: Export from Anki

1. Open Anki desktop
2. Click **File** → **Export**
3. Set format to **Anki Deck Package (.apkg)**
4. Select the deck (or "All Decks")
5. Check **Include scheduling information** to preserve your progress
6. Check **Include media** if your cards have images or audio
7. Click **Export**

## Step 2: Import into True Recall

1. Open the Command Palette (`Cmd/Ctrl+P`)
2. Run **True Recall: Import Anki deck (.apkg)**
3. Drag your `.apkg` file into the drop zone (or click to browse)
4. True Recall parses the file and shows a preview

## Step 3: Review the Preview

The preview shows:
- **Card counts** by type (Basic, Cloze, Reversed)
- **Media files** count
- **Deck list** with all decks in the file

## Step 4: Configure Options

| Option | Default | Description |
|--------|---------|-------------|
| **Import scheduling** | On | Replays Anki review history through FSRS |
| **Import media** | On | Extracts images and audio to your vault |

:::tip[Keep scheduling enabled]
With scheduling enabled, your entire Anki review history is replayed through FSRS. Cards get accurate stability and difficulty values from day one — no need to re-learn cards you already know.
:::

## Step 5: Import

Click **Import** and wait for processing. The result screen shows cards imported, duplicates skipped, errors encountered, and projects created.

## Note Type Mapping

True Recall matches Anki models (note types) to its built-in types. Unrecognized models become custom note types.

### Built-in Matches

| Anki Model | True Recall Type | Condition |
|------------|-----------------|-----------|
| Basic (2 fields, 1 template) | `builtin-basic` | Standard front/back |
| Basic (and reversed card) | `builtin-basic-reversed` | 2 fields, 2 templates |
| Cloze | `builtin-cloze` | Cloze type, Text/Extra fields |

### Custom Note Types

When an Anki model doesn't match a built-in type, True Recall creates a new custom note type:

- **Fields** are extracted from the Anki model in order
- **Templates** are converted (HTML stripped to clean format)
- **CSS** styling is preserved from the Anki model
- **Name** is kept (with `(2)`, `(3)` suffix if name already exists)

After import, your custom note types appear in Settings → Note Types, where you can edit fields, templates, and styling.

## Card Conversion

### Basic Cards

Anki's front/back fields become True Recall's question/answer. HTML is converted to Markdown:

| Anki HTML | True Recall Markdown |
|-----------|---------------------|
| `<b>text</b>` | `**text**` |
| `<i>text</i>` | `*text*` |
| `<br>` | newline |
| `<code>text</code>` | `` `text` `` |
| `<pre>code</pre>` | ` ```code``` ` |
| `<img src="file.png">` | `![[file.png]]` |
| `[sound:file.mp3]` | `![[file.mp3]]` |
| `<u>text</u>` | `<u>text</u>` (preserved) |

### Cloze Deletions

Anki cloze syntax (`{{c1::text}}` and `{{c1::text::hint}}`) is preserved as-is. Each cloze number generates a separate card, identical to Anki's behavior.

### Reversed Cards

Cards from Anki models with two templates (front→back and back→front) are imported as linked pairs. The reversed card references its original, and both are scheduled independently.

## Media Files

All media (images, audio) from the `.apkg` is extracted to your vault.

**Supported formats:**
- **Images:** PNG, JPG, JPEG, GIF, BMP, SVG, WebP, ICO, TIFF
- **Audio:** MP3, OGG, WAV, M4A, FLAC, AAC, WMA, OPUS

**What happens:**
1. Media files are saved to `Attachments/anki-import/` (configurable)
2. Card content is updated to use Obsidian's `![[filename]]` embed syntax
3. If a media file already exists in the vault, it's skipped (no overwrite)
4. Folders are created automatically if needed

## Scheduling Conversion

### With Review History (Recommended)

When **Import scheduling** is enabled and review logs exist, True Recall replays your entire Anki review history through FSRS chronologically:

1. A fresh FSRS card is created
2. Each review from your Anki history is replayed in order
3. FSRS calculates stability and difficulty from the actual review pattern
4. The result: cards have scheduling that accurately reflects your learning history

### Without Review History

When review logs aren't available, scheduling data is mapped directly:

| Anki Field | FSRS Field | Conversion |
|------------|-----------|------------|
| Card type (0-3) | State (New/Learning/Review/Relearning) | Direct mapping |
| Interval | Stability | `stability ≈ interval` (for review cards) |
| Ease factor | Difficulty | `difficulty = 11 - ease` (clamped 1-10) |
| Reps | Reps | Direct copy |
| Lapses | Lapses | Direct copy |

Higher Anki ease (easier cards) maps to lower FSRS difficulty.

### Card Status

| Anki Queue | True Recall Status |
|------------|-------------------|
| Normal | Active |
| Suspended (-1) | Suspended |
| Buried (-2, -3) | Buried until tomorrow |

## Deck Hierarchy

Anki's deck structure converts to a folder hierarchy with linked notes.

### Simple Deck

A deck named **Vocabulary** creates:

```
Anki Import/
  Vocabulary.md       ← cards linked here
```

### Nested Decks

A deck like **Math::Calculus::Integrals** creates:

```
Anki Import/
  Math.md                         ← project note, links to [[Calculus]]
  Math/
    Calculus.md                   ← project note, links to [[Integrals]]
    Calculus/
      Integrals.md                ← leaf note, cards linked here
```

- **Parent notes** act as Maps of Content with `[[wikilinks]]` to children
- **Leaf notes** have cards linked via `flashcard_uid` in frontmatter
- Each level gets a hierarchical tag (e.g., `input/Math/Calculus/Integrals`)

Projects are created automatically from deck names, so you can immediately review by project from the [Dashboard](/views/dashboard/).

## Duplicate Detection

True Recall detects duplicates by question text. If you re-import the same `.apkg`:

- Existing cards are skipped
- New cards are imported normally
- The result screen shows the duplicate count

For cloze cards, duplicates are detected by both question text and cloze index.

## After Import

### Review Your Cards

Imported cards are ready for review immediately. Open the Command Palette → **Start review session**. Cards appear with scheduling based on your Anki history.

### Organize with Projects

Projects are created from deck names automatically. From the [Dashboard](/views/dashboard/), you can review by project, reorganize notes, or add imported notes to existing projects.

### Continue Creating Cards

Imported and native cards coexist in the same system — all use FSRS scheduling. Create new cards with the [Selection Toolbar](/views/selection-toolbar/) or by writing [block format](/creation/basic-cards/) in your notes.

## Troubleshooting

### Cards Not Showing After Import

- Open the [Flashcard Panel](/views/flashcard-panel/) — cards should appear under their source notes
- Check that notes were created in the `Anki Import` folder
- Reload the plugin if needed

### Scheduling Looks Different from Anki

True Recall uses FSRS, not SM-2. Review history is replayed through FSRS, which may calculate slightly different intervals. This is expected — FSRS will optimize scheduling over time.

### Media Not Displaying

- Check that files exist in `Attachments/anki-import`
- Verify references use `![[filename]]` syntax
- Some uncommon media formats may not display in Obsidian

### Large Deck Import

For very large decks (10,000+ cards):
- Import may take a moment — a progress indicator will show
- Consider importing deck by deck if a full export is too slow
- Duplicate detection prevents issues with partial re-imports
