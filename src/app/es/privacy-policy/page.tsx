import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';
import { SITE_URL } from '@/lib/constants';
import { UI } from '@/lib/cases-data';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

const TITLE = 'Aviso de Privacidad | Sensorama Design';
const DESCRIPTION = 'Aviso de Privacidad del sitio Sensorama Design (LGPD).';

export const metadata: Metadata = pageMetadata({
  lang: 'es',
  path: '/privacy-policy',
  title: TITLE,
  description: DESCRIPTION,
});

export default function PrivacyES() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.es.breadcrumbHome, url: `${SITE_URL}/es` },
    { name: TITLE.split(' | ')[0] },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <PrivacyPolicyPage lang="es" />
    </>
  );
}
