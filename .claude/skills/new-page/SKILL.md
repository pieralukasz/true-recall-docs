---
name: new-page
description: Scaffold a new documentation page following the True Recall docs template and guidelines. Use when the user says "new page", "create page", "add docs page", or "new documentation". Handles frontmatter, template, SITEMAP.md update, and backlinks.
user-invocable: true
---

# Create New Documentation Page

Scaffold a new docs page following the established True Recall documentation conventions.

## Step 1: Gather Information

Ask the user for:
1. **Page title** — e.g., "Card Scheduling"
2. **Section** — which directory under `src/content/docs/` (read `SITEMAP.md` for available sections)
3. **Description** — one-line summary for SEO (REQUIRED)
4. **Needs photos?** — if yes, add `(P)` suffix to sidebar label

## Step 2: Determine Order

Read existing pages in the target section directory to determine the next `order` value:

```bash
grep -r "order:" src/content/docs/<section>/*.md | sort -t: -k3 -n
```

## Step 3: Create the Page

Write the file at `src/content/docs/<section>/<slug>.md` using this template:

```markdown
---
title: <Title>
sidebar:
  label: "<Title>"
  order: <next order number>
description: <one-line description>
---

:::caution[My Notes]
Working notes — stripped in production.
:::

<Opening paragraph — what is this thing, in one sentence.>

## <First Section>

TODO

## What to Read Next

- [Related Page](/path/) — why it's relevant
- [Another Page](/path/) — what it covers
- [Third Page](/path/) — what it adds
```

If the page needs photos, use `(P)` suffix in sidebar label:
```yaml
sidebar:
  label: "<Title> (P)"
```

## Step 4: Update SITEMAP.md

Add the new page entry to `SITEMAP.md` under the correct section, following the existing format:

```markdown
- `<section>/<slug>.md` — <description>
```

## Step 5: Add Backlinks

Find 2-3 related existing pages and add a link to the new page from each one. Add links in the most relevant section or in their "What to Read Next" section.

Search for related pages:
```bash
grep -rl "<relevant keyword>" src/content/docs/ --include="*.md"
```

## Conventions

- `description` is **required** — appears in search results and meta tags
- `:::caution[My Notes]` goes right after frontmatter (dev-only, stripped in prod)
- `TODO PHOTO` marks where screenshots will be added
- End pages with "What to Read Next" linking 3-5 related pages
- Bold product name **True Recall** on first mention per page
- UI components: bold on first mention (**Flashcard Panel**, **Card Browser**, etc.)
- Settings paths: `Settings → Section → "Option Name"`
- Keyboard shortcuts: `Cmd/Ctrl + Key`
