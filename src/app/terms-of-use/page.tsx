import type { Metadata } from 'next';
import { TermsOfUsePage } from '@/components/TermsOfUsePage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Termos de Uso | Sensorama Design',
  description: 'Termos de uso do site da Sensorama Design.',
  alternates: {
    canonical: `${SITE_URL}/terms-of-use`,
    languages: {
      'pt-BR': `${SITE_URL}/terms-of-use`,
      'en': `${SITE_URL}/en/terms-of-use`,
      'es': `${SITE_URL}/es/terms-of-use`,
      'x-default': `${SITE_URL}/terms-of-use`,
    },
  },
};

export default function TermsPT() {
  return <TermsOfUsePage lang="pt" />;
}
