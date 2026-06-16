import type { Metadata } from 'next';
import { SITE_URL, OG_LOCALE, type Lang } from './constants';

/** Imagem OG padrão (branded, paisagem). TODO: gerar um /images/og-default.png 1200x630 dedicado. */
export const DEFAULT_OG_IMAGE = '/images/cases/marketplace-hero.png';

const langPrefix = (lang: Lang) => (lang === 'pt' ? '' : `/${lang}`);

/**
 * Constrói o objeto Metadata completo de uma página (title, description,
 * canonical + hreflang, Open Graph e Twitter Card). Usa title.absolute para
 * não colidir com o template "%s | Sensorama Design" do layout.
 */
export function pageMetadata(opts: {
  lang: Lang;
  path?: string; // sem prefixo de idioma; '' = home, '/cases', '/cases/slug'...
  title: string;
  description: string;
  ogType?: 'website' | 'article';
  image?: string;
}): Metadata {
  const { lang, path = '', title, description, ogType = 'website', image = DEFAULT_OG_IMAGE } = opts;
  const canonical = `${SITE_URL}${langPrefix(lang)}${path}`;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: {
        'pt-BR': `${SITE_URL}${path}`,
        en: `${SITE_URL}/en${path}`,
        es: `${SITE_URL}/es${path}`,
        'x-default': `${SITE_URL}${path}`,
      },
    },
    openGraph: {
      type: ogType,
      siteName: 'Sensorama Design',
      title,
      description,
      url: canonical,
      locale: OG_LOCALE[lang],
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sensoramadesign',
      title,
      description,
      images: [image],
    },
  };
}

/** JSON-LD BreadcrumbList. Itens sem `url` são tratados como a página atual (sem item). */
export function buildBreadcrumb(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.url ? { item: it.url } : {}),
    })),
  };
}

/** JSON-LD Article para páginas de case. */
export function buildArticle(opts: {
  headline: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  const abs = (u: string) => (u.startsWith('http') ? u : `${SITE_URL}${u}`);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    image: abs(opts.image),
    author: { '@type': 'Organization', name: 'Sensorama Design', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Sensorama Design',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/apple-touch-icon.png` },
    },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    mainEntityOfPage: opts.url,
  };
}
