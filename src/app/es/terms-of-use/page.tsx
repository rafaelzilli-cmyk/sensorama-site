import type { Metadata } from 'next';
import { TermsOfUsePage } from '@/components/TermsOfUsePage';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Términos de Uso | Sensorama Design',
  description: 'Términos de uso del sitio Sensorama Design.',
  alternates: {
    canonical: `${SITE_URL}/es/terms-of-use`,
    languages: {
      'pt-BR': `${SITE_URL}/terms-of-use`,
      'en': `${SITE_URL}/en/terms-of-use`,
      'es': `${SITE_URL}/es/terms-of-use`,
      'x-default': `${SITE_URL}/terms-of-use`,
    },
  },
  openGraph: { locale: 'es_ES' },
};

export default function TermsES() {
  return <TermsOfUsePage lang="es" />;
}
