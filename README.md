# Parent Bridge

**Part of Wansa Learning Universe · IBM AI Builders Challenge – AI for Good**

Parent Bridge helps busy parents talk with their children about what they learned at school, in one short conversation each evening.

**Live demo:** https://parent-bridge.pages.dev
(Works on phone and laptop. Voice answer works best in Chrome.)

---

## The problem

At Wansa School in Halmahera Selatan, Indonesia, many parents work long hours. They want to help their children learn, but they do not know *what* their child learned today or *what to ask*. Teachers also cannot see, every day, which students need help.

## How it works

Parent Bridge has three views:

| View | What happens |
| --- | --- |
| **Child** | The child reads a short lesson (example: the digestive system), then explains it back in their own words, by **typing or speaking**. The app gives a score and one friendly hint. |
| **Parent** | The parent gets a short message: what the child understood, what the child is still learning, and **one question to ask tonight, with the answer**. The parent taps "We talked about it". |
| **Teacher** | The teacher sees the whole class: who needs help today, which topic was missed most often, and which families talked at home. |

The child can answer in **English or Indonesian**. The whole app can switch between EN and ID.

## How AI is used

1. **Scoring is done by a clear rubric**, not by AI guessing. The rubric checks organs named (20), functions explained (30), correct order (30), and key ideas (20). The same answer always gets the same score.
2. **IBM Granite writes the words**: the hint for the child and the praise sentence for the parent. It runs on Cloudflare Workers AI (`@cf/ibm-granite/granite-4.0-h-micro`).
3. **Safety checks**: every Granite sentence is checked before it is shown. Off-topic, wrong-science, or unsafe text is replaced with a safe template. The parent's "answer" always comes from the lesson facts, never from AI. Granite's text is checked sentence by sentence: only sentences about the right organ are shown, and the label "Feedback by IBM Granite" appears only when Granite text is really used.
4. **Keyword lists do not get full marks**: an answer that only lists science words, without sentences, gets no points for functions or order, and the child is asked to explain in sentences.
5. **Offline fallback**: if there is no internet, the app scores the answer on the device and shows "Checked offline".

## Voice answer

Many young children find typing hard. They can press **🎤 Speak / Bicara** and talk. Their words become text, which they can fix before checking.
- Uses the browser's built-in speech recognition (needs internet and Chrome).
- **No recording is saved** by Parent Bridge.
- Speech is turned into text by the browser's speech service (in Chrome, this is Google). Parent Bridge does not store any audio.

## Privacy

- This demo uses **simulated students only**. No real student data is stored.
- No child names are entered in the demo.
- No voice recordings are kept.

## Feasibility and cost

- **Nothing to install.** Parent Bridge opens in the phone's browser. Tested on Android (Chrome) and iPhone (Safari).
- **Works with weak internet.** The rubric runs on the phone, so checking still works offline ("Checked offline"). Only Granite's words need the internet.
- **Very low running cost.** Based on Cloudflare's published prices for IBM Granite 4.0 H Micro ($0.017 per million input tokens, $0.112 per million output tokens, November 2026), one answer (about 600 input and 150 output tokens) costs about **$0.00003**. Cloudflare's free allowance of 10,000 Neurons per day covers roughly **4,000 answers a day**. One class of 25 children needs far less.
- **Ready to pilot.** Wansa School (grades 4–6) will pilot Parent Bridge from January 2027 with real accounts and parent consent. Wansa Universe, the school's free learning game, already reaches students in 198 schools across 23 provinces, so there is a ready channel to grow.

## Add a new topic

The learning loop is the same for every topic. A teacher only writes two things:

1. **The lesson**: a short title, a picture, and one fact per step (see `LESSON_IMAGES` and the lesson cards in `app.js`).
2. **The rubric**: the key parts, the words that show each part's job, the right order, and the key ideas (see `RUBRIC` in `app.js` and `ORGANS` / `CONCEPTS` in `worker/worker.js`).

The scoring, hints, IBM Granite feedback, safety checks, parent message and teacher view all work from these two pieces. Next topics for the pilot: the water cycle and food chains (science), then math and Indonesian topics linked to the Wansa Universe games.

## Built with

- HTML, CSS, JavaScript (no framework)
- **IBM Bob** – planned and wrote the app code
- **IBM Granite** on Cloudflare Workers AI – child hints and parent messages
- Cloudflare Pages – hosting

## Files

```
index.html        app page
style.css         design
app.js            app logic, rubric, offline fallback, voice answer
images/           digestive system diagram and organ icons
worker/worker.js  Cloudflare Worker (rubric + IBM Granite + safety checks)
parent-bridge-plan.md  project plan used with IBM Bob
```

## Run it yourself

Open `index.html` in a browser, or visit the live demo. The voice button needs an `https` address, so test voice on the live demo.

## About

Made by Ady Saputra Wansa, owner of **Wansa School**, Halmahera Selatan, Indonesia.
Wansa School's free learning game, **Wansa Universe**, is already played by students across Indonesia. Parent Bridge is the next step: bringing that learning home to parents.

*"Dari Halmahera, untuk dunia."*
