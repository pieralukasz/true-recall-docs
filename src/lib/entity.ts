// ─── KANONICZNA ENCJA OSOBY ──────────────────────────────────────────────────
//
// Jedna encja `Person` dla całego ekosystemu domen:
//   lucaspiera.com · piera.pl · elektryk.piera.pl · truerecall.app
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
// Kopie: apps/{lucaspiera-com,piera-pl,elektryk}/src/lib/entity.ts
// oraz (w osobnym repo) true-recall-docs/src/lib/entity.ts
// Sprawdzenie: `md5 apps/*/src/lib/entity.ts` — wszystkie sumy identyczne.
// ─────────────────────────────────────────────────────────────────────────────

/** Kanoniczny identyfikator encji osoby. Ten sam na wszystkich domenach. */
export const PERSON_ID = "https://lucaspiera.com/#person";

/** Entity Home — jedna strona, która jest źródłem prawdy o osobie. */
export const ENTITY_HOME = "https://lucaspiera.com/about/";

/** Kanoniczny identyfikator encji oprogramowania True Recall (inna domena). */
export const TRUE_RECALL_ID = "https://truerecall.app/#software";

/**
 * Wszystkie domeny, którymi zarządza ta sama osoba. Ta tablica karmi `sameAs`
 * na KAŻDEJ domenie (patrz `personFor`), więc adres, który przestaje odpowiadać,
 * nie jest tu neutralny — to wiszący sygnał tożsamości, gorszy niż jego brak.
 *
 * USUNIĘTE 2026-07-28 — konsolidacja ekosystemu z 6 domen do 4:
 *   elektronika.piera.pl — placeholder „wkrótce" na `noindex`, nigdy nie
 *     zaindeksowany, 2 pozycje `knowsAbout` bez pokrycia w treści. Elektronika
 *     i warsztat wchodzą jako kategoria na piera.pl / lucaspiera.com, bo klaster
 *     o nauce był najcieńszy w całym ekosystemie, a subdomena nie dziedziczy
 *     autorytetu domeny nadrzędnej.
 *   trening.piera.pl — placeholder na `noindex`, świadomie 0 `knowsAbout`
 *     (YMYL bez kwalifikacji). Linia porzucona, nie odłożona.
 *
 * Dwie puste odnogi pod jednym nazwiskiem to nie zero, a sygnał wzorca
 * (Podrez-Siama, rozdz. 4.3). Nie dopisuj tu domeny, dopóki nie ma na niej treści.
 */
export const ownedSites = [
  "https://lucaspiera.com/",
  "https://piera.pl/",
  "https://elektryk.piera.pl/",
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
  learning: {
    "@type": "Thing",
    name: "Learning",
    sameAs: "https://www.wikidata.org/wiki/Q133500",
  },
  spacedRepetition: {
    "@type": "Thing",
    name: "Spaced repetition",
    sameAs: "https://www.wikidata.org/wiki/Q1095869",
  },
  memory: {
    "@type": "Thing",
    name: "Memory",
    sameAs: "https://www.wikidata.org/wiki/Q492",
  },
  vocabularyLearning: {
    "@type": "Thing",
    name: "Vocabulary learning",
    sameAs: "https://www.wikidata.org/wiki/Q48842322",
  },
  obsidian: {
    "@type": "Thing",
    name: "Obsidian (note-taking software)",
    sameAs: "https://www.wikidata.org/wiki/Q103994532",
  },
  // Dodane 2026-07-26. „Anki" i „Flashcards" były wcześniej gołymi stringami —
  // a to dokładnie ten przypadek, przed którym ostrzega komentarz wyżej:
  // Wikidata zna trzy różne „Anki" (oprogramowanie Q557318, imię żeńskie
  // Q19796915, grę wideo z 2015 Q124063060). Bez zakotwiczenia maszyna zgaduje.
  flashcards: {
    "@type": "Thing",
    name: "Flashcards",
    sameAs: "https://www.wikidata.org/wiki/Q1820374",
  },
  anki: {
    "@type": "Thing",
    name: "Anki",
    sameAs: "https://www.wikidata.org/wiki/Q557318",
  },
  activeRecall: {
    "@type": "Thing",
    name: "Active recall",
    sameAs: "https://www.wikidata.org/wiki/Q4677578",
  },
  forgettingCurve: {
    "@type": "Thing",
    name: "Forgetting curve",
    sameAs: "https://www.wikidata.org/wiki/Q949167",
  },
  // Zakotwiczenie celowo wskazuje encję „cloze test" (Q951968) — Wikidata nie ma
  // osobnego bytu na „cloze deletion" z fiszek, a termin z Anki pochodzi wprost
  // od tej techniki. Nazwę zostawiamy taką, jakiej realnie używa dokumentacja.
  clozeDeletion: {
    "@type": "Thing",
    name: "Cloze deletion",
    sameAs: "https://www.wikidata.org/wiki/Q951968",
  },
  learningAnalytics: {
    "@type": "Thing",
    name: "Learning analytics",
    sameAs: "https://www.wikidata.org/wiki/Q2845208",
  },
} as const;

