import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Notice | Sensorama Design',
  description: 'Privacy notice for the Sensorama Design website (LGPD).',
  alternates: {
    canonical: `${SITE_URL}/en/privacy-policy`,
    languages: {
      'pt-BR': `${SITE_URL}/privacy-policy`,
      'en': `${SITE_URL}/en/privacy-policy`,
      'es': `${SITE_URL}/es/privacy-policy`,
      'x-default': `${SITE_URL}/privacy-policy`,
    },
  },
  openGraph: { locale: 'en_US' },
};

export default function PrivacyEN() {
  return <PrivacyPolicyPage lang="en" />;
}
