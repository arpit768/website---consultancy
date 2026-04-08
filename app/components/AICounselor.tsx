'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const WELCOME: Message = {
  id: 'welcome',
  role: 'assistant',
  content:
    "Hi! I'm Aari, your AI counselor at Educar International.\n\nI can help you with study abroad destinations, test prep (IELTS, PTE, GRE...), visa guidance, scholarships, and more. What's on your mind?",
};

const SUGGESTIONS = [
  'Which country should I choose?',
  'IELTS preparation tips',
  'UK student visa process',
  'Scholarship opportunities',
];

// Client-side knowledge base for keyword matching
const KNOWLEDGE_BASE: { keywords: string[]; response: string }[] = [
  {
    keywords: ['uk', 'united kingdom', 'britain', 'england', 'london'],
    response:
      "The UK is one of our most popular destinations! Here's what makes it great:\n\n- 2-year Post-Study Work Visa (Graduate Route)\n- Shorter courses: 3-year Bachelor's, 1-year Master's\n- World-class universities like Oxford, Imperial, UCL\n- Multicultural, safe environment\n\nAvg. tuition: £12–18k/yr. We have strong partnerships with UK universities including University of West of Scotland. Want to book a free consultation to explore UK options?",
  },
  {
    keywords: ['usa', 'united states', 'america', 'us visa'],
    response:
      "The USA is the world's leading education hub! Key highlights:\n\n- 4,000+ universities to choose from\n- OPT (Optional Practical Training) up to 3 years for STEM\n- World-renowned: Harvard, MIT, Stanford\n- Wide scholarship opportunities\n\nAvg. tuition: $20–50k/yr. F-1 Student Visa required. Our counselors can help you find the best-fit US university. Reach out for a free consultation!",
  },
  {
    keywords: ['canada', 'canadian'],
    response:
      "Canada is a fantastic choice with a strong PR pathway! Highlights:\n\n- Post-Graduation Work Permit (PGWP) up to 3 years\n- Strong Permanent Residency pathway via Express Entry\n- Work 20 hrs/week during studies\n- Affordable, high-quality education\n\nAvg. tuition: CAD 15–30k/yr. Top universities include U of Toronto and UBC. Would you like personalized guidance?",
  },
  {
    keywords: ['australia', 'aussie', 'melbourne', 'sydney'],
    response:
      "Australia offers excellent education in a stunning environment:\n\n- Temporary Graduate visa (subclass 485) for 2–4 years\n- 8 of the world's top 100 universities (Group of Eight)\n- High standard of living\n- Work up to 48 hrs/fortnight during studies\n\nAvg. tuition: AUD 20–40k/yr. We can help you explore Australian universities. Contact us for details!",
  },
  {
    keywords: ['japan', 'japanese', 'tokyo', 'kyoto', 'jlpt'],
    response:
      "Japan blends cutting-edge technology with rich culture:\n\n- 700+ universities\n- MEXT government scholarships available\n- Part-time work: 28 hrs/week\n- Growing English-taught programs\n\nAvg. tuition: ¥500k–1.2M/yr. We offer JLPT and NAT preparation too. Japan is perfect for students interested in tech, engineering, and design!",
  },
  {
    keywords: ['ielts', 'pte', 'toefl', 'duolingo', 'english test', 'language test'],
    response:
      "We offer comprehensive test preparation:\n\n- IELTS: Most widely accepted globally\n- PTE: Popular in Australia & UK, fast results\n- TOEFL: Preferred by US universities\n- DUOLINGO: Affordable, accepted by many universities\n\nOur courses include weekly mock tests, study materials, and personalized feedback. Both short-term intensive and regular classes available. Visit our Lalitpur office or call 015005528 to enroll!",
  },
  {
    keywords: ['gre', 'gmat', 'sat', 'graduate test'],
    response:
      "We offer coaching for graduate-level entrance exams:\n\n- GRE: Required for many US/Canada Master's programs\n- GMAT: Essential for MBA admissions\n- SAT: For undergraduate admissions in the US\n\nOur expert instructors provide structured prep with practice tests, individual feedback, and score improvement strategies. Call us at 015005528 to learn more!",
  },
  {
    keywords: ['scholarship', 'financial aid', 'funding', 'afford', 'cost', 'fee', 'cheap', 'expensive'],
    response:
      "We actively help students find scholarships and funding:\n\n- Merit-based & need-based scholarship search\n- Government scholarships (MEXT for Japan, Chevening for UK, etc.)\n- University-specific bursaries and grants\n- Education loan guidance\n- Financial document preparation\n\nFinancial constraints should never stop a deserving student. Let's explore your options — book a free consultation!",
  },
  {
    keywords: ['visa', 'interview', 'reject', 'rejection', 'embassy', 'approval'],
    response:
      "Our visa guidance covers everything:\n\n- Country-specific visa application support\n- Mock interview sessions with detailed feedback\n- Document preparation and verification\n- We've successfully reversed many initial rejections\n\nWe stay up-to-date with the latest immigration rules. Our track record shows consistently high approval rates. Don't worry — we've got you covered!",
  },
  {
    keywords: ['document', 'sop', 'statement of purpose', 'transcript', 'reference letter'],
    response:
      "Our documentation team handles everything:\n\n- SOP (Statement of Purpose) drafting & editing\n- Academic transcript verification\n- Reference letter guidance\n- Financial document preparation\n- Complete application package assembly\n\nEvery document is reviewed meticulously to meet specific university and country requirements. Reach out to get started!",
  },
  {
    keywords: ['process', 'how', 'step', 'start', 'begin', 'apply'],
    response:
      "Our proven 4-step process:\n\n1. Initial Consultation (1–2 days) — Free profile assessment\n2. Profile & Shortlisting (3–5 days) — 5–10 best-fit universities\n3. Application & Documentation (2–4 weeks) — SOP, submissions\n4. Visa, Insurance & Departure (4–8 weeks) — Visa prep to arrival\n\nAll you need is a passport — the rest is in our capable hands! Book a free consultation to begin.",
  },
  {
    keywords: ['contact', 'phone', 'email', 'office', 'visit', 'address', 'location', 'where'],
    response:
      "Here's how to reach us:\n\n- Email: info@educarinternational.edu.np\n- Phone: 015005528 / +977-9810646177\n- Location: Chakupat-10, Patan Dhoka Road, Lalitpur, Nepal\n- Office Hours: Sun–Fri, 9 AM – 5 PM Nepal Time\n\nYou can also WhatsApp us at +977-9810646177. Walk-ins are always welcome!",
  },
  {
    keywords: ['about', 'educar', 'who', 'company', 'authorized', 'government'],
    response:
      "Educar International is a Government of Nepal authorized education consultancy established in 2017.\n\n- Registered with the Ministry of Education\n- 7+ years of experience\n- 100% student satisfaction rate\n- Expert counselors with extensive industry experience\n- Destinations: UK, USA, Canada, Australia, Japan\n\nOur CEO, Ashish Mahat, leads a team committed to turning study abroad dreams into reality.",
  },
  {
    keywords: ['pre-departure', 'arrival', 'accommodation', 'packing', 'flight', 'ticket', 'insurance'],
    response:
      "Our pre-departure and post-arrival support includes:\n\n- Pre-departure orientation session\n- Packing and logistics guidance\n- Air ticket booking assistance\n- Travel & health insurance arrangement\n- Arrival pickup coordination\n- Accommodation and banking guidance\n- University enrollment support\n\nWe're with you every step — before, during, and after you fly!",
  },
  {
    keywords: ['country', 'choose', 'which', 'best', 'recommend', 'destination', 'where should'],
    response:
      "Choosing the right country depends on several factors:\n\n- Budget: Canada & Japan are more affordable; US & Australia higher\n- PR pathway: Canada has the strongest immigration route\n- Course duration: UK offers shorter programs (1-yr Master's)\n- Work rights: All destinations allow part-time work\n- Culture: Japan for tech/culture; UK/US for research\n\nOur counselors can recommend the best fit based on YOUR profile. Book a free consultation!",
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'namaste'],
    response:
      "Hello! Welcome to Educar International! I'm Aari, your AI counselor. I can help you with:\n\n- Study destination info (UK, USA, Canada, Australia, Japan)\n- Test preparation (IELTS, PTE, TOEFL, GRE, GMAT)\n- Visa guidance and documentation\n- Scholarships and financial aid\n- Our application process\n\nWhat would you like to know?",
  },
  {
    keywords: ['thank', 'thanks', 'bye', 'goodbye'],
    response:
      "You're welcome! If you have more questions later, feel free to come back anytime.\n\nFor personalized guidance, contact us:\n- Phone: 015005528 / +977-9810646177\n- Email: info@educarinternational.edu.np\n\nWishing you the best on your study abroad journey!",
  },
];

