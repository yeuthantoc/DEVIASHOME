export const locales = ['en', 'ko', 'vi'] as const;
export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];
