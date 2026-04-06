# Project Management — Educar International Website

## Project Overview

**Project Name:** Educar International
**Type:** Educational Consultancy Website (Pure Frontend)
**Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, Motion (Framer Motion)
**Current Version:** 0.2.0
**Branch:** main

---

## Goals

Build a modern, production-ready consultancy website for Educar International — a platform helping Nepalese students navigate studying abroad. The site should:

- Present study destinations (UK, USA, Canada, Australia, Japan) with university filtering
- Clearly explain 6 core services with detailed breakdowns
- Build trust via testimonials and ratings from past students
- Capture leads via WhatsApp and email (no backend required)
- Provide instant FAQ help via client-side AI counselor chatbot

---

## Current State (as of 2026-04-06)

### Done
- [x] Clean, minimal landing page with focused sections
- [x] Multi-page structure: Home, Destinations, Services, Process, Reviews
- [x] All backend removed — pure frontend, no API routes
- [x] Client-side FAQ chatbot (Aari) with 15+ knowledge base entries
- [x] Contact form sends via WhatsApp with mailto fallback
- [x] Animated UI: TextReveal, SmoothReveal, TiltCard, MagneticButton
- [x] Aurora gradient blobs, grain texture, glassmorphism
- [x] Dark/light mode with system preference detection
- [x] Responsive design (mobile, tablet, desktop)
- [x] WhatsApp floating button
- [x] Scroll progress indicator
- [x] SEO metadata with title templates

### Architecture
- **Landing page:** Hero + Services snapshot + Destinations preview + Trust/testimonial + Process overview + Contact
- **Destinations:** Country profiles with stats + university grid with filtering
- **Services:** Accordion with detailed descriptions + "What's Included" checklists
- **Process:** 4-step interactive guide + FAQ section
- **Reviews:** Rating breakdown + testimonials with country filtering

---

## Backlog / Upcoming Work

### High Priority
- [ ] Add real university logos and images (currently using picsum placeholders)
- [ ] SEO: Open Graph tags, Twitter cards, sitemap.xml, robots.txt
- [ ] Analytics integration (Google Analytics or Plausible)

### Medium Priority
- [ ] Blog / Resources section (study abroad tips, visa guides)
- [ ] Team / About page with CEO section
- [ ] Add more destinations and universities
- [ ] Testimonial carousel for mobile

### Low Priority
- [ ] Multi-language support (i18n)
- [ ] CMS integration (Contentful / Sanity)

---

## Tech Stack Reference

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js | ^15.4.9 |
| UI Library | React | ^19.2.1 |
| Language | TypeScript | 5.9.3 |
| Styling | Tailwind CSS | 4.1.11 |
| Animation | Motion (Framer Motion) | ^12.23.24 |
| Icons | Lucide React | ^0.553.0 |
| Forms | React Hook Form + Zod | ^7.56.4 / ^3.24.4 |

---

## Brand / Design Tokens

| Token | Value | Usage |
|---|---|---|
| `--color-brand-purple` | `#7B2E83` | Primary accent, CTAs, headings |
| `--color-brand-yellow` | `#FFD36A` | Highlights, secondary accent |
| `--color-brand-dark` | `#1A0829` | Dark mode background |
| `--color-brand-light` | `#FDFBFF` | Light mode background |
| Font (sans) | Inter | Body text |
| Font (display) | Space Grotesk | Headings |
| Font (mono) | JetBrains Mono | Labels, badges |

---

## File Map

```
app/
  layout.tsx              — Root layout, fonts, metadata, grain texture
  page.tsx                — Clean landing page
  globals.css             — Tailwind + brand tokens + unique CSS effects
  components/
    Navbar.tsx             — Fixed floating navbar with dark mode toggle
    MobileNav.tsx          — Slide-out mobile navigation
    Footer.tsx             — Multi-column footer
    ContactForm.tsx        — WhatsApp/mailto contact form
    AICounselor.tsx        — Client-side FAQ chatbot
    WhatsAppButton.tsx     — Floating WhatsApp button
    ScrollProgress.tsx     — Top scroll progress bar
    Breadcrumb.tsx         — Page breadcrumb navigation
    AnimatedCounter.tsx    — Animated number display
    MagneticButton.tsx     — Magnetic hover effect wrapper
    TiltCard.tsx           — 3D tilt-on-hover card wrapper
    SmoothReveal.tsx       — Scroll-triggered reveal animation
    TextReveal.tsx         — Word-by-word text reveal animation
    CustomCursor.tsx       — Custom cursor (available, not active)
  destinations/
    layout.tsx + page.tsx  — Country profiles + university grid
  services/
    layout.tsx + page.tsx  — Service accordion with details
  process/
    layout.tsx + page.tsx  — 4-step process guide + FAQ
  reviews/
    layout.tsx + page.tsx  — Ratings + testimonials
hooks/
  use-theme.ts             — Dark/light mode hook with localStorage
  use-mobile.ts            — Mobile breakpoint detection
lib/
  data.ts                  — All content data (universities, services, etc.)
  utils.ts                 — cn() classname helper
public/
  logo.png                 — Brand logo (purple + yellow)
  logo.jpeg                — Alternative logo format
```

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

## Decisions Log

| Date | Decision | Reason |
|---|---|---|
| 2026-03-30 | Tailwind CSS 4 (not v3) | Latest version; config via `globals.css` `@theme` |
| 2026-03-30 | Motion library (v12) | Unified motion library, ships as `motion` not `framer-motion` |
| 2026-04-06 | Removed all backend (API routes, Gemini, Firebase) | Pure frontend approach — no server dependencies |
| 2026-04-06 | Contact form via WhatsApp | No backend needed, direct communication channel |
| 2026-04-06 | Client-side FAQ chatbot | Replaces Gemini AI — works offline, no API key needed |
| 2026-04-06 | Clean landing page with content on sub-pages | Less clutter, each page has clear purpose |
