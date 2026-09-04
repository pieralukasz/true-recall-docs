---
title: Ink Integration
sidebar:
  order: 6
description: Render handwritten and hand-drawn Ink embeds inside True Recall review and editors by bridging the third-party Ink plugin.
---

:::caution[My Notes]
:::

**Ink Integration** lets hand-drawn and handwritten **Ink** embeds render *inside* True Recall (in your review cards and in the card editors) instead of only in normal notes. It's ideal for diagrams, formulas, and anything you'd rather sketch than type.

## Prerequisites

Ink Integration is a bridge to the third-party **Ink** community plugin, which is not bundled with True Recall. Install and enable a compatible Ink version from Obsidian's Community Plugins; True Recall then loads Ink's embeddable editor so its drawings and writing render within True Recall's own editors.

## Where to Find It

There is nothing to switch on. The bridge activates automatically whenever a compatible Ink build is loaded. The **Ink drawings** card in `Settings → True Recall → Integrations` shows the current state and offers a shortcut:

| Field | What it does |
|-------|--------------|
| **Integration status** | One of the four states below, with instructions for fixing it |
| **Ink plugin** | **Open Ink on GitHub**: installation instructions, releases, and source code |

<!-- TODO PHOTO -->

## Status States

| State | Meaning |
|-------|---------|
| **Ready** | Ink is enabled and supports drawings inside True Recall editors |
| **Update required** | Ink is enabled, but this version does not expose the embedded-editor API True Recall needs. Install a True Recall-compatible Ink build, then reload Obsidian |
| **Disabled** | Ink is installed but not loaded. Enable it under Community plugins, then reload Obsidian |
| **Not installed** | Open `Settings → Community plugins → Browse`, search for Ink, install and enable it, then reload Obsidian |

When Ink is missing, disabled or too old, True Recall's editors keep working; Ink embeds simply do not render inside them.

## What to Read Next

- [Editor Integration](/configuration/editor-integration/): other editor-surface features
- [Image Occlusion](/creation/image-occlusion/): another visual card type
- [The Review Interface](/review/review-interface/): where Ink embeds appear during study
- [Cloud Sync](/data/cloud-sync/): the other card in the Integrations tab
