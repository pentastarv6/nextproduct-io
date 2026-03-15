'use client';

import { useState } from 'react';
import type { Translations } from '@/i18n';
import { trackEvent } from '@/lib/analytics';

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
      trackEvent('contact_form_submit', {
        event_category: 'lead',
        event_label: 'contact_section',
      });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      trackEvent('contact_form_error', {
        event_category: 'lead',
        event_label: 'contact_section',
      });
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

        <div className="mx-auto max-w-2xl">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-white/4 p-8 backdrop-blur-sm"
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
                data-analytics-event="contact_form_attempt"
                data-analytics-category="lead"
                data-analytics-label="contact_section"
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
