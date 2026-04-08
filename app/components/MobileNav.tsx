'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Menu, ArrowRight, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_LINKS } from '@/lib/data';

interface MobileNavProps {
  isDarkMode: boolean;
  onToggleDark: () => void;
}

export default function MobileNav({ isDarkMode, onToggleDark }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <div className="flex md:hidden items-center gap-2">
      <button
        onClick={onToggleDark}
        className="w-9 h-9 rounded-xl hover:bg-brand-purple/5 dark:hover:bg-brand-yellow/10 flex items-center justify-center text-brand-purple dark:text-brand-yellow transition-colors"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>

      <button
        onClick={() => setOpen(true)}
        className="w-9 h-9 rounded-xl hover:bg-brand-purple/5 dark:hover:bg-brand-yellow/10 flex items-center justify-center text-brand-purple dark:text-brand-yellow transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[200] bg-brand-dark/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[min(288px,90vw)] z-[201] bg-brand-light dark:bg-brand-dark border-l border-brand-purple/10 dark:border-brand-yellow/10 flex flex-col shadow-2xl shadow-brand-dark/40"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-brand-purple/8 dark:border-brand-yellow/8">
                <div className="relative h-9 w-32 bg-white rounded-md p-0.5 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Educar International"
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-xl hover:bg-brand-purple/5 dark:hover:bg-brand-yellow/10 flex items-center justify-center text-brand-dark/50 dark:text-brand-light/50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-medium transition-all duration-200 ${
                        isActive(link.href, (link as any).exact)
                          ? 'bg-brand-purple/10 dark:bg-brand-yellow/10 text-brand-purple dark:text-brand-yellow'
                          : 'text-brand-dark/65 dark:text-brand-light/65 hover:bg-brand-purple/5 dark:hover:bg-brand-yellow/5 hover:text-brand-purple dark:hover:text-brand-yellow'
                      }`}
                    >
                      {link.name}
                      <ArrowRight className="w-4 h-4 opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-6 pb-8 flex flex-col gap-2">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="w-full bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark px-5 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-[10px] font-mono text-brand-dark/30 dark:text-brand-light/30 mt-2 uppercase tracking-widest">
                  Govt. of Nepal Authorized
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
