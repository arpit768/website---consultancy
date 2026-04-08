'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { useThemeContext } from '@/app/components/ThemeProvider';

export default function TermsPage() {
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

            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">Terms & Conditions</h1>
            <p className="text-brand-dark/50 dark:text-brand-light/50 mb-8">Last updated: April 2025</p>

            <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
              <section>
                <h2 className="text-2xl font-display font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  By accessing and using the Educar International website and services, you accept and agree to be bound by the terms
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">2. Use License</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Educar
                  International's website for personal, non-commercial transitory viewing only. This is the grant of a license, not
                  a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-dark/65 dark:text-brand-light/65 mt-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">3. Disclaimer</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  The materials on Educar International's website are provided on an 'as is' basis. Educar International makes no
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
                  limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">4. Limitations</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  In no event shall Educar International or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use
                  the materials on Educar International's website, even if Educar International or an authorized representative has
                  been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">5. Revisions and Changes</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  The materials appearing on Educar International's website could include technical, typographical, or photographic
                  errors. Educar International does not warrant that any of the materials on its website are accurate, complete, or
                  current. We may make changes to the materials contained on our website at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">6. Links</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  Educar International has not reviewed all of the sites linked to its website and is not responsible for the
                  contents of any such linked site. The inclusion of any link does not imply endorsement by Educar International of
                  the site. Use of any such linked website is at the user's own risk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">7. Modifications to Terms</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  Educar International may revise these terms of service for our website at any time without notice. By using this
                  website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold mb-4">8. Contact Us</h2>
                <p className="text-brand-dark/65 dark:text-brand-light/65 leading-relaxed">
                  If you have any questions about these Terms & Conditions, please contact us at:
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
