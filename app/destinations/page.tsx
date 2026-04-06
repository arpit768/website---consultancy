'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ChevronRight, CheckCircle } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import AICounselor from '@/app/components/AICounselor';
import ScrollProgress from '@/app/components/ScrollProgress';
import Breadcrumb from '@/app/components/Breadcrumb';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import AnimatedCounter from '@/app/components/AnimatedCounter';
import MagneticButton from '@/app/components/MagneticButton';
import TiltCard from '@/app/components/TiltCard';
import SmoothReveal from '@/app/components/SmoothReveal';
import TextReveal from '@/app/components/TextReveal';
import { useThemeContext } from '@/app/components/ThemeProvider';
import { COUNTRIES, UNIVERSITIES, COUNTRY_PROFILES } from '@/lib/data';

export default function DestinationsPage() {
  const { isDark, toggle } = useThemeContext();
  const [selectedCountry, setSelectedCountry] = useState('All');

  const filtered = selectedCountry === 'All'
    ? UNIVERSITIES
    : UNIVERSITIES.filter((u) => u.country === selectedCountry);

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light font-sans transition-colors duration-500">
      <ScrollProgress />
      <Navbar isDarkMode={isDark} onToggleDark={toggle} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 pb-16 sm:pb-20 px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
        <div className="aurora-blob aurora-blob-1 -top-40 -right-40 opacity-50" />
        <div className="aurora-blob aurora-blob-2 top-1/2 -left-40 opacity-40" />
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-brand-purple/20 dark:bg-brand-yellow/20 animate-float" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Breadcrumb label="Destinations" />
            <div className="mb-4">
              <TextReveal as="h1" className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.06] tracking-tight">
                Your dream campus,
              </TextReveal>
              <br />
              <TextReveal as="span" className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.06] tracking-tight text-gradient" delay={0.2}>
                worldwide.
              </TextReveal>
            </div>
            <p className="text-base sm:text-lg text-brand-dark/50 dark:text-brand-light/50 max-w-xl leading-relaxed">
              Explore partner universities across the UK, USA, Canada, Australia, and Japan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            {[
              { value: '5', label: 'Countries' },
              { value: '50+', label: 'Partners' },
              { value: '100%', label: 'Visa Support' },
              { value: '7+', label: 'Years' },
            ].map((s) => (
              <div key={s.label}>
                <AnimatedCounter value={s.value} className="text-2xl sm:text-3xl font-display font-bold text-gradient" />
                <p className="text-[11px] font-mono text-brand-dark/35 dark:text-brand-light/35 uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Country Profiles */}
      <section className="py-16 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-dark dark:bg-[#120620] relative overflow-hidden">
        <div className="aurora-blob aurora-blob-3 top-1/3 right-0 opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="mb-10">
              <p className="text-[11px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em] mb-2">Destination Guide</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-brand-light">Key facts by country</h2>
            </div>
          </SmoothReveal>

          <div className="flex flex-col gap-6">
            {COUNTRY_PROFILES.map((country, i) => (
              <SmoothReveal key={country.short} delay={i * 0.05}>
                <div
                  id={country.short.toLowerCase()}
                  className="grid md:grid-cols-[2fr_3fr] gap-0 rounded-2xl overflow-hidden glass hover:border-brand-yellow/12 transition-colors"
                >
                  <div className="relative h-52 md:h-auto min-h-[200px]">
                    <Image src={country.image} alt={country.name} fill className="object-cover" referrerPolicy="no-referrer" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${country.color} to-transparent`} />
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className="text-4xl">{country.flag}</span>
                      <p className="text-white font-display font-bold text-xl mt-1">{country.name}</p>
                      <p className="text-white/50 text-xs mt-0.5">{country.tagline}</p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 bg-brand-light/[0.03]">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                      {country.stats.map((stat) => (
                        <div key={stat.label} className="p-3 rounded-lg bg-brand-light/[0.04] border border-brand-light/6">
                          <p className="text-brand-yellow font-display font-bold text-base">{stat.value}</p>
                          <p className="text-brand-light/35 text-[10px] font-mono uppercase tracking-wider mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                    <ul className="space-y-1.5 mb-5">
                      {country.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-brand-light/50">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-yellow shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {country.popularPrograms.map((p) => (
                        <span key={p} className="text-[10px] font-mono text-brand-yellow/50 bg-brand-yellow/5 px-2 py-0.5 rounded">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>

      {/* University Grid */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-2 top-0 left-1/4 opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <h2 className="text-2xl sm:text-3xl font-display font-bold">Find your <span className="text-gradient">university.</span></h2>
              <div className="flex flex-wrap gap-2">
                {COUNTRIES.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCountry(c)}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedCountry === c
                        ? 'bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark glow-purple dark:glow-yellow'
                        : 'text-brand-dark/50 dark:text-brand-light/50 hover:bg-brand-dark/5 dark:hover:bg-brand-light/5'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </SmoothReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((uni, i) => (
                <motion.div
                  key={uni.name}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <TiltCard className="rounded-xl" tiltStrength={5}>
                    <div className="group rounded-xl overflow-hidden glass-card hover:shadow-lg transition-all duration-300 gradient-border">
                      <div className="relative h-40 overflow-hidden">
                        <Image src={uni.image} alt={uni.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                        <div className="absolute top-2.5 left-2.5 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-sm px-2 py-0.5 rounded-md text-[11px] font-medium text-brand-purple dark:text-brand-yellow flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {uni.country}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-display font-bold text-sm leading-snug mb-0.5">{uni.name}</h4>
                        <p className="text-[11px] text-brand-dark/40 dark:text-brand-light/40 font-mono">{uni.rank} · {uni.programs}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-purple dark:bg-brand-purple/20 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-2 top-0 left-0 opacity-20" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">Not sure which country?</h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto">
            Book a free consultation and let our counselors recommend the best destination for you.
          </p>
          <MagneticButton>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Book Free Consultation
              <ChevronRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <AICounselor />
    </div>
  );
}
