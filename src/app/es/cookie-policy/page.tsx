import type { Metadata } from 'next';
import { CookiePolicyPage } from '@/components/CookiePolicyPage';
import { SITE_URL } from '@/lib/constants';
import { UI } from '@/lib/cases-data';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

const TITLE = 'Aviso de Cookies | Sensorama Design';
const DESCRIPTION = 'Aviso de cookies del sitio Sensorama Design.';

export const metadata: Metadata = pageMetadata({
  lang: 'es',
  path: '/cookie-policy',
  title: TITLE,
  description: DESCRIPTION,
});

export default function CookieES() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.es.breadcrumbHome, url: `${SITE_URL}/es` },
    { name: TITLE.split(' | ')[0] },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <CookiePolicyPage lang="es" />
    </>
  );
}
