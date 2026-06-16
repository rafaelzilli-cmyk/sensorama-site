import type { Metadata } from 'next';
import { CookiePolicyPage } from '@/components/CookiePolicyPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Aviso de Cookies | Sensorama Design',
  description: 'Aviso de cookies del sitio Sensorama Design.',
  alternates: {
    canonical: `${SITE_URL}/es/cookie-policy`,
    languages: {
      'pt-BR': `${SITE_URL}/cookie-policy`,
      'en': `${SITE_URL}/en/cookie-policy`,
      'es': `${SITE_URL}/es/cookie-policy`,
      'x-default': `${SITE_URL}/cookie-policy`,
    },
  },
  openGraph: { locale: 'es_ES' },
};

export default function CookieES() {
  return <CookiePolicyPage lang="es" />;
}
