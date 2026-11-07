# Parent Bridge — App Reference

> **Wansa Learning Universe · Wansa School, South Halmahera**
> Last updated: November 2026 · AI Worker integration complete

---

## What the app does

Parent Bridge is a mobile-first offline prototype that demonstrates one complete learning loop for Grade 4 science: the human digestive system.

A child reads a short lesson, then explains the topic in their own words. The app checks the answer against a keyword rubric (no AI yet), gives a level badge and up to two hints, and generates a bilingual WhatsApp-style message for the parent. A Teacher view shows the whole class at a glance.

**Works by opening `index.html` in any browser — no server required.**
When online, answers are sent to the AI Worker (IBM Granite via Cloudflare Workers AI) for personalised hints and a parent message. When offline or on timeout, the local rubric engine runs silently as the fallback.
English ↔ Indonesian toggle applies instantly to all UI text, parent messages, and hints.

---

## File structure

```
Parent Bridge/
├── index.html               — page shell, three view sections, navigation
├── style.css                — mobile-first styles, color tokens, all components
├── app.js                   — all logic: i18n, lesson data, rubric engine,
│                              AI Worker client, parent message builder,
│                              teacher data, view rendering
├── parent-bridge-plan.md    — this file
├── .gitignore               — excludes .bob/ and IBM Certificate.pdf
│
├── worker/
│   └── worker.js            — Cloudflare Worker: rubric engine + IBM Granite
│                              for personalised hints and parent message
│
└── images/
    ├── digestive-system.png — diagram shown in the lesson panel with overlay badges
    ├── 1-mouth.svg          — organ icon for lesson card 1
    ├── 2-esophagus.svg      — organ icon for lesson card 2
    ├── 3-stomach.svg        — organ icon for lesson card 3
    ├── 4-small-intestine.svg— organ icon for lesson card 4
    ├── 5-large-intestine.svg— organ icon for lesson card 5
    └── 6-anus.svg           — organ icon for lesson card 6
```

---

## Color palette

| Token | Hex | Usage |
|---|---|---|
| Navy | `#12324A` | Header background, headings, diagram badges |
| Orange | `#E07A3F` | Primary buttons, active tab, number badges on lesson cards, arrows |
| Cream | `#F7F3EA` | Page background, lesson card background |
| Teal | `#2A8C82` | "Understands" badge, teacher summary banner, talked indicator |
| White | `#ffffff` | Card backgrounds, badge text |

Font: `-apple-system, "Segoe UI", system-ui, sans-serif`
Footer: *"Wansa School · Dari Halmahera, untuk dunia"*

---

## App features

### Child tab — two-step flow

**Step 1 — Learn**
- Title: "The Journey of Food" / "Perjalanan Makanan"
- Digestive system diagram (`images/digestive-system.png`) with 6 navy round badges overlaid at precise percentage positions (position:relative wrapper so badges scale with the image on any screen size).
- Small note under the diagram: "The liver, gallbladder and pancreas are helper organs."
- Six lesson cards in a single column with orange ↓ arrows between them. Each card has an orange number badge (1–6), a 90 px organ icon from `images/`, the organ name in bold, and one fact sentence.
- Image paths and badge positions are defined in one place: the `LESSON_IMAGES` constant in `app.js`. To swap icons (e.g. from .svg to .png), edit only that constant.
- Button: "I'm ready to explain!" / "Aku siap menjelaskan!" → hides lesson, shows question.

**Step 2 — Answer & check**
- Helper text + question: "How does food travel through your body?"
- Textarea (bilingual: English or Indonesian both accepted).
- "Try a sample answer" dropdown (4 samples, A–D).
- "Check my answer ✓" button → runs the rubric engine → shows result.
- Result area: level badge, progress bar (score / 100), up to 2 hint sentences, score breakdown grid (toggle).
- "Try again" resets; "Read the lesson again" (shown only when level ≠ Understands) returns to the lesson panel.

### Parent tab
- WhatsApp-style bubble with a 4-part message based on the child's latest level (defaults to "partly" if no answer yet).
- Message parts: what the child understood, what they are still working on, a dinner-table question, the answer hint (styled differently).
- "✅ We talked about it" / "⏰ Not yet" buttons; both disabled after either is tapped.
- Child name shown: **Raka**.

### Teacher tab
- **Summary banner** at the top: "Most often missed today: [organ]" — computed live from all partly/needs-help students (Raka uses real rubric data; simulated students use parsed reason strings).
- **"Needs help today" section** (red background): shows all `needs_help` + `not_done` students, each with a short reason line under their name.
- **All students list**: all 25 students with name, reason, level badge, and a ✅ talked indicator.
- Tapping a level badge cycles it: Not done → Needs help → Partly → Understands. Raka's badge updates automatically whenever he checks an answer in the Child tab.

