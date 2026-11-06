// ═══════════════════════════════════════════════════════════
//  Parent Bridge — app.js
//  Wansa Learning Universe · Wansa School, South Halmahera
// ═══════════════════════════════════════════════════════════

// ── Language state ──────────────────────────────────────────
let currentLang = 'en';

// ── i18n strings ────────────────────────────────────────────
const LANG = {
  en: {
    // Nav
    tabChild:   'Child',
    tabParent:  'Parent',
    tabTeacher: 'Teacher',
    langBtn:    'ID',

    // Child view — lesson
    lessonTitle:     'The Journey of Food',
    lessonNote:      'In the full app, this lesson comes from the Wansa Universe games.',
    lessonHelperNote:'The liver, gallbladder and pancreas are helper organs.',
    readyBtn:        "I'm ready to explain!",
    readAgainBtn:    'Read the lesson again',
    lessonCards: [
      { emoji: '👄', organ: 'Mouth',            fact: 'Teeth chew the food and saliva makes it soft.' },
      { emoji: '🫁', organ: 'Esophagus',        fact: 'It pushes the food down to the stomach.' },
      { emoji: '🫙', organ: 'Stomach',          fact: 'Stomach acid breaks the food down and churns it into a soft mush.' },
      { emoji: '🌀', organ: 'Small intestine',  fact: 'The body absorbs the nutrients from the food here.' },
      { emoji: '➰', organ: 'Large intestine',  fact: 'Water is absorbed, and the rest becomes waste.' },
      { emoji: '🔚', organ: 'Anus',             fact: 'The waste leaves the body.' },
    ],

    // Child view — question
    childHelper:   'Answer in your own words — English or Indonesian both work!',
    question:      'How does food travel through your body?',
    placeholder:   'Write your explanation here…',
    checkBtn:      'Check my answer ✓',
    tryAgainBtn:   'Try again',
    sampleLabel:   'Try a sample answer:',
    sampleDefault: '— choose a sample —',
    sampleA:       'Sample A (full answer)',
    sampleB:       'Sample B (good)',
    sampleC:       'Sample C (partial)',
    sampleD:       'Sample D (needs help)',

    // Level labels
    levelUnderstands: '🌟 You understand!',
    levelPartly:      '🌱 You\'re learning!',
    levelNeedsHelp:   '💪 Keep trying!',

    // Hints
    hintOrgan:    'Try to name more organs — like {organ}.',
    hintFunction: 'What does the {organ} do? Try adding that.',
    hintOrder:    'Check the order — does the food travel in the right direction?',
    hintConcept:  'Think about: what happens to the nutrients? What leaves the body?',

    // Score breakdown
    showDetails:    'Show details ▾',
    hideDetails:    'Hide details ▴',
    detailOrgans:   'Organs',
    detailFunctions:'Functions',
    detailOrder:    'Order',
    detailConcepts: 'Concepts',

    // Parent view
    parentHelper: 'A message for you about your child\'s learning today.',
    parentChildName: 'Raka',
    parentMsgUnderstands: [
      '{name} explained the full journey of food through the body clearly, mentioning the key organs and what they do.',
      '{name} is still working on using the scientific words (like "nutrients" and "digestion") fluently.',
      'Tonight, ask: "Can you show me where each part of your digestive system is?"',
      'Answer: point to your belly — mouth → throat → stomach → small intestine → large intestine → and out through the anus.'
    ],
    parentMsgPartly: [
      '{name} explained some parts of the digestive system today — good start!',
      '{name} is still learning the order that food travels and what all the organs do.',
      'Tonight, ask: "Which part of the body do you think does the most work?"',
      'Answer: the small intestine — it absorbs all the nutrients from food so the body can use them.'
    ],
    parentMsgNeedsHelp: [
      '{name} is just starting to learn about how the body digests food.',
      '{name} needs more practice naming the organs and explaining what they do.',
      'Tonight, ask: "Do you know what happens to food after you swallow it?"',
      'Answer: it goes down the esophagus to the stomach, then the intestines absorb the good parts, and the rest comes out as waste.'
    ],
    talkedBtn:  '✅ We talked about it',
    notYetBtn:  '⏰ Not yet',
    thanksMsg:  'Thank you! Every conversation helps. 💛',

    // Teacher view
    teacherHelper:  'Tap a level badge to correct it.',
    needsHelpTitle: '🔴 Needs help today',
    noNeedsHelp:    'No students need help today.',
    allStudents:    'All students',
    lvlUnderstands: 'Understands',
    lvlPartly:      'Partly understands',
    lvlNeedsHelp:   'Needs help',
    lvlNotDone:     'Not done yet',
    teacherSummary: 'Most often missed today: {organ}',
    talkedYes:      '✅ talked',
    talkedNo:       '',
  },
  id: {
    // Nav
    tabChild:   'Murid',
    tabParent:  'Orang Tua',
    tabTeacher: 'Guru',
    langBtn:    'EN',

    // Child view — lesson
    lessonTitle:     'Perjalanan Makanan',
    lessonNote:      'Di aplikasi lengkap, materi ini berasal dari permainan Wansa Universe.',
    lessonHelperNote:'Hati, kantong empedu, dan pankreas adalah organ pembantu.',
    readyBtn:        'Aku siap menjelaskan!',
    readAgainBtn:    'Baca materi lagi',
    lessonCards: [
      { emoji: '👄', organ: 'Mulut',          fact: 'Gigi mengunyah makanan dan air liur membuatnya lunak.' },
      { emoji: '🫁', organ: 'Kerongkongan',   fact: 'Kerongkongan mendorong makanan turun ke lambung.' },
      { emoji: '🫙', organ: 'Lambung',        fact: 'Asam lambung menghancurkan dan mengaduk makanan menjadi seperti bubur.' },
      { emoji: '🌀', organ: 'Usus halus',     fact: 'Di sini sari-sari makanan diserap oleh tubuh.' },
      { emoji: '➰', organ: 'Usus besar',     fact: 'Air diserap, dan sisanya menjadi kotoran.' },
      { emoji: '🔚', organ: 'Anus',           fact: 'Sisa makanan dikeluarkan dari tubuh.' },
    ],

    // Child view — question
    childHelper:   'Jawab dengan kata-katamu sendiri — boleh bahasa Indonesia atau Inggris!',
    question:      'Bagaimana makanan berjalan di dalam tubuhmu?',
    placeholder:   'Tulis penjelasanmu di sini…',
    checkBtn:      'Cek jawabanku ✓',
    tryAgainBtn:   'Coba lagi',
    sampleLabel:   'Coba contoh jawaban:',
    sampleDefault: '— pilih contoh —',
    sampleA:       'Contoh A (jawaban lengkap)',
    sampleB:       'Contoh B (bagus)',
    sampleC:       'Contoh C (sebagian)',
    sampleD:       'Contoh D (perlu bantuan)',

    // Level labels
    levelUnderstands: '🌟 Kamu sudah paham!',
    levelPartly:      '🌱 Kamu sedang belajar!',
    levelNeedsHelp:   '💪 Terus semangat!',

    // Hints
    hintOrgan:    'Coba sebutkan lebih banyak organ — misalnya {organ}.',
    hintFunction: 'Apa fungsi {organ}? Coba tambahkan.',
    hintOrder:    'Periksa urutannya — apakah makanan berjalan ke arah yang benar?',
    hintConcept:  'Pikirkan: apa yang terjadi dengan sari makanan? Apa yang keluar dari tubuh?',

    // Score breakdown
    showDetails:    'Lihat detail ▾',
    hideDetails:    'Sembunyikan ▴',
    detailOrgans:   'Organ',
    detailFunctions:'Fungsi',
    detailOrder:    'Urutan',
    detailConcepts: 'Konsep',

    // Parent view
    parentHelper: 'Pesan untukmu tentang belajar anakmu hari ini.',
    parentChildName: 'Raka',
    parentMsgUnderstands: [
      '{name} sudah bisa menjelaskan perjalanan makanan dalam tubuh dengan baik, menyebutkan organ-organ penting dan fungsinya.',
      '{name} masih berlatih menggunakan kata-kata ilmiah seperti "nutrisi" dan "pencernaan" dengan lancar.',
      'Malam ini, tanya: "Bisa tunjukkan di mana saja organ pencernaan di tubuhmu?"',
      'Jawabannya: tunjuk perutmu — mulut → kerongkongan → lambung → usus halus → usus besar → dan keluar lewat anus.'
    ],
    parentMsgPartly: [
      '{name} sudah bisa menjelaskan sebagian sistem pencernaan hari ini — awal yang bagus!',
      '{name} masih belajar urutan perjalanan makanan dan fungsi semua organ.',
      'Malam ini, tanya: "Menurutmu, bagian tubuh mana yang paling banyak bekerja?"',
      'Jawabannya: usus halus — di sana sari makanan diserap agar tubuh bisa menggunakannya.'
    ],
    parentMsgNeedsHelp: [
      '{name} baru mulai belajar bagaimana tubuh mencerna makanan.',
      '{name} perlu lebih banyak latihan menyebutkan organ dan menjelaskan fungsinya.',
      'Malam ini, tanya: "Kamu tahu tidak, makanan pergi ke mana setelah ditelan?"',
      'Jawabannya: makanan turun lewat kerongkongan ke lambung, lalu usus menyerap bagian baiknya, dan sisanya keluar sebagai kotoran.'
    ],
    talkedBtn:  '✅ Sudah kami bicarakan',
    notYetBtn:  '⏰ Belum sempat',
    thanksMsg:  'Terima kasih! Setiap obrolan sangat berarti. 💛',

    // Teacher view
    teacherHelper:  'Ketuk lencana level untuk mengubahnya.',
    needsHelpTitle: '🔴 Perlu bantuan hari ini',
    noNeedsHelp:    'Tidak ada murid yang perlu bantuan hari ini.',
    allStudents:    'Semua murid',
    lvlUnderstands: 'Sudah paham',
    lvlPartly:      'Sebagian paham',
    lvlNeedsHelp:   'Perlu bantuan',
    lvlNotDone:     'Belum selesai',
    teacherSummary: 'Paling sering terlewat hari ini: {organ}',
    talkedYes:      '✅ sudah bicara',
    talkedNo:       '',
  }
};

