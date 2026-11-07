// Parent Bridge AI Worker
//
// How it works:
// 1. A transparent rubric engine scores the child's explanation (same rules
//    as the app's offline checker), so scores are consistent and explainable.
// 2. IBM Granite (Cloudflare Workers AI) turns those results into warm, personal
//    hints for the child and a short message for the parent, in English or
//    Indonesian.
// 3. Safety: the factual answer given to parents always comes from the
//    teacher's lesson text, and every AI text has a template fallback.
//
// Setup in the Cloudflare dashboard:
//   Workers & Pages > parent-bridge-ai > Edit code > paste this file > Deploy
//   Settings > Bindings > Workers AI > Variable name: AI
//
// Quick test in a browser:
//   https://parent-bridge-ai.awansa.workers.dev/?lang=en&answer=Food goes into the mouth...

const MODEL = "@cf/ibm-granite/granite-4.0-h-micro";
const MAX_ANSWER_CHARS = 2000;

// ---------- Teacher's rubric ----------
const ORGANS = [
  {
    id: "mouth", en: "mouth", idn: "mulut",
    names: ["mulut", "mouth"],
    fnWords: ["kunyah", "unyah", "gigi", "liur", "ludah", "chew", "teeth", "saliva"],
    fact_en: "In the mouth, teeth chew the food and saliva makes it soft.",
    fact_id: "Di mulut, gigi mengunyah makanan dan air liur membuatnya lunak.",
  },
  {
    id: "esophagus", en: "esophagus", idn: "kerongkongan",
    names: ["kerongkongan", "esofagus", "esophagus", "oesophagus", "food pipe", "gullet"],
    fnWords: ["dorong", "salur", "nyalur", "remas", "push", "carr", "mov", "squeez", "send"],
    fact_en: "The esophagus is a tube that pushes the food down to the stomach.",
    fact_id: "Kerongkongan adalah saluran yang mendorong makanan turun ke lambung.",
  },
  {
    id: "stomach", en: "stomach", idn: "lambung",
    names: ["lambung", "stomach"],
    fnWords: ["asam", "aduk", "hancur", "bubur", "acid", "churn", "mix", "break", "mash"],
    fact_en: "In the stomach, acid breaks the food down and churns it into a soft mush.",
    fact_id: "Di lambung, asam lambung menghancurkan dan mengaduk makanan menjadi seperti bubur.",
  },
  {
    id: "small_intestine", en: "small intestine", idn: "usus halus",
    names: ["usus halus", "small intestine"],
    fnWords: ["serap", "nyerap", "sari", "nutrisi", "gizi", "absorb", "nutrient"],
    fact_en: "In the small intestine, the body absorbs the nutrients from the food.",
    fact_id: "Di usus halus, sari-sari makanan diserap oleh tubuh.",
  },
  {
    id: "large_intestine", en: "large intestine", idn: "usus besar",
    names: ["usus besar", "large intestine", "colon"],
    fnWords: ["air", "feses", "kotoran", "tinja", "water", "waste", "poop", "feces"],
    fact_en: "In the large intestine, water is absorbed and the rest becomes waste.",
    fact_id: "Di usus besar, air diserap dan sisanya menjadi kotoran.",
  },
  {
    id: "anus", en: "anus", idn: "anus",
    names: ["anus", "dubur", "rectum"],
    fnWords: ["keluar", "buang", "out", "leave"],
    fact_en: "The waste leaves the body through the anus.",
    fact_id: "Sisa makanan dikeluarkan dari tubuh melalui anus.",
  },
];
const ORGAN_IDS = ORGANS.map((o) => o.id);
const CONCEPTS = [
  { id: "digest", words: ["cerna", "digest"] },
  { id: "nutrients", words: ["sari makanan", "nutrisi", "gizi", "nutrient"] },
  { id: "absorb", words: ["serap", "nyerap", "absorb"] },
  { id: "waste", words: ["sisa", "kotoran", "feses", "tinja", "waste", "poop", "feces"] },
  { id: "energy", words: ["energi", "tenaga", "energy"] },
];
const WEIGHTS = { organs: 20, functions: 30, order: 30, concepts: 20 };

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", ...CORS },
  });
}

