import type { Metadata } from 'next';
import { CookiePolicyPage } from '@/components/CookiePolicyPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Cookie Notice | Sensorama Design',
  description: 'Cookie notice for the Sensorama Design website.',
  alternates: {
    canonical: `${SITE_URL}/en/cookie-policy`,
    languages: {
      'pt-BR': `${SITE_URL}/cookie-policy`,
      'en': `${SITE_URL}/en/cookie-policy`,
      'es': `${SITE_URL}/es/cookie-policy`,
      'x-default': `${SITE_URL}/cookie-policy`,
    },
  },
  openGraph: { locale: 'en_US' },
};

export default function CookieEN() {
  return <CookiePolicyPage lang="en" />;
}
