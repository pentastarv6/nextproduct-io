'use client';

import { useState } from 'react';
import type { Translations } from '@/i18n';

interface ContactProps {
  t: Translations;
}

export default function Contact({ t }: ContactProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: Replace with real API call (e.g., Resend, SendGrid, or a serverless function)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-dark py-24 px-6"
      aria-labelledby="contact-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-brand-600/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="section-label mb-3">{t.contact.label}</p>
          <h2
            id="contact-heading"
            className="text-3xl font-display font-bold text-white sm:text-4xl lg:text-5xl"
          >
            {t.contact.title}
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base text-white/55 sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card flex items-center gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-500/15 flex items-center justify-center">
                <svg className="h-5 w-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Email</p>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-sm font-medium text-white hover:text-brand-300 transition-colors"
                >
                  {t.contact.email}
                </a>
              </div>
            </div>

            <div className="card flex items-center gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-brand-500/15 flex items-center justify-center">
                <svg className="h-5 w-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Phone</p>
                <a
                  href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                  className="text-sm font-medium text-white hover:text-brand-300 transition-colors"
                >
                  {t.contact.phone}
                </a>
              </div>
            </div>

            <div className="card flex items-center gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-green-500/15 flex items-center justify-center">
                <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">WhatsApp</p>
                <a
                  href={t.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
                >
                  {t.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/8 bg-white/4 p-8 backdrop-blur-sm"
            aria-label="Contact form"
            noValidate
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/50">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.namePlaceholder}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/60"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/50">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.emailPlaceholder}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/60"
                  aria-required="true"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/50">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/60"
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                aria-disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {t.contact.submitButton}
                  </>
                )}
              </button>

              {status === 'success' && (
                <p
                  role="status"
                  className="rounded-lg bg-green-500/15 border border-green-500/30 px-4 py-3 text-sm text-green-400 text-center"
                >
                  {t.contact.successMessage}
                </p>
              )}
              {status === 'error' && (
                <p
                  role="alert"
                  className="rounded-lg bg-red-500/15 border border-red-500/30 px-4 py-3 text-sm text-red-400 text-center"
                >
                  {t.contact.errorMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
