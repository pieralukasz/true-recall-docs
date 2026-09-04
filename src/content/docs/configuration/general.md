---
title: General Settings
sidebar:
  order: 1
description: Configure True Recall's appearance, dashboard header, review interface, review keybindings, image occlusion tools, and day boundary.
---

:::caution[My Notes]
:::

**True Recall's** general settings control how the plugin looks, how the review session behaves, and when your study day rolls over. Configure them in `Settings → True Recall → General`. The tab is organised into cards, top to bottom: Newsletter, Appearance, Dashboard, Review interface, Image occlusion, Day boundary, About, and Support.

## Appearance

| Setting | Options | Default | Description |
|---------|---------|---------|-------------|
| **Hide tab bar** | On / Off | Off | Hides the tab container at the top of the main window. Sidebar tabs stay visible. Bind the **Toggle tab bar** command to a hotkey to flip it quickly |

## Dashboard

| Setting | Options | Default | Description |
|---------|---------|---------|-------------|
| **Show dashboard header** | On / Off | On | Shows today's review summary and recently studied notes at the top of the [Dashboard](/views/dashboard/) |

## Review Interface

| Setting | Options | Default | Description |
|---------|---------|---------|-------------|
| **Review mode** | Fullscreen (main area) / Side panel | Fullscreen | Where the review session opens: the main content area, or a side panel next to your notes |
| **Show review header** | On / Off | On | Header with close button, stats and progress during review |
| **Show header stats** | On / Off | On | New / learning / due counters in the review header |
| **Show next review time** | On / Off | On | Predicted intervals ("8d", "21d") on the answer buttons |
| **Continuous custom reviews** | On / Off | On | Shows a **Next session** button after finishing a custom review session |
| **Card content width** | Narrow (~640px) / Default (~768px) / Wide (~1024px) / Full width | Default | Maximum width of card text in review (desktop only) |
| **Typed answers** | Off / AI grading | Off | Default mode for new review sessions. Press `T` during review to toggle it. Included with True Recall Pro; see [Typed Answers](/review/type-in-mode/) |
| **Show frontmatter in note review** | On / Off | Off | Display YAML frontmatter when reviewing whole notes (see [Note Review](/review/review-interface/#note-review)) |
| **Ignore daily limits for note study** | On / Off | On | When studying a specific note from the dashboard, show all its cards regardless of daily limits |

:::note
Daily limits are configured **per preset**, not here. Each [FSRS preset](/scheduling/presets/) has its own new cards/day and reviews/day. See [FSRS Settings](/configuration/fsrs-settings/).
:::

The model used for AI grading of typed answers is chosen in the AI provider card (**Grading model**), see [AI Settings](/configuration/ai-settings/).

### Review keybindings

At the bottom of the Review interface card you can reassign the keys used to rate cards.

| Setting | Default | Description |
|---------|---------|-------------|
| **Reveal / Good** | `Space` | Reveals the answer when hidden, rates Good when the answer is visible |
| **Again** | `1` | Rate Again (fail) |
| **Hard** | `2` | Rate Hard |
| **Easy** | `4` | Rate Easy |

Click a key button, then press the new key to reassign it. Duplicate keys are rejected with an error, and a **Reset to defaults** link appears once you have changed anything. Number keys `1`-`4` always work as rating shortcuts regardless of custom bindings. See [Keyboard Shortcuts](/configuration/keyboard-shortcuts/#custom-review-keybindings) for the full list of review keys.

## Image Occlusion

Visual flashcards that mask regions of diagrams, maps, and images. See [Image Occlusion](/creation/image-occlusion/).

| Setting | Description |
|---------|-------------|
| **Creation tools** | Shows Image Occlusion in commands and the Quick Actions Toolbar. Existing cards remain readable when this is off. Included with True Recall Pro |
| **AI detection prompt** | Optional custom prompt for automatic region detection. Leave empty to use the built-in prompt |

## Day Boundary

**Next day starts at**: the hour when a new "day" begins (0-23). Default: **4** (4:00 am, same as Anki).

This means a 2 AM review counts as "today," not "tomorrow." Useful if you study late at night.

## About

| Item | Action |
|------|--------|
| **What's New** | **View release notes** opens the release notes for the installed version |
| **Website** | Opens truerecall.app |
| **Discord** | Joins the True Recall community |

## Newsletter

The accented card at the top of the tab, **Personal newsletter about learning** (subtitle "Learn how to learn"), has a **Subscribe** button. The newsletter covers spaced repetition, memory, and how to study, plus every True Recall release. The same Subscribe button also appears in the What's New dialog.

## Support

The **Support** card at the bottom links to **Buy Me a Coffee** and the **GitHub** repository.

## Other Settings Tabs

- **FSRS**: scheduling per preset, R-Mode, load balance, easy days, breaks, see [FSRS Settings](/configuration/fsrs-settings/)
- **Data & Backup**: device database, storage locations, backups, integrity check, Anki import/export, CSV/TSV export, see [Backup & Restore](/data/backup-restore/)
- **Integrations**: Cloud Sync and Shared vault, Ink drawings, Local API, Claude Code Skill, see [Cloud Sync](/data/cloud-sync/) and [Ink Integration](/configuration/ink-integration/)
- **Features**: access levels, the AI provider card, and the optional feature toggles (Quick Actions Toolbar, Link Progress Indicators, Embedded Dashboards, Status Bar Summary, AI Workspace), see [Features Overview](/plugins/overview/)

## What to Read Next

- [Review Interface](/review/review-interface/): the review experience these settings control
- [Keyboard Shortcuts](/configuration/keyboard-shortcuts/): all shortcuts including custom review keybindings
- [Editor Integration](/configuration/editor-integration/): toolbar, link indicators, status bar, and embedded dashboards
- [FSRS Settings](/configuration/fsrs-settings/): scheduling configuration per preset
- [Typed Answers](/review/type-in-mode/): how the Typed answers setting works during review
