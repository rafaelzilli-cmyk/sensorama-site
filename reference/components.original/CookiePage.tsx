import { useState, useEffect } from "react";
import { getCookiePrefs, saveCookiePrefs, type CookiePrefs } from "./CookieBanner";

const Fnt = { heading: "'Unbounded', sans-serif", body: "'Open Sans', sans-serif" };
const Clr = {
  blue: "#2F5BFF", green: "#43E58E", black: "#000000",
  medGray: "#6B6B6B", darkGray: "#2A2A2A", lightGray: "#F5F5F5", white: "#FFFFFF",
};

type Lang = "en" | "pt" | "es";

/* ─── Translations ─────────────────────────────────────────────── */
const L = {
  en: {
    back: "← Back",
    title: "Cookie Preferences",
    subtitle: "Manage how Sensorama Design uses cookies on your device.",
    updated: "Last updated: April 27, 2026",
    alwaysActive: "Always active",
    optional: "Optional",
    categories: [
      {
        key: "necessary" as const,
        name: "Necessary Cookies",
        desc: "Essential for the website to function properly. Enable core features such as security, session management, and accessibility. Cannot be disabled.",
        examples: ["Session management", "Security tokens", "Language preference", "CSRF protection"],
        canDisable: false,
        duration: "Session / 1 year",
        provider: "Sensorama Design",
      },
      {
        key: "functional" as const,
        name: "Functional Cookies",
        desc: "Enable enhanced functionality and personalization, such as remembering your preferences across visits.",
        examples: ["UI preferences", "Form autofill hints", "Contact form state"],
        canDisable: true,
        duration: "1 year",
        provider: "Sensorama Design",
      },
      {
        key: "analytics" as const,
        name: "Analytics Cookies",
        desc: "Help us understand how visitors interact with our website by collecting and reporting information anonymously. Used to improve website performance and experience.",
        examples: ["Google Analytics", "Page views & navigation", "Session duration", "Bounce rate"],
        canDisable: true,
        duration: "Up to 2 years",
        provider: "Google LLC",
      },
      {
        key: "marketing" as const,
        name: "Marketing Cookies",
        desc: "Track browsing activity to serve relevant advertising and measure the effectiveness of marketing campaigns.",
        examples: ["LinkedIn Insight Tag", "Meta Pixel", "Bing UET", "Conversion tracking"],
        canDisable: true,
        duration: "Up to 2 years",
        provider: "LinkedIn / Meta / Microsoft",
      },
    ],
    saveBtn: "Save preferences",
    acceptAll: "Accept all",
    savedMsg: "Preferences saved successfully.",
    rightsTitle: "Your Privacy Rights",
    rights: [
      { title: "Right of Access", desc: "Know what personal data we hold about you." },
      { title: "Right of Correction", desc: "Request correction of inaccurate or incomplete data." },
      { title: "Right to Deletion", desc: "Request deletion of data processed under consent." },
      { title: "Right to Portability", desc: "Receive your data in a structured, machine-readable format." },
      { title: "Right to Object", desc: "Object to processing for direct marketing or legitimate interest." },
      { title: "Right to Revoke Consent", desc: "Withdraw consent at any time without affecting prior processing." },
    ],
    contactTitle: "Privacy Requests",
    contactText: "To exercise your rights or for privacy-related questions, contact our Data Protection Officer:",
    email: "contato@sensoramadesign.com",
    privacyLink: "Privacy Policy",
    cookiePolicyLink: "Cookie Policy",
    viewPolicies: "View our full policies:",
  },

  pt: {
    back: "← Voltar",
    title: "Preferências de Cookies",
    subtitle: "Gerencie como a Sensorama Design utiliza cookies no seu dispositivo.",
    updated: "Última atualização: 27 de abril de 2026",
    alwaysActive: "Sempre ativo",
    optional: "Opcional",
    categories: [
      {
        key: "necessary" as const,
        name: "Cookies Necessários",
        desc: "Essenciais para o funcionamento adequado do site. Habilitam funções básicas como segurança, gerenciamento de sessão e acessibilidade. Não podem ser desativados.",
        examples: ["Gerenciamento de sessão", "Tokens de segurança", "Preferência de idioma", "Proteção CSRF"],
        canDisable: false,
        duration: "Sessão / 1 ano",
        provider: "Sensorama Design",
      },
      {
        key: "functional" as const,
        name: "Cookies Funcionais",
        desc: "Permitem funcionalidades aprimoradas e personalização, como lembrar suas preferências entre visitas.",
        examples: ["Preferências de interface", "Dicas de preenchimento automático", "Estado do formulário de contato"],
        canDisable: true,
        duration: "1 ano",
        provider: "Sensorama Design",
      },
      {
        key: "analytics" as const,
        name: "Cookies Analíticos",
        desc: "Nos ajudam a entender como os visitantes interagem com o site, coletando informações de forma anônima para melhorar o desempenho e a experiência.",
        examples: ["Google Analytics", "Visualizações de página e navegação", "Duração da sessão", "Taxa de rejeição"],
        canDisable: true,
        duration: "Até 2 anos",
        provider: "Google LLC",
      },
      {
        key: "marketing" as const,
        name: "Cookies de Marketing",
        desc: "Rastreiam atividade de navegação para exibir publicidade relevante e medir a eficácia de campanhas de marketing.",
        examples: ["LinkedIn Insight Tag", "Meta Pixel", "Bing UET", "Rastreamento de conversão"],
        canDisable: true,
        duration: "Até 2 anos",
        provider: "LinkedIn / Meta / Microsoft",
      },
    ],
    saveBtn: "Salvar preferências",
    acceptAll: "Aceitar todos",
    savedMsg: "Preferências salvas com sucesso.",
    rightsTitle: "Seus Direitos de Privacidade",
    rights: [
      { title: "Direito de Acesso", desc: "Saber quais dados pessoais mantemos sobre você." },
      { title: "Direito de Correção", desc: "Solicitar a correção de dados imprecisos ou incompletos." },
      { title: "Direito à Eliminação", desc: "Solicitar a exclusão de dados tratados com base no seu consentimento." },
      { title: "Direito à Portabilidade", desc: "Receber seus dados em formato estruturado e legível por máquina." },
      { title: "Direito de Oposição", desc: "Opor-se ao tratamento para marketing direto ou interesse legítimo." },
      { title: "Direito de Revogar o Consentimento", desc: "Retirar seu consentimento a qualquer momento, sem afetar o tratamento anterior." },
    ],
    contactTitle: "Solicitações de Privacidade",
    contactText: "Para exercer seus direitos ou para dúvidas sobre privacidade, entre em contato com nosso Encarregado de Proteção de Dados (DPO):",
    email: "contato@sensoramadesign.com",
    privacyLink: "Política de Privacidade",
    cookiePolicyLink: "Política de Cookies",
    viewPolicies: "Consulte nossas políticas completas:",
  },

  es: {
    back: "← Volver",
    title: "Preferencias de Cookies",
    subtitle: "Gestiona cómo Sensorama Design usa cookies en tu dispositivo.",
    updated: "Última actualización: 27 de abril de 2026",
    alwaysActive: "Siempre activo",
    optional: "Opcional",
    categories: [
      {
        key: "necessary" as const,
        name: "Cookies Necesarias",
        desc: "Esenciales para el correcto funcionamiento del sitio. Activan funciones básicas de seguridad, gestión de sesión y accesibilidad. No se pueden desactivar.",
        examples: ["Gestión de sesión", "Tokens de seguridad", "Preferencia de idioma", "Protección CSRF"],
        canDisable: false,
        duration: "Sesión / 1 año",
        provider: "Sensorama Design",
      },
      {
        key: "functional" as const,
        name: "Cookies Funcionales",
        desc: "Permiten funcionalidades mejoradas y personalización, como recordar tus preferencias entre visitas.",
        examples: ["Preferencias de interfaz", "Sugerencias de autocompletar", "Estado del formulario de contacto"],
        canDisable: true,
        duration: "1 año",
        provider: "Sensorama Design",
      },
      {
        key: "analytics" as const,
        name: "Cookies Analíticas",
        desc: "Nos ayudan a entender cómo los visitantes interactúan con el sitio recopilando información de forma anónima para mejorar el rendimiento y la experiencia.",
        examples: ["Google Analytics", "Vistas de página y navegación", "Duración de sesión", "Tasa de rebote"],
        canDisable: true,
        duration: "Hasta 2 años",
        provider: "Google LLC",
      },
      {
        key: "marketing" as const,
        name: "Cookies de Marketing",
        desc: "Rastrean la actividad de navegación para mostrar publicidad relevante y medir la efectividad de campañas de marketing.",
        examples: ["LinkedIn Insight Tag", "Meta Pixel", "Bing UET", "Seguimiento de conversiones"],
        canDisable: true,
        duration: "Hasta 2 años",
        provider: "LinkedIn / Meta / Microsoft",
      },
    ],
    saveBtn: "Guardar preferencias",
    acceptAll: "Aceptar todos",
    savedMsg: "Preferencias guardadas correctamente.",
    rightsTitle: "Tus Derechos de Privacidad",
    rights: [
      { title: "Derecho de Acceso", desc: "Conocer qué datos personales tenemos sobre ti." },
      { title: "Derecho de Corrección", desc: "Solicitar la corrección de datos inexactos o incompletos." },
      { title: "Derecho de Eliminación", desc: "Solicitar la eliminación de datos tratados con base en tu consentimiento." },
      { title: "Derecho a la Portabilidad", desc: "Recibir tus datos en un formato estructurado y legible por máquina." },
      { title: "Derecho de Oposición", desc: "Oponerte al tratamiento para marketing directo o interés legítimo." },
      { title: "Derecho a Revocar el Consentimiento", desc: "Retirar tu consentimiento en cualquier momento sin afectar el tratamiento previo." },
    ],
    contactTitle: "Solicitudes de Privacidad",
    contactText: "Para ejercer tus derechos o para preguntas sobre privacidad, contacta a nuestro Oficial de Protección de Datos:",
    email: "contato@sensoramadesign.com",
    privacyLink: "Política de Privacidad",
    cookiePolicyLink: "Política de Cookies",
    viewPolicies: "Consulta nuestras políticas completas:",
  },
};

