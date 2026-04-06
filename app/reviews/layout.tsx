import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Reviews & Testimonials',
  description: "Real stories from students we've helped — 100% satisfaction rate, 5.0 average rating. Read their study abroad journeys.",
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
