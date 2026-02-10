---
title: Basic Flashcards
description: Create simple question-and-answer flashcards using the #flashcard tag
links:
  - /features/cloze-deletions/
  - /features/reversed-cards/
  - /features/batch-adding/
  - /views/flashcard-panel/
---

Basic flashcards are the simplest card type in True Recall — a question on the front and an answer on the back. You write them directly in your Obsidian notes using the `#flashcard` tag.

## Syntax

Write the question followed by `#flashcard` on the same line, then the answer on the next line(s):

```markdown
What is spaced repetition? #flashcard
A learning technique that reviews information at increasing
intervals to optimize long-term retention.
```

- **Question**: Everything before `#flashcard` on that line
- **Answer**: Everything on the following lines until a blank line or the next flashcard
- The `#flashcard` tag itself is not part of the question or answer

## Multi-line Answers

Answers can span multiple lines. Just keep writing without blank lines:

```markdown
What are the three laws of thermodynamics? #flashcard
1. Energy cannot be created or destroyed, only transformed.
2. Entropy of an isolated system always increases.
3. Entropy approaches a constant as temperature approaches absolute zero.
```

## Multi-line Questions

For longer questions, write the question across multiple lines and place the `#flashcard` tag on the last line:

````markdown
Given the following code:
```python
x = [1, 2, 3]
y = x
y.append(4)
```
What is the value of `x`? #flashcard
`[1, 2, 3, 4]` — because `y = x` creates a reference,
not a copy. Both variables point to the same list.
````

## Collecting Flashcards

After writing flashcards in your note:

1. **Open the Flashcard Panel** — click the brain icon in the left sidebar
2. **Click "Collect"** — True Recall scans the note and imports all tagged cards
3. Cards are stored in the database and linked to the note

:::tip
You can also create cards manually via the **+ Add Card** button in the panel without using the `#flashcard` tag syntax.
:::

## Examples

### Language Learning

```markdown
What does "Schadenfreude" mean? #flashcard
Pleasure derived from someone else's misfortune.
A German loanword with no direct English equivalent.
```

### Programming

```markdown
What is the difference between `==` and `===` in JavaScript? #flashcard
`==` compares values with type coercion (e.g., `"1" == 1` is true).
`===` compares values and types without coercion (e.g., `"1" === 1` is false).
```

### History

```markdown
What caused the fall of the Roman Empire? #flashcard
A combination of factors including economic troubles,
military overexpansion, political instability,
and pressure from barbarian migrations.
```

### With Images

You can include images in both questions and answers:

```markdown
What structure is shown in the diagram? #flashcard
![[cell-diagram.png]]
This is a eukaryotic cell with a visible nucleus,
mitochondria, and endoplasmic reticulum.
```

### With Code Blocks

````markdown
What does this function return? #flashcard
```javascript
function mystery(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
```
It returns the arithmetic mean (average) of the array elements.
````

## During Review

Basic flashcards display the question first. Press **Space** or click **Show Answer** to reveal the answer, then rate your recall:

| Rating | Meaning |
|--------|---------|
| **1 (Again)** | Forgot completely — see again soon |
| **2 (Hard)** | Struggled to recall |
| **3 (Good)** | Recalled with some effort |
| **4 (Easy)** | Recalled instantly |

## Editing Cards

You can edit any card after creation:

- **From the panel**: Click the card → **Edit** from the menu
- **During review**: Press `E` to open the editor

Changes are saved immediately and apply to future reviews.

## Duplicate Prevention

True Recall checks for existing cards with the same question text. If a card with the same question already exists for a note, it won't be created again when collecting.

## Tips for Writing Good Flashcards

1. **One concept per card** — Don't cram multiple facts into a single card
2. **Be specific** — "What is X?" is better than "Tell me about X"
3. **Keep answers concise** — If the answer is longer than a few lines, consider splitting into multiple cards
4. **Use context** — Add just enough context so the question isn't ambiguous
5. **Avoid yes/no questions** — They're too easy to guess; ask "what", "why", or "how" instead

:::note[Next steps]
Once you're comfortable with basic flashcards, explore [Cloze Deletions](/features/cloze-deletions/) for fill-in-the-blank cards and [Reversed Cards](/features/reversed-cards/) for bidirectional recall. For adding many cards at once, see [Batch Adding](/features/batch-adding/).
:::
