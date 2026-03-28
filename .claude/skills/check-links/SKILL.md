---
name: check-links
description: Find broken internal links, orphaned pages, and stale SITEMAP.md entries in the documentation. Use when the user says "check links", "broken links", "stale docs", or "link audit".
user-invocable: true
---

# Check Documentation Links

Audit internal links, SITEMAP.md completeness, and page cross-references.

## Step 1: Inventory All Pages

Glob all documentation files:
- `src/content/docs/**/*.md`
- `src/content/docs/**/*.mdx`

Also read `SITEMAP.md` for the expected page list.

## Step 2: Extract Internal Links

For each page, extract all internal links matching the pattern `[text](/path/)` or `[text](/path/page/)`.

Internal links follow these patterns:
- `(/getting-started/introduction/)` — section/page routes
- `(/views/dashboard/)` — view pages
- `(/creation/creating-flashcards/)` — feature pages

## Step 3: Verify Link Targets

For each internal link, verify the target file exists. Map URL paths to file paths:
- `/getting-started/introduction/` → `src/content/docs/getting-started/introduction.md`
- `/views/dashboard/` → `src/content/docs/views/dashboard.md`
- `/` → `src/content/docs/index.mdx`

Also check for `.mdx` extension if `.md` doesn't exist.

## Step 4: Check SITEMAP.md Completeness

Compare:
1. Pages listed in `SITEMAP.md` vs actual files in `src/content/docs/`
2. Flag pages that exist but aren't in SITEMAP.md (orphaned)
3. Flag SITEMAP.md entries where the file doesn't exist (stale)

Exclude from check:
- `src/pages/*.astro` files (these are in a separate section of SITEMAP.md)

## Step 5: Check Backlinks

For key pages, verify they have at least 1 incoming link from another page. Pages with zero incoming links are potential orphans that readers can't discover via navigation.

## Report Format

Present findings in three sections:

### Broken Links
| Source Page | Link Target | Issue |
|-------------|-------------|-------|
| `path/to/page.md` | `/missing/page/` | Target file not found |

### SITEMAP Issues
| Issue | Details |
|-------|---------|
| Missing from SITEMAP | `section/page.md` exists but not listed |
| Stale SITEMAP entry | `section/old-page.md` listed but doesn't exist |

### Orphaned Pages (no incoming links)
- `path/to/page.md` — no other page links here

If no issues found, report "All links valid, SITEMAP in sync."
