---
title: Cloze Deletions
sidebar:
  order: 5
description: "Create fill-in-the-blank flashcards using cloze deletion syntax with hints, rich formatting, and multiple deletions."
---

:::caution[My Notes]
:::

Cloze deletion cards are fill-in-the-blank style flashcards. They test a term in context — you see the surrounding sentence and must recall the missing piece.

The difference from basic cards: "The [___] is the powerhouse of the cell" gives you context that "What is the powerhouse of the cell?" does not. This makes cloze better for facts that carry meaning within their sentence, and basic cards better for definitions you want to test in one clean direction.

Cloze cards are also the natural choice for lists and sequences, where the structure of the sentence holds multiple facts worth testing separately.

## Block Format

Use `#type/cloze` with `{{c<number>::text}}` syntax:

```markdown
#type/cloze
Text: The {{c1::mitochondria}} is the powerhouse of the cell.
Extra: Cellular biology
---
```

This creates one card where "mitochondria" is hidden:
- **Front:** The [...] is the powerhouse of the cell.
- **Back:** The **mitochondria** is the powerhouse of the cell.

The `Extra` field is optional — it shows additional context on the answer side.

## Multiple Clozes

Each cloze number creates a separate card:

```markdown
#type/cloze
Text: The {{c1::heart}} pumps {{c2::blood}} through the {{c3::circulatory system}}.
Extra: Cardiovascular system
---
```

This creates 3 cards:
1. Hide "heart"
2. Hide "blood"
3. Hide "circulatory system"

### Same Number = Same Card

Use the same number to hide multiple parts on one card:

```markdown
#type/cloze
Text: {{c1::John F. Kennedy}} was elected in {{c1::1960}}.
---
```

Both are hidden together on one card.

## Cloze with Hints

Add hints after a third colon:

```markdown
#type/cloze
Text: The {{c1::Paris::capital of France}} is known as the City of Light.
---
```

The hint appears in the blank: `[capital of France]`

Use hints when context alone isn't enough to distinguish similar answers. Don't add hints to every cloze — they reduce the challenge of retrieval.

## Card Generation

Each unique cloze number generates one card:

| Text | Cards Generated |
|------|-----------------|
| `{{c1::A}}` | 1 card |
| `{{c1::A}} {{c2::B}}` | 2 cards |
| `{{c1::A}} {{c1::B}}` | 1 card (both hidden) |
| `{{c1::A}} {{c1::B}} {{c2::C}}` | 2 cards |

## Rich Formatting

Clozes work with Markdown:

```markdown
#type/cloze
Text: The equation {{c1::$$E = mc^2$$}} was discovered by {{c2::**Albert Einstein**}}.
---
```

Supported:
- **Bold**, *italic*
- Math (`$$...$$` and `$...$`)
- `Code`
- Links and images

## Complex Clozes

### Lists

```markdown
#type/cloze
Text: The three states of matter are:
1. {{c1::Solid}}
2. {{c2::Liquid}}
3. {{c3::Gas}}
---
```

### Tables

```markdown
#type/cloze
Text: | Planet | {{c1::Distance from Sun}} |
|--------|---------------------------|
| Mercury| {{c2::57.9 million km}}   |
| Venus  | {{c3::108.2 million km}}  |
---
```

### Code

````markdown
#type/cloze
Text: ```python
def {{c1::greet}}(name):
    return f"Hello, {{c2::{name}}}!"
```
---
````

## During Review

Cloze cards display:

1. **Question side:** Text with `[...]` (or hint) in place of cloze
2. **Answer side:** Full text with cloze highlighted

When you answer, ALL clozes with that number are revealed together.

## Converting Existing Text to Cloze

1. Select the text
2. Use the [Selection Toolbar](/views/selection-toolbar/) → **Cloze**
3. AI generates appropriate cloze markers

Or manually wrap important terms: `{{c1::term}}`

## Tips for Good Cloze Cards

### One fact per cloze

Each deletion should test one piece of information:

```markdown
✅ Good
The {{c1::Battle of Hastings}} occurred in {{c2::1066}}.

❌ Avoid
The {{c1::Battle of Hastings occurred in 1066}}.
```

### Keep sentences natural

The sentence should still read well when the cloze is revealed:

```markdown
✅ Good
{{c1::Water}} freezes at {{c2::0°C}} ({{c3::32°F}}).

❌ Awkward
{{c1::Water}} {{c2::freezes}} {{c3::at}} {{c4::0°C}}.
```

### Group related facts together

Use the same number for facts that belong together:

```markdown
The {{c1::Mona Lisa}} was painted by {{c1::Leonardo da Vinci}}.
```

## Common Use Cases

| Use Case | Example |
|----------|---------|
| Facts | `The {{c1::moon}} orbits {{c2::Earth}}.` |
| Lists | `Primary colors: {{c1::red}}, {{c2::blue}}, {{c3::yellow}}` |
| Definitions | `{{c1::Photosynthesis}}: {{c2::converting light to energy}}` |
| Dates | `{{c1::World War II}} ended in {{c2::1945}}` |
| Formulas | `{{c1::$a^2 + b^2 = c^2$}} (Pythagorean theorem)` |
| Code | `{{c1::print}}("Hello, World!")` |
