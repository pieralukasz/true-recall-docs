# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation site for **True Recall**, an Obsidian plugin for spaced repetition using FSRS v6. Built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build/) and deployed to Vercel as a static site.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

There are no tests or linting configured.

## Architecture

- **Framework**: Astro 5 with Starlight documentation theme + `starlight-theme-obsidian` plugin
- **Output**: Static site (`output: 'static'`) with Vercel adapter for deployment
- **Site URL**: https://truerecall.app

### Content

All documentation lives in `src/content/docs/` as `.md` or `.mdx` files. Each file maps to a route based on its path (e.g., `features/review-system.md` → `/features/review-system/`). The landing page is `src/content/docs/index.mdx` using Starlight's `splash` template.

### Sidebar

The sidebar uses `autogenerate` per directory in `astro.config.mjs` and only renders in dev mode (`import.meta.env.DEV`). Production sidebar is empty. Sections: Getting Started, Views, Creation, Review, Organization, Configuration, Data, Sync, AI, Scheduling, Reference, Migration.

### Component Overrides

Three Starlight components are overridden in `src/components/starlight/`:
- **Header.astro** — custom header layout (removed nav links)
- **Head.astro** — injects Vercel Analytics and Speed Insights
- **Hero.astro** — custom landing page hero

### Styling

- Custom CSS: `src/styles/custom.css` (accent color `#7c3aed`, site title, hero, auth/dashboard styles)
- Starlight CSS variables are used throughout (e.g., `--sl-color-accent`, `--sl-color-gray-*`)

### Site Map

See [SITEMAP.md](./SITEMAP.md) for the full site structure with all pages and descriptions. **This file must be kept in sync whenever pages are added, removed, renamed, or moved.**

### Remark Plugins

- `plugins/remark-strip-dev-notes.mjs` — strips `:::caution[My Notes]` blocks from production builds. Dev notes are visible only during `npm run dev`.

## Documentation Writing Guidelines

Follow these conventions when creating or editing documentation pages. They ensure consistency across the site and make it possible for any session to produce docs that match the existing style.

### Page Structure

Every `.md` page follows this skeleton:

```markdown
---
title: Page Title
sidebar:
  label: "Page Title (P)"   # (P) = needs photos, remove before release
  order: 1
description: One-line summary for SEO and search results.
---

:::caution[My Notes]
Dev-only working notes (stripped in production by remark plugin).
:::

Opening paragraph — what is this thing, in one sentence.

## First Section
...

## What to Read Next

- [Related Page](/path/) — why it's relevant
- [Another Page](/path/) — what it covers
```

Key rules:
- `description` is **required** — it appears in search results and meta tags.
- `:::caution[My Notes]` goes right after frontmatter. It's dev-only (stripped in prod).
- `TODO PHOTO` marks where screenshots will be added later.
- End pages with a "What to Read Next" section linking 3-5 related pages.

### Internal Linking & Backlinking

- **Link bidirectionally.** If page A mentions page B, page B should link back to A where relevant.
- **Use descriptive link text** matching the target page title: `[Flashcard Panel](/views/flashcard-panel/)`.
- **Don't duplicate links** to the same destination within one page (link once where it's most useful).
- **Explain briefly, link for depth.** If a concept can be covered in a sentence, write it inline. Link only when the reader needs a full page.
- **Cross-reference format:** "See [Page Title](/path/) for details" or "For more information, see [Page Title](/path/)."
- **Settings links:** When mentioning a setting path, link to the relevant config page at least once per page.
- **New pages:** When adding a new page, add backlinks from at least 2-3 related existing pages.

### Terminology

Use these terms consistently across all pages:

| Term | Convention |
|------|-----------|
| Product name | **True Recall** (bold on first mention per page) |
| Card states | Capitalized: New, Learning, Review, Relearning, Suspended |
| UI components | Proper nouns, bold on first mention: **Flashcard Panel**, **Selection Toolbar**, **Dashboard**, **Card Browser**, **Flashcard Editor** |
| Settings paths | Breadcrumb: `Settings → Section → "Option Name"` |
| Keyboard shortcuts | Both platforms: `Cmd/Ctrl + Key` |
| Algorithm | FSRS (expanded in Basic Concepts, no need to expand elsewhere) |
| Block format syntax | `#type/slug`, `---` separator, `<!-- source: -->` comment |

### Formatting

- **Bold** — UI element names, button labels, field names, product name on first mention
- `Backticks` — code, syntax, tags, file paths, keyboard keys
- *Italics* — emphasis on concepts (use sparingly)
- Code blocks — block format examples, command syntax
- Tables — temporary text mockups for UI layouts (will be replaced with screenshots)
- Short paragraphs — 3-4 sentences max before a section break

### Asides

```markdown
:::note[Title]     — important clarifications, caveats
:::tip[Title]      — productivity advice, workflow tips, personal recommendations
:::caution[Title]  — warnings, things that could go wrong
```

Use sparingly — max 2-3 per page. Too many asides create visual fatigue.

### Keeping Docs in Sync

- When a plugin feature changes, update **all** pages that reference it — not just the primary page.
- Update `SITEMAP.md` whenever pages are added, removed, or moved.
- After renaming or deleting a page, search for broken internal links (`grep` for the old path).
- Settings references (`Settings → ...`) must match the actual UI paths in the plugin source at `/Users/lukaszpiera/Projects/true-recall`.
- Cross-reference the plugin code when documenting features to ensure accuracy.

### Sidebar Label Suffixes (Dev Only)

| Suffix | Meaning |
|--------|---------|
| `(P)` | Page reviewed, needs photos/screenshots |
| No suffix | Not yet reviewed |

Remove all suffixes before production release.
