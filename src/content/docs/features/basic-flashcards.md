---
title: Basic Flashcards
description: Create simple question-and-answer flashcards using the #flashcard tag
links:
  - /features/cloze-deletions/
  - /features/reversed-cards/
  - /features/batch-adding/
  - /views/flashcard-panel/
---

The simplest card type — a question on the front, an answer on the back. Create them with the **+ Add Card** button in the Flashcard Panel.

## Syntax

Question followed by `#flashcard` on the same line, answer on the next line(s):

```markdown
What is spaced repetition? #flashcard
A learning technique that reviews information at increasing
intervals to optimize long-term retention.
```

- **Question**: Everything before `#flashcard` on that line
- **Answer**: Everything on the following lines until a blank line (which ends the card)
- The `#flashcard` tag itself is not part of the question or answer

## Multi-line Answers

Answers can span multiple lines — just keep writing without blank lines:

```markdown
What are the three laws of thermodynamics? #flashcard
1. Energy cannot be created or destroyed, only transformed.
2. Entropy of an isolated system always increases.
3. Entropy approaches a constant as temperature approaches absolute zero.
```

:::caution
A blank line ends the current flashcard. Everything after a blank line is either regular text or the start of a new card. Never put blank lines inside a single flashcard.
:::

## Multi-line Questions

Write the question across multiple lines and place the `#flashcard` tag on the last line. No blank lines allowed — they would end the card:

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

## Creating Cards

Click **+ Add Card** in the Flashcard Panel, write your question with a `#flashcard` tag, the answer below, and save. Cards are linked to the current note automatically.

:::tip[Alternative: Collect from notes]
You can also write cards directly in your notes with `#flashcard` tags and click **Collect** in the panel to import them all at once.
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

## Editing and Duplicates

Edit any card from the panel (click → **Edit**) or during review (press `E`). Changes apply immediately.

When collecting, True Recall skips cards with the same question text — no duplicates.

:::tip[Writing good cards]
One concept per card. Be specific — "What is X?" beats "Tell me about X". Keep answers concise. Avoid yes/no questions — ask "what", "why", or "how" instead.
:::
