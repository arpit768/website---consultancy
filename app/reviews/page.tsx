'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight, MessageCircle, AlertCircle } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import AICounselor from '@/app/components/AICounselor';
import ScrollProgress from '@/app/components/ScrollProgress';
import Breadcrumb from '@/app/components/Breadcrumb';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import MagneticButton from '@/app/components/MagneticButton';
import TiltCard from '@/app/components/TiltCard';
import SmoothReveal from '@/app/components/SmoothReveal';
import TextReveal from '@/app/components/TextReveal';
import { useThemeContext } from '@/app/components/ThemeProvider';
import { TESTIMONIALS, MINI_TESTIMONIALS } from '@/lib/data';

type Testimonial = {
  id: string; quote: string; name: string; program: string;
  target: string; avatar: string; country: string; rating: number;
};
type MiniTestimonial = { id: string; name: string; quote: string; country: string };

const COUNTRIES_FILTER = ['All', 'UK', 'USA', 'Canada', 'Australia', 'Japan'];

const RATING_ASPECTS = [
  { label: 'Expertise',      pct: 100 },
  { label: 'Documentation',  pct: 98  },
  { label: 'Visa Guidance',  pct: 97  },
  { label: 'Communication',  pct: 100 },
  { label: 'Overall',        pct: 100 },
];

