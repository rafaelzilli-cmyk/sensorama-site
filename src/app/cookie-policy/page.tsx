import type { Metadata } from 'next';
import { CookiePolicyPage } from '@/components/CookiePolicyPage';
import { SITE_URL } from '@/lib/constants';
import { UI } from '@/lib/cases-data';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

const TITLE = 'Aviso de Cookies | Sensorama Design';
const DESCRIPTION = 'Aviso de Cookies do site da Sensorama Design.';

export const metadata: Metadata = pageMetadata({
  lang: 'pt',
  path: '/cookie-policy',
  title: TITLE,
  description: DESCRIPTION,
});

export default function CookiePT() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.pt.breadcrumbHome, url: SITE_URL },
    { name: TITLE.split(' | ')[0] },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <CookiePolicyPage lang="pt" />
    </>
  );
}
