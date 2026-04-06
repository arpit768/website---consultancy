import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works — Our Process',
  description: 'Our proven 4-step process: consultation, profile & shortlisting, application & docs, visa & departure. Simple steps, big results.',
};

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
