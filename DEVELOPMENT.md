# Development Guide

## Local Setup

### Prerequisites
- Node.js 18.17+
- npm 9+ (or yarn/pnpm)
- Git
- Code editor (VS Code recommended)

### Installation

```bash
# 1. Clone repository
git clone <repository-url>
cd website---consultancy

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start development server
npm run dev

# 5. Open http://localhost:3000
```

## Available Scripts

```bash
# Development
npm run dev           # Start dev server (http://localhost:3000)

# Building
npm run build        # Build for production
npm start            # Run production build

# Code Quality
npm run lint         # Run ESLint
npm run clean        # Clean Next.js cache

# Type Checking
npx tsc --noEmit    # Check TypeScript without building
```

## Project Architecture

### Directory Structure
```
.
├── app/                    # Next.js App Router
│   ├── components/         # Reusable React components
│   ├── destinations/       # Route: /destinations
│   ├── privacy/           # Route: /privacy
│   ├── process/           # Route: /process
│   ├── reviews/           # Route: /reviews
│   ├── services/          # Route: /services
│   ├── terms/             # Route: /terms
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page (route: /)
│   ├── error.tsx          # Error boundary
│   └── not-found.tsx      # 404 page
│
├── lib/                    # Utilities and data
│   ├── data.ts           # Static content (services, testimonials, etc.)
│   ├── icon-map.ts       # Icon component mappings
│   └── utils.ts          # Helper functions
│
├── hooks/                  # Custom React hooks
│   ├── use-mobile.ts     # Mobile detection
│   └── use-theme.ts      # Theme management
│
├── styles/                 # Global styles
│   └── globals.css       # Global Tailwind styles
│
├── public/                 # Static assets
│   └── logo.png
│
├── .eslintrc.json        # ESLint configuration
├── tailwindcss.config.ts # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies and scripts
```

## Key Technologies

### Framework
- **Next.js 15.4** - React framework with file-based routing
- **React 19** - UI library

### Styling
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Animation library

### Forms & Validation
- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation

### UI Components
- **Lucide React** - Icon library

### Dev Tools
- **TypeScript 5.9** - Static typing
- **ESLint 9** - Code linting

## Common Tasks

### Adding a New Page

1. Create folder in `app/`
   ```
   app/new-page/
   ├── page.tsx
   └── layout.tsx (optional)
   ```

2. Create `page.tsx`:
   ```typescript
   'use client';
   
   export default function NewPage() {
     return <div>New Page Content</div>;
   }
   ```

3. Page is automatically accessible at `/new-page`

### Adding a New Component

1. Create in `app/components/NewComponent.tsx`:
   ```typescript
   interface Props {
     title: string;
   }
   
   export default function NewComponent({ title }: Props) {
     return <div>{title}</div>;
   }
   ```

2. Import and use:
   ```typescript
   import NewComponent from '@/app/components/NewComponent';
   ```

### Updating Static Data

Edit `lib/data.ts`:
- `SERVICES` - Service offerings
- `TESTIMONIALS` - Student reviews
- `COUNTRY_PROFILES` - Study destinations
- `PROCESS_STEPS` - Application process

### Customizing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  brand: {
    light: '#ffffff',
    dark: '#1a1a2e',
    purple: '#667eea',
    yellow: '#f0b232',
  },
}
```

## Debugging

### VS Code Setup

1. Install "ES7+ React/Redux/React-Native snippets" extension
2. Create `.vscode/launch.json`:
   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "name": "Next.js",
         "type": "node",
         "request": "launch",
         "program": "${workspaceFolder}/node_modules/.bin/next",
         "args": ["dev"],
         "cwd": "${workspaceFolder}",
         "skipFiles": ["<node_internals>/**"]
       }
     ]
   }
   ```

### Console Logging
```typescript
// Client-side
console.log('Debug message');

// Server-side (API routes - not used in this project)
console.log('Server message');
```

### React DevTools
Install browser extension:
- Chrome: React Developer Tools
- Firefox: React Developer Tools

## Performance Tips

1. **Use Image component**
   ```typescript
   import Image from 'next/image';
   
   <Image src="/logo.png" alt="Logo" width={100} height={100} />
   ```

2. **Code Splitting** - Next.js auto-splits at route level

3. **Lazy Loading** - Use `dynamic()` for heavy components
   ```typescript
   import dynamic from 'next/dynamic';
   
   const HeavyComponent = dynamic(() => import('./Heavy'));
   ```

4. **Optimize Animations** - Use Framer Motion, not CSS
   ```typescript
   import { motion } from 'motion/react';
   
   <motion.div animate={{ opacity: 1 }} />
   ```

## Testing

Manual testing checklist:
- [ ] Home page loads
- [ ] Navigation works
- [ ] Forms submit
- [ ] Dark mode toggles
- [ ] Mobile responsive (375px, 768px, 1920px)
- [ ] Links navigate correctly
- [ ] No console errors
- [ ] No TypeScript errors

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Node Modules Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Check all errors
npx tsc --noEmit

# Fix some automatically
npx eslint --fix
```

### Build Fails
```bash
# Clean build
npm run clean
npm run build
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo in Vercel
3. Auto-deploys on push

### Self-Hosted
```bash
npm run build
npm start
```

For production, use a process manager like PM2:
```bash
pm2 start npm --name "educar" -- start
```

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## Getting Help

1. Check existing code/components for examples
2. Review error messages carefully
3. Check browser console
4. Refer to documentation
5. Ask team members

---

Happy development! 🚀
