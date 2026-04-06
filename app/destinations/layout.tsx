import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study Destinations',
  description: 'Explore top study destinations — UK, USA, Canada, Australia, Japan. Partner universities, visa info, and popular programs.',
};

export default function DestinationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
