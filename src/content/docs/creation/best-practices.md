---
title: Best Practices
sidebar:
  order: 6
description: "How to write effective flashcards that stick — principles, examples, and common mistakes."
---

:::caution[My Notes]
:::

The difference between flashcards that work and flashcards that waste your time comes down to how you write them. These principles will help you create cards that are easy to review and hard to forget.

## One Concept Per Card

The most common mistake is cramming too much into a single card.

**Bad:**

```markdown
#type/basic
Front: What is photosynthesis and where does it happen?
Back: Photosynthesis is the process where plants convert light energy into chemical energy.
It happens in the chloroplasts. The light-dependent reactions occur in the thylakoid membrane,
and the Calvin cycle occurs in the stroma. The overall equation is 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.
---
```

**Good** — split into focused cards:

```markdown
#type/basic
Front: What is photosynthesis?
Back: The process by which plants convert light energy into chemical energy.
---

#type/basic
Front: In which organelle does photosynthesis occur?
Back: Chloroplasts
---
```

## Be Specific

Vague questions lead to vague recall. Ask for a precise answer.

**Bad:**

```markdown
#type/basic
Front: Tell me about HTTP status codes.
Back: They indicate the result of an HTTP request.
---
```

**Good:**

```markdown
#type/basic
Front: What does HTTP status code **404** mean?
Back: Not Found — the server cannot find the requested resource.
---
```

## Keep Answers Short

If your answer is longer than 2–3 lines, you're probably testing too much at once.

**Bad:**

```markdown
#type/basic
Front: What are the SOLID principles?
Back: Single Responsibility, Open/Closed, Liskov Substitution,
Interface Segregation, Dependency Inversion. Single Responsibility means
a class should have only one reason to change. Open/Closed means...
---
```

**Good** — split into independent, contextual cards:

```markdown
#type/basic
Front: Which SOLID principle states that a class should have only one reason to change?
Back: Single Responsibility Principle
---

#type/basic
Front: Which SOLID principle says software entities should be open for extension but closed for modification?
Back: Open/Closed Principle
---
```

Each card stands on its own — one question, one answer, enough context in the question to know what's being asked.

## Add Context to Questions

Help your future self understand *what domain* the question is about.

**Bad:**

```markdown
#type/basic
Front: What does GIL stand for?
Back: Global Interpreter Lock
---
```

**Good:**

```markdown
#type/basic
Front: In Python, what does **GIL** stand for?
Back: Global Interpreter Lock — it prevents multiple threads from executing Python bytecode simultaneously.
---
```

## Use the Right Card Type

Not sure which type to use? See [Note Types — Choosing the Right Type](/creation/note-types/#choosing-the-right-type) for a comparison table.

## Common Mistakes

| Mistake | Why it hurts | Fix |
|---|---|---|
| Yes/no questions | Too easy to guess | Ask "what", "how", or "why" instead |
| Copying sentences from a textbook | No personal understanding | Rephrase in your own words |
| Too many cards at once | Overwhelms your schedule | Add 10–20 new cards per day |
| Never editing cards | Bad cards stay bad | Edit or delete cards that feel wrong during review |

:::tip[Let AI help]
Use the [Selection Toolbar](/views/selection-toolbar/) to generate cards from your notes. AI follows these principles automatically — then you can edit the result to match your voice.
:::

## Learn More

For deeper guides on learning strategies, study techniques, and how to get the most out of spaced repetition, visit [lucaspiera.com](https://lucaspiera.com) — where tutorials on effective learning are published regularly.

## What to Read Next

- [Creating Flashcards](/creation/creating-flashcards/) — the three creation methods
- [Note Types](/creation/note-types/) — built-in types and when to use each
- [Selection Toolbar](/views/selection-toolbar/) — AI-powered card generation that follows these principles
