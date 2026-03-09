---
title: Image Occlusion
sidebar:
  order: 4
description: "Create flashcards from images by hiding specific regions, with manual drawing tools and AI-powered detection."
---

:::caution[My Notes]
:::

**Image Occlusion** lets you create flashcards from images by hiding specific regions. Each region becomes a separate card — you see the image with one area covered and must recall what's underneath.

This type exists because some things can't be tested with text alone. In anatomy, chemistry, or geography, the spatial relationship between a label and its location is part of what you're learning. A basic card that asks "What is the hippocampus?" doesn't test whether you can find it on a brain diagram. Image occlusion does.

## How It Works

1. Select an image in your note
2. Define regions to hide (manually or with AI)
3. Each region becomes a separate card
4. During review, one region is hidden while others remain visible

## Creating Image Occlusion Cards

### From the Selection Toolbar

1. Click on an image in your note
2. The [Selection Toolbar](/views/selection-toolbar/) appears with an **IO** button
3. Click **IO** to open the Image Occlusion editor

### From Command Palette

1. `Cmd/Ctrl + P` → "Create image occlusion card"
2. Select an image from your vault
3. The editor opens

### From the Flashcard Panel

1. Open the [Flashcard Panel](/views/flashcard-panel/) for a note with images
2. Click **Add Image Occlusion**
3. Select an image

## The Image Occlusion Editor

TODO PHOTO

### Drawing Tools

| Tool | Description |
|------|-------------|
| **Rectangle** | Draw rectangular regions |
| **Ellipse** | Draw elliptical regions |
| **Polygon** | Draw custom shapes (coming soon) |
| **AI Detect** | Auto-detect regions with AI |

Select a tool, click and drag on the image, and a numbered region appears. Repeat for additional regions.

### AI Region Detection

Click **AI Detect** to automatically identify regions. AI analyzes the image, detects labels, annotations, and structures, then creates regions you can adjust or delete.

Works best with anatomy diagrams, labeled charts, and maps with clear boundaries.

:::tip[Start with AI, then refine]
Let AI find regions first, then adjust boundaries, add labels, and remove anything irrelevant. It's faster than drawing everything by hand.
:::

### Region Properties

For each region, you can set:

| Property | Description |
|----------|-------------|
| **Label** | Text shown on hover during review |
| **Hint** | Optional hint displayed in the blank |
| **Group** | Group related regions to test together |

### Region Groups

Group regions to hide them together on one card. Select multiple regions, click **Group**, and they'll be tested as a single unit. Useful for related areas you want to recall at the same time.

## Card Generation

By default, each region generates one card:

| Card | Hidden | Visible |
|------|--------|---------|
| Card 1 | Region 1 | Regions 2, 3, 4... |
| Card 2 | Region 2 | Regions 1, 3, 4... |
| Card 3 | Region 3 | Regions 1, 2, 4... |

Grouped regions are hidden together:

| Card | Hidden | Visible |
|------|--------|---------|
| Card 1 | Regions 1, 2 (grouped) | Regions 3, 4... |

## Review Modes

| Mode | Description |
|------|-------------|
| **Hide One** | Hide one region per card (default) |
| **Hide All** | Hide all regions, reveal one at a time |
| **Hide All Group** | Hide all, reveal by group |

## Supported Image Formats

PNG, JPEG/JPG, GIF (first frame), WebP, and SVG (converted to PNG).

## Tips

- **Use high-quality images** with clear labels and good contrast
- **Keep regions consistent** in size — avoid overlapping
- **Add labels** to regions for context during review
- **Group related areas** in complex images to test them together

## Common Use Cases

| Subject | Example |
|---------|---------|
| Anatomy | Label body parts, organs, bones |
| Geography | Countries, capitals, landmarks |
| Chemistry | Molecular structures, reactions |
| Biology | Cell structures, organisms |
| Art | Artist techniques, periods |
| Engineering | Diagrams, schematics |

## What to Read Next

- [Note Types](/creation/note-types/) — all built-in types and when to use each
- [Creating Flashcards](/creation/creating-flashcards/) — other creation methods and the collection step
- [Selection Toolbar](/views/selection-toolbar/) — AI-powered card generation from text and images
