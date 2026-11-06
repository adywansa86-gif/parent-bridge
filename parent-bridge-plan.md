# Parent Bridge — Build Plan

## Top-Level Overview

**Goal:** Build a single-file offline prototype (`index.html` + supporting files) for the "Parent Bridge" feature of Wansa Learning Universe. It demonstrates one complete learning loop for a single topic: the human digestive system (Grade 4).

**Scope:** Three views (Child, Parent, Teacher) in one HTML page, plain HTML/CSS/JS, no frameworks, no server, works by opening `index.html` in a browser. All data is simulated. English ↔ Indonesian toggle applies to all UI text at once.

**Non-goals:** No backend, no real user accounts, no persistent storage beyond `localStorage` (optional), no other topics beyond digestive system for this prototype.

**Files to produce:**
```
index.html       — shell, navigation between views, language toggle
style.css        — mobile-first friendly design, child/parent/teacher themes
app.js           — all logic: rubric checker, parent message builder, simulated data, i18n strings
```

---

## Color Palette & Design Tokens

| Token | Hex | Usage |
|---|---|---|
| Navy | `#12324A` | Header background, primary text on light |
| Orange | `#E07A3F` | Primary buttons, active tab, badges |
| Cream | `#F7F3EA` | Page background |
| Teal | `#2A8C82` | Secondary buttons, "Understands" badge |

- Font: large, rounded (system-ui or similar)
- Footer text: `"Wansa School · Dari Halmahera, untuk dunia"`
- Demo child name: **Raka**
- Student names: common Indonesian first names (Budi, Siti, Ayu, Rizky, Putri, Dewi, Fajar, Nur, etc.)

---

## Rubric Data (exact — do not modify)

```json
{
  "topic": "The digestive system",
  "organs": [
    {"id": "mouth",           "names": ["mulut","mouth"],                                             "function_words": ["kunyah","unyah","gigi","liur","ludah","chew","teeth","saliva"]},
    {"id": "esophagus",       "names": ["kerongkongan","esofagus","esophagus","oesophagus","food pipe","gullet"], "function_words": ["dorong","salur","nyalur","remas","push","carr","mov","squeez","send"]},
    {"id": "stomach",         "names": ["lambung","stomach"],                                         "function_words": ["asam","aduk","hancur","bubur","acid","churn","mix","break","mash"]},
    {"id": "small_intestine", "names": ["usus halus","small intestine"],                              "function_words": ["serap","nyerap","sari","nutrisi","gizi","absorb","nutrient"]},
    {"id": "large_intestine", "names": ["usus besar","large intestine","colon"],                      "function_words": ["air","feses","kotoran","tinja","water","waste","poop","feces"]},
    {"id": "anus",            "names": ["anus","dubur","rectum"],                                     "function_words": ["keluar","buang","out","leave"]}
  ],
  "concepts": [
    {"id": "digest",    "words": ["cerna","digest"]},
    {"id": "nutrients", "words": ["sari makanan","nutrisi","gizi","nutrient"]},
    {"id": "absorb",    "words": ["serap","nyerap","absorb"]},
    {"id": "waste",     "words": ["sisa","kotoran","feses","tinja","waste","poop","feces"]},
    {"id": "energy",    "words": ["energi","tenaga","energy"]}
  ],
  "weights": {"organs": 20, "functions": 30, "order": 30, "concepts": 20}
}
```

---

## Scoring Rules (exact)

**Organs (20 pts):**
- An organ matches if ANY of its `names` appears as a **whole word or phrase** (case-insensitive).
- Special rule: `"anus"` must NOT match inside `"manusia"` → use word-boundary check.
- Score = `round(20 × organs_found / 6)`

**Functions (30 pts):**
- For each of the **first 5 organs** (mouth → large intestine), check if ONE sentence contains both the organ name AND any of its `function_words`.
- Function words match as **part of a word** (prefix-tolerant, e.g. "menyerap" matches "serap").
- Score = `round(30 × organs_with_function / 5)`

**Order (30 pts):**
- Find where each matched organ **first appears** in the text (character position).
- Sort matched organs by that position.
- Count neighbouring pairs that are in the correct body order: mouth → esophagus → stomach → small intestine → large intestine → anus.
- Score = `round(30 × correct_pairs / 5)`

**Concepts (20 pts):**
- Each concept word matches **anywhere, as part of a word**.
- Score = `round(20 × concepts_found / 5)`

