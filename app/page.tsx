'use client';

import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import {
  ArrowUpRight, Globe, GraduationCap,
  MapPin, Star, Users, CheckCircle, Award,
  ArrowRight, Phone, Mail, ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ContactForm from './components/ContactForm';
import AICounselor from './components/AICounselor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AnimatedCounter from './components/AnimatedCounter';
import MagneticButton from './components/MagneticButton';
import TiltCard from './components/TiltCard';
import SmoothReveal from './components/SmoothReveal';
import TextReveal from './components/TextReveal';
import { useTheme } from '@/hooks/use-theme';
import {
  UNIVERSITIES, COUNTRIES, SERVICES, PROCESS_STEPS,
  TESTIMONIALS, MINI_TESTIMONIALS, WHY_US, MARQUEE_ITEMS,
} from '@/lib/data';

export default function Home() {
  const { isDark: isDarkMode, toggle: toggleDark } = useTheme();
  const [selectedCountry, setSelectedCountry] = useState('All');

  const filteredUniversities = selectedCountry === 'All'
    ? UNIVERSITIES
    : UNIVERSITIES.filter(u => u.country === selectedCountry);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light font-sans transition-colors duration-500 overflow-x-hidden">

      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple via-brand-yellow to-brand-purple origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navbar isDarkMode={isDarkMode} onToggleDark={toggleDark} />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 px-5 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
        {/* Aurora blobs */}
        <div className="aurora-blob aurora-blob-1 -top-40 -right-40 opacity-60" />
        <div className="aurora-blob aurora-blob-2 top-1/3 -left-60 opacity-50" />
        <div className="aurora-blob aurora-blob-3 bottom-20 right-1/4 opacity-40" />

        {/* Morphing decorative shape */}
        <div className="absolute top-32 right-12 w-72 h-72 sm:w-96 sm:h-96 morph-shape bg-gradient-to-br from-brand-purple/5 to-brand-yellow/5 dark:from-brand-purple/10 dark:to-brand-yellow/5 pointer-events-none" />

        {/* Floating decorative elements */}
        <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-brand-purple/20 dark:bg-brand-yellow/20 animate-float" />
        <div className="absolute top-60 right-40 w-2 h-2 rounded-full bg-brand-yellow/30 animate-float-delayed" />
        <div className="absolute bottom-40 left-20 w-4 h-4 rounded-full bg-brand-purple/10 dark:bg-brand-yellow/10 animate-float-slow" />

        <div className="max-w-6xl mx-auto w-full relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-brand-purple/6 dark:bg-brand-yellow/8 rounded-full px-4 py-1.5 mb-8 glass-card"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple dark:bg-brand-yellow animate-pulse" />
            <span className="text-[11px] font-mono text-brand-purple dark:text-brand-yellow uppercase tracking-wider">
              Govt. Authorized · Since 2017
            </span>
          </motion.div>

          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.06] tracking-tight max-w-4xl">
            <TextReveal as="h1" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.06] tracking-tight" delay={0.1}>
              We turn study abroad
            </TextReveal>
            <br />
            <TextReveal as="span" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.06] tracking-tight text-gradient" delay={0.3}>
              dreams into reality.
            </TextReveal>
          </div>

          <SmoothReveal delay={0.4} direction="up">
            <p className="mt-6 sm:mt-8 text-base sm:text-lg text-brand-dark/55 dark:text-brand-light/50 max-w-xl leading-relaxed">
              Educar International guides Nepalese students from university selection to visa approval and post-arrival support.
            </p>
          </SmoothReveal>

          <SmoothReveal delay={0.55} direction="up">
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <MagneticButton strength={0.2}>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark px-7 py-3.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity glow-purple dark:glow-yellow"
                >
                  Start Your Journey
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Link
                  href="/destinations"
                  className="inline-flex items-center justify-center gap-2 border border-brand-dark/12 dark:border-brand-light/12 text-brand-dark/70 dark:text-brand-light/70 px-7 py-3.5 rounded-xl font-medium text-sm hover:border-brand-purple/30 dark:hover:border-brand-yellow/30 hover:text-brand-purple dark:hover:text-brand-yellow transition-all glass-card"
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 sm:mt-20 flex gap-10 sm:gap-16"
          >
            {[
              { value: '7+', label: 'Years' },
              { value: '5', label: 'Countries' },
              { value: '100%', label: 'Satisfaction' },
            ].map((s, i) => (
              <div key={i}>
                <AnimatedCounter value={s.value} className="text-3xl sm:text-4xl font-display font-bold text-gradient" />
                <p className="text-[11px] font-mono text-brand-dark/35 dark:text-brand-light/35 uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Marquee ─────────────────────────────────────────────────── */}
      <div className="py-3.5 bg-brand-dark dark:bg-brand-yellow/5 overflow-hidden border-y border-brand-dark/5 dark:border-brand-yellow/10 marquee-fade">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-8 shrink-0 px-8">
              <span className="text-brand-light/50 dark:text-brand-light/30 font-mono text-xs uppercase tracking-[0.2em]">{item}</span>
              <span className="text-brand-light/15 dark:text-brand-light/10 text-[8px]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── CEO ─────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-2 -top-40 right-0 opacity-30" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          <SmoothReveal direction="left" className="order-2 md:order-1">
            <TiltCard className="rounded-2xl overflow-hidden" tiltStrength={6}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/ceo-office/800/900"
                  alt="CEO Ashish Mahat"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="font-display font-bold text-white text-lg">Ashish Mahat</p>
                  <p className="text-white/60 text-xs font-mono uppercase tracking-wider">CEO · Educar International</p>
                </div>
              </div>
            </TiltCard>
          </SmoothReveal>

          <SmoothReveal direction="right" className="order-1 md:order-2">
            <div>
              <p className="text-[11px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 uppercase tracking-[0.2em] mb-5">Message from the CEO</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-tight mb-6">
                Persistence, hard work
                <br />
                <span className="text-gradient">&amp; dedication.</span>
              </h2>
              <div className="space-y-4 text-brand-dark/60 dark:text-brand-light/50 leading-relaxed text-[15px]">
                <p>
                  &ldquo;Educar International has consistently remained committed to delivering the highest caliber of educational consulting services to the dynamic and aspiring youth of Nepal.
                </p>
                <p>
                  We are steadfast in our commitment to transform your aspirations for overseas education into reality — achieving a 100% satisfaction rate among students and their guardians.&rdquo;
                </p>
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-brand-purple/20 via-brand-yellow/20 to-transparent" />
              <p className="mt-4 text-xs font-mono text-brand-dark/30 dark:text-brand-light/30 uppercase tracking-wider">Ashish Mahat, CEO</p>
            </div>
          </SmoothReveal>
        </div>
      </section>

      {/* ── Destinations ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 bg-white/50 dark:bg-white/[0.02] relative overflow-hidden">
        <div className="aurora-blob aurora-blob-3 top-0 left-1/4 opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 uppercase tracking-[0.2em] mb-3">Partner Universities</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                  Your dream campus, <span className="text-gradient">worldwide.</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {COUNTRIES.map(c => (
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
              {filteredUniversities.map((uni, i) => (
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

      {/* ── Services ────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-1 bottom-0 right-0 opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="mb-14">
              <p className="text-[11px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 uppercase tracking-[0.2em] mb-3">What We Do</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold max-w-lg">
                Everything you need, <span className="text-gradient">nothing you don&apos;t.</span>
              </h2>
            </div>
          </SmoothReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((svc, i) => (
              <SmoothReveal key={i} delay={i * 0.06}>
                <TiltCard className="rounded-xl h-full" tiltStrength={4}>
                  <div className="group p-6 rounded-xl glass-card hover:shadow-lg transition-all duration-300 h-full gradient-border">
                    <div className="w-10 h-10 rounded-lg bg-brand-purple/8 dark:bg-brand-yellow/8 flex items-center justify-center mb-4 group-hover:bg-brand-purple/15 dark:group-hover:bg-brand-yellow/15 transition-colors">
                      <svc.icon className="w-5 h-5 text-brand-purple dark:text-brand-yellow" />
                    </div>
                    <h3 className="font-display font-bold text-base mb-2">{svc.title}</h3>
                    <p className="text-sm text-brand-dark/50 dark:text-brand-light/45 leading-relaxed">{svc.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {svc.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 bg-brand-purple/4 dark:bg-brand-yellow/4 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ──────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-dark dark:bg-[#120620] relative overflow-hidden">
        <div className="aurora-blob aurora-blob-1 top-1/4 -left-40 opacity-30" />
        <div className="aurora-blob aurora-blob-2 bottom-10 right-10 opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em] mb-3">Why Educar</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-light">
                The <span className="text-gradient">difference.</span>
              </h2>
            </div>
          </SmoothReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_US.map((item, i) => (
              <SmoothReveal key={i} delay={i * 0.06}>
                <TiltCard className="rounded-xl h-full" tiltStrength={4}>
                  <div className="p-6 rounded-xl glass hover:border-brand-yellow/15 transition-colors h-full">
                    <CheckCircle className="w-5 h-5 text-brand-yellow mb-4 opacity-60" />
                    <h3 className="font-display font-bold text-brand-light text-base mb-2">{item.title}</h3>
                    <p className="text-sm text-brand-light/40 leading-relaxed">{item.desc}</p>
                  </div>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-3 top-20 right-1/3 opacity-25" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="mb-14">
              <p className="text-[11px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 uppercase tracking-[0.2em] mb-3">How It Works</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                Simple steps, <span className="text-gradient">big results.</span>
              </h2>
            </div>
          </SmoothReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((ps, i) => (
              <SmoothReveal key={i} delay={i * 0.08}>
                <div className="relative p-6 rounded-xl glass-card gradient-border">
                  <span className="text-5xl font-display font-bold text-brand-purple/8 dark:text-brand-yellow/8 absolute top-4 right-5">{ps.step}</span>
                  <span className="inline-block text-[10px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 uppercase tracking-wider mb-4">{ps.duration}</span>
                  <h3 className="font-display font-bold text-lg mb-2">{ps.title}</h3>
                  <p className="text-sm text-brand-dark/50 dark:text-brand-light/45 leading-relaxed">{ps.desc}</p>
                </div>
              </SmoothReveal>
            ))}
          </div>

          <SmoothReveal delay={0.3}>
            <div className="mt-12 bg-brand-purple dark:bg-brand-purple/20 rounded-2xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 glow-purple">
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">All you need is a passport.</h3>
                <p className="text-white/50 text-sm max-w-md">The rest is in our capable hands. Our counselors are with you 24/7.</p>
              </div>
              <MagneticButton strength={0.2}>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-6 py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shrink-0"
                >
                  Book Free Session
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
            </div>
          </SmoothReveal>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 bg-white/50 dark:bg-white/[0.02] relative overflow-hidden">
        <div className="aurora-blob aurora-blob-2 -top-20 left-1/3 opacity-20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-[11px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 uppercase tracking-[0.2em] mb-3">Student Stories</p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
                  Real students, <span className="text-gradient">real results.</span>
                </h2>
              </div>
              <div className="flex items-center gap-1.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-brand-yellow fill-current" />)}
                <span className="ml-1.5 text-sm font-bold">5.0</span>
              </div>
            </div>
          </SmoothReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <SmoothReveal key={i} delay={i * 0.1}>
                <TiltCard className="rounded-xl h-full" tiltStrength={3}>
                  <div className="p-6 rounded-xl glass-card flex flex-col h-full gradient-border">
                    <div className="flex gap-0.5 mb-4">
                      {[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 text-brand-yellow fill-current" />)}
                    </div>
                    <p className="text-sm text-brand-dark/70 dark:text-brand-light/70 leading-relaxed flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 mt-6 pt-5 border-t border-brand-dark/6 dark:border-brand-light/6">
                      <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0 bg-brand-purple/10 dark:bg-brand-yellow/10">
                        <Image src={t.avatar} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{t.name}</p>
                        <p className="text-[11px] text-brand-dark/40 dark:text-brand-light/40 font-mono">{t.program}</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </SmoothReveal>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {MINI_TESTIMONIALS.map((mini, i) => (
              <SmoothReveal key={i} delay={i * 0.06}>
                <div className="p-4 rounded-lg glass-card">
                  <p className="text-xs text-brand-dark/55 dark:text-brand-light/55 leading-relaxed mb-2 italic">&ldquo;{mini.quote}&rdquo;</p>
                  <p className="text-[11px] font-bold text-brand-purple dark:text-brand-yellow font-mono">— {mini.name}</p>
                </div>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 sm:py-28 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-dark dark:bg-[#120620] relative overflow-hidden">
        <div className="aurora-blob aurora-blob-1 top-0 right-1/4 opacity-25" />
        <div className="aurora-blob aurora-blob-3 bottom-0 left-10 opacity-15" />
        <div className="max-w-5xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="text-center mb-14">
              <p className="text-[11px] font-mono text-brand-yellow/50 uppercase tracking-[0.2em] mb-3">Get Started</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-light mb-4">
                Your future starts with
                <br className="hidden sm:block" />
                <span className="text-gradient"> a conversation.</span>
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
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl glass hover:border-brand-yellow/15 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-brand-yellow/8 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-[10px] text-brand-light/30 font-mono uppercase tracking-wider">{item.label}</p>
                      <p className="text-brand-light text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
                <div className="mt-2 p-5 glass rounded-xl border-brand-yellow/10">
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
