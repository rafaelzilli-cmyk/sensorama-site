export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sensoramadesign.com';

export const BRAND_COLORS = {
  blue: '#2F5BFF',
  green: '#43E58E',
  black: '#000000',
  nearBlack: '#000000',
  darkGray: '#2A2A2A',
  medGray: '#6B6B6B',
  lightGray: '#F5F5F5',
  white: '#FFFFFF',
} as const;

export const FONTS = {
  heading: "var(--font-unbounded), 'Unbounded', sans-serif",
  body: "var(--font-open-sans), 'Open Sans', sans-serif",
} as const;

export type Lang = 'pt' | 'en' | 'es';

export const LANGS: Lang[] = ['pt', 'en', 'es'];

export const DEFAULT_LANG: Lang = 'pt';

export const HTML_LANG: Record<Lang, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
};

export const OG_LOCALE: Record<Lang, string> = {
  pt: 'pt_BR',
  en: 'en_US',
  es: 'es_ES',
};

export function langPathPrefix(lang: Lang): string {
  return lang === 'pt' ? '' : `/${lang}`;
}

export function buildUrl(lang: Lang, path: string = ''): string {
  const prefix = langPathPrefix(lang);
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${prefix}${path === '' ? '/' : cleanPath}`;
}
