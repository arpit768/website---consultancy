'use client';

import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight, ArrowRight, Phone, Mail, MapPin,
  Star, CheckCircle, GraduationCap, FileCheck, BookOpen,
  Plane, DollarSign, ClipboardList, MessageCircle, ChevronDown,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from './components/ContactForm';
import AICounselor from './components/AICounselor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AnimatedCounter from './components/AnimatedCounter';
import MagneticButton from './components/MagneticButton';
import SmoothReveal from './components/SmoothReveal';
import TextReveal from './components/TextReveal';
import TiltCard from './components/TiltCard';
import { useThemeContext } from '@/app/components/ThemeProvider';
import { COUNTRY_PROFILES, TESTIMONIALS } from '@/lib/data';

const SERVICES_PREVIEW = [
  { icon: GraduationCap, title: 'Education Consultation', desc: 'Expert university shortlisting & course selection' },
  { icon: ClipboardList, title: 'Documentation', desc: 'SOP writing, transcripts & application management' },
  { icon: BookOpen, title: 'Test Preparation', desc: 'IELTS, PTE, TOEFL, GRE, GMAT & more' },
  { icon: FileCheck, title: 'Visa Guidance', desc: 'Application support & mock interviews' },
  { icon: Plane, title: 'Pre & Post Arrival', desc: 'Orientation, accommodation & settlement' },
  { icon: DollarSign, title: 'Scholarships', desc: 'Scholarship search & financial guidance' },
];

const TRUST_POINTS = [
  { title: 'Govt. Authorized', desc: 'Registered with Ministry of Education, Nepal' },
  { title: '100% Satisfaction', desc: 'Every student and guardian rates us 5 stars' },
  { title: '7+ Years Experience', desc: 'Guiding students since 2017' },
];

