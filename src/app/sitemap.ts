import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { getAllCaseSlugs } from '@/lib/cases-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const langs = ['', '/en', '/es'];
  const staticPaths = ['', '/cases', '/privacy-policy', '/cookie-policy', '/terms-of-use'];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages in all languages
  for (const path of staticPaths) {
    for (const lang of langs) {
      const url = `${SITE_URL}${lang}${path}`;
      entries.push({
        url,
        lastModified: now,
        changeFrequency: path === '' ? 'weekly' : 'monthly',
        priority: path === '' ? 1.0 : 0.7,
        alternates: {
          languages: {
            'pt-BR': `${SITE_URL}${path}`,
            'en': `${SITE_URL}/en${path}`,
            'es': `${SITE_URL}/es${path}`,
          },
        },
      });
    }
  }

  // Case detail pages in all languages
  const caseSlugs = getAllCaseSlugs();
  for (const slug of caseSlugs) {
    for (const lang of langs) {
      entries.push({
        url: `${SITE_URL}${lang}/cases/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages: {
            'pt-BR': `${SITE_URL}/cases/${slug}`,
            'en': `${SITE_URL}/en/cases/${slug}`,
            'es': `${SITE_URL}/es/cases/${slug}`,
          },
        },
      });
    }
  }

  return entries;
}
