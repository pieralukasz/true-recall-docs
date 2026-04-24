---
title: General Settings
sidebar:
  order: 1
description: Configure True Recall's review interface, editor integration, day boundary, and collection behavior.
---

:::caution[My Notes]
:::

**True Recall's** general settings control the review experience, editor features, and when your study day rolls over. Configure in `Settings → True Recall → General`.

## True Recall Pro

Enter your Pro key to unlock premium features. Get your key from [truerecall.app/dashboard](https://truerecall.app/dashboard).

| Setting | Description |
|---------|-------------|
| **Pro Key** | Your True Recall Pro license key. Shows activation status after entering. |

## Review Interface

| Setting | Options | Description |
|---------|---------|-------------|
| **Review mode** | Fullscreen / Panel | Fullscreen takes over the content area; Panel opens alongside your notes |
| **Show review header** | On / Off | Progress counts and close button during review |
| **Show header stats** | On / Off | Badge counts (New, Learn, Due) in review header |
| **Show next review time** | On / Off | Predicted intervals ("8d", "21d") on rating buttons |
| **Continuous custom reviews** | On / Off | Show "Next Session" button after finishing a custom session |
| **Show frontmatter in note review** | On / Off | Display YAML frontmatter when reviewing whole notes (see [Note Review](/review/review-interface/#note-review)) |
| **Ignore daily limits for note study** | On / Off | When studying a specific note, bypass the preset's daily new/review limits |
| **Default type-in mode** | Off / Diff / AI | Type-in mode for new review sessions |

:::note
Daily limits are configured **per preset**, not here. Each [FSRS preset](/scheduling/presets/) has its own new cards/day and reviews/day.
:::

## Editor Integration

| Setting | Options | Description |
|---------|---------|-------------|
| **Show quick review in panel** | On / Off | Quick-review section at top of [Flashcard Panel](/views/flashcard-panel/) |

Most editor integrations are now plugins (see [Plugin Overview](/plugins/overview/)) — toggle them in `Settings → True Recall → Plugins`:

- **Link Status Indicators** — inline flashcard counts next to `[[wiki links]]`
- **Status Bar Widget** — global card counts in the bottom status bar
- **Dashboard Codeblocks** / **Gamification Widgets** — embed dashboards in your notes

For details on what each plugin does and how to configure it, see [Editor Integration](/configuration/editor-integration/).

## Day Boundary

**Next day starts at** — Hour when a new "day" begins (0–23). Default: **4 AM** (same as Anki).

This means a 2 AM review counts as "today," not "tomorrow." Useful if you study late at night.

## Flashcard Collection

| Setting | Options | Description |
|---------|---------|-------------|
| **Remove content after collecting** | On / Off | Remove flashcard block format syntax from note after collection |

See [The Collection Step](/creation/creating-flashcards/#the-collection-step) for how collection works.

## Selection Toolbar

The Selection Toolbar is now a [plugin](/plugins/overview/). Enable it and configure buttons in `Settings → True Recall → Plugins → Selection Toolbar`:

| Setting | Description |
|---------|-------------|
| **Enable plugin** | Show a floating toolbar when text is selected |
| **Editor toolbar buttons** | Choose which buttons appear in the editor toolbar, drag to reorder, add custom commands |
| **Global toolbar buttons** | Choose which buttons appear in the global toolbar (non-editor contexts) |

See [Selection Toolbar](/views/selection-toolbar/) for full details on buttons and customization.

## Review Keybindings

Customize the keyboard shortcuts for rating cards during review.

| Setting | Default | Description |
|---------|---------|-------------|
| **Reveal + Good** | `Space` | Shows answer when hidden, rates Good when visible |
| **Again** | `1` | Rate Again |
| **Hard** | `2` | Rate Hard |
| **Easy** | `4` | Rate Easy |

Click a key button, press the new key to reassign. Duplicates are prevented. See [Keyboard Shortcuts](/configuration/keyboard-shortcuts/#custom-review-keybindings) for details.

## Local API

The Local API starts an HTTP server on `127.0.0.1` so the True Recall CLI and other tools can interact with the plugin. It powers the [MCP Server](/reference/mcp-server/) and the [Claude Code Skill](/reference/claude-code-skill/).

| Setting | Description |
|---------|-------------|
| **Enable local API** | Start the HTTP server when True Recall loads |
| **Port** | Default `27182`. Change if the port conflicts. Restart Obsidian after changing. |
| **Claude Code Skill** | Link to download the CLI skill for Claude Code |

:::note
The API only listens on localhost — it is not accessible from other machines.
:::

## What to Read Next

- [Review Interface](/review/review-interface/) — the review experience these settings control
- [Keyboard Shortcuts](/configuration/keyboard-shortcuts/) — all shortcuts including custom review keybindings
- [Selection Toolbar](/views/selection-toolbar/) — configurable floating toolbar
- [Editor Integration](/configuration/editor-integration/) — link indicators, status bar, and codeblock widgets
- [FSRS Settings](/configuration/fsrs-settings/) — scheduling configuration per preset
- [Type-in Mode](/review/type-in-mode/) — how the type-in setting works during review
- [Claude Code Skill](/reference/claude-code-skill/) — control True Recall from Claude Code
- [MCP Server](/reference/mcp-server/) — connect AI assistants via the Local API
