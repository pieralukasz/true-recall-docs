---
title: Introduction
description: Learn what True Recall is and how it can help you remember everything you learn
---

True Recall is an Obsidian plugin that combines **AI-powered flashcard generation** with **FSRS v6 spaced repetition**. It's designed to help you retain knowledge from your notes without the manual effort of creating flashcards.

## What is True Recall?

True Recall turns your Obsidian vault into an intelligent learning system:

- **Generate flashcards automatically** using AI from any note
- **Review with spaced repetition** using the FSRS v6 algorithm
- **Track your progress** with comprehensive statistics
- **Organize with projects** to group related content
- **Sync across devices** with optional cloud sync (coming soon)

## Who is it for?

True Recall is perfect for:

- **Students** studying for exams or learning new subjects
- **Researchers** retaining information from papers and articles
- **Language learners** building vocabulary
- **Professionals** keeping up with industry knowledge
- **Lifelong learners** who want to remember what they read

## True Recall vs Anki

| Feature | True Recall | Anki |
|---------|-------------|------|
| **Algorithm** | FSRS v6 (21 parameters) | SM-2 (legacy) |
| **Flashcard Creation** | AI-powered | Manual |
| **Integration** | Native Obsidian | Separate app |
| **Data Storage** | SQLite in vault | Separate database |
| **Open Source** | Yes | Yes |
| **Mobile** | Via Obsidian mobile | Dedicated apps |

## Key Features at a Glance

### AI Flashcard Generation
Access 7 AI models through OpenRouter:
- Google Gemini 3 Flash (recommended)
- Google Gemini 2.5 Pro
- OpenAI GPT-5.1 & GPT-4o
- Anthropic Claude Opus 4.5 & Sonnet 4
- Meta Llama 4 Maverick

### FSRS v6 Algorithm
The Free Spaced Repetition Scheduler version 6 is the most advanced open-source scheduling algorithm:
- **Stability-based**: Tracks how well you know each card
- **Difficulty-aware**: Adapts to your learning patterns
- **Optimizable**: Train parameters on your review history

### Local-First Data
All your flashcard data is stored in `.true-recall/true-recall.db`:
- Portable SQLite database
- No vendor lock-in
- Works offline
- Backs up with your vault

### Comprehensive Statistics
- Retention curves
- Workload forecasts
- Calendar heatmaps
- Natural language queries

## Next Steps

Ready to get started? Continue to [Installation](/getting-started/installation/) to set up True Recall in your Obsidian vault.
