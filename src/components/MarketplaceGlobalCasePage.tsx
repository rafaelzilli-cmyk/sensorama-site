'use client';

import { type CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND_COLORS, FONTS as F, type Lang } from '@/lib/constants';
import { UI } from '@/lib/cases-data';
import { SiteLayout } from '@/components/SiteLayout';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const B = {
  ...BRAND_COLORS,
  paleBlue: '#E8ECFF',
};

// Container padrão — alinhado ao restante do site (LandingPage / footer usam 1152 + 32px)
const CONTAINER: CSSProperties = { maxWidth: 1152, margin: '0 auto', padding: '0 32px' };
const READABLE = 820; // largura máxima de blocos de texto corrido, para leitura confortável

export const MARKETPLACE_GLOBAL_SLUG = 'marketplace-b2b-expansao-internacional';

type Card = { title: string; body: string };

const T = {
  pt: {
    industryLabel: 'BENS DE CONSUMO (FMCG)',
    tags: ['Pesquisa Global', 'Pesquisa de Campo', 'Marketplace B2B'],
    title: 'Pesquisa de campo em bens de consumo, no mundo todo',
    subtitle:
      'Fomos a campo em 13 países, em 5 continentes, para entender como o pequeno e médio varejo de bens de consumo realmente compra, opera e decide. O que aprendemos virou oportunidade de produto e de negócio para um marketplace B2B.',
    heroStripTitle: 'Pesquisa de campo global',
    heroStripStats: '13 países · 5 continentes · 60+ estabelecimentos',
    valueLead:
      'Dashboards mostram o que acontece. A pesquisa de campo mostra por quê. Conduzimos pesquisa etnográfica presencial em 13 países e 5 continentes para uma multinacional de bens de consumo, mapeando como o pequeno e médio varejo opera, decide e compra em mercados com dinâmicas culturais, econômicas e operacionais distintas.',
    stats: [
      { n: '13', label: 'PAÍSES', desc: 'pesquisados' },
      { n: '5', label: 'CONTINENTES', desc: 'alcançados' },
      { n: '60+', label: 'ESTABELECIMENTOS', desc: 'ouvidos em campo' },
      { n: '39', label: 'OPORTUNIDADES', desc: 'de negócio identificadas' },
    ],
    deliverHeading: 'O que entregamos',
    cards: [
      { title: 'Decisões de expansão com segurança', body: 'Reduz o risco de entrar em novos mercados: o roadmap passa a se apoiar em evidência real de comportamento, não em suposição.' },
      { title: 'Oportunidades de negócio priorizadas', body: 'Entregamos oportunidades concretas de produto e receita, já ranqueadas por impacto e viabilidade, prontas para decisão.' },
      { title: 'Produto que o mercado adota', body: 'As decisões de produto passam a se basear em como o varejo realmente faz pedidos, controla estoque e se relaciona com fornecedores, reduzindo o esforço investido no que não seria usado.' },
      { title: 'Visão comparativa entre mercados', body: 'Mostra onde investir primeiro e como adaptar a oferta a cada país, cultura e nível de maturidade do mercado.' },
      { title: 'Capacidade de pesquisa presencial em mercados maduros, emergentes e fronteiriços', body: 'A pesquisa chega a capitais, periferias, comércio informal e mercados maduros, no contexto real de cada operação.' },
    ] as Card[],
    audienceHeading: 'Conversamos com quem move o varejo',
    audienceLead: 'Conversamos diretamente com as pessoas que decidem o que entra e o que sai da prateleira em cada mercado.',
    audienceProfiles: ['Donos de mercado', 'Gerentes de loja', 'Atacadistas', 'Representantes de vendas'],
    learningsHeading: 'O que aprendemos em campo',
    learningsLead: 'Pesquisar o mundo todo revela padrões que se repetem onde quer que o varejo de bens de consumo opere. Quatro aprendizados que mudaram decisões:',
    learnings: [
      { title: 'O comércio tradicional é infraestrutura, não resíduo.', body: 'Em mercados emergentes, o varejo informal e de bairro é a espinha dorsal do consumo. Tratá-lo como hub comunitário muda a forma de dimensionar a oportunidade.' },
      { title: 'Estar online significa coisas diferentes em cada mercado.', body: 'Para muitos comerciantes, online quer dizer mensagem, ligação ou aplicativo de conversa, não uma plataforma de pedidos. Isso redefine as premissas de adoção.' },
      { title: 'A relação humana faz parte da compra.', body: 'Atacadistas e representantes de vendas seguem influenciando a decisão. A oportunidade não está em substituir essa relação, e sim em integrá-la ao digital.' },
      { title: 'As dores se concentram em etapas específicas.', body: 'Olhando a jornada de planejamento, pedido e entrega, fica claro que as fricções não se distribuem por igual. Isso permite priorizar oportunidades por impacto real.' },
    ] as Card[],
    reachHeading: 'Pesquisa presencial em qualquer mercado',
    reachLead: 'Não importa o país, a cultura ou o nível de maturidade do mercado. Conduzimos pesquisa presencial onde o comportamento acontece.',
    mapCaption: 'Países onde a Sensorama conduziu pesquisa presencial',
    impactLead: 'Cada pesquisa devolve para a empresa o que mais importa: clareza para decidir e oportunidades para crescer, ancoradas no comportamento real do mercado.',
    ctaTitle: 'Quer entender o seu cliente em qualquer lugar do mundo?',
    ctaSub: 'Conduzimos pesquisa presencial onde o comportamento acontece.',
    ctaBtn: 'Vamos conversar',
  },
  en: {
    industryLabel: 'CONSUMER GOODS (FMCG)',
    tags: ['Global Research', 'Field Research', 'B2B Marketplace'],
    title: 'Field research in consumer goods, around the world',
    subtitle:
      'We went into the field in 13 countries, across 5 continents, to understand how small and mid-sized consumer goods retail actually buys, operates and decides. What we learned became product and business opportunity for a B2B marketplace.',
    heroStripTitle: 'Global field research',
    heroStripStats: '13 countries · 5 continents · 60+ establishments',
    valueLead:
      'Dashboards show what happens. Field research shows why. We conducted in-person ethnographic research across 13 countries and 5 continents for a global consumer goods company, mapping how small and mid-sized retail operates, decides and buys in markets with distinct cultural, economic and operational dynamics.',
    stats: [
      { n: '13', label: 'COUNTRIES', desc: 'researched' },
      { n: '5', label: 'CONTINENTS', desc: 'reached' },
      { n: '60+', label: 'ESTABLISHMENTS', desc: 'heard in the field' },
      { n: '39', label: 'OPPORTUNITIES', desc: 'identified for the business' },
    ],
    deliverHeading: 'What we deliver',
    cards: [
      { title: 'Expansion decisions with confidence', body: 'Reduces the risk of entering new markets: the roadmap rests on real behavioral evidence, not on assumption.' },
      { title: 'Prioritized business opportunities', body: 'We deliver concrete product and revenue opportunities, already ranked by impact and feasibility, ready for decision.' },
      { title: 'Product the market actually adopts', body: 'Product decisions rest on how retail actually places orders, manages stock and deals with suppliers, reducing effort spent on what would not be used.' },
      { title: 'A comparative view across markets', body: 'Shows where to invest first and how to adapt the offer to each country, culture and level of market maturity.' },
      { title: 'In-person research capability in mature, emerging and frontier markets', body: 'Research reaches capitals, peripheries, informal trade and mature markets, in the real context of each operation.' },
    ] as Card[],
    audienceHeading: 'We talk to the people who move retail',
    audienceLead: 'We talk directly with the people who decide what goes on and off the shelf in each market.',
    audienceProfiles: ['Store owners', 'Store managers', 'Wholesalers', 'Sales reps'],
    learningsHeading: 'What we learned in the field',
    learningsLead: 'Researching the whole world reveals patterns that repeat wherever consumer goods retail operates. Four learnings that changed decisions:',
    learnings: [
      { title: 'Traditional trade is infrastructure, not residue.', body: 'In emerging markets, informal and neighborhood retail is the backbone of consumption. Treating it as a community hub changes how the opportunity is sized.' },
      { title: 'Being online means different things in each market.', body: 'For many merchants, online means a message, a call or a chat app, not an ordering platform. That redefines the assumptions around adoption.' },
      { title: 'Human relationships are part of the purchase.', body: 'Wholesalers and sales reps still influence the decision. The opportunity is not to replace that relationship, but to integrate it into the digital.' },
      { title: 'Pain points concentrate in specific stages.', body: 'Looking at the planning, ordering and delivery journey, it becomes clear that friction is not evenly distributed. That allows prioritizing opportunities by real impact.' },
    ] as Card[],
    reachHeading: 'In-person research in any market',
    reachLead: 'No matter the country, the culture or the level of market maturity. We conduct in-person research where behavior actually happens.',
    mapCaption: 'Countries where Sensorama has conducted in-person research',
    impactLead: 'Every study returns to the business what matters most: clarity to decide and opportunities to grow, anchored in real market behavior.',
    ctaTitle: 'Want to understand your customer anywhere in the world?',
    ctaSub: 'We conduct in-person research where behavior actually happens.',
    ctaBtn: "Let's talk",
  },
  es: {
    industryLabel: 'BIENES DE CONSUMO (FMCG)',
    tags: ['Investigación Global', 'Investigación de Campo', 'Marketplace B2B'],
    title: 'Investigación de campo en bienes de consumo, en todo el mundo',
    subtitle:
      'Fuimos a campo en 13 países, en 5 continentes, para entender cómo el pequeño y mediano retail de bienes de consumo realmente compra, opera y decide. Lo que aprendimos se convirtió en oportunidad de producto y de negocio para un marketplace B2B.',
    heroStripTitle: 'Investigación de campo global',
    heroStripStats: '13 países · 5 continentes · 60+ establecimientos',
    valueLead:
      'Los dashboards muestran qué ocurre. La investigación de campo muestra por qué. Condujimos investigación etnográfica presencial en 13 países y 5 continentes para una multinacional de bienes de consumo, mapeando cómo el pequeño y mediano retail opera, decide y compra en mercados con dinámicas culturales, económicas y operacionales distintas.',
    stats: [
      { n: '13', label: 'PAÍSES', desc: 'investigados' },
      { n: '5', label: 'CONTINENTES', desc: 'alcanzados' },
      { n: '60+', label: 'ESTABLECIMIENTOS', desc: 'escuchados en campo' },
      { n: '39', label: 'OPORTUNIDADES', desc: 'de negocio identificadas' },
    ],
    deliverHeading: 'Lo que entregamos',
    cards: [
      { title: 'Decisiones de expansión con seguridad', body: 'Reduce el riesgo de entrar en nuevos mercados: el roadmap se apoya en evidencia real de comportamiento, no en suposición.' },
      { title: 'Oportunidades de negocio priorizadas', body: 'Entregamos oportunidades concretas de producto e ingresos, ya rankeadas por impacto y viabilidad, listas para decisión.' },
      { title: 'Producto que el mercado adopta', body: 'Las decisiones de producto se basan en cómo el retail realmente hace pedidos, controla inventario y se relaciona con proveedores, reduciendo el esfuerzo invertido en lo que no se usaría.' },
      { title: 'Visión comparativa entre mercados', body: 'Muestra dónde invertir primero y cómo adaptar la oferta a cada país, cultura y nivel de madurez del mercado.' },
      { title: 'Capacidad de investigación presencial en mercados maduros, emergentes y fronterizos', body: 'La investigación llega a capitales, periferias, comercio informal y mercados maduros, en el contexto real de cada operación.' },
    ] as Card[],
    audienceHeading: 'Hablamos con quienes mueven el retail',
    audienceLead: 'Conversamos directamente con las personas que deciden qué entra y qué sale del estante en cada mercado.',
    audienceProfiles: ['Dueños de tienda', 'Gerentes de tienda', 'Mayoristas', 'Representantes de ventas'],
    learningsHeading: 'Lo que aprendimos en campo',
    learningsLead: 'Investigar al mundo entero revela patrones que se repiten donde sea que opere el retail de bienes de consumo. Cuatro aprendizajes que cambiaron decisiones:',
    learnings: [
      { title: 'El comercio tradicional es infraestructura, no residuo.', body: 'En mercados emergentes, el retail informal y de barrio es la columna vertebral del consumo. Tratarlo como hub comunitario cambia la forma de dimensionar la oportunidad.' },
      { title: 'Estar online significa cosas distintas en cada mercado.', body: 'Para muchos comerciantes, online quiere decir mensaje, llamada o aplicación de chat, no una plataforma de pedidos. Eso redefine las premisas de adopción.' },
      { title: 'La relación humana es parte de la compra.', body: 'Mayoristas y representantes de ventas siguen influyendo en la decisión. La oportunidad no está en sustituir esa relación, sino en integrarla a lo digital.' },
      { title: 'Las fricciones se concentran en etapas específicas.', body: 'Mirando el viaje de planificación, pedido y entrega, queda claro que las fricciones no se distribuyen por igual. Eso permite priorizar oportunidades por impacto real.' },
    ] as Card[],
    reachHeading: 'Investigación presencial en cualquier mercado',
    reachLead: 'No importa el país, la cultura o el nivel de madurez del mercado. Conducimos investigación presencial donde el comportamiento ocurre.',
    mapCaption: 'Países donde Sensorama condujo investigación presencial',
    impactLead: 'Cada investigación devuelve al negocio lo que más importa: claridad para decidir y oportunidades para crecer, ancladas en el comportamiento real del mercado.',
    ctaTitle: '¿Quiere entender a su cliente en cualquier lugar del mundo?',
    ctaSub: 'Conducimos investigación presencial donde el comportamiento ocurre.',
    ctaBtn: 'Hablemos',
  },
} as const;

