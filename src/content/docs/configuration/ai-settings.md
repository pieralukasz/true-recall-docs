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

## Subscription Key (Pro)

The recommended way to use AI features. A subscription key gives you access to expertly tuned prompts and managed model routing with no setup.

**Setup:**
1. Visit [truerecall.app/login](https://truerecall.app/login) and sign in with your email
2. A free trial key is generated automatically on first visit to the [dashboard](https://truerecall.app/dashboard)
3. Copy the key and paste it into `Settings → True Recall → AI → Subscription Key`
4. Upgrade to Pro ($8/mo) from the dashboard when ready — your key stays the same

When a subscription key is configured, it takes priority over an OpenRouter API key.

**Plans:**

| Plan | Budget | Reset |
|------|--------|-------|
| Free Trial | ~350-700 cards (one-time) | No reset |
| Pro | ~5,000-7,000 cards/month | Monthly |

Manage or cancel your subscription anytime from the [dashboard](https://truerecall.app/dashboard).

## OpenRouter API Key (BYOK)

Direct API access for users who want full control. Bring your own key and prompts — no subscription needed.

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
| **Selection toolbar** | Show or hide the floating [Selection Toolbar](/views/selection-toolbar/) when text is selected. Default: **On** |

### Generation Prompt

A single customizable prompt controls how AI generates flashcards from your selections and notes. You can edit the prompt or reset it to the default.

The generation prompt is only visible when an AI key is configured.

## What to Read Next

- [Selection Toolbar](/views/selection-toolbar/) — how AI generation works in the editor
- [Creating Flashcards](/creation/creating-flashcards/) — all ways to create cards
- [Type-in Mode](/review/type-in-mode/) — AI-graded typed answers
