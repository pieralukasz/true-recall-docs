---
title: AI Flashcard Generation
description: Generate high-quality flashcards from your notes using AI
---

True Recall uses AI to automatically generate flashcards from your notes. This feature transforms any note into study-ready flashcards with minimal effort.

## How It Works

1. **Send your note content** to an AI model via OpenRouter
2. **AI analyzes** the content and identifies key concepts
3. **Flashcards are generated** with clear questions and answers
4. **You review and save** the cards you want to keep

## Available AI Models

True Recall supports 7 AI models through [OpenRouter](https://openrouter.ai):

| Model | Provider | Best For | Cost |
|-------|----------|----------|------|
| **Gemini 3 Flash** | Google | Default choice, fast & affordable | $ |
| **Gemini 2.5 Pro** | Google | Complex topics, deep reasoning | $$$ |
| **GPT-5.1** | OpenAI | Latest capabilities | $$$ |
| **GPT-4o** | OpenAI | Balanced speed & quality | $$ |
| **Claude Opus 4.5** | Anthropic | Nuanced content | $$$$ |
| **Claude Sonnet 4** | Anthropic | Fast with good quality | $$ |
| **Llama 4 Maverick** | Meta | Open-source option | $ |

## Generation Methods

### Floating Button

The easiest way to generate flashcards:

1. **Select text** in your note (minimum characters configurable in settings)
2. **Click the brain button** that appears near your selection
3. **Review generated cards** in the modal
4. **Save all** or select specific cards

### Command Palette

Generate flashcards for an entire note:

1. **Open the note** you want to create flashcards from
2. **Open Command Palette** (`Cmd/Ctrl+P`)
3. **Run** "True Recall: Generate flashcards for current note"
4. **Review and save** the generated cards

### Flashcard Panel

Access generation from the sidebar:

1. **Open the flashcard panel** (brain ribbon icon)
2. **Click "Generate"** button
3. **Optionally enter instructions** to guide the AI
4. **Review and save** cards

### During Review

Generate related cards while reviewing:

1. **During a review session**, press `G`
2. **Enter instructions** for what kind of card to generate
3. **Uses current card** as context for generation

## Custom Prompts

You can customize the AI prompt to generate specific types of flashcards:

1. **Go to Settings** → True Recall → AI
2. **Edit the custom prompt** field
3. **Use variables**:
   - `{content}` - The note content
   - `{title}` - The note title

### Example Custom Prompts

**For language learning:**
```
Create vocabulary flashcards from the following text.
Each card should have the word/phrase as the question
and the definition + example sentence as the answer.
```

**For technical content:**
```
Create flashcards that test understanding of key concepts.
Include:
- Definition cards
- Comparison cards (X vs Y)
- Application cards (when to use X)
```

**For exam preparation:**
```
Create exam-style questions based on this content.
Include a mix of:
- Factual recall questions
- Conceptual understanding questions
- Application/scenario questions
```

## Tips for Better Generation

### Note Quality Matters

The AI generates better flashcards from:
- **Well-structured notes** with clear headings
- **Concise content** without unnecessary filler
- **Defined terms** and explanations
- **Examples and applications**

### Review Before Saving

Always review generated flashcards:
- **Edit unclear questions** for precision
- **Simplify complex answers** for better recall
- **Delete redundant cards** that overlap
- **Merge related concepts** when appropriate

### Atomic Flashcards

The best flashcards follow the **atomic principle**:
- One concept per card
- Clear, unambiguous questions
- Concise, memorable answers

## Configuration

### Settings → True Recall → AI

| Setting | Description |
|---------|-------------|
| **API Key** | Your OpenRouter API key |
| **Model** | Default AI model for generation |
| **Custom Prompt** | Override the default generation prompt |

### Settings → True Recall → General

| Setting | Description |
|---------|-------------|
| **Floating Button** | Enable/disable the floating generation button |
| **Minimum Selection** | Minimum characters to show floating button |
| **Direct Generation** | Skip preview modal and save directly |

## Troubleshooting

### "Invalid API Key" Error
- Check that your API key is correct
- Ensure you have credits on OpenRouter
- Try generating with a different model

### Poor Quality Cards
- Use a more capable model (Gemini Pro, GPT-4o)
- Customize the prompt for your content type
- Ensure your notes are well-structured

### Cards Not Saving
- Check if the source note has a `flashcard_uid` in frontmatter
- If missing, run "Add flashcard UID to current note" command
