import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import caseImgJJ from "figma:asset/da59ea234c191defbdb472128fb395b2ccb3f2fc.png";
import caseImgNubank from "figma:asset/d3f43c455c059ce18aca2465f103f01f0271b2cf.png";
import { CASES, UI, BASE_URL, casesPath, casePath, langPath, type Industry, type Lang } from "../data/cases";
import { SiteLayout } from "../components/SiteLayout";

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
  contactCenter: "#0A0F2C",
};

function ContactCenterThumb() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#0A0F2C", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <svg viewBox="0 0 400 225" width="100%" height="100%" role="img" aria-label="Contact Center journey map" style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <defs>
          <linearGradient id="ccThumbArrow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BFF" />
            <stop offset="100%" stopColor="#43E58E" />
          </linearGradient>
        </defs>
        {[0,1,2,3,4,5,6,7].map((i) => (
          <g key={i} transform={`translate(${28 + i * 45}, 95)`}>
            <rect x="0" y="0" width="34" height="34" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
            <circle cx="17" cy="17" r="5" fill={i % 3 === 0 ? "#43E58E" : "#2F5BFF"} />
          </g>
        ))}
        <line x1="28" y1="112" x2="395" y2="112" stroke="url(#ccThumbArrow)" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
        <text x="28" y="55" fontFamily="'Unbounded', sans-serif" fontSize="13" fontWeight="700" fill="#FFFFFF">8 Critical Journeys</text>
        <text x="28" y="75" fontFamily="'Open Sans', sans-serif" fontSize="10" fill="rgba(255,255,255,0.6)">100+ inefficiency points</text>
      </svg>
    </div>
  );
}

function BranchResearchThumb() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#0A0F2C", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <svg viewBox="0 0 400 225" width="100%" height="100%" role="img" aria-label="Bank branch ethnographic research" style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <defs>
          <linearGradient id="brThumbLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BFF" />
            <stop offset="100%" stopColor="#43E58E" />
          </linearGradient>
        </defs>
        <text x="20" y="40" fontFamily="'Unbounded', sans-serif" fontSize="13" fontWeight="700" fill="#FFFFFF">Branch Research</text>
        <text x="20" y="58" fontFamily="'Open Sans', sans-serif" fontSize="10" fill="rgba(255,255,255,0.6)">36 opportunities · 60+ audience</text>
        {/* Branch */}
        <g transform="translate(20, 90)">
          <rect x="0" y="20" width="110" height="90" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
          <rect x="0" y="20" width="110" height="14" fill="rgba(47,91,255,0.4)" />
          <rect x="46" y="80" width="18" height="30" fill="rgba(67,229,142,0.3)" stroke="#43E58E" strokeWidth="1" />
          <rect x="10" y="44" width="20" height="20" fill="rgba(255,255,255,0.1)" />
          <rect x="36" y="44" width="20" height="20" fill="rgba(255,255,255,0.1)" />
          <rect x="62" y="44" width="20" height="20" fill="rgba(255,255,255,0.1)" />
          <rect x="88" y="44" width="20" height="20" fill="rgba(255,255,255,0.1)" />
        </g>
        {/* Queue */}
        <g transform="translate(160, 130)">
          {[0,1,2,3,4].map((i) => (
            <g key={i} transform={`translate(${i * 42}, 0)`}>
              <circle cx="10" cy="0" r="8" fill={i === 2 ? "#43E58E" : "rgba(255,255,255,0.85)"} />
              <rect x="3" y="10" width="14" height="28" rx="3" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
              {i % 2 === 0 && <line x1="20" y1="14" x2="22" y2="40" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />}
            </g>
          ))}
          <line x1="-5" y1="50" x2="220" y2="50" stroke="url(#brThumbLine)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