function str(v, max = 300) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function wholeWord(name, text) {
  const m = new RegExp("(?<![a-z])" + escapeRe(name) + "(?![a-z])").exec(text);
  return m ? m.index : -1;
}

function organName(o, lang) {
  return lang === "id" ? o.idn : o.en;
}

// ---------- 1. Rubric engine ----------
function scoreAnswer(answer) {
  const t = answer.toLowerCase();
  const sentences = t.split(/[.!?\n]+/).filter((s) => s.trim());

  const pos = {};
  for (const o of ORGANS) {
    const hits = o.names.map((n) => wholeWord(n, t)).filter((i) => i >= 0);
    if (hits.length) pos[o.id] = Math.min(...hits);
  }
  const mentioned = ORGAN_IDS.filter((id) => id in pos);

  const withFn = [];
  for (const o of ORGANS.slice(0, 5)) {
    if (!(o.id in pos)) continue;
    const ok = sentences.some(
      (s) => o.names.some((n) => wholeWord(n, s) >= 0) && o.fnWords.some((w) => s.includes(w))
    );
    if (ok) withFn.push(o.id);
  }

  const seq = Object.keys(pos).sort((a, b) => pos[a] - pos[b]);
  let pairs = 0;
  for (let i = 1; i < seq.length; i++) {
    if (ORGAN_IDS.indexOf(seq[i - 1]) < ORGAN_IDS.indexOf(seq[i])) pairs++;
  }
  const orderProblem = seq.length > 1 && pairs < seq.length - 1;

  const concepts = CONCEPTS.filter((c) => c.words.some((w) => t.includes(w))).map((c) => c.id);

  const breakdown = {
    organs: Math.round((WEIGHTS.organs * mentioned.length) / 6),
    functions: Math.round((WEIGHTS.functions * withFn.length) / 5),
    order: Math.round((WEIGHTS.order * pairs) / 5),
    concepts: Math.round((WEIGHTS.concepts * concepts.length) / 5),
  };
  const total = breakdown.organs + breakdown.functions + breakdown.order + breakdown.concepts;
  const level = total >= 80 ? "understands" : total >= 50 ? "partly" : "needs_help";

  // First gap in body order: an organ not mentioned, or mentioned without its function
  let gap = null;
  for (const o of ORGANS) {
    if (!(o.id in pos)) { gap = { id: o.id, type: "missing" }; break; }
    if (o.id !== "anus" && !withFn.includes(o.id)) { gap = { id: o.id, type: "function" }; break; }
  }

  return {
    total, level, breakdown,
    organs_mentioned: mentioned,
    organs_in_child_order: seq,
    organs_with_function: withFn,
    organs_missing: ORGAN_IDS.filter((id) => !(id in pos)),
    order_problem: orderProblem,
    concepts_used: concepts,
    gap,
  };
}

// ---------- Template texts (used as fallback, and for the parent answer) ----------
function templateHints(r, lang) {
  const id = lang === "id";
  if (r.level === "understands" && !r.gap && !r.order_problem) {
    return [id ? "Luar biasa! Kamu bisa menjelaskan seluruh perjalanan makanan." : "Amazing! You explained the whole journey of food."];
  }
  const hints = [];
  if (r.gap) {
    const o = ORGANS.find((x) => x.id === r.gap.id);
    const idx = ORGAN_IDS.indexOf(r.gap.id);
    const prev = idx > 0 ? ORGANS[idx - 1] : null;
    if (r.gap.type === "function") {
      hints.push(id ? `Kamu sudah menyebut ${organName(o, lang)}. Apa yang terjadi pada makanan di sana?` : `You mentioned the ${organName(o, lang)}. What happens to the food there?`);
    } else if (!prev) {
      hints.push(id ? "Makanan masuk ke tubuh lewat mana?" : "Where does food enter the body?");
    } else {
      hints.push(id ? `Hebat! Setelah dari ${organName(prev, lang)}, makanan pergi ke mana?` : `Great job! After the ${organName(prev, lang)}, where does the food go next?`);
    }
  }
  if (r.order_problem) {
    hints.push(id ? "Coba periksa urutannya. Organ mana yang dilewati makanan lebih dulu?" : "Check the order again. Which organ does the food pass through first?");
  }
  return hints.slice(0, 2);
}