**Sentence splitting:** split on `.` `!` `?` and newlines.

**Level thresholds:**
| Score | EN label | ID label |
|---|---|---|
| 80–100 | Understands | Sudah paham |
| 50–79 | Partly understands | Sebagian paham |
| 0–49 | Needs help | Perlu bantuan |

---

## Test Cases (all verified ✅ by manual dry run)

All 8 answers produce correct scores. Key algorithmic insight confirmed:
**Order scoring:** a pair (a,b) counts as correct if organ b appears **later in the body sequence** than organ a — not necessarily immediately adjacent. (Example: mouth→small_intestine counts as correct even though esophagus and stomach are skipped.)

| Test | Organs | Functions | Order | Concepts | Total | Level |
|---|---|---|---|---|---|---|
| A | 20 | 30 | 30 | 16 | **96** | Understands |
| B | 13 | 18 | 18 | 12 | **61** | Partly understands |
| C | 13 | 12 | 12 | 8 | **45** | Needs help |
| D | 0 | 0 | 0 | 4 | **4** | Needs help |

### Answer Texts

**A-ID (96):**
> Makanan masuk ke mulut, lalu dikunyah oleh gigi dan dicampur air liur. Setelah itu makanan didorong lewat kerongkongan ke lambung. Di lambung makanan diaduk dan dihancurkan oleh asam lambung sampai jadi bubur. Lalu di usus halus sari makanan diserap oleh tubuh supaya kita punya energi. Di usus besar air diserap dan sisanya jadi kotoran. Terakhir sisa makanan keluar lewat anus.

**A-EN (96):**
> Food goes into the mouth and the teeth chew it and mix it with saliva. Then the esophagus pushes the food down to the stomach. In the stomach, acid breaks the food down and churns it into a mush. Next, in the small intestine, the body absorbs the nutrients so we get energy. In the large intestine, water is absorbed and the rest becomes waste. Finally, the waste leaves the body through the anus.

**B-ID (61):**
> Pertama makanan dikunyah di mulut pakai gigi. Terus makanan lewat kerongkongan ke lambung. Di lambung ada asam yang menghancurkan makanan. Habis itu makanan dicerna di usus halus. Di usus halus sari makanan diserap.

**B-EN (61):**
> First we chew food in the mouth with our teeth. Then the food goes through the esophagus to the stomach. The stomach has acid that breaks the food down. After that the food is digested in the small intestine. In the small intestine the nutrients are absorbed.

**C-ID (45):**
> Makanan masuk ke mulut lalu ke usus halus, terus ke lambung, baru ke usus besar. Lambung tugasnya mengaduk makanan. Usus halus menyerap sari makanan.

**C-EN (45):**
> Food goes into the mouth, then to the small intestine, then to the stomach, and then to the large intestine. The stomach mixes the food. The small intestine absorbs nutrients.

**D-ID (4):**
> Makanan dimakan lalu masuk ke perut terus jadi kotoran.

**D-EN (4):**
> We eat food, it goes into the tummy and turns into poop.

---

## Architecture Diagram (described in text)

```
index.html
  └── <nav>  [Child | Parent | Teacher]  [EN / ID toggle]
  └── #child-view
  └── #parent-view
  └── #teacher-view

app.js
  ├── LANG object     — all UI strings in {en, id}
  ├── RUBRIC          — keywords/concepts for rubric checker (bilingual)
  ├── checkAnswer()   — scores child's text against rubric
  ├── buildParentMsg()— turns score into 3-sentence WhatsApp message
  ├── STUDENTS[]      — 25 simulated students with scores/status
  ├── renderChild()
  ├── renderParent()
  └── renderTeacher()
```

---

## Sub-Tasks

---

### Sub-Task 1 — Project Shell & Navigation

**Status:** `[ ] pending`

**Intent:**  
Create the three files with the correct structure, navigation tabs, and the language toggle. No real content yet — just the skeleton that all other sub-tasks will fill.

**Expected Outcomes:**
- Opening `index.html` shows three navigation tabs: Child, Parent, Teacher.
- A toggle button (EN / ID) sits in the top-right corner.
- Clicking a tab hides the other two views and shows the selected one.
- Clicking the toggle switches the language label on the button (full i18n wiring comes in Sub-Task 5).
- The page looks clean on a 375 px wide phone screen.

