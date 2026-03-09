---
title: Custom Type Modal
sidebar:
  order: 10
description: "The modal for creating and managing custom note types — fields, card templates, and CSS."
---

The **Custom Type Modal** is where you create and manage custom note types. Open it from the Command Palette (Cmd/Ctrl + P → "Manage note types"), or from the type picker in the [Flashcard Editor](/views/flashcard-editor/).

For a conceptual introduction to custom note types — what they are, when to use them, and how fields and templates work — see [Custom Note Types](/creation/custom-note-types/).

## The Modal Layout

```
+---------------------------------------------+
|  Note Types                            [+ New] |
+-------------------+-------------------------+
|  Built-in         |  [Name]   [slug]        |
|  > Basic          |                         |
|  > Cloze          |  Fields                 |
|  > Image Occlusion|  [Field 1] [↑↓] [✕]    |
|                   |  [Field 2] [↑↓] [✕]    |
|  Custom           |  [+ Add field]          |
|  > Japanese       |                         |
|  > Medical        |  Templates              |
|                   |  [Card 1: Q / A]        |
|                   |  [+ Add template]       |
|                   |                         |
|                   |  CSS                    |
|                   |  [css editor...]        |
|                   |                         |
|                   |  [Delete]    [Save]     |
+-------------------+-------------------------+
```

Left panel: list of all note types (built-in and custom). Right panel: editor for the selected type.

## Creating a New Note Type

1. Click **+ New** in the top-right
2. Enter a **name** (e.g., "Japanese Vocabulary")
3. Enter a **slug** — the identifier used in block format (e.g., `japanese`). Lowercase, no spaces.
4. Add fields
5. Create card templates
6. Optionally add CSS
7. Click **Save**

## Fields

Fields are the data slots for your cards. Each field has:

| Property | Description |
|----------|-------------|
| **Name** | Used in templates as `{{FieldName}}` and in block format as `FieldName: value` |
| **Type** | Text or Image |
| **Order** | Drag to reorder; order matters for block format |

Click **+ Add field** to add a new field. Use the arrows to reorder, or the ✕ to remove.

:::caution[Field order affects block format]
The order of fields in the modal determines the order of field lines in block format. Changing field order after cards exist won't break existing cards, but new blocks must match the current order.
:::

## Card Templates

Each template generates one card per note. A type with two templates creates two cards per block.

Each template has a **question side** and an **answer side**. Write HTML and template syntax:

**Inserting a field:**
```
{{Front}}
```

**Conditional (show if field has content):**
```
{{#Extra}}
<div class="extra">{{Extra}}</div>
{{/Extra}}
```

**Conditional (show if field is empty):**
```
{{^Hint}}
No hint provided
{{/Hint}}
```

Click **+ Add template** to add a second card direction (e.g., for production vs. recognition).

## CSS

CSS applies to all cards of this note type during review. Use standard CSS targeting `.card`:

```css
.card {
  font-family: sans-serif;
  font-size: 1.2em;
  text-align: center;
}
```

For dark mode compatibility, use Obsidian CSS variables:

```css
.card {
  color: var(--text-normal);
  background-color: var(--background-primary);
}
```

## Editing an Existing Type

Select a custom type from the left panel. Make changes in the right panel. Click **Save**.

Changes apply to all existing cards using this type immediately — templates and CSS update on next review. Field changes (adding/removing fields) affect the block format for new cards; existing card data is preserved.

## Deleting a Type

Select the type, click **Delete**, confirm. Only custom types can be deleted — built-in types (Basic, Cloze, Image Occlusion) are locked.

:::caution[Cards are not deleted]
Deleting a note type does not delete existing cards that use it. Those cards become orphaned and will show a missing type indicator. You can reassign them in the [Card Browser](/views/card-browser/).
:::

## Converting Cards Between Types

To change the note type of existing cards, use the [Card Browser](/views/card-browser/): select cards → right-click → Change note type → map old fields to new fields → confirm.
