---
title: Reversed Cards
description: Automatically generate bidirectional flashcards for two-way recall
links:
  - /features/basic-flashcards/
  - /features/cloze-deletions/
  - /views/flashcard-panel/
---

Use `#flashcard-reverse` instead of `#flashcard` and True Recall creates two cards — the original plus a version with question and answer swapped. Perfect for vocabulary, translations, and anything you need to recall in both directions.

## Creating Reversed Cards

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

Reversed cards show a **"Reversed"** label so you can tell them apart. Both cards are scheduled independently — you might review the original today and the reversed version tomorrow.

## Editing and Deleting

Editing a reversed card automatically updates its pair. If you change "Apple" → "Jabłko" to "Apple" → "Jabłko (fruit)", the reversed card updates to "Jabłko (fruit)" → "Apple" automatically.

Deleting the original card also deletes its reversed version. Deleting the reversed card keeps the original.

## Limitations

- Cannot combine with cloze deletions — if `{{c1::...}}` syntax is present with `#flashcard-reverse`, only cloze cards are generated
- Both question and answer must be non-empty for the reverse to be created