function templateParent(r, lang, name) {
  const id = lang === "id";
  if (!r.gap) {
    return id
      ? { learned: `Hari ini ${name} belajar tentang pencernaan dan bisa menjelaskan seluruh perjalanan makanan.`, still_learning: "", question: "Kenapa kita perlu mengunyah makanan?", answer: "Supaya makanan menjadi kecil dan lunak, sehingga lebih mudah dicerna." }
      : { learned: `Today ${name} learned about digestion and can explain the whole journey of food.`, still_learning: "", question: "Why do we need to chew our food?", answer: "To make the food small and soft, so it is easier to digest." };
  }
  const o = ORGANS.find((x) => x.id === r.gap.id);
  const here = organName(o, lang);
  const fact = id ? o.fact_id : o.fact_en;
  const learned = r.organs_mentioned.length
    ? (id ? `Hari ini ${name} belajar tentang pencernaan makanan.` : `Today ${name} learned about digestion.`)
    : (id ? `Hari ini ${name} mulai belajar tentang pencernaan makanan.` : `Today ${name} started learning about digestion.`);
  return id
    ? { learned, still_learning: `${name} masih belajar tentang ${here}.`, question: `Apa yang terjadi pada makanan di ${here}?`, answer: fact }
    : { learned, still_learning: `${name} is still learning about the ${here}.`, question: `What happens to food in the ${here}?`, answer: fact };
}

// ---------- 2. IBM Granite writes the feedback ----------
function buildPrompt(r, lang, name) {
  const L = lang === "id" ? "Indonesian (Bahasa Indonesia)" : "English";
  const nm = (ids) => ids.map((x) => organName(ORGANS.find((o) => o.id === x), lang)).join(", ") || "-";
  const gapOrgan = r.gap ? ORGANS.find((o) => o.id === r.gap.id) : null;
  const gapText = gapOrgan
    ? `${organName(gapOrgan, lang)} (${r.gap.type === "missing" ? "not mentioned yet" : "mentioned, but its job was not explained"})`
    : "none - the explanation is complete";
  const fact = gapOrgan ? (lang === "id" ? gapOrgan.fact_id : gapOrgan.fact_en) : "";

  const system = `You write short, warm, simple messages for a 10-year-old child and for their busy parent, about a science lesson on digestion. You only use the facts you are given. You never add new science facts. Reply with ONE JSON object only.`;

  const user = `Facts from the teacher's rubric (already checked, do not change them):
- Child's name: ${name}
- Result: ${r.level === "understands" ? "understands" : r.level === "partly" ? "partly understands" : "needs help"}
- Organs the child explained well: ${nm(r.organs_with_function)}
- Organs the child mentioned: ${nm(r.organs_mentioned)}
- Organs not mentioned yet: ${nm(r.organs_missing)}
- Order of organs is ${r.order_problem ? "NOT correct yet" : "fine"}
- Next thing to learn: ${gapText}
- Lesson fact about the next thing: ${fact || "-"}

Write in ${L}. Return JSON with these keys:
"child_hints": 1 or 2 short, friendly questions (one sentence each) for the child that point to the next thing to learn${r.order_problem ? " and ask the child to check the order" : ""}. Do not give the answer.
"parent_learned": ONE short sentence to the parent, starting with "${lang === "id" ? "Hari ini " + name : "Today " + name}", praising what ${name} explained well. Use only the organ names listed above.`;
  return { system, user };
}

function extractJson(text) {
  if (!text) return null;
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end <= start) return null;
  try { return JSON.parse(text.slice(start, end + 1)); } catch { return null; }
}

async function aiFeedback(env, r, lang, name) {
  const { system, user } = buildPrompt(r, lang, name);
  const reply = await env.AI.run(MODEL, {
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
    max_tokens: 400,
    temperature: 0.3,
  });
  const text = typeof reply === "string" ? reply : reply?.response ?? reply?.choices?.[0]?.message?.content ?? "";
  return extractJson(typeof text === "string" ? text : JSON.stringify(text));
}

