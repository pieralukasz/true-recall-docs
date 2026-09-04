import { BUSINESS_ID, PERSON_ID, personFor, topics } from "./entity";
import { FAQ_PATH, faqItems } from "./faq";

// ─── ENCJA OPROGRAMOWANIA: TRUE RECALL ───────────────────────────────────────
//
// truerecall.app do tej pory nie emitowało ŻADNYCH danych strukturalnych, a to
// jest paradoksalnie najmocniej potwierdzona z zewnątrz encja w całym
// ekosystemie: wpis w oficjalnym katalogu Obsidian Community Plugins, publiczne
// repozytorium i wątek na r/ObsidianMD. Autorytet instytucjonalny i rynkowy
// istniał, ale nie był w żaden sposób opisany maszynie.
//
// `@id` jest kanoniczne i celowo takie samo jak w
// apps/lucaspiera-com/src/content/projects/true-recall.mdx (`entityId`),
// więc obie strony opisują JEDEN byt, a nie dwa niepowiązane produkty.
// ─────────────────────────────────────────────────────────────────────────────

export const SOFTWARE_ID = "https://truerecall.app/#software";
const WEBSITE_ID = "https://truerecall.app/#website";
const SOURCE_CODE_ID = "https://truerecall.app/#sourcecode";

const REPOSITORY = "https://github.com/pieralukasz/true-recall";
const OBSIDIAN_DIRECTORY = "https://community.obsidian.md/plugins/true-recall";

/**
 * Ceny — kategoria, którą John Mueller nazwał „danymi niezbędnymi": cena
 * i dostępność są praktycznie nieodczytywalne z samego tekstu strony.
 * Źródło prawdy: src/pages/pricing.astro. Trzymaj oba w zgodzie.
 */
const offers = [
  {
    "@type": "Offer",
    name: "Free Trial",
    description:
      "Sign up to try AI flashcard generation for free. No setup, no credit card.",
    price: 0,
    priceCurrency: "USD",
    url: "https://truerecall.app/login",
    availability: "https://schema.org/InStock",
  },
  {
    "@type": "Offer",
    name: "Pro",
    description:
      "Managed AI with tuned prompts, plus Image Occlusion and Typed Answers with AI grading.",
    priceCurrency: "USD",
    url: "https://truerecall.app/pricing/",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: 4,
      priceCurrency: "USD",
      billingDuration: 1,
      billingIncrement: 1,
      unitCode: "MON",
    },
  },
  {
    "@type": "Offer",
    name: "BYOK (bring your own key)",
    description:
      "Use your own OpenRouter, LM Studio or custom endpoint. Unlimited generation, you pay your provider directly.",
    price: 0,
    priceCurrency: "USD",
    url: "https://truerecall.app/getting-started/quick-start/",
    availability: "https://schema.org/InStock",
  },
];

const software = {
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_ID,
  name: "True Recall",
  alternateName: "True Recall (Obsidian plugin)",
  description:
    "Obsidian plugin that turns your notes into a spaced repetition system: AI-generated flashcards, FSRS v6 scheduling, and analytics without leaving your vault.",
  url: "https://truerecall.app/",
  applicationCategory: "EducationalApplication",
  applicationSubCategory: "Spaced repetition and flashcards",
  // Plugin działa wszędzie, gdzie działa Obsidian.
  operatingSystem: "Windows, macOS, Linux, iOS, Android",
  softwareRequirements: {
    "@type": "SoftwareApplication",
    name: "Obsidian",
    url: "https://obsidian.md/",
    sameAs: "https://www.wikidata.org/wiki/Q103994532",
  },
  installUrl: OBSIDIAN_DIRECTORY,
  license: "https://polyformproject.org/licenses/strict/1.0.0/",
  // Autorstwo po stronie OSOBY — sygnał, że to marka osobista, a nie „produkt
  // firmy X". Kod napisał człowiek i on go utrzymuje.
  author: { "@id": PERSON_ID },
  creator: { "@id": PERSON_ID },
  maintainer: { "@id": PERSON_ID },
  // …ale WYDAWCĄ jest działalność gospodarcza, bo to ona sprzedaje płatny plan
  // Pro (ustalone 2026-07-26). Rozdzielenie jest celowe: `author` odpowiada na
  // „kto to zrobił", `publisher` na „kto za to odpowiada i komu płacisz".
  // Zlepienie obu w osobę było uproszczeniem — przy produkcie z cenami to
  // organizacja stoi za transakcją.
  //
  // Węzeł organizacji nie jest wiszącą referencją: `personFor()` emituje go w
  // całości w `Person.worksFor`, w tym samym grafie.
  //
  // UWAGA: `publisher` węzła `WebSite` (niżej) zostaje OSOBĄ i to nie jest
  // niespójność. Podpowiada tak wprost rozdział 2 książki Podrez-Siamy:
  // „Jako wydawcę każdej ze stron ustawiłam osobę, nie organizację — sygnał,
  // że to marka osobista, nie »treść firmy X«". Strona to marka osobista,
  // produkt to towar firmy. Dwie różne rzeczy, dwa różne wydawcy.
  publisher: { "@id": BUSINESS_ID },
  about: [topics.spacedRepetition, topics.obsidian],
  featureList: [
    "AI Assistant that drafts flashcards from selected text",
    "FSRS v6 scheduling with 21 trainable parameters",
    "Flashcards stored alongside the Markdown notes they came from",
    "Retention analytics and workload forecasting",
    "Projects spanning multiple notes",
    "Per-device databases with review-progress merging",
  ],
  isAccessibleForFree: true,
  offers,
  // Zewnętrzne potwierdzenia istnienia encji — katalog Obsidiana i repo.
  sameAs: [OBSIDIAN_DIRECTORY, REPOSITORY],
};

