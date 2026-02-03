---
title: Bring Your Own Key (BYOK)
description: Use your own API key for flashcard generation without credits
---

True Recall supports using your own API key from OpenRouter or OpenAI. This gives you full control over costs and access to all available AI models.

## Supported Providers

| Provider | Recommended | Notes |
|----------|-------------|-------|
| [OpenRouter](https://openrouter.ai) | Yes | Access to 100+ models, pay-per-use |
| [OpenAI](https://platform.openai.com) | - | Direct access to GPT models |

:::tip[Recommendation]
We recommend **OpenRouter** for most users. It provides access to many models (including GPT-4, Claude, Llama) with transparent pricing and no monthly fees.
:::

## How to Configure

1. **Get your API key**
   - Go to [OpenRouter](https://openrouter.ai) and create an account
   - Navigate to Keys and create a new API key
   - Copy the key (starts with `sk-or-...`)

2. **Configure in True Recall**
   - Open Obsidian Settings
   - Navigate to **True Recall** → **AI Settings**
   - Paste your API key in the **API Key** field
   - Select your preferred model

3. **Start generating**
   - Your own API key will be used for all generations
   - No credits required!

## Benefits of BYOK

- **No credit limits** - Generate as many flashcards as you need
- **Full cost control** - Pay only for what you use directly to the provider
- **Model choice** - Access to all models supported by your provider
- **Privacy** - API calls go directly to the provider

## Cost Comparison

| Method | Cost per 100 flashcards | Notes |
|--------|------------------------|-------|
| True Recall Credits | ~$0.50 | Simple, no setup |
| OpenRouter (GPT-4o-mini) | ~$0.02 | Requires API key |
| OpenRouter (Claude Haiku) | ~$0.03 | Requires API key |

:::note
Actual costs depend on the model chosen and the length of your notes. The estimates above are based on average usage.
:::

## Troubleshooting

### "Invalid API key" error
- Make sure you copied the full key including the `sk-` prefix
- Check that your OpenRouter account has credits loaded
- Verify the key hasn't been revoked

### Generation fails with timeout
- Some models may be slower; try a faster model like GPT-4o-mini
- Check your internet connection
- The provider might be experiencing issues

## Next Steps

- Learn about the [Credits System](/credits-pricing/credits/) if you prefer not to manage API keys
- Configure [AI Settings](/configuration/ai-settings/) for model selection and parameters
