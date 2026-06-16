import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Aviso de Privacidade | Sensorama Design',
  description: 'Aviso de Privacidade da Sensorama Design conforme a LGPD.',
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
    languages: {
      'pt-BR': `${SITE_URL}/privacy-policy`,
      'en': `${SITE_URL}/en/privacy-policy`,
      'es': `${SITE_URL}/es/privacy-policy`,
      'x-default': `${SITE_URL}/privacy-policy`,
    },
  },
};

export default function PrivacyPT() {
  return <PrivacyPolicyPage lang="pt" />;
}
