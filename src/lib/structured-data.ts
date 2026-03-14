import type { Locale } from '@/i18n/config';

const BASE_URL = 'https://nextproduct.io';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NextProduct.io',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+39-340-196-3521',
      contactType: 'customer service',
      availableLanguage: ['English', 'Italian'],
    },
    sameAs: [],
  };
}

export function professionalServiceSchema(locale: Locale) {
  const isIt = locale === 'it';
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NextProduct.io',
    url: `${BASE_URL}/${locale}`,
    description: isIt
      ? 'Consulenza strategica in Product Management, Intelligenza Artificiale e Trasformazione Digitale.'
      : 'Strategic consulting in Product Management, Artificial Intelligence, and Digital Transformation.',
    telephone: '+39-340-196-3521',
    email: 'tarocannone@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IT',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Product Management Consulting',
      'AI Consulting',
      'Digital Transformation',
      'Agile Training',
      'Prompt Engineering',
    ],
    priceRange: '$$',
  };
}
