---
title: Ink Integration
sidebar:
  order: 6
description: Render handwritten and hand-drawn Ink embeds inside True Recall review and editors by bridging the third-party Ink plugin.
---

:::caution[My Notes]
:::

**Ink Integration** lets hand-drawn and handwritten **Ink** embeds render *inside* True Recall — in your review cards and in the card editors — instead of only in normal notes. It's ideal for diagrams, formulas, and anything you'd rather sketch than type.

## Prerequisites

Ink Integration is a bridge to the third-party **Ink** community plugin. Install and enable Ink from Obsidian's Community Plugins first; True Recall then injects Ink's embeddable editor so its drawings and writing render within True Recall's own editors.

## Enabling It

Turn it on under `Settings → True Recall → Integrations → Ink Integration`.

<!-- TODO PHOTO -->

## Status States

The integration reports one of four states, so you always know why embeds do or don't render:

| State | Meaning |
|-------|---------|
| **Ready** | Ink is installed, compatible, and embeds render in True Recall. |
| **Not installed** | The Ink plugin isn't present — install it to enable the bridge. |
| **Incompatible** | Ink is installed but its version doesn't expose the API True Recall needs. |
| **Disabled** | The bridge is turned off in settings. |

## What to Read Next

- [Editor Integration](/configuration/editor-integration/) — other editor-surface features
- [Image Occlusion](/creation/image-occlusion/) — another visual card type
- [The Review Interface](/review/review-interface/) — where Ink embeds appear during study
