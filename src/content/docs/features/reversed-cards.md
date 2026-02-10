---
title: Reversed Cards
description: Automatically generate bidirectional flashcards for two-way recall
links:
  - /features/cloze-deletions/
  - /views/flashcard-panel/
---

Reversed cards automatically create a second flashcard with the question and answer swapped. This is useful for vocabulary, translations, definitions, and any content where you want to practice recall in both directions.

## How to Create Reversed Cards

Use the `#flashcard-reverse` tag instead of `#flashcard`:

```markdown
Apple #flashcard-reverse
Jabłko
```

This creates **two cards**:

| Card | Question | Answer |
|------|----------|--------|
| Original | Apple | Jabłko |
| Reversed | Jabłko | Apple |

## When to Use Reversed Cards

Reversed cards are most useful when the relationship between question and answer is bidirectional:

- **Vocabulary**: word ↔ translation
- **Definitions**: term ↔ definition
- **Symbols**: symbol ↔ name
- **Pairs**: country ↔ capital

:::tip
Only use `#flashcard-reverse` when you genuinely need to recall in both directions. For one-directional knowledge (e.g., "What year did X happen?"), use the regular `#flashcard` tag to avoid unnecessary cards.
:::

## Examples

### Language Learning

```markdown
Good morning #flashcard-reverse
Guten Morgen
```

Creates: "Good morning" → "Guten Morgen" **and** "Guten Morgen" → "Good morning"

### Technical Terms

```markdown
DNS #flashcard-reverse
Domain Name System
```

Creates: "DNS" → "Domain Name System" **and** "Domain Name System" → "DNS"

### Chemistry

```markdown
H₂O #flashcard-reverse
Water
```

### Multi-line Content

Reversed cards support multi-line questions and answers, including code blocks:

````markdown
What does `Array.prototype.map()` return?
```javascript
const result = [1, 2, 3].map(x => x * 2);
```
#flashcard-reverse
A new array with each element transformed by the callback function.
`result` equals `[2, 4, 6]`
````

## During Review

Reversed cards display a small **"Reversed"** label above the question so you can tell them apart from the original card. Both cards are scheduled independently — you might see the original card today and the reversed version tomorrow, depending on your review history.

## Editing Reversed Cards

When you edit a reversed card, the paired card is automatically updated with the swapped content. For example:

1. Original card: Q="Apple", A="Jabłko"
2. You edit the original to: Q="Apple", A="Jabłko (fruit)"
3. The reversed card automatically updates to: Q="Jabłko (fruit)", A="Apple"

This keeps both directions in sync without manual work.

## Deleting Reversed Cards

- **Deleting the original card** also deletes the reversed card (cascade delete)
- **Deleting the reversed card** keeps the original intact

This reflects the fact that the reversed card depends on the original, but not the other way around.

## Duplicate Prevention

When collecting flashcards, True Recall checks for existing cards with the same question text. If either the original or reversed card already exists, it won't be created again.

## Limitations

- Reversed cards cannot be combined with cloze deletions — if a question contains `{{c1::...}}` syntax and uses `#flashcard-reverse`, only cloze cards are generated
- Both the original and reversed card must have non-empty content for the reverse to be created
