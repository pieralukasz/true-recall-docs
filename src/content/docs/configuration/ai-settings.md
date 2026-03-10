---
title: "AI Settings"
sidebar:
  order: 3
description: "Configure AI features including subscription, API keys, models, and custom prompts."
---

:::caution[My Notes]

- nie ma modeli do wyboru, jest tylko gemini flash ukryty, moze kiedys beda do wyboruy ale teraz nie ma
- napisac, ze planuje dodac jeszcze modele lokalne
  :::

AI-powered card generation is what makes **True Recall** fast — select text, click a button, get flashcards. Configure AI features in `Settings → True Recall → AI`.

For how AI generation works in practice, see [Selection Toolbar](/views/selection-toolbar/).

## True Recall AI Subscription

Enter your subscription key (format: `tr-xxxxxxxxxxxx`). After entering:

- Shows subscription status and tier (Basic, Pro, etc.)
- Approximate generations remaining
- Renewal date

**Benefits:** No API configuration needed, pre-optimized prompts, usage tracking, priority support.

## OpenRouter API Key

Direct API access as an alternative or fallback to the subscription.

**When to use:**

- As fallback when subscription is exhausted
- For access to specific models
- For pay-per-use pricing

**Setup:** Create an account at [openrouter.ai](https://openrouter.ai) → Keys → Create new key → paste here.

## Generation Language

Target language for AI-generated cards. Default: **Auto** (detects from input content). You can force a specific language like English or Polish.

## Selection Toolbar Toggle

Show or hide the floating toolbar when text is selected in the editor. Default: **On**.

See [Selection Toolbar](/views/selection-toolbar/) for toolbar buttons and workflow.

## Custom Prompts

Customize the system prompts that control how AI generates cards. Each card type has its own prompt:

| Prompt | Controls |
|--------|----------|
| **Basic Prompt** | Q&A card generation |
| **Cloze Prompt** | Cloze deletion generation |
| **Reversed Prompt** | Reversed card generation |
| **Auto Prompt** | Auto-detection of best card type |
| **Type-in Grading Prompt** | AI answer grading during [type-in mode](/review/type-in-mode/) |
| **Image Occlusion Detection Prompt** | AI region detection in images |

### Available Variables

- `{{content}}` — Selected text (generation prompts)
- `{{language}}` — Target language (generation prompts)
- `{{correct}}` — Correct answer (grading prompt)
- `{{student}}` — Student's answer (grading prompt)

### Prompt Tips

Be specific about what you want: number of cards, difficulty level, language style. Set limits to avoid over-generation. Define format preferences (e.g., "use basic format for definitions, cloze for processes").

## What to Read Next

- [Selection Toolbar](/views/selection-toolbar/) — how AI generation works in the editor
- [Creating Flashcards](/creation/creating-flashcards/) — all ways to create cards
- [Type-in Mode](/review/type-in-mode/) — AI-graded typed answers
