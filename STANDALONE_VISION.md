# True Recall Standalone — Vision & Strategic Plan

> Saved from Claude Code planning session, 2026-04-10

## The Vision

An **AI learning agent that lives in a desktop app** — not an SRS app with AI bolted on.

The fundamental shift: **conversations ARE review.** Talking with AI about topics is itself active recall that updates FSRS scheduling. The AI learns the user through every interaction, knows what they understand, what they're forgetting, and adapts everything accordingly.

---

## Core Philosophy

1. **AI creates knowledge items in the background** — not the user. AI decides what's worth remembering based on conversations and notes.
2. **Review ≠ just flashcards** — review items can be: conversation syntheses, concept checks, connection questions, application problems, AI-generated notes. Not just atomic Q/A.
3. **AI learns the user through conversations** — remembers what user understands, what they forgot, how they learn, what matters to them.
4. **User controls what's important** — can mark "important to remember" vs "just context for AI." Not everything needs a flashcard.
5. **Morning conversations replace card drilling** — natural conversation tests and reinforces knowledge. More effective than mechanically clicking through cards.
6. **Agent generates daily knowledge dose** — personalized daily briefing through conversation, not card decks.
7. **Agent sometimes answers for you** — if it knows you know the answer, it can skip or accelerate.
8. **Adaptive system** — expert gets analysis/synthesis, beginner gets fundamentals with flashcards.
9. **Flashcards are still important** — but as one tool among many, mainly for fundamental concepts and base knowledge. Created by AI in background AND on request during conversation.

---

## Review Item Types (not just flashcards)

| Type | What it is | Example |
|---|---|---|
| `flashcard` | Classic Q/A, cloze, reversed | "What is mitochondria?" — atomic knowledge |
| `concept_check` | Open-ended question with AI grading | "Explain how FSRS calculates stability" — user types answer, AI evaluates |
| `synthesis` | AI-generated synthesis of a conversation/note for user to verify | "Here's what I understood from our discussion about X — is this correct?" |
| `connection` | Question about relationships between concepts | "How does concept A relate to concept B from your notes on Y?" |
| `application` | Apply knowledge to a new scenario | "Given what you know about X, how would you approach Y?" |
| `conversation_review` | Full conversation fragment to re-engage with | "We discussed Z last week — let's pick up where we left off" |

All types go through FSRS scheduling. All contribute to the learner profile.

---

## How Knowledge Flows

```
User's notes (vault/folder) ──────────┐
                                       │
User conversations with AI ────────────┼──→ AI Memory (what user knows/forgets)
                                       │         │
Documents ingested (PDF, web) ─────────┘         │
                                                  ▼
                                    AI decides what to create:
                                    ├── Flashcards (fundamentals)
                                    ├── Concept checks (understanding)
                                    ├── Syntheses (comprehension)
                                    ├── Connections (relationships)
                                    ├── Applications (transfer)
                                    └── Conversation reviews (context)
                                                  │
                                                  ▼
                                    FSRS schedules everything
                                                  │
                                    ┌─────────────┼──────────────┐
                                    ▼             ▼              ▼
                              Card review    Morning         On-demand
                              (traditional)  conversation    conversation
                                             (AI-guided      (user asks,
                                              daily dose)     AI adapts)
                                    │             │              │
                                    └─────────────┼──────────────┘
                                                  ▼
                                    AI updates memory + FSRS
                                    (even conversations count as review)
```

---

## The App: Obsidian-like Shell + AI Agent

### Layout
- **Ribbon** (left edge) — icons for: file explorer, search, bookmarks, dashboard, knowledge graph, review, AI chat, learner memory, settings
- **File Explorer** (left panel) — vault tree, folders, notes, search, tags
- **Main Area** — note editor (CodeMirror 6), dashboard, knowledge graph, review session, guided learning
- **Right Panel** — AI Chat (multi-mode), flashcards panel, learner memory panel
- **Status Bar** — connected agents, FSRS stats, due count, MCP status
- **Tabs** — multiple notes open, like Obsidian