// ── Lesson image paths — edit here to swap icons or change to .png ──
const LESSON_IMAGES = {
  diagram: 'images/digestive-system.png',
  icons: [
    'images/1-mouth.svg',
    'images/2-esophagus.svg',
    'images/3-stomach.svg',
    'images/4-small-intestine.svg',
    'images/5-large-intestine.svg',
    'images/6-anus.svg',
  ],
  // Badge positions on the diagram image [left%, top%]
  badgePositions: [
    [29, 12],  // 1 Mouth
    [51, 25],  // 2 Esophagus
    [69, 41],  // 3 Stomach
    [51, 68],  // 4 Small intestine
    [88, 64],  // 5 Large intestine
    [49, 95],  // 6 Anus
  ],
};

// ── Rubric data (exact, do not modify) ──────────────────────
const RUBRIC = {
  organs: [
    { id: 'mouth',          id_name: 'mulut',        en_name: 'mouth',            bodyOrder: 0, names: ['mulut','mouth'],
      function_words: ['kunyah','unyah','gigi','liur','ludah','chew','teeth','saliva'] },
    { id: 'esophagus',      id_name: 'kerongkongan', en_name: 'esophagus',        bodyOrder: 1, names: ['kerongkongan','esofagus','esophagus','oesophagus','food pipe','gullet'],
      function_words: ['dorong','salur','nyalur','remas','push','carr','mov','squeez','send'] },
    { id: 'stomach',        id_name: 'lambung',      en_name: 'stomach',          bodyOrder: 2, names: ['lambung','stomach'],
      function_words: ['asam','aduk','hancur','bubur','acid','churn','mix','break','mash'] },
    { id: 'small_intestine',id_name: 'usus halus',   en_name: 'small intestine',  bodyOrder: 3, names: ['usus halus','small intestine'],
      function_words: ['serap','nyerap','sari','nutrisi','gizi','absorb','nutrient'] },
    { id: 'large_intestine',id_name: 'usus besar',   en_name: 'large intestine',  bodyOrder: 4, names: ['usus besar','large intestine','colon'],
      function_words: ['air','feses','kotoran','tinja','water','waste','poop','feces'] },
    { id: 'anus',           id_name: 'anus',         en_name: 'anus',             bodyOrder: 5, names: ['anus','dubur','rectum'],
      function_words: ['keluar','buang','out','leave'] },
  ],
  concepts: [
    { id: 'digest',    words: ['cerna','digest'] },
    { id: 'nutrients', words: ['sari makanan','nutrisi','gizi','nutrient'] },
    { id: 'absorb',    words: ['serap','nyerap','absorb'] },
    { id: 'waste',     words: ['sisa','kotoran','feses','tinja','waste','poop','feces'] },
    { id: 'energy',    words: ['energi','tenaga','energy'] },
  ],
  weights: { organs: 20, functions: 30, order: 30, concepts: 20 }
};

