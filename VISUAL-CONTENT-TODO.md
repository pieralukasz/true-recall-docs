# Visual Content TODO

Lista wszystkich miejsc w dokumentacji wymagających materiałów wizualnych.

---

## 🎬 Tutorial wideo (2 min) — Getting Started

**Rekomendacja: TAK, zdecydowanie nagraj.**

2-minutowy, ładnie zmontowany tutorial to najlepsza inwestycja w onboarding. Umieść go na stronie `getting-started/introduction.md` lub `getting-started/quick-start.md` jako embed (YouTube/Vimeo).

### Sugerowany scenariusz (~2 min)

| Czas | Co pokazać | Sekcja |
|------|-----------|--------|
| 0:00–0:15 | Otwarcie Obsidian z True Recall, szybki widok Dashboard | Intro |
| 0:15–0:35 | Zaznaczenie tekstu → Selection Toolbar → klik "Auto" → karty w nocie | Tworzenie kart |
| 0:35–0:50 | Flashcard Panel → pulsujący Collect → zebranie kart | Zbieranie |
| 0:50–1:10 | Sesja review: pytanie → Space → odpowiedź → rating (2-3 karty) | Review |
| 1:10–1:25 | Type-in mode: wpisanie odpowiedzi → porównanie → ocena | Type-in |
| 1:25–1:40 | Dashboard: statystyki, drag-and-drop organizacja projektów | Dashboard |
| 1:40–1:55 | Image Occlusion: zaznaczenie regionów na obrazie, AI detect | IO |
| 1:55–2:00 | Ekran końcowy z logo + link do docs | Outro |

**Wskazówki produkcyjne:**
- Nagraj w ciemnym motywie Obsidian (lepiej wygląda na wideo)
- Użyj dużego fontu (14-16px) żeby tekst był czytelny na małych ekranach
- Dodaj subtelne animacje/transitions między sekcjami
- Podłóż spokojną muzykę w tle (bez narracji głosowej lub z krótką narracją)
- Rozdzielczość: 1920x1080, 60fps

---

## 📸 Zdjęcia / Screenshoty (statyczny UI)

| # | Plik | Linia | Sekcja | Co pokazać |
|---|------|-------|--------|------------|
| 1 | `review/review-interface.md` | 21 | Opening the Review View | Jak otworzyć widok review (command palette, dashboard, panel) |
| 2 | `review/review-interface.md` | 62 | The Review Loop | Karta z widocznymi przyciskami ratingu (Again/Hard/Good/Easy) |
| 3 | `review/review-interface.md` | 140 | Session Complete | Ekran podsumowania sesji (statystyki, retention, czas) |
| 4 | `views/selection-toolbar.md` | 49 | Toolbar Buttons | 6 przycisków toolbara z labelkami |
| 5 | `review/type-in-mode.md` | 38 | How It Works | Pole type-in z wynikiem porównania odpowiedzi |
| 6 | `views/flashcard-editor.md` | 33 | Modal Layout | Pełny widok edytora — action bar, toolbar, formularze, footer |
| 7 | `views/dashboard.md` | 20 | Opening the Dashboard | Jak otworzyć Dashboard |
| 8 | `views/dashboard.md` | 41 | Layout | Pełny layout: taby, drzewo projektów, search bar |
| 9 | `views/dashboard.md` | 59 | Projects Tab | Wiersze projektów z zagnieżdżonymi notatkami, kolorowe due counts |
| 10 | `views/dashboard.md` | 102 | Notes Tab | Płaska lista notatek z liczbą kart |
| 11 | `getting-started/introduction.md` | 40 | Key Features | Grid ikon/screenshotów z głównymi feature'ami |
| 12 | `views/card-browser.md` | 48 | Layout | Pełny Card Browser — sidebar z facetami + tabela kart |
| 13 | `views/flashcard-panel.md` | 33 | Panel Layout | Panel z headerem, listą kart, grupami IO |
| 14 | `views/flashcard-panel.md` | 114 | Expanded View | Karta rozwinięta — odpowiedź, review count, stability |
| 15 | `creation/image-occlusion.md` | 44 | IO Editor | Edytor z obrazem, narzędziami rysowania i ponumerowanymi regionami |

---

