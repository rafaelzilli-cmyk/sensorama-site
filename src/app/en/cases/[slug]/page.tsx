import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseDetailPage } from '@/components/CaseDetailPage';
import { getCaseBySlug, getAllCaseSlugs } from '@/lib/cases-data';
import { SITE_URL } from '@/lib/constants';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const record = getCaseBySlug(params.slug);
  if (!record) return { title: 'Case not found' };
  const c = record.content.en;
  return {
    title: `${c.title} | Cases | Sensorama Design`,
    description: c.shortDescription,
    alternates: {
      canonical: `${SITE_URL}/en/cases/${params.slug}`,
      languages: {
        'pt-BR': `${SITE_URL}/cases/${params.slug}`,
        'en': `${SITE_URL}/en/cases/${params.slug}`,
        'es': `${SITE_URL}/es/cases/${params.slug}`,
        'x-default': `${SITE_URL}/cases/${params.slug}`,
      },
    },
    openGraph: {
      title: c.title,
      description: c.shortDescription,
      type: 'article',
      locale: 'en_US',
      url: `${SITE_URL}/en/cases/${params.slug}`,
    },
  };
}

export default function CaseDetailEN({ params }: Props) {
  const record = getCaseBySlug(params.slug);
  if (!record) notFound();
  return <CaseDetailPage lang="en" slug={params.slug} />;
}