// ── Rubric engine ────────────────────────────────────────────

/**
 * Split text into sentences on . ! ? and newlines.
 */
function splitSentences(text) {
  return text.split(/[.!?\n]+/).map(s => s.trim()).filter(s => s.length > 0);
}

/**
 * Check if `word` (a multi-word phrase or single word) appears as a whole
 * word/phrase in `text` (case-insensitive). Uses word-boundary logic safe
 * for Unicode: the character before and after must be a non-word char or
 * start/end of string. We do this by checking for non-letter around it.
 */
function matchesWholeWord(text, word) {
  // Escape special regex chars in the word
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // (?<![a-zA-ZÀ-ÿ]) ... (?![a-zA-ZÀ-ÿ]) — not preceded/followed by a letter
  const re = new RegExp('(?<![a-zA-Z\\u00C0-\\u00FF])' + escaped + '(?![a-zA-Z\\u00C0-\\u00FF])', 'i');
  return re.test(text);
}

/**
 * Check if `word` appears anywhere as a substring (case-insensitive).
 */
function matchesSubstring(text, word) {
  return text.toLowerCase().includes(word.toLowerCase());
}

/**
 * Main rubric checker. Accepts text in any language (EN, ID, or mixed).
 * Returns { total, organs, functions, order, concepts, matchedOrgans, unmatchedOrgans }
 */
function checkAnswer(text) {
  const lower = text.toLowerCase();
  const sentences = splitSentences(text);

  // ── 1. Organs (whole word match) ──
  const organMatches = {}; // id → first position in text
  for (const organ of RUBRIC.organs) {
    for (const name of organ.names) {
      if (matchesWholeWord(lower, name)) {
        const pos = lower.indexOf(name.toLowerCase());
        if (!(organ.id in organMatches) || pos < organMatches[organ.id]) {
          organMatches[organ.id] = pos;
        }
      }
    }
  }
  const foundOrganIds = Object.keys(organMatches);
  const organsFound = foundOrganIds.length;
  const organsScore = Math.round(RUBRIC.weights.organs * organsFound / 6);

  // ── 2. Functions (first 5 organs only) ──
  const first5 = RUBRIC.organs.slice(0, 5);
  let functionsCount = 0;
  const functionsMatched = []; // organ ids with function match
  for (const organ of first5) {
    if (!foundOrganIds.includes(organ.id)) continue; // organ not mentioned
    for (const sentence of sentences) {
      const sLower = sentence.toLowerCase();
      const hasOrgan = organ.names.some(n => matchesWholeWord(sLower, n));
      if (!hasOrgan) continue;
      const hasFunc = organ.function_words.some(fw => matchesSubstring(sLower, fw));
      if (hasFunc) {
        functionsCount++;
        functionsMatched.push(organ.id);
        break; // one sentence is enough for this organ
      }
    }
  }
  const functionsScore = Math.round(RUBRIC.weights.functions * functionsCount / 5);

  // ── 3. Order (sort by first position, count correct-direction pairs) ──
  // Only consider organs that were matched
  const matchedOrganObjs = RUBRIC.organs.filter(o => foundOrganIds.includes(o.id));
  // Sort by first appearance position in text
  matchedOrganObjs.sort((a, b) => organMatches[a.id] - organMatches[b.id]);
  let correctPairs = 0;
  for (let i = 0; i < matchedOrganObjs.length - 1; i++) {
    if (matchedOrganObjs[i].bodyOrder < matchedOrganObjs[i + 1].bodyOrder) {
      correctPairs++;
    }
  }
  const orderScore = Math.round(RUBRIC.weights.order * correctPairs / 5);

  // ── 4. Concepts (substring match anywhere) ──
  let conceptsFound = 0;
  const conceptsMatched = [];
  for (const concept of RUBRIC.concepts) {
    const found = concept.words.some(w => matchesSubstring(lower, w));
    if (found) { conceptsFound++; conceptsMatched.push(concept.id); }
  }
  const conceptsScore = Math.round(RUBRIC.weights.concepts * conceptsFound / 5);

  // ── Total & level ──
  const total = organsScore + functionsScore + orderScore + conceptsScore;
  let level;
  if (total >= 80)      level = 'understands';
  else if (total >= 50) level = 'partly';
  else                  level = 'needs_help';

  return {
    total, organsScore, functionsScore, orderScore, conceptsScore,
    level,
    foundOrganIds, functionsMatched, correctPairs, conceptsMatched
  };
}

