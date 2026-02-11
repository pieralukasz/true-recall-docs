# Excalidraw Diagram Proposals for True Recall Documentation

## Context

After reviewing all 35 documentation pages, this document identifies pages where Excalidraw diagrams would significantly improve comprehension. The documentation covers complex algorithmic concepts (FSRS, spaced repetition), hierarchical data structures (projects, presets), and multi-step processes (migration, optimization) that are difficult to grasp from text and tables alone.

---

## Priority 1: High-Impact Diagrams

### 1. Review System — Card State Machine

**Page:** `src/content/docs/features/review-system.md`
**Current visuals:** None (text descriptions + tables only)

**Diagram A: Card State Machine**

- State diagram showing: New → Learning → Review, with "Again" creating Relearning → Review loop
- Each state as a rounded box with color coding (blue=New, orange=Learning, green=Review, red=Relearning)
- Transitions labeled with ratings (Again/Hard/Good/Easy)
- Shows learning steps progression within Learning state (1m → 10m → graduate)

**Diagram B: Queue Priority Order**

- Horizontal pipeline/funnel showing the 3 priority tiers:
  1. Due Learning Cards (highest priority)
  2. Reviews + New Cards (interleaved)
  3. Pending Learning Cards (waiting)
- Visual cue for the "waiting screen" between tier 2 and 3

---

### 2. FSRS Algorithm — Core Concepts

**Page:** `src/content/docs/features/fsrs-algorithm.md`
**Current visuals:** One small ASCII flowchart (`New → Learning Steps → Graduate → Review`)

**Diagram A: S/D/R Concept Map**

- Three interconnected concept nodes: Stability (S), Difficulty (D), Retrievability (R)
- Arrows showing relationships: S influences interval length, D affects S growth rate, R decays over time based on S
- Desired Retention as an external parameter controlling when R triggers "due"
- Each rating (Again/Hard/Good/Easy) shown affecting S and D differently

**Diagram B: Forgetting Curve Visualization**

- X-axis: days since review, Y-axis: Retrievability (0-100%)
- Multiple curves showing different stability values (S=5, S=20, S=60)
- Horizontal dashed line at 90% (desired retention) showing where each curve crosses = due date
- Annotation: "Higher stability = longer until card is due"

**Diagram C: Rating Effects on Interval Growth**

- Timeline showing a card reviewed 5 times
- Branching paths after a review showing how each rating leads to different next intervals
- Visual comparison: Again resets, Hard compresses, Good grows normally, Easy accelerates

---

### 3. Projects — Graph Structure & Self-Reference

**Page:** `src/content/docs/features/projects.md`
**Current visuals:** One static PNG (`project-note-flashcard.png`), ASCII tree

**Diagram A: Multi-Parent Graph (NOT a tree)**

- Graph visualization showing "Linear Algebra" with edges to both "Machine Learning" AND "Mathematics"
- Contrast with Anki's strict tree (shown as dimmed/crossed-out single-parent)
- Color-coded: project nodes vs regular note nodes

**Diagram B: Self-Reference Pattern Explained**

- Visual showing a note "Machine Learning.md" with its frontmatter
- Arrow from `projects: ["[[Machine Learning]]"]` looping back to itself
- Annotation: "Self-reference = this note IS a project"
- Second example showing a sub-project with both self-reference + parent reference

**Diagram C: Cascading Review Scope**

- Tree showing "Machine Learning" as root, with sub-projects and notes
- Highlighted region showing "When you review ML, ALL these cards are included"
- Stats aggregation flowing upward (card counts summing from leaves to root)

---

### 4. FSRS Presets — Resolution Hierarchy

**Page:** `src/content/docs/configuration/fsrs-presets.md`
**Current visuals:** ASCII flowchart for 3-tier lookup

**Diagram: 3-Tier Preset Resolution**

- Flowchart with decision diamonds:
  1. "Does note have `fsrs_preset` in frontmatter?" → Yes: use it
  2. "Does parent project have a preset?" → Walk up tree → Yes: use first match
  3. "Fallback" → Default preset
- Concrete example alongside: Medical/ tree with Anatomy/ and Pharmacology/ showing how different presets resolve at each level
- Color-coded paths showing which preset each note ends up using

---

### 5. Anki Migration — Deck-to-Project Transformation

**Page:** `src/content/docs/migration/from-anki.md`
**Current visuals:** None (code blocks with folder structures)

**Diagram: Before/After Mapping**

- Left side: Anki deck tree using `::` notation (`Math::Calculus::Integrals`)
- Right side: True Recall folder structure + frontmatter wikilinks
- Arrows connecting corresponding elements
- Color coding: deck → project note, cards → linked to leaf note
- Shows tag hierarchy alongside (`input/Math/Calculus/Integrals`)