/**
 * Ta sama encja Wikidata pod inną etykietą językową.
 *
 * Wartości `knowsAbout` sumują się pod jednym `@id`, a dwa `Thing` z tym samym
 * `sameAs` to dla maszyny jeden byt o dwóch nazwach — więc polska etykieta na
 * piera.pl wzbogaca encję (daje polski token do zaczepienia), a nie duplikuje
 * jej. Q-ID zostaje w JEDNYM miejscu, w `topics`.
 */
export function localized(
  topic: { readonly "@type": string; readonly name: string; readonly sameAs: string },
  name: string,
) {
  return { ...topic, name };
}

// Sprawdzone 2026-07-26: FSRS (Free Spaced Repetition Scheduler) NIE ma encji w
// Wikidata — wyszukiwanie zwraca towarzystwo naukowe rybaków i fińskie służby
// ratownictwa morskiego. Dlatego zostaje gołym stringiem. Nie podpinaj go pod
// pierwsze Q-ID z listy.
// „Image occlusion" — również bez encji (jedyne trafienie to patent US11514640).

// USUNIĘTE 2026-07-26 (polityka „dowody, nie deklaracje"):
//   physics (Q413)        — zero treści, about.md mówi „I'm not an expert in any of it"
//   Software engineering  — inne drzewo tematyczne niż oś nauki/pamięci
//   TypeScript            — jak wyżej
//   AI-assisted learning  — brak wpisu na blogu; wróci, gdy powstanie treść
// Nie dopisuj ich z powrotem bez treści, która je pokrywa.

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
 * Jednoosobowa działalność gospodarcza (NIP 7272848245).
 *
 * ⚠️ To JEDEN podmiot prawny obsługujący DWIE linie usług: elektrykę **oraz IT**
 * (potwierdzone 2026-07-26). Węzeł ma `@type: Electrician`, bo taka jest jego
 * lokalna twarz na elektryk.piera.pl i to ten podtyp `LocalBusiness` pomaga w
 * zapytaniach o elektryka w Poznaniu.
 *
 * **Nie twórz drugiej `Organization` na usługi IT.** Dwa węzły z tym samym
 * NIP-em to dla maszyny albo jeden byt opisany sprzecznie, albo dwie firmy,
 * z których jedna nie istnieje w rejestrze. Jeśli kiedyś powstanie strona z
 * ofertą IT, rozszerz TEN węzeł (kolejny `hasOfferCatalog` albo `department`) —
 * nie dubluj podmiotu.
 *
 * Linia IT tej JDG MA pokrycie (ustalone 2026-07-26 — wcześniej twierdziłem
 * inaczej i to było błędne):
 *   · produkt — True Recall, sprzedawany przez tę działalność (płatny plan Pro).
 *     Dlatego `publisher` węzła `SoftwareApplication` na truerecall.app wskazuje
 *     na TĘ organizację, nie na osobę. Osoba zostaje jako `author`/`creator`/
 *     `maintainer`, bo napisała kod — ale sprzedaje firma.
 *   · usługi B2B — praca nad produktem TapIn (dawniej Gigaverse) fakturowana
 *     z tej działalności. TapIn jest KLIENTEM, nie pracodawcą, więc świadomie
 *     NIE ma go w `worksFor`. Wpisanie klienta jako pracodawcy byłoby
 *     nieprawdą o zatrudnieniu, a encja ma być weryfikowalna.
 *
 * Katalog usług (`hasOfferCatalog`) zostaje elektryczny, bo tylko usługi
 * elektryczne mają własne strony ofertowe. Produkt IT ma własną domenę.
 *
 * Ten sam `@id`, co węzeł `Electrician` na elektryk.piera.pl — dzięki temu
 * `worksFor` nie jest wiszącą referencją na pozostałych domenach (jest tu
 * pełnym obiektem), a na elektryk.piera.pl scala się z bogatszym węzłem
 * (telefon, NIP, adres, katalog usług). Relacja istniała dotąd tylko w jedną
 * stronę, jako `founder` na firmie; dwukierunkowa jest mocniejszym sygnałem.
 */