/**
 * Build up to 2 hint strings for the current language.
 */
function buildHints({ foundOrganIds, functionsMatched, correctPairs, matchedOrganObjs, conceptsMatched }) {
  const L = LANG[currentLang];
  const hints = [];

  // Hint 1a: order is wrong (highest priority — tells the child what to fix first)
  if (matchedOrganObjs.length >= 2 && correctPairs < matchedOrganObjs.length - 1) {
    hints.push(L.hintOrder);
  }

  // Hint 1b (or 2): missing organ — fire when fewer than 5 organs mentioned
  if (hints.length < 2 && foundOrganIds.length < 5) {
    const missing = RUBRIC.organs.filter(o => !foundOrganIds.includes(o.id));
    if (missing.length > 0) {
      const o = missing[0];
      const organName = currentLang === 'id' ? o.id_name : o.en_name;
      hints.push(L.hintOrgan.replace('{organ}', organName));
    }
  }

  // Hint 2: missing function for a mentioned organ
  if (hints.length < 2) {
    const organsMissingFunc = RUBRIC.organs.slice(0, 5)
      .filter(o => foundOrganIds.includes(o.id) && !functionsMatched.includes(o.id));
    if (organsMissingFunc.length > 0) {
      const o = organsMissingFunc[0];
      const organName = currentLang === 'id' ? o.id_name : o.en_name;
      hints.push(L.hintFunction.replace('{organ}', organName));
    }
  }

  // Hint 2: missing concept
  if (hints.length < 2 && conceptsMatched.length < 3) {
    hints.push(L.hintConcept);
  }

  return hints.slice(0, 2);
}

// ── Inline test assertions ───────────────────────────────────
(function runTests() {
  const tests = [
    {
      name: 'A-ID', lang: 'id', expected: { total: 96, o: 20, f: 30, r: 30, c: 16 },
      text: 'Makanan masuk ke mulut, lalu dikunyah oleh gigi dan dicampur air liur. Setelah itu makanan didorong lewat kerongkongan ke lambung. Di lambung makanan diaduk dan dihancurkan oleh asam lambung sampai jadi bubur. Lalu di usus halus sari makanan diserap oleh tubuh supaya kita punya energi. Di usus besar air diserap dan sisanya jadi kotoran. Terakhir sisa makanan keluar lewat anus.'
    },
    {
      name: 'A-EN', lang: 'en', expected: { total: 96, o: 20, f: 30, r: 30, c: 16 },
      text: 'Food goes into the mouth and the teeth chew it and mix it with saliva. Then the esophagus pushes the food down to the stomach. In the stomach, acid breaks the food down and churns it into a mush. Next, in the small intestine, the body absorbs the nutrients so we get energy. In the large intestine, water is absorbed and the rest becomes waste. Finally, the waste leaves the body through the anus.'
    },
    {
      name: 'B-ID', lang: 'id', expected: { total: 61, o: 13, f: 18, r: 18, c: 12 },
      text: 'Pertama makanan dikunyah di mulut pakai gigi. Terus makanan lewat kerongkongan ke lambung. Di lambung ada asam yang menghancurkan makanan. Habis itu makanan dicerna di usus halus. Di usus halus sari makanan diserap.'
    },
    {
      name: 'B-EN', lang: 'en', expected: { total: 61, o: 13, f: 18, r: 18, c: 12 },
      text: 'First we chew food in the mouth with our teeth. Then the food goes through the esophagus to the stomach. The stomach has acid that breaks the food down. After that the food is digested in the small intestine. In the small intestine the nutrients are absorbed.'
    },
    {
      name: 'C-ID', lang: 'id', expected: { total: 45, o: 13, f: 12, r: 12, c: 8 },
      text: 'Makanan masuk ke mulut lalu ke usus halus, terus ke lambung, baru ke usus besar. Lambung tugasnya mengaduk makanan. Usus halus menyerap sari makanan.'
    },
    {
      name: 'C-EN', lang: 'en', expected: { total: 45, o: 13, f: 12, r: 12, c: 8 },
      text: 'Food goes into the mouth, then to the small intestine, then to the stomach, and then to the large intestine. The stomach mixes the food. The small intestine absorbs nutrients.'
    },
    {
      name: 'D-ID', lang: 'id', expected: { total: 4, o: 0, f: 0, r: 0, c: 4 },
      text: 'Makanan dimakan lalu masuk ke perut terus jadi kotoran.'
    },
    {
      name: 'D-EN', lang: 'en', expected: { total: 4, o: 0, f: 0, r: 0, c: 4 },
      text: 'We eat food, it goes into the tummy and turns into poop.'
    },
  ];

  let allPass = true;
  const results = [];
  for (const t of tests) {
    const savedLang = currentLang;
    currentLang = t.lang;
    const r = checkAnswer(t.text);
    currentLang = savedLang;

    const pass = r.total === t.expected.total &&
                 r.organsScore === t.expected.o &&
                 r.functionsScore === t.expected.f &&
                 r.orderScore === t.expected.r &&
                 r.conceptsScore === t.expected.c;

    results.push({ name: t.name, pass, got: r, expected: t.expected });
    if (!pass) allPass = false;
  }

  if (allPass) {
    console.log('✅ All 8 rubric tests PASS');
  } else {
    console.group('❌ Rubric test FAILURES');
    for (const res of results) {
      if (!res.pass) {
        console.warn(`FAIL ${res.name}:`,
          `expected total=${res.expected.total} o=${res.expected.o} f=${res.expected.f} r=${res.expected.r} c=${res.expected.c}`,
          `got total=${res.got.total} o=${res.got.organsScore} f=${res.got.functionsScore} r=${res.got.orderScore} c=${res.got.conceptsScore}`
        );
      }
    }
    console.groupEnd();
  }
  // Expose for console inspection
  window._testResults = results;
})();

