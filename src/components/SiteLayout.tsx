'use client';

import { useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { Navbar, FooterSection, LangCtx, UiCtx, T } from "@/components/LandingPage";
import { type Lang } from "@/lib/constants";

// Overlays carregados sob demanda (client-only) — fora do bundle inicial
const ContactModal = dynamic(() => import("./ContactModal").then((m) => m.ContactModal), { ssr: false, loading: () => null });
const CookieBanner = dynamic(() => import("./CookieBanner").then((m) => m.CookieBanner), { ssr: false });
const CookiePage = dynamic(() => import("./CookiePage").then((m) => m.CookiePage), { ssr: false });
const ConsentManager = dynamic(() => import("./ConsentManager").then((m) => m.ConsentManager), { ssr: false });

type Props = {
  lang: Lang;
  langUrls?: Record<Lang, string>;
  sectionHrefPrefix?: string;
  children: ReactNode;
};

export function SiteLayout({ lang, langUrls, sectionHrefPrefix, children }: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [cookiePageOpen, setCookiePageOpen] = useState(false);
  const t = T[lang];

  return (
    <LangCtx.Provider value={t}>
      <UiCtx.Provider value={{ openModal: () => setModalOpen(true), openCookiePage: () => setCookiePageOpen(true) }}>
        <div style={{ backgroundColor: "#FFFFFF" }}>
          <Navbar lang={lang} langUrls={langUrls} sectionHrefPrefix={sectionHrefPrefix} />
          <div style={{ paddingTop: 64 }}>{children}</div>
          <FooterSection />
        </div>
        <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} lang={lang} />
        <CookieBanner lang={lang} onOpenPolicy={() => setCookiePageOpen(true)} />
        <CookiePage open={cookiePageOpen} onClose={() => setCookiePageOpen(false)} lang={lang} />
        <ConsentManager lang={lang} />
      </UiCtx.Provider>
    </LangCtx.Provider>
  );
}
