'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  contact: z.string().min(5, 'Please enter a valid phone or email'),
  country: z.string().min(1, 'Please select a target country'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const WHATSAPP_NUMBER = '9779810646177';

const inputClass =
  'w-full bg-brand-light/[0.05] border rounded-xl px-4 py-3 text-brand-light placeholder:text-brand-light/20 focus:outline-none focus:ring-1 transition-all text-sm';
const validClass = 'border-brand-light/10 focus:border-brand-yellow/40 focus:ring-brand-yellow/20';
const errorClass = 'border-red-500/50 focus:border-red-500/60 focus:ring-red-500/20';
const labelClass = 'text-[10px] font-mono uppercase tracking-wider text-brand-light/35 block mb-2';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const text = `Hello! I'm ${data.name}.\n\nI'm interested in: ${data.service}\nTarget Country: ${data.country}\nContact: ${data.contact}\n\nMessage: ${data.message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setStatus('success');
    reset();
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-6 py-16 px-8 text-center bg-brand-yellow/[0.06] border border-brand-yellow/15 rounded-2xl"
      >
        <div className="w-16 h-16 bg-brand-yellow/15 rounded-full flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-brand-yellow" />
        </div>
        <div>
          <h3 className="font-display font-bold text-brand-light text-2xl mb-3">Message Sent!</h3>
          <p className="text-brand-light/60 leading-relaxed max-w-sm">
            Your inquiry has been opened in WhatsApp. Our counselors will respond within 24 hours. You can also email us at info@educarinternational.edu.np
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-mono text-brand-yellow/60 hover:text-brand-yellow transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Name</label>
          <input
            {...register('name')}
            type="text"
            placeholder="Your name"
            className={`${inputClass} ${errors.name ? errorClass : validClass}`}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-400 text-[10px] mt-1.5 font-mono flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div>
          <label className={labelClass}>Phone / Email</label>
          <input
            {...register('contact')}
            type="text"
            placeholder="Contact info"
            className={`${inputClass} ${errors.contact ? errorClass : validClass}`}
          />
          <AnimatePresence>
            {errors.contact && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-400 text-[10px] mt-1.5 font-mono flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.contact.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div>
        <label className={labelClass}>Target Country</label>
        <select
          {...register('country')}
          className={`${inputClass} ${errors.country ? errorClass : validClass}`}
          defaultValue=""
        >
          <option value="" disabled className="bg-brand-dark">Select a country</option>
          {['UK', 'USA', 'Canada', 'Australia', 'Japan', 'Other'].map((c) => (
            <option key={c} value={c} className="bg-brand-dark">{c}</option>
          ))}
        </select>
        <AnimatePresence>
          {errors.country && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-[10px] mt-1.5 font-mono flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {errors.country.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label className={labelClass}>Service Interested In</label>
        <select
          {...register('service')}
          className={`${inputClass} ${errors.service ? errorClass : validClass}`}
          defaultValue=""
        >
          <option value="" disabled className="bg-brand-dark">Select a service</option>
          {[
            'Education Consultation',
            'Documentation Help',
            'Test Preparation',
            'Visa Assistance',
            'Scholarship Guidance',
            'Other',
          ].map((s) => (
            <option key={s} value={s} className="bg-brand-dark">{s}</option>
          ))}
        </select>
        <AnimatePresence>
          {errors.service && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-[10px] mt-1.5 font-mono flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {errors.service.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label className={labelClass}>Message</label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Tell us about your academic background and goals..."
          className={`${inputClass} resize-none ${errors.message ? errorClass : validClass}`}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-[10px] mt-1.5 font-mono flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        className="w-full bg-brand-yellow text-brand-dark py-4 rounded-xl font-bold text-base hover:opacity-90 hover:shadow-lg hover:shadow-brand-yellow/15 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 mt-1"
      >
        <MessageCircle className="w-5 h-5" />
        Send via WhatsApp
        <ArrowUpRight className="w-5 h-5" />
      </button>

      <a
        href="mailto:info@educarinternational.edu.np"
        className="text-center text-xs font-mono text-brand-light/30 hover:text-brand-yellow/60 transition-colors underline underline-offset-4"
      >
        Prefer email? Click here
      </a>
    </form>
  );
}