// ── Sample answers for child view ───────────────────────────
const SAMPLES = {
  A: {
    id: 'Makanan masuk ke mulut, lalu dikunyah oleh gigi dan dicampur air liur. Setelah itu makanan didorong lewat kerongkongan ke lambung. Di lambung makanan diaduk dan dihancurkan oleh asam lambung sampai jadi bubur. Lalu di usus halus sari makanan diserap oleh tubuh supaya kita punya energi. Di usus besar air diserap dan sisanya jadi kotoran. Terakhir sisa makanan keluar lewat anus.',
    en: 'Food goes into the mouth and the teeth chew it and mix it with saliva. Then the esophagus pushes the food down to the stomach. In the stomach, acid breaks the food down and churns it into a mush. Next, in the small intestine, the body absorbs the nutrients so we get energy. In the large intestine, water is absorbed and the rest becomes waste. Finally, the waste leaves the body through the anus.'
  },
  B: {
    id: 'Pertama makanan dikunyah di mulut pakai gigi. Terus makanan lewat kerongkongan ke lambung. Di lambung ada asam yang menghancurkan makanan. Habis itu makanan dicerna di usus halus. Di usus halus sari makanan diserap.',
    en: 'First we chew food in the mouth with our teeth. Then the food goes through the esophagus to the stomach. The stomach has acid that breaks the food down. After that the food is digested in the small intestine. In the small intestine the nutrients are absorbed.'
  },
  C: {
    id: 'Makanan masuk ke mulut lalu ke usus halus, terus ke lambung, baru ke usus besar. Lambung tugasnya mengaduk makanan. Usus halus menyerap sari makanan.',
    en: 'Food goes into the mouth, then to the small intestine, then to the stomach, and then to the large intestine. The stomach mixes the food. The small intestine absorbs nutrients.'
  },
  D: {
    id: 'Makanan dimakan lalu masuk ke perut terus jadi kotoran.',
    en: 'We eat food, it goes into the tummy and turns into poop.'
  }
};

// ── App state ────────────────────────────────────────────────
let lastResult = null; // last checkAnswer() result, used by Parent + Teacher views

// ── Students data (25 students: Raka + 24 simulated) ────────
// level: 'understands'(12) | 'partly'(9) | 'needs_help'(3) | 'not_done'(1)
// reason: short note shown under the name in the Teacher view
// Raka is always index 0; his level & reason are updated live from lastResult.
const STUDENTS = [
  // ── index 0: Raka — level/reason updated from Child tab ──
  { name: 'Raka',    level: 'not_done',    talked: false, reason: { en: 'Has not started yet', id: 'Belum mulai' } },

  // ── 11 more Understands ──
  { name: 'Siti',    level: 'understands', talked: true,  reason: { en: 'Mentioned all organs', id: 'Semua organ disebutkan' } },
  { name: 'Ayu',     level: 'understands', talked: false, reason: { en: 'Good explanation',     id: 'Penjelasan bagus' } },
  { name: 'Putri',   level: 'understands', talked: true,  reason: { en: 'Clear and complete',   id: 'Jelas dan lengkap' } },
  { name: 'Nur',     level: 'understands', talked: true,  reason: { en: 'Good explanation',     id: 'Penjelasan bagus' } },
  { name: 'Dimas',   level: 'understands', talked: false, reason: { en: 'Named all 6 organs',   id: 'Semua 6 organ disebutkan' } },
  { name: 'Rina',    level: 'understands', talked: true,  reason: { en: 'Clear and complete',   id: 'Jelas dan lengkap' } },
  { name: 'Lilis',   level: 'understands', talked: true,  reason: { en: 'Good explanation',     id: 'Penjelasan bagus' } },
  { name: 'Serli',   level: 'understands', talked: false, reason: { en: 'Named all 6 organs',   id: 'Semua 6 organ disebutkan' } },
  { name: 'Fitri',   level: 'understands', talked: true,  reason: { en: 'Clear and complete',   id: 'Jelas dan lengkap' } },
  { name: 'Hendra',  level: 'understands', talked: false, reason: { en: 'Good explanation',     id: 'Penjelasan bagus' } },
  { name: 'Tari',    level: 'understands', talked: true,  reason: { en: 'Named all 6 organs',   id: 'Semua 6 organ disebutkan' } },

  // ── 9 Partly understands ──
  { name: 'Rizky',   level: 'partly',      talked: false, reason: { en: 'Missed: large intestine', id: 'Terlewat: usus besar' } },
  { name: 'Fajar',   level: 'partly',      talked: false, reason: { en: 'Order needs work',        id: 'Urutan perlu diperbaiki' } },
  { name: 'Indah',   level: 'partly',      talked: false, reason: { en: 'Missed: esophagus',       id: 'Terlewat: kerongkongan' } },
  { name: 'Adi',     level: 'partly',      talked: false, reason: { en: 'Missed: large intestine', id: 'Terlewat: usus besar' } },
  { name: 'Maya',    level: 'partly',      talked: false, reason: { en: 'Order needs work',        id: 'Urutan perlu diperbaiki' } },
  { name: 'Yusuf',   level: 'partly',      talked: false, reason: { en: 'Missed: anus',            id: 'Terlewat: anus' } },
  { name: 'Tiara',   level: 'partly',      talked: true,  reason: { en: 'Missed: esophagus',       id: 'Terlewat: kerongkongan' } },
  { name: 'Rama',    level: 'partly',      talked: false, reason: { en: 'Missed: large intestine', id: 'Terlewat: usus besar' } },
  { name: 'Dewi',    level: 'partly',      talked: false, reason: { en: 'Order needs work',        id: 'Urutan perlu diperbaiki' } },

  // ── 3 Needs help ──
  { name: 'Bagas',   level: 'needs_help',  talked: false, reason: { en: 'Missed: large intestine, esophagus', id: 'Terlewat: usus besar, kerongkongan' } },
  { name: 'Wulan',   level: 'needs_help',  talked: false, reason: { en: 'Only named stomach',               id: 'Hanya menyebutkan lambung' } },
  { name: 'Budi',    level: 'needs_help',  talked: false, reason: { en: 'Missed: large intestine, anus',    id: 'Terlewat: usus besar, anus' } },
];

