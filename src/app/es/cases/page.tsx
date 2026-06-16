import type { Metadata } from 'next';
import { CasesListingPage } from '@/components/CasesListingPage';
import { UI } from '@/lib/cases-data';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: UI.es.metaListingTitle,
  description: UI.es.metaListingDesc,
  alternates: {
    canonical: `${SITE_URL}/es/cases`,
    languages: {
      'pt-BR': `${SITE_URL}/cases`,
      'en': `${SITE_URL}/en/cases`,
      'es': `${SITE_URL}/es/cases`,
      'x-default': `${SITE_URL}/cases`,
    },
  },
  openGraph: { locale: 'es_ES' },
};

export default function CasesPageES() {
  return <CasesListingPage lang="es" />;
}
