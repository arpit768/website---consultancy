'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Home } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useThemeContext } from './components/ThemeProvider';

export default function NotFound() {
  const { isDark, toggle } = useThemeContext();

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light font-sans transition-colors duration-500">
      <Navbar isDarkMode={isDark} onToggleDark={toggle} />

      <section className="min-h-[80vh] flex items-center justify-center px-5 sm:px-8 pt-32 pb-16">
        <div className="max-w-2xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="inline-block mb-8">
              <div className="text-8xl sm:text-9xl font-display font-black text-gradient">
                404
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
              Page Not Found
            </h1>

            <p className="text-lg text-brand-dark/55 dark:text-brand-light/55 mb-8 max-w-lg mx-auto leading-relaxed">
              Sorry! We couldn&apos;t find the page you&apos;re looking for. It might&apos;ve been moved or doesn&apos;t exist.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark px-7 py-4 rounded-xl font-semibold hover:opacity-90 transition-all"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 border border-brand-purple/20 dark:border-brand-yellow/20 text-brand-purple dark:text-brand-yellow px-7 py-4 rounded-xl font-semibold hover:bg-brand-purple/5 dark:hover:bg-brand-yellow/5 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 p-8 rounded-xl border border-brand-purple/10 dark:border-brand-yellow/10 bg-brand-purple/[0.03] dark:bg-brand-yellow/[0.03]"
          >
            <p className="text-sm text-brand-dark/50 dark:text-brand-light/50 mb-4">
              Helpful links:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { label: 'Destinations', href: '/destinations' },
                { label: 'Services', href: '/services' },
                { label: 'Process', href: '/process' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs sm:text-sm px-3 py-1.5 rounded-lg bg-brand-purple/8 dark:bg-brand-yellow/8 text-brand-purple dark:text-brand-yellow hover:bg-brand-purple/15 dark:hover:bg-brand-yellow/15 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
