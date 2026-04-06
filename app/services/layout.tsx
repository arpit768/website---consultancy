import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive study-abroad services — education consultation, documentation, test prep (IELTS/PTE/GRE), visa guidance, scholarships, and more.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
