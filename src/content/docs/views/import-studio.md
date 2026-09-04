---
title: Import Studio
sidebar:
  label: "Import Studio"
  order: 6
description: "Bulk flashcard creation from formatted text: type or paste cards in block or double-colon format and save them in one batch."
---

:::caution[My Notes]

- Need screenshots of: full modal, card preview list, format detection indicator
- Verify Copy Prompt output matches current prompt-generator.ts
:::

The **Import Studio** is a modal for creating many flashcards at once. Type or paste formatted text into the editor, watch a live preview update as you go, and save everything to the database in one batch, no [collection step](/creation/creating-flashcards/#the-collection-step) needed.

This is also the place to bring in flashcards generated outside of **True Recall**, in tools like ChatGPT, Gemini, Claude, NotebookLM, or any other LLM. Before I built True Recall, this was my primary workflow: I'd copy a prompt into ChatGPT or Gemini, paste my study material, and have it generate dozens of flashcards in one go. Later I discovered Claude with the anki-mcp server, which was even better. Import Studio is that same idea, built directly into Obsidian: generate cards wherever you like, paste them here, and they're ready to review.

## How to Open

| Context         | Action                               |
| --------------- | ------------------------------------ |
| Command Palette | `Cmd/Ctrl + P` → "Import flashcards" |

The modal is titled **Import Flashcards**. For Anki `.apkg` files use the separate "Import Anki deck (.apkg)" command instead; see [Data & Backup](/configuration/general/).

## Modal Layout

From top to bottom, the modal contains:

1. **Action bar**: source note picker, format help
2. **Formatting toolbar**: text formatting buttons
3. **Editor**: text editor for card input
4. **Card preview**: live parsed card preview
5. **Footer**: format indicator, card count, AI help, save

<!-- TODO PHOTO -->

### Action Bar

- **Source note picker**: combobox with search to link created cards to a specific note in your vault. If the selected note doesn't have a `flashcard_uid` yet, one is generated automatically. Remembers your last selection between sessions.
- **Help icon**: opens an **Expected format** popover with a block format example.

There is no note type picker: the note type is determined by the content you type or paste. Use `#type/basic`, `#type/cloze`, or any other `#type/<slug>` tag directly in the editor. For the simpler double-colon format, cards default to Basic.

### Formatting Toolbar

Standard text formatting buttons (bold, italic, code, etc.) that apply to the editor content. The toolbar appears once the editor is ready. `Cmd/Ctrl + U` (underline) and `Cmd/Ctrl + Shift + C` (cloze wrap) work here as in every True Recall editor.

### Editor

A full-featured text editor where you type or paste your card content. Supports syntax highlighting and standard text editing.

| Shortcut           | Action                       |
| ------------------ | ---------------------------- |
| `Cmd/Ctrl + Enter` | Save all parsed cards        |
| `Cmd/Ctrl + 3`     | Insert a blank card template |

The template shortcut inserts a ready-made block with a `#type/<slug>` tag and field names, useful when you can't remember the exact syntax.

### Card Preview

A live preview of all parsed cards appears below the editor.

- **Card count breakdown**: shows totals by type, e.g., "3 Basic, 2 Cloze"
- **Collapsible list**: displays the first 5 cards by default; expand to see all
- **Duplicate detection**: identical cards within the same session are detected and excluded from the count

<!-- TODO PHOTO -->

### Footer

| Element              | Description                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| **Format indicator** | Shows the detected format and count, e.g. "Format: block · 3 cards" (formats: `block`, `double-colon`, `tab`, `none`) |
| **Session count**    | After saving, shows a running total, e.g. "12 cards saved this session"                              |
| **AI help**          | "How to generate flashcards": tips for using external AI tools, with the expected format             |
| **Copy Prompt**      | Copies an AI-ready prompt with block format instructions to your clipboard                           |
| **Save N Cards**     | Creates all parsed cards in batch. Disabled when there are 0 valid cards or no source note selected  |

## Supported Formats

Import Studio auto-detects the input format as you type. The format indicator in the footer shows which format is currently active.

### Block Format

The same `#type/<slug>` format used throughout **True Recall**. This is the most powerful format: it supports mixed note types, source tracking, and type-in markers in a single batch. See [Creating Flashcards: Block Format](/creation/creating-flashcards/#block-format) for the full reference.

```markdown
#type/basic
Front: What is photosynthesis?
Back: The process by which plants convert sunlight into chemical energy.

---

#type/cloze
Text: The {{c1::mitochondria}} is the powerhouse of the cell.
Extra: Cell biology
@typein

---
```

Each block supports:

- `#type/<slug>` tag matching a [note type](/creation/note-types/) slug
- Field lines (`FieldName: value`); field names must match the note type
- Multi-line values (continue until the next field name or `---`)
- `<!-- source: text -->` comment for [source tracking](/creation/creating-flashcards/#source-tracking)
- `@typein` marker for [typed answers](/review/type-in-mode/)
- `---` separator between cards

### Double-colon and Cloze

One card per line, question and answer separated by `::`. Lines containing `{{c1::text}}` patterns are parsed as [cloze deletions](/creation/cloze-deletions/); you can add an optional extra field with `::` after the main text.

```
What is the capital of France? :: Paris
The {{c1::mitochondria}} is the powerhouse of the cell :: Biology
{{c1::Paris}} is the capital of {{c2::France}}
Water boils at {{c1::100}}°C at sea level
```

### Format Summary

| Format       | Detected When                        | Best For                                        |
| ------------ | ------------------------------------ | ----------------------------------------------- |
| Block        | Lines start with `#type/`            | Full control, mixed note types, source tracking |
| Double-colon | Lines contain `::` or `{{c1::...}}`  | Quick Q&A lists and fill-in-the-blank cards     |

## Creating Cards

1. Open Import Studio from the Command Palette ("Import flashcards")
2. Optionally pick a **source note** in the action bar to link the cards to
3. Type or paste formatted text into the editor (use `#type/<slug>` tags for block format, or `::` and cloze syntax for the quick format)
4. Watch the **Card Preview** update with parsed cards
5. Review the preview: check card count and content
6. Click **Save N Cards** or press `Cmd/Ctrl + Enter`

After saving:

- A notification confirms how many cards were created
- The editor clears, ready for the next batch
- The footer shows a running total of cards saved this session (e.g., "12 cards saved this session")

:::note[Source highlighting]
Only cards created with block format that include a `<!-- source: -->` comment will highlight text in your notes when hovered in the [Flashcard Panel](/views/flashcard-panel/).
:::

## Using AI to Generate Input

The **Copy Prompt** button in the footer generates a ready-made prompt with block format instructions and field name examples. Use it with any external AI tool to produce properly formatted cards.

1. Click **Copy Prompt** in the footer
2. Paste the prompt into ChatGPT, Claude, or another AI tool
3. Add your study material to the prompt
4. Copy the AI's output
5. Paste it back into Import Studio; the format is auto-detected
6. Review the preview and save

The generated prompt includes block format examples, rules for atomic facts, and guidelines for bold key terms and Obsidian `[[wikilinks]]`.

For AI generation directly in your notes, use the [Quick Actions Toolbar](/views/selection-toolbar/) instead; it handles everything in-app. See [AI Settings](/configuration/ai-settings/) for model and prompt configuration.

## Tips

### Use Block Format for Maximum Control

When you need source tracking, type-in markers, or mixed note types in a single batch, block format is the way to go. The double-colon format is a convenience shortcut for simpler use cases.

### Check the Preview Before Saving

The card preview catches formatting errors before they become cards. If the count doesn't match what you expect, check for missing `---` separators, mismatched field names, or extra blank lines.

### Template Shortcut

Press `Cmd/Ctrl + 3` to insert a block format template. The template includes a `#type/<slug>` tag and field names; just fill in the values.

## Import Studio vs Flashcard Editor

|                     | Import Studio                     | Flashcard Editor                          |
| ------------------- | --------------------------------- | ----------------------------------------- |
| **Best for**        | Creating many cards at once       | Creating or editing one card at a time    |
| **Input**           | Text editor (type or paste)       | Form fields                               |
| **Formats**         | Block, double-colon               | Form-based (no syntax)                    |
| **Live preview**    | Parsed cards list                 | Card count                                |
| **Source tracking** | Block format (`<!-- source: -->`) | Not available                             |
| **Typed answers**   | Block format (`@typein`)          | Toolbar toggle                            |
| **After save**      | Editor clears, modal stays open   | Fields clear (unpinned), editor stays open |

## What to Read Next

- [Creating Flashcards](/creation/creating-flashcards/): overview of all creation methods and the block format reference
- [Note Types](/creation/note-types/): field names for each built-in type (Basic, Cloze, Image Occlusion)
- [Cloze Deletions](/creation/cloze-deletions/): full cloze syntax guide with hints and multiple deletions
- [Flashcard Editor](/views/flashcard-editor/): form-based card creation for individual cards
- [Flashcard Panel](/views/flashcard-panel/): where your cards appear after creation
