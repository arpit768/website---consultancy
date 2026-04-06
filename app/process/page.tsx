'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import AICounselor from '@/app/components/AICounselor';
import ScrollProgress from '@/app/components/ScrollProgress';
import Breadcrumb from '@/app/components/Breadcrumb';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import MagneticButton from '@/app/components/MagneticButton';
import SmoothReveal from '@/app/components/SmoothReveal';
import TextReveal from '@/app/components/TextReveal';
import { useThemeContext } from '@/app/components/ThemeProvider';
import { PROCESS_STEPS } from '@/lib/data';

const FAQ = [
  { q: 'How long does the entire study abroad process take?', a: 'The timeline varies by destination and intake. Typically, the full process from initial consultation to departure takes 4–8 months. For countries like the UK and Australia, we recommend starting at least 6 months before your intended intake.' },
  { q: 'Do I need to visit your office in person?', a: 'No! We serve students from all regions of Nepal through face-to-face meetings, phone, email, Skype, and social media. In-person visits to our Lalitpur office are welcome but not mandatory.' },
  { q: 'What happens if my visa is rejected?', a: 'We analyze the rejection reason, strengthen the weak areas of your application, and prepare a stronger re-application. Our team has successfully reversed many initial rejections.' },
  { q: 'Is there a fee for the initial consultation?', a: 'The initial consultation is completely free. Our counselors assess your profile, answer your questions, and provide honest guidance — no fees, no commitment required.' },
  { q: 'Can Educar help if I already have a university offer?', a: 'Absolutely. Even if you already have an offer letter, we can assist with documentation verification, SOP review, visa preparation, interview coaching, and pre-departure orientation.' },
  { q: 'Which English proficiency test should I take?', a: 'It depends on your target country and university. IELTS is widely accepted globally; PTE is popular in Australia and the UK; TOEFL is preferred by US universities. We advise based on your specific shortlist.' },
];

export default function ProcessPage() {
  const { isDark, toggle } = useThemeContext();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light font-sans transition-colors duration-500">
      <ScrollProgress />
      <Navbar isDarkMode={isDark} onToggleDark={toggle} />

      {/* Hero */}
      <section className="pt-32 sm:pt-36 pb-10 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-1 -top-40 -right-20 opacity-40" />
        <div className="aurora-blob aurora-blob-3 bottom-0 left-1/4 opacity-30" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Breadcrumb label="Our Process" />
            <div className="mb-4">
              <TextReveal as="h1" className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.06] tracking-tight">
                Simple steps,
              </TextReveal>
              <br />
              <TextReveal as="span" className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.06] tracking-tight text-gradient" delay={0.2}>
                big results.
              </TextReveal>
            </div>
            <p className="text-base sm:text-lg text-brand-dark/50 dark:text-brand-light/50 max-w-xl leading-relaxed">
              Our proven 4-step process has guided hundreds of students from initial inquiry to studying abroad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-8 sm:py-10 px-5 sm:px-8 md:px-16 lg:px-24 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {PROCESS_STEPS.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  activeStep === i
                    ? 'bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark glow-purple dark:glow-yellow'
                    : 'text-brand-dark/50 dark:text-brand-light/50 border border-brand-dark/8 dark:border-brand-light/8 hover:border-brand-purple/20 dark:hover:border-brand-yellow/20'
                }`}
              >
                <span className={`w-5 h-5 rounded flex items-center justify-center font-bold font-mono text-[10px] shrink-0 ${
                  activeStep === i ? 'bg-white/20 dark:bg-brand-dark/20' : 'bg-brand-purple/8 dark:bg-brand-yellow/8 text-brand-purple dark:text-brand-yellow'
                }`}>{step.step}</span>
                <span className="hidden sm:inline">{step.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="grid md:grid-cols-[3fr_2fr] gap-6 p-5 sm:p-8 glass-card rounded-xl"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-display font-bold text-gradient">{PROCESS_STEPS[activeStep].step}</span>
                  <div>
                    <p className="text-[10px] font-mono text-brand-dark/35 dark:text-brand-light/35 uppercase tracking-wider">{PROCESS_STEPS[activeStep].duration}</p>
                    <h2 className="font-display font-bold text-lg sm:text-xl">{PROCESS_STEPS[activeStep].title}</h2>
                  </div>
                </div>
                <p className="text-sm text-brand-dark/55 dark:text-brand-light/50 leading-relaxed mb-5">{PROCESS_STEPS[activeStep].detail}</p>
                <div className="flex gap-3">
                  {activeStep > 0 && (
                    <button onClick={() => setActiveStep(activeStep - 1)} className="text-xs text-brand-dark/35 dark:text-brand-light/35 hover:text-brand-purple dark:hover:text-brand-yellow transition-colors">
                      &larr; Step {activeStep}
                    </button>
                  )}
                  {activeStep < PROCESS_STEPS.length - 1 && (
                    <button onClick={() => setActiveStep(activeStep + 1)} className="text-xs font-semibold text-brand-purple dark:text-brand-yellow flex items-center gap-1">
                      Next: {PROCESS_STEPS[activeStep + 1].title} <ChevronRight className="w-3 h-3" />
                    </button>
                  )}
                  {activeStep === PROCESS_STEPS.length - 1 && (
                    <MagneticButton strength={0.15}>
                      <Link href="/#contact" className="inline-flex items-center gap-1.5 bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark px-4 py-2 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity">
                        Book Consultation <ArrowRight className="w-3 h-3" />
                      </Link>
                    </MagneticButton>
                  )}
                </div>
              </div>
              <div className="bg-brand-purple/3 dark:bg-brand-yellow/3 rounded-xl p-5">
                <p className="text-[10px] font-mono text-brand-purple/40 dark:text-brand-yellow/40 uppercase tracking-wider mb-3">Checklist</p>
                <ul className="space-y-2">
                  {PROCESS_STEPS[activeStep].checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-purple dark:text-brand-yellow shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-dark/55 dark:text-brand-light/55 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-1.5 mt-5 justify-center">
            {PROCESS_STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`h-1 rounded-full transition-all ${activeStep === i ? 'w-6 bg-brand-purple dark:bg-brand-yellow' : 'w-1.5 bg-brand-dark/10 dark:bg-brand-light/10'}`}
                aria-label={`Go to step ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-24 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-2 top-1/3 -left-40 opacity-20" />
        <div className="max-w-3xl mx-auto relative z-10">
          <SmoothReveal>
            <div className="text-center mb-12">
              <p className="text-[11px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 uppercase tracking-[0.2em] mb-2">FAQ</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">Common <span className="text-gradient">questions</span></h2>
            </div>
          </SmoothReveal>

          <div className="flex flex-col gap-2">
            {FAQ.map((item, i) => (
              <SmoothReveal key={i} delay={i * 0.04}>
                <div className="border border-brand-dark/6 dark:border-brand-light/6 rounded-xl overflow-hidden hover:border-brand-purple/12 dark:hover:border-brand-yellow/12 transition-colors">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    aria-expanded={activeFaq === i}
                  >
                    <span className="font-medium text-sm pr-4">{item.q}</span>
                    <ChevronDown className={`w-4 h-4 text-brand-dark/25 dark:text-brand-light/25 shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <p className="px-5 pb-5 text-sm text-brand-dark/50 dark:text-brand-light/45 leading-relaxed border-t border-brand-dark/4 dark:border-brand-light/4 pt-4">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SmoothReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-purple dark:bg-brand-purple/20 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-3 bottom-0 right-0 opacity-15" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">Ready to start Step 1?</h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto">No commitment, just honest guidance.</p>
          <MagneticButton>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
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
