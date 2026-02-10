---
title: Cloze Deletions
description: Create fill-in-the-blank flashcards using cloze deletion syntax
---

Cloze deletions let you create fill-in-the-blank flashcards directly in your notes. Instead of writing separate question and answer fields, you mark the key terms inline and True Recall generates the cards automatically.

## Syntax

Wrap any text you want to hide with `{{c1::text}}`:

```markdown
{{c1::Tokyo}} is the capital of Japan. #flashcard
```

This creates a card where "Tokyo" is hidden and replaced with `[...]` during review.

### With Hints

Add a hint after a second `::` to help with recall:

```markdown
{{c1::Mitochondria::organelle}} is the powerhouse of the cell. #flashcard
```

During review, instead of `[...]` you'll see `[organelle]` as a hint.

## Multiple Cloze Indices

Use different numbers (`c1`, `c2`, `c3`...) to generate multiple cards from one sentence:

```markdown
{{c1::Tokyo}} is the capital of {{c2::Japan}}. #flashcard
```

This creates **two cards**:

| Card | Question | Answer |
|------|----------|--------|
| Cloze 1 | `[...]` is the capital of Japan. | **Tokyo** is the capital of Japan. |
| Cloze 2 | Tokyo is the capital of `[...]`. | Tokyo is the capital of **Japan**. |

Each card hides only its target cloze while revealing all others.

## Same Index, Multiple Blanks

Use the same index number to hide multiple terms on a single card:

```markdown
{{c1::HTTP}} stands for {{c1::HyperText Transfer Protocol}}. #flashcard
```

This creates **one card** with both terms hidden simultaneously:

- **Question**: `[...]` stands for `[...]`.
- **Answer**: **HTTP** stands for **HyperText Transfer Protocol**.

## Adding Extra Answer Content

You can add answer text below the `#flashcard` tag, just like with regular cards. It gets appended to each cloze card's answer:

```markdown
{{c1::DNS}} resolves {{c2::domain names}} to IP addresses. #flashcard
DNS uses port 53 and supports both UDP and TCP.
```

Each generated card will show the cloze answer followed by the extra explanation.

## Examples

### Language Learning

```markdown
The word {{c1::Hund::animal}} means {{c2::dog}} in German. #flashcard
```

### Programming Concepts

```markdown
In JavaScript, {{c1::const}} declares a {{c2::block-scoped}}
variable that {{c3::cannot be reassigned}}. #flashcard
```

This creates 3 cards, each testing a different aspect of the same concept.

### Medical Terms

```markdown
{{c1::Hemoglobin}} carries {{c2::oxygen}} in {{c3::red blood cells}}. #flashcard
```

### Multi-line with Code Blocks

Cloze syntax works with multi-line questions too:

````markdown
The {{c1::map}} function transforms each element:
```javascript
const doubled = numbers.{{c1::map}}(n => n * 2);
```
#flashcard
````

## How It Works

1. **Write cloze syntax** in your note using `{{cN::text}}` or `{{cN::text::hint}}`
2. **Add the `#flashcard` tag** at the end of the line (or on the last line for multi-line questions)
3. **Collect flashcards** from the panel — True Recall parses the template and generates one card per unique cloze index
4. **Review normally** — cloze cards appear with blanks during review and show the filled answer when revealed

:::tip
Cloze deletions work great for facts with multiple related pieces of information. Instead of creating 3 separate Q&A cards, write one cloze sentence with `c1`, `c2`, `c3` and get 3 interconnected cards.
:::

## During Review

Cloze cards display a small **"Cloze N"** label above the question so you know which blank to focus on. The question shows your text with the target term replaced by `[...]` (or `[hint]` if you provided one), and all other cloze terms are shown in plain text.

When you reveal the answer, the hidden term appears in **bold**.

## Editing Cloze Cards

You can edit cloze cards the same way as regular cards — press `E` during review or use the card menu in the panel. The question and answer fields contain the pre-rendered text (with blanks and bold), so edits apply to that specific card.

## Duplicate Prevention

True Recall tracks cloze cards by their source note, template text, and cloze index. If you collect flashcards from the same note again, existing cloze cards won't be duplicated.

## Limitations

- Cloze deletions cannot be combined with `#flashcard-reverse` — if both are present, only cloze cards are generated
- Nested cloze syntax (`{{c1::outer {{c2::inner}}}}`) is not supported
- Cloze indices must be positive integers (`c1`, `c2`, etc.)
