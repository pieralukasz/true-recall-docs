---
title: AI Workspace
sidebar:
  label: "AI Workspace"
  order: 2
description: Research, generate flashcards, and improve existing cards in one place. The AI Workspace runs every AI request as a thread you can apply, defer to the AI Inbox, or retry.
---

:::caution[My Notes]
:::

The **AI Workspace** is the single home for AI in True Recall. It replaced the older, separate flows (a standalone assistant, AI Flashcard Generation and Card Polish) with one workspace and a **draft-and-approve** rule: you ask, the workspace proposes drafts, and nothing touches your notes until you approve.

**Tier:** BYOK, so it works with any AI key (OpenRouter, LM Studio, Custom, or Pro). Enable it in `Settings → True Recall → Features → "AI Workspace"`.

<!-- TODO PHOTO -->

## Three Workflow Families

The workspace has three modes, each backed by a preset family. They share one task queue and one AI Inbox.

| Mode | What it does | Presets |
|------|--------------|---------|
| **Assistant** | Ask a question, research a topic, or describe a custom change in your own words | Your **Quick actions** |
| **Generator** | Turn the current note or selection into new cards | [Generation Presets](/plugins/generation-presets/) (the Flashcard Generator family) |
| **Card Polish** | Rewrite, complete, or restructure the current card | [Card Polish](/plugins/card-polish/) presets |

Generator mode is offered when there is selected text or a source note to work from; Card Polish mode when there is a card (or a draft card) in context. Assistant mode is always available.

## Threads

Every request runs inside a **thread**, a persistent conversation whose result is a working set of draft proposals. A thread is always in one of three states:

- **Active**: you're working in it right now.
- **Inbox**: you deferred it; it waits for you in the [AI Inbox](/views/ai-inbox/).
- **Archived**: it's settled (everything applied or rejected) and filed away.

Because threads run through a background task queue, a long request never blocks the rest of the app. You can keep reviewing while the workspace works.

## Entry Points

You can reach the workspace from wherever you already are:

- **Ask AI** button in the [Quick Actions Toolbar](/views/selection-toolbar/), which asks about the selected text.
- **Selection bubble in review**: select text inside a review card and choose Ask AI; the prompt anchors to your selection.
- **✨ in review** opens the workspace in Card Polish mode for the current card.
- **Polish Card (AI)** wand button on the card detail in the [Flashcard Panel](/views/flashcard-panel/), plus **Polish with AI** on a multi-card selection for bulk polish.
- **Ask AI panel**: a dockable sidebar view (command **Open ask AI panel**) whose subject follows what you are studying: the card under review, otherwise the open note. It holds still while you have draft text in the composer.
- **Editor panel**: an inline AI panel inside the [Flashcard Editor](/views/flashcard-editor/) and the quick note editor, including popout windows.
- **Panel AI strip**: when a note has pending drafts, the Flashcard Panel shows a one-line "N AI drafts for this note" strip that deep-links into the AI Inbox.

Where the workspace renders depends on why you opened it: a saved preset or a selection question floats as a **popover** next to its trigger, free-text writing or research opens the **docked** panel, and on mobile everything opens as a modal.

<!-- TODO PHOTO -->

## Fast Preset Surface

Running a saved instruction is one click. Fast surfaces open on a keyboard-navigable **preset list**; each preset carries a badge that tells you what happens when you pick it:

| Badge | Meaning |
|-------|---------|
| **Preview** | The result lands as a proposal you review first |
| **Apply edit** | Auto-apply is on: the edit to the current card lands immediately |
| **Apply new** | New cards spawned by the preset are created immediately |
| **Apply all** | Both of the above |

A custom-instruction field sits directly under the list for free-form requests. An auto-applied change keeps its thread as history; anything that conflicts falls back to the AI Inbox rather than being dropped.

## Proposals

The workspace never writes directly. Instead it emits **proposals** you review as editable draft cards. Depending on what you asked, a proposal can:

- **Create cards** on the current note
- **Update a card** or an in-progress draft
- **Append to a note** or **create a new note**
- **Insert a diagram** (Mermaid / SVG)
- **Attach images** (candidate images found for the card)

For each proposal you can edit the fields inline, then **Apply**, **Reject**, or **Apply all**. If a draft changed since the workspace last saw it, the conflict is flagged before applying.

You can also **Retry with feedback** to steer a new attempt, or **Undo AI** to roll back the last applied change.

## Web Sources

With **Web search** enabled in the Assistant settings, the model can search the web through OpenRouter (extra cost per search) and any citations appear as **Sources**. **Max sources** caps how many it may collect per task; set it to `0` to disable source fetching.

:::note[Knowledge Base retrieval was removed]
Until 2.0.0 the assistant could also pull "Vault evidence" from an indexed Knowledge Base. That subsystem was removed in 2.0.0 and will be rebuilt later. See [Knowledge Base](/configuration/knowledge-base/).
:::

## Settings

The AI Workspace accordion in `Settings → True Recall → Features` has three sections:

| Section | What it holds |
|---------|---------------|
| **Assistant** | **Assistant model**, **Web search**, **Max sources**, **Global instructions**, **Max agent iterations**, and your **Quick actions** |
| **Generate cards** | Generation presets and an optional per-family **LM Studio model**; see [Generation Presets](/plugins/generation-presets/) |
| **Improve cards** | Card Polish presets, **Auto-apply custom prompts**, and an optional **LM Studio model**; see [Card Polish](/plugins/card-polish/) |

**Quick actions** are one-tap instructions shown in the Assistant mode. Each also becomes a hotkey-bindable command named `Ask AI: <action name>`, active in the review view. Full field descriptions are in [AI Settings](/configuration/ai-settings/#ai-workspace-settings).

## Deferring to the Inbox

Close an unfinished thread and the workspace hands it off to the **[AI Inbox](/views/ai-inbox/)**, a single place to batch-review everything proposed but not yet applied. Threads that are fully settled archive automatically. Open the inbox any time with the **Open AI assistant inbox** command.

## What to Read Next

- [AI Inbox](/views/ai-inbox/): batch-review and approve deferred drafts
- [Generation Presets](/plugins/generation-presets/): build the presets behind Generator mode
- [Card Polish](/plugins/card-polish/): presets that improve existing cards
- [Creating Flashcards](/creation/creating-flashcards/): all the ways cards get made
- [AI Settings](/configuration/ai-settings/): configure your AI provider and workspace options
