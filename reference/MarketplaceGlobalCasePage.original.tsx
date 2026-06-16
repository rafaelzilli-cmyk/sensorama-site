import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { UI, BASE_URL, casesPath, casePath, langPath, type Lang } from "../data/cases";
import { SiteLayout } from "../components/SiteLayout";

const F = { heading: "'Unbounded', sans-serif", body: "'Open Sans', sans-serif" };
const B = {
  blue: "#2F5BFF", green: "#43E58E", black: "#000000",
  medGray: "#6B6B6B", darkGray: "#2A2A2A", lightGray: "#F5F5F5", white: "#FFFFFF",
  paleBlue: "#E8ECFF",
};

const SLUG = "marketplace-b2b-expansao-internacional";

type Card = { title: string; body: string };

const T = {
  pt: {
    industryLabel: "BENS DE CONSUMO (FMCG)",
    tags: ["Pesquisa Global", "Pesquisa de Campo", "Marketplace B2B"],
    title: "Pesquisa de campo em bens de consumo, no mundo todo",
    subtitle: "Fomos a campo em 13 países, em 5 continentes, para entender como o pequeno e médio varejo de bens de consumo realmente compra, opera e decide. O que aprendemos virou oportunidade de produto e de negócio para um marketplace B2B.",
    heroStripTitle: "Pesquisa de campo global",
    heroStripStats: "13 países · 5 continentes · 60+ estabelecimentos",
    valueLead: "Dashboards mostram o que acontece. A pesquisa de campo mostra por quê. A Sensorama vai até o ponto de venda real, no mundo todo, e devolve para a empresa as decisões que fazem o negócio crescer: para onde expandir, o que construir e onde estão as oportunidades.",
    stats: [
      { n: "13", label: "PAÍSES", desc: "pesquisados" },
      { n: "5", label: "CONTINENTES", desc: "alcançados" },
      { n: "60+", label: "ESTABELECIMENTOS", desc: "ouvidos em campo" },
      { n: "50+", label: "OPORTUNIDADES", desc: "de negócio entregues" },
    ],
    deliverHeading: "O que entregamos para o seu negócio",
    cards: [
      { title: "Decisões de expansão com segurança", body: "Reduza o risco de entrar em novos mercados. O roadmap passa a se apoiar em evidência real de comportamento, não em suposição." },
      { title: "Oportunidades de negócio priorizadas", body: "Entregamos oportunidades concretas de produto e receita, já ranqueadas por impacto e viabilidade, prontas para decisão." },
      { title: "Produto que o mercado adota", body: "Quando entendemos como o varejo realmente compra e opera, o produto adere ao comportamento e a adoção cresce." },
      { title: "Visão comparativa entre mercados", body: "Saiba onde investir primeiro e como adaptar a oferta a cada país, cultura e nível de maturidade do mercado." },
      { title: "Alcance que poucos têm", body: "Chegamos ao seu usuário onde ele estiver: capitais, periferias, comércio informal ou mercados maduros." },
    ] as Card[],
    audienceHeading: "Conversamos com quem move o varejo",
    audienceLead: "Não falamos com planilhas. Sentamos com as pessoas que decidem o que entra e o que sai da prateleira, no contexto real de cada mercado.",
    audienceProfiles: ["Donos de mercado", "Gerentes de loja", "Atacadistas", "Representantes de vendas"],
    learningsHeading: "O que aprendemos em campo",
    learningsLead: "Pesquisar o mundo todo revela padrões que se repetem onde quer que o varejo de bens de consumo opere. Quatro aprendizados que mudaram decisões:",
    learnings: [
      { title: "O comércio tradicional é infraestrutura, não resíduo.", body: "Em mercados emergentes, o varejo informal e de bairro é a espinha dorsal do consumo. Tratá-lo como hub comunitário muda a forma de dimensionar a oportunidade." },
      { title: "Estar online significa coisas diferentes em cada mercado.", body: "Para muitos comerciantes, online quer dizer mensagem, ligação ou aplicativo de conversa, não uma plataforma de pedidos. Isso redefine as premissas de adoção." },
      { title: "A relação humana faz parte da compra.", body: "Atacadistas e representantes de vendas seguem influenciando a decisão. A oportunidade não está em substituir essa relação, e sim em integrá-la ao digital." },
      { title: "As dores se concentram em etapas específicas.", body: "Olhando a jornada de planejamento, pedido e entrega, fica claro que as fricções não se distribuem por igual. Isso permite priorizar oportunidades por impacto real." },
    ] as Card[],
    reachHeading: "Onde o seu cliente estiver, a gente chega",
    reachLead: "Não importa o país, a cultura ou o nível de maturidade do mercado. Conduzimos pesquisa presencial onde o comportamento acontece.",
    mapCaption: "Países onde a Sensorama conduziu pesquisa presencial",
    impactLead: "Cada pesquisa devolve para a empresa o que mais importa: clareza para decidir e oportunidades para crescer, ancoradas no comportamento real do mercado.",
    ctaTitle: "Quer entender o seu cliente em qualquer lugar do mundo?",
    ctaSub: "Conduzimos pesquisa presencial onde o comportamento acontece.",
    ctaBtn: "Vamos conversar",
    metaDesc: "Pesquisa de campo em 13 países e 5 continentes para um marketplace B2B de bens de consumo: decisões de expansão, oportunidades de negócio e produto adotado pelo mercado.",
  },
  en: {
    industryLabel: "CONSUMER GOODS (FMCG)",
    tags: ["Global Research", "Field Research", "B2B Marketplace"],
    title: "Field research in consumer goods, around the world",
    subtitle: "We went into the field in 13 countries, across 5 continents, to understand how small and mid-sized consumer goods retail actually buys, operates and decides. What we learned became product and business opportunity for a B2B marketplace.",
    heroStripTitle: "Global field research",
    heroStripStats: "13 countries · 5 continents · 60+ establishments",
    valueLead: "Dashboards show what happens. Field research shows why. Sensorama goes to the real point of sale, anywhere in the world, and hands back to the business the decisions that make it grow: where to expand, what to build and where the opportunities are.",
    stats: [
      { n: "13", label: "COUNTRIES", desc: "researched" },
      { n: "5", label: "CONTINENTS", desc: "reached" },
      { n: "60+", label: "ESTABLISHMENTS", desc: "heard in the field" },
      { n: "50+", label: "OPPORTUNITIES", desc: "delivered to the business" },
    ],
    deliverHeading: "What we deliver to your business",
    cards: [
      { title: "Expansion decisions with confidence", body: "Reduce the risk of entering new markets. The roadmap rests on real behavioral evidence, not on assumption." },
      { title: "Prioritized business opportunities", body: "We deliver concrete product and revenue opportunities, already ranked by impact and feasibility, ready for decision." },
      { title: "Product the market actually adopts", body: "When we understand how retail truly buys and operates, the product fits behavior and adoption grows." },
      { title: "A comparative view across markets", body: "Know where to invest first and how to adapt the offer to each country, culture and level of market maturity." },
      { title: "Reach few others have", body: "We get to your user wherever they are: capitals, peripheries, informal trade or mature markets." },
    ] as Card[],
    audienceHeading: "We talk to the people who move retail",
    audienceLead: "We do not talk to spreadsheets. We sit down with the people who decide what goes on and off the shelf, in the real context of each market.",
    audienceProfiles: ["Store owners", "Store managers", "Wholesalers", "Sales reps"],
    learningsHeading: "What we learned in the field",
    learningsLead: "Researching the whole world reveals patterns that repeat wherever consumer goods retail operates. Four learnings that changed decisions:",
    learnings: [
      { title: "Traditional trade is infrastructure, not residue.", body: "In emerging markets, informal and neighborhood retail is the backbone of consumption. Treating it as a community hub changes how the opportunity is sized." },
      { title: "Being online means different things in each market.", body: "For many merchants, online means a message, a call or a chat app, not an ordering platform. That redefines the assumptions around adoption." },
      { title: "Human relationships are part of the purchase.", body: "Wholesalers and sales reps still influence the decision. The opportunity is not to replace that relationship, but to integrate it into the digital." },
      { title: "Pain points concentrate in specific stages.", body: "Looking at the planning, ordering and delivery journey, it becomes clear that friction is not evenly distributed. That allows prioritizing opportunities by real impact." },
    ] as Card[],
    reachHeading: "Wherever your customer is, we get there",
    reachLead: "No matter the country, the culture or the level of market maturity. We conduct in-person research where behavior actually happens.",
    mapCaption: "Countries where Sensorama has conducted in-person research",
    impactLead: "Every study returns to the business what matters most: clarity to decide and opportunities to grow, anchored in real market behavior.",
    ctaTitle: "Want to understand your customer anywhere in the world?",
    ctaSub: "We conduct in-person research where behavior actually happens.",
    ctaBtn: "Let's talk",
    metaDesc: "Field research across 13 countries and 5 continents for a B2B consumer goods marketplace: expansion decisions, business opportunities and product adopted by the market.",
  },
  es: {
    industryLabel: "BIENES DE CONSUMO (FMCG)",
    tags: ["Investigación Global", "Investigación de Campo", "Marketplace B2B"],
    title: "Investigación de campo en bienes de consumo, en todo el mundo",
    subtitle: "Fuimos a campo en 13 países, en 5 continentes, para entender cómo el pequeño y mediano retail de bienes de consumo realmente compra, opera y decide. Lo que aprendimos se convirtió en oportunidad de producto y de negocio para un marketplace B2B.",
    heroStripTitle: "Investigación de campo global",
    heroStripStats: "13 países · 5 continentes · 60+ establecimientos",
    valueLead: "Los dashboards muestran qué ocurre. La investigación de campo muestra por qué. Sensorama va hasta el punto de venta real, en todo el mundo, y devuelve al negocio las decisiones que lo hacen crecer: hacia dónde expandirse, qué construir y dónde están las oportunidades.",
    stats: [
      { n: "13", label: "PAÍSES", desc: "investigados" },
      { n: "5", label: "CONTINENTES", desc: "alcanzados" },
      { n: "60+", label: "ESTABLECIMIENTOS", desc: "escuchados en campo" },
      { n: "50+", label: "OPORTUNIDADES", desc: "de negocio entregadas" },
    ],
    deliverHeading: "Lo que entregamos a su negocio",
    cards: [
      { title: "Decisiones de expansión con seguridad", body: "Reduzca el riesgo de entrar en nuevos mercados. El roadmap se apoya en evidencia real de comportamiento, no en suposición." },
      { title: "Oportunidades de negocio priorizadas", body: "Entregamos oportunidades concretas de producto e ingresos, ya rankeadas por impacto y viabilidad, listas para decisión." },
      { title: "Producto que el mercado adopta", body: "Cuando entendemos cómo el retail realmente compra y opera, el producto se ajusta al comportamiento y la adopción crece." },
      { title: "Visión comparativa entre mercados", body: "Sepa dónde invertir primero y cómo adaptar la oferta a cada país, cultura y nivel de madurez del mercado." },
      { title: "Alcance que pocos tienen", body: "Llegamos a su usuario donde sea que esté: capitales, periferias, comercio informal o mercados maduros." },
    ] as Card[],
    audienceHeading: "Hablamos con quienes mueven el retail",
    audienceLead: "No hablamos con planillas. Nos sentamos con las personas que deciden qué entra y qué sale del estante, en el contexto real de cada mercado.",
    audienceProfiles: ["Dueños de tienda", "Gerentes de tienda", "Mayoristas", "Representantes de ventas"],
    learningsHeading: "Lo que aprendimos en campo",
    learningsLead: "Investigar al mundo entero revela patrones que se repiten donde sea que opere el retail de bienes de consumo. Cuatro aprendizajes que cambiaron decisiones:",
    learnings: [
      { title: "El comercio tradicional es infraestructura, no residuo.", body: "En mercados emergentes, el retail informal y de barrio es la columna vertebral del consumo. Tratarlo como hub comunitario cambia la forma de dimensionar la oportunidad." },
      { title: "Estar online significa cosas distintas en cada mercado.", body: "Para muchos comerciantes, online quiere decir mensaje, llamada o aplicación de chat, no una plataforma de pedidos. Eso redefine las premisas de adopción." },
      { title: "La relación humana es parte de la compra.", body: "Mayoristas y representantes de ventas siguen influyendo en la decisión. La oportunidad no está en sustituir esa relación, sino en integrarla a lo digital." },
      { title: "Las fricciones se concentran en etapas específicas.", body: "Mirando el viaje de planificación, pedido y entrega, queda claro que las fricciones no se distribuyen por igual. Eso permite priorizar oportunidades por impacto real." },
    ] as Card[],
    reachHeading: "Donde esté su cliente, llegamos",
    reachLead: "No importa el país, la cultura o el nivel de madurez del mercado. Conducimos investigación presencial donde el comportamiento ocurre.",
    mapCaption: "Países donde Sensorama condujo investigación presencial",
    impactLead: "Cada investigación devuelve al negocio lo que más importa: claridad para decidir y oportunidades para crecer, ancladas en el comportamiento real del mercado.",
    ctaTitle: "¿Quiere entender a su cliente en cualquier lugar del mundo?",
    ctaSub: "Conducimos investigación presencial donde el comportamiento ocurre.",
    ctaBtn: "Hablemos",
    metaDesc: "Investigación de campo en 13 países y 5 continentes para un marketplace B2B de bienes de consumo: decisiones de expansión, oportunidades de negocio y producto adoptado por el mercado.",
  },
} as const;

