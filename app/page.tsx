'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight, Globe, GraduationCap, FileCheck, Compass, Moon, Sun, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const countries = ['All', 'UK', 'USA', 'Canada', 'Australia'];
const universities = [
  { name: 'University of Oxford', country: 'UK', image: 'https://picsum.photos/seed/oxford/600/400', rank: '#1 in UK' },
  { name: 'Imperial College London', country: 'UK', image: 'https://picsum.photos/seed/imperial/600/400', rank: '#3 in UK' },
  { name: 'Harvard University', country: 'USA', image: 'https://picsum.photos/seed/harvard/600/400', rank: '#1 in USA' },
  { name: 'Stanford University', country: 'USA', image: 'https://picsum.photos/seed/stanford/600/400', rank: '#2 in USA' },
  { name: 'University of Toronto', country: 'Canada', image: 'https://picsum.photos/seed/toronto/600/400', rank: '#1 in Canada' },
  { name: 'University of British Columbia', country: 'Canada', image: 'https://picsum.photos/seed/ubc/600/400', rank: '#2 in Canada' },
  { name: 'University of Melbourne', country: 'Australia', image: 'https://picsum.photos/seed/melbourne/600/400', rank: '#1 in Australia' },
  { name: 'University of Sydney', country: 'Australia', image: 'https://picsum.photos/seed/sydney/600/400', rank: '#2 in Australia' },
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');

  const filteredUniversities = selectedCountry === 'All' 
    ? universities 
    : universities.filter(u => u.country === selectedCountry);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-yellow selection:bg-brand-yellow selection:text-brand-purple font-sans transition-colors duration-500">
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-brand-yellow origin-left z-[100] shadow-[0_0_10px_rgba(255,211,106,0.5)]"
        style={{ scaleX }}
      />

      {/* Unique Floating Pill Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md px-2 py-2 rounded-full shadow-sm border border-brand-purple/10 dark:border-brand-yellow/20 flex items-center gap-2 md:gap-8 z-50 w-[90%] md:w-auto justify-between md:justify-center transition-colors duration-500">
        <div className="flex items-center gap-2 pl-4">
          <Globe className="text-brand-purple dark:text-brand-yellow w-5 h-5 transition-colors duration-500" />
          <span className="font-display font-bold text-brand-purple dark:text-brand-yellow tracking-tight transition-colors duration-500">Educar.</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-dark/70 dark:text-brand-yellow/70">
          {[
            { name: 'Destinations', id: 'destinations' },
            { name: 'Expertise', id: 'expertise' },
            { name: 'Approach', id: 'approach' },
            { name: 'Testimonials', id: 'testimonials' }
          ].map((link) => (
            <Link 
              key={link.name} 
              href={`#${link.id}`} 
              className={`relative px-4 py-2 transition-colors ${activeSection === link.id ? 'text-brand-purple dark:text-brand-yellow font-bold' : 'hover:text-brand-purple dark:hover:text-white'}`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-purple dark:bg-brand-yellow rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-brand-purple/5 dark:hover:bg-brand-yellow/10 text-brand-purple dark:text-brand-yellow transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button className="bg-brand-purple dark:bg-brand-yellow text-brand-yellow dark:text-brand-dark px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-dark dark:hover:bg-white hover:scale-105 hover:shadow-lg hover:shadow-brand-purple/40 dark:hover:shadow-brand-yellow/20 transition-all duration-300 flex items-center gap-2">
            Let&apos;s Talk
          </button>
        </div>
      </nav>

      {/* Elegant Typographic Hero */}
      <section id="home" className="min-h-screen flex items-center pt-32 pb-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        {/* Abstract Art Element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-yellow rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] opacity-40 animate-pulse"></div>
        
        <div className="max-w-5xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-brand-purple dark:text-brand-yellow leading-[1.1] tracking-tight transition-colors duration-500"
          >
            Your gateway to <span className="font-bold">studying</span><br/>
            abroad <span className="relative inline-block">
              seamlessly.
              <span className="absolute bottom-2 left-0 w-full h-3 md:h-6 bg-brand-yellow dark:bg-brand-purple -z-10 rounded-full opacity-80 transition-colors duration-500"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-lg md:text-2xl text-brand-dark/70 dark:text-brand-yellow/70 max-w-2xl font-light leading-relaxed transition-colors duration-500"
          >
            We guide students through every step of their international study journey with expert counseling and personalized support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 flex items-center gap-4 text-sm font-mono uppercase tracking-widest text-brand-purple/60 dark:text-brand-yellow/60 transition-colors duration-500"
          >
            <span>Scroll to explore</span>
            <div className="w-12 h-px bg-brand-purple/30 dark:bg-brand-yellow/30 transition-colors duration-500"></div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section with Country Filter */}
      <section id="destinations" className="py-24 px-6 md:px-16 lg:px-24 bg-brand-light dark:bg-brand-dark transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest text-brand-purple/60 dark:text-brand-yellow/60 mb-4 transition-colors duration-500">Destinations</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-purple dark:text-brand-yellow transition-colors duration-500">Where to next?</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {countries.map(country => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCountry === country 
                      ? 'bg-brand-purple dark:bg-brand-yellow text-brand-yellow dark:text-brand-purple shadow-md' 
                      : 'bg-transparent border border-brand-purple/20 dark:border-brand-yellow/20 text-brand-purple dark:text-brand-yellow hover:border-brand-purple dark:hover:border-brand-yellow'
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredUniversities.map((uni, i) => (
              <motion.div
                key={uni.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-white dark:bg-brand-dark/50 border border-brand-purple/10 dark:border-brand-yellow/10 hover:shadow-xl hover:shadow-brand-purple/5 dark:hover:shadow-brand-yellow/5 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image src={uni.image} alt={uni.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-purple dark:text-brand-yellow flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {uni.country}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-mono text-brand-purple/60 dark:text-brand-yellow/60 mb-2 uppercase tracking-wider transition-colors duration-500">{uni.rank}</p>
                  <h4 className="text-xl font-display font-bold text-brand-purple dark:text-brand-yellow mb-4 leading-tight transition-colors duration-500">{uni.name}</h4>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple dark:text-brand-yellow hover:opacity-70 transition-opacity">
                    Explore Programs <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimalist Services Section with Soft Architectural Curve */}
      <section id="expertise" className="py-32 px-6 md:px-16 lg:px-24 bg-brand-purple dark:bg-brand-yellow text-brand-light dark:text-brand-purple rounded-t-[3rem] md:rounded-t-[5rem] transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono uppercase tracking-widest text-brand-yellow dark:text-brand-purple/60 mb-20 transition-colors duration-500">Our Expertise</h2>
          
          <div className="flex flex-col">
            {[
              { num: "01", icon: GraduationCap, title: "University Admissions", desc: "Expert guidance on selecting the right universities and crafting winning applications." },
              { num: "02", icon: FileCheck, title: "Visa Assistance", desc: "Comprehensive support for student visa applications, ensuring a smooth process." },
              { num: "03", icon: Compass, title: "Career Counseling", desc: "Aligning your educational choices with your long-term global career goals." }
            ].map((svc, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                key={i} 
                className="group border-t border-brand-light/20 dark:border-brand-purple/20 py-10 md:py-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 hover:border-brand-yellow dark:hover:border-brand-purple transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-6 md:w-48">
                  <span className="font-mono text-brand-yellow dark:text-brand-purple/60 text-xl md:text-2xl transition-colors duration-500">{svc.num}</span>
                  <div className="p-3 md:p-4 rounded-full bg-brand-light/5 dark:bg-brand-purple/5 text-brand-yellow dark:text-brand-purple group-hover:bg-brand-yellow dark:group-hover:bg-brand-purple group-hover:text-brand-purple dark:group-hover:text-brand-yellow transition-colors duration-500">
                    <svc.icon className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-light flex-grow group-hover:translate-x-4 transition-transform duration-500">{svc.title}</h3>
                <p className="max-w-md text-brand-light/70 dark:text-brand-purple/70 font-light text-lg leading-relaxed transition-colors duration-500">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Text/Image Split */}
      <section id="approach" className="py-32 px-6 md:px-16 lg:px-24 bg-brand-light dark:bg-brand-dark transition-colors duration-500">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-purple dark:text-brand-yellow mb-8 leading-tight transition-colors duration-500">
              Global education is complex.<br/>
              <span className="text-brand-dark dark:text-white font-light transition-colors duration-500">We make it simple.</span>
            </h2>
            <p className="text-lg text-brand-dark/70 dark:text-brand-yellow/70 font-light leading-relaxed mb-6 transition-colors duration-500">
              We don&apos;t believe in a one-size-fits-all approach. We believe in crafting a personalized roadmap to your dream university.
            </p>
            <p className="text-lg text-brand-dark/70 dark:text-brand-yellow/70 font-light leading-relaxed transition-colors duration-500">
              Our expert counselors work directly with you, bringing years of experience to secure your international future.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-brand-yellow/20 mix-blend-multiply z-10"></div>
            <Image 
              src="https://picsum.photos/seed/minimalist/800/1200" 
              alt="Minimalist architecture" 
              fill
              className="object-cover grayscale opacity-90"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6 md:px-16 lg:px-24 bg-brand-yellow dark:bg-brand-purple text-brand-purple dark:text-brand-yellow rounded-[3rem] md:rounded-[5rem] mx-4 md:mx-8 lg:mx-12 mb-32 relative z-20 shadow-2xl shadow-brand-yellow/20 dark:shadow-brand-purple/20 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono uppercase tracking-widest text-brand-purple/60 dark:text-brand-yellow/60 mb-16 text-center transition-colors duration-500">Student Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { quote: "Educar made my dream of studying in the UK a reality. Their visa assistance was flawless and completely stress-free.", name: "Sarah J.", target: "University of Oxford, UK" },
              { quote: "The career counseling helped me pivot my focus. I'm now thriving in my master's program abroad.", name: "David M.", target: "University of Toronto, Canada" },
              { quote: "I was overwhelmed by the application process until I found Educar. They simplified everything for me.", name: "Priya K.", target: "University of Melbourne, Australia" }
            ].map((testimonial, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                key={i}
                className="bg-white/40 dark:bg-brand-dark/40 backdrop-blur-sm border border-brand-purple/10 dark:border-brand-yellow/10 p-8 md:p-10 rounded-[2rem] hover:bg-white/60 dark:hover:bg-brand-dark/60 transition-colors"
              >
                <div className="text-brand-purple dark:text-brand-yellow text-6xl font-display leading-none mb-4 opacity-40 transition-colors duration-500">&quot;</div>
                <p className="text-lg font-light leading-relaxed mb-8 text-brand-purple/90 dark:text-brand-yellow/90 transition-colors duration-500">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-bold text-brand-purple dark:text-brand-yellow font-display tracking-wide transition-colors duration-500">{testimonial.name}</p>
                  <p className="text-sm font-mono text-brand-purple/60 dark:text-brand-yellow/60 mt-1 transition-colors duration-500">{testimonial.target}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bold, Simple Footer CTA */}
      <footer className="bg-brand-light dark:bg-brand-dark text-brand-dark dark:text-brand-yellow py-32 px-6 md:px-16 lg:px-24 border-t border-brand-purple/10 dark:border-brand-yellow/10 transition-colors duration-500">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 10 }}
            className="w-20 h-20 md:w-24 md:h-24 bg-brand-yellow dark:bg-brand-purple rounded-full flex items-center justify-center mb-10 cursor-pointer shadow-lg shadow-brand-yellow/20 dark:shadow-brand-purple/20 transition-colors duration-500"
          >
            <ArrowUpRight className="w-10 h-10 text-brand-purple dark:text-brand-yellow transition-colors duration-500" />
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-brand-purple dark:text-brand-yellow mb-10 tracking-tight transition-colors duration-500">
            Start your journey.
          </h2>
          
          <p className="text-brand-dark/70 dark:text-brand-yellow/70 mb-12 text-lg md:text-xl font-light transition-colors duration-500">
            Reach out to us at <a href="mailto:hello@educarinternational.com" className="font-medium hover:text-brand-purple dark:hover:text-white border-b border-brand-dark/20 dark:border-brand-yellow/20 hover:border-brand-purple dark:hover:border-white transition-colors pb-1">hello@educarinternational.com</a> or fill out the form below.
          </p>

          <form className="w-full max-w-2xl mx-auto flex flex-col gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-mono uppercase tracking-widest text-brand-purple/70 dark:text-brand-yellow/70 transition-colors duration-500">Name</label>
                <input type="text" id="name" className="bg-white dark:bg-brand-dark/50 border border-brand-purple/10 dark:border-brand-yellow/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow dark:focus:ring-brand-purple focus:border-transparent transition-all text-brand-dark dark:text-brand-yellow placeholder:text-brand-dark/30 dark:placeholder:text-brand-yellow/30" placeholder="Your name" required />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-mono uppercase tracking-widest text-brand-purple/70 dark:text-brand-yellow/70 transition-colors duration-500">Email</label>
                <input type="email" id="email" className="bg-white dark:bg-brand-dark/50 border border-brand-purple/10 dark:border-brand-yellow/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow dark:focus:ring-brand-purple focus:border-transparent transition-all text-brand-dark dark:text-brand-yellow placeholder:text-brand-dark/30 dark:placeholder:text-brand-yellow/30" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-mono uppercase tracking-widest text-brand-purple/70 dark:text-brand-yellow/70 transition-colors duration-500">Message</label>
              <textarea id="message" rows={4} className="bg-white dark:bg-brand-dark/50 border border-brand-purple/10 dark:border-brand-yellow/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-yellow dark:focus:ring-brand-purple focus:border-transparent transition-all resize-none text-brand-dark dark:text-brand-yellow placeholder:text-brand-dark/30 dark:placeholder:text-brand-yellow/30" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className="mt-4 bg-brand-purple dark:bg-brand-yellow text-brand-yellow dark:text-brand-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-dark dark:hover:bg-white hover:scale-105 hover:shadow-lg hover:shadow-brand-purple/40 dark:hover:shadow-brand-yellow/20 transition-all duration-300 w-full md:w-auto md:self-center">
              Send Message
            </button>
          </form>
        </div>
        
        <div className="max-w-7xl mx-auto mt-32 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-mono text-brand-dark/50 dark:text-brand-yellow/50 uppercase tracking-widest transition-colors duration-500">
          <span>© {new Date().getFullYear()} Educar International</span>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-brand-purple dark:hover:text-white transition-colors">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