---

## Class data (25 students)

| Level | Count | Students |
|---|---|---|
| Understands | 12 | Raka (live), Siti, Ayu, Putri, Nur, Dimas, Rina, Lilis, Serli, Fitri, Hendra, Tari |
| Partly understands | 9 | Rizky, Fajar, Indah, Adi, Maya, Yusuf, Tiara, Rama, Dewi |
| Needs help | 3 | Bagas, Wulan, Budi |
| Not done yet | 1 | Raka (initial state before any answer is checked) |

Raka is always index 0 in STUDENTS. His level and reason are overwritten by `showResult()` every time he checks an answer.

---

## Rubric data (exact — do not modify)

```json
{
  "organs": [
    {"id": "mouth",           "id_name": "mulut",        "en_name": "mouth",           "bodyOrder": 0,
     "names": ["mulut","mouth"],
     "function_words": ["kunyah","unyah","gigi","liur","ludah","chew","teeth","saliva"]},
    {"id": "esophagus",       "id_name": "kerongkongan", "en_name": "esophagus",        "bodyOrder": 1,
     "names": ["kerongkongan","esofagus","esophagus","oesophagus","food pipe","gullet"],
     "function_words": ["dorong","salur","nyalur","remas","push","carr","mov","squeez","send"]},
    {"id": "stomach",         "id_name": "lambung",      "en_name": "stomach",          "bodyOrder": 2,
     "names": ["lambung","stomach"],
     "function_words": ["asam","aduk","hancur","bubur","acid","churn","mix","break","mash"]},
    {"id": "small_intestine", "id_name": "usus halus",   "en_name": "small intestine",  "bodyOrder": 3,
     "names": ["usus halus","small intestine"],
     "function_words": ["serap","nyerap","sari","nutrisi","gizi","absorb","nutrient"]},
    {"id": "large_intestine", "id_name": "usus besar",   "en_name": "large intestine",  "bodyOrder": 4,
     "names": ["usus besar","large intestine","colon"],
     "function_words": ["air","feses","kotoran","tinja","water","waste","poop","feces"]},
    {"id": "anus",            "id_name": "anus",         "en_name": "anus",             "bodyOrder": 5,
     "names": ["anus","dubur","rectum"],
     "function_words": ["keluar","buang","out","leave"]}
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

## Scoring rules (exact)

### Organs (20 pts)
- An organ matches if **any** of its `names` appears as a **whole word or phrase** (case-insensitive, Unicode word-boundary check).
- Special rule: `"anus"` must **not** match inside `"manusia"` — handled by the boundary regex.
- Score = `round(20 × organs_found / 6)`

### Functions (30 pts)
- For each of the **first 5 organs** (mouth → large intestine), check if one sentence contains both the organ name **and** any of its `function_words`.
- Function words match as **part of a word** (prefix-tolerant: "menyerap" matches "serap").
- Score = `round(30 × organs_with_function / 5)`

### Order (30 pts)
- Record where each matched organ **first appears** in the text (character position).
- Sort matched organs by that position.
- Count neighbouring pairs in correct body order (mouth→esophagus→stomach→small intestine→large intestine→anus). A pair is correct if organ B has a higher `bodyOrder` than organ A — they do **not** need to be adjacent. Example: mouth→small intestine counts as correct even though esophagus and stomach are skipped.
- Score = `round(30 × correct_pairs / 5)`

### Concepts (20 pts)
- Each concept word matches **anywhere, as part of a word** (substring).
- Score = `round(20 × concepts_found / 5)`

### Sentence splitting
Split on `.` `!` `?` and newlines.

### Level thresholds
| Score | EN label | ID label |
|---|---|---|
| 80–100 | 🌟 You understand! | 🌟 Kamu sudah paham! |
| 50–79 | 🌱 You're learning! | 🌱 Kamu sedang belajar! |
| 0–49 | 💪 Keep trying! | 💪 Terus semangat! |

---

## Test answers with expected scores

All 8 answers verified ✅ by inline `runTests()` in `app.js` (runs silently on every page load; errors appear in the browser console).

| Test | Organs | Functions | Order | Concepts | **Total** | Level |
|---|---|---|---|---|---|---|
| A | 20 | 30 | 30 | 16 | **96** | Understands |
| B | 13 | 18 | 18 | 12 | **61** | Partly understands |
| C | 13 | 12 | 12 | 8 | **45** | Needs help |
| D | 0 | 0 | 0 | 4 | **4** | Needs help |

### Full answer texts

**Sample A — score 96 (EN):**
> Food goes into the mouth and the teeth chew it and mix it with saliva. Then the esophagus pushes the food down to the stomach. In the stomach, acid breaks the food down and churns it into a mush. Next, in the small intestine, the body absorbs the nutrients so we get energy. In the large intestine, water is absorbed and the rest becomes waste. Finally, the waste leaves the body through the anus.

**Sample A — score 96 (ID):**
> Makanan masuk ke mulut, lalu dikunyah oleh gigi dan dicampur air liur. Setelah itu makanan didorong lewat kerongkongan ke lambung. Di lambung makanan diaduk dan dihancurkan oleh asam lambung sampai jadi bubur. Lalu di usus halus sari makanan diserap oleh tubuh supaya kita punya energi. Di usus besar air diserap dan sisanya jadi kotoran. Terakhir sisa makanan keluar lewat anus.

**Sample B — score 61 (EN):**
> First we chew food in the mouth with our teeth. Then the food goes through the esophagus to the stomach. The stomach has acid that breaks the food down. After that the food is digested in the small intestine. In the small intestine the nutrients are absorbed.

**Sample B — score 61 (ID):**
> Pertama makanan dikunyah di mulut pakai gigi. Terus makanan lewat kerongkongan ke lambung. Di lambung ada asam yang menghancurkan makanan. Habis itu makanan dicerna di usus halus. Di usus halus sari makanan diserap.

**Sample C — score 45 (EN):**
> Food goes into the mouth, then to the small intestine, then to the stomach, and then to the large intestine. The stomach mixes the food. The small intestine absorbs nutrients.

**Sample C — score 45 (ID):**
> Makanan masuk ke mulut lalu ke usus halus, terus ke lambung, baru ke usus besar. Lambung tugasnya mengaduk makanan. Usus halus menyerap sari makanan.

**Sample D — score 4 (EN):**
> We eat food, it goes into the tummy and turns into poop.

**Sample D — score 4 (ID):**
> Makanan dimakan lalu masuk ke perut terus jadi kotoran.

---

## Key technical decisions

| Decision | Choice | Reason |
|---|---|---|
| Architecture | Vanilla JS, no framework | No build step; works by double-clicking the file |
| Rubric engine | Keyword-based, bilingual arrays | Fast, offline, no API; sufficient for prototype |
| AI Worker | Cloudflare Worker + IBM Granite (`@cf/ibm-granite/granite-4.0-h-micro`) | Warm, personal hints + structured parent message; rubric keeps scores consistent |
| Offline fallback | `callWorker()` returns `null` on timeout (8 s) or error | App shows "Checked offline" and uses local `buildHints()` automatically |
| Language toggle | `currentLang` var + `data-i18n` attributes + `LANG` object | One place to edit any string |
| Hints | AI Worker hints used when available; `buildHints()` as fallback | Ensures hints always reflect current language even when re-rendered |
| Image paths / badge positions | Single `LESSON_IMAGES` constant in `app.js` | Easy to swap icons or adjust positions in one place |
| Raka in Teacher tab | `STUDENTS[0]` updated by `showResult()` on every answer check | Live round-trip: Child tab answer appears immediately in Teacher view |
| Student reasons | Bilingual `{ en, id }` object on each student | Shown under the name; used by `getMostMissed()` to compute the summary |
| "Most often missed" | `getMostMissed()` parses real rubric data for Raka, reason strings for simulated students | Avoids storing a full rubric result for every simulated student |
| `next_to_learn` in Teacher | Stored on `STUDENTS[0].nextToLearn` from worker response | Teacher sees which organ Raka should study next, alongside his level |

---

## What is still to do

### 1. Improve AI paraphrase understanding
The Worker currently scores with the same keyword rubric as the offline engine, so paraphrases ("the tube that connects your mouth to your stomach") may not score the organ. The next step is to send the rubric result *and* the raw answer text to Granite and ask it to identify organs described indirectly — then apply a bonus or override to the score.

### 2. Add more topics
The digestive system is topic 1. The same lesson/question/rubric pattern can be reused for other Grade 4 topics (e.g. the food chain, the water cycle).

### 3. Real student data
Replace the `STUDENTS` array with a live class roster fetched from the Wansa Universe backend. The Teacher view is already designed for this — only the data source changes.

### 4. Persistent state
Child answers and Parent "talked" responses currently reset on page refresh. Add `localStorage` save/restore, or connect to the backend.

### 5. Accessibility and broader device testing
Test on low-end Android phones (common in South Halmahera). Verify font sizes, contrast ratios, and touch targets on small screens.
