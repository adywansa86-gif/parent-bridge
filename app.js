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

    // AI / offline labels
    thinking:       'Thinking…',
    checkedOffline: 'Checked offline',
    aiLabel:        'Feedback by IBM Granite',
    rubricLabel:    "Scored by the teacher's rubric",

    // Child view — lesson
    lessonTitle:     'The Journey of Food',
    lessonNote:      'In the full app, this lesson comes from the Wansa Universe games.',
    lessonHelperNote:'The liver, gallbladder and pancreas are helper organs.',
    readyBtn:        "I'm ready to explain!",
    readAgainBtn:    'Read the lesson again',
    lessonCards: [
      { emoji: '👄', organ: 'Mouth',            fact: 'Teeth chew the food and saliva makes it soft.' },
      { emoji: '🍽️', organ: 'Esophagus',        fact: 'It pushes the food down to the stomach.' },
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

    // Voice answer
    voiceSpeakBtn:   '🎤 Speak',
    voiceStopBtn:    '⏹ Stop',
    voiceListening:  'Listening…',
    voiceNote:       'Your voice is turned into text. No recording is saved.',
    voiceErrBrowser: 'Voice works in Chrome. Please type your answer.',
    voiceErrNetwork: 'Voice needs internet. Please type your answer.',
    voiceErrMic:     'Please allow the microphone, or type your answer.',
    voiceErrNoSpeech:'I didn\'t hear anything. Try again?',

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
    hintListLike: 'You listed many words. Now explain in sentences: what happens to the food in the mouth?',
    emptyAnswer:  'Write or speak your answer first.',

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
    parentAskLabel:    'Tonight, ask:',
    parentAnswerLabel: 'Answer:',
    parentMsgUnderstands: [
      '{name} explained the full journey of food through the body clearly, mentioning the key organs and what they do.',
      '{name} is still working on using the scientific words (like "nutrients" and "digestion") fluently.',
      '"Can you show me where each part of your digestive system is?"',
      'Point to your belly — mouth → throat → stomach → small intestine → large intestine → and out through the anus.'
    ],
    parentMsgPartly: [
      '{name} explained some parts of the digestive system today — good start!',
      '{name} is still learning the order that food travels and what all the organs do.',
      '"Can you name all the organs food passes through?"',
      'Mouth → esophagus → stomach → small intestine → large intestine → anus.'
    ],
    parentMsgNeedsHelp: [
      '{name} is just starting to learn about how the body digests food.',
      '{name} needs more practice naming the organs and explaining what they do.',
      '"Do you know what happens to food after you swallow it?"',
      'It goes down the esophagus to the stomach, then the intestines absorb the good parts, and the rest comes out as waste.'
    ],
    notDoneMsg: 'Raka has not finished today\'s learning mission yet.',
    talkedBtn:  '✅ We talked about it',
    notYetBtn:  '⏰ Not yet',
    thanksMsg:  'Thank you! Every conversation helps. 💛',

    // Parent listen button
    listenBtn:  '🔊 Listen',
    listenStop: '🔊 Stop',

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
    teacherStats:   'Talked at home: {talked}/{total} · Understands {u} · Partly {p} · Needs help {n} · Not done {nd}',
    talkedYes:      '✅ talked',
    talkedNo:       '',

    // Demo guide
    demoGuideText: 'Try the demo: 1) Learn and answer as a child (type or speak). 2) Open Parent to see tonight\'s message. 3) Open Teacher to see the class.',
    demoGuideNote: 'Demo uses simulated students only.',
  },
  id: {
    // Nav
    tabChild:   'Murid',
    tabParent:  'Orang Tua',
    tabTeacher: 'Guru',
    langBtn:    'EN',

    // AI / offline labels
    thinking:       'Memeriksa…',
    checkedOffline: 'Diperiksa offline',
    aiLabel:        'Umpan balik oleh IBM Granite',
    rubricLabel:    'Dinilai menggunakan rubrik guru',

    // Child view — lesson
    lessonTitle:     'Perjalanan Makanan',
    lessonNote:      'Di aplikasi lengkap, materi ini berasal dari permainan Wansa Universe.',
    lessonHelperNote:'Hati, kantong empedu, dan pankreas adalah organ pembantu.',
    readyBtn:        'Aku siap menjelaskan!',
    readAgainBtn:    'Baca materi lagi',
    lessonCards: [
      { emoji: '👄', organ: 'Mulut',          fact: 'Gigi mengunyah makanan dan air liur membuatnya lunak.' },
      { emoji: '🍽️', organ: 'Kerongkongan',   fact: 'Kerongkongan mendorong makanan turun ke lambung.' },
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

    // Voice answer
    voiceSpeakBtn:   '🎤 Bicara',
    voiceStopBtn:    '⏹ Berhenti',
    voiceListening:  'Mendengarkan…',
    voiceNote:       'Suaramu diubah menjadi tulisan. Rekaman tidak disimpan.',
    voiceErrBrowser: 'Fitur suara berjalan di Chrome. Silakan ketik jawabanmu.',
    voiceErrNetwork: 'Suara butuh internet. Silakan ketik jawabanmu.',
    voiceErrMic:     'Izinkan mikrofon, atau ketik jawabanmu.',
    voiceErrNoSpeech:'Tidak terdengar suara. Coba lagi?',

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
    hintListLike: 'Kamu menyebut banyak kata. Sekarang jelaskan dengan kalimat: apa yang terjadi pada makanan di mulut?',
    emptyAnswer:  'Tulis atau ucapkan jawabanmu dulu.',

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
    parentAskLabel:    'Malam ini, tanyakan:',
    parentAnswerLabel: 'Jawaban:',
    parentMsgUnderstands: [
      '{name} sudah bisa menjelaskan perjalanan makanan dalam tubuh dengan baik, menyebutkan organ-organ penting dan fungsinya.',
      '{name} masih berlatih menggunakan kata-kata ilmiah seperti "nutrisi" dan "pencernaan" dengan lancar.',
      '"Bisa tunjukkan di mana saja organ pencernaan di tubuhmu?"',
      'Tunjuk perutmu — mulut → kerongkongan → lambung → usus halus → usus besar → dan keluar lewat anus.'
    ],
    parentMsgPartly: [
      '{name} sudah bisa menjelaskan sebagian sistem pencernaan hari ini — awal yang bagus!',
      '{name} masih belajar urutan perjalanan makanan dan fungsi semua organ.',
      '"Bisakah kamu sebutkan semua organ yang dilalui makanan?"',
      'Mulut → kerongkongan → lambung → usus halus → usus besar → anus.'
    ],
    parentMsgNeedsHelp: [
      '{name} baru mulai belajar bagaimana tubuh mencerna makanan.',
      '{name} perlu lebih banyak latihan menyebutkan organ dan menjelaskan fungsinya.',
      '"Kamu tahu tidak, makanan pergi ke mana setelah ditelan?"',
      'Makanan turun lewat kerongkongan ke lambung, lalu usus menyerap bagian baiknya, dan sisanya keluar sebagai kotoran.'
    ],
    notDoneMsg: 'Raka belum menyelesaikan misi belajar hari ini.',
    talkedBtn:  '✅ Sudah kami bicarakan',
    notYetBtn:  '⏰ Belum sempat',
    thanksMsg:  'Terima kasih! Setiap obrolan sangat berarti. 💛',

    // Parent listen button
    listenBtn:  '🔊 Dengarkan',
    listenStop: '🔊 Berhenti',

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
    teacherStats:   'Sudah berdiskusi di rumah: {talked}/{total} · Paham {u} · Sebagian {p} · Perlu bantuan {n} · Belum {nd}',
    talkedYes:      '✅ sudah bicara',
    talkedNo:       '',

    // Demo guide
    demoGuideText: 'Coba demonya: 1) Belajar dan jawab sebagai murid (ketik atau bicara). 2) Buka Orang Tua untuk melihat pesan malam ini. 3) Buka Guru untuk melihat kelas.',
    demoGuideNote: 'Demo hanya memakai data siswa simulasi.',
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
      function_words: ['kunyah','unyah','gigi','liur','ludah','chew','teeth','saliva'],
      fact_en: 'In the mouth, teeth chew the food and saliva makes it soft.',
      fact_id: 'Di mulut, gigi mengunyah makanan dan air liur membuatnya lunak.' },
    { id: 'esophagus',      id_name: 'kerongkongan', en_name: 'esophagus',        bodyOrder: 1, names: ['kerongkongan','esofagus','esophagus','oesophagus','food pipe','gullet'],
      function_words: ['dorong','salur','nyalur','remas','push','carr','mov','squeez','send'],
      fact_en: 'The esophagus is a tube that pushes the food down to the stomach.',
      fact_id: 'Kerongkongan adalah saluran yang mendorong makanan turun ke lambung.' },
    { id: 'stomach',        id_name: 'lambung',      en_name: 'stomach',          bodyOrder: 2, names: ['lambung','stomach'],
      function_words: ['asam','aduk','hancur','bubur','acid','churn','mix','break','mash'],
      fact_en: 'In the stomach, acid breaks the food down and churns it into a soft mush.',
      fact_id: 'Di lambung, asam lambung menghancurkan dan mengaduk makanan menjadi seperti bubur.' },
    { id: 'small_intestine',id_name: 'usus halus',   en_name: 'small intestine',  bodyOrder: 3, names: ['usus halus','small intestine'],
      function_words: ['serap','nyerap','sari','nutrisi','gizi','absorb','nutrient'],
      fact_en: 'In the small intestine, the body absorbs the nutrients from the food.',
      fact_id: 'Di usus halus, sari-sari makanan diserap oleh tubuh.' },
    { id: 'large_intestine',id_name: 'usus besar',   en_name: 'large intestine',  bodyOrder: 4, names: ['usus besar','large intestine','colon'],
      function_words: ['air','feses','kotoran','tinja','water','waste','poop','feces'],
      fact_en: 'In the large intestine, water is absorbed and the rest becomes waste.',
      fact_id: 'Di usus besar, air diserap dan sisanya menjadi kotoran.' },
    { id: 'anus',           id_name: 'anus',         en_name: 'anus',             bodyOrder: 5, names: ['anus','dubur','rectum'],
      function_words: ['keluar','buang','out','leave'],
      fact_en: 'The waste leaves the body through the anus.',
      fact_id: 'Sisa makanan dikeluarkan dari tubuh melalui anus.' },
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

// ── List check ───────────────────────────────────────────────
// Build stems: all organ names, function words, and concept words,
// split on spaces, length >= 3, excluding "food", "pipe", "makanan".
const KEY_STEMS = [...new Set(
  [
    ...RUBRIC.organs.flatMap(o => [...o.names, ...o.function_words]),
    ...RUBRIC.concepts.flatMap(c => c.words),
  ]
    .flatMap(w => w.split(' '))
    .filter(w => w.length >= 3 && !['food', 'pipe', 'makanan'].includes(w))
)];

/**
 * Returns true if the answer looks like a keyword list: 10+ words but
 * fewer than 12% of them are non-rubric (glue) words.
 */
function isListLike(text) {
  const words = text.toLowerCase().match(/[a-z]+/g) || [];
  if (words.length < 10) return false;
  const glue = words.filter(w => !KEY_STEMS.some(k => w.includes(k))).length;
  return glue / words.length < 0.12;
}

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

  // ── List check: keyword dump → functions = 0, order = 0 ──
  const listLike = isListLike(lower);

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

  // ── 2. Functions (first 5 organs only; zero if list-like) ──
  const first5 = RUBRIC.organs.slice(0, 5);
  let functionsCount = 0;
  const functionsMatched = []; // organ ids with function match
  if (!listLike) {
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
  }
  const functionsScore = Math.round(RUBRIC.weights.functions * functionsCount / 5);

  // ── 3. Order (sort by first position, count correct-direction pairs; zero if list-like) ──
  // Only consider organs that were matched
  const matchedOrganObjs = RUBRIC.organs.filter(o => foundOrganIds.includes(o.id));
  // Sort by first appearance position in text
  matchedOrganObjs.sort((a, b) => organMatches[a.id] - organMatches[b.id]);
  let correctPairs = 0;
  if (!listLike) {
    for (let i = 0; i < matchedOrganObjs.length - 1; i++) {
      if (matchedOrganObjs[i].bodyOrder < matchedOrganObjs[i + 1].bodyOrder) {
        correctPairs++;
      }
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
    level, listLike,
    foundOrganIds, functionsMatched, correctPairs, conceptsMatched
  };
}

/**
 * Build up to 2 hint strings for the current language.
 */
function buildHints({ foundOrganIds, functionsMatched, correctPairs, matchedOrganObjs, conceptsMatched, listLike }) {
  const L = LANG[currentLang];
  const hints = [];

  // List-like answer: only one hint
  if (listLike) return [L.hintListLike];

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

// ── Offline template helpers (mirrors worker/worker.js logic) ──────────────
// These produce the same hints and parent message as the Worker's template
// fallback, so online and offline give identical results when the AI is not used.

/**
 * Derive gap / orderProblem / organsMissing from a checkAnswer() result.
 * gap = { id, type: 'missing'|'function' } — first organ in body order that
 *   is either not mentioned at all, or mentioned but not explained.
 */
function computeGap(result) {
  const { foundOrganIds, functionsMatched, correctPairs } = result;
  const matchedCount = foundOrganIds.length;
  const orderProblem = matchedCount > 1 && correctPairs < matchedCount - 1;
  const organsMissing = RUBRIC.organs.map(o => o.id).filter(id => !foundOrganIds.includes(id));

  let gap = null;
  for (const o of RUBRIC.organs) {
    if (!foundOrganIds.includes(o.id)) { gap = { id: o.id, type: 'missing' }; break; }
    if (o.id !== 'anus' && !functionsMatched.includes(o.id)) { gap = { id: o.id, type: 'function' }; break; }
  }

  return { gap, orderProblem, organsMissing };
}

/** Return the organ name in the current UI language. */
function offlineOrganName(organ) {
  return currentLang === 'id' ? organ.id_name : organ.en_name;
}

/**
 * Build up to 2 hint strings matching worker templateHints() logic.
 * Uses the gap and orderProblem from computeGap().
 */
function offlineTemplateHints(result) {
  const id = currentLang === 'id';

  // List-like answer: single hint, mirrors worker templateHints()
  if (result.listLike) {
    return [id
      ? 'Kamu menyebut banyak kata. Sekarang jelaskan dengan kalimat: apa yang terjadi pada makanan di mulut?'
      : 'You listed many words. Now explain in sentences: what happens to the food in the mouth?'];
  }

  const { gap, orderProblem } = computeGap(result);

  if (result.level === 'understands' && !gap && !orderProblem) {
    return [id
      ? 'Luar biasa! Kamu bisa menjelaskan seluruh perjalanan makanan.'
      : 'Amazing! You explained the whole journey of food.'];
  }

  const hints = [];
  if (gap) {
    const o    = RUBRIC.organs.find(x => x.id === gap.id);
    const idx  = RUBRIC.organs.indexOf(o);
    const prev = idx > 0 ? RUBRIC.organs[idx - 1] : null;
    if (gap.type === 'function') {
      hints.push(id
        ? `Kamu sudah menyebut ${offlineOrganName(o)}. Apa yang terjadi pada makanan di sana?`
        : `You mentioned the ${offlineOrganName(o)}. What happens to the food there?`);
    } else if (!prev) {
      hints.push(id ? 'Makanan masuk ke tubuh lewat mana?' : 'Where does food enter the body?');
    } else {
      hints.push(id
        ? `Hebat! Setelah dari ${offlineOrganName(prev)}, makanan pergi ke mana?`
        : `Great job! After the ${offlineOrganName(prev)}, where does the food go next?`);
    }
  }
  if (hints.length < 2 && orderProblem) {
    hints.push(id
      ? 'Coba periksa urutannya. Organ mana yang dilewati makanan lebih dulu?'
      : 'Check the order again. Which organ does the food pass through first?');
  }
  return hints.slice(0, 2);
}

/**
 * Build the structured parent message matching worker templateParent() logic.
 * Returns { learned, still_learning, question, answer } — same shape as the
 * Worker's parent field, ready to be consumed by renderParent().
 */
function offlineTemplateParent(result) {
  const name = LANG[currentLang].parentChildName;
  const { gap } = computeGap(result);
  const id = currentLang === 'id';

  if (!gap) {
    return id
      ? { learned: `Hari ini ${name} belajar tentang pencernaan dan bisa menjelaskan seluruh perjalanan makanan.`,
          still_learning: '',
          question: 'Kenapa kita perlu mengunyah makanan?',
          answer: 'Supaya makanan menjadi kecil dan lunak, sehingga lebih mudah dicerna.' }
      : { learned: `Today ${name} learned about digestion and can explain the whole journey of food.`,
          still_learning: '',
          question: 'Why do we need to chew our food?',
          answer: 'To make the food small and soft, so it is easier to digest.' };
  }

  const o    = RUBRIC.organs.find(x => x.id === gap.id);
  const here = offlineOrganName(o);
  const fact = id ? o.fact_id : o.fact_en;
  const learned = result.foundOrganIds.length
    ? (id ? `Hari ini ${name} belajar tentang pencernaan makanan.`
           : `Today ${name} learned about digestion.`)
    : (id ? `Hari ini ${name} mulai belajar tentang pencernaan makanan.`
           : `Today ${name} started learning about digestion.`);

  return id
    ? { learned,
        still_learning: `${name} masih belajar tentang ${here}.`,
        question: `Apa yang terjadi pada makanan di ${here}?`,
        answer: fact }
    : { learned,
        still_learning: `${name} is still learning about the ${here}.`,
        question: `What happens to food in the ${here}?`,
        answer: fact };
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
    // List-check tests: keyword dumps must score low (functions=0, order=0)
    {
      name: 'LIST-EN', lang: 'en', expected: { total: 40, o: 20, f: 0, r: 0, c: 20 },
      text: 'mouth teeth saliva esophagus push stomach acid small intestine absorb nutrients large intestine water anus out digest energy waste'
    },
    {
      name: 'LIST-ID', lang: 'id', expected: { total: 36, o: 20, f: 0, r: 0, c: 16 },
      text: 'mulut gigi kerongkongan dorong lambung asam usus halus serap sari makanan usus besar air anus keluar cerna energi'
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
    console.log('✅ All 10 rubric tests PASS');
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

// ── AI Worker ────────────────────────────────────────────────
const AI_WORKER_URL = 'https://parent-bridge-ai.awansa.workers.dev';
const AI_TIMEOUT_MS = 8000;

/**
 * POST the child's answer to the AI Worker.
 * Returns the parsed response object, or null on network error / timeout.
 */
async function callWorker(text) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), AI_TIMEOUT_MS);
  try {
    const res = await fetch(AI_WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer: text, lang: currentLang, childName: 'Raka' }),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    return data.ok ? data : null;
  } catch {
    clearTimeout(timer);
    return null;
  }
}

