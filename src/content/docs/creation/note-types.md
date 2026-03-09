---
title: Default Note Types
sidebar:
  order: 2
description: "The four built-in note types: Basic, Basic (Reversed), Cloze, and Image Occlusion."
---

:::caution[My Notes]
:::

A **note type** is a template that defines what fields a flashcard has and how those fields become cards during review. Every flashcard belongs to one note type.

## One Note, Multiple Cards

A single block in your notes can generate more than one card:

```
#type/basic             →  1 card
#type/basic-reversed    →  2 cards (one in each direction)
#type/cloze (3 clozes)  →  3 cards (one per cloze number)
#type/image-occlusion   →  1 card per drawn region
```

The note type determines how many cards a block creates and what the review experience looks like.

## Built-in Note Types

### Basic

One question, one answer. The simplest type.

**Fields:** Front, Back

```markdown
#type/basic
Front: What does CPU stand for?
Back: Central Processing Unit
---
```

**Review:** You see the Front, recall the answer, then reveal the Back. One card per block.

**Best for:** Definitions, facts, concepts with a single correct answer, anything where direction matters (you always ask Front → Back).

---

### Basic (Reversed)

Same as Basic but generates two cards — one in each direction.

**Fields:** Front, Back

```markdown
#type/basic-reversed
Front: Photosynthesis
Back: The process by which plants convert sunlight into chemical energy
---
```

**Review:** Creates two cards:
- Card 1: "Photosynthesis" → reveal definition
- Card 2: Definition → recall "Photosynthesis"

Both cards are scheduled independently. Getting one right doesn't affect the other.

**Best for:** Vocabulary (word ↔ translation), capitals (country ↔ capital), abbreviations (acronym ↔ meaning).

:::tip
You can also create a reversed card from any existing Basic card — right-click the card in the [Flashcard Panel](/views/flashcard-panel/) and select **Make reversed**. To remove the reversed pair later, use **Remove reversed** from the same menu.
:::

---

### Cloze

Fill-in-the-blank cards. Each `{{c<number>::text}}` marker is a deletion. Each unique number generates one card.

**Fields:** Text, Extra (optional)

```markdown
#type/cloze
Text: The {{c1::heart}} pumps {{c2::blood}} through the body.
Extra: Cardiovascular system
---
```

**Review:** Creates 2 cards:
- Card 1: "The [___] pumps blood through the body." → heart
- Card 2: "The heart pumps [___] through the body." → blood

The Extra field appears on the answer side as additional context.

**Best for:** Lists, sequences, fill-in-the-blank, facts that make more sense in sentence context than as isolated Q&A.

:::caution[Author's note]
I personally don't use Cloze cards at all. In my experience, they don't add real value for meaningful learning. I'll explain my reasoning in more detail at [lucaspiera.com](https://lucaspiera.com). That said — the community asked for this note type, so here it is.
:::

---

### Image Occlusion

Cards created from images by hiding specific regions. Each region becomes one card.

**Fields:** Image, drawn regions

Created through the Image Occlusion editor — not written as plain text.

**Review:** You see the image with one region hidden. Recall what's under it, then reveal.

**Best for:** Anatomy diagrams, maps, labeled charts, any visual material where spatial position is part of what you're learning.

---

## Choosing the Right Type

| When you want to... | Use |
|---|---|
| Test one specific fact | Basic |
| Learn both directions (vocabulary, capitals) | Basic (Reversed) |
| Fill in blanks in a sentence | Cloze |
| Label parts of a diagram or image | Image Occlusion |

When in doubt, start with Basic. Cloze is worth learning once you've written a few hundred basic cards and notice which ones feel awkward to review.

## The `#type/<slug>` Tag

Each built-in type has a **slug** used in block format:

| Note type | Slug |
|-----------|------|
| Basic | `basic` |
| Basic (Reversed) | `basic-reversed` |
| Cloze | `cloze` |
| Image Occlusion | `image-occlusion` |

Custom types use the slug you define when creating them.

For custom note types — creating your own with additional fields, custom templates, and CSS — see [Custom Note Types](/creation/custom-note-types/).
