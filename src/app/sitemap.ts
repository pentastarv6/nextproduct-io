import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';

const BASE_URL = 'https://nextproduct.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = locales.flatMap((locale) => [
    {
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]);

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...routes,
  ];
}