/* ─── World map with 13 highlighted countries ────────────────── */

const COUNTRIES: { code: string; lat: number; lon: number }[] = [
  { code: "BR", lat: -10, lon: -55 },
  { code: "PE", lat: -10, lon: -76 },
  { code: "CO", lat: 4, lon: -74 },
  { code: "US", lat: 39, lon: -98 },
  { code: "DO", lat: 19, lon: -70 },
  { code: "ZA", lat: -29, lon: 24 },
  { code: "BW", lat: -22, lon: 24 },
  { code: "TR", lat: 39, lon: 35 },
  { code: "KR", lat: 37, lon: 128 },
  { code: "SG", lat: 1, lon: 104 },
  { code: "MY", lat: 4, lon: 102 },
  { code: "VN", lat: 16, lon: 108 },
  { code: "PH", lat: 13, lon: 122 },
];

const MAP_W = 1000;
const MAP_H = 500;
const project = (lat: number, lon: number) => ({
  x: ((lon + 180) / 360) * MAP_W,
  y: ((90 - lat) / 180) * MAP_H,
});

// Simplified continent silhouettes (low-fidelity, recognizable)
const CONTINENT_PATHS = [
  // North America
  "M 130 110 Q 180 80 240 100 L 290 140 L 310 200 L 280 250 L 220 270 L 170 240 L 140 180 Z",
  // Central America / Caribbean
  "M 220 270 L 270 285 L 290 305 L 270 320 L 240 310 Z",
  // South America
  "M 270 320 L 320 320 L 340 360 L 335 420 L 305 460 L 285 440 L 275 390 Z",
  // Europe
  "M 470 140 Q 500 125 540 130 L 555 155 L 540 180 L 500 185 L 475 170 Z",
  // Africa
  "M 480 200 Q 520 200 555 215 L 575 270 L 565 330 L 535 370 L 505 360 L 485 310 L 475 250 Z",
  // Middle East / West Asia (bridge)
  "M 555 165 L 595 175 L 615 200 L 595 220 L 560 215 Z",
  // Asia (main)
  "M 595 130 Q 670 110 760 130 L 820 165 L 830 215 L 800 245 L 740 250 L 680 230 L 620 210 L 600 175 Z",
  // SE Asia / Indonesia
  "M 760 280 L 820 285 L 845 305 L 825 325 L 780 320 L 755 305 Z",
  // Australia
  "M 800 370 Q 840 365 875 380 L 880 410 L 850 425 L 815 420 L 795 400 Z",
];

