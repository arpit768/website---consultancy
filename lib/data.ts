import {
  GraduationCap, FileCheck, BookOpen, Plane, DollarSign, ClipboardList,
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Destinations', href: '/destinations' },
  { name: 'Services',     href: '/services'     },
  { name: 'Process',      href: '/process'      },
  { name: 'Testimonials', href: '/reviews'      },
];

export const COUNTRIES = ['All', 'UK', 'USA', 'Canada', 'Australia', 'Japan'];

export const UNIVERSITIES = [
  { name: 'University of Oxford',           country: 'UK',        image: 'https://picsum.photos/seed/oxford/600/400',    rank: '#1 in UK',        programs: '250+ Programs' },
  { name: 'University of West of Scotland', country: 'UK',        image: 'https://picsum.photos/seed/westscot/600/400',  rank: 'Top UK Uni',      programs: '150+ Programs' },
  { name: 'Harvard University',             country: 'USA',       image: 'https://picsum.photos/seed/harvard/600/400',   rank: '#1 in USA',       programs: '300+ Programs' },
  { name: 'Stanford University',            country: 'USA',       image: 'https://picsum.photos/seed/stanford/600/400',  rank: '#2 in USA',       programs: '200+ Programs' },
  { name: 'University of Toronto',          country: 'Canada',    image: 'https://picsum.photos/seed/toronto/600/400',   rank: '#1 in Canada',    programs: '220+ Programs' },
  { name: 'University of British Columbia', country: 'Canada',    image: 'https://picsum.photos/seed/ubc/600/400',       rank: '#2 in Canada',    programs: '170+ Programs' },
  { name: 'University of Melbourne',        country: 'Australia', image: 'https://picsum.photos/seed/melbourne/600/400', rank: '#1 in Australia', programs: '190+ Programs' },
  { name: 'Kyoto University',               country: 'Japan',     image: 'https://picsum.photos/seed/kyoto/600/400',     rank: '#1 in Japan',     programs: '100+ Programs' },
];

export const COUNTRY_PROFILES = [
  {
    name: 'United Kingdom',
    short: 'UK',
    flag: '🇬🇧',
    image: 'https://picsum.photos/seed/london-uk/800/500',
    color: 'from-blue-900/60',
    tagline: 'World-class education in the heart of Europe',
    stats: [
      { label: 'Universities', value: '130+' },
      { label: 'Avg. Tuition', value: '£12–18k/yr' },
      { label: 'Post-Study Visa', value: '2 Years' },
      { label: 'Visa Success', value: 'High' },
    ],
    highlights: [
      'Post-Study Work Visa (Graduate Route) for 2 years',
      'Top-ranked universities globally (Oxford, Imperial, UCL)',
      'Shorter course durations — 3-year Bachelor\'s, 1-year Master\'s',
      'Multicultural, safe environment for international students',
    ],
    popularPrograms: ['Nursing', 'Business & Management', 'Engineering', 'Law', 'Data Science'],
  },
  {
    name: 'United States',
    short: 'USA',
    flag: '🇺🇸',
    image: 'https://picsum.photos/seed/usa-campus/800/500',
    color: 'from-red-900/60',
    tagline: 'The world\'s leading research and innovation hub',
    stats: [
      { label: 'Universities', value: '4,000+' },
      { label: 'Avg. Tuition', value: '$20–50k/yr' },
      { label: 'OPT Duration', value: '1–3 Years' },
      { label: 'Visa Type', value: 'F-1 Student' },
    ],
    highlights: [
      'Optional Practical Training (OPT) up to 3 years for STEM fields',
      'World\'s top research universities — Harvard, MIT, Stanford',
      'Wide variety of scholarships and financial aid',
      'Vibrant campus life with strong alumni networks',
    ],
    popularPrograms: ['Computer Science', 'MBA', 'Engineering', 'Medicine', 'Finance'],
  },
  {
    name: 'Canada',
    short: 'Canada',
    flag: '🇨🇦',
    image: 'https://picsum.photos/seed/canada-maple/800/500',
    color: 'from-red-800/60',
    tagline: 'A welcoming gateway to permanent residency',
    stats: [
      { label: 'Universities', value: '100+' },
      { label: 'Avg. Tuition', value: 'CAD 15–30k/yr' },
      { label: 'PGWP', value: 'Up to 3 Years' },
      { label: 'PR Pathway', value: 'Strong' },
    ],
    highlights: [
      'Post-Graduation Work Permit (PGWP) up to 3 years',
      'Strong pathway to Permanent Residency via Express Entry',
      'Affordable and high-quality education system',
      'Work 20 hrs/week during studies, full-time on breaks',
    ],
    popularPrograms: ['IT & Computing', 'Healthcare', 'Business', 'Engineering', 'Culinary Arts'],
  },
  {
    name: 'Australia',
    short: 'Australia',
    flag: '🇦🇺',
    image: 'https://picsum.photos/seed/australia-sydney/800/500',
    color: 'from-yellow-900/60',
    tagline: 'Quality education in a stunning environment',
    stats: [
      { label: 'Universities', value: '40+' },
      { label: 'Avg. Tuition', value: 'AUD 20–40k/yr' },
      { label: 'Post-Study', value: '2–4 Years' },
      { label: 'Climate', value: 'Excellent' },
    ],
    highlights: [
      'Temporary Graduate visa (subclass 485) for 2–4 years',
      '8 of the world\'s top 100 universities (Group of Eight)',
      'High standard of living and student support services',
      'Work rights up to 48 hrs/fortnight during studies',
    ],
    popularPrograms: ['Nursing', 'Engineering', 'Accounting', 'IT', 'Hospitality'],
  },
  {
    name: 'Japan',
    short: 'Japan',
    flag: '🇯🇵',
    image: 'https://picsum.photos/seed/japan-campus/800/500',
    color: 'from-pink-900/60',
    tagline: 'Cutting-edge technology meets ancient culture',
    stats: [
      { label: 'Universities', value: '700+' },
      { label: 'Avg. Tuition', value: '¥500k–1.2M/yr' },
      { label: 'Part-time Work', value: '28 hrs/week' },
      { label: 'Language', value: 'Japanese/English' },
    ],
    highlights: [
      'World leader in robotics, technology, and engineering',
      'Japanese government MEXT scholarships available',
      'Rich cultural experience with high safety standards',
      'Growing number of English-taught programs',
    ],
    popularPrograms: ['Japanese Language', 'Engineering', 'IT', 'Business', 'Design'],
  },
];

