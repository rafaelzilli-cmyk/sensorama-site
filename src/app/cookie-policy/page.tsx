import type { Metadata } from 'next';
import { CookiePolicyPage } from '@/components/CookiePolicyPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Aviso de Cookies | Sensorama Design',
  description: 'Aviso de Cookies do site da Sensorama Design.',
  alternates: {
    canonical: `${SITE_URL}/cookie-policy`,
    languages: {
      'pt-BR': `${SITE_URL}/cookie-policy`,
      'en': `${SITE_URL}/en/cookie-policy`,
      'es': `${SITE_URL}/es/cookie-policy`,
      'x-default': `${SITE_URL}/cookie-policy`,
    },
  },
};

export default function CookiePT() {
  return <CookiePolicyPage lang="pt" />;
}
