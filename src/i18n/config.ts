export const locales = ['en', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  it: 'Italiano',
};

export function isValidLocale(lang: string): lang is Locale {
  return locales.includes(lang as Locale);
}