const FALLBACK_RESPONSE =
  "That's a great question! While I may not have a specific answer for that, our expert counselors can definitely help.\n\nReach out to us:\n- Phone: 015005528 / +977-9810646177\n- Email: info@educarinternational.edu.np\n- Office: Chakupat-10, Patan Dhoka Road, Lalitpur\n\nOr ask me about destinations, test prep, visas, scholarships, or our process!";

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  let bestMatch: { response: string; score: number } | null = null;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length; // longer keyword matches are more relevant
      }
    }
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { response: entry.response, score };
    }
  }

  return bestMatch?.response ?? FALLBACK_RESPONSE;
}

export default function AICounselor() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    if (!open) return;
    // Delay state update to next render cycle
    const timer = setTimeout(() => setShowPulse(false), 0);
    return () => clearTimeout(timer);
  }, [open]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Simulate a brief thinking delay for natural feel
    await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 400));

    const reply = getResponse(text);
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString() + '_ai', role: 'assistant', content: reply },
    ]);
    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }, [loading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating trigger */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[150]">
        <AnimatePresence>
          {!open && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              onClick={() => setOpen(true)}
              className="relative w-12 h-12 sm:w-14 sm:h-14 bg-brand-purple dark:bg-brand-yellow rounded-2xl shadow-lg shadow-brand-purple/35 dark:shadow-brand-yellow/25 flex items-center justify-center hover:opacity-90 hover:-translate-y-1 transition-all duration-200 group"
              aria-label="Open AI Counselor"
            >
              {showPulse && (
                <span className="absolute inset-0 rounded-2xl animate-ping bg-brand-purple/40 dark:bg-brand-yellow/40" />
              )}
              <MessageCircle className="w-6 h-6 text-white dark:text-brand-dark" />
              <span className="absolute right-full mr-3 whitespace-nowrap bg-brand-dark text-brand-light text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
                Chat with Aari
              </span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat window */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="fixed sm:absolute bottom-0 right-0 sm:bottom-0 sm:right-0 w-full sm:w-[380px] h-[100dvh] sm:h-[540px] bg-white dark:bg-[#18062A] border-0 sm:border border-brand-purple/12 dark:border-brand-yellow/12 rounded-none sm:rounded-3xl shadow-2xl shadow-brand-dark/30 flex flex-col overflow-hidden"
              style={{ transformOrigin: 'bottom right' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 bg-brand-purple dark:bg-brand-yellow shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 dark:bg-brand-dark/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white dark:text-brand-dark" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white dark:text-brand-dark text-sm leading-none">
                      Aari
                    </p>
                    <p className="text-white/60 dark:text-brand-dark/60 text-[10px] font-mono mt-0.5">
                      Smart Counselor · Educar
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-xl bg-white/15 dark:bg-brand-dark/15 hover:bg-white/25 dark:hover:bg-brand-dark/25 flex items-center justify-center transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4 text-white dark:text-brand-dark" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 scroll-smooth">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-end gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                        msg.role === 'assistant'
                          ? 'bg-brand-purple/10 dark:bg-brand-yellow/10'
                          : 'bg-brand-purple dark:bg-brand-yellow'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <Bot className="w-4 h-4 text-brand-purple dark:text-brand-yellow" />
                      ) : (
                        <User className="w-3.5 h-3.5 text-white dark:text-brand-dark" />
                      )}
                    </div>
                    <div
                      className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                        msg.role === 'assistant'
                          ? 'bg-brand-purple/6 dark:bg-brand-yellow/6 text-brand-dark dark:text-brand-light rounded-bl-sm border border-brand-purple/8 dark:border-brand-yellow/8'
                          : 'bg-brand-purple dark:bg-brand-yellow text-white dark:text-brand-dark rounded-br-sm'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}

                {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-end gap-2"
                  >
                    <div className="w-7 h-7 rounded-xl bg-brand-purple/10 dark:bg-brand-yellow/10 flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-brand-purple dark:text-brand-yellow" />
                    </div>
                    <div className="bg-brand-purple/6 dark:bg-brand-yellow/6 border border-brand-purple/8 dark:border-brand-yellow/8 px-4 py-3 rounded-2xl rounded-bl-sm">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-brand-purple/40 dark:bg-brand-yellow/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-brand-purple/40 dark:bg-brand-yellow/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-brand-purple/40 dark:bg-brand-yellow/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Quick suggestions */}
              {messages.length === 1 && (
                <div className="px-4 pb-2 flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => sendMessage(s)}
                      className="text-[11px] font-medium text-brand-purple dark:text-brand-yellow bg-brand-purple/6 dark:bg-brand-yellow/8 border border-brand-purple/10 dark:border-brand-yellow/12 px-3 py-1.5 rounded-full hover:bg-brand-purple/12 dark:hover:bg-brand-yellow/15 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {/* Input */}
              <div className="px-4 pb-4 pt-2 shrink-0 border-t border-brand-purple/8 dark:border-brand-yellow/8">
                <div className="flex items-end gap-2 bg-brand-purple/4 dark:bg-brand-yellow/4 border border-brand-purple/10 dark:border-brand-yellow/10 rounded-2xl px-4 py-2.5">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything about studying abroad..."
                    rows={1}
                    className="flex-1 bg-transparent text-sm text-brand-dark dark:text-brand-light placeholder:text-brand-dark/30 dark:placeholder:text-brand-light/30 focus:outline-none resize-none leading-relaxed max-h-28 overflow-auto"
                    style={{ scrollbarWidth: 'none' }}
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || loading}
                    className="w-8 h-8 bg-brand-purple dark:bg-brand-yellow rounded-xl flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Send message"
                  >
                    <Send className="w-3.5 h-3.5 text-white dark:text-brand-dark" />
                  </button>
                </div>
                <p className="text-center text-[9px] font-mono text-brand-dark/20 dark:text-brand-light/20 mt-2 uppercase tracking-widest">
                  Smart FAQ · For detailed advice, contact our counselors
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
