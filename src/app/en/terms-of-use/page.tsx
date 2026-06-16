import type { Metadata } from 'next';
import { TermsOfUsePage } from '@/components/TermsOfUsePage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Use | Sensorama Design',
  description: 'Terms of use for the Sensorama Design website.',
  alternates: {
    canonical: `${SITE_URL}/en/terms-of-use`,
    languages: {
      'pt-BR': `${SITE_URL}/terms-of-use`,
      'en': `${SITE_URL}/en/terms-of-use`,
      'es': `${SITE_URL}/es/terms-of-use`,
      'x-default': `${SITE_URL}/terms-of-use`,
    },
  },
  openGraph: { locale: 'en_US' },
};

export default function TermsEN() {
  return <TermsOfUsePage lang="en" />;
}
