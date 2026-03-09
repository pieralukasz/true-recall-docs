---
title: Flashcard Editor
sidebar:
  order: 4
description: A form-based modal for creating and editing flashcards without writing syntax.
---

The **Flashcard Editor** is a modal dialog for creating and editing flashcards through a form interface. Instead of writing block format syntax, you fill in fields directly — pick a note type, type your content, and save.

## How to Open

| Context | Action |
|---------|--------|
| Flashcard Panel | Click the **Add (+)** button in the header |
| Review session | Press `A` or use the menu → "Add flashcard" |
| Card context menu | Right-click a card → **Edit** |

In **add mode** the editor opens empty and stays open after each save so you can create multiple cards quickly. In **edit mode** it loads the existing card's fields and closes after saving.

## Modal Layout

From top to bottom, the editor contains:

1. **Action bar** — Note type picker, source note picker
2. **Formatting toolbar** — Text formatting buttons, type-in toggle
3. **Fields** — Dynamic form fields based on the selected note type
4. **Footer** — Management buttons, card count preview, save

### Action Bar

- **Note type picker** — Dropdown to select the card type: Basic, Basic (Reversed), Cloze, or any custom note type you've created. Image Occlusion is not available here — use the [dedicated IO editor](/creation/image-occlusion/) instead.
- **Source note picker** *(add mode only)* — Combobox to link the new card to a specific note. If the selected note doesn't have a `flashcard_uid` yet, one is created automatically.
- **Change button** *(edit mode only)* — Opens a field mapping dialog to convert the card to a different note type.

### Formatting Toolbar

A shared toolbar that applies to whichever field currently has focus:

- Standard text formatting (bold, italic, code, etc.)
- **Type-in toggle** *(add mode only)* — Marks the card as requiring a typed answer during review

### Fields

Fields update dynamically when you change the note type. For example, selecting "Basic" shows **Front** and **Back** fields, while "Cloze" shows a **Text** field.

Each field is a rich text editor with:

- Full Markdown support (formatting, links, images, math)
- Collapsible headers — click to collapse fields you don't need to see
- **Pin button** *(add mode only)* — Pinned fields keep their content after saving, useful for creating multiple related cards quickly

:::tip[Cloze hint]
When a Cloze note type is selected, the editor displays syntax help for cloze deletions: `{{c1::text}}`, `{{c2::text}}`, etc.
:::

### Footer

| Element | Description |
|---------|-------------|
| **Fields** button | Opens the Note Type Manager to add or edit note type fields |
| **Cards** button | Opens the Card Types Editor to configure how cards are generated from fields |
| **Card count preview** *(add mode)* | Shows "Will generate: X card(s)" based on current field values |
| **Save** button | Creates the card(s) in add mode, or saves changes in edit mode |

## Creating Cards (Add Mode)

1. Open the editor from the Flashcard Panel **Add (+)** button
2. Select a **note type** from the dropdown
3. Optionally pick a **source note** to link the card to
4. Fill in the fields
5. Click **Save** or press `Cmd/Ctrl + Enter`

After saving:
- A notification confirms how many cards were created (e.g., "Created 2 cards" for a reversed card)
- **Unpinned fields** are cleared automatically
- **Pinned fields** keep their content — ready for the next card
- The modal stays open so you can keep adding cards

:::tip[Rapid card creation]
Pin the fields you want to reuse (e.g., a shared context or topic), then only change the unique content between saves. This is much faster than writing block syntax for a series of related cards.
:::

### Card Count Preview

The footer shows a real-time preview of how many cards will be generated:

- **Basic** — 1 card
- **Basic (Reversed)** — 2 cards (one in each direction)
- **Cloze** — one card per cloze deletion (`{{c1::...}}`, `{{c2::...}}`, etc.)

## Editing Cards (Edit Mode)

1. Right-click a card in the Flashcard Panel → **Edit**
2. Modify the field values
3. Click **Save Changes** or press `Cmd/Ctrl + Enter`

In edit mode:
- The note type dropdown is read-only — use the **Change** button to convert to a different type
- The **Change** button opens a field mapping dialog where you choose how existing fields map to the new type's fields
- The modal closes after saving

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + Enter` | Save the card |
| `A` *(during review)* | Open the editor to add a new card linked to the current review card's source note |
