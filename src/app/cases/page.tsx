import type { Metadata } from 'next';
import { CasesListingPage } from '@/components/CasesListingPage';
import { UI } from '@/lib/cases-data';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: UI.pt.metaListingTitle,
  description: UI.pt.metaListingDesc,
  alternates: {
    canonical: `${SITE_URL}/cases`,
    languages: {
      'pt-BR': `${SITE_URL}/cases`,
      'en': `${SITE_URL}/en/cases`,
      'es': `${SITE_URL}/es/cases`,
      'x-default': `${SITE_URL}/cases`,
    },
  },
};

export default function CasesPagePT() {
  return <CasesListingPage lang="pt" />;
}