/* ─── World map with 13 highlighted countries ────────────────── */

// Real geographic world map (Natural Earth 1:110m via world-atlas topojson)
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// ISO 3166-1 numeric codes of the 13 researched markets
// BR PE CO US DO ZA BW TR KR SG MY VN PH
const HIGHLIGHT = new Set([76, 604, 170, 840, 214, 710, 72, 792, 410, 702, 458, 704, 608]);

// Singapore (702) is too small to exist as a polygon at 1:110m — drawn as a marker
const SINGAPORE: [number, number] = [103.82, 1.35];

const OCEAN = '#F7F8FA';
const LAND = '#E2E5EB';
const LAND_BORDER = '#D2D6DE';

function WorldMap({ caption }: { caption: string }) {
  return (
    <figure style={{ width: '100%', margin: 0 }}>
      <div style={{ width: '100%', backgroundColor: OCEAN, borderRadius: 12, overflow: 'hidden' }}>
        <ComposableMap
          projection="geoEqualEarth"
          width={1000}
          height={500}
          projectionConfig={{ scale: 175 }}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          role="img"
          aria-label={caption}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const active = HIGHLIGHT.has(Number(geo.id));
                const fill = active ? B.blue : LAND;
                const geoStyle = { fill, stroke: LAND_BORDER, strokeWidth: 0.5, outline: 'none' };
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{ default: geoStyle, hover: geoStyle, pressed: geoStyle }}
                  />
                );
              })
            }
          </Geographies>
          {/* Singapore — too small to render as a polygon at this scale */}
          <Marker coordinates={SINGAPORE}>
            <circle r={4} fill={B.blue} stroke={B.white} strokeWidth={1} />
          </Marker>
        </ComposableMap>
      </div>
      <figcaption style={{ fontFamily: F.body, fontSize: 12, color: B.medGray, textAlign: 'center', marginTop: 12, fontStyle: 'italic' }}>
        {caption}
      </figcaption>
    </figure>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────
   Imagem de fundo (mapa-múndi com os mercados pesquisados) + faixa de
   texto sobreposta. Para trocar a imagem, basta substituir o arquivo
   em /images/cases/marketplace-hero.png.
