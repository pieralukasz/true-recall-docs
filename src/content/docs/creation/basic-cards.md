---
title: Basic Cards
sidebar:
  order: 4
description: "Write basic and reversed flashcards using block format in your notes."
---

:::caution[My Notes]
:::

Basic cards test one specific fact: a question on the front, an answer on the back. They're the right choice when you want to test something in one direction — a definition, a fact, a translation — and a short answer is all you need.

For vocabulary or anything you want to test in both directions, use [Basic (Reversed)](#reversed-cards). For fill-in-the-blank in a sentence, use [Cloze Deletions](/creation/cloze-deletions/).

## Block Format

Write basic cards using the `#type/basic` block in your notes:

```markdown
#type/basic
Front: What is photosynthesis?
Back: The process by which plants convert light energy into chemical energy.
---
```

Each block starts with `#type/basic`, followed by field lines (`FieldName: value`), and ends with `---`.

### Multiple Cards

Add multiple blocks in the same note:

```markdown
#type/basic
Front: What is the capital of France?
Back: Paris
---

#type/basic
Front: What does HTTP stand for?
Back: HyperText Transfer Protocol
---
```

### Multi-Line Fields

Field values continue on the next lines:

```markdown
#type/basic
Front: Explain the difference between RAM and ROM.
Back: RAM (Random Access Memory) is volatile — it loses data when power is off.
ROM (Read-Only Memory) is non-volatile — data persists without power.
---
```

### Source Tracking

Add a source comment to link a card to specific text in your note:

```markdown
#type/basic
Front: What is apoptosis?
Back: Programmed cell death that occurs in multicellular organisms.
<!-- source: Apoptosis is a form of programmed cell death that occurs in multicellular organisms -->
---
```

The [Selection Toolbar](/views/selection-toolbar/) adds this automatically when generating cards. You can add it manually too.

### Type-in Mode

Mark a card as requiring a typed answer with `@typein`:

```markdown
#type/basic
Front: What does FSRS stand for?
Back: Free Spaced Repetition Scheduler
@typein
---
```

During review, you'll type your answer instead of just flipping the card.

## Reversed Cards

Use `#type/basic-reversed` to create two cards from one block — one in each direction:

```markdown
#type/basic-reversed
Front: Mitochondria
Back: The powerhouse of the cell
---
```

This creates:
- **Card 1:** "Mitochondria" → "The powerhouse of the cell"
- **Card 2:** "The powerhouse of the cell" → "Mitochondria"

Both cards are scheduled independently. Good for vocabulary, capitals, abbreviations, and anything where both directions make sense.

## Markdown and Images

Cards support full Markdown:

- **Bold**, *italic*, ~~strikethrough~~
- `inline code` and code blocks
- Links and `![[images]]`
- Math (LaTeX): `$$E = mc^2$$`
- Lists, tables, blockquotes

```markdown
#type/basic
Front: What anatomical structure is highlighted?
![[brain-anatomy.png]]
Back: Hippocampus
---
```

## Card States

After collecting, cards show status badges:

| Badge | Meaning |
|-------|---------|
| Green | New — never reviewed |
| Orange | Learning — in learning phase |
| Blue | Review — graduated |
| Red | Suspended — manually paused |

## Editing and Deleting

- **From source** — Edit the markdown in your note. Changes sync automatically.
- **From Panel** — Click the edit icon to open the card editor.
- **During review** — Press `E` to edit the current card inline.

To delete: use the trash icon in the Flashcard Panel, or delete the block from your note (the card becomes orphaned and can be removed from the Panel).

:::note[Collection required]
Cards written in block format need to be collected before they appear in reviews. See [Creating Flashcards](/creation/creating-flashcards/#the-collection-step) for how collection works.
:::

## Best Practices

For detailed guidance on writing effective flashcards — with good vs bad examples, common mistakes, and tips — see [Best Practices](/creation/best-practices/).