/* ─── Toggle Switch ─────────────────────────────────────────── */
function Toggle({ checked, onChange, disabled, label }: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => !disabled && onChange(!checked)}
      style={{
        width: 48, height: 26, borderRadius: 13, border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        backgroundColor: checked ? Clr.green : "#D1D5DB",
        position: "relative", transition: "background-color 0.2s",
        flexShrink: 0, opacity: disabled ? 0.5 : 1,
        outline: "none",
      }}
      onKeyDown={e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); !disabled && onChange(!checked); } }}
    >
      <span style={{
        position: "absolute", top: 4, left: checked ? 26 : 4,
        width: 18, height: 18, borderRadius: "50%", backgroundColor: Clr.white,
        transition: "left 0.2s", display: "block",
        boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
      }} />
    </button>
  );
}

/* ─── Main CookiePage Component ─────────────────────────────── */
interface CookiePageProps {
  open: boolean;
  onClose: () => void;
  lang: Lang;
}

export function CookiePage({ open, onClose, lang }: CookiePageProps) {
  const l = L[lang];
  const existing = getCookiePrefs();
  const [functional, setFunctional] = useState(existing?.functional ?? false);
  const [analytics, setAnalytics] = useState(existing?.analytics ?? false);
  const [marketing, setMarketing] = useState(existing?.marketing ?? false);
  const [saved, setSaved] = useState(false);

  const langPath = lang === "pt" ? "" : `/${lang}`;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const p = getCookiePrefs();
      setFunctional(p?.functional ?? false);
      setAnalytics(p?.analytics ?? false);
      setMarketing(p?.marketing ?? false);
      setSaved(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Trap focus inside modal
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const savePrefs = () => {
    saveCookiePrefs({ necessary: true, functional, analytics, marketing });
    setSaved(true);
    setTimeout(() => { setSaved(false); onClose(); }, 1800);
  };

  const acceptAll = () => {
    setFunctional(true); setAnalytics(true); setMarketing(true);
    saveCookiePrefs({ necessary: true, functional: true, analytics: true, marketing: true });
    setSaved(true);
    setTimeout(() => { setSaved(false); onClose(); }, 1200);
  };

  if (!open) return null;

  const stateMap: Record<string, boolean> = { functional, analytics, marketing };
  const setterMap: Record<string, (v: boolean) => void> = { functional: setFunctional, analytics: setAnalytics, marketing: setMarketing };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={l.title}
      style={{ position: "fixed", inset: 0, zIndex: 1100, backgroundColor: Clr.white, overflowY: "auto" }}
    >
      {/* Sticky header */}
      <div style={{ backgroundColor: Clr.black, position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            onClick={onClose}
            aria-label="Close cookie preferences"
            style={{ fontFamily: Fnt.body, fontSize: 14, color: "rgba(255,255,255,0.7)", background: "none", border: "none", cursor: "pointer", padding: "4px 0", display: "flex", alignItems: "center", gap: 6 }}
          >
            {l.back}
          </button>
          <span style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "0.8rem", color: Clr.white }}>Sensorama Design</span>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{ width: 32, height: 32, background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 6, cursor: "pointer", color: Clr.white, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 32px 96px" }}>

        {/* Header */}
        <p style={{ fontFamily: Fnt.body, fontSize: 12, color: Clr.medGray, marginBottom: 10 }}>{l.updated}</p>
        <h1 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: Clr.black, lineHeight: 1.2, marginBottom: 12 }}>
          {l.title}
        </h1>
        <p style={{ fontFamily: Fnt.body, color: Clr.medGray, lineHeight: 1.7, marginBottom: 40 }}>
          {l.subtitle}
        </p>

        {/* Quick actions */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
          <button
            onClick={acceptAll}
            style={{ backgroundColor: Clr.green, color: Clr.black, border: "none", borderRadius: 8, padding: "10px 24px", fontFamily: Fnt.body, fontWeight: 700, fontSize: 14, cursor: "pointer" }}
          >{l.acceptAll}</button>
          <button
            onClick={savePrefs}
            style={{ backgroundColor: Clr.blue, color: Clr.white, border: "none", borderRadius: 8, padding: "10px 24px", fontFamily: Fnt.body, fontWeight: 700, fontSize: 14, cursor: "pointer" }}
          >{l.saveBtn}</button>
          {saved && (
            <span style={{ fontFamily: Fnt.body, fontSize: 13, color: "#22A665", display: "flex", alignItems: "center", gap: 6, padding: "10px 0" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
              {l.savedMsg}
            </span>
          )}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #EBEBEB", marginBottom: 40 }} />

        {/* Cookie categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}>
          {l.categories.map((cat) => {
            const isActive = cat.canDisable ? stateMap[cat.key] : true;
            return (
              <div key={cat.name} style={{ borderRadius: 12, border: `1.5px solid ${isActive ? "#DBEAFE" : "#EBEBEB"}`, overflow: "hidden", transition: "border-color 0.2s" }}>
                {/* Card header */}
                <div style={{ backgroundColor: isActive ? "#F0F7FF" : Clr.lightGray, padding: "18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                    <span style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "0.82rem", color: Clr.black }}>{cat.name}</span>
                    <span style={{
                      fontFamily: Fnt.body, fontSize: 11, fontWeight: 600, padding: "2px 10px",
                      borderRadius: 20,
                      backgroundColor: cat.canDisable ? (isActive ? Clr.blue : "#E5E5E5") : Clr.green,
                      color: cat.canDisable ? (isActive ? Clr.white : Clr.medGray) : Clr.black,
                    }}>
                      {cat.canDisable ? (isActive ? l.optional : l.optional) : l.alwaysActive}
                    </span>
                  </div>
                  {cat.canDisable ? (
                    <Toggle
                      checked={stateMap[cat.key]}
                      onChange={setterMap[cat.key]}
                      label={cat.name}
                    />
                  ) : (
                    <Toggle checked={true} onChange={() => {}} disabled label={cat.name} />
                  )}
                </div>
                {/* Card body */}
                <div style={{ padding: "18px 24px", backgroundColor: Clr.white }}>
                  <p style={{ fontFamily: Fnt.body, fontSize: 14, color: Clr.darkGray, lineHeight: 1.75, marginBottom: 14 }}>{cat.desc}</p>
                  <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 12 }}>
                    <span style={{ fontFamily: Fnt.body, fontSize: 12, color: Clr.medGray }}>
                      <strong style={{ color: Clr.darkGray }}>Provider:</strong> {cat.provider}
                    </span>
                    <span style={{ fontFamily: Fnt.body, fontSize: 12, color: Clr.medGray }}>
                      <strong style={{ color: Clr.darkGray }}>Duration:</strong> {cat.duration}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {cat.examples.map((ex) => (
                      <span key={ex} style={{ fontFamily: Fnt.body, fontSize: 12, color: Clr.medGray, backgroundColor: "#F4F4F4", borderRadius: 20, padding: "3px 11px" }}>{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Save button */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 64 }}>
          <button
            onClick={savePrefs}
            style={{ backgroundColor: Clr.blue, color: Clr.white, border: "none", borderRadius: 8, padding: "13px 32px", fontFamily: Fnt.body, fontWeight: 700, fontSize: 14, cursor: "pointer" }}
          >{l.saveBtn}</button>
          {saved && (
            <span style={{ fontFamily: Fnt.body, fontSize: 13, color: "#22A665", display: "flex", alignItems: "center", gap: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
              {l.savedMsg}
            </span>
          )}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #EBEBEB", marginBottom: 40 }} />

        {/* LGPD/GDPR Rights */}
        <h2 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "1rem", color: Clr.black, marginBottom: 20 }}>
          {l.rightsTitle}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
          {l.rights.map((r) => (
            <div key={r.title} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: Clr.blue, flexShrink: 0, marginTop: 8 }} />
              <div>
                <span style={{ fontFamily: Fnt.body, fontWeight: 700, fontSize: 14, color: Clr.black }}>{r.title}: </span>
                <span style={{ fontFamily: Fnt.body, fontSize: 14, color: Clr.darkGray, lineHeight: 1.7 }}>{r.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #EBEBEB", marginBottom: 40 }} />

        {/* Contact */}
        <h2 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "1rem", color: Clr.black, marginBottom: 14 }}>
          {l.contactTitle}
        </h2>
        <p style={{ fontFamily: Fnt.body, color: Clr.darkGray, lineHeight: 1.8, marginBottom: 12 }}>{l.contactText}</p>
        <a href={`mailto:${l.email}`} style={{ fontFamily: Fnt.body, color: Clr.blue, fontWeight: 600, fontSize: 15, display: "block", marginBottom: 32 }}>{l.email}</a>

        {/* Full policy links */}
        <p style={{ fontFamily: Fnt.body, fontSize: 13, color: Clr.medGray, marginBottom: 8 }}>{l.viewPolicies}</p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href={`${langPath}/privacy-policy`} style={{ fontFamily: Fnt.body, fontSize: 13, color: Clr.blue, textDecoration: "underline" }}>{l.privacyLink}</a>
          <a href={`${langPath}/cookie-policy`} style={{ fontFamily: Fnt.body, fontSize: 13, color: Clr.blue, textDecoration: "underline" }}>{l.cookiePolicyLink}</a>
        </div>
      </div>
    </div>
  );
}
