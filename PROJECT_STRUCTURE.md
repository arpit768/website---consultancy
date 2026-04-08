# Project Structure

## Clean Frontend-Only Architecture

This is a **frontend-only Next.js project** - no backend or API routes.

### Directory Tree

```
educar-international-website/
│
├── 📂 app/                          # Next.js App Router (pages & layouts)
│   ├── 📂 components/               # Reusable React components
│   │   ├── AICounselor.tsx         # AI chatbot widget
│   │   ├── AnimatedCounter.tsx     # Number animation component
│   │   ├── Breadcrumb.tsx          # Navigation breadcrumbs
│   │   ├── ContactForm.tsx         # Contact/inquiry form
│   │   ├── CustomCursor.tsx        # Custom cursor effect
│   │   ├── Footer.tsx              # Footer component
│   │   ├── MagneticButton.tsx      # Interactive button with pull effect
│   │   ├── MobileNav.tsx           # Mobile navigation menu
│   │   ├── Navbar.tsx              # Header navigation
│   │   ├── ScrollProgress.tsx      # Page scroll indicator
│   │   ├── SmoothReveal.tsx        # Fade-in animation
│   │   ├── TextReveal.tsx          # Text animation
│   │   ├── ThemeProvider.tsx       # Dark/Light theme provider
│   │   ├── TiltCard.tsx            # 3D tilt effect card
│   │   └── WhatsAppButton.tsx      # WhatsApp CTA button
│   │
│   ├── 📂 destinations/             # /destinations route
│   │   ├── page.tsx                # Study destinations page
│   │   └── layout.tsx              # Route layout
│   │
│   ├── 📂 privacy/                  # /privacy route
│   │   ├── page.tsx                # Privacy policy page
│   │   └── layout.tsx              # Route layout
│   │
│   ├── 📂 process/                  # /process route
│   │   ├── page.tsx                # Application process page
│   │   └── layout.tsx              # Route layout
│   │
│   ├── 📂 reviews/                  # /reviews route
│   │   ├── page.tsx                # Student testimonials page
│   │   └── layout.tsx              # Route layout
│   │
│   ├── 📂 services/                 # /services route
│   │   ├── page.tsx                # Services listing page
│   │   └── layout.tsx              # Route layout
│   │
│   ├── 📂 terms/                    # /terms route
│   │   ├── page.tsx                # Terms & conditions page
│   │   └── layout.tsx              # Route layout
│   │
│   ├── page.tsx                    # Home page (route: /)
│   ├── layout.tsx                  # Root layout
│   ├── error.tsx                   # Error boundary
│   ├── not-found.tsx               # 404 page
│   └── globals.css                 # Global styles
│
├── 📂 lib/                          # Utilities & static data
│   ├── data.ts                     # All static content
│   │                               # - SERVICES (6 service offerings)
│   │                               # - COUNTRY_PROFILES (5 destinations)
│   │                               # - TESTIMONIALS (student reviews)
│   │                               # - PROCESS_STEPS (application steps)
│   │                               # - NAV_LINKS (navigation menu)
│   │                               # - And more...
│   ├── icon-map.ts                 # Lucide icon mappings
│   └── utils.ts                    # Helper utilities
│
├── 📂 hooks/                        # Custom React hooks
│   ├── use-mobile.ts               # Mobile device detection
│   └── use-theme.ts                # Theme state management
│
├── 📂 public/                       # Static assets
│   └── logo.png                    # Company logo
│
├── 📂 styles/                       # (Not used - Tailwind in globals.css)
│
├── 📋 Configuration Files
│   ├── .eslintrc.json              # ESLint rules
│   ├── .gitignore                  # Git exclusions
│   ├── tailwindcss.config.ts       # Tailwind CSS theme
│   ├── tsconfig.json               # TypeScript configuration
│   ├── next.config.ts              # Next.js configuration
│   └── package.json                # Dependencies & scripts
│
├── 📚 Documentation
│   ├── README.md                   # Project overview
│   ├── DEVELOPMENT.md              # Development guide
│   ├── CONTRIBUTING.md             # Contribution guidelines
│   └── PROJECT_STRUCTURE.md        # This file
│
├── .env.example                    # Environment template
└── .nextrc (implicit)              # Next.js config
```

## Key Files Explained

