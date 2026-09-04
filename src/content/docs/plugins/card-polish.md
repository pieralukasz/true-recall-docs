---
title: Card Polish
sidebar:
  label: "Card Polish"
  order: 2
description: Card Polish presets now run inside the AI Workspace. This page explains where the feature lives and how to reach it from review and the Flashcard Panel.
---

:::caution[My Notes]
:::

:::note[Now part of the AI Workspace]
**Card Polish** is no longer a standalone plugin with its own menus. It is a preset family inside the **[AI Workspace](/plugins/ai-assistant/)**: presets that rewrite, complete, or split an existing flashcard. They run in the workspace's **Card Polish** mode, so the AI Workspace feature has to be enabled for ✨ and the polish buttons to appear.
:::

Polishing still works the same way (simplify, tighten wording, fix formatting, split into atomic cards, or run a custom instruction). You reach it from three places:

- **✨ in review** opens the workspace in Card Polish mode for the current card.
- **Polish Card (AI)**, the wand button on the card detail in the [Flashcard Panel](/views/flashcard-panel/). Select several cards and the selection menu offers **Polish with AI** to run one preset over the whole selection; bulk polish asks for confirmation before spending AI budget.
- The **Card Polish** tab of the Ask AI panel or popover, and the AI panel in the [Flashcard Editor](/views/flashcard-editor/) while drafting.

Pick a preset from the list (badges tell you whether it previews or auto-applies), or type what you want changed. Review the proposed rewrite and **Apply** or **Reject** it; deferred results wait in the [AI Inbox](/views/ai-inbox/).

## Presets

Manage presets in `Settings → True Recall → Features → "AI Workspace" → "Improve cards"`. Each preset has a name, a prompt, an **Enabled** toggle, optional source-note and related-card context, and two auto-apply switches: **Auto-apply edits to current card** and **Auto-apply new cards spawned by AI**. The section-level **Auto-apply custom prompts** toggle does the same for free-form instructions.

A preset switched to disabled stays editable in settings but disappears from every run surface (✨, the panel, the preset list) and its hotkey command stops firing. Each enabled preset is also exposed as a hotkey-bindable command named `Polish: <preset name>`, active in the review view.

When LM Studio is your provider, the same section has an **LM Studio model** field used only by card editing.

## What to Read Next

- [AI Workspace](/plugins/ai-assistant/): the unified draft-and-approve workflow
- [The Review Interface](/review/review-interface/): where you polish cards mid-review
- [Flashcard Panel](/views/flashcard-panel/): the wand button and bulk polish
- [Flashcard Editor](/views/flashcard-editor/): polish while drafting
