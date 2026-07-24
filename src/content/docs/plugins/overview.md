---
title: Plugin Overview
sidebar:
  label: "Overview"
  order: 1
description: How True Recall's built-in plugin system works — tier-based gating, the Plugins tab, and per-plugin toggles.
---

:::caution[My Notes]
:::

**True Recall** ships as a modular plugin system. Each major feature is a separate plugin you can toggle on or off from `Settings → True Recall → Plugins`. Turning off plugins you don't use keeps your workflow focused and your UI uncluttered.

## The Plugins Tab

Open `Settings → True Recall → Plugins` to see every bundled plugin as an accordion row. Each row shows:

- **Icon, name, and short description**
- A **tier badge** (Free / BYOK / Pro) that indicates what's needed to activate it
- A **toggle** to enable or disable the plugin
- A **features** list and the plugin's own **settings panel** when expanded

Toggles take effect immediately — the plugin runs its `activate` hook when enabled and `deactivate` hook when disabled. You don't need to reload Obsidian.

You can expand any plugin's accordion to read its description and settings panel even when the plugin is disabled, so you can preview what you'd get before turning it on.

## Tier System

Every plugin declares a tier that determines when it can activate:

| Tier | Unlocks when… | Example plugins |
|------|----------------|-----------------|
| **Free** | Always | Selection Toolbar, Status Bar Widget, Dashboard Codeblocks, Link Status Indicators |
| **BYOK** | Any AI key present (OpenRouter BYOK, LM Studio, Custom, or Pro key) | AI Flashcard Generation, Card Polish |
| **Pro** | True Recall Pro key present | Type-in Mode, Image Occlusion, Knowledge Base, AI Anki Import |

Tiers form an inclusive ladder — a Pro user gets every BYOK and Free plugin; a BYOK user gets every Free plugin. See [AI Settings](/configuration/ai-settings/) for how to configure your key.

## Built-in Plugins

| Plugin | Tier | What it does |
|--------|------|--------------|
| [**Selection Toolbar**](/views/selection-toolbar/) | Free | Floating toolbar above text selections — generate cards, highlight, copy, quick-add, and more |
| **Status Bar Widget** | Free | Compact review-progress widget in the Obsidian status bar |
| **Dashboard Codeblocks** | Free | Embed True Recall dashboards in your notes as codeblocks |
| **Link Status Indicators** | Free | Donut charts and hover tooltips on `[[wikilinks]]` showing each note's card status |
| [**AI Assistant**](/plugins/ai-assistant/) | BYOK | Unified draft-and-approve AI — generate, edit, and polish cards and notes from one composer |
| [**AI Flashcard Generation**](/plugins/ai-flashcard-generation/) | BYOK | *Deprecated — unified into [AI Assistant](/plugins/ai-assistant/)* |
| [**Card Polish**](/plugins/card-polish/) | BYOK | *Deprecated — unified into [AI Assistant](/plugins/ai-assistant/)* |
| [**Type-in Mode**](/review/type-in-mode/) | Pro | Typed-answer reviews with AI or diff-based grading |
| [**Image Occlusion**](/creation/image-occlusion/) | Pro | Hide regions of images to test visual recall |
| [**Knowledge Base**](/configuration/knowledge-base/) | Pro | RAG-powered semantic search and chat across your vault |
| **AI Anki Import** | Pro | AI-assisted `.apkg` import with deck classification and field mapping |

:::note[Tier summary]
Free features work without any AI key. BYOK features work when you bring your own OpenRouter key, use LM Studio, use a custom provider, or have a Pro key. Pro features require a True Recall Pro key.
:::

## Plugin Settings Panels

Each plugin that has configurable options renders its own settings panel inside its accordion row — no other settings tab for plugin-specific options. This keeps plugin config next to the toggle, so you see exactly what changes when you enable or disable the plugin.

For example:

- **AI Assistant** renders its provider/behavior options; your generation and polish presets surface as chips in the Ask AI composer (see [Generation Presets](/plugins/generation-presets/))
- **Selection Toolbar** renders button configuration for the editor and global toolbars
- **Knowledge Base** renders indexing options (folders, daily notes, manual reindex)

## Toolbar Button Gating

When a plugin owns a toolbar button (like the Selection Toolbar's **Ask AI** button), the button only appears if the owning plugin is enabled AND the user meets its tier. If you disable the **AI Assistant** plugin, its buttons disappear from every toolbar.

## What to Read Next

- [AI Assistant](/plugins/ai-assistant/) — the unified draft-and-approve AI workflow
- [Generation Presets](/plugins/generation-presets/) — how presets work and how to build your own
- [AI Settings](/configuration/ai-settings/) — configure AI provider (Pro, OpenRouter, LM Studio, Custom)