### `lib/data.ts` - The Content Hub
This file contains ALL static content:
- **SERVICES**: 6 education services with descriptions
- **COUNTRY_PROFILES**: 5 study destinations (UK, USA, Canada, Australia, Japan)
- **TESTIMONIALS**: Student success stories
- **PROCESS_STEPS**: 4-step application process
- **NAV_LINKS**: Navigation menu items
- **TRUST_POINTS**: Why choose Educar
- **MINI_TESTIMONIALS**: Quick testimonials
- **MARQUEE_ITEMS**: University names carousel

Edit this file to update all content across the site.

### Component Organization

**Smart Components** (Client-side, interactive):
- `AICounselor` - AI chatbot
- `MagneticButton` - Interactive button
- `TiltCard` - 3D effects
- `Navbar/MobileNav` - Navigation
- `ContactForm` - Form handling

**Dumb Components** (Display only):
- `Breadcrumb` - Navigation path
- `Footer` - Footer info
- `ScrollProgress` - Progress bar
- `TextReveal` - Text animation

## Data Flow

```
lib/data.ts (Static Content)
    ↓
Components (Display + Interactivity)
    ↓
Pages (Route handlers)
    ↓
Layout (Wrapper + Structure)
    ↓
Browser (User View)
```

## Removed Backend Elements

✅ **Deleted**:
- `/app/api/` - All API routes
- `/app/admin/` - Admin dashboard
- `/data/services.json` - Backend data storage
- `/data/testimonials.json` - Backend data storage

✅ **Updated**:
- `app/services/page.tsx` - Now uses static data
- `app/reviews/page.tsx` - Now uses static data
- Removed API fetch calls
- Removed loading/error states for API

## Build Output

```
Routes:
  ○ /                    (Static) ✓ 29.7 kB
  ○ /destinations        (Static) ✓ 3.92 kB
  ○ /privacy            (Static) ✓ 1.69 kB
  ○ /process            (Static) ✓ 3.75 kB
  ○ /reviews            (Static) ✓ 3.88 kB
  ○ /services           (Static) ✓ 3.61 kB
  ○ /terms              (Static) ✓ 2.16 kB
  ○ /_not-found         (Static) ✓ 140 B

Shared Bundle: 102 kB
Total: ~207 kB First Load JS
```

## Asset Usage

### Images
- Using Next.js `Image` component (optimized)
- Placeholder images from Picsum (for demo)
- Logo from `/public/logo.png`

### Icons
- Lucide React icons
- Mapped in `lib/icon-map.ts`

### Fonts
- System fonts via Tailwind
- "Display" fonts: serif style
- "Sans" fonts: sans-serif style

## Styling System

### Colors (Tailwind Config)
```
brand-purple: #667eea   (Primary)
brand-yellow: #f0b232   (Accent)
brand-light:  #ffffff   (Light BG)
brand-dark:   #1a1a2e   (Dark BG)
```

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Theme Support
- Light mode (default)
- Dark mode (toggle)
- Stored in localStorage
- Synced via Context

## Performance Optimizations

✅ **Build-time**:
- Static generation for all routes
- No JavaScript for static pages (when possible)
- Code splitting per route

✅ **Runtime**:
- Image optimization
- Font optimization
- Lazy component loading
- Animation performance (Framer Motion)

✅ **Bundle**:
- Tree-shaking
- Dead code elimination
- Minification
- CSS purging

## Git Management

### Ignored Files
```
node_modules/          # Dependencies
.next/                 # Build output
.env*                  # Secrets
.vscode/               # IDE settings
*.log                  # Log files
.DS_Store              # macOS files
```

### Tracked Files
```
app/                   # All source code
lib/                   # Utilities
hooks/                 # Custom hooks
public/                # Assets
*.ts, *.tsx            # TypeScript files
*.json                 # Config files
*.md                   # Documentation
```

## Development Workflow

1. **Edit** `lib/data.ts` for content changes
2. **Edit** components for UI changes
3. **Run** `npm run dev` to test
4. **Check** for errors: `npm run lint && npm run build`
5. **Commit** with clear messages
6. **Push** to repository

## Deployment

### Vercel (Recommended)
- Auto-deploys on git push
- No additional configuration needed
- Optimal Next.js performance

### Self-Hosted
```bash
npm run build
npm start
# Server runs on port 3000
```

---

**Project Type**: Static Marketing Website  
**Tech Stack**: Next.js + React + Tailwind CSS  
**Framework Version**: Next.js 15.4+  
**Status**: Production Ready ✅  
**Last Updated**: 2026-04-08
