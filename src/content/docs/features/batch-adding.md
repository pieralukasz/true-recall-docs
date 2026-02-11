---
title: Batch Adding Flashcards
description: How to create many flashcards at once using the Add panel or Collect feature
links:
  - /features/basic-flashcards/
  - /views/flashcard-panel/
---

Two ways to add many cards at once: write them in the **Add** modal, or tag them in your notes and click **Collect**.

## Method 1: Add Modal (Batch Write)

Click **+ Add Card** in the flashcard panel to open the editor modal. Instead of writing just one card, write as many as you need — separated by **blank lines**:

```markdown
What is photosynthesis? #flashcard
The process by which plants convert light energy
into chemical energy stored in glucose.

What are the inputs of photosynthesis? #flashcard
Sunlight, water (H₂O), and carbon dioxide (CO₂).

What are the outputs of photosynthesis? #flashcard
Glucose (C₆H₁₂O₆) and oxygen (O₂).

Where does photosynthesis occur? #flashcard
In the chloroplasts of plant cells,
specifically in the thylakoid membranes.
```

Click **Save Flashcards** (or press `Ctrl+Enter`) — all four cards are created in one batch.

### Format Rules

Each flashcard follows the same pattern:

```
Question text #flashcard
Answer text (one or more lines)
```

- The **question** is everything before `#flashcard` on that line
- The **answer** is everything on the following lines until a blank line or the next `#flashcard`
- **Blank lines** separate one card from the next
- Multi-line answers are fully supported — just keep typing without blank lines

### Keyboard Shortcuts in the Editor

| Shortcut | Action |
|----------|--------|
| `Ctrl+3` | Insert `#flashcard` tag at end of current line |
| `Ctrl+B` | Bold (`**text**`) |
| `Ctrl+I` | Italic (`*text*`) |
| `Ctrl+K` | Wiki-link (`[[link]]`) |
| `Ctrl+Shift+C` | Code block |
| `Ctrl+Enter` | Save all flashcards |
| `Escape` | Cancel |

:::tip[Fast workflow]
Write your question, press `Ctrl+3` to insert the tag, press `Enter` to move to the answer line. Repeat for each card. Press `Ctrl+Enter` when done.
:::

### Duplicate Handling

When saving a batch, True Recall checks each card against existing cards in the database:

- **Unique cards** are saved immediately
- **Duplicate cards** (same question text) are skipped
- If some cards were duplicates, the modal **re-opens with only the duplicates** pre-filled so you can edit them and save again

For example: you add 10 cards, 3 are duplicates → 7 are created, modal re-opens with the 3 duplicates for you to fix.

### Mixing Card Types in One Batch

You can mix regular, reversed, and cloze cards in a single Add session:

```markdown
What is DNA? #flashcard
Deoxyribonucleic acid — the molecule carrying genetic instructions.

RNA #flashcard-reverse
Ribonucleic acid

{{c1::Adenine}} pairs with {{c2::Thymine}} in DNA. #flashcard
In RNA, Adenine pairs with Uracil instead.
```

This single batch creates:
- 1 basic card (DNA question)
- 2 reversed cards (RNA ↔ Ribonucleic acid)
- 2 cloze cards (one hiding Adenine, one hiding Thymine)

**Total: 5 cards from 3 entries.**

## Method 2: Collect from Notes (Tag & Collect)

Write flashcards directly in your Obsidian notes as you take them, then import all at once.

### Step 1: Tag flashcards in your note

```markdown
# Cell Biology

The cell is the basic unit of life. All organisms are made of cells.

What is the cell theory? #flashcard
All living things are made of cells, cells are the basic unit
of life, and new cells come from existing cells.

Cells contain organelles that perform specific functions.

What is the role of mitochondria? #flashcard
Mitochondria produce ATP (energy) through cellular respiration.

What is the endoplasmic reticulum? #flashcard
A network of membranes involved in protein (rough ER)
and lipid (smooth ER) synthesis.

{{c1::Ribosomes}} are responsible for {{c2::protein synthesis}}. #flashcard
They can be found free in the cytoplasm or attached to rough ER.
```

### Step 2: Click Collect

Open the flashcard panel and click **Collect**. True Recall scans the entire note, finds all `#flashcard` tags, and imports every card in one operation.

After collecting:
- The `#flashcard` tags are **removed** from your note text (the content stays)
- Or, if configured in settings, the entire flashcard block is removed from the note
- Cards are stored in the SQLite database linked to this note

### Step 3: Review the results

A notification shows how many cards were created. Any duplicates are automatically skipped.

## Practical Examples

### Language Learning — 15 Vocabulary Cards

```markdown
Hund #flashcard-reverse
Dog

Katze #flashcard-reverse
Cat

Haus #flashcard-reverse
House

Buch #flashcard-reverse
Book

Wasser #flashcard-reverse
Water

Essen #flashcard-reverse
Food / To eat

Trinken #flashcard-reverse
To drink

Schlafen #flashcard-reverse
To sleep

Gehen #flashcard-reverse
To go / To walk

Sehen #flashcard-reverse
To see

Sprechen #flashcard-reverse
To speak

Lesen #flashcard-reverse
To read

Schreiben #flashcard-reverse
To write

Arbeiten #flashcard-reverse
To work

Lernen #flashcard-reverse
To learn
```

Paste this into the Add modal → **Save** → 30 cards created (15 original + 15 reversed).

### Programming — Mixed Card Types

```markdown
What does REST stand for? #flashcard
Representational State Transfer

{{c1::GET}} retrieves, {{c2::POST}} creates, {{c3::PUT}} updates, {{c4::DELETE}} removes resources. #flashcard

HTTP status {{c1::200}} means OK, {{c2::404}} means Not Found, {{c3::500}} means Server Error. #flashcard

What is an API? #flashcard-reverse
Application Programming Interface — a set of rules
for how software components communicate.
```

One save → 10 cards total (1 basic + 4 cloze + 3 cloze + 2 reversed).

## Tips for Batch Adding

1. **Write questions first, tag later** — Write all your Q&A pairs, then go back and add `#flashcard` tags with `Ctrl+3`
2. **Use Preview mode** — Toggle the Preview checkbox in the modal to verify markdown rendering before saving
3. **Paste from external sources** — You can paste formatted text from other apps; just add `#flashcard` tags where needed
4. **Use `#flashcard-reverse` for vocabulary** — One entry creates two cards automatically
5. **Use cloze for dense facts** — A single cloze sentence with `c1`, `c2`, `c3` generates 3 interconnected cards
6. **Images work too** — Paste images directly into the editor (`Ctrl+V`), they're saved to your vault automatically
