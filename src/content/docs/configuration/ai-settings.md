---
title: "AI Settings"
sidebar:
  order: 3
description: "Configure AI features including subscription, API keys, and shared generation / grading settings."
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
4. Upgrade to Pro ($4/mo) from the dashboard when ready — your key stays the same

When a subscription key is configured, it takes priority over an OpenRouter API key.

**Plans:**

| Plan | Budget | Reset |
|------|--------|-------|
| Free Trial | ~100 cards (one-time) | No reset |
| Pro | ~2,000-3,000 cards/month | Monthly |

Manage or cancel your subscription anytime from the [dashboard](https://truerecall.app/dashboard).

## OpenRouter API Key (BYOK)

Direct API access for users who want full control. Bring your own key and prompts — no subscription needed.

**Setup:** Create an account at [openrouter.ai](https://openrouter.ai) → Keys → Create new key → paste here.

## Grading and Detection Prompts

A couple of AI-powered features use standalone prompts that sit outside the preset system:

| Prompt | Controls |
|--------|----------|
| **Type-in Grading Prompt** | AI answer grading during [type-in mode](/review/type-in-mode/) |
| **Image Occlusion Detection Prompt** | AI region detection in images |

### Available Variables (Grading Prompt)

- `{{correct}}` — Correct answer
- `{{student}}` — Student's answer

## Flashcard Generation

Flashcard generation is handled by the [**AI Flashcard Generation**](/plugins/ai-flashcard-generation/) plugin. Each generation flow (selection toolbar, panel, CLI, MCP) runs through a **[generation preset](/plugins/generation-presets/)** — a template that binds a prompt to a note type, plus optional TTS and image post-processing.

Shared generation settings:

| Setting | Description |
|---------|-------------|
| **Generation language** | Target language for generated cards. Default: **Auto** (detects from input content). You can force a specific language. |

For **per-preset** configuration (prompt, note type binding, TTS voice, image generation, Pro gating), use the plugin's own settings panel at `Settings → True Recall → Plugins → AI Flashcard Generation`. See [Generation Presets](/plugins/generation-presets/) for the full preset reference.

:::note[Where did the old generation prompt go?]
Pre-1.7 versions had a single "Generation Prompt" in AI settings. In 1.7.0 that was replaced by the preset system — every generation flow now binds to a preset instead of a global prompt. Your old prompt is migrated into a preset automatically.
:::

## What to Read Next

- [AI Flashcard Generation](/plugins/ai-flashcard-generation/) — preset-driven card generation
- [Generation Presets](/plugins/generation-presets/) — full preset reference
- [Card Polish](/plugins/card-polish/) — AI card rewriting during review
- [Selection Toolbar](/views/selection-toolbar/) — how AI generation is triggered in the editor
- [Creating Flashcards](/creation/creating-flashcards/) — all ways to create cards
- [Type-in Mode](/review/type-in-mode/) — AI-graded typed answers