---

## Priority 2: Medium-Impact Diagrams

### 6. Scheduling — Learning Steps Progression

**Page:** `src/content/docs/configuration/scheduling.md`
**Current visuals:** One ASCII flowchart

**Diagram: Card Flow Timeline**

- Horizontal timeline showing a new card's journey:
  - New → (1 min) → Review → (10 min) → Review → Graduate → (1 day) → First Review → (FSRS intervals)
- "Again" branch showing restart from beginning
- "Easy" shortcut jumping directly to Easy Interval (4 days)
- Side-by-side comparison of "Default" vs "Thorough" vs "Quick" step configurations

---

### 7. Data & Backup — Retention Policy

**Page:** `src/content/docs/configuration/data-backup.md`
**Current visuals:** None

**Diagram: Multi-Tier Backup Retention**

- Timeline spanning ~4 weeks with backup dots
- Three overlapping zones: Hourly (last 24h, dense dots), Daily (last 7d, one dot per day), Weekly (last 4w, one dot per week)
- Crossed-out dots for backups that get pruned
- Shows how total backup count stays manageable (~35) while covering the full range

---

### 8. FSRS Optimization — Workflow

**Page:** `src/content/docs/advanced/fsrs-optimization.md`
**Current visuals:** None

**Diagram: Optimization Lifecycle**

- Circular workflow: Accumulate reviews (400+) → Check retention stats → Run optimization → Review suggested weights → Apply → Monitor for 3-6 months → Repeat
- Per-preset branching: shows Default preset optimizing independently from specialized presets
- "Not enough data" exit path for presets with <400 reviews

---

### 9. Load Balancing — Before/After Distribution

**Page:** `src/content/docs/advanced/load-balancing.md`
**Current visuals:** None

**Diagram: Workload Smoothing**

- Bar chart comparison:
  - Top: "Without Load Balancing" — jagged bars (20, 150, 40, 130, 25...)
  - Bottom: "With Load Balancing" — smooth bars around target (80-120)
- Horizontal target line + deviation band
- A few arrows showing cards "shifted" from spike days to valley days

---

### 10. Easy Days — Weekly Schedule Redistribution

**Page:** `src/content/docs/advanced/easy-days.md`
**Current visuals:** None

**Diagram: Weekly Card Redistribution**

- 7-day week bar chart
- Saturday and Sunday shown at 50% with faded/dimmed bars
- Arrows showing redistributed cards flowing to Friday and Monday
- Multiplier labels (100%, 100%, 100%, 100%, 100%, 50%, 50%)

---

## Priority 3: Nice-to-Have Diagrams

### 11. Introduction — "Note = Deck" Concept

**Page:** `src/content/docs/getting-started/introduction.md`

- Side-by-side: Anki model (separate deck + cards) vs True Recall model (note contains cards inline)
- Shows how one note can belong to multiple projects (many-to-many)

### 12. Quick Start — Review Flow

**Page:** `src/content/docs/getting-started/quick-start.md`

- Simple 4-step visual: Write → Collect → Review → Track Progress
- Minimal, onboarding-friendly

---

## Summary

| #   | Page              | Diagram                        | Priority     |
| --- | ----------------- | ------------------------------ | ------------ |
| 1a  | Review System     | Card State Machine             | High         |
| 1b  | Review System     | Queue Priority Order           | High         |
| 2a  | FSRS Algorithm    | S/D/R Concept Map              | High         |
| 2b  | FSRS Algorithm    | Forgetting Curve               | High         |
| 2c  | FSRS Algorithm    | Rating Effects on Intervals    | High         |
| 3a  | Projects          | Multi-Parent Graph             | High         |
| 3b  | Projects          | Self-Reference Pattern         | High         |
| 3c  | Projects          | Cascading Review Scope         | High         |
| 4   | FSRS Presets      | 3-Tier Resolution Hierarchy    | High         |
| 5   | Anki Migration    | Deck-to-Project Transformation | High         |
| 6   | Scheduling        | Card Flow Timeline             | Medium       |
| 7   | Data & Backup     | Multi-Tier Retention           | Medium       |
| 8   | FSRS Optimization | Optimization Lifecycle         | Medium       |
| 9   | Load Balancing    | Workload Smoothing             | Medium       |
| 10  | Easy Days         | Weekly Redistribution          | Medium       |
| 11  | Introduction      | Note = Deck Concept            | Nice-to-have |
| 12  | Quick Start       | Review Flow                    | Nice-to-have |

**Total: 17 diagrams across 10 pages** (8 high-priority, 5 medium, 2 nice-to-have, 2 already have some visuals that could be enhanced)