function WorldMap({ caption }: { caption: string }) {
  return (
    <figure style={{ width: "100%", margin: 0 }}>
      <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} width="100%" height="auto" role="img" aria-label={caption} style={{ display: "block" }}>
        <rect x="0" y="0" width={MAP_W} height={MAP_H} fill="#F7F8FA" />
        {[125, 250, 375].map((y) => (
          <line key={y} x1="0" y1={y} x2={MAP_W} y2={y} stroke="#EEF0F4" strokeWidth="1" />
        ))}
        {CONTINENT_PATHS.map((d, i) => (
          <path key={i} d={d} fill="#E2E5EB" stroke="#D2D6DE" strokeWidth="1" />
        ))}
        {COUNTRIES.map((c) => {
          const { x, y } = project(c.lat, c.lon);
          return (
            <g key={c.code}>
              <circle cx={x} cy={y} r="14" fill={B.blue} opacity="0.18" />
              <circle cx={x} cy={y} r="7" fill={B.blue} stroke={B.white} strokeWidth="2" />
            </g>
          );
        })}
      </svg>
      <figcaption style={{ fontFamily: F.body, fontSize: 12, color: B.medGray, textAlign: "center", marginTop: 12, fontStyle: "italic" }}>
        {caption}
      </figcaption>
    </figure>
  );
}

