import type { Metadata } from 'next';
import { CasesListingPage } from '@/components/CasesListingPage';
import { UI } from '@/lib/cases-data';
import { SITE_URL } from '@/lib/constants';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  path: '/cases',
  title: UI.en.metaListingTitle,
  description: UI.en.metaListingDesc,
});

export default function CasesPageEN() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.en.breadcrumbHome, url: `${SITE_URL}/en` },
    { name: UI.en.breadcrumbCases },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <CasesListingPage lang="en" />
    </>
  );
}
