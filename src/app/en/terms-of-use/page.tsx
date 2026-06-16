import type { Metadata } from 'next';
import { TermsOfUsePage } from '@/components/TermsOfUsePage';
import { SITE_URL } from '@/lib/constants';
import { UI } from '@/lib/cases-data';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

const TITLE = 'Terms of Use | Sensorama Design';
const DESCRIPTION = 'Terms of use for the Sensorama Design website.';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  path: '/terms-of-use',
  title: TITLE,
  description: DESCRIPTION,
});

export default function TermsEN() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.en.breadcrumbHome, url: `${SITE_URL}/en` },
    { name: TITLE.split(' | ')[0] },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <TermsOfUsePage lang="en" />
    </>
  );
}
