---
title: Custom Note Types
sidebar:
  order: 3
description: "Create note types with custom fields, card templates, and CSS for domain-specific flashcard layouts."
---

:::caution[My Notes]
:::

The four [built-in note types](/creation/note-types/) cover most use cases. Custom note types are for when you need something they can't do — extra fields, a different card structure, or a layout specific to your subject.

Common reasons to create a custom type:
- **Language learning** — fields for the word, reading (furigana), meaning, example sentence
- **Medical/scientific** — question, answer, and a clinical note field
- **Vocabulary with memory aids** — Front, Back, Mnemonic
- **Two-sided with extra context** — Front, Back, Source, Context

If you're starting out, don't create custom types yet. Learn the built-in types first, then create custom ones when you find yourself adding the same kind of extra information to every card.

## What a Note Type Is Made Of

```
Note type
  ├── Fields       (Front, Back, Mnemonic)
  ├── Templates    (how fields become review cards)
  └── CSS          (appearance during review)
```

Each piece does a different job. Fields hold the data. Templates define what appears on the question and answer sides. CSS controls how it looks.

## Fields

A field is a named slot that holds content. You define the field names when creating the note type, then fill them in when writing cards.

Fields are referenced in templates using double braces:

```
{{Front}}
{{Back}}
{{Mnemonic}}
```

In block format, each field becomes a line:

```markdown
#type/japanese
Word: 水
Reading: みず
Meaning: water
Sentence: 水を飲んでください。
---
```

Field order in the block must match the order you defined in the type. Field names are case-sensitive.

## Card Templates

Each template generates one card. A note type with two templates generates two cards per block. A note type with one template generates one card.

A template has two sides — question and answer:

**Question template:**
```
{{Front}}
```

**Answer template:**
```
{{Front}}
<hr>
{{Back}}
{{#Mnemonic}}
<em>{{Mnemonic}}</em>
{{/Mnemonic}}
```

### Conditional content

Use `{{#FieldName}}...{{/FieldName}}` to show content only when a field is filled in:

```
{{#Mnemonic}}
Memory aid: {{Mnemonic}}
{{/Mnemonic}}
```

Use `{{^FieldName}}...{{/FieldName}}` to show content only when a field is empty:

```
{{^Hint}}
No hint available
{{/Hint}}
```

### Multiple templates = multiple cards

A "Language" note type might have two templates:

- Template 1: "Word" → reveal "Meaning" (recognition)
- Template 2: "Meaning" → reveal "Word" (production)

Both cards use the same field data but test in different directions.

## The Slug

The slug is the short identifier used in block format. You define it when creating the note type.

```
name: "Japanese Vocabulary"
slug: japanese
```

```markdown
#type/japanese
Word: 水
Reading: みず
Meaning: water
---
```

Slugs are lowercase, no spaces. Use hyphens for multi-word slugs: `language-card`, `medical-basic`.

## CSS

CSS controls card appearance during review. You write it once per note type; it applies to all cards of that type.

```css
.card {
  font-family: sans-serif;
  font-size: 1.2em;
  text-align: center;
}

.reading {
  font-size: 0.9em;
  color: var(--sl-color-gray-4);
}
```

Use CSS variables for theme compatibility (light and dark mode):

```css
.card {
  color: var(--text-normal);
  background-color: var(--background-primary);
}
```

## Special Fields

In addition to your custom fields, these built-in variables are available in any template:

| Field | Description |
|-------|-------------|
| `{{Tags}}` | Note tags |
| `{{Type}}` | Note type name |
| `{{Deck}}` | Project name |
| `{{Subdeck}}` | Sub-project name |

## Converting Between Note Types

You can change the note type of existing cards:

1. Open [Card Browser](/views/card-browser/)
2. Select cards to convert
3. Right-click → Change note type
4. Select the new note type
5. Map old fields to new fields
6. Confirm

## Managing Custom Types

Create, edit, and delete custom note types using the [Custom Type Modal](/views/custom-type-modal/) — open it from the Command Palette → "Manage note types", or from the type picker in the Flashcard Editor.

Built-in types (Basic, Cloze, Image Occlusion) cannot be deleted.
