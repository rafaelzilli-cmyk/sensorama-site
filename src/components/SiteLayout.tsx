'use client';

import { useState, type ReactNode } from "react";
import { ContactModal } from "./ContactModal";
import { CookieBanner } from "./CookieBanner";
import { CookiePage } from "./CookiePage";
import { ConsentManager } from "./ConsentManager";
import { Navbar, FooterSection, LangCtx, UiCtx, T } from "@/components/LandingPage";
import { type Lang } from "@/lib/constants";

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