## 🎬 Filmiki / GIFy (procesy, interakcje, animacje)

| # | Plik | Sekcja | Co pokazać | Dlaczego filmik/GIF? |
|---|------|--------|------------|----------------------|
| 1 | `getting-started/introduction.md:29` | How It Works | Animacja 4-krokowego cyklu: Create → Collect → Review → FSRS | Cykl/przepływ — trzeba pokazać ruch |
| 2 | `views/selection-toolbar.md:22` | Workflow Example | Zaznacz tekst → toolbar → klik Auto → karty w nocie → Collect → zebrane | 5-6 kroków, zmiany stanu UI |
| 3 | `getting-started/quick-start.md` | Create your first flashcard | Zaznacz tekst → toolbar → Basic → karta w nocie → widok w Panelu | Kluczowy onboarding flow |
| 4 | `review/review-interface.md:23` | The Review Loop (pełny) | Pytanie → Space → odpowiedź → rating → następna karta (2-3 karty) | Temporal — timing + klawiatura |
| 5 | `review/review-interface.md:108` | Image Occlusion in Review | Pytanie z zamaskowanym regionem → odkrycie z zielonym podświetleniem | Transformacja wizualna |
| 6 | `review/type-in-mode.md:30` | How It Works (pełny flow) | Pytanie → wpisanie → Space → porównanie (kolory) → Accept/Override | Typing + podświetlenie diff |
| 7 | `views/dashboard.md:79` | Drag-and-drop organization | Przeciąganie projektów/notatek, zmiana hierarchii | Drag & drop = animacja |
| 8 | `views/flashcard-panel.md:50` | Collect action | Pulsujący przycisk Collect → klik → karty zebrane, badge update | Pulsująca animacja + zmiana stanu |
| 9 | `views/card-browser.md:148` | UI Filters and Controls | Klikanie facetów, filtrowanie tabeli w real-time | Real-time update |
| 10 | `views/flashcard-editor.md:71` | Rapid card creation (pinned) | Pin → fill → save → unpinned clear → pinned stay → next card | Cykl tworzenia wielu kart |
| 11 | `creation/image-occlusion.md:46` | Drawing Tools + AI Detection | Rysowanie prostokątów/elips na obrazie, AI auto-detekcja regionów | Interaktywne narzędzia rysowania |
| 12 | `review/cramming.md:23` | Starting a Cram Session | Dashboard → PPM → Custom session → filtry → review z "Cram" badge | Multi-step menu workflow |
| 13 | `scheduling/workload-management.md:13` | Load Balancing | Wykres before/after — nierówne szczyty → wygładzony rozkład | Animacja zmiany danych |
| 14 | `scheduling/workload-management.md:79` | Easy Days + Scheduled Breaks | Kalendarz z oznaczeniami, karty przesuwane przed/po przerwie | Czasowa redystrybucja |
| 15 | `data/backup-restore.md:54` | Restoring from Backup | Settings → wybór backupu → podgląd → potwierdzenie → reload | Multi-step dialog |

---

## Priorytety

### 🔴 Krytyczne (zrób najpierw)
1. **Tutorial wideo 2 min** — najważniejszy materiał, osadzić w getting-started
2. **Selection Toolbar workflow** (GIF) — pierwszy kontakt usera z tworzeniem kart
3. **Review session loop** (GIF) — core experience pluginu
4. **Quick Start first flashcard** (GIF) — onboarding

### 🟡 Wysokie
5. Type-in mode grading (GIF)
6. Dashboard drag-and-drop (GIF)
7. Image Occlusion drawing + AI detection (filmik)
8. Flashcard Panel layout (screenshot)
9. Dashboard layout + Projects Tab (screenshoty)

### 🟢 Średnie
10. Card Browser filtering (GIF)
11. Flashcard Editor pinned fields (GIF)
12. Cramming session setup (GIF)
13. Load Balancing visualization (GIF/animacja)
14. Review Interface screenshoty (3×)

### ⚪ Niskie
15. Backup/restore workflow (GIF)
16. Easy Days calendar (GIF)
17. Notes Tab, Expanded View (screenshoty)

---

**Łącznie: 15 screenshotów + 15 filmików/GIFów + 1 tutorial wideo**
