'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Moon, Sun, ArrowRight } from 'lucide-react';
import MobileNav from './MobileNav';
import { NAV_LINKS } from '@/lib/data';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDark: () => void;
}

export default function Navbar({ isDarkMode, onToggleDark }: NavbarProps) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[96%] sm:w-[92%] max-w-6xl">
      <div className="bg-white/75 dark:bg-brand-dark/80 backdrop-blur-xl px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl shadow-lg shadow-brand-purple/5 border border-brand-purple/10 dark:border-brand-yellow/10 flex items-center justify-between transition-colors duration-500">

        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-28 sm:h-10 sm:w-36">
            <Image
              src="/logo.png"
              alt="Educar International"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 xl:gap-2 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                isActive(link.href, (link as any).exact)
                  ? 'bg-brand-purple/10 dark:bg-brand-yellow/10 text-brand-purple dark:text-brand-yellow font-semibold'
                  : 'text-brand-dark/55 dark:text-brand-light/55 hover:text-brand-purple dark:hover:text-brand-yellow hover:bg-brand-purple/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={onToggleDark}
            className="w-9 h-9 rounded-xl hover:bg-brand-purple/5 dark:hover:bg-brand-yellow/10 flex items-center justify-center text-brand-purple dark:text-brand-yellow transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Link
            href="/#contact"
            className="bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark px-5 py-2 rounded-xl text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-brand-purple/25 hover:-translate-y-px transition-all duration-200 flex items-center gap-1.5"
          >
            Free Consult
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile nav */}
        <MobileNav isDarkMode={isDarkMode} onToggleDark={onToggleDark} />
      </div>
    </nav>
  );
}
