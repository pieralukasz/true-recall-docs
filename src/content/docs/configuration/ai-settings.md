---
title: "AI Settings"
sidebar:
  order: 3
description: "Configure the AI provider (True Recall Pro, OpenRouter, LM Studio, Custom), API keys, models, the grading model for typed answers, and AI Workspace settings."
---

:::caution[My Notes]
:::

AI is what makes **True Recall** fast: select text, click a button, get flashcards. Every AI feature (the [AI Workspace](/plugins/ai-assistant/), the Flashcard Generator, Card Polish, typed-answer grading, image occlusion detection) routes through one provider, configured in the **AI provider** card of `Settings → True Recall → Features`, directly under the Access levels card.

For how AI generation works in practice, see [Quick Actions Toolbar](/views/selection-toolbar/).

## AI Provider

Choose where AI requests are routed with the **Provider** dropdown:

| Provider | Description |
|----------|-------------|
| **True Recall Pro (Recommended)** | Managed service: optimized prompts and model selection handled server-side, AI budget included with the subscription |
| **OpenRouter (BYOK)** | Bring your own OpenRouter key and pick a model; you pay OpenRouter per token |
| **LM Studio (Local)** | Run models locally; models are auto-discovered from your LM Studio server |
| **Custom Provider (Self-hosted)** | Connect to Ollama, LM Studio, vLLM, or any OpenAI-compatible endpoint |

