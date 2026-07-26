// ─── KANONICZNA ENCJA OSOBY ──────────────────────────────────────────────────
//
// Jedna encja `Person` dla całego ekosystemu domen:
//   lucaspiera.com · piera.pl · elektryk.piera.pl · elektronika.piera.pl
//   trening.piera.pl · truerecall.app
//
// Entity Home (kanoniczne źródło faktów o osobie): https://lucaspiera.com/about/
//
// DLACZEGO to istnieje: wcześniej każda domena deklarowała własny `@id` osoby
// (`https://piera.pl/#person`, `https://elektryk.piera.pl/#person`, …), a strona
// elektryka nie miała nawet `sameAs`. Dla Google i modeli językowych były to
// trzy różne osoby o podobnym nazwisku, a nie jeden byt z wieloma kontekstami.
// Jeden wspólny `@id` + `sameAs` na każdej domenie scala je w jedną encję.
//
// UWAGA: ten plik jest ŚWIADOMIE zduplikowany w każdej odnodze — repo nie ma
// współdzielonych pakietów ani workspace (patrz CLAUDE.md w korzeniu).
// Każda zmiana MUSI zostać ręcznie przeniesiona do wszystkich pozostałych
// kopii w tym samym zadaniu, inaczej encja znowu się rozjedzie.
// Kopie: apps/{lucaspiera-com,piera-pl,elektryk,elektronika,trening}/src/lib/entity.ts
// oraz (w osobnym repo) true-recall-docs/src/lib/entity.ts
// ─────────────────────────────────────────────────────────────────────────────

/** Kanoniczny identyfikator encji osoby. Ten sam na wszystkich domenach. */
export const PERSON_ID = "https://lucaspiera.com/#person";

/** Entity Home — jedna strona, która jest źródłem prawdy o osobie. */
export const ENTITY_HOME = "https://lucaspiera.com/about/";

/** Kanoniczny identyfikator encji oprogramowania True Recall (inna domena). */
export const TRUE_RECALL_ID = "https://truerecall.app/#software";

/** Wszystkie domeny, którymi zarządza ta sama osoba. */
export const ownedSites = [
  "https://lucaspiera.com/",
  "https://piera.pl/",
  "https://elektryk.piera.pl/",
  "https://elektronika.piera.pl/",
  "https://trening.piera.pl/",
  "https://truerecall.app/",
];

/**
 * Profile POTWIERDZONE przez właściciela (2026-07-26).
 *
 * Wpisuj tu wyłącznie konta, do których Łukasz ma dostęp i które potwierdził.
 * `sameAs` jest sygnałem tożsamości — wskazanie cudzego profilu albo konta,
 * którego nie kontrolujesz, psuje encję zamiast ją wzmacniać.
 *
 * Odrzucone świadomie: `tiktok.com/@lukisarg` — konto o zbieżnej nazwie,
 * ale NIE należy do Łukasza (potwierdzone 2026-07-26). Nie dodawać.
 */
export const verifiedProfiles = [
  "https://github.com/pieralukasz",
  "https://www.linkedin.com/in/lukasz-piera/",
  "https://www.facebook.com/pieralukasz",
];

/**
 * Encje tematyczne, które Google zna już z Wikidata. Podpięcie się pod nie
 * przez `sameAs` jest mocniejszym sygnałem niż goły string, bo nie wymaga
 * od maszyny zgadywania, o które znaczenie słowa chodzi
 * ("Obsidian" to też szkło wulkaniczne i trzy gry wideo).
 */
export const topics = {
  spacedRepetition: {
    "@type": "Thing",
    name: "Spaced repetition",
    sameAs: "https://www.wikidata.org/wiki/Q1095869",
  },
  obsidian: {
    "@type": "Thing",
    name: "Obsidian (note-taking software)",
    sameAs: "https://www.wikidata.org/wiki/Q103994532",
  },
  physics: {
    "@type": "Thing",
    name: "Physics",
    sameAs: "https://www.wikidata.org/wiki/Q413",
  },
} as const;

/** Politechnika Łódzka — encja, którą Google już zna (autorytet instytucjonalny). */
const alumniOf = {
  "@type": "CollegeOrUniversity",
  name: "Łódź University of Technology",
  alternateName: "Politechnika Łódzka",
  url: "https://www.p.lodz.pl/",
  sameAs: "https://www.wikidata.org/wiki/Q2140369",
};

