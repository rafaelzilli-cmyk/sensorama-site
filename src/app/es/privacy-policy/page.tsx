import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Aviso de Privacidad | Sensorama Design',
  description: 'Aviso de Privacidad del sitio Sensorama Design (LGPD).',
  alternates: {
    canonical: `${SITE_URL}/es/privacy-policy`,
    languages: {
      'pt-BR': `${SITE_URL}/privacy-policy`,
      'en': `${SITE_URL}/en/privacy-policy`,
      'es': `${SITE_URL}/es/privacy-policy`,
      'x-default': `${SITE_URL}/privacy-policy`,
    },
  },
  openGraph: { locale: 'es_ES' },
};

export default function PrivacyES() {
  return <PrivacyPolicyPage lang="es" />;
}
