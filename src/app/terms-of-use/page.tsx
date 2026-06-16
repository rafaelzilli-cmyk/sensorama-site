import type { Metadata } from 'next';
import { TermsOfUsePage } from '@/components/TermsOfUsePage';
import { SITE_URL } from '@/lib/constants';
import { UI } from '@/lib/cases-data';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

const TITLE = 'Termos de Uso | Sensorama Design';
const DESCRIPTION = 'Termos de uso do site da Sensorama Design.';

export const metadata: Metadata = pageMetadata({
  lang: 'pt',
  path: '/terms-of-use',
  title: TITLE,
  description: DESCRIPTION,
});

export default function TermsPT() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.pt.breadcrumbHome, url: SITE_URL },
    { name: TITLE.split(' | ')[0] },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <TermsOfUsePage lang="pt" />
    </>
  );
}
