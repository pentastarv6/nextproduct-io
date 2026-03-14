'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Translations } from '@/i18n';

interface OfferingsExplorerProps {
  t: Translations;
  locale: Locale;
}

type CategoryId = 'services' | 'learning' | 'digital-growth';

const serviceIcons = [
  <svg key="1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  <svg key="2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="3" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
  <svg key="4" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="5" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
  <svg key="6" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  <svg key="7" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="8" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
  <svg key="9" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
];

const learningIcons = [
  <svg key="1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" /></svg>,
  <svg key="2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  <svg key="3" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  <svg key="4" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="5" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  <svg key="6" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  <svg key="7" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
];

const growthIcons = [
  <svg key="1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
];

export default function OfferingsExplorer({ t, locale }: OfferingsExplorerProps) {
  const categories = useMemo(() => ([
    {
      id: 'services' as const,
      navLabel: t.nav.services,
      label: t.services.label,
      title: t.services.title,
      subtitle: t.services.subtitle,
      items: t.services.items,
      icons: serviceIcons,
      buttonClass: 'border-brand-500/30 bg-brand-500/10 text-brand-200',
      iconClass: 'bg-brand-500/15 text-brand-300',
      accentClass: 'text-brand-300',
      ctaClass: 'border-brand-500/40 text-brand-200 hover:border-brand-400/60 hover:bg-brand-500/10',
    },
    {
      id: 'learning' as const,
      navLabel: t.nav.learning,
      label: t.learning.label,
      title: t.learning.title,
      subtitle: t.learning.subtitle,
      items: t.learning.items,
      icons: learningIcons,
      buttonClass: 'border-purple-500/30 bg-purple-500/10 text-purple-200',
      iconClass: 'bg-purple-500/15 text-purple-300',
      accentClass: 'text-purple-300',
      ctaClass: 'border-purple-500/40 text-purple-200 hover:border-purple-400/60 hover:bg-purple-500/10',
    },
    {
      id: 'digital-growth' as const,
      navLabel: t.nav.digitalGrowth,
      label: t.digitalGrowth.label,
      title: t.digitalGrowth.title,
      subtitle: t.digitalGrowth.subtitle,
      items: t.digitalGrowth.items,
      icons: growthIcons,
      buttonClass: 'border-green-500/30 bg-green-500/10 text-green-200',
      iconClass: 'bg-green-500/15 text-green-300',
      accentClass: 'text-green-300',
      ctaClass: 'border-green-500/40 text-green-200 hover:border-green-400/60 hover:bg-green-500/10',
    },
  ]), [t]);

  const [activeId, setActiveId] = useState<CategoryId>('services');

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '') as CategoryId;
      if (categories.some((category) => category.id === hash)) {
        setActiveId(hash);
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, [categories]);

  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];

  const activateCategory = (id: CategoryId) => {
    setActiveId(id);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <section id="services" className="relative bg-dark px-6 py-24" aria-labelledby="solutions-heading">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-24 left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-brand-600/10 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="section-label mb-3">{t.explorer.label}</p>
          <h2 id="solutions-heading" className="text-3xl font-display font-bold text-white sm:text-4xl lg:text-5xl">
            {t.explorer.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/55 sm:text-lg">
            {t.explorer.subtitle}
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {categories.map((category) => {
            const isActive = category.id === activeId;

            return (
              <div key={category.id} id={category.id} className="scroll-mt-28">
                <button
                  type="button"
                  onClick={() => activateCategory(category.id)}
                  className={`h-full w-full rounded-3xl border p-6 text-left transition-all duration-200 ${
                    isActive
                      ? `${category.buttonClass} shadow-2xl shadow-black/20`
                      : 'border-white/10 bg-white/[0.03] text-white/80 hover:border-white/20 hover:bg-white/[0.05]'
                  }`}
                  aria-expanded={isActive}
                  aria-controls={`${category.id}-panel`}
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                      {category.navLabel}
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/65">
                      {category.items.length}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-display font-bold text-white">{category.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{category.subtitle}</p>
                </button>
              </div>
            );
          })}
        </div>

        <div
          id={`${activeCategory.id}-panel`}
          className="mt-8 rounded-3xl border border-white/10 bg-surface/90 p-6 sm:p-8"
        >
          <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${activeCategory.accentClass}`}>
                {activeCategory.label}
              </p>
              <h3 className="text-2xl font-display font-bold text-white sm:text-3xl">
                {activeCategory.title}
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-white/60">
                {activeCategory.subtitle}
              </p>
            </div>

            <Link
              href={`/${locale}#contact`}
              className={`inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition ${activeCategory.ctaClass}`}
            >
              {t.explorer.cta}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {activeCategory.items.map((item, index) => (
              <article key={item.title} className="card group relative overflow-hidden border-white/8 bg-white/[0.03]">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${activeCategory.iconClass}`}>
                  {activeCategory.icons[index]}
                </div>
                <h4 className="mb-2 text-base font-semibold text-white">{item.title}</h4>
                <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}