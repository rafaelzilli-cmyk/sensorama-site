import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/PrivacyPolicyPage';
import { SITE_URL } from '@/lib/constants';
import { UI } from '@/lib/cases-data';
import { pageMetadata, buildBreadcrumb } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

const TITLE = 'Privacy Notice | Sensorama Design';
const DESCRIPTION = 'Privacy notice for the Sensorama Design website (LGPD).';

export const metadata: Metadata = pageMetadata({
  lang: 'en',
  path: '/privacy-policy',
  title: TITLE,
  description: DESCRIPTION,
});

export default function PrivacyEN() {
  const breadcrumb = buildBreadcrumb([
    { name: UI.en.breadcrumbHome, url: `${SITE_URL}/en` },
    { name: TITLE.split(' | ')[0] },
  ]);
  return (
    <>
      <JsonLd data={breadcrumb} />
      <PrivacyPolicyPage lang="en" />
    </>
  );
}
