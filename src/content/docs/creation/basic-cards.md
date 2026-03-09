---
title: Basic Cards
sidebar:
  order: 1
description: "Create flashcards using the block format with note types, or the quick inline :: syntax."
---

Basic cards are the simplest flashcard type — one question, one answer.

## Block Format (Recommended)

The primary way to create flashcards uses **note types** with the `#type/` tag:

```markdown
#type/basic
Front: What is spaced repetition?
Back: A learning technique that reviews information at increasing intervals to optimize long-term retention.
---
```

Each block starts with `#type/<slug>`, followed by field lines (`FieldName: value`), and ends with `---`.

### Multiple Cards

Add multiple blocks in the same note:

```markdown
#type/basic
Front: What is the capital of France?
Back: Paris
---

#type/basic
Front: What is the powerhouse of the cell?
Back: The mitochondria
---
```

### Multi-Line Fields

For longer content, the field value continues on the next lines:

```markdown
#type/basic
Front: Explain the process of photosynthesis.
Back: Photosynthesis is the process by which plants convert light energy into chemical energy.

The light-dependent reactions occur in the thylakoid membrane.
The Calvin cycle occurs in the stroma.
---
```

### Source Tracking

Add an optional source comment to link a card to exact text in your notes:

```markdown
#type/basic
Front: What is apoptosis?
Back: Programmed cell death that occurs in multicellular organisms.
<!-- source: Apoptosis is a form of programmed cell death that occurs in multicellular organisms -->
---
```

### Type-in Mode

Mark a card as requiring a typed answer:

```markdown
#type/basic
Front: What does FSRS stand for?
Back: Free Spaced Repetition Scheduler
@typein
---
```

## Reversed Cards

Use `#type/basic-reversed` to create two cards — one in each direction (Q→A and A→Q):

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

## Inline Syntax (Quick Alternative)

For fast, single-line cards, use `::` to separate question and answer:

```markdown
What is the capital of France? ::Paris
```

Everything before `::` is the question, everything after is the answer.

### Multi-Line Inline

```markdown
What are the three branches of government?
::
1. Legislative — makes laws
2. Executive — enforces laws
3. Judicial — interprets laws
```

:::note
The inline `::` syntax creates basic cards. For reversed, cloze, or image occlusion cards, use the block format or the [Selection Toolbar](/creation/selection-toolbar/).
:::

## Easiest Way: Selection Toolbar

The fastest way to create flashcards is with the [Selection Toolbar](/creation/selection-toolbar/):

1. Select text in your note
2. A toolbar appears above your selection
3. Click **Basic**, **Cloze**, or **Auto**
4. AI generates cards in block format automatically

## Markdown Formatting

Cards support full Markdown in both block and inline formats:

- **Bold**, *italic*, ~~strikethrough~~
- `inline code` and code blocks
- [Links](url) and ![[images]]
- Math (LaTeX): `$$E = mc^2$$`
- Lists, tables, blockquotes

## Images in Cards

```markdown
#type/basic
Front: What anatomical structure is highlighted?
![[brain-anatomy.png]]
Back: Hippocampus
---
```

## Collecting Cards

After writing flashcards, they need to be **collected** into the database:

1. Open the [Flashcard Panel](/views/flashcard-panel/) (brain icon in the ribbon)
2. Uncollected cards appear in the "Uncollected" section
3. Click **Collect** on each card (or Collect All)

Collection adds cards to the database, assigns FSRS scheduling, and links cards to the source note.

## Card Status

After collection, cards show status badges:

| Badge | Meaning |
|-------|---------|
| Green | New — never reviewed |
| Orange | Learning — in learning phase |
| Blue | Review — graduated |
| Red | Suspended — manually paused |

## Editing Cards

- **From source** — Edit the markdown in your note. Changes sync automatically.
- **From Panel** — Click the edit icon to open the card editor.
- **During review** — Press `E` to edit the current card inline.

## Deleting Cards

- **From source** — Delete the markdown. The card becomes orphaned and can be removed.
- **From Panel** — Click the trash icon and confirm.
- **During review** — Press `!` to suspend, or use the actions menu.

## Best Practices

For detailed guidance on writing effective flashcards — with good vs bad examples, common mistakes, and tips — see [Best Practices](/creation/best-practices/).
