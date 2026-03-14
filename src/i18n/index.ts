import type { Locale } from './config';
import en from './locales/en.json';
import it from './locales/it.json';

const translations = { en, it } as const;

export type Translations = typeof en;

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}

export { en, it };