// ── View navigation ──────────────────────────────────────────
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(name + '-view').classList.add('active');
  document.querySelector(`[data-view="${name}"]`).classList.add('active');
  if (name === 'parent') renderParent();
  if (name === 'teacher') renderTeacher();
}

// ── Language toggle ──────────────────────────────────────────
function toggleLang() {
  currentLang = currentLang === 'en' ? 'id' : 'en';
  applyLang();
  refreshChildLang();
  // Re-render dynamic content in all views (they may be pre-rendered)
  renderParent();
  renderTeacher();
  // If a result is currently showing in the child view, re-render it
  if (lastResult) showResult(lastResult);
}

function applyLang() {
  const L = LANG[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (L[key] !== undefined) el.textContent = L[key];
  });
  // Update placeholders separately
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (L[key] !== undefined) el.placeholder = L[key];
  });
}

// ── Child view ───────────────────────────────────────────────

// Render lesson cards and texts in the current language
function renderLesson() {
  const L = LANG[currentLang];
  document.getElementById('lesson-title').textContent = L.lessonTitle;
  document.getElementById('lesson-note').textContent  = L.lessonNote;
  document.getElementById('ready-btn').textContent    = L.readyBtn;

  // ── Diagram with numbered overlay badges ──────────────────
  const diagramWrap = document.getElementById('lesson-diagram');
  diagramWrap.innerHTML =
    `<div class="lesson-diagram-wrap">` +
      `<img src="${LESSON_IMAGES.diagram}" class="lesson-diagram-img" alt="Digestive system diagram" />` +
      LESSON_IMAGES.badgePositions.map((pos, i) =>
        `<span class="lesson-diagram-badge" style="left:${pos[0]}%;top:${pos[1]}%;">${i + 1}</span>`
      ).join('') +
    `</div>` +
    `<p class="lesson-helper-note">${L.lessonHelperNote}</p>`;

  // ── Organ cards with icons ─────────────────────────────────
  const grid = document.getElementById('lesson-cards');
  grid.innerHTML = '';
  L.lessonCards.forEach((c, i) => {
    if (i > 0) {
      const arrow = document.createElement('div');
      arrow.className = 'lesson-arrow';
      arrow.textContent = '↓';
      grid.appendChild(arrow);
    }
    const card = document.createElement('div');
    card.className = 'lesson-card';
    card.innerHTML =
      `<span class="lesson-card-number">${i + 1}</span>` +
      `<img src="${LESSON_IMAGES.icons[i]}" class="lesson-card-icon" alt="" />` +
      `<span class="lesson-card-body">` +
        `<span class="lesson-card-organ">${c.organ}</span>` +
        `<span class="lesson-card-fact">${c.fact}</span>` +
      `</span>`;
    grid.appendChild(card);
  });
}

function showLesson() {
  document.getElementById('lesson-panel').style.display   = '';
  document.getElementById('question-panel').style.display = 'none';
}

function showQuestion() {
  document.getElementById('lesson-panel').style.display   = 'none';
  document.getElementById('question-panel').style.display = '';
}

function refreshChildLang() {
  // Re-render the lesson in the new language
  renderLesson();
  // Update the read-again button text (it's inside question-panel, applyLang handles data-i18n)
  // Update sample dropdown options text
  const sel = document.getElementById('sample-select');
  if (!sel) return;
  const L = LANG[currentLang];
  sel.options[0].text = L.sampleDefault;
  sel.options[1].text = L.sampleA;
  sel.options[2].text = L.sampleB;
  sel.options[3].text = L.sampleC;
  sel.options[4].text = L.sampleD;
}

