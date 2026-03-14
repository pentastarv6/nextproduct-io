import type { Translations } from '@/i18n';

interface AboutProps {
  t: Translations;
}

export default function About({ t }: AboutProps) {
  return (
    <section
      id="about"
      className="relative bg-surface py-24 px-6"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand-600/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
          {/* Left */}
          <div>
            <p className="section-label mb-3">{t.about.label}</p>
            <h2
              id="about-heading"
              className="text-3xl font-display font-bold text-white sm:text-4xl lg:text-5xl mb-8"
            >
              {t.about.title}
            </h2>
            <div className="space-y-5 text-white/60 leading-relaxed">
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
              <p className="text-white/80 font-medium">{t.about.body3}</p>
            </div>
            <p className="mt-8 text-xs text-brand-400/70 leading-relaxed font-medium">
              {t.about.certifications}
            </p>
          </div>

          {/* Right: Stats */}
          <div>
            <div className="grid grid-cols-2 gap-5">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card text-center"
                >
                  <p className="mb-2 text-4xl font-display font-extrabold gradient-text">{stat.value}</p>
                  <p className="text-sm text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="mt-8 rounded-2xl border border-white/8 bg-white/4 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 rounded-lg bg-brand-500/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">Fortune 500 Experience</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white">Global Operations · Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
