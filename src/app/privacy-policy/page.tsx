import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';
import { SITE_URL } from '@/lib/constants';
import { UI } from '@/lib/cases-data';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

const TITLE = 'Aviso de Privacidade | Sensorama Design';
const DESCRIPTION = 'Aviso de Privacidade da Sensorama Design conforme a LGPD.';

export const metadata: Metadata = pageMetadata({
  lang: 'pt',
  path: '/privacy-policy',
  title: TITLE,
  description: DESCRIPTION,
});

export default function PrivacyPT() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.pt.breadcrumbHome, url: SITE_URL },
    { name: TITLE.split(' | ')[0] },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <PrivacyPolicyPage lang="pt" />
    </>
  );
}
