---
title: Card Polish
sidebar:
  label: "Card Polish"
  order: 2
description: AI-powered card improvement during review and inside the Add Flashcard modal. Fix formatting, simplify wording, or run custom instructions with per-preset hotkeys.
---

:::caution[My Notes]
:::

**Card Polish** is a plugin that rewrites flashcards on demand using AI. You can run it mid-review (from the review interface) or while drafting cards in the Add Flashcard modal. Each preset captures a specific instruction — "simplify", "tighten wording", "fix formatting", or anything custom — and can auto-apply the result or show a preview first.

**Tier:** BYOK — works with a Pro key (LiteLLM-backed) or any OpenRouter BYOK key.

Enable it in `Settings → True Recall → Plugins → Card Polish`.

## How to Polish a Card

### During Review

1. Start a review session (see [Review Interface](/review/review-interface/))
2. Click the **wand** button in the review toolbar
3. Pick a preset from the popover menu (or use the preset's configured hotkey)
4. If the preset uses **auto-apply**, the card is rewritten in place and a **"AI changes applied"** notice appears with an undo shortcut. If the preset uses **preview**, a modal opens showing before / after and lets you accept or retry.

### In the Add Flashcard Modal

1. Open the Add Flashcard modal (e.g. from the Flashcard Panel's **+** button)
2. Fill in whatever you have so far
3. Click the **wand** button in the modal header
4. Pick a preset. Card Polish fills in missing fields or rewrites existing ones per the preset's instruction.

## Presets

Card Polish ships with defaults and you can add your own. Each preset captures:

| Field | What it controls |
|-------|------------------|
| **Name** | Display name in the popover menu |
| **Prompt** | The instruction sent to AI (e.g. "Simplify the question and keep the answer short") |
| **Apply mode** | `auto` (rewrite in place) or `preview` (show modal first) |
| **Hotkey** | Optional keyboard shortcut — scoped to the Review view only |
| **Context** | Opt-in flags to include the source note and related cards in the prompt |
| **Requires Pro** | Restrict this preset to Pro users only (routes through LiteLLM) |

Manage presets in the Card Polish plugin settings panel (`Settings → True Recall → Plugins → Card Polish`).

## Preview Modal

Preview mode opens a modal with the **original card** on the left and the **polished card** on the right, side by side. You can:

- **Apply** — replace the card with the polished version
- **Retry** — re-run the same preset (useful if AI output needs another pass)
- **Cancel** — close without changes
- **Dismiss** with Esc or by clicking outside

The modal uses view transitions so switching between original and polished feels instant.

## Context Flags

If a preset opts in to context, the AI receives extra information with every call:

- **Source note** — the body of the card's source note, useful when the preset needs to rephrase in context
- **Related cards** — other cards from the same note, so the preset avoids contradicting or duplicating sibling cards

Enable these per-preset in the preset editor. More context uses more tokens, so only enable what the preset actually needs.

## Hotkeys (Review Only)

Each preset can declare a hotkey that's active ONLY while the Review view is focused. Hotkeys are registered with Obsidian's hotkey system, so you'll also find them in `Settings → Hotkeys` if you need to remap or disable individually.

## Error Handling

If AI fails to produce usable output, Card Polish surfaces a user-visible notice:

- **Parse failure** — "Card Polish: couldn't parse AI response." The plugin is tolerant of JSON embedded in prose or in ``` ```json ... ``` ``` code fences, so parse failures are rare
- **Abort** — canceling mid-stream (e.g. via modal dismiss) cleanly aborts the request
- **Pro required** — if the preset is Pro-only but no Pro key is configured, the runner returns a notice and stops

Audio-related errors (from TTS post-processing) are logged separately without interrupting the polish flow.

## Pro Routing

Card Polish routes through `resolveAIClientConfig`, which prefers the Pro (LiteLLM) endpoint when a Pro key is present and falls back to OpenRouter BYOK otherwise. You'll see a **PRO** badge on built-in Pro-only presets.

## What to Read Next

- [Plugin Overview](/plugins/overview/) — the broader plugin system
- [AI Flashcard Generation](/plugins/ai-flashcard-generation/) — generate new cards (distinct from polishing existing ones)
- [Review Interface](/review/review-interface/) — where the wand button lives mid-review
- [AI Settings](/configuration/ai-settings/) — configure Pro or OpenRouter keys
