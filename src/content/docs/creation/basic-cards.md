---
title: Basic Cards
sidebar:
  order: 1
description: "Create basic flashcards using the Selection Toolbar, Flashcard Editor, or text-based syntax."
---

Basic cards are the simplest flashcard type — one question, one answer. There are several ways to create them, from AI-powered generation to manual text syntax.

## Selection Toolbar (Recommended)

The fastest way to create flashcards is with the [Selection Toolbar](/creation/selection-toolbar/):

1. Select text in your note
2. A toolbar appears above your selection
3. Click **Basic**, **Cloze**, or **Auto**
4. AI generates cards automatically

Cards are created in block format and appear in the [Flashcard Panel](/views/flashcard-panel/) ready to collect.

## Flashcard Editor (Recommended)

The [Flashcard Editor](/views/flashcard-editor/) lets you create cards by filling in fields directly — pick a note type, enter your content, and save. No syntax to remember.

- Open it from the **Add (+)** button in the [Flashcard Panel](/views/flashcard-panel/)
- Or press `A` during a review session

Cards created through the editor are added to the database immediately — no collection step needed.

## Block Format

For users who prefer writing cards directly in their notes, the block format uses **note types** with the `#type/` tag:

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

## Markdown Formatting

Cards support full Markdown in block format and in the Flashcard Editor:

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

Cards written as syntax in your notes (block format) need to be **collected** into the database before they appear in reviews:

1. Open the [Flashcard Panel](/views/flashcard-panel/) (brain icon in the ribbon)
2. Uncollected cards appear in the "Uncollected" section
3. Click **Collect** on each card (or Collect All)

Collection adds cards to the database, assigns FSRS scheduling, and links cards to the source note.

:::tip
Cards created via the [Selection Toolbar](/creation/selection-toolbar/) also need collecting. Cards created via the [Flashcard Editor](/views/flashcard-editor/) skip this step — they go directly into the database.
:::

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
