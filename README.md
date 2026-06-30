# On Service — The Intern Field Guide

A single-file, offline-capable web app for the 30-day intern curriculum.
Everything (lessons, interactive workup cases, toolkit, progress tracking) lives
in `index.html`. No build step, no server, no external dependencies.

## Open it now
Double-click `index.html`, or use the local link:
`file:///Users/chiraglodha/Desktop/Claude/on-service/index.html`

## Make it a real shareable URL (pick one)
Because it's a single static file, any static host works:

1. **Netlify Drop (fastest, no account needed for a quick link)**
   Go to https://app.netlify.com/drop and drag the `on-service` folder in.
   You get a live `https://…netlify.app` URL in ~10 seconds.

2. **GitHub Pages**
   ```bash
   cd ~/Desktop/Claude/on-service
   git init && git add . && git commit -m "On Service field guide"
   # create a repo named e.g. on-service, then:
   git remote add origin https://github.com/<you>/on-service.git
   git push -u origin main
   # In repo Settings → Pages → deploy from main branch (root).
   # URL: https://<you>.github.io/on-service/
   ```

3. **Email / AirDrop the file** — it runs anywhere a browser can open it.

## What's inside
- **Lessons** — Day 01 (7-Minute Pre-Round), Day 02 (90-Second Presentation),
  Day 03 (Notes That Don't Take Three Hours). Mark-as-read progress.
- **Workups** — 21 interactive cases, **filterable by acuity** (🟢 Stable /
  🟡 Watcher / 🔴 Sick). Each shows a 6 AM chart, asks for your one-liner +
  workup, then reveals a model one-liner, a differential, a **"don't anchor —
  confounders & can't-miss"** section (the diagnoses that get anchored away and
  the lethal mimics), targeted workup, initial management, and a pearl.
  Self-grade each.
  - **Memory-hook patients (🧠):** some patients are named as mnemonics — the
    surname is the clue. e.g. **Mr. Tropp** (ACS → troponin), **Mrs. Epps**
    (anaphylaxis → EpiPen), **Mr. Charcot** (cholangitis → Charcot's triad),
    **Mr. Murphy** (cholecystitis → Murphy's sign), **Mr. Virchow** (DVT →
    Virchow's triad), **Mr. Whipple** (hypoglycemia → Whipple's triad),
    **Ms. Addison** (adrenal crisis), **Mr. Osler** (endocarditis → Osler
    nodes/Duke), **Mr. Light** (pleural effusion → Light's criteria).
- **Tips & Tricks** — the "unwritten curriculum": 38 practical intern habits in
  8 collapsible categories (speed & survival, rounds & presenting, notes, pages
  & cross-cover, calling consults, communication, procedures, wellbeing &
  growth), plus a tap-for-another random tip.
- **Toolkit** — copy-to-clipboard smart-phrase templates (one-liner,
  90-sec presentation, daily note), the 7-minute checklist, and workup reflexes.

Progress is saved in the browser (localStorage). Reset from the Toolkit tab.

Educational content; not a substitute for clinical judgment or institutional policy.
