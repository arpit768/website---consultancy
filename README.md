# Educar International - Website

A modern, responsive consultancy website for Educar International, a government-authorized education consultancy in Nepal specializing in study abroad guidance.

## 🌟 Features

- **Modern Design** - Beautiful, responsive UI with dark mode support
- **Component-Based** - Reusable React components for maintainability
- **Animation-Rich** - Smooth animations with Framer Motion
- **SEO-Friendly** - Optimized for search engines
- **Performance** - Fast page loads with Next.js static generation
- **Accessibility** - WCAG compliant with semantic HTML

## 📋 Pages

- **Home** - Hero section with services preview and testimonials
- **Services** - Detailed accordion of 6 service offerings
- **Destinations** - Study abroad countries (UK, USA, Canada, Australia, Japan)
- **Process** - 4-step application process explanation
- **Reviews** - Student testimonials and success stories
- **Privacy & Terms** - Legal documentation

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4+
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion (motion)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **TypeScript**: For type safety

## 📦 Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

## 🚀 Quick Start

1. **Clone and install:**
   ```bash
   git clone <repo-url>
   cd website---consultancy
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
app/
  ├── components/        # Reusable UI components
  ├── destinations/      # Destinations page
  ├── privacy/          # Privacy policy page
  ├── process/          # Process page
  ├── reviews/          # Student reviews page
  ├── services/         # Services page
  ├── terms/            # Terms & conditions page
  ├── page.tsx          # Home page
  └── layout.tsx        # Root layout

lib/
  ├── data.ts           # Static data (services, testimonials, countries)
  ├── icon-map.ts       # Icon mappings
  └── utils.ts          # Utility functions

hooks/
  ├── use-mobile.ts     # Mobile detection hook
  └── use-theme.ts      # Theme management hook

public/
  └── logo.png          # Branding assets

styles/                 # Global styles
```

## 🎨 Customization

### Colors
Edit Tailwind config in `tailwind.config.ts` for brand colors:
- `brand-purple` - Primary
- `brand-yellow` - Accent
- `brand-light` - Light background
- `brand-dark` - Dark background

### Content
Update static data in `lib/data.ts`:
- `SERVICES` - Service offerings
- `COUNTRY_PROFILES` - Study destinations
- `TESTIMONIALS` - Student reviews
- `PROCESS_STEPS` - Application steps

### Components
All components are in `app/components/` and fully customizable.

## ✅ Quality Assurance

```bash
# Lint
npm run lint

# Build
npm run build

# Type check
npm run type-check    # (if configured)
```

## 📊 Performance

- ✅ 0 TypeScript errors
- ✅ 0 ESLint errors
- ✅ Production-optimized bundle
- ✅ All routes prerendered

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit changes (`git commit -m 'Add AmazingFeature'`)
3. Push to branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📄 License

This project is proprietary. All rights reserved by Educar International Pvt. Ltd.

## 📞 Contact

**Educar International**
- Email: info@educarinternational.edu.np
- Phone: 015005528 / +977-9810646177
- Location: Chakupat-10, Patan Dhoka Road, Lalitpur, Nepal
- Website: https://educarinternational.edu.np

---

Built with ❤️ using Next.js & React
