---
title: Selection Toolbar
sidebar:
  label: "Selection Toolbar"
  order: 2
description: A floating toolbar that appears when you select text — generate flashcards with AI, highlight, copy, or open the Flashcard Editor.
---

:::caution[My Notes]
:::

The **Selection Toolbar** is a floating toolbar that appears above any text selection in your notes. Select text, click a button, and AI generates properly formatted cards from your content.

## How It Works

1. Select text in any note (minimum 3 characters)
2. A floating toolbar appears above your selection
3. Click a generation button
4. AI analyzes the text and creates flashcards in [block format](/creation/creating-flashcards/#block-format)
5. Cards appear in your note, ready to collect

<!-- TODO PHOTO -->

## Workflow Example

Here's the full flow for a biology lecture note:

1. You're reading your note on cellular respiration
2. Select a paragraph: *"The mitochondria produces ATP through a process called oxidative phosphorylation..."*
3. The toolbar floats above the selection
4. Click **Flashcards** — AI reads the passage and generates cards: Q&A about ATP production, cloze about oxidative phosphorylation
5. The cards are inserted into your note as block format text
6. The **Flashcard Panel** shows a pulsing **Collect** button — click it to add the cards to the database
7. The cards are now scheduled for review

Total time: about 10 seconds.

## Toolbar Buttons

| Button | What It Does |
|--------|-------------|
| **Flashcards** | Generate flashcard(s) with AI — the AI decides the best format for each fact |
| **IO** | Create [image occlusion](/creation/image-occlusion/) card (appears when an image is in the selection) |
| **Edit** | Open the selection in the [Flashcard Editor](/views/flashcard-editor/) |
| **Quick+** | Instantly add as a basic flashcard (no AI) |
| **Highlight** | Wrap selection with `==highlight==` syntax |
| **Copy** | Copy selection to clipboard |

<!-- TODO PHOTO -->

### Flashcards (AI Generation)

The **Flashcards** button sends your selected text to AI, which generates one or more flashcards in `#type/<slug>` block format. The generated cards are inserted into your note. AI analyzes the content and picks the right format for each fact:
- Definitions and explanations → Basic cards
- Lists, sequences, and key terms → Cloze deletions
- Term-definition pairs → Reversed cards

### Quick+ (No AI)

For when your text is already in Q&A format. Select the text, click **Quick+**, and it's immediately created as a basic card — no AI processing needed.

### Image Occlusion

The **IO** button appears when your selection contains an image reference (`![[image.png]]` or `![alt](path)`). Click it to open the image occlusion editor.

### Highlight

Wraps the selected text with `==highlight==` Markdown syntax. Useful for marking passages you want to generate cards from later — you can generate cards from all highlights in a note via the [Flashcard Panel](/views/flashcard-panel/) menu → "Generate from highlights".

### Copy

Copies the selected text to the clipboard. The button briefly changes to "Copied!" to confirm.

## Enabling the Toolbar

Settings → AI → **Selection toolbar** (enabled by default)

AI generation buttons require an AI configuration — either an API key or a [True Recall subscription](/subscription/).

## Other Creation Methods

Besides the Selection Toolbar, you can create flashcards by:

- **[Flashcard Editor](/views/flashcard-editor/)** — fill in fields manually, cards go straight to the database
- **[Block format](/creation/creating-flashcards/#block-format)** — write `#type/basic` blocks directly in your notes, then collect

### From a Whole Note

Use the command palette (Cmd/Ctrl + P → "Generate flashcards from note") to generate cards from an entire note at once.

:::note[Least personalized method]
Whole-note generation is the least optimal way to create personalized flashcards — the AI decides what matters, not you. Use it when a note is short and you believe **everything** in it is worth remembering.

For the most accurate results, **generate from selections** instead. Highlighting specific passages lets you control exactly what becomes a card, and the output is noticeably more precise.
:::


## What AI Generates

AI creates cards in the standard block format:

```markdown
#type/basic
Front: What is the primary function of mitochondria?
Back: ATP production through cellular respiration, providing energy for cell processes.
<!-- source: The mitochondria produces ATP through cellular respiration -->
---

#type/cloze
Text: The {{c1::mitochondria}} is the {{c2::powerhouse}} of the cell.
Extra: Cellular biology
<!-- source: The mitochondria is the powerhouse of the cell -->
---
```

Each generated card includes:
- Proper `#type/<slug>` tag
- Field names matching the note type (Front/Back for basic, Text/Extra for cloze)
- A `<!-- source: -->` comment linking back to the exact text
- `---` separator

## Generation Settings

Configure AI behavior in Settings → AI:

| Setting | Description |
|---------|-------------|
| **Language** | Output language (auto-detect or specific) |

### Custom Prompt

Override how AI generates cards in **Settings → AI → Generation Prompt**. There is a single generation prompt that controls all card generation. You can edit it or reset to default.

See [AI Settings](/configuration/ai-settings/) for full details on prompt customization and available variables.

## Tips

### Select Meaningful Chunks

A good selection is 1-3 paragraphs covering a coherent topic. Too short (a single word) gives AI nothing to work with. Too long (an entire chapter) produces unfocused cards.

### Edit After Generation

Generated cards are a starting point. Click any generated card in the Panel to edit before collecting — tweak questions, simplify answers, remove redundancy.

### Batch Generation

Select multiple paragraphs at once. AI generates multiple cards covering different facts from the selection.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Toolbar not appearing | Check Settings → AI → Selection toolbar is enabled |
| AI buttons grayed out | Configure an API key or subscription in Settings → AI |
| Generation fails | Check API key validity and network connection |
| Poor card quality | Try a different model or adjust temperature in Settings → AI |
