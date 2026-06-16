'use client';

import { useState, useEffect } from "react";
import { getCookiePrefs, applyConsentScripts } from "./CookieBanner";
import { CookiePage } from "./CookiePage";
import { type Lang } from "@/lib/constants";

const labels: Record<Lang, string> = {
  en: "Cookie settings",
  pt: "Gerenciar cookies",
  es: "Gestionar cookies",
};

const Clr = { white: "#FFFFFF", black: "#000000", green: "#43E58E" };

interface ConsentManagerProps {
  lang: Lang;
}

/**
 * ConsentManager
 * - Applies saved consent scripts on mount + listens for consent changes
 * - Shows a floating "Manage cookies" button (only when consent has already been given)
 * - Renders the CookiePage preference center modal
 */
export function ConsentManager({ lang }: ConsentManagerProps) {
  const [open, setOpen] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  // Apply scripts on mount and listen for changes
  useEffect(() => {
    const apply = () => {
      const prefs = getCookiePrefs();
      if (prefs) {
        applyConsentScripts(prefs);
        setHasConsent(true);
      } else {
        setHasConsent(false);
      }
    };

    apply();

    // Listen for consent changes (from banner / preference center)
    window.addEventListener("sensorama-consent-changed", apply);
    window.addEventListener("storage", apply);

    return () => {
      window.removeEventListener("sensorama-consent-changed", apply);
      window.removeEventListener("storage", apply);
    };
  }, []);

  return (
    <>
      {/* Floating button — only shown after consent has been given */}
      {hasConsent && (
        <button
          onClick={() => setOpen(true)}
          aria-label={labels[lang]}
          title={labels[lang]}
          style={{
            position: "fixed",
            bottom: 24,
            left: 24,
            zIndex: 990,
            width: 44,
            height: 44,
            borderRadius: "50%",
            backgroundColor: "#111111",
            border: "1px solid rgba(255,255,255,0.15)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            transition: "transform 0.15s, box-shadow 0.15s",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.4)"; }}
        >
          {/* Cookie icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={Clr.green} strokeWidth={1.8} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </button>
      )}

      {/* Preference center modal */}
      <CookiePage open={open} onClose={() => setOpen(false)} lang={lang} />
    </>
  );
}
