---
title: "AI Settings"
sidebar:
  order: 3
description: "Configure AI features including subscription, API keys, models, and custom prompts."
---

:::caution[My Notes]
:::

AI-powered card generation is what makes **True Recall** fast — select text, click a button, get flashcards. Configure AI features in `Settings → True Recall → AI`.

For how AI generation works in practice, see [Selection Toolbar](/views/selection-toolbar/).

## OpenRouter API Key

Direct API access for AI features (card generation, type-in grading, image occlusion detection).

**Setup:** Create an account at [openrouter.ai](https://openrouter.ai) → Keys → Create new key → paste here.

## AI Prompts

Customize system prompts for AI-powered features:

| Prompt | Controls |
|--------|----------|
| **Type-in Grading Prompt** | AI answer grading during [type-in mode](/review/type-in-mode/) |
| **Image Occlusion Detection Prompt** | AI region detection in images |

### Available Variables (Grading Prompt)

- `{{correct}}` — Correct answer
- `{{student}}` — Student's answer

## Flashcard Generation

Settings that control how AI generates flashcards:

| Setting | Description |
|---------|-------------|
| **Generation language** | Target language for generated cards. Default: **Auto** (detects from input content). You can force a specific language. |
| **Note generation density** | How many cards to generate from a whole note — Sparse, Balanced, or Dense |
| **Selection toolbar** | Show or hide the floating [Selection Toolbar](/views/selection-toolbar/) when text is selected. Default: **On** |

### Generation Prompt

A single customizable prompt controls how AI generates flashcards from your selections and notes. You can edit the prompt or reset it to the default.

The generation prompt is only visible when an AI key is configured.

## What to Read Next

- [Selection Toolbar](/views/selection-toolbar/) — how AI generation works in the editor
- [Creating Flashcards](/creation/creating-flashcards/) — all ways to create cards
- [Type-in Mode](/review/type-in-mode/) — AI-graded typed answers