/* ─── Hero (same look as listing thumbnail, scaled up + i18n strip) ─── */

function Hero({ stripTitle, stripStats }: { stripTitle: string; stripStats: string }) {
  const markets = [
    { code: "13", color: B.green },
    { code: "5", color: B.blue },
    { code: "60+", color: "#FFB84D" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#0A0F2C", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
      <svg viewBox="0 0 800 450" width="100%" height="100%" role="img" aria-label={stripTitle}>
        <defs>
          <linearGradient id="mgHero" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BFF" />
            <stop offset="100%" stopColor="#43E58E" />
          </linearGradient>
        </defs>
        <text x="60" y="80" fontFamily="'Unbounded', sans-serif" fontSize="26" fontWeight="700" fill="#FFFFFF">{stripTitle}</text>
        <text x="60" y="108" fontFamily="'Open Sans', sans-serif" fontSize="15" fill="rgba(255,255,255,0.65)">{stripStats}</text>
        <line x1="120" y1="250" x2="680" y2="250" stroke="url(#mgHero)" strokeWidth="2" strokeDasharray="6 6" opacity="0.5" />
        {markets.map((m, i) => (
          <g key={m.code} transform={`translate(${90 + i * 270}, 180)`}>
            <circle cx="60" cy="70" r="48" fill="rgba(255,255,255,0.06)" stroke={m.color} strokeWidth="1.8" />
            <text x="60" y="78" textAnchor="middle" fontFamily="'Unbounded', sans-serif" fontSize="22" fontWeight="700" fill="#FFFFFF">{m.code}</text>
          </g>
        ))}
        <g transform="translate(60, 360)">
          {[0,1,2,3,4,5,6,7].map((i) => (
            <g key={i} transform={`translate(${i * 92}, 0)`}>
              <rect x="0" y="10" width="62" height="44" rx="3" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
              <rect x="0" y="10" width="62" height="9" fill="rgba(47,91,255,0.35)" />
              <rect x="26" y="32" width="10" height="22" fill="rgba(67,229,142,0.3)" stroke="#43E58E" strokeWidth="0.8" />
              <rect x="6" y="22" width="12" height="8" fill="rgba(255,255,255,0.1)" />
              <rect x="22" y="22" width="12" height="8" fill="rgba(255,255,255,0.1)" />
              <rect x="44" y="22" width="12" height="8" fill="rgba(255,255,255,0.1)" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export function MarketplaceGlobalCasePage({ lang }: { lang: Lang }) {
  const t = T[lang];
  const ui = UI[lang];
  const canonical = `${BASE_URL}${casePath(lang, SLUG)}`;
  const contactHref = `${langPath[lang] || "/"}#contact`;

  const langUrls: Record<Lang, string> = {
    pt: casePath("pt", SLUG),
    en: casePath("en", SLUG),
    es: casePath("es", SLUG),
  };
  const homeHref = lang === "pt" ? "/" : `/${lang}/`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t.title,
    "description": t.metaDesc,
    "inLanguage": lang === "pt" ? "pt-BR" : lang,
    "author": { "@type": "Organization", "name": "Sensorama Design" },
    "publisher": { "@type": "Organization", "name": "Sensorama Design", "url": BASE_URL },
    "mainEntityOfPage": canonical,
  };

  return (
    <SiteLayout lang={lang} langUrls={langUrls} sectionHrefPrefix={homeHref}>
      <div style={{ backgroundColor: B.white, minHeight: "100vh", fontFamily: F.body, color: B.darkGray }}>
        <Helmet>
          <html lang={lang === "pt" ? "pt-BR" : lang} />
          <title>{t.title} | Cases | Sensorama Design</title>
          <meta name="description" content={t.metaDesc} />
          <link rel="canonical" href={canonical} />
          <link rel="alternate" hrefLang="pt-BR" href={`${BASE_URL}${casePath("pt", SLUG)}`} />
          <link rel="alternate" hrefLang="en" href={`${BASE_URL}${casePath("en", SLUG)}`} />
          <link rel="alternate" hrefLang="es" href={`${BASE_URL}${casePath("es", SLUG)}`} />
          <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${casePath("pt", SLUG)}`} />
          <meta property="og:title" content={t.title} />
          <meta property="og:description" content={t.metaDesc} />
          <meta property="og:url" content={canonical} />
          <meta property="og:type" content="article" />
          <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        </Helmet>

        <main>
          {/* HERO */}
          <section style={{ padding: "48px 32px 16px", maxWidth: 800, margin: "0 auto" }}>
            <nav aria-label="breadcrumb" style={{ fontFamily: F.body, fontSize: 13, color: B.medGray, marginBottom: 24 }}>
              <Link to={langPath[lang] || "/"} style={{ color: B.blue, textDecoration: "none" }}>{ui.breadcrumbHome}</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <Link to={casesPath(lang)} style={{ color: B.blue, textDecoration: "none" }}>{ui.breadcrumbCases}</Link>
              <span style={{ margin: "0 8px" }}>›</span>
              <span>{t.title}</span>
            </nav>

            <header style={{ marginBottom: 32 }}>
              <span style={{ display: "inline-block", fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: B.blue, backgroundColor: B.paleBlue, padding: "4px 12px", borderRadius: 12, marginBottom: 16 }}>
                {t.industryLabel}
              </span>
              <h1 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.75rem)", color: B.black, margin: 0, marginBottom: 12, lineHeight: 1.2 }}>
                {t.title}
              </h1>
              <p style={{ fontFamily: F.body, fontSize: "1.05rem", color: B.medGray, margin: 0, marginBottom: 16, lineHeight: 1.6 }}>
                {t.subtitle}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {t.tags.map((tag) => (
                  <li key={tag} style={{ fontFamily: F.body, fontSize: 12, color: B.darkGray, backgroundColor: B.lightGray, padding: "4px 12px", borderRadius: 20 }}>
                    {tag}
                  </li>
                ))}
              </ul>
            </header>
          </section>

          <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 64px" }}>
            <div style={{ aspectRatio: "16/9", width: "100%", borderRadius: 12, overflow: "hidden", backgroundColor: B.lightGray }}>
              <Hero stripTitle={t.heroStripTitle} stripStats={t.heroStripStats} />
            </div>
          </section>

          {/* VALUE PROPOSITION + NUMBERS */}
          <section style={{ backgroundColor: B.lightGray, padding: "72px 32px" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
              <p style={{ fontFamily: F.body, fontSize: "clamp(1.15rem, 2vw, 1.4rem)", lineHeight: 1.55, color: B.black, margin: 0, marginBottom: 48, maxWidth: 820 }}>
                {t.valueLead}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                {t.stats.map((s) => (
                  <div key={s.label} style={{ backgroundColor: B.white, borderRadius: 12, padding: "32px 24px", border: `1px solid #E5E7EE` }}>
                    <div style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(2.4rem, 5vw, 3.2rem)", color: B.blue, lineHeight: 1, marginBottom: 12 }}>
                      {s.n}
                    </div>
                    <div style={{ fontFamily: F.body, fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: B.black, marginBottom: 4 }}>
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
          <section style={{ padding: "88px 32px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: B.black, margin: 0, marginBottom: 40, maxWidth: 720 }}>
                {t.deliverHeading}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
                {t.cards.map((c, i) => (
                  <article key={i} style={{ backgroundColor: B.white, border: `1px solid #E5E7EE`, borderRadius: 14, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: B.paleBlue, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: F.heading, fontWeight: 700, fontSize: 14, color: B.blue }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "1.05rem", color: B.black, margin: 0, lineHeight: 1.3 }}>
                      {c.title}
                    </h3>
                    <p style={{ fontFamily: F.body, fontSize: "0.95rem", color: B.darkGray, lineHeight: 1.65, margin: 0 }}>
                      {c.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* WHO WE TALKED TO */}
          <section style={{ backgroundColor: B.lightGray, padding: "72px 32px" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
              <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)", color: B.black, margin: 0, marginBottom: 16, maxWidth: 720 }}>
                {t.audienceHeading}
              </h2>
              <p style={{ fontFamily: F.body, fontSize: "1rem", color: B.medGray, lineHeight: 1.65, margin: 0, marginBottom: 32, maxWidth: 720 }}>
                {t.audienceLead}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
                {t.audienceProfiles.map((p) => (
                  <div key={p} style={{ backgroundColor: B.white, border: `1px solid #E5E7EE`, borderRadius: 10, padding: "20px 18px", display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: B.blue, flexShrink: 0 }} />
                    <span style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: B.black }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FIELD LEARNINGS */}
          <section style={{ padding: "88px 32px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: B.black, margin: 0, marginBottom: 16, maxWidth: 720 }}>
                {t.learningsHeading}
              </h2>
              <p style={{ fontFamily: F.body, fontSize: "1rem", color: B.medGray, lineHeight: 1.65, margin: 0, marginBottom: 40, maxWidth: 720 }}>
                {t.learningsLead}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
                {t.learnings.map((c, i) => (
                  <article key={i} style={{ backgroundColor: B.white, border: `1px solid #E5E7EE`, borderRadius: 14, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
                    <h3 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "1.05rem", color: B.black, margin: 0, lineHeight: 1.35 }}>
                      {c.title}
                    </h3>
                    <p style={{ fontFamily: F.body, fontSize: "0.95rem", color: B.darkGray, lineHeight: 1.65, margin: 0 }}>
                      {c.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* GLOBAL REACH MAP */}
          <section style={{ backgroundColor: B.black, padding: "88px 32px", color: B.white }}>
            <div style={{ maxWidth: 1100, margin: "0 auto", marginBottom: 40 }}>
              <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: B.white, margin: 0, marginBottom: 16, maxWidth: 720 }}>
                {t.reachHeading}
              </h2>
              <p style={{ fontFamily: F.body, fontSize: "1.05rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.65, margin: 0, maxWidth: 720 }}>
                {t.reachLead}
              </p>
            </div>
            <div style={{ maxWidth: 1400, margin: "0 auto", backgroundColor: B.white, borderRadius: 16, padding: "32px 24px" }}>
              <WorldMap caption={t.mapCaption} />
            </div>
          </section>

          {/* IMPACT + CTA */}
          <section style={{ padding: "88px 32px" }}>
            <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontFamily: F.body, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: B.black, lineHeight: 1.55, margin: 0, marginBottom: 48 }}>
                {t.impactLead}
              </p>
              <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 1.85rem)", color: B.black, margin: 0, marginBottom: 12, lineHeight: 1.3 }}>
                {t.ctaTitle}
              </h2>
              <p style={{ fontFamily: F.body, fontSize: "1rem", color: B.medGray, margin: 0, marginBottom: 32 }}>
                {t.ctaSub}
              </p>
              <a href={contactHref} style={{ display: "inline-block", fontFamily: F.body, fontSize: 15, fontWeight: 600, color: B.white, backgroundColor: B.blue, padding: "16px 36px", borderRadius: 10, textDecoration: "none" }}>
                {t.ctaBtn}
              </a>
            </div>
          </section>

          <nav style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px 64px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
            <Link to={casesPath(lang)} style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: B.blue, textDecoration: "none", padding: "12px 20px", border: `1.5px solid ${B.blue}`, borderRadius: 10 }}>
              {ui.backToCases}
            </Link>
            <Link to={langPath[lang] || "/"} style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: B.darkGray, textDecoration: "none", padding: "12px 20px", border: `1.5px solid #D9D9D9`, borderRadius: 10 }}>
              {ui.backToHome}
            </Link>
          </nav>
        </main>
      </div>
    </SiteLayout>
  );
}

export default MarketplaceGlobalCasePage;
export { SLUG as MARKETPLACE_GLOBAL_SLUG };
