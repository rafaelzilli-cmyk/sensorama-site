import type { Metadata } from 'next';
import { CasesListingPage } from '@/components/CasesListingPage';
import { UI } from '@/lib/cases-data';
import { SITE_URL } from '@/lib/constants';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = pageMetadata({
  lang: 'es',
  path: '/cases',
  title: UI.es.metaListingTitle,
  description: UI.es.metaListingDesc,
});

export default function CasesPageES() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.es.breadcrumbHome, url: `${SITE_URL}/es` },
    { name: UI.es.breadcrumbCases },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <CasesListingPage lang="es" />
    </>
  );
}
