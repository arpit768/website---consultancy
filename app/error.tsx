'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center px-5 sm:px-8 ${isDark ? 'bg-brand-dark' : 'bg-brand-light'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="inline-block mb-6 p-4 rounded-full bg-red-500/10 border border-red-500/20">
          <AlertTriangle className="w-12 h-12 text-red-500" />
        </div>

        <h1 className={`text-3xl sm:text-4xl font-display font-bold mb-3 ${isDark ? 'text-brand-light' : 'text-brand-dark'}`}>
          Something went wrong!
        </h1>

        <p className={`text-sm mb-2 ${isDark ? 'text-brand-light/50' : 'text-brand-dark/50'}`}>
          We encountered an unexpected error. Don't worry, our team has been notified.
        </p>

        {error.message && (
          <p className={`text-xs mb-6 p-3 rounded-lg ${isDark ? 'bg-red-500/10 text-red-300' : 'bg-red-50 text-red-600'}`}>
            {error.message}
          </p>
        )}

        <div className="flex flex-col gap-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all w-full"
          >
            <RotateCcw className="w-4 h-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-brand-purple/20 dark:border-brand-yellow/20 text-brand-purple dark:text-brand-yellow px-6 py-3 rounded-xl font-semibold hover:bg-brand-purple/5 dark:hover:bg-brand-yellow/5 transition-all w-full"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <p className={`text-[10px] font-mono mt-6 ${isDark ? 'text-brand-light/30' : 'text-brand-dark/30'}`}>
          Error ID: {error.digest || 'unknown'}
        </p>
      </motion.div>
    </div>
  );
}