export default function ReviewsPage() {
  const { isDark, toggle } = useThemeContext();
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [miniTestimonials, setMiniTestimonials] = useState<MiniTestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/admin/testimonials');
        if (!response.ok) throw new Error('Failed to fetch testimonials');
        const data = await response.json();

        const testimonialsWithIds = (Array.isArray(data.testimonials) ? data.testimonials : TESTIMONIALS).map((t: any, i: number) => ({
          ...t,
          id: t.id || `testimonial-${i}`,
        }));
        const miniWithIds = (Array.isArray(data.miniTestimonials) ? data.miniTestimonials : MINI_TESTIMONIALS).map((m: any, i: number) => ({
          ...m,
          id: m.id || `mini-${i}`,
        }));

        setTestimonials(testimonialsWithIds);
        setMiniTestimonials(miniWithIds);
        setError(false);
      } catch (err) {
        console.error('Error loading testimonials:', err);
        // Fallback to static data with ids
        const testimonialsWithIds = TESTIMONIALS.map((t, i) => ({
          ...t,
          id: `testimonial-${i}`,
        }));
        const miniWithIds = MINI_TESTIMONIALS.map((m, i) => ({
          ...m,
          id: `mini-${i}`,
        }));
        setTestimonials(testimonialsWithIds);
        setMiniTestimonials(miniWithIds);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  const filteredTestimonials = selectedCountry === 'All' ? testimonials : testimonials.filter((t) => t.country === selectedCountry);
  const filteredMini = selectedCountry === 'All' ? miniTestimonials : miniTestimonials.filter((t) => t.country === selectedCountry);

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light font-sans transition-colors duration-500">
      <ScrollProgress />
      <Navbar isDarkMode={isDark} onToggleDark={toggle} />

      {/* Hero */}
      <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-dark dark:bg-[#120620] relative overflow-hidden">
        <div className="aurora-blob aurora-blob-1 -top-40 left-1/3 opacity-30" />
        <div className="aurora-blob aurora-blob-2 bottom-0 right-0 opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Breadcrumb label="Reviews" />
            <div className="mb-4">
              <TextReveal as="h1" className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.06] tracking-tight text-brand-light">
                Real students,
              </TextReveal>
              <br />
              <TextReveal as="span" className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.06] tracking-tight text-gradient" delay={0.2}>
                real results.
              </TextReveal>
            </div>
            <p className="text-base sm:text-lg text-brand-light/45 max-w-xl mx-auto leading-relaxed">
              Every story here represents a dream realized.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-3 top-0 right-1/4 opacity-15" />
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <SmoothReveal direction="left">
            <div>
              <p className="text-[11px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 uppercase tracking-[0.2em] mb-5">Rating Breakdown</p>
              <div className="flex flex-col gap-4">
                {RATING_ASPECTS.map((a, i) => (
                  <motion.div
                    key={a.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-xs text-brand-dark/55 dark:text-brand-light/50 w-24 sm:w-32 shrink-0">{a.label}</span>
                    <div className="flex-1 h-1.5 bg-brand-dark/5 dark:bg-brand-light/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${a.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
                        className="h-full bg-gradient-to-r from-brand-purple to-brand-yellow rounded-full"
                      />
                    </div>
                    <span className="text-[11px] font-mono text-brand-dark/35 dark:text-brand-light/35 w-8 text-right">{a.pct}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </SmoothReveal>

          <SmoothReveal direction="right">
            <TiltCard className="rounded-2xl" tiltStrength={5}>
              <div className="bg-brand-purple dark:bg-brand-purple/20 rounded-2xl p-10 text-center glow-purple">
                <p className="text-brand-light/40 text-xs font-mono uppercase tracking-wider mb-3">Overall</p>
                <p className="text-6xl sm:text-7xl font-display font-black text-gradient leading-none mb-3">5.0</p>
                <div className="flex justify-center gap-0.5 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />)}
                </div>
                <p className="text-brand-light/35 text-xs font-mono">100% Satisfaction</p>
              </div>
            </TiltCard>
          </SmoothReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-1 bottom-0 left-0 opacity-15" />
        <div className="max-w-4xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold">Stories that <span className="text-gradient">inspire</span></h2>
              <div className="flex flex-wrap gap-2">
                {COUNTRIES_FILTER.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCountry(c)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      selectedCountry === c
                        ? 'bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark glow-purple dark:glow-yellow'
                        : 'text-brand-dark/45 dark:text-brand-light/45 hover:bg-brand-dark/5 dark:hover:bg-brand-light/5'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </SmoothReveal>

          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 rounded-xl glass-card animate-pulse">
                  <div className="h-20 bg-brand-dark/10 dark:bg-brand-light/10 rounded mb-4" />
                  <div className="h-4 bg-brand-dark/10 dark:bg-brand-light/10 rounded mb-2" />
                  <div className="h-3 bg-brand-dark/10 dark:bg-brand-light/10 rounded w-3/4" />
                </div>
              ))}
            </div>
          )}

          {error && !loading && (
            <div className="flex flex-col items-center gap-4 py-16 px-8 text-center bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/30 rounded-xl">
              <AlertCircle className="w-12 h-12 text-yellow-600" />
              <div>
                <h3 className="font-display font-bold text-brand-dark dark:text-brand-light text-lg mb-1">Connection Issue</h3>
                <p className="text-brand-dark/60 dark:text-brand-light/60 text-sm">We couldn't load live reviews, but showing you our most recent ones.</p>
              </div>
            </div>
          )}

          {!loading && filteredTestimonials.length === 0 && (
            <div className="text-center py-16 text-brand-dark/30 dark:text-brand-light/30">
              <MessageCircle className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p className="text-sm font-mono">No reviews yet for this destination.</p>
            </div>
          )}

          {!loading && filteredTestimonials.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {filteredTestimonials.map((t, i) => (
                <SmoothReveal key={t.id} delay={i * 0.08}>
                  <TiltCard className="rounded-xl h-full" tiltStrength={3}>
                    <div className="p-6 rounded-xl glass-card flex flex-col h-full gradient-border">
                      <div className="flex gap-0.5 mb-4">
                        {Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-3 h-3 text-brand-yellow fill-current" />)}
                      </div>
                      <p className="text-sm text-brand-dark/65 dark:text-brand-light/65 leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-brand-dark/6 dark:border-brand-light/6">
                        <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0 bg-brand-purple/8 dark:bg-brand-yellow/8">
                          {t.avatar && <Image src={t.avatar} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" unoptimized />}
                        </div>
                        <div>
                          <p className="font-bold text-sm">{t.name}</p>
                          <p className="text-[10px] text-brand-dark/35 dark:text-brand-light/35 font-mono">{t.program}</p>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </SmoothReveal>
              ))}
            </div>
          )}

          {!loading && filteredMini.length > 0 && (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {filteredMini.map((mini, i) => (
                <SmoothReveal key={mini.id} delay={i * 0.06}>
                  <div className="p-4 rounded-lg glass-card">
                    <p className="text-xs text-brand-dark/50 dark:text-brand-light/50 leading-relaxed mb-2 italic">&ldquo;{mini.quote}&rdquo;</p>
                    <p className="text-[10px] font-bold text-brand-purple dark:text-brand-yellow font-mono">— {mini.name}</p>
                  </div>
                </SmoothReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-2 top-0 right-1/3 opacity-15" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4">
            An Educar <span className="text-gradient">success story?</span>
          </h2>
          <p className="text-brand-dark/45 dark:text-brand-light/45 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Share your journey and inspire the next generation of students.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <MagneticButton>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Share Your Story <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.15}>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border border-brand-dark/12 dark:border-brand-light/12 px-7 py-3.5 rounded-xl font-medium text-sm hover:border-brand-purple/30 dark:hover:border-brand-yellow/30 transition-colors"
              >
                Book a Consultation
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <AICounselor />
    </div>
  );
}