// ── App state ────────────────────────────────────────────────
let lastResult   = null; // last checkAnswer() result, used everywhere
let lastAiResult = null; // last successful Worker response (hints, parent, next_to_learn)

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

  // ── 1 Not done yet ──
  { name: 'Nadia',   level: 'not_done',    talked: false, reason: { en: 'Has not started yet', id: 'Belum mulai' } },
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
  // lastAiResult already contains the worker fields; no need to re-call the worker
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
  // Update voice button text / note for new language
  if (typeof window._refreshVoiceBtn === 'function') window._refreshVoiceBtn();
  // Update demo guide text
  refreshDemoGuide();
}

// ── Voice Answer (Web Speech API) ────────────────────────────
let voiceRecognition   = null; // SpeechRecognition instance
let voiceListening     = false;
let voiceAutoStopTimer = null;
let voiceUserStopped   = false; // true when user pressed Stop → do not restart
const VOICE_MAX_MS     = 60000; // 60-second auto-stop

function initVoiceAnswer() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const voiceBtn     = document.getElementById('voice-btn');
  const voiceNote    = document.getElementById('voice-note');
  const voiceErr     = document.getElementById('voice-error');
  const voiceInd     = document.getElementById('voice-indicator');
  const voicePrev    = document.getElementById('voice-preview');
  const ta           = document.getElementById('answer-ta');

  // Browser does not support Web Speech API
  if (!SpeechRecognition) {
    voiceBtn.style.display  = 'none';
    voiceNote.style.display = 'none';
    voiceErr.textContent    = LANG[currentLang].voiceErrBrowser;
    voiceErr.style.display  = '';
    return;
  }

  voiceBtn.addEventListener('click', () => {
    if (voiceListening) {
      stopVoice(false /* fromError */);
    } else {
      startVoice();
    }
  });

  // sessionFinal: the final text from the current short recognition session
  let sessionFinal = '';

  function startVoice() {
    // Check connectivity
    if (!navigator.onLine) {
      showVoiceError(LANG[currentLang].voiceErrNetwork);
      return;
    }

    voiceRecognition = new SpeechRecognition();
    voiceRecognition.lang           = currentLang === 'id' ? 'id-ID' : 'en-US';
    // Android fix: continuous=false avoids growing partial phrases being appended
    // repeatedly. We restart manually in onend so the child can keep talking.
    voiceRecognition.continuous     = false;
    voiceRecognition.interimResults = true;

    voiceRecognition.onstart = () => {
      voiceListening = true;
      clearVoiceError();
      setVoiceBtnState('listening');

      // Auto-stop after 60 s from the very first start
      if (!voiceAutoStopTimer) {
        voiceAutoStopTimer = setTimeout(() => {
          if (voiceListening) stopVoice(false);
        }, VOICE_MAX_MS);
      }
    };

    voiceRecognition.onresult = (e) => {
      // Only look at the latest result (avoids accumulating partial phrases)
      const r = e.results[e.results.length - 1];
      if (r.isFinal) {
        // REPLACE sessionFinal — never append within a session
        sessionFinal = r[0].transcript.trim();
        // Clear the interim preview now that we have a final result
        voicePrev.textContent  = '';
        voicePrev.style.display = 'none';
      } else {
        // Show interim text in the preview line only — never touch the textarea
        voicePrev.textContent  = 'Listening: ' + r[0].transcript;
        voicePrev.style.display = '';
      }
    };

    voiceRecognition.onerror = (e) => {
      stopVoice(true /* fromError */);
      const L = LANG[currentLang];
      if (e.error === 'not-allowed') {
        showVoiceError(L.voiceErrMic);
      } else if (e.error === 'no-speech') {
        showVoiceError(L.voiceErrNoSpeech);
      } else if (e.error === 'network') {
        showVoiceError(L.voiceErrNetwork);
      } else {
        showVoiceError(L.voiceErrNetwork);
      }
    };

    voiceRecognition.onend = () => {
      // Commit sessionFinal to the textarea exactly once per session
      if (sessionFinal) {
        const existing = ta.value.trimEnd();
        // Safety: do not append if the textarea already ends with this sentence
        if (!existing.endsWith(sessionFinal)) {
          ta.value = existing ? existing + ' ' + sessionFinal : sessionFinal;
          ta.dispatchEvent(new Event('input'));
        }
        sessionFinal = '';
      }
      // Clear the interim preview
      voicePrev.textContent  = '';
      voicePrev.style.display = 'none';

      // If the user pressed Stop (or 60 s elapsed), shut down completely
      if (voiceUserStopped) {
        voiceListening = false;
        voiceUserStopped = false;
        clearTimeout(voiceAutoStopTimer);
        voiceAutoStopTimer = null;
        setVoiceBtnState('idle');
        return;
      }

      // Otherwise restart so the child can keep talking in short sentences
      try {
        voiceRecognition.start();
      } catch (_) {
        voiceListening = false;
        clearTimeout(voiceAutoStopTimer);
        voiceAutoStopTimer = null;
        setVoiceBtnState('idle');
      }
    };

    try {
      voiceRecognition.start();
    } catch (err) {
      showVoiceError(LANG[currentLang].voiceErrNetwork);
    }
  }

  function stopVoice(fromError) {
    voiceUserStopped = !fromError; // flag onend not to restart
    clearTimeout(voiceAutoStopTimer);
    voiceAutoStopTimer = null;
    if (voiceRecognition && voiceListening) {
      try { voiceRecognition.stop(); } catch (_) {}
    }
    if (fromError) {
      voiceListening    = false;
      voiceUserStopped  = false;
      sessionFinal      = '';
      voicePrev.textContent  = '';
      voicePrev.style.display = 'none';
      setVoiceBtnState('idle');
    }
  }

  function setVoiceBtnState(state) {
    const L = LANG[currentLang];
    if (state === 'listening') {
      voiceBtn.classList.add('voice-btn-listening');
      voiceBtn.textContent   = L.voiceStopBtn;
      voiceInd.textContent   = L.voiceListening;
      voiceInd.style.display = '';
    } else {
      voiceBtn.classList.remove('voice-btn-listening');
      voiceBtn.textContent   = L.voiceSpeakBtn;
      voiceInd.style.display = 'none';
    }
  }

  function showVoiceError(msg) {
    voiceErr.textContent   = msg;
    voiceErr.style.display = '';
  }

  function clearVoiceError() {
    voiceErr.textContent   = '';
    voiceErr.style.display = 'none';
  }

  // Expose a refresh function for lang toggle
  window._refreshVoiceBtn = () => {
    if (!voiceListening) {
      voiceBtn.textContent = LANG[currentLang].voiceSpeakBtn;
    } else {
      voiceBtn.textContent = LANG[currentLang].voiceStopBtn;
      voiceInd.textContent = LANG[currentLang].voiceListening;
    }
    voiceNote.textContent = LANG[currentLang].voiceNote;
    // Update lang on active recognition
    if (voiceRecognition) {
      voiceRecognition.lang = currentLang === 'id' ? 'id-ID' : 'en-US';
    }
    // Update browser-not-supported message if shown
    if (!SpeechRecognition) {
      voiceErr.textContent = LANG[currentLang].voiceErrBrowser;
    }
  };
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

  // Check button — calls AI Worker, falls back to local rubric on error/timeout
  btn.addEventListener('click', async () => {
    const text = ta.value.trim();
    if (!text) {
      const emptyMsg = document.getElementById('empty-answer-msg');
      if (emptyMsg) {
        emptyMsg.textContent = LANG[currentLang].emptyAnswer;
        emptyMsg.style.display = 'block';
        setTimeout(() => { emptyMsg.style.display = 'none'; }, 3000);
      }
      return;
    }
    const emptyMsg = document.getElementById('empty-answer-msg');
    if (emptyMsg) emptyMsg.style.display = 'none';

    // Show "Thinking…" while we wait for the worker
    const origLabel = btn.textContent;
    btn.disabled = true;
    btn.textContent = LANG[currentLang].thinking;

    const workerData = await callWorker(text);

    btn.disabled = false;
    btn.textContent = origLabel;

    // Always score locally — the worker uses the same rubric, so results match
    lastResult   = checkAnswer(text);
    lastAiResult = workerData; // null if offline/error

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

  // Initialise voice answer feature
  initVoiceAnswer();
}

function clearResult() {
  document.getElementById('result-area').style.display  = 'none';
  document.getElementById('retry-row').style.display    = 'none';
  document.getElementById('read-again-btn').style.display = 'none';
  lastResult   = null;
  lastAiResult = null;
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

  // Hints — use AI Worker hints if available, else use offline template
  // (offlineTemplateHints mirrors worker templateHints() for consistency)
  const hints = (lastAiResult && Array.isArray(lastAiResult.hints) && lastAiResult.hints.length)
    ? lastAiResult.hints
    : offlineTemplateHints(result);
  hintsDiv.innerHTML = '';
  if (result.level !== 'understands' && hints.length > 0) {
    hints.forEach(h => {
      const div = document.createElement('div');
      div.className = 'hint-item';
      div.textContent = h;
      hintsDiv.appendChild(div);
    });
  }

  // "Feedback by IBM Granite" label (shown when worker returned feedback:"ai")
  // "Checked offline" label (shown when worker was not reached)
  const existingFeedbackLabel = document.getElementById('ai-feedback-label');
  if (existingFeedbackLabel) existingFeedbackLabel.remove();
  const feedbackLabel = document.createElement('div');
  feedbackLabel.id = 'ai-feedback-label';
  feedbackLabel.style.cssText = 'font-size:0.75rem;color:var(--muted);margin-top:6px;';
  if (lastAiResult && lastAiResult.feedback === 'ai') {
    feedbackLabel.textContent = L.aiLabel;
  } else if (!lastAiResult) {
    feedbackLabel.textContent = L.checkedOffline;
  }
  if (feedbackLabel.textContent) hintsDiv.after(feedbackLabel);

  // Update Raka's Teacher entry with this result
  // Reason line for the Teacher view: what was not explained, what was missed, order
  const missingOrgans = RUBRIC.organs.filter(o => !result.foundOrganIds.includes(o.id));
  const reasonGap = computeGap(result);
  let rakaReasonEn, rakaReasonId;
  if (result.level === 'understands') {
    rakaReasonEn = 'Good explanation';
    rakaReasonId = 'Penjelasan bagus';
  } else if (result.listLike) {
    rakaReasonEn = 'Listed words, no sentences';
    rakaReasonId = 'Hanya daftar kata, belum kalimat';
  } else {
    const partsEn = [], partsId = [];
    if (reasonGap.gap && reasonGap.gap.type === 'function') {
      const g = RUBRIC.organs.find(o => o.id === reasonGap.gap.id);
      partsEn.push('Not explained: ' + g.en_name);
      partsId.push('Belum dijelaskan: ' + g.id_name);
    }
    if (missingOrgans.length > 0) {
      const names = missingOrgans.slice(0, 2);
      partsEn.push((partsEn.length ? 'missed: ' : 'Missed: ') + names.map(o => o.en_name).join(', '));
      partsId.push((partsId.length ? 'terlewat: ' : 'Terlewat: ') + names.map(o => o.id_name).join(', '));
    }
    if (reasonGap.orderProblem) {
      partsEn.push(partsEn.length ? 'order needs work' : 'Order needs work');
      partsId.push(partsId.length ? 'urutan perlu diperbaiki' : 'Urutan perlu diperbaiki');
    }
    rakaReasonEn = partsEn.join('; ') || 'Needs more detail';
    rakaReasonId = partsId.join('; ') || 'Perlu lebih lengkap';
  }
  STUDENTS[0].level  = result.level;
  STUDENTS[0].reason = { en: rakaReasonEn, id: rakaReasonId };
  // Store next_to_learn for Teacher view — from worker when online, computeGap when offline
  const gapInfo = computeGap(result);
  STUDENTS[0].nextToLearn = lastAiResult
    ? lastAiResult.next_to_learn
    : (gapInfo.gap ? gapInfo.gap.id : null);

  // Score breakdown (hidden by default, toggle via "Show details")
  const breakdown = document.getElementById('score-breakdown');
  breakdown.innerHTML =
    `<span>🍽️ ${L.detailOrgans}: ${result.organsScore}/20</span>` +
    `<span>⚙️ ${L.detailFunctions}: ${result.functionsScore}/30</span>` +
    `<span>↕️ ${L.detailOrder}: ${result.orderScore}/30</span>` +
    `<span>💡 ${L.detailConcepts}: ${result.conceptsScore}/20</span>` +
    `<span style="grid-column:1/-1;font-size:0.72rem;color:var(--muted);margin-top:4px;">📋 ${L.rubricLabel}</span>`;
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

  const bubble  = document.getElementById('wa-bubble');
  const talkedBtn = document.getElementById('talked-btn');
  const notYetBtn = document.getElementById('notyet-btn');
  const conf      = document.getElementById('confirmation-text');

  const listenBtn = document.getElementById('listen-btn');

  // ── No result yet: show placeholder, hide action buttons ──
  if (!lastResult) {
    bubble.innerHTML = `<p style="color:var(--muted);font-style:italic;">${L.notDoneMsg}</p>`;
    talkedBtn.style.display = 'none';
    notYetBtn.style.display = 'none';
    conf.textContent = '';
    if (listenBtn) listenBtn.style.display = 'none';
    return;
  }

  // ── Result available: show message ──
  talkedBtn.style.display = '';
  notYetBtn.style.display = '';

  let bubbleLines;
  if (lastAiResult && lastAiResult.parent) {
    // Worker returned structured parent fields — use them directly
    const p = lastAiResult.parent;
    bubbleLines = [
      p.learned        || '',
      p.still_learning || '',
      p.question       || '',
      p.answer         || ''
    ];
  } else {
    // Offline — use offlineTemplateParent() which mirrors worker templateParent()
    const p = offlineTemplateParent(lastResult);
    bubbleLines = [p.learned || '', p.still_learning || '', p.question || '', p.answer || ''];
  }

  // Index [2] = tonight's question, index [3] = answer — prepend labels
  bubble.innerHTML = bubbleLines.map((text, i) => {
    if (!text) return '';
    if (i === 2) return `<p><strong>${L.parentAskLabel}</strong> ${text}</p>`;
    if (i === 3) return `<p class="parent-answer-hint"><strong>${L.parentAnswerLabel}</strong> ${text}</p>`;
    return `<p>${text}</p>`;
  }).join('');

  // ── Listen button ──
  if (listenBtn && window.speechSynthesis) {
    listenBtn.style.display = 'block';
    listenBtn.textContent = L.listenBtn;
    // Remove previous handler before re-attaching
    listenBtn.onclick = () => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        listenBtn.textContent = L.listenBtn;
        return;
      }
      const fullText = bubbleLines.filter(Boolean).join('. ');
      const utt = new SpeechSynthesisUtterance(fullText);
      utt.lang = currentLang === 'id' ? 'id-ID' : 'en-US';
      utt.onend = () => { listenBtn.textContent = L.listenBtn; };
      utt.onerror = () => { listenBtn.textContent = L.listenBtn; };
      window.speechSynthesis.speak(utt);
      listenBtn.textContent = L.listenStop;
    };
  } else if (listenBtn) {
    listenBtn.style.display = 'none';
  }

  // Restore button state (in case previously hidden)
  talkedBtn.textContent = L.talkedBtn;
  notYetBtn.textContent = L.notYetBtn;
  talkedBtn.disabled = false;
  notYetBtn.disabled = false;
  conf.textContent = '';

  // Re-attach handlers (fresh render)
  talkedBtn.onclick = () => {
    STUDENTS[0].talked = true;
    conf.textContent = L.thanksMsg;
    talkedBtn.disabled = true;
    notYetBtn.disabled = true;
    renderTeacher();
  };
  notYetBtn.onclick = () => {
    STUDENTS[0].talked = false;
    conf.textContent = L.thanksMsg;
    talkedBtn.disabled = true;
    notYetBtn.disabled = true;
    renderTeacher();
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

  // ── Stats line: talked / level counts ──
  const statsEl = document.getElementById('teacher-stats');
  if (statsEl) {
    const talked = STUDENTS.filter(s => s.talked).length;
    const u  = STUDENTS.filter(s => s.level === 'understands').length;
    const p  = STUDENTS.filter(s => s.level === 'partly').length;
    const n  = STUDENTS.filter(s => s.level === 'needs_help').length;
    const nd = STUDENTS.filter(s => s.level === 'not_done').length;
    statsEl.textContent = L.teacherStats
      .replace('{talked}', talked)
      .replace('{total}', STUDENTS.length)
      .replace('{u}',  u)
      .replace('{p}',  p)
      .replace('{n}',  n)
      .replace('{nd}', nd);
  }

  // ── Needs-help section: needs_help + not_done ──
  const nhList = document.getElementById('needs-help-list');
  const priority = STUDENTS.filter(s => s.level === 'needs_help' || s.level === 'not_done');
  if (priority.length === 0) {
    nhList.innerHTML = `<p style="color:#8b2e0e;font-size:0.9rem;">${L.noNeedsHelp}</p>`;
  } else {
    nhList.innerHTML = priority.map(s => {
      const idx = STUDENTS.indexOf(s);
      let reasonText = s.reason[currentLang];
      if (idx === 0 && s.nextToLearn) {
        const nextOrgan = RUBRIC.organs.find(o => o.id === s.nextToLearn);
        if (nextOrgan) {
          const nextName = currentLang === 'id' ? nextOrgan.id_name : nextOrgan.en_name;
          const nextLabel = currentLang === 'id' ? `· Berikutnya: ${nextName}` : `· Next: ${nextName}`;
          reasonText = reasonText ? `${reasonText} ${nextLabel}` : nextLabel;
        }
      }
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
    let reasonText = s.reason[currentLang];
    // For Raka, append next_to_learn from the worker when available
    if (idx === 0 && s.nextToLearn) {
      const nextOrgan = RUBRIC.organs.find(o => o.id === s.nextToLearn);
      if (nextOrgan) {
        const nextName = currentLang === 'id' ? nextOrgan.id_name : nextOrgan.en_name;
        const nextLabel = currentLang === 'id'
          ? `· Berikutnya: ${nextName}`
          : `· Next: ${nextName}`;
        reasonText = reasonText ? `${reasonText} ${nextLabel}` : nextLabel;
      }
    }
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

  // Init demo guide card
  initDemoGuide();

  // Default view
  showView('child');
});

// ── Demo guide (dismissible card at top of Child tab) ────────
function initDemoGuide() {
  const card = document.getElementById('demo-guide');
  const closeBtn = document.getElementById('demo-guide-close');
  if (!card || !closeBtn) return;

  refreshDemoGuide();

  closeBtn.addEventListener('click', () => {
    card.style.display = 'none';
  });
}

function refreshDemoGuide() {
  const L = LANG[currentLang];
  const textEl = document.getElementById('demo-guide-text');
  const noteEl = document.getElementById('demo-guide-note');
  if (textEl) textEl.textContent = L.demoGuideText;
  if (noteEl) noteEl.textContent = L.demoGuideNote;
}
