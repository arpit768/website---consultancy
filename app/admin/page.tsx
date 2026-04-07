'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  LogOut, Plus, Pencil, Trash2, Check, X, ChevronDown, ChevronUp,
  GraduationCap, FileCheck, BookOpen, Plane, DollarSign, ClipboardList,
  Briefcase, Globe, Heart, Star, Shield, Users, Award, MapPin,
  Eye, EyeOff,
} from 'lucide-react';

// ─── Icon map ────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap, FileCheck, BookOpen, Plane, DollarSign, ClipboardList,
  Briefcase, Globe, Heart, Star, Shield, Users, Award, MapPin,
};
const ICON_OPTIONS = Object.keys(ICON_MAP);
const COUNTRIES = ['UK', 'USA', 'Canada', 'Australia', 'Japan'];

// ─── Types ───────────────────────────────────────────────────────────────────
type Service = {
  id: string; num: string; icon: string; title: string;
  desc: string; longDesc: string; tags: string[]; includes: string[];
};
type Testimonial = {
  id: string; quote: string; name: string; program: string;
  target: string; avatar: string; country: string; rating: number;
};
type MiniTestimonial = { id: string; name: string; quote: string; country: string };

// ─── Blank forms ─────────────────────────────────────────────────────────────
const blankService = (): Omit<Service, 'id' | 'num'> => ({
  icon: 'GraduationCap', title: '', desc: '', longDesc: '', tags: [], includes: [],
});
const blankTestimonial = (): Omit<Testimonial, 'id'> => ({
  quote: '', name: '', program: '', target: '', avatar: '', country: 'UK', rating: 5,
});
const blankMini = (): Omit<MiniTestimonial, 'id'> => ({ name: '', quote: '', country: 'UK' });

