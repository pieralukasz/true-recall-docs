---
title: Custom Type Modal
sidebar:
  order: 10
description: "The modal for creating and managing custom note types — fields, card templates, and CSS."
---

:::caution[My Notes]
:::

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

TODO PHOTO

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

TODO PHOTO

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

TODO PHOTO

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

---

## Worked Example: Japanese Vocabulary Type

This walks through creating a complete custom type for Japanese vocabulary — word, reading, meaning, and an example sentence. It generates two cards per entry: one for recognition (Japanese → English) and one for production (English → Japanese).

### Step 1: Create the type

1. Open **Cmd/Ctrl + P → "Manage note types"**
2. Click **+ New**
3. Name: `Japanese Vocabulary`
4. Slug: `japanese`

### Step 2: Add fields

Add four fields in this order:

| Name | Type |
|------|------|
| Word | Text |
| Reading | Text |
| Meaning | Text |
| Example | Text |

### Step 3: Create two card templates

**Template 1 — Recognition (Japanese → English):**

Question side:
```html
<div class="word">{{Word}}</div>
<div class="reading">{{Reading}}</div>
```

Answer side:
```html
<div class="word">{{Word}}</div>
<div class="reading">{{Reading}}</div>
<hr>
<div class="meaning">{{Meaning}}</div>
{{#Example}}
<div class="example">{{Example}}</div>
{{/Example}}
```

**Template 2 — Production (English → Japanese):**

Question side:
```html
<div class="prompt">How do you say in Japanese:</div>
<div class="meaning">{{Meaning}}</div>
```

Answer side:
```html
<div class="meaning">{{Meaning}}</div>
<hr>
<div class="word">{{Word}}</div>
<div class="reading">{{Reading}}</div>
{{#Example}}
<div class="example">{{Example}}</div>
{{/Example}}
```

### Step 4: Add CSS

```css
.card {
  font-family: sans-serif;
  text-align: center;
  color: var(--text-normal);
  background-color: var(--background-primary);
}

.word {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.25em;
}

.reading {
  font-size: 1.1em;
  color: var(--text-muted);
  margin-bottom: 1em;
}

.meaning {
  font-size: 1.3em;
}

.example {
  margin-top: 1em;
  font-style: italic;
  color: var(--text-muted);
  font-size: 0.95em;
}
```

### Step 5: Save and use

Click **Save**. The type is now available in the [Flashcard Editor](/views/flashcard-editor/).

Each entry you create generates **two cards** — one for each template. The card count preview in the editor footer shows "Will generate: 2 card(s)" as you fill in the fields.

In block format, the type looks like:

```markdown
#type/japanese
Word: 猫
Reading: ねこ (neko)
Meaning: Cat
Example: 猫が窓の外を見ています。(The cat is looking out the window.)
---
```
