import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

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

const SOCIAL = [
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Facebook', href: '#', icon: Facebook },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/[0.06]">

      {/* ── Main footer body ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="flex flex-col gap-5 max-w-xs">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-44 bg-white rounded-xl px-2 py-1.5">
                <Image
                  src="/logo.png"
                  alt="Educar International"
                  fill
                  className="object-contain object-left p-1"
                />
              </div>
            </Link>

            {/* Tagline */}
            <p className="text-brand-light/40 text-sm leading-relaxed">
              Government authorized education consultancy dedicated to turning study abroad dreams into reality.
            </p>

            {/* Govt badge */}
            <div className="inline-flex items-center gap-2 bg-brand-yellow/8 border border-brand-yellow/15 rounded-full px-3.5 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
              <span className="text-brand-yellow text-[11px] font-mono uppercase tracking-wider">
                Govt. Authorized · Est. 2017
              </span>
            </div>

            {/* Tagline quote */}
            <p className="text-brand-light/20 text-xs font-mono italic">&ldquo;Educarating Dreams&rdquo;</p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {SOCIAL.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-brand-yellow/10 border border-white/[0.06] hover:border-brand-yellow/20 flex items-center justify-center text-brand-light/35 hover:text-brand-yellow transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-brand-light/25 mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-light/45 hover:text-brand-yellow text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations + Quick Links */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-brand-light/25 mb-5">Destinations</p>
            <ul className="flex flex-col gap-3 mb-8">
              {DESTINATIONS_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-light/45 hover:text-brand-yellow text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="text-[10px] font-mono uppercase tracking-widest text-brand-light/25 mb-5">Company</p>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-brand-light/45 hover:text-brand-yellow text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-brand-light/25 mb-5">Contact</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-yellow/60 shrink-0 mt-0.5" />
                <span className="text-brand-light/45 text-sm leading-relaxed">
                  Chakupat-10, Patan Dhoka Road,<br />Lalitpur, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-yellow/60 shrink-0" />
                <div>
                  <a href="tel:015005528" className="text-brand-light/45 hover:text-brand-yellow text-sm transition-colors block">
                    015005528
                  </a>
                  <a href="tel:+9779810646177" className="text-brand-light/45 hover:text-brand-yellow text-sm transition-colors block">
                    +977-9810646177
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-yellow/60 shrink-0" />
                <a
                  href="mailto:info@educarinternational.edu.np"
                  className="text-brand-light/45 hover:text-brand-yellow text-sm transition-colors break-all"
                >
                  info@educarinternational.edu.np
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-brand-yellow/60 shrink-0 mt-0.5" />
                <span className="text-brand-light/45 text-sm leading-relaxed">
                  Sun – Fri<br />9:00 AM – 5:00 PM NPT
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-mono text-brand-light/20 uppercase tracking-widest text-center sm:text-left">
            © {new Date().getFullYear()} Educar International Pvt. Ltd. · Lalitpur, Nepal
          </p>
          <p className="text-[11px] font-mono text-brand-light/15 uppercase tracking-widest">
            Registered · Ministry of Education, Nepal
          </p>
        </div>
      </div>

    </footer>
  );
}