export const BUSINESS_ID = "https://elektryk.piera.pl/#business";

const soleProprietorship = {
  "@type": "Organization",
  "@id": BUSINESS_ID,
  name: "Łukasz Piera, elektryk Poznań",
  // `name` jest handlową nazwą linii elektrycznej i zostaje taka, bo pracuje w
  // lokalnych zapytaniach („elektryk Poznań"). Ale ten sam węzeł jest teraz
  // wydawcą produktu software'owego, a „elektryk Poznań" jako jedyna nazwa
  // wydawcy wtyczki do Obsidiana opisuje podmiot za wąsko.
  //
  // `legalName` bierzemy z własnego dokumentu prawnego, nie z domysłu:
  // apps/elektryk/src/pages/regulamin.astro § 1 mówi „Serwis elektryk.piera.pl
  // prowadzę ja, Łukasz Piera, elektryk z Poznania, NIP: 7272848245".
  // Zgodność `legalName` z `Person.alternateName` jest tu poprawna i pożądana —
  // w JDG podmiot gospodarczy i osoba to ten sam człowiek, a to wzmacnia
  // powiązanie osoba ↔ firma zamiast je rozmywać.
  legalName: "Łukasz Piera",
  url: "https://elektryk.piera.pl/",
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
  // Każdy z tych trzech ma pokrycie: Software Engineer → True Recall + projekty
  // produkcyjne, Electrician → elektryk.piera.pl (26 stron, NIP, katalog usług),
  // Mechanical Engineer → dyplom w `hasCredential` (weryfikowalny przez encję
  // uczelni, nie deklaracja).
  //
  // ⛔ ODRZUCONE ŚWIADOMIE 2026-07-26: „Tutor" / korepetytor.
  // Łukasz realnie udziela korepetycji z fizyki, ale zdecydował, że ta linia
  // zostaje POZA marką — i tak jest lepiej, bo:
  //   · zero treści na ten temat na wszystkich 6 domenach (sprawdzone: 0 trafień
  //     na „korepetycj"), więc byłaby to deklaracja bez dowodu;
  //   · byłaby SPRZECZNA z piera.pl/o-mnie, gdzie fizyka jest wymieniona jako
  //     dziedzina chłonięta, wraz ze zdaniem „Nie jestem specjalistą od
  //     wszystkiego". Sprzeczność w obrębie jednej encji to sygnał ujemny,
  //     nie tylko słaby — obniża `entity confidence`.
  // To także powód, dla którego `physics` (Q413) nie wraca do `knowsAbout`.
  // Kolejność jest odwrotna, niż się wydaje: najpierw strona z ofertą, POTEM
  // etykieta. Nie dopisuj tego bez treści, która to pokrywa.
  jobTitle: ["Software Engineer", "Electrician", "Mechanical Engineer"],
  alumniOf,
  worksFor: soleProprietorship,
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