/**
 * Dyplom inżyniera — Politechnika Łódzka, Wydział Mechaniczny,
 * kierunek Mechanika i Budowa Maszyn.
 *
 * Tytuł „inżynier" jest modelowany na trzy sposoby, bo każdy odpowiada na inne
 * pytanie maszyny:
 *  - `honorificPrefix: "inż."` — jak brzmi tytuł przed nazwiskiem,
 *  - `jobTitle: "Mechanical Engineer"` — jaką rolę pełni,
 *  - `hasCredential` (poniżej) — CZYM to jest potwierdzone i przez kogo.
 * Trzecie jest najmocniejsze: to weryfikowalne powiązanie z encją uczelni,
 * którą Google już zna, a nie deklaracja na własnej stronie.
 */
const engineeringDegree = {
  "@type": "EducationalOccupationalCredential",
  name: "Inżynier (engineer's degree)",
  alternateName: "inż.",
  credentialCategory: "degree",
  educationalLevel: "Engineer's degree (inż.)",
  competencyRequired: "Mechanika i Budowa Maszyn",
  about: {
    "@type": "Thing",
    name: "Mechanical engineering",
    sameAs: "https://www.wikidata.org/wiki/Q101333",
  },
  recognizedBy: alumniOf,
};

/**
 * Rdzeń encji osoby — IDENTYCZNY na każdej domenie.
 *
 * Świadomie nie ma tu `description` ani zlokalizowanych wariantów `jobTitle`:
 * dwa różne opisy pod jednym `@id` to sprzeczny sygnał, a nie bogatszy.
 * Kontekst językowy nadają węzły `WebSite` / `WebPage` każdej domeny, a
 * kontekst tematyczny — `knowsAbout` dopisywane per domena (patrz `personFor`).
 */
const canonicalPerson = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Lucas Piera",
  alternateName: ["Łukasz Piera", "Lukasz Piera"],
  url: ENTITY_HOME,
  mainEntityOfPage: { "@id": "https://lucaspiera.com/about/#webpage" },
  image: "https://lucaspiera.com/profile.jpg",
  email: "mailto:pieralukasz@gmail.com",
  honorificPrefix: "inż.",
  jobTitle: ["Software Engineer", "Electrician", "Mechanical Engineer"],
  alumniOf,
  hasCredential: [engineeringDegree],
  // schema.org NIE ma sposobu na wyrażenie poziomu biegłości w `knowsLanguage`
  // — jest tylko „zna / nie zna". Włoski jest tu więc uproszczeniem
  // (realnie: podstawy). Jeśli ma być precyzyjnie, usuń ten wpis.
  knowsLanguage: [
    { "@type": "Language", name: "Polish", alternateName: "pl" },
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Italian", alternateName: "it" },
  ],
};

interface PersonOptions {
  /** Origin domeny, na której węzeł jest emitowany — wypada z `sameAs`. */
  site: string;
  /** Obszary wiedzy w kontekście TEJ domeny. Wartości sumują się między domenami. */
  knowsAbout?: readonly (string | Record<string, unknown>)[];
  /** Dodatkowe pola specyficzne dla domeny (np. `hasCredential`). */
  extra?: Record<string, unknown>;
}

/**
 * Buduje węzeł `Person` dla konkretnej domeny: kanoniczny rdzeń + `sameAs`
 * wskazujący na wszystkie pozostałe domeny i potwierdzone profile.
 */
export function personFor({ site, knowsAbout, extra }: PersonOptions) {
  const normalized = site.endsWith("/") ? site : `${site}/`;

  // `hasCredential` musi być SCALANE, nie nadpisywane. Zwykły spread `...extra`
  // wywalałby dyplom inżyniera wszędzie, gdzie domena dokłada własne
  // poświadczenia (elektryk + SEP) — czyli cichy zanik atrybutu encji.
  const { hasCredential: extraCredential, ...restExtra } = extra ?? {};
  const extraCredentials = Array.isArray(extraCredential)
    ? extraCredential
    : extraCredential
      ? [extraCredential]
      : [];

  return {
    ...canonicalPerson,
    ...(knowsAbout && knowsAbout.length > 0 ? { knowsAbout } : {}),
    sameAs: [
      ...ownedSites.filter((url) => url !== normalized),
      ...verifiedProfiles,
    ],
    ...restExtra,
    hasCredential: [...canonicalPerson.hasCredential, ...extraCredentials],
  };
}
