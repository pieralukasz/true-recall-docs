---
title: Creating Flashcards
sidebar:
  order: 1
description: "How to create flashcards in True Recall — AI generation, the Flashcard Editor, and block format."
---

:::caution[My Notes]
:::

Every flashcard in **True Recall** starts the same way: you decide what's worth remembering, and the plugin turns it into a scheduled review card. How you get there depends on your workflow.

## Many Ways to Create Cards

**[Selection Toolbar](/views/selection-toolbar/)** — Select text in any note, click a button, and AI generates formatted cards from your content. The fastest way to create cards from existing material. Cards appear in your note as block format text, ready to [collect](#the-collection-step).

**[Flashcard Editor](/views/flashcard-editor/)** — A form where you pick a [note type](/creation/note-types/), fill in fields, and save. Cards go straight into the database — no collection needed. Open it from the **Add (+)** button in the [Flashcard Panel](/views/flashcard-panel/) header, or press `A` during a review session.

**[Import Studio](/views/import-studio/)** — Import flashcards from external sources like Anki decks, CSV files, or other apps. Maps fields to True Recall note types and brings cards straight into your database with full scheduling data.

**[Block format](#block-format)** — Write cards as structured text directly in your notes using `#type/<slug>` syntax. This is primarily how AI-generated cards are stored in your notes. You can also write blocks by hand, but the Selection Toolbar and Flashcard Editor are faster for most people.

Most workflows combine AI generation for bulk creation with the Flashcard Editor for crafting individual cards by hand.

## AI Generation

The [Selection Toolbar](/views/selection-toolbar/) appears when you select text in any note. It can generate:

| Button    | What it creates                                                                 |
| --------- | ------------------------------------------------------------------------------- |
| **Basic** | Question-and-answer cards                                                       |
| **Cloze** | Fill-in-the-blank cards                                                         |
| **Auto**  | AI picks the best format for each fact                                          |
| **IO**    | [Image occlusion](/creation/image-occlusion/) cards (when an image is selected) |

You can also generate cards from an entire note at once — open the Command Palette (`Cmd/Ctrl + P`) and run "Generate flashcards from note."

:::tip[Start with Basic]
**Basic** is the best default for meaningful learning. It forces you to formulate a clear question and a precise answer — which is exactly the kind of active recall that builds lasting knowledge. Auto and Cloze are available if you want them, but I recommend starting with Basic and only branching out once you've developed a feel for what makes a good card. See the [author's note on Cloze](/creation/note-types/#cloze) for more on this.
:::

AI generation requires either an API key or a [True Recall subscription](https://truerecall.app). Configure your AI settings in `Settings → AI`. See [Selection Toolbar](/views/selection-toolbar/) for model options, custom prompts, and generation density settings.

## The Flashcard Editor

The [Flashcard Editor](/views/flashcard-editor/) is a form-based modal — pick a note type, fill in fields, save. No syntax to remember.

Open it from:

- **Flashcard Panel** → click the **Add (+)** button in the header
- **During review** → press `A` or use the menu → "Add flashcard"
- **Command Palette** → "Add flashcard"

Cards created through the editor go straight into the database. They skip the collection step entirely.

:::tip[Rapid card creation]
In add mode, the editor stays open after each save. Pin fields you want to reuse (like a shared topic), then only change the unique content between saves. Much faster than writing block syntax for a series of related cards.
:::

## Block Format

Cards written directly in your notes use the block format: a `#type/<slug>` tag, field lines, and a `---` separator.

```markdown
#type/basic
Front: What is the speed of light?
Back: Approximately 299,792 km/s in a vacuum.

---
```

The card lives in your note, next to the content it came from:

```
Chapter 5: Special Relativity

  Einstein proposed that the speed of light is constant...

  #type/basic
  Front: What is the speed of light?
  Back: Approximately 299,792 km/s in a vacuum.
  ---
```

Each note type has a **slug** — the identifier after `#type/`. See [Note Types](/creation/note-types/) for all built-in slugs (`basic`, `basic-reversed`, `cloze`, `image-occlusion`).

### Multi-Line Fields

Field values continue on the next lines until the next field name or `---`:

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

## <!-- source: Apoptosis is a form of programmed cell death -->
```

The [Selection Toolbar](/views/selection-toolbar/) adds this automatically when generating cards. You can also add it manually — it enables hover-highlighting in the [Flashcard Panel](/views/flashcard-panel/).

### Type-in Mode

Mark a card as requiring a typed answer with `@typein`:

```markdown
#type/basic
Front: What does FSRS stand for?
Back: Free Spaced Repetition Scheduler
@typein

---
```

During review, you'll type your answer instead of just flipping the card. See [Type-in Mode](/review/type-in-mode/) for how it works during review.

### Markdown Support

Cards support full Markdown — **bold**, _italic_, `inline code`, code blocks, links, `![[images]]`, math (`$$E = mc^2$$`), lists, tables, and blockquotes.

:::note[Collection required]
Cards written in block format need to be collected before they appear in reviews. See [The Collection Step](#the-collection-step) below.
:::

## The Collection Step

Writing a block in your note doesn't add a card to the review queue immediately. It becomes **uncollected** — visible in the [Flashcard Panel](/views/flashcard-panel/) but not yet scheduled.

```
write block in note  →  uncollected  →  click Collect  →  review queue
```

Collection is intentional by design:

- **Preview first** — review AI-generated cards before committing them to your schedule
- **Batch at your pace** — write cards throughout the day, collect when ready
- **No accidents** — draft or incomplete blocks won't appear in reviews

To collect: open the [Flashcard Panel](/views/flashcard-panel/) (brain icon in the ribbon). Uncollected cards show a pulsing badge. Click **Collect** to add them all at once.

After collection, each card gets fresh FSRS scheduling data and a green "New" badge. It's ready for review.

### Source Notes and UIDs

Each note with flashcards gets a unique `flashcard_uid` in its frontmatter:

```yaml
---
flashcard_uid: abc123-def456
---
```

This UID links cards to their source note. Don't delete it — it's how True Recall tracks which cards belong to which note.

:::tip[Clean notes after collecting]
If you prefer notes without card syntax cluttering the page, enable `Settings → General → "Remove flashcard content after collecting"`. The blocks disappear from the note; the cards remain in the database.
:::

## What to Read Next

- [Note Types](/creation/note-types/) — understand Basic, Cloze, Image Occlusion, and when to use each
- [Cloze Deletions](/creation/cloze-deletions/) — fill-in-the-blank syntax with `{{c1::text}}`
- [Image Occlusion](/creation/image-occlusion/) — create cards from images by hiding regions
- [Best Practices](/creation/best-practices/) — principles for writing cards that stick
