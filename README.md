# danilzanozin.dev

Personal portfolio for Danil Zanozin — ML / AI Engineer. Live at
**[danilzanozin.dev](https://danilzanozin.dev)**.

Single-page site, dark / neutral aesthetic, built to share one design language with
[traciora.com](https://traciora.com) and [danilzanozin.com](https://danilzanozin.com).

## Stack

- **Vite + React 18**
- **Tailwind CSS 3** (design tokens in `tailwind.config.js`)
- **Motion** (`motion/react`) for animation, **OGL** for the hero WebGL aurora
- A few [ReactBits](https://reactbits.dev) components in `src/components/reactbits/`
- Deployed on **Vercel**

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

- `src/data/content.js` — **all copy** (positioning, projects, skills, links). Edit here.
- `src/components/sections/` — one file per section (Hero, About, Work, Highlights, Stack, Beyond, Footer).
- `src/components/reactbits/` — vendored ReactBits components.
- `public/` — static assets (`portrait.jpg`, `resume.pdf`).

## Résumé

The hosted résumé is generated from LaTeX:

```bash
pdflatex resume/resume.tex      # run twice; output → resume.pdf
cp resume.pdf public/resume.pdf
```

The source (`resume/resume.tex`) is a phone-stripped, general-purpose version intended
for public hosting.

## Deploy

```bash
npx vercel --prod
```

Vercel builds with `vite build` and serves `dist/` (see `vercel.json`). The apex domain
auto-assigns to the latest production deployment.
