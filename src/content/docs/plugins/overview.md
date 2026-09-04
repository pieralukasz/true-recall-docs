---
title: Features Overview
sidebar:
  label: "Overview"
  order: 1
description: "How True Recall's Features tab works: access levels (Free / BYOK / Pro), the AI provider card, and the five optional feature toggles."
---

:::caution[My Notes]
:::

**True Recall** groups its optional surfaces in `Settings → True Recall → Features`. The tab has three cards, top to bottom: **Access levels**, **AI provider**, and **Features**. Turning off features you don't use keeps your workflow focused and your UI uncluttered.

## Access Levels

The **Access levels** card shows the three tiers and marks the one you are on with a **Current** badge. Pro includes BYOK and Free; with BYOK, model choice and billing stay with your provider.

| Level | Subtitle | What it includes |
|-------|----------|------------------|
| **Free** | Local learning tools | Review, FSRS, dashboards and Quick Actions, no AI required |
| **BYOK / Local** | Use your own model | Everything in Free, plus AI Workspace with OpenRouter, LM Studio or a custom provider |
| **True Recall Pro** | Managed AI and advanced review tools | Everything in BYOK, plus managed AI, included budget, Image Occlusion and typed-answer grading |

Your level is derived from the AI provider card: a Pro key puts you on Pro, any other AI key (OpenRouter, LM Studio, Custom) puts you on BYOK, and no key means Free. When you are not on Pro, the Pro row shows a **View plans** link.

## AI Provider

The **AI provider** card is where you pick True Recall Pro, OpenRouter, LM Studio or a custom endpoint and enter keys, models and the grading model for typed answers. See [AI Settings](/configuration/ai-settings/) for every field.

## Features

The **Features** card lists optional True Recall surfaces as accordion rows, sorted Free first. Each row shows:

- **Icon and name**
- A **tier badge** (FREE / BYOK / PRO)
- A **toggle** when the feature is available to you, or an **Upgrade** link when it is not
- On expand: the description, a **features** list, a locked notice ("Add an AI provider to enable this feature." or "Included with True Recall Pro.") when applicable, and the feature's own settings panel when it is available

Toggles take effect immediately. You don't need to reload Obsidian, and you can expand a row to read what it does before turning it on.

| Feature | Tier | What it does |
|---------|------|--------------|
| [**Quick Actions Toolbar**](/views/selection-toolbar/) | Free | Floating toolbar above selected text or clicked images: flashcard creation, AI generation, image occlusion. Configurable Editor, Global and Image toolbars |
| **Link Progress Indicators** | Free | Status donuts next to `[[wikilinks]]` in the editor, text counts in reading mode, note stats tooltip on hover |
| **Embedded Dashboards** | Free | Embed True Recall dashboards in notes as codeblocks (global counts, analytics, projects, FSRS forecasts, per-note health) |
| **Status Bar Summary** | Free | Due / new / learning counts in Obsidian's status bar; click to open the dashboard |
| [**AI Workspace**](/plugins/ai-assistant/) | BYOK | One workspace for research, generating new flashcards and improving existing cards, with a shared task queue and AI Inbox |

The card's own description says it best: review modes and data tools live in their relevant settings sections, not here.

## Features Configured Elsewhere

Four capabilities used to be standalone plugin rows. They still exist, but each is configured inside its owner:

| Capability | Tier | Where to find it |
|------------|------|------------------|
| [**Card Polish**](/plugins/card-polish/) | BYOK | `Features → "AI Workspace" → "Improve cards"`. Presets run in the AI workspace (✨ in review, the Flashcard Panel wand, or the Card Polish tab), so AI Workspace must be enabled |
| [**Flashcard Generator**](/plugins/ai-flashcard-generation/) | BYOK | `Features → "AI Workspace" → "Generate cards"`, see [Generation Presets](/plugins/generation-presets/) |
| [**Typed Answers**](/review/type-in-mode/) | Pro | `General → "Review interface" → "Typed answers"`; press `T` during review to toggle |
| [**Image Occlusion**](/creation/image-occlusion/) | Pro | `General → "Image occlusion" → "Creation tools"` plus the optional **AI detection prompt** |

:::note[Tier summary]
Free features work without any AI key. BYOK features work when you bring your own OpenRouter key, run LM Studio, use a custom provider, or have a Pro key. Pro features require a True Recall Pro key.
:::

## Toolbar Button Gating

When a feature owns a toolbar button, the button only appears if the owning feature is enabled AND you meet its tier. The **Ask AI** button belongs to AI Workspace and the **Image Occlusion** button belongs to Image Occlusion; disable either feature and its button disappears from every toolbar.

## What to Read Next

- [AI Workspace](/plugins/ai-assistant/): the unified AI workflow with threads and the AI Inbox
- [Generation Presets](/plugins/generation-presets/): how presets work and how to build your own
- [AI Settings](/configuration/ai-settings/): configure the AI provider (Pro, OpenRouter, LM Studio, Custom)
- [Editor Integration](/configuration/editor-integration/): the four free editor features in detail
- [What Pro Includes](/getting-started/what-pro-includes/): exactly what a Pro key unlocks, based on the plugin's own gating
