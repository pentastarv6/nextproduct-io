import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { getTranslations } from '@/i18n';

const BASE_URL = 'https://nextproduct.io';

export function buildMetadata(locale: Locale, path = '/'): Metadata {
  const t = getTranslations(locale);
  const url = `${BASE_URL}/${locale}${path === '/' ? '' : path}`;

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t.meta.title,
      template: `%s | NextProduct.io`,
    },
    description: t.meta.description,
    keywords: t.meta.keywords,
    authors: [{ name: 'NextProduct.io', url: BASE_URL }],
    creator: 'NextProduct.io',
    publisher: 'NextProduct.io',
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    alternates: {
      canonical: url,
      languages: {
        'en': `${BASE_URL}/en`,
        'it': `${BASE_URL}/it`,
        'x-default': `${BASE_URL}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'it' ? 'it_IT' : 'en_US',
      url,
      siteName: 'NextProduct.io',
      title: t.meta.title,
      description: t.meta.description,
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'NextProduct.io — Product Management & AI Consulting',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}
