---
title: Flashcard Editor
sidebar:
  label: "Flashcard Editor"
  order: 4
description: A form-based editor for creating and editing flashcards without writing syntax, with undo, formatting shortcuts, and popout windows on desktop.
---

:::caution[My Notes]
:::

The **Flashcard Editor** is a form for creating and editing flashcards. Instead of writing block format syntax, you fill in fields directly: pick a note type, type your content, and save. Its window is titled **Add Flashcard** or **Edit Flashcard** depending on the mode.

## How to Open

| Context | Action |
|---------|--------|
| Flashcard Panel | Click **Add Card** in the header (or press `N` while the panel has focus) |
| Review session | Press `A` or use the menu → "Add flashcard" |
| Card context menu | Right-click a card → **Edit** |
| Quick Actions Toolbar | Select text → **Edit** |

In **add mode** the editor opens empty and stays open after each save so you can create multiple cards quickly. In **edit mode** it loads the existing card's fields and closes after saving.

### Popout window

On desktop the editor opens in its own popout window (since 1.9.4), so it can sit next to your note while you type. On phones and tablets, and wherever popouts are unavailable, it opens as a modal instead. The Note Type Manager and Card Types Editor open the same way.

## Layout

From top to bottom, the editor contains:

1. **Action bar**: note type picker, source note picker
2. **Formatting toolbar**: text formatting buttons, type-in toggle
3. **Fields**: dynamic form fields based on the selected note type
4. **My Note**: an optional comment field for the card
5. **Footer**: management buttons, card count preview, save

<!-- TODO PHOTO -->

### Action Bar

- **Note type picker**: dropdown to select the card type: Basic, Basic (Reversed), Cloze, or any custom note type you've created. Image Occlusion is not available here; use the [dedicated IO editor](/creation/image-occlusion/) instead.
- **Source note picker** *(add mode only)*: combobox to link the new card to a specific note. Defaults to the note you were just working in. If the selected note doesn't have a `flashcard_uid` yet, one is created automatically.
- **Change** *(edit mode only)*: opens a field mapping dialog to convert the card to a different note type.

### Formatting Toolbar

A shared toolbar that applies to whichever field currently has focus: Bold, Italic, Underline, Superscript, Subscript, Highlight, Cloze deletion, Inline code, Math (LaTeX), Wiki link, Insert image, Text color, Clear formatting, and **Always type-in for created card** *(add mode only)*, which marks the card as requiring a typed answer during review (see [Typed Answers](/review/type-in-mode/)).

### Fields

Fields update dynamically when you change the note type. For example, selecting "Basic" shows **Front** and **Back** fields, while "Cloze" shows a **Text** field.

Each field is a rich text editor with:

- Full Markdown support (formatting, links, images, math), plus Ink drawing embeds
- Collapsible headers: click to collapse fields you don't need to see
- **Pin field** *(add mode only)*: pinned fields keep their content on Save & Add, useful for creating multiple related cards quickly

:::tip[Cloze hint]
When a Cloze note type is selected, the editor displays syntax help for cloze deletions: `{{c1::text}}`, `{{c2::text}}`, etc. Select a word and press `Cmd/Ctrl + Shift + C` to wrap it in the next cloze.
:::

### My Note

A free-text comment attached to the card ("Add a thought, doubt, or verification request…"). It is shown to you during review and can be edited there as well; it never becomes part of the question or answer.

### Footer

| Element | Description |
|---------|-------------|
| **Fields** button | Opens the Note Type Manager to add or edit note type fields |
| **Cards** button | Opens the Card Types Editor to configure how cards are generated from fields |
| **Card count preview** *(add mode)* | Shows "Will generate: X card(s)" based on current field values |
| **Save** / **Save Changes** | Creates the card(s) in add mode, or saves changes in edit mode |

## Creating Cards (Add Mode)

