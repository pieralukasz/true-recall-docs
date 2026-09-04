// ─── FAQ: JEDNO ŹRÓDŁO DLA TREŚCI I DLA SCHEMATU ─────────────────────────────
//
// Google wymaga, żeby treść opisana schematem `FAQPage` była **widoczna na
// stronie**. Dlatego te pytania nie są zduplikowane: `src/content/docs/faq.mdx`
// renderuje dokładnie tę tablicę, a `software-entity.ts` buduje z niej węzeł
// `FAQPage`. Jeśli edytujesz odpowiedź, zmienia się i tekst, i dane
// strukturalne, więc nie da się ich rozjechać.
//
// DLACZEGO to powstało (2026-07-26): truerecall.app miało 64 strony i ZERO
// `FAQPage`, mimo że jest najgłębszym klastrem treściowym w całym ekosystemie.
// Google nie cytuje stron, cytuje **pasaże**, a pytanie z odpowiedzią jest
// gotowym pasażem. Dla porównania: elektryk.piera.pl, klaster czterokrotnie
// mniejszy, miał ich 14.
//
// ZASADA: każda odpowiedź musi mieć pokrycie w istniejącej dokumentacji i w
// komentarzu wskazanie, skąd pochodzi. Nie dopisuj pytań „na wyczucie":
// wymyślone zachowanie produktu jest gorsze niż brak FAQ.
// ─────────────────────────────────────────────────────────────────────────────

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    // źródło: getting-started/installation.md § Requirements (manifest.json minAppVersion 1.11.4)
    question: "What do I need to run True Recall?",
    answer:
      "Obsidian 1.11.4 or later (required since True Recall 2.4.0) and an Obsidian vault, on desktop, iOS, or Android. " +
      "True Recall installs from the Obsidian Community Plugins directory, so you do not need BRAT or any manual file copying.",
  },
  {
    // źródło: getting-started/installation.md § Requirements, CHANGELOG 2.2.0 (Mobile)
    question: "Does True Recall work on a phone or tablet?",
    answer:
      "Yes. Since version 2.2.0 the plugin runs in Obsidian on iOS and Android as well as on desktop, with review, " +
      "the Flashcard Panel, the dashboard and the quick editor laid out for phones. A few tools stay desktop only: " +
      "the image occlusion editor, the Local API used by the CLI and MCP server, and the full statistics charts.",
  },
  {
    // źródło: getting-started/introduction.md § Cards are linked to notes
    question: "How is True Recall different from Anki?",
    answer:
      "In Anki, flashcards live in decks kept separately from the material they came from. " +
      "In True Recall every card stays linked to the note you created it from, so a card always " +
      "carries the context it was born in.",
  },
  {
    // źródło: scheduling/fsrs-algorithm.md + featureList w software-entity.ts
    question: "Which spaced repetition algorithm does True Recall use?",
    answer:
      "FSRS v6, with 21 trainable parameters that adapt to your own review history. " +
      "It is the most advanced open-source scheduling algorithm for long-term memory.",
  },
  {
    // źródło: offers w software-entity.ts (zweryfikowane na truerecall.app/pricing)
    question: "How much does True Recall cost?",
    answer:
      "There is a free tier you can sign up for without a credit card, a Pro plan at 4 USD per month " +
      "for the AI study assistant, and a BYOK option that costs nothing extra: you use your own " +
      "OpenRouter API key and pay OpenRouter directly.",
  },
  {
    // źródło: getting-started/what-pro-includes.md (bramki proKey w kodzie wtyczki)
    question: "What do I get with True Recall Pro that is not free?",
    answer:
      "Pro adds managed AI with an included monthly budget and server-tuned prompts, so you need no API key, " +
      "plus two Pro-only features: Image Occlusion cards (with AI region detection) and Typed Answers graded " +
      "by AI. Everything else, including FSRS scheduling, projects, statistics, Anki import and Cloud Sync, is free.",
  },
  {
    // źródło: configuration/ai-settings.md § AI Provider
    question: "Can I use my own AI provider or API key?",
    answer:
      "Yes. The AI provider setting lets you route generation through your own OpenRouter key (BYOK), " +
      "a local LM Studio server, or a custom OpenAI-compatible endpoint, which means unlimited generation " +
      "and your own choice of prompts and models.",
  },
  {
    // źródło: data/import-export.md
    question: "Can I import my existing Anki collection?",
    answer:
      "Yes. True Recall supports full Anki import and export of .apkg files from the Data & Backup tab, " +
      "plus CSV/TSV export as a free data tool. AI-assisted organisation during import uses your active " +
      "AI provider and requires BYOK or Pro.",
  },
  {
    // źródło: data/device-databases.md, data/cloud-sync.md, CHANGELOG 2.2.0 (deterministic FSRS replay)
    question: "What happens if I study on more than one device?",
    answer:
      "Every device, including phones and tablets, keeps its own SQLite database inside the .true-recall folder " +
      "in your vault, so two machines never overwrite each other's review history. Cloud Sync (free, with a " +
      "True Recall account) or shared vault mode merges the databases by replaying the review log through FSRS, " +
      "so review progress is merged rather than replaced.",
  },
  {
    // źródło: LICENSE / README (PolyForm Strict 1.0.0) + license w software-entity.ts
    question: "Is True Recall open source?",
    answer:
      "The source code is public, but it is released under the PolyForm Strict 1.0.0 licence, which is " +
      "not an open-source licence. Any use beyond what that licence allows (production use inside a " +
      "business, paid services built on True Recall, or distributing derivative works) needs a separate " +
      "commercial licence.",
  },
];

/** Ścieżka strony, na której FAQ jest widoczne. Schemat emitujemy tylko tam. */
export const FAQ_PATH = "/faq/";
