# True Recall Design System

Extracted from `src/styles/custom.css`. This site layers custom tokens on top of [Starlight](https://starlight.astro.build/) CSS variables.

## Token Namespace

Custom tokens use the `--tr-` prefix to distinguish from Starlight's `--sl-` tokens.

## Colors

### Accent Palette (Starlight overrides)
| Token | Value | Usage |
|-------|-------|-------|
| `--sl-color-accent` | `#7c3aed` | Primary brand purple |
| `--sl-color-accent-high` | `#a78bfa` | Light accent (links, highlights) |
| `--sl-color-accent-low` | `#4c1d95` | Dark accent (backgrounds) |

### Semantic Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--tr-color-error` | `#ef4444` | Error states, destructive actions |
| `--tr-color-success` | `#10b981` | Success states, confirmations |
| `--tr-color-accent-deep` | `#5b21b6` | Gradient endpoint, deep purple |

### Grays (from Starlight)
Used directly via `--sl-color-gray-3` through `--sl-color-gray-6` and `--sl-color-white`.

- `gray-3`: Muted text (subtitles, labels, notes)
- `gray-4`: Placeholder text
- `gray-5`: Borders
- `gray-6`: Surface backgrounds (cards, inputs)

### Overlays
| Token | Value | Usage |
|-------|-------|-------|
| `--tr-overlay-light` | `rgba(255,255,255,0.2)` | Buttons on colored backgrounds |
| `--tr-overlay-light-hover` | `rgba(255,255,255,0.3)` | Hover state for overlay buttons |

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--tr-radius-sm` | `0.5rem` (8px) | Interactive elements: buttons, inputs, messages |
| `--tr-radius-md` | `0.75rem` (12px) | Containers: cards, panels, plans |
| `--tr-radius-pill` | `999px` | Badges, tags, pills |

## Depth

**Borders only.** No box-shadows anywhere. Surface hierarchy is communicated through background color differences and 1px borders using `--sl-color-gray-5`.

## Spacing

All spacing uses a **4px base grid** (`0.25rem` increments). Common values:

| rem | px | Typical usage |
|-----|------|---------------|
| `0.25rem` | 4px | Badge padding, tight gaps |
| `0.5rem` | 8px | Label margins, small gaps |
| `0.75rem` | 12px | Input padding, icon gaps |
| `1rem` | 16px | Standard padding, gaps |
| `1.5rem` | 24px | Section spacing, card padding |
| `2rem` | 32px | Container padding, large margins |
| `3rem` | 48px | Section separators |

## Patterns

### Card
```css
background: var(--sl-color-gray-6);
border: 1px solid var(--sl-color-gray-5);
border-radius: var(--tr-radius-md);
padding: 2rem;
```
Used by: `.card`, `.plan`

### Button (Primary)
```css
padding: 0.75rem 1.5rem;
background: var(--sl-color-accent);
color: var(--sl-color-white);
border: none;
border-radius: var(--tr-radius-sm);
font-weight: 500;
transition: filter 0.2s;
```
Hover: `filter: brightness(1.1)`

### Button (Secondary)
```css
background: transparent;
border: 1px solid var(--sl-color-gray-5);
color: var(--sl-color-white);
```
Hover: `background: var(--sl-color-gray-6)`

### Message (Error/Success)
```css
background: color-mix(in srgb, var(--tr-color-{type}) 10%, transparent);
border: 1px solid var(--tr-color-{type});
color: var(--tr-color-{type});
padding: 0.75rem 1rem;
border-radius: var(--tr-radius-sm);
font-size: 0.875rem;
```

### Input
```css
padding: 0.75rem 1rem;
background: var(--sl-color-gray-6);
border: 1px solid var(--sl-color-gray-5);
border-radius: var(--tr-radius-sm);
color: var(--sl-color-white);
```
Focus: `border-color: var(--sl-color-accent)`

## Layout

- Content max-widths: `400px` (auth forms), `800px` (dashboard, credits)
- Grid: `repeat(auto-fit, minmax(250px, 1fr))` for plan cards
- Centering: `margin: 0 auto` on constrained containers
