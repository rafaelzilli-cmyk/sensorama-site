import { useState, useEffect } from "react";

/* ═══════════════════════════════════════════════════════════════
   CONSENT TYPES & STORAGE
═══════════════════════════════════════════════════════════════ */
export const COOKIE_KEY = "sensorama_cookie_consent";
export const COOKIE_VERSION = "2"; // bump to re-prompt after policy changes

export interface CookiePrefs {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  version: string;
  timestamp: number;
}

export function getCookiePrefs(): CookiePrefs | null {
  try {
    const v = localStorage.getItem(COOKIE_KEY);
    if (!v) return null;
    const parsed = JSON.parse(v) as CookiePrefs;
    // Re-prompt if policy version changed
    if (parsed.version !== COOKIE_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveCookiePrefs(p: Omit<CookiePrefs, "version" | "timestamp">) {
  const full: CookiePrefs = {
    ...p,
    version: COOKIE_VERSION,
    timestamp: Date.now(),
  };
  localStorage.setItem(COOKIE_KEY, JSON.stringify(full));
  // Notify other components via storage event (cross-tab)
  window.dispatchEvent(new Event("sensorama-consent-changed"));
  applyConsentScripts(full);
}

/* ═══════════════════════════════════════════════════════════════
   SCRIPT BLOCKING — called on every consent update
   Replace placeholder IDs/URLs with real script sources when live.
═══════════════════════════════════════════════════════════════ */
export function applyConsentScripts(prefs: CookiePrefs): void {
  // ── Analytics ─────────────────────────────────────────────
  if (prefs.analytics) {
    // Google Analytics / GTM — load only if not already present
    if (!document.getElementById("sensorama-ga")) {
      // const s = document.createElement("script");
      // s.id = "sensorama-ga";
      // s.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID";
      // s.async = true;
      // document.head.appendChild(s);
      console.info("[Sensorama Consent] Analytics scripts ENABLED.");
    }
  } else {
    document.getElementById("sensorama-ga")?.remove();
    // Clear GA cookies
    document.cookie = "_ga=; Max-Age=0; path=/; domain=." + window.location.hostname;
    document.cookie = "_gid=; Max-Age=0; path=/; domain=." + window.location.hostname;
    console.info("[Sensorama Consent] Analytics scripts BLOCKED.");
  }

  // ── Marketing ─────────────────────────────────────────────
  if (prefs.marketing) {
    // LinkedIn Insight Tag, Meta Pixel, Bing — load only if not present
    if (!document.getElementById("sensorama-li")) {
      // const s = document.createElement("script");
      // s.id = "sensorama-li";
      // s.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
      // document.head.appendChild(s);
      console.info("[Sensorama Consent] Marketing scripts ENABLED.");
    }
  } else {
    document.getElementById("sensorama-li")?.remove();
    document.getElementById("sensorama-meta")?.remove();
    document.getElementById("sensorama-bing")?.remove();
    console.info("[Sensorama Consent] Marketing scripts BLOCKED.");
  }

  // ── Functional ────────────────────────────────────────────
  if (prefs.functional) {
    console.info("[Sensorama Consent] Functional cookies ENABLED.");
  } else {
    console.info("[Sensorama Consent] Functional cookies BLOCKED.");
  }
}

/* ═══════════════════════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════════════════════ */
type Lang = "en" | "pt" | "es";

const Fnt = { body: "'Open Sans', sans-serif", heading: "'Unbounded', sans-serif" };
const Clr = { green: "#43E58E", black: "#000000", white: "#FFFFFF", blue: "#2F5BFF" };

const L: Record<Lang, {
  title: string;
  text: string;
  policy: string;
  accept: string;
  reject: string;
  manage: string;
}> = {
  en: {
    title: "We use cookies to improve your experience",
    text: "We use essential cookies for the website to function and, with your permission, analytics and marketing cookies to improve performance, experience, and content. You can manage your preferences at any time.",
    policy: "Cookie Policy",
    accept: "Accept All",
    reject: "Reject Non-Essential",
    manage: "Manage Preferences",
  },
  pt: {
    title: "Utilizamos cookies para melhorar sua experiência",
    text: "Utilizamos cookies essenciais para o funcionamento do site e, com sua permissão, cookies analíticos e de marketing para melhorar desempenho, experiência e conteúdo. Você pode gerenciar suas preferências a qualquer momento.",
    policy: "Política de Cookies",
    accept: "Aceitar todos",
    reject: "Recusar opcionais",
    manage: "Gerenciar preferências",
  },
  es: {
    title: "Utilizamos cookies para mejorar tu experiencia",
    text: "Utilizamos cookies esenciales para el funcionamiento del sitio y, con tu permiso, cookies analíticas y de marketing para mejorar el rendimiento, la experiencia y el contenido. Puedes gestionar tus preferencias en cualquier momento.",
    policy: "Política de Cookies",
    accept: "Aceptar todos",
    reject: "Rechazar opcionales",
    manage: "Gestionar preferencias",
  },
};

/* ═══════════════════════════════════════════════════════════════
   COOKIE BANNER COMPONENT
═══════════════════════════════════════════════════════════════ */
interface CookieBannerProps {
  lang: Lang;
  onOpenPolicy: () => void;
}

export function CookieBanner({ lang, onOpenPolicy }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);
  const l = L[lang];

  useEffect(() => {
    if (!getCookiePrefs()) setVisible(true);
    else {
      // Apply stored scripts on page load
      const prefs = getCookiePrefs();
      if (prefs) applyConsentScripts(prefs);
    }
  }, []);

  const acceptAll = () => {
    saveCookiePrefs({ necessary: true, functional: true, analytics: true, marketing: true });
    setVisible(false);
  };

  const rejectNonEssential = () => {
    saveCookiePrefs({ necessary: true, functional: false, analytics: false, marketing: false });
    setVisible(false);
  };

  const openManage = () => {
    onOpenPolicy();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 998,
        backgroundColor: "rgba(0,0,0,0.96)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 -8px 40px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{
        maxWidth: 1152,
        margin: "0 auto",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        flexWrap: "wrap",
      }}>
        {/* Text */}
        <p id="cookie-banner-desc" style={{
          fontFamily: Fnt.body, fontSize: 13, color: "rgba(255,255,255,0.65)",
          lineHeight: 1.6, margin: 0, flex: 1, minWidth: 220,
        }}>
          <span id="cookie-banner-title" style={{ fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>{l.title}. </span>
          {l.text}{" "}
          <button
            onClick={openManage}
            style={{ fontFamily: Fnt.body, fontSize: 13, color: Clr.green, background: "none", border: "none", cursor: "pointer", textDecoration: "underline", padding: 0 }}
          >
            {l.policy}
          </button>
        </p>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", flexShrink: 0 }}>
          <button
            onClick={openManage}
            style={{
              fontFamily: Fnt.body, fontSize: 13, color: "rgba(255,255,255,0.55)",
              backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 6, padding: "9px 16px", cursor: "pointer",
            }}
          >{l.manage}</button>
          <button
            onClick={rejectNonEssential}
            style={{
              fontFamily: Fnt.body, fontSize: 13, color: Clr.white,
              backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: 6, padding: "9px 16px", cursor: "pointer",
            }}
          >{l.reject}</button>
          <button
            onClick={acceptAll}
            style={{
              fontFamily: Fnt.body, fontSize: 13, fontWeight: 700, color: Clr.black,
              backgroundColor: Clr.green, border: "none",
              borderRadius: 6, padding: "9px 18px", cursor: "pointer",
            }}
          >{l.accept}</button>
        </div>
      </div>
    </div>
  );
}