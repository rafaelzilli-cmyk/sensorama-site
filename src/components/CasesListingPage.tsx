'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND_COLORS as B, FONTS as F, type Lang } from '@/lib/constants';
import { UI, getVisibleCases, type Industry } from '@/lib/cases-data';
import { SiteLayout } from '@/components/SiteLayout';

/**
 * ⚠️ ATENÇÃO PARA CLAUDE CODE:
 *
 * Use o arquivo de referência: reference/CasesListingPage.original.tsx
 *
 * Adaptações necessárias:
 * - Remover <Helmet> (metadata vai no page.tsx)
 * - Trocar imports react-router por next/link
 * - Substituir imagens figma:asset por /images/cases/...
 *
 * Esta versão abaixo já está funcional, com filtro client-side por indústria.
 */

type Props = { lang: Lang };

export function CasesListingPage({ lang }: Props) {
  const ui = UI[lang];
  const cases = getVisibleCases();
  const [activeFilter, setActiveFilter] = useState<Industry | 'all'>('all');

  const industries = Array.from(new Set(cases.map((c) => c.industry)));
  const filtered = activeFilter === 'all' ? cases : cases.filter((c) => c.industry === activeFilter);

  const langPrefix = lang === 'pt' ? '' : `/${lang}`;

  return (
    <SiteLayout lang={lang}>
    <main style={{ minHeight: '100vh', fontFamily: F.body, color: B.black }}>
      <section style={{ padding: '64px 32px 32px', maxWidth: 1200, margin: '0 auto' }}>
        <nav aria-label="breadcrumb" style={{ fontSize: 13, color: B.medGray, marginBottom: 24 }}>
          <Link href={langPrefix || '/'} style={{ color: B.blue, textDecoration: 'none' }}>
            {ui.breadcrumbHome}
          </Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>{ui.breadcrumbCases}</span>
        </nav>

        <h1 style={{ fontFamily: F.heading, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: 12 }}>
          {ui.listingTitle}
        </h1>
        <p style={{ fontSize: '1.125rem', color: B.medGray, marginBottom: 40, maxWidth: 720 }}>
          {ui.listingSubtitle}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
          <button
            onClick={() => setActiveFilter('all')}
            style={{
              padding: '8px 16px',
              borderRadius: 20,
              border: `1px solid ${activeFilter === 'all' ? B.blue : '#E0E0E0'}`,
              backgroundColor: activeFilter === 'all' ? B.blue : B.white,
              color: activeFilter === 'all' ? B.white : B.darkGray,
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {ui.filterAll}
          </button>
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setActiveFilter(ind)}
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                border: `1px solid ${activeFilter === ind ? B.blue : '#E0E0E0'}`,
                backgroundColor: activeFilter === ind ? B.blue : B.white,
                color: activeFilter === ind ? B.white : B.darkGray,
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {ui.filterLabels[ind]}
            </button>
          ))}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 32,
          }}
        >
          {filtered.map((record) => {
            const c = record.content[lang];
            return (
              <article
                key={record.slug}
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: B.white,
                  border: '1px solid #E5E5E5',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <Link
                  href={`${langPrefix}/cases/${record.slug}`}
                  style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/9', backgroundColor: B.lightGray, overflow: 'hidden' }}>
                    {record.heroImage && (
                      <Image
                        src={record.heroImage}
                        alt={c.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 400px"
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div style={{ padding: 24 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: B.blue,
                        backgroundColor: '#E8ECFF',
                        padding: '4px 12px',
                        borderRadius: 12,
                        marginBottom: 16,
                      }}
                    >
                      {c.industryLabel}
                    </span>
                    <h3 style={{ fontFamily: F.heading, fontSize: '1.25rem', fontWeight: 700, marginBottom: 12, lineHeight: 1.3 }}>
                      {c.title}
                    </h3>
                    <p style={{ fontSize: 14, color: B.medGray, lineHeight: 1.6, margin: 0 }}>
                      {c.shortDescription}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
    </SiteLayout>
  );
}
