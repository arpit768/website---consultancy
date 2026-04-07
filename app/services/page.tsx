'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle, ChevronDown, ArrowRight } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
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
import { ICON_MAP } from '@/lib/icon-map';

type Service = {
  id: string; num: string; icon: string; title: string;
  desc: string; longDesc: string; tags: string[]; includes: string[];
};

export default function ServicesPage() {
  const { isDark, toggle } = useThemeContext();
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    fetch('/api/admin/services').then(r => r.json()).then(setServices);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light font-sans transition-colors duration-500">
      <ScrollProgress />
      <Navbar isDarkMode={isDark} onToggleDark={toggle} />

      {/* Hero */}
      <section className="pt-32 sm:pt-36 pb-16 sm:pb-20 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-dark dark:bg-[#120620] relative overflow-hidden">
        <div className="aurora-blob aurora-blob-1 -top-40 right-0 opacity-30" />
        <div className="aurora-blob aurora-blob-3 bottom-0 -left-20 opacity-20" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Breadcrumb label="Services" />
            <div className="mb-4">
              <TextReveal as="h1" className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.06] tracking-tight text-brand-light">
                Everything
              </TextReveal>
              <br />
              <TextReveal as="span" className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.06] tracking-tight text-gradient" delay={0.2}>
                you need.
              </TextReveal>
            </div>
            <p className="text-base sm:text-lg text-brand-light/45 max-w-xl leading-relaxed">
              Six comprehensive service pillars covering every step of your study abroad journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-2 top-1/3 right-0 opacity-15" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col gap-3">
            {services.map((svc, i) => {
              const IconComp = ICON_MAP[svc.icon] ?? GraduationCap;
              return (
                <SmoothReveal key={svc.id} delay={i * 0.05}>
                  <div
                    id={`service-${i}`}
                    className={`border rounded-xl overflow-hidden transition-colors ${
                      expandedIdx === i
                        ? 'border-brand-purple/20 dark:border-brand-yellow/20 glass-card'
                        : 'border-brand-dark/6 dark:border-brand-light/6 hover:border-brand-purple/12 dark:hover:border-brand-yellow/12'
                    }`}
                  >
                    <button
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                      onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                      aria-expanded={expandedIdx === i}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          expandedIdx === i ? 'bg-brand-purple dark:bg-brand-yellow' : 'bg-brand-purple/8 dark:bg-brand-yellow/8'
                        }`}>
                          <IconComp className={`w-5 h-5 transition-colors ${
                            expandedIdx === i ? 'text-white dark:text-brand-dark' : 'text-brand-purple dark:text-brand-yellow'
                          }`} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-sm sm:text-base">{svc.title}</h3>
                          <p className="text-brand-dark/35 dark:text-brand-light/35 text-xs mt-0.5 hidden sm:block">{svc.desc.slice(0, 70)}...</p>
                        </div>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-brand-dark/25 dark:text-brand-light/25 shrink-0 ml-3 transition-transform duration-300 ${expandedIdx === i ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {expandedIdx === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-5 sm:px-6 pb-6 border-t border-brand-dark/4 dark:border-brand-light/4 pt-5">
                            <div className="grid md:grid-cols-[3fr_2fr] gap-6">
                              <div>
                                <p className="text-sm text-brand-dark/60 dark:text-brand-light/55 leading-relaxed mb-5">{svc.longDesc}</p>
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                  {svc.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] font-mono text-brand-purple/50 dark:text-brand-yellow/50 bg-brand-purple/4 dark:bg-brand-yellow/4 px-2 py-0.5 rounded">{tag}</span>
                                  ))}
                                </div>
                                <MagneticButton strength={0.15}>
                                  <Link
                                    href="/#contact"
                                    className="inline-flex items-center gap-2 bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                                  >
                                    Enquire
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                  </Link>
                                </MagneticButton>
                              </div>
                              <div className="glass-card rounded-xl p-5">
                                <p className="text-[10px] font-mono text-brand-purple/40 dark:text-brand-yellow/40 uppercase tracking-wider mb-3">What&apos;s Included</p>
                                <ul className="space-y-2">
                                  {svc.includes.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                      <CheckCircle className="w-3.5 h-3.5 text-brand-purple dark:text-brand-yellow shrink-0 mt-0.5" />
                                      <span className="text-sm text-brand-dark/55 dark:text-brand-light/55 leading-relaxed">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </SmoothReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 md:px-16 lg:px-24 bg-brand-purple dark:bg-brand-purple/20 relative overflow-hidden">
        <div className="aurora-blob aurora-blob-2 top-0 right-1/4 opacity-15" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-white/50 text-sm sm:text-base mb-8 max-w-md mx-auto">No commitment, just honest guidance from our expert counselors.</p>
          <MagneticButton>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark px-7 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Book Free Session
              <ArrowRight className="w-4 h-4" />
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