### Key Views
1. **Today Dashboard** — command center: AI knows about you (topic mastery from conversations + FSRS), recent conversations with signals, morning conversation recommendation, activity feed
2. **Knowledge Graph** — interactive SVG visualization, nodes colored by mastery, connections between concepts, AI suggestions
3. **Review Mode** — fullscreen, handles ALL item types (not just flashcards): concept checks with text input + AI grading, syntheses to verify, connection questions, traditional flashcards
4. **AI Chat** — 5 modes (Chat, Study, Deep Solve, Research, Quiz) + composable tools (RAG, Web, Reason, Flashcards, Memory) + provider selector (Claude, OpenAI, custom)
5. **Guided Learning** — progressive paths from documents (3-5 steps), Q&A per step, flashcard checkpoints
6. **Learner Memory** — AI's understanding of user: topic mastery, weak areas, study recommendations, learning velocity chart

### AI Chat Modes
| Mode | What it does |
|---|---|
| Chat | RAG-grounded conversation, creates flashcards in background |
| Study | Quiz from docs → grading → cards for weak areas |
| Deep Solve | Multi-step problem solving with citations |
| Research | Multi-document + web search → synthesis |
| Quiz | Generated assessments from knowledge base |
| **Morning** | Daily knowledge conversation — tests memory through natural dialogue |

---

## Foundation: Fork AFFiNE

**AFFiNE** (MIT, 67K stars) provides ~60% free:
- Electron desktop shell with modern UI
- BlockSuite editor (custom block types via extensions)
- Local-first SQLite + CRDT collaboration
- Theme system (CSS custom properties)
- React + TypeScript monorepo

**Strip:** cloud sync, team features, Publish, admin panel
**Keep:** desktop shell, block editor, local storage, theme system, extension architecture
**Add:** @true-recall/core (FSRS), AI learning agent, review system, knowledge graph, CLI, MCP

### Alternative: Build from scratch with Tauri
More control, no architectural debt, but ~8 weeks more work.

---

## Plugin & Theme System

### Themes (Obsidian-inspired)
- CSS custom properties (80-100 foundation variables)
- Community themes distributed via GitHub
- CSS snippets for user micro-adjustments
- Light/dark mode
- Style Settings pattern (themes declare adjustable variables)

### Plugins
- Web Worker sandboxed execution (per plugin)
- Host API: cards.*, review.*, notes.*, rag.*, tutor.*, fsrs.*, ui.*, events.*, settings.*
- Contribution points in manifest.json (commands, views, settings)
- Default-deny permissions
- iframe UI slots for plugin panels
- Plugin marketplace (GitHub-based registry)

---

## CLI Design

```bash
# AI conversations
truerecall chat "explain X"           # One-shot RAG chat
truerecall chat                        # Interactive REPL
truerecall morning                     # Daily morning conversation
truerecall study "chapter5.pdf"        # Study session from document

# Cards & review
truerecall cards due                   # Due counts
truerecall review start                # Start review (all item types)

# Knowledge
truerecall kb ingest paper.pdf         # Ingest document (Docling)
truerecall kb search "topic"           # Semantic search

# Analytics
truerecall stats                       # Dashboard summary
truerecall memory                      # Learner profile

# Plugins & themes
truerecall plugin install X
truerecall theme switch dark-academic

# Agent interfaces
# MCP server for Claude Code/Desktop
# REST API on localhost
# TUI interactive mode with autocomplete
```

---

## Tech Stack

| Layer | Choice |
|---|---|
| Desktop shell | AFFiNE fork (Electron) or Tauri v2 |
| Frontend | React (AFFiNE) or Preact (custom) |
| Editor | BlockSuite (AFFiNE) or CodeMirror 6 (custom) |
| State | Jotai (AFFiNE) or Zustand/Signals (custom) |
| Backend | Bun + Hono |
| Database | better-sqlite3 (native) |
| FSRS | ts-fsrs (existing @true-recall/core) |
| AI | OpenRouter BYOK + LiteLLM proxy (existing) |
| Embeddings | LiteLLM endpoint (existing) |
| Doc parsing | Docling Python sidecar |
| Styling | Tailwind CSS 4 |
| CLI | Bun binary |
| Agent | MCP server + REST API |

