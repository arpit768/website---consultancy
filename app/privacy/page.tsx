'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { useThemeContext } from '@/app/components/ThemeProvider';

export default function PrivacyPage() {
  const { isDark, toggle } = useThemeContext();

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-light font-sans transition-colors duration-500">
      <Navbar isDarkMode={isDark} onToggleDark={toggle} />

      <section className="pt-32 sm:pt-36 pb-20 px-5 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="inline-flex items-center gap-2 text-brand-purple dark:text-brand-yellow hover:gap-3 transition-all mb-8">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>

            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">Privacy Policy</h1>
            <p className="text-brand-dark/50 dark:text-brand-light/50 mb-8">Last updated: April 2025</p>

            <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-display font-bold mb-4">1. Introduction</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  Educar International Pvt. Ltd. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the website. This page informs you of our policies
                  regarding the collection, use, and disclosure of personal data when you use our service and the choices you have
                  associated with that data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">2. Information Collection and Use</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed mb-4">We collect several different types of information for various purposes to provide and improve our service:</p>
                <ul className="list-disc pl-6 space-y-2 text-brand-dark/65 dark:text-brand-light/65">
                  <li>Name and email address</li>
                  <li>Phone number</li>
                  <li>Target country and course information</li>
                  <li>Service inquiries and preferences</li>
                  <li>Cookies and usage data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">3. Use of Data</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  Educar International uses the collected data for various purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-dark/65 dark:text-brand-light/65 mt-4">
                  <li>To provide and maintain our services</li>
                  <li>To notify you about changes to our service</li>
                  <li>To allow you to participate in interactive features</li>
                  <li>To provide customer support and respond to inquiries</li>
                  <li>To gather analysis or valuable information to improve our service</li>
                  <li>To monitor the usage of our service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">4. Security of Data</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  The security of your data is important to us but remember that no method of transmission over the Internet or
                  method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect
                  your personal data, we cannot guarantee its absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">5. Contact Us</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-4 text-brand-dark/65 dark:text-brand-light/65">
                  Email: <a href="mailto:info@educarinternational.edu.np" className="text-brand-purple dark:text-brand-yellow hover:underline">
                    info@educarinternational.edu.np
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
