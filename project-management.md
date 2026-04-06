# Project Management — Educar International Website

## Project Overview

**Project Name:** Educar International
**Type:** Educational Consultancy Landing Page / AI Studio Applet
**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Framer Motion
**Deployment:** Google AI Studio (standalone/containerized)
**Current Version:** 0.1.0
**Branch:** main

---

## Goals

Build a modern, production-ready consultancy website for Educar International — a platform helping students navigate studying abroad. The site should:

- Present 8 destination universities with country-based filtering
- Clearly explain 3 core services: University Admissions, Visa Assistance, Career Counseling
- Build trust via testimonials from past students
- Capture leads through a contact form
- Optionally surface Gemini AI-powered features (API key already wired in)

---

## Current State (as of 2026-03-30)

### Done
- [x] Project scaffolded (Next.js 15 + TypeScript + Tailwind CSS 4)
- [x] Root layout with Google Fonts (Inter, Space Grotesk, JetBrains Mono)
- [x] Full landing page (`app/page.tsx`) with all major sections
- [x] Floating navigation bar with dark/light theme toggle
- [x] Scroll progress indicator
- [x] Active section tracking (Intersection Observer)
- [x] Hero section with headline and scroll indicator
- [x] Destinations section — 8 universities, country filter (UK, USA, Canada, Australia)
- [x] Expertise section — 3 service cards
- [x] Approach section — split layout with methodology image
- [x] Testimonials section — 3 student stories
- [x] Footer CTA with contact form (Name, Email, Message)
- [x] Dark/Light mode with CSS custom properties
- [x] Framer Motion animations throughout
- [x] Mobile-responsive layout
- [x] `use-mobile.ts` hook for breakpoint detection
- [x] Google Gemini API dependency and `.env.example` configured
- [x] Firebase tools installed (deployment ready)
- [x] Git repository initialized, clean main branch

### In Progress
- [ ] Nothing currently in progress

---

## Backlog / Upcoming Work

### High Priority
- [ ] Wire up contact form — add server action or API route to handle submissions (email/CRM)
- [ ] Add real university logos and images (currently using placeholder/picsum)
- [ ] Implement Gemini AI feature — e.g., university recommendation chatbot, eligibility checker
- [ ] SEO: add Open Graph tags, Twitter cards, sitemap.xml, robots.txt
- [ ] Analytics integration (Google Analytics or Plausible)

### Medium Priority
- [ ] Add more destinations (expand beyond 8 universities)
- [ ] Blog / Resources section (study abroad tips, visa guides)
- [ ] Success stories / case studies page
- [ ] Team / About page
- [ ] FAQ section or accordion
- [ ] Testimonial carousel for mobile

### Low Priority / Nice to Have
- [ ] Multi-language support (i18n)
- [ ] CMS integration (Contentful / Sanity) for content updates without code changes
- [ ] Admin dashboard for lead management
- [ ] Live chat / WhatsApp integration

---

## Tech Stack Reference

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js | ^15.4.9 |
| UI Library | React | ^19.2.1 |
| Language | TypeScript | 5.9.3 |
| Styling | Tailwind CSS | 4.1.11 |
| Animation | Framer Motion (motion) | ^12.23.24 |
| Icons | Lucide React | ^0.553.0 |
| AI | Google Gemini (@google/genai) | ^1.17.0 |
| Form Validation | @hookform/resolvers | ^5.2.1 |
| Deployment | Firebase / Google AI Studio | — |

---

## Brand / Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-brand-purple` | `#7B2E83` | Primary accent, CTAs |
| `--color-brand-yellow` | `#FFD36A` | Highlights, selection |
| `--color-brand-dark` | `#2A0835` | Dark mode background |
| `--color-brand-light` | `#FDFBFD` | Light mode background |
| Font (sans) | Inter | Body text |
| Font (display) | Space Grotesk | Headings |
| Font (mono) | JetBrains Mono | Code/labels |

---

## File Map

```
app/
  layout.tsx       — Root layout, fonts, metadata ("ProDev Consultancy" title — update to Educar International)
  page.tsx         — Entire landing page (all sections in one file)
  globals.css      — Tailwind + CSS custom properties / brand tokens
lib/
  utils.ts         — cn() classname helper (clsx + tailwind-merge)
hooks/
  use-mobile.ts    — useIsMobile() hook (breakpoint: 768px)
```

---

## Known Issues / Tech Debt

| Issue | Severity | Notes |
|---|---|---|
| Page title shows "ProDev Consultancy" | Low | `layout.tsx` metadata title needs updating to "Educar International" |
| All sections in one file (`page.tsx`) | Medium | Should be split into components as the page grows |
| Contact form has no backend handler | High | Form submits nowhere — needs API route or third-party form service |
| Placeholder images from picsum.photos | Medium | Replace with real university/brand assets |
| HMR disabled in webpack config | Info | Intentional for AI Studio compatibility — do not remove |

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | Yes (for AI features) | Google Gemini API key |
| `APP_URL` | Yes (for deployment) | Deployed app URL |

Copy `.env.example` → `.env.local` and fill in values before running locally.

---

## Scripts

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
npm run clean    # Clean .next build cache
```

---

## Deployment

- Target platform: **Google AI Studio** (standalone Next.js build)
- Firebase tools are installed — can deploy via `firebase deploy`
- `next.config.ts` sets `output: 'standalone'` for containerization
- Ensure `GEMINI_API_KEY` and `APP_URL` are set in the hosting environment

---

## Decisions Log

| Date | Decision | Reason |
|---|---|---|
| 2026-03-30 | Single `page.tsx` for all sections | Quick MVP; refactor into components when sections stabilize |
| 2026-03-30 | Tailwind CSS 4 (not v3) | Latest version; note: config is via `globals.css` `@theme`, not `tailwind.config.js` |
| 2026-03-30 | Framer Motion via `motion` package | Unified motion library (v12 ships as `motion`, not `framer-motion`) |
| 2026-03-30 | HMR disabled in webpack | Required for Google AI Studio iframe compatibility |