**Todo List:**
1. Create `index.html` with `<nav>`, three `<section>` view containers, and a `<link>` to `style.css` and `<script>` to `app.js`.
2. Create `style.css` with a mobile-first reset, a simple color palette (warm, child-friendly), and tab/active styles.
3. Create `app.js` with a `currentLang = 'en'` variable, a `showView(name)` function, and a `toggleLang()` function stub.
4. Wire the tab buttons and toggle button to the JS functions.

**Relevant Context:** None yet — this is the foundation.

---

### Sub-Task 2 — Rubric Engine (`checkAnswer`)

**Status:** `[ ] pending`

**Intent:**  
Build the bilingual rubric checker that is the core intelligence of the Child view. It must work regardless of which language the UI toggle shows.

**Expected Outcomes:**
- `checkAnswer(text)` accepts a string in English or Indonesian (or mixed).
- It checks for four rubric categories: organs, functions, order/sequence, and key concepts (e.g. "digestion", "nutrients").
- It returns a score object: `{ level: 'understands'|'partly'|'needs_help', matched: [...], hints: [...] }`.
- Level thresholds: ≥ 3 categories matched → "Understands"; 1–2 → "Partly understands"; 0 → "Needs help".
- Hints are returned only when level is NOT "Understands" (max 2 hints).
- Matching is case-insensitive and accent-tolerant.

**Todo List:**
1. Define `RUBRIC` object in `app.js` with four categories, each containing English and Indonesian keyword arrays.
2. Write `checkAnswer(text)` that normalises the input, checks each category, counts matches, and returns the score object.
3. Write `getHints(matched)` that picks up to 2 hints for unmatched categories, in the current language.
4. Add unit-style inline test calls (commented out) to verify the checker works for sample answers.

**Relevant Context:** Sub-Task 1 must exist first (app.js file created).

---

### Sub-Task 3 — Child View UI

**Status:** `[ ] pending`

**Intent:**  
Build the interactive Child view: the question prompt, the text input, the submit button, the friendly result badge, and the try-again flow.

**Expected Outcomes:**
- Child sees the question: "How does food travel through your body?"
- Child types an answer in the textarea and taps "Check my answer".
- A friendly badge appears: 🌟 "You understand!" / 🌱 "You're learning!" / 💪 "Keep trying!"
- If not "Understands", up to 2 hint sentences appear below the badge.
- A "Try again" button resets the textarea and badge (keeps the question).
- The view looks welcoming and age-appropriate (large text, rounded corners, warm colours).

**Todo List:**
1. Add Child view HTML inside `#child-view`: question text, `<textarea>`, submit button, result area (badge + hints), try-again button.
2. Write `renderChild()` in `app.js` that attaches the submit handler, calls `checkAnswer()`, and updates the result area.
3. Style the badge states (Understands = green, Partly = yellow, Needs help = red/orange) in `style.css`.
4. Make the try-again button visible only after a result is shown.

**Relevant Context:** Depends on Sub-Task 2 (rubric engine).

---

### Sub-Task 4 — Parent View UI

**Status:** `[ ] pending`

**Intent:**  
Build the Parent view that shows a WhatsApp-style message card with exactly three sentences and two action buttons.

**Expected Outcomes:**
- The view shows a message card styled like a WhatsApp chat bubble.
- The message has exactly 3 sentences: what the child understood, what they are still learning, one dinner-table question.
- Two buttons: "✅ We talked about it" / "⏰ Not yet".
- Pressing a button shows a warm confirmation text (e.g. "Terima kasih! / Thank you!") and disables both buttons.
- No numbers, no rankings, no grades visible to the parent.
- The message and button labels switch with the language toggle.

