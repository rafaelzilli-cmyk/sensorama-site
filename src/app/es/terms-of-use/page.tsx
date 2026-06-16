import type { Metadata } from 'next';
import { TermsOfUsePage } from '@/components/TermsOfUsePage';
import { SITE_URL } from '@/lib/constants';
import { UI } from '@/lib/cases-data';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

const TITLE = 'Términos de Uso | Sensorama Design';
const DESCRIPTION = 'Términos de uso del sitio Sensorama Design.';

export const metadata: Metadata = pageMetadata({
  lang: 'es',
  path: '/terms-of-use',
  title: TITLE,
  description: DESCRIPTION,
});

export default function TermsES() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.es.breadcrumbHome, url: `${SITE_URL}/es` },
    { name: TITLE.split(' | ')[0] },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <TermsOfUsePage lang="es" />
    </>
  );
}