export const SERVICES = [
  {
    num: '01', icon: GraduationCap, title: 'Expert Education Consultation',
    desc: 'Our professional counselors evaluate your student profile and provide expert recommendations — considering the destination country\'s educational landscape, culture, environment, and career opportunities.',
    longDesc: 'We begin with a comprehensive evaluation of your academic background, career aspirations, budget, and destination preferences. Our senior counselors — each with years of industry experience — map out a tailored education pathway that maximizes your admission chances and long-term career growth. We provide honest, unbiased advice without false promises.',
    tags: ['Profile Evaluation', 'University Shortlisting', 'Course Selection'],
    includes: [
      'One-on-one counseling session with senior advisor',
      'Detailed profile evaluation and gap analysis',
      'Curated list of 5–10 best-fit universities',
      'Course and intake planning per your timeline',
      'Destination country comparison and recommendation',
    ],
  },
  {
    num: '02', icon: ClipboardList, title: 'Documentation Management',
    desc: 'We meticulously manage all documentation — reviewing transcripts, testimonials, crafting compelling SOPs, financial documents, and complete visa application support.',
    longDesc: 'Documentation is the backbone of a successful application. Our documentation specialists review every paper with a fine-tooth comb — from academic transcripts and reference letters to financial statements and SOP writing. We ensure each document meets the specific requirements of your target university and country.',
    tags: ['SOP Writing', 'Document Review', 'Financial Docs'],
    includes: [
      'Statement of Purpose (SOP) drafting and editing',
      'Academic transcript verification and notarization guidance',
      'Reference letter guidance and templates',
      'Financial document review and preparation',
      'Complete application package assembly',
    ],
  },
  {
    num: '03', icon: BookOpen, title: 'Test Preparation',
    desc: 'Comprehensive coaching for IELTS, PTE, TOEFL, DUOLINGO, JLPT, NAT, GRE, GMAT, and SAT. Short-term and regular courses with weekly mock tests.',
    longDesc: 'Strong test scores open doors to top universities and scholarships. Our expert instructors offer structured preparation courses tailored to each exam format. From intensive boot camps to regular evening classes, we provide flexible options with regular mock tests, individual feedback, and score improvement strategies.',
    tags: ['IELTS · PTE · TOEFL', 'GRE · GMAT · SAT', 'Weekly Mock Tests'],
    includes: [
      'IELTS, PTE, TOEFL, DUOLINGO preparation',
      'GRE, GMAT, SAT coaching for graduate programs',
      'JLPT and NAT for Japan-bound students',
      'Weekly full mock tests with detailed feedback',
      'Study materials and practice question banks',
    ],
  },
  {
    num: '04', icon: FileCheck, title: 'Visa & Interview Guidance',
    desc: 'Step-by-step visa guidance with interview preparation, insurance assistance, air ticketing, immigration advice, and complete forex support for tuition and transfers.',
    longDesc: 'The visa process is often the most stressful part of studying abroad. Our visa experts stay up-to-date with the latest immigration rules for all our destination countries. We guide you through every form, document, and interview question — and our track record shows consistently high approval rates.',
    tags: ['Visa Application', 'Interview Prep', 'Forex & Ticketing'],
    includes: [
      'Country-specific visa application guidance',
      'Mock visa interview sessions with feedback',
      'Student health insurance and travel insurance advice',
      'Air ticket booking assistance',
      'Forex and international tuition transfer support',
    ],
  },
  {
    num: '05', icon: Plane, title: 'Pre-Departure & Post-Arrival',
    desc: 'Orientation sessions that equip students with knowledge and skills needed to adapt — before departure and after arrival — ensuring a seamless transition abroad.',
    longDesc: 'The journey doesn\'t end at the airport. Our pre-departure sessions cover everything from packing essentials to cultural adjustment tips. After you arrive, our support network helps you navigate accommodation, banking, local transport, and university registration — making your first weeks abroad smooth and stress-free.',
    tags: ['Pre-Departure Briefing', 'Arrival Orientation', 'Settlement Support'],
    includes: [
      'Pre-departure orientation session (in-person or online)',
      'Packing and logistics guidance',
      'Arrival support and pick-up coordination',
      'Accommodation and banking guidance',
      'University enrollment and registration support',
    ],
  },
  {
    num: '06', icon: DollarSign, title: 'Financial Assistance & Scholarships',
    desc: 'Guidance on financial documentation tailored to your destination, and active scholarship hunting to help reduce the financial burden of studying abroad.',
    longDesc: 'We believe financial constraints should never stop a deserving student. Our counselors actively search and apply for scholarships, grants, and bursaries on your behalf. We also help you understand and prepare the financial documentation required by universities and immigration authorities in each country.',
    tags: ['Bank Statement Help', 'Scholarship Search', 'Funding Guidance'],
    includes: [
      'Scholarship database search for your profile',
      'Merit-based and need-based scholarship applications',
      'Bank statement and financial document preparation',
      'Education loan guidance and lender introductions',
      'Budget planning for tuition and living expenses',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: '1', title: 'Initial Consultation', duration: '1–2 Days',
    desc: 'We collect your CV and academic testimonials, conduct prescreening, and provide counseling to understand your unique goals.',
    detail: 'Your journey begins with a free one-on-one consultation with a senior counselor. We review your academic background, English proficiency, financial capacity, and career goals. This session is completely pressure-free — our only aim is to understand you and give you the most honest guidance possible.',
    checklist: ['Share your CV and transcripts', 'Discuss target country and course', 'Academic prescreening assessment', 'Set realistic expectations'],
  },
  {
    step: '2', title: 'Profile & Shortlisting', duration: '3–5 Days',
    desc: 'We evaluate your profile and shortlist the best-fit universities and courses based on destination, career aspirations, and budget.',
    detail: 'Based on your consultation, we prepare a detailed profile report and shortlist 5–10 universities across reach, match, and safety categories. We factor in tuition fees, scholarship availability, course content, graduate employability, and visa approval rates to give you the best options.',
    checklist: ['Profile gap analysis report', 'University shortlist (5–10 options)', 'Course comparison sheet', 'Intake and deadline calendar'],
  },
  {
    step: '3', title: 'Application & Documentation', duration: '2–4 Weeks',
    desc: 'Our team manages all documentation, SOP writing, financial papers, and submits your application with precision and care.',
    detail: 'This is where our documentation team takes the lead. We draft your Statement of Purpose, review your reference letters, verify financial documents, and submit every application before its deadline. We track all submissions and keep you updated at every step.',
    checklist: ['SOP drafting and review', 'Document collection checklist', 'University application submission', 'Conditional/unconditional offer follow-up'],
  },
  {
    step: '4', title: 'Visa, Insurance & Departure', duration: '4–8 Weeks',
    desc: 'We guide you through visa, insurance, ticketing, forex, and pre-departure orientation — supporting you right up to your first day.',
    detail: 'Once you have your offer letter, we shift focus to the visa application. Our visa specialists prepare the complete file, conduct mock interviews, and ensure every form is correctly filled. We also arrange travel insurance, forex, and air ticketing — and hold a pre-departure briefing to prepare you for life abroad.',
    checklist: ['Visa application preparation', 'Mock interview session', 'Travel and health insurance', 'Pre-departure orientation briefing'],
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Choosing Educar International was one of the best decisions I made. Their expert guidance and unwavering support made my journey to the UK smooth and worry-free. I wholeheartedly recommend Educar to anyone aspiring to study abroad.',
    name: 'Binu Lama',
    program: 'BSc Nursing (3rd Year Entry)',
    target: 'University of the West of Scotland, UK',
    avatar: 'https://picsum.photos/seed/binu/100/100',
    country: 'UK',
    rating: 5,
  },
  {
    quote: 'From documentation and university applications to visa preparation — the Educar team guided me with patience, expertise, and constant support. What I valued most was their transparency; they never gave false promises and always provided honest guidance.',
    name: 'Karuna Purja',
    program: 'Study Abroad — UK',
    target: 'Referred via Instagram · Visa Approved',
    avatar: 'https://picsum.photos/seed/karuna/100/100',
    country: 'UK',
    rating: 5,
  },
  {
    quote: "After my US visa rejection, Educar gave me a fresh start with the UK route. From my application to offer letter, English test, CAS, and visa interview — their professional advice made it smooth and stress-free. I am now holding my UK student visa.",
    name: 'Priya Rajbanshi',
    program: "Bachelor's in Nursing (Top-Up)",
    target: 'University of the West of Scotland, UK',
    avatar: 'https://picsum.photos/seed/priyar/100/100',
    country: 'UK',
    rating: 5,
  },
];

export const MINI_TESTIMONIALS = [
  { name: 'Soniya Chitrakar', quote: "From the first day, Educar made me feel confident. Now I'm in the UK, working and truly happy.", country: 'UK' },
  { name: 'Deepa Lama',       quote: 'Fast, reliable, and always supportive. I\'m now settled in the UK and satisfied with my future.', country: 'UK' },
  { name: 'Anjali Dangi',     quote: 'Educar gave me the right direction at the right time. Their support was genuine and friendly.', country: 'UK' },
  { name: 'Ronit Tandukar',   quote: 'Educar International was the turning point in my life. Now living the life I always wished for.', country: 'UK' },
];

export const WHY_US = [
  { title: 'Expert Counselors',       desc: 'Highly certified professionals with extensive industry experience who address every study-abroad query accurately.' },
  { title: 'Personalized Approach',   desc: 'We cater to the unique needs of each individual — extensive research to find the best-fit option for every student.' },
  { title: 'Abundant Resources',      desc: 'Small class sizes, document checklists, SOP guides, test prep materials, university brochures, and immigration advice.' },
  { title: 'Customer-Centric',        desc: 'We actively solicit feedback and use it to introduce innovative ideas — cultivating enduring relationships with students and guardians.' },
  { title: 'Commitment & Excellence', desc: 'We proactively identify and resolve issues — even those students may not be aware of — always meeting deadlines.' },
  { title: 'Govt. Authorized',        desc: 'Officially authorized by the Government of Nepal and registered with the Ministry of Education — a name you can trust.' },
];

export const MARQUEE_ITEMS = [
  'Oxford', 'Univ. of West of Scotland', 'Harvard', 'Cambridge', 'Stanford',
  'Kyoto University', 'Toronto', 'Melbourne', 'Imperial College', 'UCL', 'Columbia', 'UBC',
];
