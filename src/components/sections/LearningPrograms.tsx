import type { Translations } from '@/i18n';

interface LearningProgramsProps {
  t: Translations;
}

const learningIcons = [
  // AI
  <svg key="1" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" /></svg>,
  // Prompt Engineering
  <svg key="2" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  // Agentic AI
  <svg key="3" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  // Advanced PM
  <svg key="4" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  // Vibe Coding
  <svg key="5" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  // Agile
  <svg key="6" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  // Executive Coaching
  <svg key="7" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
];

export default function LearningPrograms({ t }: LearningProgramsProps) {
  return (
    <section
      id="learning"
      className="relative bg-surface py-24 px-6"
      aria-labelledby="learning-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand-600/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="section-label mb-3">{t.learning.label}</p>
          <h2
            id="learning-heading"
            className="text-3xl font-display font-bold text-white sm:text-4xl lg:text-5xl"
          >
            {t.learning.title}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-white/55 sm:text-lg">
            {t.learning.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {t.learning.items.map((item, i) => (
            <article
              key={item.title}
              className="card group relative overflow-hidden"
            >
              {/* Accent line on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-brand-500 opacity-0 transition-all duration-300 group-hover:opacity-100" aria-hidden="true" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400 transition-all duration-300 group-hover:bg-purple-500/25 group-hover:text-purple-300">
                {learningIcons[i]}
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