function initChildView() {
  const btn          = document.getElementById('check-btn');
  const ta           = document.getElementById('answer-ta');
  const sel          = document.getElementById('sample-select');
  const retryBtn     = document.getElementById('retry-btn');
  const readAgainBtn = document.getElementById('read-again-btn');
  const readyBtn     = document.getElementById('ready-btn');

  // "I'm ready to explain!" — hide lesson, show question
  readyBtn.addEventListener('click', () => {
    showQuestion();
    ta.value = '';
    sel.value = '';
    clearResult();
    ta.focus();
  });

  // Check button — always visible, always re-runs on current text
  btn.addEventListener('click', () => {
    const text = ta.value.trim();
    if (!text) return;
    lastResult = checkAnswer(text);
    showResult(lastResult);
  });

  // Try again — clears result and textarea
  retryBtn.addEventListener('click', () => {
    ta.value = '';
    sel.value = '';
    clearResult();
    ta.focus();
  });

  // "Read the lesson again" — go back to lesson panel
  readAgainBtn.addEventListener('click', () => {
    ta.value = '';
    sel.value = '';
    clearResult();
    showLesson();
  });

  // Choosing a new sample clears the old result
  sel.addEventListener('change', () => {
    const key = sel.value;
    if (!key) return;
    ta.value = SAMPLES[key][currentLang];
    clearResult();
  });

  // Editing the textarea clears the old result
  ta.addEventListener('input', () => {
    clearResult();
  });

  // Show / hide score breakdown
  document.getElementById('show-details-btn').addEventListener('click', () => {
    const bd  = document.getElementById('score-breakdown');
    const btn = document.getElementById('show-details-btn');
    const L   = LANG[currentLang];
    if (bd.style.display === 'none') {
      bd.style.display = 'grid';
      btn.textContent = L.hideDetails;
    } else {
      bd.style.display = 'none';
      btn.textContent = L.showDetails;
    }
  });

  // Initial render of the lesson panel
  renderLesson();
}

function clearResult() {
  document.getElementById('result-area').style.display  = 'none';
  document.getElementById('retry-row').style.display    = 'none';
  document.getElementById('read-again-btn').style.display = 'none';
  lastResult = null;
}

function showResult(result) {
  const L = LANG[currentLang];
  const area     = document.getElementById('result-area');
  const badge    = document.getElementById('result-badge');
  const hintsDiv = document.getElementById('hints-div');
  // Check button stays visible — never hide it

  // Badge with level-matched colors
  badge.className = 'badge';
  let levelLabel, badgeClass, barColor;
  if (result.level === 'understands') {
    levelLabel = L.levelUnderstands; badgeClass = 'badge-understands'; barColor = 'var(--teal)';
  } else if (result.level === 'partly') {
    levelLabel = L.levelPartly;      badgeClass = 'badge-partly';      barColor = 'var(--orange)';
  } else {
    levelLabel = L.levelNeedsHelp;   badgeClass = 'badge-needs-help';  barColor = 'var(--navy)';
  }
  badge.classList.add(badgeClass);
  badge.textContent = levelLabel;

  // Progress bar
  const pct = Math.min(100, Math.max(0, result.total));
  document.getElementById('score-bar-fill').style.width = pct + '%';
  document.getElementById('score-bar-fill').style.background = barColor;
  document.getElementById('score-bar-pct').textContent = result.total + ' / 100';

  // Hints — built fresh here so language is always current
  const hints = buildHints({
    foundOrganIds:   result.foundOrganIds,
    functionsMatched: result.functionsMatched,
    correctPairs:    result.correctPairs,
    matchedOrganObjs: RUBRIC.organs.filter(o => result.foundOrganIds.includes(o.id)),
    conceptsMatched: result.conceptsMatched
  });
  hintsDiv.innerHTML = '';
  if (result.level !== 'understands' && hints.length > 0) {
    hints.forEach(h => {
      const div = document.createElement('div');
      div.className = 'hint-item';
      div.textContent = h;
      hintsDiv.appendChild(div);
    });
  }

  // Update Raka's Teacher entry with this result
  const missingOrgans = RUBRIC.organs.filter(o => !result.foundOrganIds.includes(o.id));
  let rakaReasonEn, rakaReasonId;
  if (result.level === 'understands') {
    rakaReasonEn = 'Good explanation';
    rakaReasonId = 'Penjelasan bagus';
  } else if (missingOrgans.length > 0) {
    const names = missingOrgans.slice(0, 2);
    rakaReasonEn = 'Missed: ' + names.map(o => o.en_name).join(', ');
    rakaReasonId = 'Terlewat: ' + names.map(o => o.id_name).join(', ');
    if (result.correctPairs < (result.foundOrganIds.length > 1 ? result.foundOrganIds.length - 1 : 0)) {
      rakaReasonEn += '; order needs work';
      rakaReasonId += '; urutan perlu diperbaiki';
    }
  } else {
    rakaReasonEn = 'Order needs work';
    rakaReasonId = 'Urutan perlu diperbaiki';
  }
  STUDENTS[0].level  = result.level;
  STUDENTS[0].reason = { en: rakaReasonEn, id: rakaReasonId };

  // Score breakdown (hidden by default, toggle via "Show details")
  const breakdown = document.getElementById('score-breakdown');
  breakdown.innerHTML =
    `<span>🫁 ${L.detailOrgans}: ${result.organsScore}/20</span>` +
    `<span>⚙️ ${L.detailFunctions}: ${result.functionsScore}/30</span>` +
    `<span>↕️ ${L.detailOrder}: ${result.orderScore}/30</span>` +
    `<span>💡 ${L.detailConcepts}: ${result.conceptsScore}/20</span>`;
  breakdown.style.display = 'none';
  document.getElementById('show-details-btn').textContent = L.showDetails;

  area.style.display = 'block';
  document.getElementById('retry-row').style.display = 'block';
  // Show "Read the lesson again" only when level is not "understands"
  const readAgainBtn = document.getElementById('read-again-btn');
  readAgainBtn.style.display = result.level !== 'understands' ? 'block' : 'none';
}

