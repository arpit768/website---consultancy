import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';

const SERVICES_LINKS = [
  { label: 'Education Consultation', href: '/services' },
  { label: 'Documentation Management', href: '/services' },
  { label: 'Test Preparation', href: '/services' },
  { label: 'Visa & Interview Guidance', href: '/services' },
  { label: 'Pre & Post Arrival', href: '/services' },
  { label: 'Scholarships', href: '/services' },
];

const DESTINATIONS_LINKS = [
  { label: 'United Kingdom', href: '/destinations#uk' },
  { label: 'United States', href: '/destinations#usa' },
  { label: 'Canada', href: '/destinations#canada' },
  { label: 'Australia', href: '/destinations#australia' },
  { label: 'Japan', href: '/destinations#japan' },
];

const QUICK_LINKS = [
  { label: 'Our Process', href: '/process' },
  { label: 'Student Reviews', href: '/reviews' },
  { label: 'Contact Us', href: '/#contact' },
];

const POLICY_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const SOCIAL = [
  { label: 'Instagram', href: 'https://instagram.com/educarinternational', icon: Instagram, external: true },
  { label: 'Facebook', href: 'https://facebook.com/educarinternational', icon: Facebook, external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/educar-international', icon: Linkedin, external: true },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#120620] border-t-4 border-brand-yellow">

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-5 max-w-xs">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-44">
                <Image
                  src="/logo.png"
                  alt="Educar International"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-brand-dark/55 dark:text-brand-light/45 text-sm leading-relaxed">
              Government authorized education consultancy dedicated to turning study abroad dreams into reality.
            </p>

            {/* Govt badge — golden bg + purple text */}
            <div className="inline-flex items-center gap-2 bg-brand-yellow rounded-full px-3.5 py-1.5 w-fit shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
              <span className="text-brand-purple text-[11px] font-mono font-semibold uppercase tracking-wider">
                Govt. Authorized · Est. 2017
              </span>
            </div>

            {/* Tagline quote */}
            <p className="text-brand-dark/25 dark:text-brand-light/20 text-xs font-mono italic">&ldquo;Educarating Dreams&rdquo;</p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mt-1">
              {SOCIAL.map(({ label, href, icon: Icon, external }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-xl bg-brand-purple/6 hover:bg-brand-yellow border border-brand-purple/10 hover:border-brand-yellow flex items-center justify-center text-brand-purple/60 hover:text-brand-dark transition-all duration-200 relative group"
                >
                  <Icon className="w-4 h-4" />
                  {external && (
                    <ExternalLink className="w-2.5 h-2.5 absolute -top-0.5 -right-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            {/* Section label — golden underline accent */}
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-0.5 bg-brand-yellow rounded-full" />
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-purple font-semibold">Services</p>
            </div>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-dark/55 dark:text-brand-light/45 hover:text-brand-purple dark:hover:text-brand-yellow text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations + Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-0.5 bg-brand-yellow rounded-full" />
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-purple font-semibold">Destinations</p>
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              {DESTINATIONS_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-dark/55 dark:text-brand-light/45 hover:text-brand-purple dark:hover:text-brand-yellow text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-0.5 bg-brand-yellow rounded-full" />
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-purple font-semibold">Company</p>
            </div>
            <ul className="flex flex-col gap-3 mb-8">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-dark/55 dark:text-brand-light/45 hover:text-brand-purple dark:hover:text-brand-yellow text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-0.5 bg-brand-yellow rounded-full" />
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-purple font-semibold">Legal</p>
            </div>
            <ul className="flex flex-col gap-3">
              {POLICY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-dark/55 dark:text-brand-light/45 hover:text-brand-purple dark:hover:text-brand-yellow text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-0.5 bg-brand-yellow rounded-full" />
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-purple font-semibold">Contact</p>
            </div>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-purple" />
                </div>
                <span className="text-brand-dark/55 dark:text-brand-light/45 text-sm leading-relaxed">
                  Chakupat-10, Patan Dhoka Road,<br />Lalitpur, Nepal
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-brand-purple" />
                </div>
                <div>
                  <a href="tel:015005528" className="text-brand-dark/55 dark:text-brand-light/45 hover:text-brand-purple dark:hover:text-brand-yellow text-sm transition-colors block">
                    015005528
                  </a>
                  <a href="tel:+9779810646177" className="text-brand-dark/55 dark:text-brand-light/45 hover:text-brand-purple dark:hover:text-brand-yellow text-sm transition-colors block">
                    +977-9810646177
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow/20 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-brand-purple" />
                </div>
                <a
                  href="mailto:info@educarinternational.edu.np"
                  className="text-brand-dark/55 dark:text-brand-light/45 hover:text-brand-purple dark:hover:text-brand-yellow text-sm transition-colors break-all"
                >
                  info@educarinternational.edu.np
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-brand-yellow/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-brand-purple" />
                </div>
                <span className="text-brand-dark/55 dark:text-brand-light/45 text-sm leading-relaxed">
                  Sun – Fri<br />9:00 AM – 5:00 PM NPT
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider — gradient purple to golden ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="h-px bg-gradient-to-r from-brand-purple/20 via-brand-yellow/40 to-brand-purple/20" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-mono text-brand-dark/35 dark:text-brand-light/25 uppercase tracking-widest text-center sm:text-left">
            © {new Date().getFullYear()} Educar International Pvt. Ltd. · Lalitpur, Nepal
          </p>
          <p className="text-[11px] font-mono text-brand-dark/25 dark:text-brand-light/20 uppercase tracking-widest">
            Registered · Ministry of Education, Nepal
          </p>
        </div>
      </div>

    </footer>
  );
}