─────────────────────────────────────────────────────────────── */
function Hero({ stripTitle, stripStats }: { stripTitle: string; stripStats: string }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#0A0F2C',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 32,
        gap: 14,
        overflow: 'hidden',
      }}
    >
      <Image
        src="/images/cases/marketplace-hero.png"
        alt=""
        fill
        priority
        quality={80}
        sizes="(max-width: 768px) 100vw, 1152px"
        style={{ objectFit: 'cover' }}
      />
      {/* Scrim para legibilidade do texto */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(10,15,44,0.5)' }} />
      <p style={{ position: 'relative', fontFamily: F.body, fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', margin: 0 }}>
        {stripTitle}
      </p>
      <p style={{ position: 'relative', fontFamily: F.heading, fontWeight: 700, fontSize: 'clamp(1.1rem, 3.2vw, 1.9rem)', color: '#FFFFFF', margin: 0, lineHeight: 1.3 }}>
        {stripStats}
      </p>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export function MarketplaceGlobalCasePage({ lang }: { lang: Lang }) {
  const t = T[lang];
  const ui = UI[lang];
  const langPrefix = lang === 'pt' ? '' : `/${lang}`;
  const contactHref = `${langPrefix || '/'}#contact`;

  return (
    <SiteLayout lang={lang}>
    <main style={{ backgroundColor: B.white, minHeight: '100vh', fontFamily: F.body, color: B.darkGray }}>
      {/* HERO */}
      <section style={{ ...CONTAINER, padding: '48px 32px 16px' }}>
        <nav aria-label="breadcrumb" style={{ fontFamily: F.body, fontSize: 13, color: B.medGray, marginBottom: 24 }}>
          <Link href={langPrefix || '/'} style={{ color: B.blue, textDecoration: 'none' }}>{ui.breadcrumbHome}</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <Link href={`${langPrefix}/cases`} style={{ color: B.blue, textDecoration: 'none' }}>{ui.breadcrumbCases}</Link>
          <span style={{ margin: '0 8px' }}>›</span>
          <span>{t.title}</span>
        </nav>

        <header style={{ marginBottom: 32 }}>
          <span style={{ display: 'inline-block', fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: B.blue, backgroundColor: B.paleBlue, padding: '4px 12px', borderRadius: 12, marginBottom: 16 }}>
            {t.industryLabel}
          </span>
          <h1 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', color: B.black, margin: 0, marginBottom: 12, lineHeight: 1.2 }}>
            {t.title}
          </h1>
          <p style={{ fontFamily: F.body, fontSize: '1.05rem', color: B.medGray, margin: 0, marginBottom: 16, lineHeight: 1.6, maxWidth: READABLE }}>
            {t.subtitle}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {t.tags.map((tag) => (
              <li key={tag} style={{ fontFamily: F.body, fontSize: 12, color: B.darkGray, backgroundColor: B.lightGray, padding: '4px 12px', borderRadius: 20 }}>
                {tag}
              </li>
            ))}
          </ul>
        </header>
      </section>

      <section style={{ ...CONTAINER, padding: '0 32px 64px' }}>
        <div style={{ aspectRatio: '16/9', width: '100%', borderRadius: 12, overflow: 'hidden', backgroundColor: B.lightGray }}>
          <Hero stripTitle={t.heroStripTitle} stripStats={t.heroStripStats} />
        </div>
      </section>

      {/* VALUE PROPOSITION + NUMBERS */}
      <section style={{ backgroundColor: B.lightGray, padding: '72px 0' }}>
        <div style={CONTAINER}>
          <p style={{ fontFamily: F.body, fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', lineHeight: 1.55, color: B.black, margin: 0, marginBottom: 48, maxWidth: READABLE }}>
            {t.valueLead}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16 }}>
            {t.stats.map((s) => (
              <div key={s.label} style={{ backgroundColor: B.white, borderRadius: 12, padding: '32px 24px', border: '1px solid #E5E7EE' }}>
                <div style={{ fontFamily: F.heading, fontWeight: 700, fontSize: 'clamp(2.4rem, 5vw, 3.2rem)', color: B.blue, lineHeight: 1, marginBottom: 12 }}>
                  {s.n}
                </div>
                <div style={{ fontFamily: F.body, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', color: B.black, marginBottom: 4 }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: F.body, fontSize: 13, color: B.medGray }}>
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section style={{ padding: '88px 0' }}>
        <div style={CONTAINER}>
          <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: B.black, margin: 0, marginBottom: 40, maxWidth: 720 }}>
            {t.deliverHeading}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {t.cards.map((c, i) => (
              <article key={i} style={{ backgroundColor: B.white, border: '1px solid #E5E7EE', borderRadius: 14, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: B.paleBlue, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: F.heading, fontWeight: 700, fontSize: 14, color: B.blue }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: '1.05rem', color: B.black, margin: 0, lineHeight: 1.3 }}>
                  {c.title}
                </h3>
                <p style={{ fontFamily: F.body, fontSize: '0.95rem', color: B.darkGray, lineHeight: 1.65, margin: 0 }}>
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE TALKED TO */}
      <section style={{ backgroundColor: B.lightGray, padding: '72px 0' }}>
        <div style={CONTAINER}>
          <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', color: B.black, margin: 0, marginBottom: 16, maxWidth: 720 }}>
            {t.audienceHeading}
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '1rem', color: B.medGray, lineHeight: 1.65, margin: 0, marginBottom: 32, maxWidth: 720 }}>
            {t.audienceLead}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
            {t.audienceProfiles.map((p) => (
              <div key={p} style={{ backgroundColor: B.white, border: '1px solid #E5E7EE', borderRadius: 10, padding: '20px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: B.blue, flexShrink: 0 }} />
                <span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: B.black }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIELD LEARNINGS */}
      <section style={{ padding: '88px 0' }}>
        <div style={CONTAINER}>
          <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: B.black, margin: 0, marginBottom: 16, maxWidth: 720 }}>
            {t.learningsHeading}
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '1rem', color: B.medGray, lineHeight: 1.65, margin: 0, marginBottom: 40, maxWidth: 720 }}>
            {t.learningsLead}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
            {t.learnings.map((c, i) => (
              <article key={i} style={{ backgroundColor: B.white, border: '1px solid #E5E7EE', borderRadius: 14, padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: '1.05rem', color: B.black, margin: 0, lineHeight: 1.35 }}>
                  {c.title}
                </h3>
                <p style={{ fontFamily: F.body, fontSize: '0.95rem', color: B.darkGray, lineHeight: 1.65, margin: 0 }}>
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH MAP */}
      <section style={{ backgroundColor: B.black, padding: '88px 0', color: B.white }}>
        <div style={CONTAINER}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: B.white, margin: 0, marginBottom: 16, maxWidth: READABLE }}>
              {t.reachHeading}
            </h2>
            <p style={{ fontFamily: F.body, fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, margin: 0, maxWidth: READABLE }}>
              {t.reachLead}
            </p>
          </div>
          <div style={{ backgroundColor: B.white, borderRadius: 16, padding: '32px 24px' }}>
            <WorldMap caption={t.mapCaption} />
          </div>
        </div>
      </section>

      {/* IMPACT + CTA */}
      <section style={{ padding: '88px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: F.body, fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', color: B.black, lineHeight: 1.55, margin: 0, marginBottom: 48 }}>
            {t.impactLead}
          </p>
          <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: B.black, margin: 0, marginBottom: 12, lineHeight: 1.3 }}>
            {t.ctaTitle}
          </h2>
          <p style={{ fontFamily: F.body, fontSize: '1rem', color: B.medGray, margin: 0, marginBottom: 32 }}>
            {t.ctaSub}
          </p>
          <Link href={contactHref} style={{ display: 'inline-block', fontFamily: F.body, fontSize: 15, fontWeight: 600, color: B.white, backgroundColor: B.blue, padding: '16px 36px', borderRadius: 10, textDecoration: 'none' }}>
            {t.ctaBtn}
          </Link>
        </div>
      </section>

      <nav style={{ ...CONTAINER, padding: '0 32px 64px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <Link href={`${langPrefix}/cases`} style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: B.blue, textDecoration: 'none', padding: '12px 20px', border: `1.5px solid ${B.blue}`, borderRadius: 10 }}>
          {ui.backToCases}
        </Link>
        <Link href={langPrefix || '/'} style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: B.darkGray, textDecoration: 'none', padding: '12px 20px', border: '1.5px solid #D9D9D9', borderRadius: 10 }}>
          {ui.backToHome}
        </Link>
      </nav>
    </main>
    </SiteLayout>
  );
}

export default MarketplaceGlobalCasePage;
