# Contributing to Educar International Website

Thank you for your interest in contributing! This document provides guidelines for development.

## Code Style

- **TypeScript**: All code must be properly typed
- **Components**: Functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Imports**: Use absolute imports with `@/` prefix

## Quality Standards

### Before Committing

```bash
# Lint all files
npm run lint

# Build to catch errors
npm run build

# Ensure no TypeScript errors
npx tsc --noEmit
```

### Commit Messages

Use clear, descriptive commit messages:
```
feat: add new testimonial section
fix: correct spacing in hero component
refactor: simplify date utility function
style: update button hover states
```

## Component Guidelines

### Structure
```typescript
'use client';  // For interactive components

import { useState, useEffect } from 'react';
import { Icon } from 'lucide-react';

interface ComponentProps {
  title: string;
  onClick?: () => void;
}

export default function MyComponent({ title, onClick }: ComponentProps) {
  const [state, setState] = useState(false);

  return (
    <div>
      {/* Component JSX */}
    </div>
  );
}
```

### Naming Convention
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Hooks: `use-kebab-case.ts`

## File Organization

Keep related code together:
```
components/
  ├── Hero.tsx
  ├── Footer.tsx
  └── Navbar.tsx

hooks/
  └── useTheme.ts

lib/
  ├── data.ts        # Static content
  └── utils.ts       # Helper functions
```

## CSS/Styling

- Use Tailwind CSS classes
- Follow mobile-first approach
- Use semantic color names from Tailwind config
- Avoid inline styles

### Color Palette
```
Primary:   brand-purple (#667eea)
Accent:    brand-yellow (#f0b232)
Light:     brand-light (#ffffff)
Dark:      brand-dark (#1a1a2e)
```

## Performance Tips

1. **Images**: Use Next.js `Image` component
2. **Animations**: Use Framer Motion for smooth animations
3. **Code Splitting**: Pages are auto-split by Next.js
4. **Bundle Size**: Check component impact before adding deps

## Testing

While automated tests aren't required, test manually:
- [ ] Desktop (1920px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Dark mode
- [ ] Link validity
- [ ] Form submission

## Adding New Pages

1. Create folder in `app/`
2. Add `page.tsx` (exports default component)
3. Add `layout.tsx` if needed
4. Update navigation in `lib/data.ts` if visible in menu
5. Build and test: `npm run build && npm run dev`

## Adding New Components

1. Create in `app/components/`
2. Use TypeScript with proper typing
3. Export as default
4. Make it reusable where possible
5. Document complex props with comments

## Environment Variables

Never commit `.env` files. Use `.env.example` for reference.

## Pull Request Process

1. Create feature branch from `main`
2. Make atomic commits with clear messages
3. Run lint and build before pushing
4. Create PR with description of changes
5. Ensure all checks pass
6. Request review if needed
7. Merge when approved

## Issues & Bugs

When reporting issues, include:
- Description of problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/device info

## Questions?

- Email: info@educarinternational.edu.np
- Check existing issues/PRs first
- Refer to Next.js and React documentation

---

Happy coding! 🎉
