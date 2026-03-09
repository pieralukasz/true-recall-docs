---
title: Selection Toolbar
sidebar:
  order: 4
description: The most efficient way to create flashcards — select text and let AI generate cards instantly.
---

The **Selection Toolbar** is the most efficient way to create flashcards. Select text, click a button, and AI generates properly formatted cards from your content.

## How It Works

1. Select text in any note (minimum 3 characters)
2. A floating toolbar appears above your selection
3. Click a generation button
4. AI analyzes the text and creates flashcards in [block format](/creation/basic-cards/)
5. Cards appear in your note, ready to collect

## Toolbar Buttons

| Button | What It Does |
|--------|-------------|
| **Basic** | Generate Q&A flashcards from the selection |
| **Cloze** | Generate fill-in-the-blank cards |
| **Auto** | AI chooses the best format for each fact |
| **IO** | Create [image occlusion](/creation/image-occlusion/) card (appears when an image is in the selection) |
| **Edit** | Open the selection in the flashcard editor |
| **Quick+** | Instantly add as a basic flashcard (no AI) |

### AI Buttons (Basic, Cloze, Auto)

These buttons send your selected text to AI, which generates one or more flashcards in `#type/<slug>` block format. The generated cards are inserted into your note.

**Auto mode** is the best default — AI analyzes the content and picks the right format for each fact:
- Definitions and explanations → Basic cards
- Lists, sequences, and key terms → Cloze deletions
- Term-definition pairs → Reversed cards

### Quick+ (No AI)

For when your text is already in Q&A format. Select the text, click **Quick+**, and it's immediately created as a basic card — no AI processing needed.

### Image Occlusion

The **IO** button appears when your selection contains an image reference (`![[image.png]]` or `![alt](path)`). Click it to open the image occlusion editor.

## Enabling the Toolbar

Settings → AI → **Selection toolbar** (enabled by default)

AI generation buttons require an AI configuration — either an API key or a True Recall subscription.

## Other Creation Methods

The selection toolbar is the fastest approach, but there are two other ways to create flashcards:

### From Highlights

Select specific passages in your notes and use the toolbar to generate cards from just those highlights. This gives you precise control over which content becomes flashcards.

### From a Whole Note

Use the command palette (Cmd/Ctrl + P → "Generate flashcards from note") to generate cards from an entire note at once. Good for processing lecture notes or study material in bulk.

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
| **Model** | Which AI model to use (via OpenRouter or subscription) |
| **Language** | Output language (auto-detect or specific) |
| **Density** | How many cards to generate — Essential (~5-10/1000 words), Balanced (~15-25), or Comprehensive (~40-60) |
| **Custom prompts** | Override default generation instructions |

## Tips

### Select Meaningful Chunks

A good selection is 1-3 paragraphs covering a coherent topic. Too short (a single word) gives AI nothing to work with. Too long (an entire chapter) produces unfocused cards.

### Use Auto for Mixed Content

When text contains both definitions and factual statements, Auto mode picks the right format for each piece of information.

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
| Poor card quality | Try a different model, or adjust density settings |
