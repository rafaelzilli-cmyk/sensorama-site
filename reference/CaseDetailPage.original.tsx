import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router";
import caseImgJJ from "figma:asset/da59ea234c191defbdb472128fb395b2ccb3f2fc.png";
import caseImgNubank from "figma:asset/d3f43c455c059ce18aca2465f103f01f0271b2cf.png";
import { getCaseBySlug, UI, BASE_URL, casesPath, casePath, langPath, type Lang } from "../data/cases";
import { SiteLayout } from "../components/SiteLayout";
import { MarketplaceGlobalCasePage, MARKETPLACE_GLOBAL_SLUG } from "./MarketplaceGlobalCasePage";

const F = { heading: "'Unbounded', sans-serif", body: "'Open Sans', sans-serif" };
const B = {
  blue: "#2F5BFF", green: "#43E58E", black: "#000000",
  medGray: "#6B6B6B", darkGray: "#2A2A2A", lightGray: "#F5F5F5", white: "#FFFFFF",
};

const visualBg: Record<string, string> = {
  jj: "#E8F0FF",
  nubank: "#F3E8FF",
  bees: "#FFF5E8",
  itau: "#FFEDED",
};

function ContactCenterHero() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#0A0F2C", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
      <svg viewBox="0 0 800 450" width="100%" height="100%" role="img" aria-label="Contact Center healthcare journey mapping and process optimization" style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <defs>
          <linearGradient id="ccHeroArrow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BFF" />
            <stop offset="100%" stopColor="#43E58E" />
          </linearGradient>
        </defs>
        <text x="60" y="80" fontFamily="'Unbounded', sans-serif" fontSize="28" fontWeight="700" fill="#FFFFFF">Contact Center Journey</text>
        <text x="60" y="110" fontFamily="'Open Sans', sans-serif" fontSize="16" fill="rgba(255,255,255,0.65)">8 critical journeys · 100+ inefficiency points mapped</text>
        {[0,1,2,3,4,5,6,7].map((i) => (
          <g key={i} transform={`translate(${60 + i * 90}, 200)`}>
            <rect x="0" y="0" width="70" height="70" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
            <circle cx="35" cy="30" r="9" fill={i % 3 === 0 ? "#43E58E" : "#2F5BFF"} />
            <text x="35" y="60" textAnchor="middle" fontFamily="'Open Sans', sans-serif" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.7)">J{i + 1}</text>
          </g>
        ))}
        <line x1="60" y1="235" x2="780" y2="235" stroke="url(#ccHeroArrow)" strokeWidth="2.5" strokeDasharray="6 6" opacity="0.6" />
        <g transform="translate(60, 330)">
          {[
            { label: "Risk Reduction", color: "#FF6B6B" },
            { label: "Operational Efficiency", color: "#43E58E" },
            { label: "Automation", color: "#2F5BFF" },
          ].map((tag, i) => (
            <g key={tag.label} transform={`translate(${i * 210}, 0)`}>
              <rect x="0" y="0" width="195" height="40" rx="20" fill="rgba(255,255,255,0.06)" stroke={tag.color} strokeWidth="1.5" />
              <circle cx="22" cy="20" r="6" fill={tag.color} />
              <text x="40" y="25" fontFamily="'Open Sans', sans-serif" fontSize="14" fontWeight="600" fill="#FFFFFF">{tag.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function BranchResearchHero() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#0A0F2C", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
      <svg viewBox="0 0 800 450" width="100%" height="100%" role="img" aria-label="Bank branch accessibility research for elderly customers" style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <defs>
          <linearGradient id="brHeroLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BFF" />
            <stop offset="100%" stopColor="#43E58E" />
          </linearGradient>
        </defs>
        <text x="60" y="80" fontFamily="'Unbounded', sans-serif" fontSize="26" fontWeight="700" fill="#FFFFFF">Bank Branch Ethnographic Research</text>
        <text x="60" y="108" fontFamily="'Open Sans', sans-serif" fontSize="15" fill="rgba(255,255,255,0.65)">15+ branches · 60+ audience · 36 opportunities mapped</text>

        {/* Building / branch silhouette */}
        <g transform="translate(60, 160)">
          <rect x="0" y="40" width="220" height="160" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <rect x="0" y="40" width="220" height="22" fill="rgba(47,91,255,0.35)" />
          <text x="110" y="56" textAnchor="middle" fontFamily="'Open Sans', sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF" letterSpacing="0.15em">BRANCH</text>
          {/* Doors */}
          <rect x="92" y="150" width="36" height="50" fill="rgba(67,229,142,0.25)" stroke="#43E58E" strokeWidth="1.2" />
          {/* Windows */}
          <rect x="18" y="80" width="40" height="40" fill="rgba(255,255,255,0.1)" />
          <rect x="68" y="80" width="40" height="40" fill="rgba(255,255,255,0.1)" />
          <rect x="118" y="80" width="40" height="40" fill="rgba(255,255,255,0.1)" />
          <rect x="168" y="80" width="40" height="40" fill="rgba(255,255,255,0.1)" />
          {/* Accessibility ramp */}
          <polygon points="0,200 -28,212 0,212" fill="rgba(67,229,142,0.4)" stroke="#43E58E" strokeWidth="1.2" />
        </g>

        {/* Queue of people 60+ */}
        <g transform="translate(320, 230)">
          {[0,1,2,3,4,5].map((i) => (
            <g key={i} transform={`translate(${i * 50}, 0)`}>
              <circle cx="15" cy="0" r="11" fill={i === 2 ? "#43E58E" : "rgba(255,255,255,0.85)"} />
              <rect x="6" y="14" width="18" height="40" rx="4" fill={i === 2 ? "rgba(67,229,142,0.3)" : "rgba(255,255,255,0.18)"} stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
              {/* Cane */}
              {i % 2 === 0 && <line x1="28" y1="20" x2="32" y2="58" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />}
            </g>
          ))}
          <line x1="0" y1="68" x2="320" y2="68" stroke="url(#brHeroLine)" strokeWidth="2" strokeDasharray="5 5" opacity="0.6" />
          <text x="0" y="88" fontFamily="'Open Sans', sans-serif" fontSize="11" fill="rgba(255,255,255,0.55)">Pre-opening queue · benefit payment day</text>
        </g>

        {/* Dimension tags */}
        <g transform="translate(60, 380)">
          {[
            { label: "Accessibility", color: "#43E58E" },
            { label: "Communication", color: "#2F5BFF" },
            { label: "Queue Management", color: "#FFB84D" },
            { label: "60+ Support", color: "#FF6B6B" },
          ].map((tag, i) => (
            <g key={tag.label} transform={`translate(${i * 175}, 0)`}>
              <rect x="0" y="0" width="160" height="34" rx="17" fill="rgba(255,255,255,0.06)" stroke={tag.color} strokeWidth="1.3" />
              <circle cx="18" cy="17" r="5" fill={tag.color} />
              <text x="32" y="22" fontFamily="'Open Sans', sans-serif" fontSize="12" fontWeight="600" fill="#FFFFFF">{tag.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function MarketplaceExpansionHero() {
  const markets = [
    { code: "ZA", label: "South Africa", x: 90, color: "#43E58E" },
    { code: "KR", label: "South Korea", x: 360, color: "#2F5BFF" },
    { code: "TR", label: "Turkey", x: 630, color: "#FFB84D" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#0A0F2C", display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
      <svg viewBox="0 0 800 450" width="100%" height="100%" role="img" aria-label="International B2B marketplace expansion research in emerging markets" style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <defs>
          <linearGradient id="mpHeroLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BFF" />
            <stop offset="100%" stopColor="#43E58E" />
          </linearGradient>
        </defs>
        <text x="60" y="80" fontFamily="'Unbounded', sans-serif" fontSize="26" fontWeight="700" fill="#FFFFFF">International B2B Marketplace Expansion</text>
        <text x="60" y="108" fontFamily="'Open Sans', sans-serif" fontSize="15" fill="rgba(255,255,255,0.65)">3 emerging markets · 30+ establishments · 39 opportunities</text>

        {/* Connecting line */}
        <line x1="120" y1="250" x2="680" y2="250" stroke="url(#mpHeroLine)" strokeWidth="2" strokeDasharray="6 6" opacity="0.5" />

        {markets.map((m) => (
          <g key={m.code} transform={`translate(${m.x}, 180)`}>
            <circle cx="60" cy="70" r="48" fill="rgba(255,255,255,0.06)" stroke={m.color} strokeWidth="1.8" />
            <text x="60" y="62" textAnchor="middle" fontFamily="'Unbounded', sans-serif" fontSize="22" fontWeight="700" fill="#FFFFFF">{m.code}</text>
            <text x="60" y="84" textAnchor="middle" fontFamily="'Open Sans', sans-serif" fontSize="10" fill="rgba(255,255,255,0.65)">{m.label}</text>
            <circle cx="60" cy="70" r="6" fill={m.color} opacity="0.85" transform="translate(46, -56)" />
          </g>
        ))}

        {/* Store icons row */}
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

function CaseHero({ visual, alt }: { visual: string; alt: string }) {
  if (visual === "contactCenter") {
    return <ContactCenterHero />;
  }
  if (visual === "branchResearch") {
    return <BranchResearchHero />;
  }
  if (visual === "marketplaceExpansion") {
    return <MarketplaceExpansionHero />;
  }
  if (visual === "jj") {
    return <img src={caseImgJJ} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />;
  }
  if (visual === "nubank") {
    return <img src={caseImgNubank} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />;
  }
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: visualBg[visual] ?? B.lightGray }}>
      <span style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: B.blue, letterSpacing: "0.05em" }}>
        {alt.split(" — ")[0]}
      </span>
    </div>
  );
}

export function CaseDetailPage({ lang }: { lang: Lang }) {
  const { slug = "" } = useParams<{ slug: string }>();
  const ui = UI[lang];
  const record = getCaseBySlug(slug);

  if (!record) {
    return <Navigate to={casesPath(lang)} replace />;
  }

  if (record.slug === MARKETPLACE_GLOBAL_SLUG) {
    return <MarketplaceGlobalCasePage lang={lang} />;
  }

  const cc = record.content[lang];
  const canonical = `${BASE_URL}${casePath(lang, record.slug)}`;
  const contactHref = `${langPath[lang] || "/"}#contact`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": cc.title,
    "description": cc.shortDescription,
    "inLanguage": lang === "pt" ? "pt-BR" : lang,
    "author": { "@type": "Organization", "name": "Sensorama Design" },
    "publisher": { "@type": "Organization", "name": "Sensorama Design", "url": BASE_URL },
    "mainEntityOfPage": canonical,
  };

  const langUrls: Record<Lang, string> = {
    pt: casePath("pt", record.slug),
    en: casePath("en", record.slug),
    es: casePath("es", record.slug),
  };
  const homeHref = lang === "pt" ? "/" : `/${lang}/`;

  return (
    <SiteLayout lang={lang} langUrls={langUrls} sectionHrefPrefix={homeHref}>
    <div style={{ backgroundColor: B.white, minHeight: "100vh", fontFamily: F.body, color: B.darkGray }}>
      <Helmet>
        <html lang={lang === "pt" ? "pt-BR" : lang} />
        <title>{cc.title} | Cases | Sensorama Design</title>
        <meta name="description" content={cc.shortDescription} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="pt-BR" href={`${BASE_URL}${casePath("pt", record.slug)}`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}${casePath("en", record.slug)}`} />
        <link rel="alternate" hrefLang="es" href={`${BASE_URL}${casePath("es", record.slug)}`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${casePath("pt", record.slug)}`} />
        <meta property="og:title" content={cc.title} />
        <meta property="og:description" content={cc.shortDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <main>
        <section style={{ padding: "48px 32px 16px", maxWidth: 800, margin: "0 auto" }}>
          <nav aria-label="breadcrumb" style={{ fontFamily: F.body, fontSize: 13, color: B.medGray, marginBottom: 24 }}>
            <Link to={langPath[lang] || "/"} style={{ color: B.blue, textDecoration: "none" }}>{ui.breadcrumbHome}</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <Link to={casesPath(lang)} style={{ color: B.blue, textDecoration: "none" }}>{ui.breadcrumbCases}</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span>{cc.title}</span>
          </nav>

          <header style={{ marginBottom: 32 }}>
            <span style={{ display: "inline-block", fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: B.blue, backgroundColor: "#E8ECFF", padding: "4px 12px", borderRadius: 12, marginBottom: 16 }}>
              {cc.industryLabel}
            </span>
            <h1 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.8rem, 4vw, 2.75rem)", color: B.black, margin: 0, marginBottom: 12, lineHeight: 1.2 }}>
              {cc.title}
            </h1>
            <p style={{ fontFamily: F.body, fontSize: "1rem", color: B.medGray, margin: 0, marginBottom: 16 }}>
              {cc.subtitle}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cc.tags.map((tag) => (
                <li key={tag} style={{ fontFamily: F.body, fontSize: 12, color: B.darkGray, backgroundColor: B.lightGray, padding: "4px 12px", borderRadius: 20 }}>
                  {tag}
                </li>
              ))}
            </ul>
          </header>
        </section>

        <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 48px" }}>
          <div style={{ aspectRatio: "16/9", width: "100%", borderRadius: 12, overflow: "hidden", backgroundColor: B.lightGray }}>
            <CaseHero visual={record.visual} alt={record.heroAlt} />
          </div>
        </section>

        <article style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px 64px" }}>
          {cc.sections.map((s) => (
            <section key={s.heading} style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)", color: B.black, margin: 0, marginBottom: 16 }}>
                {s.heading}
              </h2>
              <p style={{ fontFamily: F.body, fontSize: "1rem", color: B.darkGray, lineHeight: 1.75, margin: 0, whiteSpace: "pre-line" }}>
                {s.body}
              </p>
            </section>
          ))}
        </article>

        <nav style={{ maxWidth: 800, margin: "0 auto", padding: "0 32px 48px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <Link to={casesPath(lang)} style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: B.blue, textDecoration: "none", padding: "12px 20px", border: `1.5px solid ${B.blue}`, borderRadius: 10 }}>
            {ui.backToCases}
          </Link>
          <Link to={langPath[lang] || "/"} style={{ fontFamily: F.body, fontSize: 14, fontWeight: 600, color: B.darkGray, textDecoration: "none", padding: "12px 20px", border: `1.5px solid #D9D9D9`, borderRadius: 10 }}>
            {ui.backToHome}
          </Link>
        </nav>

        <section style={{ backgroundColor: B.black, padding: "64px 32px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: B.white, margin: 0, marginBottom: 24 }}>
              {ui.ctaTitle}
            </h2>
            <a href={contactHref} style={{ display: "inline-block", fontFamily: F.body, fontSize: 15, fontWeight: 600, color: B.white, backgroundColor: B.blue, padding: "14px 32px", borderRadius: 10, textDecoration: "none" }}>
              {ui.ctaButton}
            </a>
          </div>
        </section>
      </main>
    </div>
    </SiteLayout>
  );
}

export default CaseDetailPage;