// Safety checks on AI text: short, one idea, no known wrong science words
const BANNED = /\b(my child|anak saya|bakar|dibakar|membakar|terbakar|burn|burns|burned|burnt|fire)\b|[{}]|http/i;
function sentenceCount(s) {
  return (s.match(/[.!?](\s|$)/g) || []).length;
}
function looksOk(s, max = 200, maxSentences = 1) {
  if (!s || s.length < 8 || s.length > max) return false;
  if (BANNED.test(s)) return false;
  if (sentenceCount(s) > maxSentences) return false;
  return true;
}

async function check(env, answer, lang, name) {
  const r = scoreAnswer(answer);
  const fallbackHints = templateHints(r, lang);
  const fallbackParent = templateParent(r, lang, name);

  let hints = fallbackHints;
  let parent = { ...fallbackParent };
  let feedbackSource = "template";

  if (env.AI) {
    try {
      const ai = await aiFeedback(env, r, lang, name);
      if (ai) {
        // Each AI hint must stay on topic: about the next organ to learn,
        // or (if the order is wrong) about the order.
        const gapOrg = r.gap ? ORGANS.find((o) => o.id === r.gap.id) : null;
        const orderWordRe = /urutan|order|first|lebih dulu|duluan/i;
        const onTopic = (h) =>
          !gapOrg ||
          gapOrg.names.some((n) => h.toLowerCase().includes(n)) ||
          (r.order_problem && orderWordRe.test(h));
        const aiHints = Array.isArray(ai.child_hints)
          ? ai.child_hints
              .map((h) => str(h, 200).replace(/\bdigesti\b/gi, lang === "id" ? "pencernaan" : "digestion"))
              .filter((h) => looksOk(h, 160, 2) && onTopic(h))
              .slice(0, 2)
          : [];
        if (aiHints.length) {
          hints = aiHints;
          // If the order is wrong, make sure one hint is about the order
          const orderWord = /urutan|order|first|lebih dulu|duluan/i;
          if (r.order_problem && !hints.some((h) => orderWord.test(h))) {
            hints = [hints[0], fallbackHints[fallbackHints.length - 1]];
          }
        }

        // AI writes only the personal "what went well" sentence for the parent.
        // "Still learning", the question and the answer come from the lesson text,
        // so the parent always gets correct and matching information.
        const learned = str(ai.parent_learned).replace(/\bdigesti\b/gi, lang === "id" ? "pencernaan" : "digestion");
        const start = lang === "id" ? "hari ini " + name.toLowerCase() : "today " + name.toLowerCase();
        if (looksOk(learned, 180) && learned.toLowerCase().startsWith(start)) parent.learned = learned;
        feedbackSource = "ai";
      }
    } catch (e) {
      feedbackSource = "template";
    }
  }

  const { gap, ...result } = r;
  return {
    ok: true,
    scoring: "rubric",
    feedback: feedbackSource,
    model: feedbackSource === "ai" ? MODEL : null,
    lang,
    ...result,
    next_to_learn: gap ? gap.id : null,
    hints,
    parent,
  };
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });

    let answer = "";
    let lang = "en";
    let childName = "";

    if (request.method === "POST") {
      let body = {};
      try { body = await request.json(); } catch {
        return json({ ok: false, error: "Send JSON: {\"answer\": \"...\", \"lang\": \"en\"}" }, 400);
      }
      answer = String(body.answer || "");
      lang = body.lang === "id" ? "id" : "en";
      childName = str(body.childName, 40);
    } else if (request.method === "GET") {
      const url = new URL(request.url);
      answer = url.searchParams.get("answer") || "";
      lang = url.searchParams.get("lang") === "id" ? "id" : "en";
      childName = str(url.searchParams.get("childName") || "", 40);
      if (!answer) {
        return json({ ok: true, message: "Parent Bridge AI is running. Add ?answer=... to test.", model: MODEL });
      }
    } else {
      return json({ ok: false, error: "Use GET or POST" }, 405);
    }

    answer = answer.trim().slice(0, MAX_ANSWER_CHARS);
    if (answer.length < 3) return json({ ok: false, error: "Answer is empty" }, 400);

    return json(await check(env, answer, lang, childName || "Raka"));
  },
};
