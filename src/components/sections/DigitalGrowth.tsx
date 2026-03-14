import type { Translations } from '@/i18n';

interface DigitalGrowthProps {
  t: Translations;
}

const growthIcons = [
  <svg key="1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
];

export default function DigitalGrowth({ t }: DigitalGrowthProps) {
  return (
    <section
      id="digital-growth"
      className="relative bg-dark py-24 px-6"
      aria-labelledby="digital-growth-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-green-600/8 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* Left: Text */}
          <div>
            <p className="section-label mb-3">{t.digitalGrowth.label}</p>
            <h2
              id="digital-growth-heading"
              className="text-3xl font-display font-bold text-white sm:text-4xl lg:text-5xl mb-6"
            >
              {t.digitalGrowth.title}
            </h2>
            <p className="text-base text-white/55 sm:text-lg leading-relaxed">
              {t.digitalGrowth.subtitle}
            </p>
          </div>

          {/* Right: Cards */}
          <div className="grid gap-5">
            {t.digitalGrowth.items.map((item, i) => (
              <article key={item.title} className="card group flex gap-5">
                <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/15 text-green-400 transition-all duration-300 group-hover:bg-green-500/25 group-hover:text-green-300">
                  {growthIcons[i]}
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
