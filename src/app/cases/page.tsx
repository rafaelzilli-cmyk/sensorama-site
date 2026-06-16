import type { Metadata } from 'next';
import { CasesListingPage } from '@/components/CasesListingPage';
import { UI } from '@/lib/cases-data';
import { SITE_URL } from '@/lib/constants';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = pageMetadata({
  lang: 'pt',
  path: '/cases',
  title: UI.pt.metaListingTitle,
  description: UI.pt.metaListingDesc,
});

export default function CasesPagePT() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.pt.breadcrumbHome, url: SITE_URL },
    { name: UI.pt.breadcrumbCases },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <CasesListingPage lang="pt" />
    </>
  );
}
