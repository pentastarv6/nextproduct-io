import Link from 'next/link';
import type { Locale } from '@/i18n/config';
import type { Translations } from '@/i18n';

interface HeroProps {
  t: Translations;
  locale: Locale;
}

export default function Hero({ t, locale }: HeroProps) {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark px-6 pt-24 pb-16"
      aria-label="Hero"
    >
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Radial gradient blobs */}
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/15 blur-[120px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse-slow" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-300">
            NextProduct.io
          </span>
        </div>

        {/* H1 — only one per page */}
        <h1 className="mb-6 text-4xl font-display font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-in-up">
          {t.hero.headline.split(' ').slice(0, 3).join(' ')}{' '}
          <span className="gradient-text">
            {t.hero.headline.split(' ').slice(3).join(' ')}
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mb-6 text-lg font-medium text-white/80 sm:text-xl lg:text-2xl animate-fade-in-up [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
          {t.hero.subheadline}
        </p>

        {/* Body */}
        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          {t.hero.body}
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
          <Link
            href={`/${locale}#contact`}
            className="btn-primary text-base px-8 py-4 text-sm"
            aria-label={t.hero.ctaPrimary}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.hero.ctaPrimary}
          </Link>

          <a
            href="https://wa.me/393401963521?text=Hello%20I%20would%20like%20more%20information%20about%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-8 py-4 text-sm border-green-500/40 hover:border-green-500/60 hover:bg-green-500/10"
            aria-label={t.whatsapp.ariaLabel}
          >
            <svg className="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t.hero.ctaWhatsApp}
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center animate-fade-in-up [animation-delay:0.6s] opacity-0 [animation-fill-mode:forwards]">
          <a
            href={`/${locale}#services`}
            className="flex flex-col items-center gap-2 text-white/30 transition hover:text-white/60"
            aria-label="Scroll to services"
          >
            <span className="text-xs tracking-widest uppercase">Explore</span>
            <svg className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
