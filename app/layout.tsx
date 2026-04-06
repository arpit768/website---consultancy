import type {Metadata, Viewport} from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'Educar International — Your Gateway to Global Education',
    template: '%s | Educar International',
  },
  description: 'Expert guidance for international study — university admissions, visa assistance, and career counseling for students worldwide.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased selection:bg-brand-yellow selection:text-brand-purple grain" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