function MarketplaceExpansionThumb() {
  const markets = [
    { code: "ZA", x: 50, color: "#43E58E" },
    { code: "KR", x: 175, color: "#2F5BFF" },
    { code: "TR", x: 300, color: "#FFB84D" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#0A0F2C", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <svg viewBox="0 0 400 225" width="100%" height="100%" role="img" aria-label="International B2B marketplace expansion" style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <defs>
          <linearGradient id="mpThumbLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BFF" />
            <stop offset="100%" stopColor="#43E58E" />
          </linearGradient>
        </defs>
        <text x="20" y="40" fontFamily="'Unbounded', sans-serif" fontSize="13" fontWeight="700" fill="#FFFFFF">B2B Marketplace Expansion</text>
        <text x="20" y="58" fontFamily="'Open Sans', sans-serif" fontSize="10" fill="rgba(255,255,255,0.6)">3 markets · 39 opportunities</text>
        <line x1="70" y1="130" x2="345" y2="130" stroke="url(#mpThumbLine)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
        {markets.map((m) => (
          <g key={m.code} transform={`translate(${m.x}, 95)`}>
            <circle cx="35" cy="35" r="28" fill="rgba(255,255,255,0.06)" stroke={m.color} strokeWidth="1.4" />
            <text x="35" y="40" textAnchor="middle" fontFamily="'Unbounded', sans-serif" fontSize="14" fontWeight="700" fill="#FFFFFF">{m.code}</text>
          </g>
        ))}
        <g transform="translate(20, 190)">
          {[0,1,2,3,4,5,6].map((i) => (
            <g key={i} transform={`translate(${i * 52}, 0)`}>
              <rect x="0" y="0" width="36" height="22" rx="2" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
              <rect x="0" y="0" width="36" height="5" fill="rgba(47,91,255,0.35)" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function CaseThumb({ visual, alt }: { visual: string; alt: string }) {
  if (visual === "contactCenter") {
    return <ContactCenterThumb />;
  }
  if (visual === "branchResearch") {
    return <BranchResearchThumb />;
  }
  if (visual === "marketplaceExpansion") {
    return <MarketplaceExpansionThumb />;
  }
  if (visual === "jj") {
    return <img src={caseImgJJ} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />;
  }
  if (visual === "nubank") {
    return <img src={caseImgNubank} alt={alt} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />;
  }
  // bees and itau: graphic placeholder until real images are added
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: visualBg[visual] ?? B.lightGray }}>
      <span style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "1.5rem", color: B.blue, letterSpacing: "0.05em" }}>
        {alt.split(" — ")[0]}
      </span>
    </div>
  );
}

type Filter = "all" | Industry;

export function CasesListingPage({ lang }: { lang: Lang }) {
  const ui = UI[lang];
  const [filter, setFilter] = useState<Filter>("all");

  const publicCases = useMemo(() => CASES.filter((c) => !c.hidden), []);

  const visibleCases = useMemo(
    () => (filter === "all" ? publicCases : publicCases.filter((c) => c.industry === filter)),
    [filter, publicCases]
  );

  const industries: Filter[] = ["all", ...Array.from(new Set(publicCases.map((c) => c.industry)))];

  const canonical = `${BASE_URL}${casesPath(lang)}`;

  const langUrls: Record<Lang, string> = {
    pt: "/cases",
    en: "/en/cases",
    es: "/es/cases",
  };
  const homeHref = lang === "pt" ? "/" : `/${lang}/`;

  return (
    <SiteLayout lang={lang} langUrls={langUrls} sectionHrefPrefix={homeHref}>
    <div style={{ backgroundColor: B.white, minHeight: "100vh", fontFamily: F.body, color: B.darkGray }}>
      <Helmet>
        <html lang={lang === "pt" ? "pt-BR" : lang} />
        <title>{ui.metaListingTitle}</title>
        <meta name="description" content={ui.metaListingDesc} />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="pt-BR" href={`${BASE_URL}/cases`} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}/en/cases`} />
        <link rel="alternate" hrefLang="es" href={`${BASE_URL}/es/cases`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/cases`} />
        <meta property="og:title" content={ui.metaListingTitle} />
        <meta property="og:description" content={ui.metaListingDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <section style={{ padding: "64px 32px 32px", maxWidth: 1152, margin: "0 auto" }}>
          <nav aria-label="breadcrumb" style={{ fontFamily: F.body, fontSize: 13, color: B.medGray, marginBottom: 24 }}>
            <Link to={langPath[lang] || "/"} style={{ color: B.blue, textDecoration: "none" }}>{ui.breadcrumbHome}</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span>{ui.breadcrumbCases}</span>
          </nav>
          <h1 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: B.black, margin: 0, marginBottom: 16 }}>
            {ui.listingTitle}
          </h1>
          <p style={{ fontFamily: F.body, fontSize: "1.05rem", color: B.medGray, maxWidth: 720, margin: 0 }}>
            {ui.listingSubtitle}
          </p>
        </section>

        <section style={{ padding: "0 32px 32px", maxWidth: 1152, margin: "0 auto" }}>
          <div role="tablist" aria-label="Industry filter" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {industries.map((ind) => {
              const active = filter === ind;
              const label = ind === "all" ? ui.filterAll : ui.filterLabels[ind];
              return (
                <button
                  key={ind}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(ind)}
                  style={{
                    fontFamily: F.body,
                    fontSize: 13,
                    padding: "8px 16px",
                    borderRadius: 20,
                    border: active ? "none" : `1px solid #D9D9D9`,
                    backgroundColor: active ? B.blue : "transparent",
                    color: active ? B.white : B.darkGray,
                    cursor: "pointer",
                    transition: "all 0.18s",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </section>

        <section style={{ padding: "16px 32px 96px", maxWidth: 1152, margin: "0 auto" }}>
          <div
            className="cases-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 32,
            }}
          >
            {visibleCases.map((c) => {
              const cc = c.content[lang];
              return (
                <article
                  key={c.slug}
                  data-industry={c.industry}
                  style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    backgroundColor: B.white,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                    border: "1px solid #F0F0F0",
                    transition: "transform 0.18s, box-shadow 0.18s",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(0,0,0,0.10)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)";
                  }}
                >
                  <Link to={casePath(lang, c.slug)} style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", height: "100%" }}>
                    <div style={{ aspectRatio: "16/9", width: "100%", overflow: "hidden", backgroundColor: B.lightGray }}>
                      <CaseThumb visual={c.visual} alt={cc.title} />
                    </div>
                    <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                      <span style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: B.blue, backgroundColor: "#E8ECFF", padding: "4px 10px", borderRadius: 12, alignSelf: "flex-start" }}>
                        {cc.industryLabel}
                      </span>
                      <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "1.15rem", color: B.black, margin: 0, lineHeight: 1.3 }}>
                        {cc.title}
                      </h2>
                      <p style={{ fontFamily: F.body, fontSize: 14, color: B.medGray, margin: 0, lineHeight: 1.55, flex: 1 }}>
                        {cc.shortDescription}
                      </p>
                      <span style={{ fontFamily: F.body, fontSize: 13, fontWeight: 600, color: B.blue, marginTop: 4 }}>
                        {ui.seeCase} →
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </div>
    </SiteLayout>
  );
}

export default CasesListingPage;
