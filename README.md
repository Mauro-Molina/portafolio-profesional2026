# Mauro Molina — Premium Portfolio

Production-ready personal portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Lenis, and shadcn/ui patterns.

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lenis smooth scrolling
- Lucide + React Icons
- Resend-ready contact API
- GitHub API integration

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
| --- | --- |
| `GITHUB_USERNAME` | GitHub username for live repos/stats |
| `GITHUB_TOKEN` | Optional token for higher API rate limits |
| `RESEND_API_KEY` | Enables real contact email delivery |
| `CONTACT_TO_EMAIL` | Inbox that receives form messages |
| `CONTACT_FROM_EMAIL` | Verified Resend sender |

Without `RESEND_API_KEY`, the contact endpoint logs submissions and still returns success (useful for local/demo).

## Assets to replace

- `public/images/profile.svg` → your portrait (`profile.jpg` / `profile.png` recommended)
- `public/projects/*.svg` → real project screenshots
- `public/cv/Mauro-Molina-CV.pdf` → your CV file
- `public/og.svg` → Open Graph image
- Update links/email in `src/data/site.ts`

## Deploy on Vercel

1. Push this repository to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

```bash
npm run build
npm start
```

## Architecture

```
src/
  app/           # App Router pages, SEO, API routes
  components/    # UI, layout, effects, providers
  sections/      # Page sections
  hooks/         # Magnetic, mouse, media, scroll hooks
  lib/           # utils, github, seo, i18n
  data/          # CMS-ready content modules
  types/         # Shared TypeScript types
```

Content is isolated in `src/data` so you can later swap in a CMS or i18n layer without rewriting UI.