/**
 * Repozytorium jako osobny węzeł.
 *
 * `codeRepository` NIE należy do `SoftwareApplication` — jego domeną w
 * schema.org jest wyłącznie `SoftwareSourceCode`. Poprawne spięcie obu bytów
 * to `targetProduct` (domena SoftwareSourceCode, zakres SoftwareApplication),
 * czyli: „ten kod źródłowy wytwarza ten produkt".
 */
const sourceCode = {
  "@type": "SoftwareSourceCode",
  "@id": SOURCE_CODE_ID,
  name: "True Recall — source code",
  url: REPOSITORY,
  codeRepository: REPOSITORY,
  programmingLanguage: "TypeScript",
  license: "https://polyformproject.org/licenses/strict/1.0.0/",
  author: { "@id": PERSON_ID },
  targetProduct: { "@id": SOFTWARE_ID },
  sameAs: REPOSITORY,
};

/**
 * Obszary wiedzy OSOBY w kontekście tej domeny.
 *
 * Dodane 2026-07-26. Do tej pory `truerecall.app` było jedyną domeną, na której
 * węzeł `Person` nie deklarował ani jednego tematu — a jest to domena z
 * NAJGŁĘBSZYM pokryciem treściowym w całym ekosystemie (55 stron dokumentacji).
 * Tematy niósł tam wyłącznie węzeł `SoftwareApplication` przez `about`, a osoba
 * była z nim spięta przez `author`/`creator`, więc sygnał szedł obejściem:
 * „ta osoba zrobiła narzędzie o powtórkach" zamiast „ta osoba zna się na
 * powtórkach". Dla oceny ekspertyzy osoby to nie to samo zdanie.
 *
 * Polityka „dowody, nie deklaracje" — każda pozycja ma pokrycie w treści TEJ
 * domeny; liczby stron policzone na `src/content/docs/` (bez `_later/`).
 * Wszystko jest gałęzią jednego drzewa: nauka → pamięć → powtórki → fiszki.
 */
const personTopics = [
  topics.learning, //            korzeń drzewa
  topics.spacedRepetition, //    12 stron
  topics.memory, //              15 stron
  topics.forgettingCurve, //     scheduling/fsrs-algorithm, getting-started/why-true-recall
  "FSRS spaced repetition algorithm", // 31 stron — najgłębszy temat, brak encji Wikidata
  topics.flashcards, //          rdzeń produktu
  topics.clozeDeletion, //       18 stron (creation/cloze-deletions + typy notatek)
  "Image occlusion", //          19 stron (creation/image-occlusion) — brak encji Wikidata
  topics.activeRecall, //        getting-started/why-true-recall
  topics.anki, //                19 stron (import/eksport, porównania)
  topics.learningAnalytics, //   views/statistics, views/dashboard, scheduling/workload-management
  topics.vocabularyLearning, //  review/type-in-mode, creation/note-types, scheduling/presets
  topics.obsidian, //            20 stron
];

/**
 * Graf emitowany na każdej stronie truerecall.app.
 * `pageUrl` / `title` pochodzą z aktualnie renderowanej strony Starlight.
 *
 * `kind` decyduje o dwóch dodatkowych węzłach (2026-07-26):
 *  - `"doc"` → dokłada `TechArticle`. Wcześniej każda z 55 stron dokumentacji
 *    była opisana wyłącznie jako `WebPage`, czyli „jakaś strona" — a to są
 *    artykuły techniczne z autorem i datą. `TechArticle` mówi to wprost.
 *  - strona FAQ → dokłada `FAQPage` zbudowany z `src/lib/faq.ts`, czyli z tej
 *    samej tablicy, którą renderuje `faq.mdx`. Google wymaga, żeby treść pod
 *    schematem FAQ była widoczna; wspólne źródło to gwarantuje.
 */
export function truerecallGraph({
  pageUrl,
  title,
  description,
  kind = "page",
}: {
  pageUrl: string;
  title: string;
  description?: string;
  kind?: "doc" | "page";
}) {
  const isFaq = new URL(pageUrl).pathname.replace(/\/*$/, "/") === FAQ_PATH;

  const techArticle =
    kind === "doc" && !isFaq
      ? [
          {
            "@type": "TechArticle",
            "@id": `${pageUrl}#article`,
            headline: title,
            ...(description ? { description } : {}),
            inLanguage: "en",
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
            isPartOf: { "@id": WEBSITE_ID },
            about: { "@id": SOFTWARE_ID },
            author: { "@id": PERSON_ID },
            publisher: { "@id": BUSINESS_ID },
          },
        ]
      : [];

  const faqPage = isFaq
    ? [
        {
          "@type": "FAQPage",
          "@id": `${pageUrl}#faq`,
          url: pageUrl,
          name: title,
          inLanguage: "en",
          isPartOf: { "@id": WEBSITE_ID },
          about: { "@id": SOFTWARE_ID },
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        },
      ]
    : [];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: "https://truerecall.app/",
        name: "True Recall",
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
        about: { "@id": SOFTWARE_ID },
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        ...(description ? { description } : {}),
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
      },
      ...techArticle,
      ...faqPage,
      software,
      sourceCode,
      personFor({ site: "https://truerecall.app/", knowsAbout: personTopics }),
    ],
  };
}