1. Open the editor from the Flashcard Panel **Add Card** button
2. Select a **note type** from the dropdown
3. Optionally pick a **source note** to link the card to
4. Fill in the fields
5. Click **Save** or press `Cmd/Ctrl + Enter`

<!-- TODO PHOTO -->

After saving:
- A notification confirms how many cards were created (e.g., "Created 2 cards" for a reversed card)
- **Unpinned fields** are cleared automatically
- **Pinned fields** keep their content, ready for the next card
- The editor stays open so you can keep adding cards
- Press `Cmd/Ctrl + Z` right away to undo the creation and get the typed fields back (see [Undo](#undo))

:::tip[Rapid card creation]
Pin the fields you want to reuse (e.g., a shared context or topic), then only change the unique content between saves. This is much faster than writing block syntax for a series of related cards.
:::

:::note[No source highlighting]
Cards created through the Flashcard Editor don't have a `<!-- source: -->` comment, so they **won't highlight text in your note** when you hover over them in the Flashcard Panel. If you want hover-highlighting, create cards via the [Quick Actions Toolbar](/views/selection-toolbar/) or AI generation instead; those methods automatically embed a source reference linking each card back to the original text.
:::

### Card Count Preview

The footer shows a real-time preview of how many cards will be generated:

- **Basic**: 1 card
- **Basic (Reversed)**: 2 cards (one in each direction)
- **Cloze**: one card per cloze deletion (`{{c1::...}}`, `{{c2::...}}`, etc.)

## Editing Cards (Edit Mode)

1. Right-click a card in the Flashcard Panel → **Edit**
2. Modify the field values
3. Click **Save Changes** or press `Cmd/Ctrl + Enter`

In edit mode:
- The note type dropdown is read-only; use the **Change** button to convert to a different type
- The **Change** button opens a field mapping dialog where you choose how existing fields map to the new type's fields
- The editor closes after saving
- Closing with unsaved content asks "Discard changes?" first

Edits are counted per note (hand edits and AI edits separately); see the **Edits** columns in the [Card Browser](/views/card-browser/).

## Undo

Since 2.2.0 every editing path is undoable: adding, editing, deleting, moving and switching note type. Two cases matter in the editor:

- `Cmd/Ctrl + Z` inside a field undoes your typing, as in any editor.
- `Cmd/Ctrl + Z` right after **Save** (add mode) undoes the card creation and restores the fields you typed, as long as you haven't typed anything since.

Outside the editor, **Undo last flashcard action** and **Redo last undone action** in the Command Palette walk the same history, and undoing a delete revives the card.

## On phones

The mobile layout (2.2.0) uses a sticky footer with **Save & add another** and an explicit **Done** button; **Done** saves a non-empty draft and closes the editor.

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + Enter` | Save the card |
| `Cmd/Ctrl + Z` | Undo typing, or undo the last **Save** while nothing new was typed |
| `Cmd/Ctrl + B` / `Cmd/Ctrl + I` | Bold / italic |
| `Cmd/Ctrl + U` | Underline (`<u>…</u>`) |
| `Cmd/Ctrl + Shift + H` | Highlight |
| `Cmd/Ctrl + Shift + C` | Wrap selection in a cloze deletion |
| `N` *(in the Flashcard Panel)* | Open the editor in add mode |
| `A` *(during review)* | Open the editor to add a new card linked to the current review card's source note |

`Cmd/Ctrl + U` and `Cmd/Ctrl + Shift + C` work in every embedded True Recall editor since 2.3.0 (earlier versions advertised them in the toolbar without a handler).

## What to Read Next

- [Flashcard Panel](/views/flashcard-panel/): where the editor is opened from and where cards appear
- [Import Studio](/views/import-studio/): create many cards at once from formatted text
- [Note Types](/creation/note-types/): fields for each built-in type
- [Custom Note Types](/creation/custom-note-types/): what the **Fields** and **Cards** buttons edit
- [Keyboard Shortcuts](/configuration/keyboard-shortcuts/): the full shortcut list