// ─── Helpers ──────────────────────────────────────────────────────────────────
const cls = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loginErr, setLoginErr] = useState('');
  const [tab, setTab] = useState<'services' | 'testimonials'>('services');

  // ── Data ──
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [miniTestimonials, setMiniTestimonials] = useState<MiniTestimonial[]>([]);

  // ── Services CRUD state ──
  const [svcForm, setSvcForm] = useState(blankService());
  const [svcTagsRaw, setSvcTagsRaw] = useState('');
  const [svcIncludesRaw, setSvcIncludesRaw] = useState('');
  const [editingSvcId, setEditingSvcId] = useState<string | null>(null);
  const [showSvcForm, setShowSvcForm] = useState(false);
  const [expandedSvc, setExpandedSvc] = useState<string | null>(null);

  // ── Testimonials CRUD state ──
  const [tForm, setTForm] = useState(blankTestimonial());
  const [editingTId, setEditingTId] = useState<string | null>(null);
  const [showTForm, setShowTForm] = useState(false);
  const [miniForm, setMiniForm] = useState(blankMini());
  const [editingMiniId, setEditingMiniId] = useState<string | null>(null);
  const [showMiniForm, setShowMiniForm] = useState(false);

  // ─── Auth check ───────────────────────────────────────────────────────────
  useEffect(() => {
    fetch('/api/admin/auth').then(r => r.json()).then(d => setAuthed(d.authenticated));
  }, []);

  // ─── Load data ────────────────────────────────────────────────────────────
  const loadServices = useCallback(async () => {
    const r = await fetch('/api/admin/services');
    setServices(await r.json());
  }, []);

  const loadTestimonials = useCallback(async () => {
    const r = await fetch('/api/admin/testimonials');
    const d = await r.json();
    setTestimonials(d.testimonials ?? []);
    setMiniTestimonials(d.miniTestimonials ?? []);
  }, []);

  useEffect(() => {
    if (authed) { loadServices(); loadTestimonials(); }
  }, [authed, loadServices, loadTestimonials]);

  // ─── Login ────────────────────────────────────────────────────────────────
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginErr('');
    const r = await fetch('/api/admin/auth', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (r.ok) { setAuthed(true); }
    else { setLoginErr('Wrong password. Try again.'); }
  }

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setAuthed(false);
    setPassword('');
  }

  // ─── Services CRUD ────────────────────────────────────────────────────────
  function openAddSvc() {
    setSvcForm(blankService()); setSvcTagsRaw(''); setSvcIncludesRaw('');
    setEditingSvcId(null); setShowSvcForm(true);
  }

  function openEditSvc(svc: Service) {
    setSvcForm({ icon: svc.icon, title: svc.title, desc: svc.desc, longDesc: svc.longDesc, tags: svc.tags, includes: svc.includes });
    setSvcTagsRaw(svc.tags.join(', '));
    setSvcIncludesRaw(svc.includes.join('\n'));
    setEditingSvcId(svc.id); setShowSvcForm(true);
  }

  function cancelSvcForm() { setShowSvcForm(false); setEditingSvcId(null); setSvcForm(blankService()); }

  async function saveSvc(e: React.FormEvent) {
    e.preventDefault();
    const payload = {
      ...svcForm,
      tags: svcTagsRaw.split(',').map(t => t.trim()).filter(Boolean),
      includes: svcIncludesRaw.split('\n').map(t => t.trim()).filter(Boolean),
    };
    if (editingSvcId) {
      await fetch(`/api/admin/services/${editingSvcId}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch('/api/admin/services', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }
    cancelSvcForm(); loadServices();
  }

  async function deleteSvc(id: string) {
    if (!confirm('Delete this service?')) return;
    await fetch(`/api/admin/services/${id}`, { method: 'DELETE' });
    loadServices();
  }

  // ─── Testimonials CRUD ────────────────────────────────────────────────────
  function openAddT() { setTForm(blankTestimonial()); setEditingTId(null); setShowTForm(true); }

  function openEditT(t: Testimonial) {
    setTForm({ quote: t.quote, name: t.name, program: t.program, target: t.target, avatar: t.avatar, country: t.country, rating: t.rating });
    setEditingTId(t.id); setShowTForm(true);
  }

  function cancelTForm() { setShowTForm(false); setEditingTId(null); setTForm(blankTestimonial()); }

  async function saveT(e: React.FormEvent) {
    e.preventDefault();
    if (editingTId) {
      await fetch(`/api/admin/testimonials/${editingTId}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tForm),
      });
    } else {
      await fetch('/api/admin/testimonials', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tForm),
      });
    }
    cancelTForm(); loadTestimonials();
  }

  async function deleteT(id: string) {
    if (!confirm('Delete this testimonial?')) return;
    await fetch(`/api/admin/testimonials/${id}`, { method: 'DELETE' });
    loadTestimonials();
  }

  // Mini testimonials
  function openAddMini() { setMiniForm(blankMini()); setEditingMiniId(null); setShowMiniForm(true); }

  function openEditMini(m: MiniTestimonial) {
    setMiniForm({ name: m.name, quote: m.quote, country: m.country });
    setEditingMiniId(m.id); setShowMiniForm(true);
  }

  function cancelMiniForm() { setShowMiniForm(false); setEditingMiniId(null); setMiniForm(blankMini()); }

  async function saveMini(e: React.FormEvent) {
    e.preventDefault();
    if (editingMiniId) {
      await fetch(`/api/admin/testimonials/${editingMiniId}`, {
        method: 'PUT', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(miniForm),
      });
    } else {
      await fetch('/api/admin/testimonials', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...miniForm, type: 'mini' }),
      });
    }
    cancelMiniForm(); loadTestimonials();
  }

  // ─── Loading ──────────────────────────────────────────────────────────────
  if (authed === null) {
    return (
      <div className="min-h-screen bg-[#0f0019] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-brand-yellow border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // ─── Login Screen ─────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#0f0019] flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-brand-purple rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-display font-bold text-white">Admin Panel</h1>
            <p className="text-white/35 text-sm mt-1 font-sans">Educar International</p>
          </div>

          <form onSubmit={handleLogin} className="bg-white/4 border border-white/8 rounded-2xl p-6 flex flex-col gap-4">
            <div>
              <label className="text-xs text-white/40 font-mono uppercase tracking-wider block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-yellow/50 pr-10"
                  required
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPw(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            {loginErr && <p className="text-red-400 text-xs">{loginErr}</p>}
            <button
              type="submit"
              className="w-full bg-brand-yellow text-brand-dark font-bold py-2.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          </form>
          <p className="text-center text-white/20 text-xs mt-4 font-mono">
            Default password: <code className="text-white/35">educar-admin-2025</code>
          </p>
        </div>
      </div>
    );
  }

  // ─── Dashboard ────────────────────────────────────────────────────────────
  const inputCls = 'w-full bg-white/4 border border-white/8 rounded-lg px-3 py-2 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-brand-yellow/40';
  const labelCls = 'block text-xs text-white/40 font-mono uppercase tracking-wider mb-1';
  const btnPrimary = 'flex items-center gap-1.5 bg-brand-yellow text-brand-dark px-4 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity';
  const btnSecondary = 'flex items-center gap-1.5 border border-white/10 text-white/60 px-3 py-1.5 rounded-lg text-xs hover:border-white/25 hover:text-white/80 transition-all';
  const btnDanger = 'flex items-center gap-1 text-red-400/60 hover:text-red-400 transition-colors text-xs px-2 py-1.5 rounded-lg hover:bg-red-400/5';

  return (
    <div className="min-h-screen bg-[#0f0019] text-white font-sans">
      {/* Header */}
      <header className="border-b border-white/6 px-6 py-4 flex items-center justify-between sticky top-0 bg-[#0f0019]/90 backdrop-blur z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-purple rounded-lg flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-display font-bold text-sm">Educar</span>
            <span className="text-white/30 text-xs ml-2 font-mono">admin</span>
          </div>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-white/40 hover:text-white/70 text-xs transition-colors">
          <LogOut className="w-3.5 h-3.5" /> Logout
        </button>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-1 mb-8 bg-white/4 rounded-xl p-1 w-fit">
          {(['services', 'testimonials'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cls(
                'px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all',
                tab === t ? 'bg-brand-purple text-white' : 'text-white/40 hover:text-white/70'
              )}
            >
              {t}
              <span className="ml-2 text-xs opacity-50">
                {t === 'services' ? services.length : testimonials.length + miniTestimonials.length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Services Tab ── */}
        {tab === 'services' && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display font-bold text-lg">Services</h2>
              {!showSvcForm && (
                <button onClick={openAddSvc} className={btnPrimary}>
                  <Plus className="w-4 h-4" /> Add Service
                </button>
              )}
            </div>

            {/* Add / Edit form */}
            {showSvcForm && (
              <form onSubmit={saveSvc} className="bg-white/4 border border-white/8 rounded-2xl p-5 mb-5 flex flex-col gap-4">
                <h3 className="font-display font-semibold text-sm text-brand-yellow">
                  {editingSvcId ? 'Edit Service' : 'New Service'}
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Title</label>
                    <input className={inputCls} value={svcForm.title} onChange={e => setSvcForm(f => ({ ...f, title: e.target.value }))} placeholder="Service title" required />
                  </div>
                  <div>
                    <label className={labelCls}>Icon</label>
                    <select
                      className={inputCls + ' cursor-pointer'}
                      value={svcForm.icon}
                      onChange={e => setSvcForm(f => ({ ...f, icon: e.target.value }))}
                    >
                      {ICON_OPTIONS.map(name => <option key={name} value={name}>{name}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Short Description</label>
                  <textarea className={inputCls} rows={2} value={svcForm.desc} onChange={e => setSvcForm(f => ({ ...f, desc: e.target.value }))} placeholder="Short description shown in collapsed view" required />
                </div>

                <div>
                  <label className={labelCls}>Full Description</label>
                  <textarea className={inputCls} rows={3} value={svcForm.longDesc} onChange={e => setSvcForm(f => ({ ...f, longDesc: e.target.value }))} placeholder="Detailed description shown when expanded" required />
                </div>

                <div>
                  <label className={labelCls}>Tags (comma-separated)</label>
                  <input className={inputCls} value={svcTagsRaw} onChange={e => setSvcTagsRaw(e.target.value)} placeholder="e.g. Profile Evaluation, University Shortlisting" />
                </div>

                <div>
                  <label className={labelCls}>Includes (one per line)</label>
                  <textarea className={inputCls} rows={4} value={svcIncludesRaw} onChange={e => setSvcIncludesRaw(e.target.value)} placeholder={"One-on-one counseling session\nDetailed profile evaluation\n..."} />
                </div>

                <div className="flex gap-2 pt-1">
                  <button type="submit" className={btnPrimary}>
                    <Check className="w-4 h-4" /> {editingSvcId ? 'Save Changes' : 'Add Service'}
                  </button>
                  <button type="button" onClick={cancelSvcForm} className={btnSecondary}>
                    <X className="w-3.5 h-3.5" /> Cancel
                  </button>
                </div>
              </form>
            )}

            {/* Services list */}
            <div className="flex flex-col gap-2">
              {services.map(svc => {
                const IconComp = ICON_MAP[svc.icon] ?? GraduationCap;
                const isOpen = expandedSvc === svc.id;
                return (
                  <div key={svc.id} className="bg-white/3 border border-white/6 rounded-xl overflow-hidden">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <div className="w-8 h-8 bg-brand-purple/15 rounded-lg flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4 text-brand-yellow" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{svc.title}</p>
                        <p className="text-white/35 text-xs font-mono">{svc.num} · {svc.icon}</p>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button onClick={() => openEditSvc(svc)} className={btnSecondary}>
                          <Pencil className="w-3 h-3" /> Edit
                        </button>
                        <button onClick={() => deleteSvc(svc.id)} className={btnDanger}>
                          <Trash2 className="w-3 h-3" />
                        </button>
                        <button onClick={() => setExpandedSvc(isOpen ? null : svc.id)} className="text-white/25 hover:text-white/50 ml-1 p-1">
                          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="px-4 pb-4 border-t border-white/4 pt-3 text-xs text-white/50 space-y-2">
                        <p className="leading-relaxed">{svc.desc}</p>
                        {svc.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {svc.tags.map(tag => (
                              <span key={tag} className="bg-brand-yellow/8 text-brand-yellow/60 px-2 py-0.5 rounded font-mono">{tag}</span>
                            ))}
                          </div>
                        )}
                        {svc.includes.length > 0 && (
                          <ul className="list-disc list-inside space-y-0.5">
                            {svc.includes.map(item => <li key={item}>{item}</li>)}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {services.length === 0 && (
                <div className="text-center py-12 text-white/20 text-sm">No services yet. Add one above.</div>
              )}
            </div>
          </div>
        )}

        {/* ── Testimonials Tab ── */}
        {tab === 'testimonials' && (
          <div>
            {/* Full testimonials */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="font-display font-bold text-lg">Full Reviews</h2>
                <p className="text-white/30 text-xs font-mono mt-0.5">Shown on the Reviews page with avatar and program details</p>
              </div>
              {!showTForm && (
                <button onClick={openAddT} className={btnPrimary}>
                  <Plus className="w-4 h-4" /> Add Review
                </button>
              )}
            </div>

            {showTForm && (
              <form onSubmit={saveT} className="bg-white/4 border border-white/8 rounded-2xl p-5 mb-5 flex flex-col gap-4">
                <h3 className="font-display font-semibold text-sm text-brand-yellow">
                  {editingTId ? 'Edit Review' : 'New Review'}
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Student Name</label>
                    <input className={inputCls} value={tForm.name} onChange={e => setTForm(f => ({ ...f, name: e.target.value }))} placeholder="e.g. Binu Lama" required />
                  </div>
                  <div>
                    <label className={labelCls}>Country</label>
                    <select className={inputCls + ' cursor-pointer'} value={tForm.country} onChange={e => setTForm(f => ({ ...f, country: e.target.value }))}>
                      {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Quote / Review</label>
                  <textarea className={inputCls} rows={3} value={tForm.quote} onChange={e => setTForm(f => ({ ...f, quote: e.target.value }))} placeholder="Student's testimonial..." required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Program / Course</label>
                    <input className={inputCls} value={tForm.program} onChange={e => setTForm(f => ({ ...f, program: e.target.value }))} placeholder="e.g. BSc Nursing (3rd Year Entry)" />
                  </div>
                  <div>
                    <label className={labelCls}>University / Target</label>
                    <input className={inputCls} value={tForm.target} onChange={e => setTForm(f => ({ ...f, target: e.target.value }))} placeholder="e.g. University of West of Scotland" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Avatar URL (optional)</label>
                    <input className={inputCls} value={tForm.avatar} onChange={e => setTForm(f => ({ ...f, avatar: e.target.value }))} placeholder="https://... (leave blank for auto)" />
                  </div>
                  <div>
                    <label className={labelCls}>Rating (1–5)</label>
                    <input className={inputCls} type="number" min={1} max={5} value={tForm.rating} onChange={e => setTForm(f => ({ ...f, rating: parseInt(e.target.value) || 5 }))} />
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  <button type="submit" className={btnPrimary}>
                    <Check className="w-4 h-4" /> {editingTId ? 'Save Changes' : 'Add Review'}
                  </button>
                  <button type="button" onClick={cancelTForm} className={btnSecondary}>
                    <X className="w-3.5 h-3.5" /> Cancel
                  </button>
                </div>
              </form>
            )}

            <div className="flex flex-col gap-2 mb-8">
              {testimonials.map(t => (
                <div key={t.id} className="bg-white/3 border border-white/6 rounded-xl px-4 py-3 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0 bg-brand-purple/20 mt-0.5">
                    {t.avatar && (
                      <Image src={t.avatar} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" unoptimized />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm">{t.name}</p>
                      <span className="text-xs text-brand-yellow/50 font-mono">{t.country}</span>
                      <span className="text-xs text-white/25">★ {t.rating}</span>
                    </div>
                    <p className="text-white/40 text-xs mt-0.5 font-mono truncate">{t.program}</p>
                    <p className="text-white/35 text-xs mt-1 line-clamp-2 italic">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button onClick={() => openEditT(t)} className={btnSecondary}><Pencil className="w-3 h-3" /> Edit</button>
                    <button onClick={() => deleteT(t.id)} className={btnDanger}><Trash2 className="w-3 h-3" /></button>
                  </div>
                </div>
              ))}
              {testimonials.length === 0 && (
                <div className="text-center py-8 text-white/20 text-sm">No full reviews yet.</div>
              )}
            </div>

            {/* Mini testimonials */}
            <div className="border-t border-white/6 pt-7">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-display font-semibold text-base">Mini Reviews</h3>
                  <p className="text-white/30 text-xs font-mono mt-0.5">Short quotes shown in the grid below main reviews</p>
                </div>
                {!showMiniForm && (
                  <button onClick={openAddMini} className={btnSecondary}>
                    <Plus className="w-3 h-3" /> Add Mini
                  </button>
                )}
              </div>

              {showMiniForm && (
                <form onSubmit={saveMini} className="bg-white/4 border border-white/8 rounded-2xl p-4 mb-4 flex flex-col gap-3">
                  <h4 className="text-xs font-mono text-brand-yellow/70 uppercase tracking-wider">
                    {editingMiniId ? 'Edit Mini Review' : 'New Mini Review'}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className={labelCls}>Name</label>
                      <input className={inputCls} value={miniForm.name} onChange={e => setMiniForm(f => ({ ...f, name: e.target.value }))} placeholder="Student name" required />
                    </div>
                    <div>
                      <label className={labelCls}>Country</label>
                      <select className={inputCls + ' cursor-pointer'} value={miniForm.country} onChange={e => setMiniForm(f => ({ ...f, country: e.target.value }))}>
                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Short Quote</label>
                    <textarea className={inputCls} rows={2} value={miniForm.quote} onChange={e => setMiniForm(f => ({ ...f, quote: e.target.value }))} placeholder="One or two sentence quote..." required />
                  </div>
                  <div className="flex gap-2">
                    <button type="submit" className={btnPrimary}>
                      <Check className="w-3.5 h-3.5" /> {editingMiniId ? 'Save' : 'Add'}
                    </button>
                    <button type="button" onClick={cancelMiniForm} className={btnSecondary}>
                      <X className="w-3.5 h-3.5" /> Cancel
                    </button>
                  </div>
                </form>
              )}

              <div className="grid sm:grid-cols-2 gap-2">
                {miniTestimonials.map(m => (
                  <div key={m.id} className="bg-white/3 border border-white/6 rounded-xl px-4 py-3 flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm">{m.name}</p>
                        <span className="text-xs text-brand-yellow/50 font-mono">{m.country}</span>
                      </div>
                      <p className="text-white/35 text-xs italic line-clamp-2">&ldquo;{m.quote}&rdquo;</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button onClick={() => openEditMini(m)} className={btnSecondary}><Pencil className="w-3 h-3" /></button>
                      <button onClick={() => deleteT(m.id)} className={btnDanger}><Trash2 className="w-3 h-3" /></button>
                    </div>
                  </div>
                ))}
                {miniTestimonials.length === 0 && (
                  <div className="sm:col-span-2 text-center py-6 text-white/20 text-sm">No mini reviews yet.</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
