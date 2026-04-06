import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-brand-light/5 py-10 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="mb-5">
              <div className="relative h-12 w-44 bg-white rounded-xl px-2 py-1">
                <Image
                  src="/logo.png"
                  alt="Educar International"
                  fill
                  className="object-contain object-left p-1"
                />
              </div>
            </div>
            <p className="text-brand-light/35 text-sm leading-relaxed mb-4">
              Officially authorized by the Government of Nepal · Registered with the Ministry of Education, Nepal.
            </p>
            <p className="text-brand-light/25 text-xs font-mono italic">&ldquo;Educarating Dreams&rdquo;</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Services',
                links: [
                  { label: 'Education Consultation', href: '/services#consultation' },
                  { label: 'Documentation',          href: '/services#documentation' },
                  { label: 'Test Preparation',       href: '/services#test-prep' },
                  { label: 'Visa Guidance',          href: '/services#visa' },
                  { label: 'Pre-Departure',          href: '/services#pre-departure' },
                  { label: 'Scholarships',           href: '/services#scholarships' },
                ],
              },
              {
                title: 'Destinations',
                links: [
                  { label: 'United Kingdom', href: '/destinations#uk'        },
                  { label: 'United States',  href: '/destinations#usa'       },
                  { label: 'Canada',         href: '/destinations#canada'    },
                  { label: 'Australia',      href: '/destinations#australia' },
                  { label: 'Japan',          href: '/destinations#japan'     },
                ],
              },
              {
                title: 'Company',
                links: [
                  { label: 'Our Process',    href: '/process'  },
                  { label: 'Testimonials',   href: '/reviews'  },
                  { label: 'Contact Us',     href: '/#contact' },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-[10px] font-mono uppercase tracking-widest text-brand-light/25 mb-4">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-brand-light/50 hover:text-brand-yellow text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-brand-light/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[11px] font-mono text-brand-light/25 uppercase tracking-widest">
            © {new Date().getFullYear()} Educar International Pvt. Ltd. · Lalitpur, Nepal
          </span>
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'LinkedIn'].map((social) => (
              <Link
                key={social}
                href="#"
                className="text-[11px] font-mono text-brand-light/25 uppercase tracking-widest hover:text-brand-yellow transition-colors duration-200"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