export default function Home() {
  const { isDark: isDarkMode, toggle: toggleDark } = useThemeContext();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [showAllServices, setShowAllServices] = useState(false);

  const featuredTestimonial = TESTIMONIALS[0];
  const visibleServices = showAllServices ? SERVICES_PREVIEW : SERVICES_PREVIEW.slice(0, 3);

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light font-sans transition-colors duration-500 overflow-x-hidden">

      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple via-brand-yellow to-brand-purple origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar isDarkMode={isDarkMode} onToggleDark={toggleDark} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92dvh] flex items-center pt-24 pb-16 px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
        {/* Subtle background orbs */}
        <div className="aurora-blob aurora-blob-1 -top-60 -right-60 opacity-40" />
        <div className="aurora-blob aurora-blob-2 bottom-0 -left-40 opacity-30" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-purple/6 dark:bg-brand-yellow/8 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple dark:bg-brand-yellow animate-pulse" />
            <span className="text-[11px] font-mono text-brand-purple dark:text-brand-yellow uppercase tracking-wider">
              Govt. Authorized · Since 2017
            </span>
          </motion.div>

          <TextReveal as="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.06] tracking-tight max-w-4xl" delay={0.1}>
            Your gateway to
          </TextReveal>
          <TextReveal as="span" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.06] tracking-tight text-gradient block mt-1" delay={0.3}>
            global education.
          </TextReveal>

          <SmoothReveal delay={0.45}>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-brand-dark/50 dark:text-brand-light/45 max-w-lg leading-relaxed">
              From university selection to visa approval — we guide Nepalese students every step of the way.
            </p>
          </SmoothReveal>

          <SmoothReveal delay={0.6}>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <MagneticButton strength={0.2}>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark px-8 py-4 rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-brand-purple/20 dark:shadow-brand-yellow/20"
                >
                  Start Your Journey
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Link
                  href="/destinations"
                  className="inline-flex items-center justify-center gap-2 border border-brand-dark/10 dark:border-brand-light/10 text-brand-dark/60 dark:text-brand-light/60 px-8 py-4 rounded-xl font-medium text-sm hover:border-brand-purple/30 dark:hover:border-brand-yellow/30 hover:text-brand-purple dark:hover:text-brand-yellow transition-all"
                >
                  Explore Destinations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
            </div>
          </SmoothReveal>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 sm:mt-20 flex gap-12 sm:gap-16"
          >
            {[
              { value: '7+', label: 'Years' },
              { value: '5', label: 'Countries' },
              { value: '100%', label: 'Satisfaction' },
            ].map((s, i) => (
              <div key={i}>
                <AnimatedCounter value={s.value} className="text-3xl sm:text-4xl font-display font-bold text-brand-purple dark:text-brand-yellow" />
                <p className="text-[11px] font-mono text-brand-dark/30 dark:text-brand-light/30 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Snapshot ───────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <SmoothReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-[11px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 uppercase tracking-[0.2em] mb-3">What We Do</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                  End-to-end <span className="text-brand-purple dark:text-brand-yellow">support.</span>
                </h2>
              </div>
              <Link
                href="/services"
                className="text-sm font-medium text-brand-purple dark:text-brand-yellow flex items-center gap-1 hover:gap-2 transition-all"
              >
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SmoothReveal>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              <AnimatePresence mode="popLayout">
                {visibleServices.map((svc, i) => (
                  <motion.div
                    key={svc.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SmoothReveal delay={i * 0.05}>
                      <Link href="/services">
                        <div className="group p-5 rounded-xl border border-brand-dark/5 dark:border-brand-light/5 hover:border-brand-purple/20 dark:hover:border-brand-yellow/20 hover:shadow-md transition-all duration-300 text-center h-full">
                          <div className="w-11 h-11 rounded-xl bg-brand-purple/8 dark:bg-brand-yellow/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-purple/15 dark:group-hover:bg-brand-yellow/15 transition-colors">
                            <svc.icon className="w-5 h-5 text-brand-purple dark:text-brand-yellow" />
                          </div>
                          <h3 className="font-display font-bold text-xs sm:text-sm mb-1 leading-snug">{svc.title}</h3>
                          <p className="text-[11px] text-brand-dark/40 dark:text-brand-light/35 leading-relaxed hidden sm:block">{svc.desc}</p>
                        </div>
                      </Link>
                    </SmoothReveal>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {SERVICES_PREVIEW.length > 3 && (
              <SmoothReveal delay={0.3}>
                <motion.button
                  onClick={() => setShowAllServices(!showAllServices)}
                  className="flex items-center justify-center gap-2 mx-auto px-5 py-2.5 rounded-lg border border-brand-purple/20 dark:border-brand-yellow/20 text-brand-purple dark:text-brand-yellow hover:bg-brand-purple/5 dark:hover:bg-brand-yellow/5 transition-all text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showAllServices ? 'Show Less' : 'View More Services'}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      showAllServices ? 'rotate-180' : ''
                    }`}
                  />
                </motion.button>
              </SmoothReveal>
            )}
          </div>
        </div>
      </section>

      {/* ── Destinations Preview ────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-dark dark:bg-[#120620] relative overflow-hidden">
        <div className="aurora-blob aurora-blob-1 top-0 right-0 opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-[11px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em] mb-3">Study Destinations</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-light">
                  5 countries, <span className="text-brand-yellow">endless opportunities.</span>
                </h2>
              </div>
              <Link
                href="/destinations"
                className="text-sm font-medium text-brand-yellow flex items-center gap-1 hover:gap-2 transition-all"
              >
                Explore all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SmoothReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {COUNTRY_PROFILES.map((country, i) => (
              <SmoothReveal key={country.short} delay={i * 0.06}>
                <Link href={`/destinations#${country.short.toLowerCase()}`}>
                  <TiltCard className="rounded-xl" tiltStrength={4}>
                    <div className="group relative h-52 sm:h-56 rounded-xl overflow-hidden">
                      <Image
                        src={country.image}
                        alt={country.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${country.color} via-transparent to-transparent`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-2xl mb-1 block">{country.flag}</span>
                        <p className="text-white font-display font-bold text-base leading-tight">{country.name}</p>
                        <p className="text-white/50 text-[11px] font-mono mt-0.5">{country.stats[0].value} {country.stats[0].label}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust + Testimonial ─────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Trust points */}
          <SmoothReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
              {TRUST_POINTS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-xl border border-brand-dark/5 dark:border-brand-light/5"
                >
                  <CheckCircle className="w-5 h-5 text-brand-purple dark:text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-brand-dark/45 dark:text-brand-light/40 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </SmoothReveal>

          {/* Featured testimonial */}
          <SmoothReveal delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <p className="text-[11px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 uppercase tracking-[0.2em]">Student Story</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 text-brand-yellow fill-current" />)}
                  </div>
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl font-display leading-relaxed text-brand-dark/75 dark:text-brand-light/70 mb-6">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 bg-brand-purple/10 dark:bg-brand-yellow/10">
                    <Image src={featuredTestimonial.avatar} alt={featuredTestimonial.name} fill className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{featuredTestimonial.name}</p>
                    <p className="text-[11px] text-brand-dark/40 dark:text-brand-light/40 font-mono">{featuredTestimonial.program}</p>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple dark:text-brand-yellow border border-brand-purple/15 dark:border-brand-yellow/15 px-6 py-3 rounded-xl hover:bg-brand-purple/5 dark:hover:bg-brand-yellow/5 transition-colors"
                >
                  Read more stories <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </SmoothReveal>
        </div>
      </section>

      {/* ── How It Works (compact) ──────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-purple/[0.03] dark:bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SmoothReveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 flex-1">
                {[
                  { step: '01', label: 'Free Consultation' },
                  { step: '02', label: 'University Shortlisting' },
                  { step: '03', label: 'Application & Docs' },
                  { step: '04', label: 'Visa & Departure' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-2xl font-display font-bold text-brand-purple/15 dark:text-brand-yellow/15">{s.step}</span>
                    <span className="text-sm font-medium text-brand-dark/60 dark:text-brand-light/50">{s.label}</span>
                    {i < 3 && <ArrowRight className="w-3.5 h-3.5 text-brand-dark/15 dark:text-brand-light/15 hidden sm:block" />}
                  </div>
                ))}
              </div>
              <Link
                href="/process"
                className="text-sm font-medium text-brand-purple dark:text-brand-yellow flex items-center gap-1 hover:gap-2 transition-all shrink-0"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </SmoothReveal>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-dark dark:bg-[#120620] relative overflow-hidden">
        <div className="aurora-blob aurora-blob-1 top-0 right-1/4 opacity-20" />
        <div className="max-w-5xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em] mb-3">Get Started</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-light mb-4">
                Your future starts with
                <br className="hidden sm:block" />
                <span className="text-brand-yellow"> a conversation.</span>
              </h2>
              <p className="text-brand-light/40 text-sm sm:text-base max-w-md mx-auto">
                Free initial consultation. No commitment required.
              </p>
            </div>
          </SmoothReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <SmoothReveal direction="left">
              <div className="flex flex-col gap-3">
                {[
                  { icon: Mail,   label: 'Email',   value: 'info@educarinternational.edu.np' },
                  { icon: Phone,  label: 'Phone',   value: '015005528 · +977-9810646177' },
                  { icon: MapPin, label: 'Office',  value: 'Chakupat-10, Patan Dhoka Road, Lalitpur' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-brand-light/6 hover:border-brand-yellow/15 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-brand-yellow/8 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-[10px] text-brand-light/30 font-mono uppercase tracking-wider">{item.label}</p>
                      <p className="text-brand-light text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-2 p-5 bg-brand-yellow/[0.04] border border-brand-yellow/10 rounded-xl">
                  <p className="text-brand-yellow font-display font-bold text-sm mb-1">Free Consultation</p>
                  <p className="text-brand-light/35 text-xs leading-relaxed">
                    Talk directly with a senior counselor — no bots, no scripts.
                  </p>
                </div>
              </div>
            </SmoothReveal>

            <SmoothReveal direction="right">
              <ContactForm />
            </SmoothReveal>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <AICounselor />
      <Footer />
    </div>
  );
}
