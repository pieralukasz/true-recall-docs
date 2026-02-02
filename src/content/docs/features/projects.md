---
title: Projects System
description: Organize flashcards into study groups spanning multiple notes
---

Projects help you organize flashcards into logical groups for focused study. A project can span multiple notes, and a note can belong to multiple projects.

## What Are Projects?

Projects are named collections like:
- "Spanish Course"
- "Machine Learning Fundamentals"
- "Book: Atomic Habits"
- "Exam: Biology 101"

### Key Concepts

- **Notes belong to projects** (not individual cards)
- **Cards inherit** their source note's project memberships
- **Many-to-many**: Notes can be in multiple projects
- **Review by project**: Study a specific topic area

## Creating Projects

### From a Note

1. **Open the note** you want to add to a project
2. **Command Palette** → "Add current note to project"
3. **Type a new project name** or select existing
4. **Confirm** to add

### From Context Menu

1. **Right-click** a file in the file explorer
2. **Select** "Create project from this note"
3. **Project created** with note's name

### Manual Frontmatter

Add directly to note frontmatter:

```yaml
---
true_recall_projects:
  - Machine Learning
  - Python Course
  - My Research
---
```

## Managing Projects

### Projects View

Open via Command Palette → "Open projects panel":

- **All projects listed** with card counts
- **Due/New cards** per project
- **Click to review** project's cards
- **Rename or delete** projects

### Adding Notes to Projects

Multiple methods:

1. **Command**: "Add current note to project"
2. **Modal**: Select notes from project modal
3. **Frontmatter**: Edit YAML directly

### Removing Notes

1. Open the note
2. Edit frontmatter
3. Remove project from `true_recall_projects` array

Or use the project modal interface.

## Reviewing by Project

### Start Project Review

1. **Open Projects view**
2. **Click a project** name
3. **Custom session opens** filtered to that project
4. **Start reviewing**

### Session Builder

Use the session builder for more control:

1. Open session builder
2. Select "Project" filter
3. Choose one or more projects
4. Configure other options
5. Start review

## Project Statistics

Each project shows:
- **Total cards**: All cards in project
- **New**: Unreviewed cards
- **Due**: Cards due for review
- **Learning**: Cards in learning phase

## Use Cases

### Course Organization

```yaml
true_recall_projects:
  - CS 101: Algorithms
  - CS 101: Data Structures
  - Semester 3
```

### Book Notes

```yaml
true_recall_projects:
  - "Book: Deep Work"
  - Productivity
  - Career
```

### Language Learning

```yaml
true_recall_projects:
  - Spanish
  - Spanish: Vocabulary
  - Spanish: Grammar
```

### Research

```yaml
true_recall_projects:
  - PhD Research
  - Literature Review
  - Methodology
```

## Best Practices

### Naming Conventions

Use consistent prefixes:
- `Book: <title>` for book notes
- `Course: <name>` for educational content
- `Project: <name>` for work projects
- `Topic: <name>` for subject areas

### Hierarchy Through Naming

Create pseudo-hierarchy:
```
Spanish
Spanish: Vocabulary
Spanish: Vocabulary: Verbs
Spanish: Grammar
Spanish: Grammar: Conjugation
```

### Don't Over-Organize

- Start with a few broad projects
- Add specificity as needed
- Too many projects = fragmentation

### Review Rotation

- Review main projects daily
- Rotate through secondary projects weekly
- Archive completed projects (remove from notes)

## Project Workflows

### Exam Preparation

1. Create project: "Exam: [Subject] [Date]"
2. Add all relevant notes
3. Set higher daily limits for project
4. Review project exclusively before exam
5. Archive after exam

### Book Reading

1. Create project when starting book
2. Add notes as you read
3. Review project to reinforce learning
4. Keep project active until finished

### Ongoing Learning

1. Create topic projects
2. Add notes from various sources
3. Regular project reviews
4. Update as you learn more

## Technical Details

### Storage

Projects are stored in note frontmatter:
```yaml
true_recall_projects:
  - Project A
  - Project B
```

### Indexing

True Recall indexes project associations on load:
- Builds project → note map
- Builds note → cards map
- Enables fast project queries

### Sync

Projects sync with cloud (if enabled):
- Frontmatter changes sync with vault
- No separate project database

## Troubleshooting

### Project Not Showing Cards

- Verify notes are in project (check frontmatter)
- Ensure notes have linked flashcards
- Rebuild index: reload plugin

### Duplicate Projects

- Check for case differences ("Project" vs "project")
- Check for trailing spaces
- Standardize naming

### Cards in Wrong Project

- Check source note's frontmatter
- Cards follow their source note
- Edit frontmatter to correct
