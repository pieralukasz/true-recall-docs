---
title: What Pro Includes
sidebar:
  label: "What Pro Includes"
  order: 4
description: Exactly what a True Recall Pro key unlocks compared with the free plugin and bring-your-own-key AI, based on how the plugin gates each feature.
---

:::caution[My Notes]
Source of truth for this page: `isFeatureAvailable` in `packages/obsidian/src/plugin/plugin-utils.ts`, `resolveAIClientConfig` / `hasAIKey` in `packages/core/src/ai/config/ai-client-config.ts`, `resolveGenerationPresetForTier`, the `requiresPro` flag on presets, and the proxy repo (`litellm_config.yaml`, `custom_callbacks.py`, Supabase functions with `PRO_BUDGET` / `TRIAL_BUDGET`). Update this page whenever one of those changes.
:::

**True Recall** is a free plugin. Everything that makes it a spaced repetition system works without an account or an AI key. Pro is a paid key that adds managed AI and two Pro-only features. This page lists exactly what changes when you paste a Pro key, so you can decide whether you need it.

## The Three Access Levels

The plugin derives your level from the AI provider settings, not from a login:

| Level | How you get it | What it means |
|-------|----------------|---------------|
| **Free** | Install the plugin, add nothing | Every local learning tool. No AI. |
| **BYOK / Local** | Enter your own OpenRouter key, run LM Studio, or point at a custom OpenAI-compatible endpoint | Everything in Free, plus the AI Workspace. You pick the model and pay your provider directly. |
| **True Recall Pro** | Paste a Pro key from [truerecall.app/dashboard](https://www.truerecall.app/dashboard) | Everything in BYOK, plus managed AI with an included budget, Image Occlusion, and Typed Answers. |

A Pro key counts as an AI key, so Pro users get every BYOK feature without configuring a provider. The **Access levels** card in `Settings → True Recall → Features` shows which level you are on. See [Features](/plugins/overview/).

## What Is Free

None of the following checks for a key. This is the whole spaced repetition system:

- **Review and scheduling**: FSRS v6, presets, parameter optimization, load balancing, easy days, scheduled breaks, sibling dispersal, R-Mode, Custom Study, daily target
- **Card creation**: the Flashcard Editor, block format in notes, cloze deletions, custom note types, Import Studio, the Quick Actions Toolbar
- **Organization**: projects, folder includes, archiving, preset inheritance
- **Views**: Dashboard, Flashcard Panel, Card Browser, Statistics, FSRS Simulator, Embedded Dashboards, Status Bar Summary, Link Progress Indicators
- **Data**: backups, integrity check, device databases, Anki import and export, CSV export
- **Cloud Sync**: free with a True Recall account. It does not require Pro. See [Cloud Sync](/data/cloud-sync/)
- **Local API, CLI and MCP server**: the assistant integrations run against your local plugin

## What BYOK Adds

Any AI key (OpenRouter, LM Studio, custom endpoint, or Pro) unlocks the **AI Workspace** and its two workflow families:

- **Flashcard Generator**: generate cards from notes, selections and highlights with the built-in **Basic Flashcards** preset or your own presets
- **Card Polish**: rewrite, complete or split existing cards with presets, from the review ✨ action, the Flashcard Panel, or the Card Polish tab
- **Ask AI and the AI Inbox**: threads, drafts, apply / reject / retry

With BYOK you choose the model (default `google/gemini-3.7-flash` on OpenRouter), set temperatures, and pay your provider. See [AI Settings](/configuration/ai-settings/) and [AI Workspace](/plugins/ai-assistant/).

## What Pro Adds

These are the only places in the plugin that check specifically for a Pro key.

### 1. Managed AI with an included budget

With the provider set to **True Recall Pro**, every AI request goes to True Recall's servers instead of your own provider:

- **No API key, no model choice**. The plugin sends the model name `auto` and the server picks the model. Today that is Google Gemini 2.5 Flash through OpenRouter.
- **Server-side prompts**. For flashcard generation and typed-answer grading the server prepends its own tuned system prompts and temperature defaults (0.7 for generation, 0 for grading). They can be improved without a plugin update.
- **Included budget**. A Pro subscription provisions a key with a model-spend budget of $4.00 per 30 days, which the pricing page translates to roughly 2,000 to 3,000 generated flashcards per month. The free trial key has a one-time $0.25 budget, roughly 100 cards.

Pro AI covers the same workflows as BYOK: generation, Card Polish, Ask AI, typed-answer grading and image region detection.

### 2. The Pro generation prompt

The plugin ships two built-in generation presets. **Basic Flashcards** is available to everyone. **Basic Flashcards (Pro)** is flagged `requiresPro` and encodes the SuperMemo "20 rules" and Universe of Memory principles into a longer, stricter prompt.

When you have a Pro key, the plain **Generate** action silently runs the Pro preset instead of the basic one, so you do not need a second button. Without a Pro key the Pro preset shows a **PRO** badge in the Quick Actions Toolbar and refuses to run. See [Generation Presets](/plugins/generation-presets/).

### 3. Image Occlusion

Creating image occlusion cards is Pro-only. Without a Pro key the **Creation tools** toggle in `Settings → True Recall → General → "Image occlusion"` is disabled and reads "Image Occlusion creation tools are included with True Recall Pro."

- Drawing rectangles and ellipses, hide-one / hide-all modes, and editing existing occlusion cards all need Pro
- **AI region detection** inside the editor also needs Pro; it uses the managed vision model
- Existing image occlusion cards stay readable and reviewable at every level, including after a subscription ends

See [Image Occlusion](/creation/image-occlusion/).

### 4. Typed Answers

Typing your answer before revealing the card, and getting a teacher-style verdict from AI grading, is Pro-only. Without a Pro key the **Typed answers** setting in `Settings → True Recall → General → "Review interface"` is disabled and reads "AI semantic grading for typed answers is included with True Recall Pro." With Pro you choose **Off** or **AI grading** as the default and toggle it with `T` during review.

There is no non-AI typed-answer mode in the current plugin. See [Typed Answers](/review/type-in-mode/).

## What Pro Does Not Change

- **Scheduling quality**. FSRS, optimization and load balancing are identical at every level.
- **Cloud Sync**. Free with an account.
- **Card Polish presets**. All built-in polish presets are BYOK; none is Pro-only today.
- **Your data**. Everything stays in the SQLite database inside your vault. Pro only changes where AI requests are sent.

## Getting a Pro Key

1. Sign in at [truerecall.app/login](https://www.truerecall.app/login). New accounts receive a free trial key automatically.
2. Subscribe from the dashboard when the trial budget runs out.
3. Copy the key from the dashboard and paste it into `Settings → True Recall → Features → "AI provider"` with the provider set to **True Recall Pro (Recommended)**. The settings page verifies the key and shows "Active" when AI is routed through True Recall servers.

Current prices are on the [pricing page](/pricing/).

## What to Read Next

- [Features](/plugins/overview/): the Access levels card and every feature toggle
- [AI Settings](/configuration/ai-settings/): configure Pro, OpenRouter, LM Studio or a custom provider
- [Image Occlusion](/creation/image-occlusion/): the first Pro-only feature
- [Typed Answers](/review/type-in-mode/): the second Pro-only feature
- [Generation Presets](/plugins/generation-presets/): how the Pro prompt differs from the basic one
