---
title: Migrating from Anki
description: Import your Anki decks into True Recall with full card and scheduling support
links:
  - /getting-started/quick-start/
  - /features/projects/
  - /views/card-browser/
---

True Recall can import `.apkg` files directly from Anki, preserving your cards, review history, and deck structure.

## What Gets Imported

| Content | Supported | Notes |
|---------|-----------|-------|
| **Basic cards** | Yes | Front/Back → Question/Answer |
| **Cloze deletions** | Yes | `{{c1::text}}` syntax preserved |
| **Reversed cards** | Yes | Linked to original card |
| **Review history** | Yes | Replayed through FSRS to rebuild scheduling |
| **Media files** | Yes | Images and audio saved to your vault |
| **Deck hierarchy** | Yes | Nested decks become notes and projects |

## How to Import

### Step 1: Export from Anki

1. Open Anki desktop
2. Click **File** → **Export**
3. Set format to **Anki Deck Package (.apkg)**
4. Select the deck (or "All Decks")
5. Check **Include scheduling information** if you want to preserve progress
6. Check **Include media** if your cards have images or audio
7. Click **Export**

### Step 2: Import into True Recall

1. Open the Command Palette (`Cmd/Ctrl+P`)
2. Run **True Recall: Import Anki deck (.apkg)**
3. Click the drop zone or drag your `.apkg` file into it
4. True Recall parses the file and shows a preview

### Step 3: Review the Preview

The preview shows:
- **Card counts** by type (Basic, Cloze, Reversed)
- **Media files** count
- **Deck list** showing all decks in the file

### Step 4: Configure Options

| Option | Default | Description |
|--------|---------|-------------|
| **Import scheduling** | On | Replays your Anki review history through FSRS so cards keep their progress |
| **Import media** | On | Saves images and audio to `Attachments/anki-import` in your vault |

:::tip[Keep scheduling enabled]
Importing scheduling data replays your entire Anki review history through FSRS. This means your cards will have accurate stability and difficulty values from day one — no need to re-learn cards you already know.
:::

### Step 5: Import

Click **Import** and wait for processing. The result screen shows:
- How many cards were imported
- How many duplicates were skipped
- Any errors encountered
- Projects created from decks

## Deck Hierarchy → Notes & Projects

The import converts Anki's deck structure into True Recall's note-based system. Each deck becomes a source note, and nested decks create a folder hierarchy with linked notes.

### Flat Decks

A simple deck like **Vocabulary** creates:

```
Anki Import/
  Vocabulary.md       ← cards linked here
```

The note gets frontmatter:
```yaml
---
flashcard_uid: a1b2c3d4
tags:
  - input/Vocabulary
---
```

### Nested Decks

A nested deck like **Math::Calculus::Integrals** creates a full hierarchy:

```
Anki Import/
  Math.md                         ← project note, links to [[Calculus]]
  Math/
    Calculus.md                   ← project note, links to [[Integrals]]
    Calculus/
      Integrals.md                ← cards linked here
```

Each level gets a hierarchical tag:

| Note | Tag | Role |
|------|-----|------|
| `Math.md` | `input/Math` | Parent project (Map of Content) |
| `Calculus.md` | `input/Math/Calculus` | Sub-project (Map of Content) |
| `Integrals.md` | `input/Math/Calculus/Integrals` | Leaf note (cards attached) |

Parent notes act as **Maps of Content** with `[[wikilinks]]` to their children, so you can navigate the hierarchy from within Obsidian.

### One Deck = One Note

The core principle: every Anki deck becomes a note. Cards from that deck are linked to their note via `source_uid`. This means your imported cards immediately appear in the flashcard panel and can be organized with projects.

## After Import

### Review Your Cards

Imported cards are ready for review immediately:

1. Open the Command Palette → **Start review session**
2. Your imported cards appear with their existing scheduling
3. Due cards will be scheduled based on your Anki review history

### Organize with Projects

The import creates projects from deck names automatically. You can:
- Review by project from the [Projects view](/views/projects-view/)
- Reorganize notes into different projects
- Add imported notes to existing projects

### Continue Creating Cards

You can mix imported and native cards:
- Write new cards in your notes using `#flashcard` tags
- Imported cards and native cards coexist in the same system
- All cards use the same FSRS scheduling

## Card Type Handling

### Basic Cards

Anki's front/back becomes True Recall's question/answer. HTML is converted to Markdown:
- `<b>` → `**bold**`
- `<i>` → `*italic*`
- `<br>` → newline
- `<img src="file.png">` → `![[file.png]]`

### Cloze Deletions

Anki cloze syntax (`{{c1::text::hint}}`) is preserved. Each cloze number generates a separate card, just like in Anki.

### Reversed Cards

Cards with two templates (front→back and back→front) are imported as linked pairs. The reversed card references its original.

## Duplicate Detection

True Recall detects duplicates by question text. If you re-import the same `.apkg` file:
- Existing cards are skipped (not duplicated)
- New cards are imported normally
- The result screen shows the duplicate count

## Media Files

Imported media (images, audio) is saved to `Attachments/anki-import` in your vault. Card content is updated to reference the new paths using Obsidian's `![[filename]]` embed syntax.

Supported formats: PNG, JPG, GIF, SVG, WebP, MP3, OGG, WAV, M4A, FLAC.

## Troubleshooting

### Cards Not Showing After Import

- Open the flashcard panel — cards should appear
- Check that source notes were created in the `Anki Import` folder
- Reload the plugin if needed

### Scheduling Looks Wrong

If card intervals don't match Anki:
- True Recall uses FSRS, not Anki's native scheduler
- Review history is replayed through FSRS, which may calculate slightly different intervals
- This is expected — FSRS will optimize scheduling over time

### Media Not Displaying

- Check that files exist in `Attachments/anki-import`
- Verify the file references in card content use `![[filename]]` syntax
- Some uncommon media formats may not be supported

### Large Deck Import

For very large decks (10,000+ cards):
- Import may take a moment — the progress indicator will show
- Consider importing deck by deck if a full export is too slow
- Duplicate detection prevents issues with partial re-imports
