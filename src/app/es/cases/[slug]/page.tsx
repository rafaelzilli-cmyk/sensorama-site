import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseDetailPage } from '@/components/CaseDetailPage';
import { getCaseBySlug, getAllCaseSlugs, UI } from '@/lib/cases-data';
import { SITE_URL } from '@/lib/constants';
import { pageMetadata, buildBreadcrumb, buildArticle, DEFAULT_OG_IMAGE } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllCaseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const record = getCaseBySlug(params.slug);
  if (!record) return { title: 'Case not found' };
  const c = record.content.es;
  return pageMetadata({
    lang: 'es',
    path: `/cases/${params.slug}`,
    title: c.metaTitle ?? `${c.title} | Sensorama Design`,
    description: c.metaDescription ?? c.shortDescription,
    ogType: 'article',
    image: record.heroImage,
  });
}

export default function CaseDetailES({ params }: Props) {
  const record = getCaseBySlug(params.slug);
  if (!record) notFound();
  const c = record.content.es;
  const url = `${SITE_URL}/es/cases/${params.slug}`;
  const breadcrumb = buildBreadcrumb([
    { name: UI.es.breadcrumbHome, url: `${SITE_URL}/es` },
    { name: UI.es.breadcrumbCases, url: `${SITE_URL}/es/cases` },
    { name: c.title },
  ]);
  const article = buildArticle({
    headline: c.title,
    description: c.metaDescription ?? c.shortDescription,
    image: record.heroImage ?? DEFAULT_OG_IMAGE,
    url,
    datePublished: '2026-06-15',
    dateModified: '2026-06-16',
  });
  return (
    <>
      <JsonLd data={[breadcrumb, article]} />
      <CaseDetailPage lang="es" slug={params.slug} />
    </>
  );
}
