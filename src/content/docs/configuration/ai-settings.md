---
title: AI Settings
description: Configure AI-powered flashcard generation
---

AI settings control how True Recall generates flashcards from your notes using AI models via OpenRouter.

## Accessing Settings

1. Open Obsidian Settings (`Cmd/Ctrl+,`)
2. Scroll to "True Recall"
3. Select "AI" tab

## API Configuration

### OpenRouter API Key

Your OpenRouter API key for accessing AI models.

1. **Get a key** from [OpenRouter](https://openrouter.ai/keys)
2. **Copy** the key
3. **Paste** into the API Key field
4. Key is stored securely and masked

:::tip
OpenRouter provides free credits for new users. Check your balance at [openrouter.ai/account](https://openrouter.ai/account).
:::

### Testing Your Key

After entering your key:
1. Try generating flashcards from a note
2. If successful, key is valid
3. If error, check key and credits

## Model Selection

### Available Models

| Model | Provider | Speed | Quality | Cost |
|-------|----------|-------|---------|------|
| **Gemini 3 Flash** | Google | Fast | Good | $ |
| **Gemini 2.5 Pro** | Google | Medium | Excellent | $$$ |
| **GPT-5.1** | OpenAI | Medium | Excellent | $$$ |
| **GPT-4o** | OpenAI | Fast | Very Good | $$ |
| **Claude Opus 4.5** | Anthropic | Slow | Best | $$$$ |
| **Claude Sonnet 4** | Anthropic | Fast | Very Good | $$ |
| **Llama 4 Maverick** | Meta | Fast | Good | $ |

### Choosing a Model

**For most users**: Gemini 3 Flash
- Best balance of speed, quality, and cost
- Good for most note types
- Fast generation

**For complex content**: Gemini 2.5 Pro or GPT-5.1
- Better reasoning
- Handles technical content
- More expensive

**For nuanced topics**: Claude models
- Best for subjective content
- Handles context well
- Premium pricing

### Changing Models

Models can be changed anytime:
1. Open settings
2. Select new model from dropdown
3. Next generation uses new model

## Custom Prompt

### Default Prompt

True Recall uses a carefully crafted default prompt that:
- Creates atomic flashcards
- Balances question types
- Formats consistently
- Extracts key concepts

### Customizing the Prompt

Override the default for specialized needs:

```
Create flashcards from the following content.
Focus on: [your focus area]
Format: [your preferred format]
Style: [your preferred style]

Content:
{content}
```

### Available Variables

| Variable | Replaced With |
|----------|---------------|
| `{content}` | Note content |
| `{title}` | Note title |

### Example Custom Prompts

**For vocabulary:**
```
Create vocabulary flashcards.
Question: The word or phrase
Answer: Definition + example sentence in context

Content: {content}
```

**For technical concepts:**
```
Create technical flashcards covering:
1. Definitions of key terms
2. Comparisons between concepts
3. When to use each approach

Content: {content}
```

**For exam prep:**
```
Create exam-style questions:
- Short answer questions
- Conceptual questions
- Application scenarios

Content: {content}
```

### Reset to Default

Click "Reset to Default" to restore the original prompt.

## Generation Options

### Cards Per Generation

Approximate cards generated per request:
- Depends on content length
- Typically 5-15 cards per note
- More content = more cards

### Generation Quality Tips

**For better cards:**
1. Use well-structured notes
2. Include clear explanations
3. Define technical terms
4. Provide examples

**Note quality matters more than AI model choice.**

## Cost Management

### Understanding Costs

Cost depends on:
- **Input tokens**: Your note content
- **Output tokens**: Generated cards
- **Model**: Different pricing

### Typical Costs

| Content | Gemini Flash | GPT-4o |
|---------|--------------|--------|
| Short note (500 words) | ~$0.001 | ~$0.01 |
| Medium note (2000 words) | ~$0.003 | ~$0.03 |
| Long note (5000 words) | ~$0.008 | ~$0.08 |

### Monitoring Usage

Check OpenRouter dashboard:
- Track spending
- View usage history
- Set spending limits

## Troubleshooting

### "Invalid API Key"
- Verify key is correct
- Check for extra spaces
- Ensure key is active

### "Insufficient Credits"
- Add credits on OpenRouter
- Check spending limits
- Try cheaper model

### "Model Unavailable"
- Try different model
- Model may be temporarily down
- Check OpenRouter status

### Poor Quality Cards
- Try different model
- Improve note quality
- Customize the prompt
- Review and edit cards

### Generation Timeout
- Content may be too long
- Try shorter selection
- Check internet connection

## Best Practices

### API Key Security
- Don't share your key
- Don't commit to version control
- Use separate key for True Recall

### Cost Optimization
1. Start with Gemini Flash
2. Use expensive models only when needed
3. Generate from focused content
4. Review cards before saving

### Quality Workflow
1. Generate cards
2. Review in preview
3. Edit unclear questions
4. Delete duplicates
5. Save quality cards only
