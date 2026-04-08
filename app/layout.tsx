import type { Metadata, Viewport } from 'next';
import { Montserrat, EB_Garamond, MonteCarlo, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './components/ThemeProvider';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-sans', weight: ['300', '400', '500', '600', '700'] });
const ebGaramond = EB_Garamond({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700', '800'] });
const monteCarlo = MonteCarlo({ subsets: ['latin'], variable: '--font-script', weight: ['400'] });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: {
    default: 'Educar International — Your Gateway to Global Education',
    template: '%s | Educar International',
  },
  description:
    'Expert guidance for international study — university admissions, visa assistance, and career counseling for students worldwide.',
  keywords: 'study abroad, education consultation, visa guidance, IELTS preparation, international universities, Nepal',
  authors: [{ name: 'Educar International' }],
  openGraph: {
    title: 'Educar International — Your Gateway to Global Education',
    description:
      'Expert guidance for international study — university admissions, visa assistance, and career counseling for students worldwide.',
    url: 'https://www.educarinternational.edu.np',
    siteName: 'Educar International',
    images: [
      {
        url: 'https://www.educarinternational.edu.np/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Educar International - Study Abroad Consultancy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Educar International — Your Gateway to Global Education',
    description:
      'Expert guidance for international study — university admissions, visa assistance, and career counseling for students worldwide.',
    images: ['https://www.educarinternational.edu.np/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${ebGaramond.variable} ${monteCarlo.variable} ${jetbrainsMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash: set dark class BEFORE React hydrates to avoid white flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var p=window.matchMedia('(prefers-color-scheme: dark)').matches;if(s==='dark'||(s===null&&p)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="font-sans antialiased selection:bg-brand-yellow selection:text-brand-purple grain"
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