---

## What Makes This Unique

1. **Conversations are review.** Nobody else counts AI conversations as active recall events that update scheduling.
2. **FSRS-informed AI memory.** The AI knows what you know because it has retention data across every topic.
3. **6 review item types.** Not just flashcards — syntheses, concept checks, connections, applications, conversation reviews.
4. **Morning conversation mode.** Daily AI-guided knowledge reinforcement through natural dialogue.
5. **AI creates items autonomously.** You talk, it learns what matters and creates the right items.
6. **Open-source + local-first + extensible.** Obsidian's model for learning.
7. **Agent-native from day 1.** MCP + CLI + API. Works with Claude Code, Claude Desktop, any agent.

---

## Competitive Position

| | NotebookLM | DeepTutor | Anki | RemNote | Obsidian | **This** |
|---|---|---|---|---|---|---|
| AI tutoring | Basic | 5 modes | No | No | No | **5 modes + morning** |
| Spaced repetition | No | No | SM-2/FSRS | SM-2/FSRS | Plugin | **FSRS v6 native** |
| Review = conversation | No | No | No | No | No | **Yes** |
| AI creates items | Quizzes | Quizzes | No | Flashcards | No | **All 6 types** |
| Learner memory | No | Session-only | Deck stats | Basic | No | **Deep, FSRS-informed** |
| Extensible | No | No | Plugin | No | Full | **Full (themes+plugins)** |
| Open source | No | Apache 2.0 | GPL | No | Plugins only | **MIT** |
| Local-first | No | Self-host | Yes | No | Yes | **Yes** |
| Agent-native | No | CLI | MCP plugin | No | CLI 1.12+ | **MCP+CLI+API** |

---

## Phased Implementation

### Phase 0: Core extraction (2 weeks)
Extract `@true-recall/core` as platform-agnostic. Define IFileSystem, IFrontmatter, IMetadataIndex, ISettings interfaces.

### Phase 1: Desktop shell + new data model (3-4 weeks)
Fork AFFiNE or scaffold Tauri. New ReviewItem model (6 types). UserLearningMemory schema. Bun backend + native SQLite.

### Phase 2: Core UI (3-4 weeks)
Obsidian-like layout (ribbon, explorer, tabs, panels). Note editor. Dashboard ("AI Knows About You"). Card browser (all item types).

### Phase 3: Review mode (2-3 weeks)
Fullscreen review for ALL item types. Concept checks with AI grading. Syntheses. Connections. Traditional flashcards. Summary with AI insight.

### Phase 4: AI chat agent (3-4 weeks)
Multi-mode chat (Chat, Study, Solve, Research, Quiz, Morning). AI creates items in background. Memory updates per conversation. Provider selector.

### Phase 5: Document ingestion (2-3 weeks)
Docling sidecar. PDF/DOCX upload. Chunking + RAG indexing. Source tracking.

### Phase 6: Learner memory + morning mode (2-3 weeks)
FSRS aggregation per topic. Learner profile. Morning conversation mode. Adaptive difficulty. "Conversations count as review" FSRS integration.

### Phase 7: Knowledge graph + guided learning (3 weeks)
Interactive graph visualization. Mastery coloring. Progressive learning paths. Review checkpoints.

### Phase 8: Plugin system + CLI (3 weeks)
Worker sandbox. Host API. Plugin lifecycle. Theme engine. CLI with TUI. MCP server.

### Phase 9: Community ecosystem (2 weeks)
Plugin marketplace. Theme gallery. Developer docs. Submission process.

**Total: ~25-30 weeks to full platform**
**Usable learning app by week 12 (Phase 0-4)**

---

## Open Questions

1. **Name:** Episteme? Deep Recall? Something else?
2. **AFFiNE fork vs Tauri from scratch:** Fork saves ~8 weeks but adds architectural debt
3. **How does "conversation counts as review" work technically?** AI extracts which concepts were recalled during conversation → maps to FSRS cards → triggers review update with inferred rating?
4. **Should the app work without AI?** Pure SRS mode for users who just want flashcards?
