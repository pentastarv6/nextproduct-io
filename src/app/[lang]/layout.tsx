import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import { buildMetadata } from '@/lib/metadata';
import { organizationSchema, professionalServiceSchema } from '@/lib/structured-data';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { getTranslations } from '@/i18n';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const { lang } = params;
  if (!locales.includes(lang as Locale)) return {};
  return buildMetadata(lang as Locale);
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = getTranslations(locale);
  const orgSchema = organizationSchema();
  const serviceSchema = professionalServiceSchema(locale);

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="bg-dark text-white antialiased font-sans">
        <Navbar locale={locale} t={t} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} t={t} />
        <WhatsAppButton t={t} />
      </body>
    </html>
  );
}