// ── Parent view ──────────────────────────────────────────────
function renderParent() {
  const L = LANG[currentLang];
  const name = L.parentChildName;
  // Use lastResult if available; otherwise default to 'partly' for demo
  const level = lastResult ? lastResult.level : 'partly';
  const msgArr = level === 'understands' ? L.parentMsgUnderstands
               : level === 'partly'      ? L.parentMsgPartly
               :                          L.parentMsgNeedsHelp;

  const bubble = document.getElementById('wa-bubble');
  // First 3 items are normal sentences; index [3] is the answer hint — styled differently
  bubble.innerHTML = msgArr.map((s, i) => {
    const text = s.replace('{name}', name);
    if (i === 3) {
      return `<p class="parent-answer-hint">${text}</p>`;
    }
    return `<p>${text}</p>`;
  }).join('');

  // Reset buttons
  const talkedBtn = document.getElementById('talked-btn');
  const notYetBtn = document.getElementById('notyet-btn');
  const conf = document.getElementById('confirmation-text');

  talkedBtn.textContent = L.talkedBtn;
  notYetBtn.textContent = L.notYetBtn;
  talkedBtn.disabled = false;
  notYetBtn.disabled = false;
  conf.textContent = '';

  // Re-attach handlers (fresh render)
  talkedBtn.onclick = () => {
    conf.textContent = L.thanksMsg;
    talkedBtn.disabled = true;
    notYetBtn.disabled = true;
  };
  notYetBtn.onclick = () => {
    conf.textContent = L.thanksMsg;
    talkedBtn.disabled = true;
    notYetBtn.disabled = true;
  };
}

// ── Teacher view ─────────────────────────────────────────────
function getLevelLabel(level) {
  const L = LANG[currentLang];
  if (level === 'understands') return L.lvlUnderstands;
  if (level === 'partly')      return L.lvlPartly;
  if (level === 'not_done')    return L.lvlNotDone;
  return L.lvlNeedsHelp;
}

function getLevelClass(level) {
  if (level === 'understands') return 'badge-understands';
  if (level === 'partly')      return 'badge-partly';
  if (level === 'not_done')    return 'badge-not-done';
  return 'badge-needs-help';
}

function cycleLevel(idx) {
  const order = ['not_done', 'needs_help', 'partly', 'understands'];
  const cur = STUDENTS[idx].level;
  const next = order[(order.indexOf(cur) + 1) % order.length];
  STUDENTS[idx].level = next;
  renderTeacher();
}

// Compute "most often missed" organ across the class
function getMostMissed() {
  const counts = {}; // organ id → count of students who missed it
  RUBRIC.organs.forEach(o => { counts[o.id] = 0; });

  // For simulated students we read the reason text to infer missed organs
  // For Raka we use lastResult directly
  STUDENTS.forEach((s, idx) => {
    if (s.level === 'understands' || s.level === 'not_done') return;
    if (idx === 0 && lastResult) {
      // Raka: use actual rubric data
      RUBRIC.organs.forEach(o => {
        if (!lastResult.foundOrganIds.includes(o.id)) counts[o.id]++;
      });
    } else {
      // Simulated: parse English reason string "Missed: X, Y"
      const m = s.reason.en.match(/Missed:\s*(.+)/i);
      if (m) {
        m[1].split(',').forEach(part => {
          const name = part.replace(/;.*$/, '').trim().toLowerCase();
          const organ = RUBRIC.organs.find(o => o.en_name.toLowerCase() === name);
          if (organ) counts[organ.id]++;
        });
      }
    }
  });

  let topId = null, topCount = 0;
  Object.entries(counts).forEach(([id, n]) => {
    if (n > topCount) { topCount = n; topId = id; }
  });
  return topId ? RUBRIC.organs.find(o => o.id === topId) : null;
}

function renderTeacher() {
  const L = LANG[currentLang];

  // ── Summary line ──
  const mostMissed = getMostMissed();
  const summaryEl = document.getElementById('teacher-summary');
  if (mostMissed) {
    const organName = currentLang === 'id' ? mostMissed.id_name : mostMissed.en_name;
    summaryEl.textContent = L.teacherSummary.replace('{organ}', organName);
    summaryEl.style.display = '';
  } else {
    summaryEl.style.display = 'none';
  }

  // ── Needs-help section: needs_help + not_done ──
  const nhList = document.getElementById('needs-help-list');
  const priority = STUDENTS.filter(s => s.level === 'needs_help' || s.level === 'not_done');
  if (priority.length === 0) {
    nhList.innerHTML = `<p style="color:#8b2e0e;font-size:0.9rem;">${L.noNeedsHelp}</p>`;
  } else {
    nhList.innerHTML = priority.map(s => {
      const idx = STUDENTS.indexOf(s);
      const reasonText = s.reason[currentLang];
      return `<div class="student-row">
        <span class="student-name-block">
          <span class="student-name">${s.name}</span>
          <span class="student-reason">${reasonText}</span>
        </span>
        <span class="badge ${getLevelClass(s.level)} badge-clickable" onclick="cycleLevel(${idx})">${getLevelLabel(s.level)}</span>
      </div>`;
    }).join('');
  }

  // ── All students list ──
  const allList = document.getElementById('all-students-list');
  allList.innerHTML = STUDENTS.map((s, idx) => {
    const talked = s.talked ? `<span style="font-size:0.75rem;color:var(--teal);margin-left:4px;">${L.talkedYes}</span>` : '';
    const reasonText = s.reason[currentLang];
    return `<div class="student-row">
      <span class="student-name-block">
        <span class="student-name">${s.name}${talked}</span>
        <span class="student-reason">${reasonText}</span>
      </span>
      <span class="badge ${getLevelClass(s.level)} badge-clickable" onclick="cycleLevel(${idx})">${getLevelLabel(s.level)}</span>
    </div>`;
  }).join('');
}

// ── Boot ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Wire tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => showView(btn.dataset.view));
  });

  // Wire lang toggle
  document.getElementById('lang-btn').addEventListener('click', toggleLang);

  // Init child view interactions
  initChildView();

  // Apply language strings
  applyLang();

  // Default view
  showView('child');
});
