import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  label: string;
}

export default function Breadcrumb({ label }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-xs font-mono text-brand-dark/35 dark:text-brand-light/35 mb-5"
    >
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-brand-purple dark:hover:text-brand-yellow transition-colors"
      >
        <Home className="w-3 h-3" />
        Home
      </Link>
      <ChevronRight className="w-3 h-3 opacity-40" />
      <span className="text-brand-purple dark:text-brand-yellow font-semibold">{label}</span>
    </nav>
  );
}