Only one provider is active at a time, and each shows its own fields when selected. The provider also decides your access level: a Pro key unlocks Pro features, any other key puts you on BYOK, no key means Free. See [Features Overview](/plugins/overview/#access-levels).

## True Recall Pro

The recommended way to use AI features. A subscription key gives you expertly tuned prompts and managed model routing with no setup.

**Setup:**
1. Visit [truerecall.app/login](https://truerecall.app/login) and sign in with your email
2. A free trial key is generated automatically on first visit to the [dashboard](https://truerecall.app/dashboard)
3. Copy the key and paste it into `Settings → True Recall → Features → "AI provider" → "Pro Key"`
4. Upgrade to Pro ($4/mo) from the dashboard when ready. Your key stays the same

True Recall verifies the key as soon as you paste it and shows the result under the field: **Active** (AI routed via True Recall servers), **Invalid key**, or a connection error you can retry.

**Plans:**

| Plan | Budget | Reset |
|------|--------|-------|
| Free Trial | ~100 cards (one-time) | No reset |
| Pro | ~2,000-3,000 cards/month | Monthly |

Manage or cancel your subscription anytime from the [dashboard](https://truerecall.app/dashboard).

## OpenRouter (BYOK)

Direct API access for users who want full control. Bring your own key, no subscription needed.

**Setup:** Create an account at [openrouter.ai](https://openrouter.ai), create an API key, then paste it into the **OpenRouter API key** field.

| Setting | Description |
|---------|-------------|
| **OpenRouter API key** | Your own key |
| **Model** | Reasoning model used for flashcard generation. Pick from a curated list (Google, DeepSeek, Anthropic and OpenAI models) or choose **Custom...** and enter any OpenRouter model ID in **Custom Model ID**. Default: **Gemini 3.7 Flash** (`google/gemini-3.7-flash`, marked Recommended) |
| **Grading model** | Model used to grade typed answers during review. Default: **Same as main model**. Pick a stronger model here without changing the generation model |
| **Temperature** | Controls randomness (0-2). Uses the selected model's default until you move the slider; a **Reset to model default** link appears once you have |

## LM Studio (Local)

Run AI models locally using [LM Studio](https://lmstudio.ai). Models are auto-discovered from your running LM Studio server.

**Setup:**
1. Download and install [LM Studio](https://lmstudio.ai)
2. Start the LM Studio local server (default: `http://localhost:1234/v1`)
3. In True Recall, select **LM Studio (Local)** as the provider
4. Make sure **Base URL** matches your LM Studio server endpoint
5. Load a model in LM Studio. True Recall lists it in the **Default Model** dropdown

| Setting | Description |
|---------|-------------|
| **Base URL** | LM Studio server endpoint. Default: `http://localhost:1234/v1` |
| **Default Model** | Fallback model used when a feature-specific LM Studio model is not set. Select from the auto-discovered list; use **Refresh models** to re-fetch it |
| **Grading model** | Optional LM Studio model override for grading typed answers. Default: **Same as default model** |
| **API Key** | Optional, only needed if you enabled authentication in LM Studio |
| **Temperature** | Controls randomness (0-2). Default: 0.7 |

If LM Studio is not running, or no model is loaded, a fallback text input lets you type a model name manually.

## Custom Provider (Self-hosted)

Connect to Ollama, LM Studio, vLLM, or any OpenAI-compatible endpoint. This gives you maximum flexibility over which model and server to use.

**Setup:**
1. Start your self-hosted model server (e.g. Ollama at `http://localhost:11434/v1`)
2. In True Recall, select **Custom Provider (Self-hosted)** as the provider
3. Enter the base URL, model name, and optional API key

| Setting | Description |
|---------|-------------|
| **Base URL** | OpenAI-compatible API endpoint. Default: `http://localhost:11434/v1` (Ollama) |
| **Model Name** | The model identifier (e.g. `llama3`, `mistral`) |
| **API Key** | Optional, many local setups don't need authentication |
| **Temperature** | Controls randomness (0-2). Default: 0.7 |

## Grading Model for Typed Answers

Since 2.3.0, [Typed Answers](/review/type-in-mode/) grades typed answers with a teacher-style verdict produced by its own model. With OpenRouter or LM Studio as the provider you choose that model in the **Grading model** field above; with the True Recall Pro provider the grading model is managed server-side. Typed answers themselves are a Pro feature: the default mode is set in `Settings → True Recall → General → "Review interface" → "Typed answers"` and requires a Pro key.

The **AI detection prompt** for [Image Occlusion](/creation/image-occlusion/) lives in `Settings → True Recall → General → "Image occlusion"`, see [General Settings](/configuration/general/#image-occlusion).

## AI Workspace Settings

The [**AI Workspace**](/plugins/ai-assistant/) feature has its own settings panel inside its row in `Settings → True Recall → Features → "AI Workspace"`, split into three sections:

| Section | Controls |
|---------|----------|
| **Assistant** | **Assistant model** (leave empty to use the provider's main model), **Web search** (OpenRouter, extra cost per search), **Max sources** (set `0` to disable source fetching), **Global instructions** (appended to every task prompt), **Max agent iterations** |
| **Generate cards** | Generation presets, see [Generation Presets](/plugins/generation-presets/) |
| **Improve cards** | Card Polish presets and auto-apply switches, see [Card Polish](/plugins/card-polish/) |

The workspace adds an **Ask AI** button to the [Quick Actions Toolbar](/views/selection-toolbar/) and the **Open ask AI panel** and **Open AI assistant inbox** commands to the Command Palette.

## Flashcard Generation

Flashcard generation runs through the AI Workspace as the **Flashcard Generator**. Each generation flow uses a **[generation preset](/plugins/generation-presets/)**: a template that binds a prompt to a note type, with opt-in source-note and related-card context.

Generation language is configured per preset:

| Setting | Description |
|---------|-------------|
| **Output language** | Target language for generated cards. Default: **Auto** (detects from input content). You can force a specific language per preset |

:::note[Where did the old generation prompt go?]
Pre-1.7 versions had a single "Generation Prompt" in AI settings. In 1.7.0 that was replaced by the preset system: every generation flow binds to a preset instead of a global prompt. Your old prompt was migrated into a preset automatically.
:::

:::note[TTS and image post-processing were removed in 1.8]
Earlier versions let presets configure text-to-speech and image generation. Both pipelines were removed in 1.8, generation focuses on text only. Old audio and image settings are removed automatically during migration.
:::

## Per-Feature LM Studio Models

When the active provider is **LM Studio**, the Flashcard Generator and Card Polish can each use a different model than the **Default Model**, useful when one task wants speed (a small model for polish) and the other wants quality (a larger model for generation).

| Feature | Where to configure |
|---------|-------------------|
| Flashcard Generator | `Settings → True Recall → Features → "AI Workspace" → "Generate cards" → "LM Studio model"` |
| Card Polish | `Settings → True Recall → Features → "AI Workspace" → "Improve cards" → "LM Studio model"` |

Each falls back to the Default Model when no override is set.

## What to Read Next

- [AI Workspace](/plugins/ai-assistant/): the unified draft-and-approve AI workflow
- [Generation Presets](/plugins/generation-presets/): full preset reference
- [Features Overview](/plugins/overview/): access levels and the Features tab
- [Creating Flashcards](/creation/creating-flashcards/): all ways to create cards
- [Typed Answers](/review/type-in-mode/): AI-graded typed answers
- [What Pro Includes](/getting-started/what-pro-includes/): managed AI budget, the Pro prompt, and the two Pro-only features
