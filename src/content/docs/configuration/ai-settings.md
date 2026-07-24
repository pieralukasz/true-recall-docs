---
title: "AI Settings"
sidebar:
  order: 3
description: "Configure AI provider, subscription, API keys, and generation / grading settings."
---

:::caution[My Notes]
:::

AI-powered card generation is what makes **True Recall** fast — select text, click a button, get flashcards. Configure AI features in `Settings → True Recall → Plugins`, at the top of the Plugins tab.

For how AI generation works in practice, see [Selection Toolbar](/views/selection-toolbar/).

## AI Provider

Choose where AI requests are routed via the **AI Provider** dropdown. Available options:

| Provider | Description |
|----------|-------------|
| **True Recall Pro** (Pro) | Managed service with optimized prompts and model routing |
| **OpenRouter (BYOK)** | Bring your own OpenRouter key and pick a model |
| **LM Studio (BYOK / Local)** | Run models locally with auto-discovered model listing |
| **Custom Provider (BYOK / Self-hosted)** | Connect to Ollama, vLLM, or another OpenAI-compatible endpoint |

Only one provider can be active at a time. Each provider has its own configuration fields that appear when selected.

## True Recall Pro

The recommended way to use AI features. A subscription key gives you access to expertly tuned prompts and managed model routing with no setup.

**Setup:**
1. Visit [truerecall.app/login](https://truerecall.app/login) and sign in with your email
2. A free trial key is generated automatically on first visit to the [dashboard](https://truerecall.app/dashboard)
3. Copy the key and paste it into `Settings → True Recall → Plugins → Pro Key`
4. Upgrade to Pro ($4/mo) from the dashboard when ready — your key stays the same

**Plans:**

| Plan | Budget | Reset |
|------|--------|-------|
| Free Trial | ~100 cards (one-time) | No reset |
| Pro | ~2,000-3,000 cards/month | Monthly |

Manage or cancel your subscription anytime from the [dashboard](https://truerecall.app/dashboard).

## OpenRouter (BYOK)

Direct API access for users who want full control. Bring your own key and prompts — no subscription needed.

**Setup:** Create an account at [openrouter.ai](https://openrouter.ai), create an API key, then paste it into the OpenRouter section in `Settings → True Recall → Plugins`.

When OpenRouter is selected, you can choose from a curated list of popular models or enter a custom model ID.

## LM Studio (Local)

Run AI models locally using [LM Studio](https://lmstudio.ai). Models are auto-discovered from your running LM Studio server.

**Setup:**
1. Download and install [LM Studio](https://lmstudio.ai)
2. Start the LM Studio local server (default: `http://localhost:1234/v1`)
3. In True Recall, select **LM Studio (Local)** from the AI Provider dropdown
4. The base URL should match your LM Studio server endpoint
5. Load a model in LM Studio — True Recall will auto-discover it in the **Model** dropdown

**Settings:**

| Setting | Description |
|---------|-------------|
| **Base URL** | LM Studio server endpoint. Default: `http://localhost:1234/v1` |
| **Model** | Select from models loaded in LM Studio (auto-discovered) or type manually |
| **API Key** | Optional — only needed if you enabled authentication in LM Studio |
| **Temperature** | Controls randomness (0–2). Default: 0.7 |

If LM Studio is not running, a fallback text input lets you type a model name manually. Use the **Refresh models** link to re-fetch the model list.

## Custom Provider (Self-hosted)

Connect to Ollama, LM Studio, vLLM, or any OpenAI-compatible endpoint. This gives you maximum flexibility over which model and server to use.

**Setup:**
1. Start your self-hosted model server (e.g. Ollama at `http://localhost:11434/v1`)
2. In True Recall, select **Custom Provider (Self-hosted)** from the AI Provider dropdown
3. Enter the base URL, model name, and optional API key

**Settings:**

| Setting | Description |
|---------|-------------|
| **Base URL** | OpenAI-compatible API endpoint. Default: `http://localhost:11434/v1` (Ollama) |
| **Model Name** | The model identifier (e.g. `llama3`, `mistral`, `codellama`) |
| **API Key** | Optional — many local setups don't need authentication |
| **Temperature** | Controls randomness (0–2). Default: 0.7 |

## Grading and Detection Prompts

A couple of AI-powered features have their own prompts in their plugin settings:

| Prompt | Controls |
|--------|----------|
| **Type-in grading prompt** | AI answer grading during [Type-in Mode](/review/type-in-mode/) |
| **AI detection prompt** | AI region detection in [Image Occlusion](/creation/image-occlusion/) |

## AI Assistant Settings

The [**AI Assistant**](/plugins/ai-assistant/) has its own settings panel at `Settings → True Recall → Plugins → AI Assistant`:

| Setting | Controls |
|---------|----------|
| **Assistant model** | Model used for research tasks. Leave empty to use your default AI model. |
| **Web search** | Let the model search the web via OpenRouter (extra cost per search). |
| **Max sources** | Maximum web sources/citations the assistant may collect per task. Set to `0` to disable source fetching. |
| **Global instructions** | Text appended to every task's prompt — your style, language, and tone. |
| **Max agent iterations** | Upper bound on tool-calling rounds per task. |

The assistant adds an **Ask AI** button to the [Selection Toolbar](/views/selection-toolbar/) and an **Open AI assistant inbox** command to the Command Palette. See [AI Assistant](/plugins/ai-assistant/) for the full workflow.

## Flashcard Generation

Flashcard generation runs through the [**AI Assistant**](/plugins/ai-assistant/) (the *generate-cards* workflow). Each generation flow still uses a **[generation preset](/plugins/generation-presets/)** — a template that binds a prompt to a note type, with opt-in source-note and related-card context — now surfaced as a chip in the Ask AI composer.

Generation language is configured per preset:

| Setting | Description |
|---------|-------------|
| **Output language** | Target language for generated cards. Default: **Auto** (detects from input content). You can force a specific language per preset. |

For preset configuration (prompt, note type binding, language, and context flags), see [Generation Presets](/plugins/generation-presets/) for the full preset reference.

:::note[Where did the old generation prompt go?]
Pre-1.7 versions had a single "Generation Prompt" in AI settings. In 1.7.0 that was replaced by the preset system — every generation flow now binds to a preset instead of a global prompt. Your old prompt is migrated into a preset automatically.
:::

:::note[TTS and image post-processing were removed in 1.8]
Earlier versions let presets configure text-to-speech and image generation. Both pipelines were removed in 1.8 — generation focuses on text only. Old audio and image settings are removed automatically during migration.
:::

## Per-Plugin LM Studio Models

When the active provider is **LM Studio**, AI Flashcard Generation and Card Polish can each use a different model than the global LM Studio selection — useful when one task wants speed (a small model for polish) and the other wants quality (a larger model for generation).

| Plugin | Where to configure |
|--------|-------------------|
| AI Flashcard Generation | `Settings → True Recall → Plugins → AI Flashcard Generation → LM Studio model` |
| Card Polish | `Settings → True Recall → Plugins → Card Polish → LM Studio model` |

Each plugin falls back to the global LM Studio model when no per-plugin override is set.

## What to Read Next

- [AI Assistant](/plugins/ai-assistant/) — the unified draft-and-approve AI workflow
- [Generation Presets](/plugins/generation-presets/) — full preset reference
- [Selection Toolbar](/views/selection-toolbar/) — how AI generation is triggered in the editor
- [Creating Flashcards](/creation/creating-flashcards/) — all ways to create cards
- [Type-in Mode](/review/type-in-mode/) — AI-graded typed answers
