---
title: Import & Export
sidebar:
  label: "Import & Export (P)"
  order: 4
description: "Import flashcards from Anki (.apkg) and export your collection to Anki or CSV/TSV formats."
---

:::caution[My Notes]
:::

**True Recall** supports full Anki import/export and CSV/TSV export, so you can migrate from Anki or back up your collection in portable formats.

## Anki Import (.apkg)

Import your Anki collection — cards, review history, media, and note types — from a standard `.apkg` file.

### How to Import

1. Open the command palette: `Cmd/Ctrl + P` → "Import from Anki"
2. Drop your `.apkg` file or click to browse
3. Review the preview (card counts by type, deck list, media count)
4. Configure import options
5. Click **Import**

TODO PHOTO

### Import Options

| Option | Default | Description |
|--------|---------|-------------|
| **Import scheduling data** | On | Replay your review history to preserve FSRS progress |
| **Import media files** | On | Save images and audio to `Attachments/anki-import` |
| **Create project** | On | Organize imported decks as a project hierarchy |

### What Gets Imported

| Anki Data | True Recall Equivalent |
|-----------|----------------------|
| Notes & fields | Cards with question/answer |
| Card types | Mapped to built-in or custom note types |
| Review log | Replayed through FSRS for accurate scheduling |
| Media (images, audio) | Copied to `Attachments/anki-import` |
| Decks | Obsidian notes with project hierarchy |
| Suspended cards | Preserved as suspended |
| Buried cards | Preserved as buried until next day |

### Note Type Mapping

Anki note types are automatically mapped to True Recall equivalents:

| Anki Model | True Recall Type |
|------------|-----------------|
| Basic (Front, Back) | Basic |
| Basic (and reversed card) | Basic Reversed |
| Cloze (Text, Extra) | Cloze |
| Other models | Custom Note Type (auto-created) |

Custom note types are created automatically with the original Anki field names, templates, and CSS. If a name conflict exists, a suffix is added (e.g., "My Type (2)").

### Deck Hierarchy

Anki's `::` deck separator is converted to folder hierarchy:

```
Anki deck:  Math::Calculus::Integrals
Creates:
  Anki Import/Math.md          (project note)
  Anki Import/Math/Calculus.md (project note)
  Anki Import/Math/Calculus/Integrals.md (leaf note with cards)
```

Parent decks become project notes with links to children. Leaf decks contain the imported cards. Each note gets `flashcard_uid` and `parents` frontmatter for project hierarchy.

### Scheduling Preservation

When **Import scheduling data** is enabled:

1. Each card's review log is replayed chronologically through FSRS
2. Stability, difficulty, and state are calculated from actual review history
3. The result is accurate FSRS scheduling — not just a rough conversion

When disabled, cards are imported with estimated scheduling:

| Anki Data | Conversion |
|-----------|-----------|
| Interval | Used as initial stability |
| Ease factor | Converted to difficulty: `11 - (factor/1000)` |
| State | Mapped directly (New, Learning, Review, Relearning) |
| Reps and lapses | Preserved as-is |

### Duplicate Detection

Cards with identical questions (and cloze index for cloze cards) are detected and skipped. The import result shows how many duplicates were found.

### Media Support

Imported media files go to `Attachments/anki-import` in your vault. Existing files with the same name are not overwritten. References in cards are converted:

- Anki `<img src="image.png">` → Obsidian `![[Attachments/anki-import/image.png]]`
- Anki `[sound:audio.mp3]` → Obsidian `![[Attachments/anki-import/audio.mp3]]`

Supported formats: PNG, JPG, JPEG, GIF, BMP, SVG, WebP, ICO, TIF, TIFF (images) and MP3, OGG, WAV, M4A, FLAC, AAC, WMA, OPUS (audio).

### Import Results

After import, you see a summary:

| Metric | Description |
|--------|-------------|
| **Imported** | Cards successfully added |
| **Duplicates** | Skipped (identical question already exists) |
| **Skipped** | Cards that couldn't be processed |
| **Errors** | Specific error messages (up to 20 shown) |
| **Note types created** | New custom note types added |

---

## Anki Export (.apkg)

Export your True Recall collection as a standard `.apkg` file that can be opened in Anki.

### How to Export

1. Open the command palette: `Cmd/Ctrl + P` → "Export to Anki"
2. Choose scope: All cards or Selected notes only
3. Configure options
4. Click **Export**

TODO PHOTO

### Export Options

| Option | Default | Description |
|--------|---------|-------------|
| **Include scheduling data** | On | Export review history and card progress |
| **Include media** | On | Export images and audio files |

### Scope

- **All cards** — Export your entire collection
- **Selected notes only** — Choose specific source notes to export

### What Gets Exported

- Cards are exported as Anki "Basic (and reversed card)" or "Cloze" models
- Reversed cards share a note with their basic counterpart (matching Anki's model)
- Scheduling data: state, interval, difficulty (converted to ease factor), reps, lapses
- Review log: full history with ratings and timestamps
- Media: images and audio referenced in cards

### Content Conversion

Obsidian syntax is converted to Anki format:

- `![[image.png]]` → `<img src="image.png">`
- `![[audio.mp3]]` → `[sound:audio.mp3]`

### Deck Organization

Each source note becomes a separate Anki deck. Cards without a source note go to a "Default" deck.

---

## CSV/TSV Export

Export your collection as a text file for use in spreadsheets, other flashcard apps, or data analysis.

### How to Export

1. Open the command palette: `Cmd/Ctrl + P` → "Export to CSV"
2. Choose scope: All cards or Selected notes only
3. Select separator and options
4. Click **Export**

TODO PHOTO

### Export Options

| Option | Default | Description |
|--------|---------|-------------|
| **Separator** | Comma (,) | Comma, Tab, or Semicolon |
| **Include scheduling data** | Off | Add State, Due, Interval, Lapses columns |

### Output Format

**Standard columns:** Question, Answer, Source Note

**With scheduling data:** Question, Answer, Source Note, State, Due, Interval, Lapses

| Column | Format |
|--------|--------|
| State | New, Learning, Review, or Relearning |
| Due | YYYY-MM-DD |
| Interval | Number of days |
| Lapses | Number |

File extension is `.csv` for comma/semicolon separators, `.tsv` for tab separator.

---

## Migration Tips

### From Anki

1. Export your Anki collection as `.apkg` (File → Export in Anki)
2. Import into True Recall with all options enabled
3. Check the import summary for errors
4. Review your cards in the [Card Browser](/views/card-browser/) to verify the import
5. Run [parameter optimization](/scheduling/presets/#parameter-training) after you have 400+ reviews in True Recall

### Preserving Your Progress

The most important import option is **Import scheduling data**. With it enabled, your review history is replayed through FSRS, so cards you've already learned keep their mature intervals. Without it, cards get rough estimates based on Anki's ease factor and interval.

:::tip[Always Import Scheduling]
Unless you specifically want a fresh start, keep scheduling import enabled. It takes slightly longer but preserves months or years of learning progress.
:::

## What to Read Next

- [Card Browser](/views/card-browser/) — verify imported cards and manage your collection
- [Presets & Optimization](/scheduling/presets/) — optimize FSRS parameters after migration
- [Projects & Notes](/creation/projects-and-notes/) — organize your imported deck hierarchy
- [Backup & Restore](/data/backup-restore/) — back up your collection after a successful import
