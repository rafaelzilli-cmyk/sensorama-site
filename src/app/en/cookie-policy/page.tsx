import type { Metadata } from 'next';
import { CookiePolicyPage } from '@/components/CookiePolicyPage';
import { SITE_URL } from '@/lib/constants';
import { UI } from '@/lib/cases-data';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

const TITLE = 'Cookie Notice | Sensorama Design';
const DESCRIPTION = 'Cookie notice for the Sensorama Design website.';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  path: '/cookie-policy',
  title: TITLE,
  description: DESCRIPTION,
});

export default function CookieEN() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.en.breadcrumbHome, url: `${SITE_URL}/en` },
    { name: TITLE.split(' | ')[0] },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <CookiePolicyPage lang="en" />
    </>
  );
}