**Todo List:**
1. Add Parent view HTML inside `#parent-view`: message card container, two buttons, confirmation area.
2. Write `buildParentMsg(scoreObj)` in `app.js` that maps level → 3-sentence message (in current language).
3. Write `renderParent()` that calls `buildParentMsg` with the last child result (or a default simulated result if child view hasn't been used) and populates the card.
4. Wire the two buttons: log state to a variable, show confirmation text, disable buttons.
5. Style the chat bubble, buttons (distinct colours), and confirmation text in `style.css`.

**Relevant Context:** Depends on Sub-Task 3 (needs the child's last score, or a simulated fallback).

---

### Sub-Task 5 — Teacher View UI

**Status:** `[ ] pending`

**Intent:**  
Build the Teacher view: a class list of 25 simulated students, a "Needs help today" priority section at the top, and inline score editing.

**Expected Outcomes:**
- "Needs help today" section shows students whose level is "needs_help", highlighted.
- Below, a full list of all 25 students shows name + level badge.
- Teacher can click a student's level badge to cycle it: needs_help → partly → understands.
- The "Needs help today" section updates immediately when a score is changed.
- Labels (column headers, badge text) switch with the language toggle.
- No numbers or percentages — only level labels.

**Todo List:**
1. Define `STUDENTS` array in `app.js`: 25 students with `{name, level, talked}` — distribute levels realistically (≈6 needs_help, ≈10 partly, ≈9 understands).
2. Add Teacher view HTML inside `#teacher-view`: "Needs help" section container, full list container.
3. Write `renderTeacher()` that builds both sections from the `STUDENTS` array.
4. Write `cycleLevel(studentIndex)` that rotates the level and calls `renderTeacher()` to re-render.
5. Style the priority section (distinct background), level badges (same colour coding as Child view), and make the list scannable on a phone screen.

**Relevant Context:** Depends on Sub-Task 1 (shell). Independent of Sub-Tasks 2–4 except for shared level colour styles.

---

### Sub-Task 6 — i18n Wiring (Language Toggle)

**Status:** `[ ] pending`

**Intent:**  
Wire the language toggle to every piece of visible text across all three views, using a single `LANG` object as the single source of truth.

**Expected Outcomes:**
- `LANG` object in `app.js` has `en` and `id` keys, each containing every UI string.
- `applyLang()` function reads `currentLang` and updates all text nodes/placeholders in the DOM.
- Pressing EN/ID toggle calls `toggleLang()` → sets `currentLang` → calls `applyLang()` → re-renders all active content.
- The rubric keywords and parent message templates are also stored in `LANG` (or the bilingual `RUBRIC` object handles them independently).
- Adding or changing a word requires editing only `LANG`, nowhere else.

**Todo List:**
1. Collect every UI string from Sub-Tasks 1–5 into the `LANG` object with `en` and `id` versions.
2. Add `data-i18n="key"` attributes to every HTML element that contains translatable text.
3. Write `applyLang()` that queries all `[data-i18n]` elements and sets their `textContent` from `LANG[currentLang]`.
4. Call `applyLang()` on page load and after every toggle click.
5. Ensure parent message sentences and hints are regenerated (not cached) when language changes, so they also switch.

**Relevant Context:** Depends on all previous sub-tasks being complete. This is the final wiring pass.

---

### Sub-Task 7 — Polish & Mobile QA

**Status:** `[ ] pending`

**Intent:**  
Final pass to ensure the prototype looks good on a phone, feels friendly for children and parents, and is ready for a demo.

**Expected Outcomes:**
- All three views are comfortable to use on a 375 px wide screen with no horizontal scroll.
- Font sizes, tap targets (min 44 px), spacing, and colours are appropriate.
- The Wansa/Parent Bridge name appears in the header.
- A brief "How to use" note (one line per view) is visible — helps demo reviewers understand each view quickly.
- Both languages tested end-to-end: child types in Indonesian while UI is in English → rubric still matches → parent message appears in English.

**Todo List:**
1. Audit all tap targets and font sizes on a simulated 375 px viewport.
2. Add the app name/logo text to the `<header>`.
3. Add one-line helper text per view (translatable via `LANG`).
4. Test the bilingual rubric: type Indonesian keywords while UI is in English and confirm level is correct.
5. Test language toggle from Child → Parent → Teacher in both EN and ID.
6. Fix any layout or logic issues found.

**Relevant Context:** Final sub-task. All others must be complete first.

---

## Key Design Decisions

| Decision | Choice | Reason |
|---|---|---|
| Single file vs multiple | 3 files (index.html, style.css, app.js) | Easier to edit and demo; still offline |
| Framework | None — vanilla JS | Constraint from brief; no build step needed |
| Data persistence | JS variables only (no localStorage for now) | Prototype scope; simplest |
| Rubric matching | Keyword-based, bilingual arrays | Sufficient for demo; no AI/API needed |
| Parent message | Template strings per level | Predictable, easy to translate |
| Teacher editing | Click-to-cycle (no form/modal) | Fast, phone-friendly |
| i18n approach | Single LANG object + data-i18n attributes | Easy to maintain; one place to edit strings |
