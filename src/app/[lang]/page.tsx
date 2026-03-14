import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import LearningPrograms from '@/components/sections/LearningPrograms';
import DigitalGrowth from '@/components/sections/DigitalGrowth';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const { lang } = params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getTranslations(locale);

  return (
    <>
      <Hero t={t} locale={locale} />
      <Services t={t} />
      <LearningPrograms t={t} />
      <DigitalGrowth t={t} />
      <About t={t} />
      <Contact t={t} />
    </>
  );
}
