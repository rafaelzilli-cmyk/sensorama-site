'use client';

import { useState, useContext, createContext, useRef } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { BRAND_COLORS as B, FONTS as F, type Lang } from "@/lib/constants";
import { getCaseBySlug } from "@/lib/cases-data";
import { ContactModal } from "@/components/ContactModal";
import { CookieBanner } from "@/components/CookieBanner";
import { CookiePage } from "@/components/CookiePage";
import { ConsentManager } from "@/components/ConsentManager";

export type { Lang };

/* ─── Existing client logos (placeholders — adicionar imagens depois) ─── */
const logoItau      = "/images/logos/itau.png";
const logoUnilever  = "/images/logos/unilever.png";
const logoAbInBev   = "/images/logos/abinbev.png";
const logo99        = "/images/logos/99.png";
const logoNestle    = "/images/logos/nestle.png";
const logoNubank    = "/images/logos/nubank.png";
const logoTotvs     = "/images/logos/totvs.png";
const logoVale      = "/images/logos/vale.png";
const logoMondelez  = "/images/logos/mondelez.png";
const logoRandon    = "/images/logos/randon.png";

/* ─── New client logos ─── */
const logoCogna    = "/images/logos/cogna.png";
const logoEngie    = "/images/logos/engie.png";
const logoThomson  = "/images/logos/thomson-reuters.png";

/* ─── Sensorama brand images ─── */
const imgEye       = "/images/brand/eye.png";
const imgLgpdSeal  = "/images/brand/lgpd-seal.png";
const imgTeam      = "/images/brand/team.png";
const imgWorkshop  = "/images/brand/workshop.png";
const imgWeconnect = "/images/brand/weconnect.png";

/* ─── Case illustrations ─── */
const caseImgJJ     = "/images/cases/jj-thumb.png";
const caseImgNubank = "/images/cases/nubank-thumb.png";
const caseImgBees   = "/images/cases/bees-thumb.png";

/* ─── Injected CSS for marquee ─── */
const GLOBAL_CSS = `
  @keyframes marquee-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track {
    animation: marquee-left 38s linear infinite;
    will-change: transform;
  }
  .marquee-track:hover {
    animation-play-state: paused;
  }
`;

/* ═══════════════════════════════════════════════════════════════
   SENSORAMA LOGO SVG
═══════════════════════════════════════════════════════════════ */
function SensoramaLogo({ height = 32, fill = "#4E67FF" }: { height?: number; fill?: string }) {
  const w = Math.round(height * (1294 / 276));
  return (
    <svg width={w} height={height} viewBox="0 0 1294 276" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sensorama Design logo" role="img">
      <path d="M401.513 141.7C387.313 137.1 381.313 134.4 381.313 125.9C381.313 117.9 389.113 115.1 398.913 115.1C412.913 115.1 420.213 121 420.213 132.8H434.713C434.713 118.3 426.413 103.2 398.913 103.2C378.713 103.2 366.813 112.4 366.813 126.4C366.813 142.4 380.313 147.5 397.013 152.8C411.413 157.2 423.313 159.2 423.313 170.7C423.313 179.7 416.913 182.9 403.313 182.9C386.313 182.9 377.413 175.8 377.413 160.5H362.713C362.713 181.4 374.413 194.7 403.013 194.7C429.413 194.7 437.813 183.3 437.813 170C437.713 151.2 418.913 147.3 401.513 141.7Z" fill={fill}/>
      <path d="M497.514 182.8C475.714 182.8 467.714 168.4 466.814 151.8H536.514V146.1C536.514 119 520.214 103.2 495.314 103.2C470.314 103.2 452.514 119.5 452.514 147.9C452.514 173.3 465.814 194.9 497.414 194.9C525.414 194.9 536.114 175.9 539.414 162.3H524.914C521.814 175.7 512.014 182.8 497.514 182.8ZM495.414 115.4C513.014 115.4 522.414 126.6 522.414 140.8H466.914C466.814 126.6 478.014 115.4 495.414 115.4Z" fill={fill}/>
      <path d="M609.813 103.2C590.613 103.2 579.513 114.4 575.913 130.3H571.813L574.113 120.2V104.9H559.613V193.1H574.113V154.1C574.113 130.3 587.213 115.6 605.913 115.6C621.013 115.6 628.313 122.7 628.313 141.1V193.1H642.713V139.2C642.613 114.7 629.613 103.2 609.813 103.2Z" fill={fill}/>
      <path d="M699.513 141.7C685.313 137.1 679.313 134.4 679.313 125.9C679.313 117.9 687.113 115.1 696.913 115.1C710.913 115.1 718.213 121 718.213 132.8H732.713C732.713 118.3 724.413 103.2 696.913 103.2C676.713 103.2 664.813 112.4 664.813 126.4C664.813 142.4 678.313 147.5 695.013 152.8C709.413 157.2 721.313 159.2 721.313 170.7C721.313 179.7 714.913 182.9 701.313 182.9C684.313 182.9 675.413 175.8 675.413 160.5H660.713C660.713 181.4 672.413 194.7 701.013 194.7C727.413 194.7 735.813 183.3 735.813 170C735.713 151.2 716.913 147.3 699.513 141.7Z" fill={fill}/>
      <path d="M797.313 103.2C769.113 103.2 750.613 123.4 750.613 149C750.613 174.7 769.013 194.9 797.313 194.9C825.313 194.9 843.613 174.7 843.613 149C843.613 123.4 825.313 103.2 797.313 103.2ZM797.313 182.5C776.413 182.5 765.213 167.4 765.213 149C765.213 130.7 776.413 115.7 797.313 115.7C818.113 115.7 829.213 130.8 829.213 149C829.213 167.4 818.013 182.5 797.313 182.5Z" fill={fill}/>
      <path d="M1016.51 143.1C1016.51 119.5 1001.81 103.2 977.114 103.2C952.114 103.2 938.314 119.5 938.314 137.8H952.514C952.514 121.1 964.414 115.4 977.214 115.4C992.514 115.4 1001.11 123.4 1002.01 139.5L966.914 142.9C946.314 145 938.014 154.6 938.014 168.6C938.014 177.8 941.914 194.9 967.414 194.9C988.714 194.9 998.114 182.3 1001.51 168.8H1005.81L1003.51 178V182.8C1003.51 189.4 1007.21 193.1 1014.01 193.1H1029.61V180.7H1016.61V143.1H1016.51ZM969.214 182.5C958.914 182.5 952.514 177 952.514 166.9C952.514 158.2 958.214 154.8 969.414 153.8L1002.01 150.4C1002.01 168.6 989.214 182.5 969.214 182.5Z" fill={fill}/>
      <path d="M1154.71 103.2C1135.91 103.2 1126.71 114 1123.11 130H1120.41C1118.41 114.2 1109.91 103.2 1094.01 103.2C1075.21 103.2 1066.01 114 1062.41 130H1058.31L1060.61 120.1V105H1046.11V193.2H1060.61V154.4C1060.61 131.3 1071.11 115.7 1088.61 115.7C1103.01 115.7 1106.71 124 1106.71 141.1V193.3H1121.21V154.5C1121.21 131.4 1131.71 115.8 1149.21 115.8C1163.61 115.8 1167.31 124.1 1167.31 141.2V193.4H1181.81V137.9C1182.01 117.9 1173.11 103.2 1154.71 103.2Z" fill={fill}/>
      <path d="M1280.61 180.7V143.1C1280.61 119.5 1265.91 103.2 1241.21 103.2C1216.21 103.2 1202.41 119.5 1202.41 137.8H1216.61C1216.61 121.1 1228.51 115.4 1241.31 115.4C1256.61 115.4 1265.21 123.4 1266.11 139.5L1231.01 142.9C1210.41 145 1202.11 154.6 1202.11 168.6C1202.11 177.8 1206.01 194.9 1231.51 194.9C1252.81 194.9 1262.21 182.3 1265.61 168.8H1269.91L1267.61 178V182.8C1267.61 189.4 1271.31 193.1 1278.11 193.1H1293.71V180.7H1280.61ZM1233.31 182.5C1223.01 182.5 1216.61 177 1216.61 166.9C1216.61 158.2 1222.31 154.8 1233.51 153.8L1266.11 150.4C1266.11 168.6 1253.31 182.5 1233.31 182.5Z" fill={fill}/>
      <path d="M880.115 130.3H876.014L878.314 120.2V104.9H863.814V193.1H878.314V154.1C878.314 130.3 891.415 115.6 910.115 115.6C916.515 115.6 921.415 116.9 925.115 119.7L928.115 105.6C924.015 104 919.214 103.2 914.014 103.2C894.814 103.2 883.615 114.3 880.115 130.3Z" fill={fill}/>
      <path d="M251.015 11.9996L241.715 8.09955C215.315 0.999552 50.8148 228.2 24.7148 222.1L33.9148 226C60.1148 232.2 224.515 4.89955 251.015 11.9996Z" fill={fill}/>
      <path d="M232.014 4.09947L222.814 0.199467C207.014 -4.10053 153.514 61.8995 99.3136 122.999C83.9136 102.699 74.9136 94.9995 66.8136 95.3995L56.5136 96.6995C65.8136 95.9995 75.5136 105.799 93.3136 129.899C91.2136 132.299 89.2136 134.599 87.2136 136.899C84.8136 133.699 61.1136 97.3995 46.2136 98.1995L35.9136 99.4995C51.1136 98.2995 76.4136 137.399 81.1136 143.799C79.0136 146.199 77.0136 148.499 75.0136 150.799C64.6136 134.599 40.7136 100.899 26.1136 100.899C26.1136 100.899 19.4136 100.499 13.4136 102.299C-1.88636 106.999 -3.48636 200.699 5.51364 213.499C5.81364 213.899 6.11364 214.199 6.51364 214.399C8.41364 215.299 14.8136 217.999 14.8136 217.999C40.9136 224.399 205.614 -3.00053 232.014 4.09947ZM29.3136 200.299C28.6136 185.599 29.4136 126.099 34.0136 112.899C36.3136 115.299 38.7136 118.099 41.4136 121.399C40.9136 128.399 37.8136 172.099 38.7136 190.999C35.4136 194.499 32.3136 197.599 29.3136 200.299ZM68.7136 157.999C61.4136 166.299 54.5136 174.099 48.2136 180.999C48.2136 177.499 48.7136 140.299 50.4136 132.999C51.1136 133.999 59.5136 145.399 68.7136 157.999ZM20.3136 103.799C22.2136 104.399 24.1136 105.399 26.2136 106.799C20.0136 123.099 17.6136 186.199 20.9136 207.599C18.2136 209.699 15.6136 211.399 13.4136 212.599C13.3136 212.299 13.3136 211.899 13.1136 211.499C7.81364 193.899 8.91364 108.499 20.3136 103.799Z" fill={fill}/>
      <path d="M268.914 19.3993L261.214 16.1993C234.714 8.99934 70.2141 236.199 43.9141 229.999L53.1141 233.899C61.5141 235.899 77.3141 221.099 98.2141 198.099C128.014 238.799 152.814 275.299 166.514 275.099L176.814 273.599C160.814 273.899 130.914 227.299 104.314 191.199C106.314 188.899 108.414 186.599 110.414 184.299C161.314 253.599 173.014 272.599 186.614 272.399L196.914 270.899C183.714 271.199 174.414 255.899 116.514 177.299C118.514 174.999 120.614 172.599 122.714 170.199C184.114 253.399 193.114 268.899 205.814 268.799C209.214 268.799 213.514 268.699 216.014 267.399C237.714 256.399 272.714 46.5993 270.614 22.1993C270.814 20.8993 270.014 19.7993 268.914 19.3993ZM129.014 163.099C142.814 147.299 206.814 75.9993 221.414 59.5993C219.714 72.9993 194.314 200.799 183.114 236.499C181.514 234.199 158.214 202.499 129.014 163.099ZM189.914 245.599C206.414 199.699 229.514 64.8993 232.314 47.5993C236.214 43.3993 239.914 39.4993 243.314 36.0993C241.714 53.6993 212.014 217.999 196.814 253.999C194.714 251.599 192.414 248.799 189.914 245.599ZM209.614 265.299C207.714 264.199 205.614 262.699 203.314 260.599C221.214 229.199 252.214 43.0993 253.014 27.2993C256.514 24.3993 259.714 22.2993 262.614 20.9993C264.014 44.0993 229.114 241.199 209.614 265.299Z" fill={fill}/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════════════════════ */
export const T = {
  en: {
    nav: { links: ["About", "Services", "Cases", "Contact"] },
    hero: {
      label: "Brazilian design and innovation consultancy",
      h1: "From insights to measurable impact powered by UX design and AI",
      sub: "We help organizations make better and faster decisions by combining deep research, strategic design, and AI to solve real problems and drive meaningful change.",
      cta: "Start a conversation",
      badge: "Trusted by Fortune 500 companies worldwide",
      weconnect: "WEConnect International Women-Owned Business certified",
      lgpd: "LGPD Data Guide verified company",
    },
    social: {
      context1: "13+ years focused on research, design, and transformation.",
      context2: "Operating across Brazil, LATAM, United States, and Europe",
    },
    approach: {
      label: "Our Approach",
      text: "Our approach integrates research, design, and transformation through hybrid systems where human expertise and AI agents work together.",
    },
    services: {
      label: "What We Do",
      h2: "Our Services",
      items: [
        {
          title: "Research",
          desc: "When you need clarity to focus on the right problems and move forward with confidence",
          body: ["We uncover what matters through user research, behavioral analysis, and AI-assisted insights.", "Turning complexity into actionable understanding that reveals real problems worth solving."],
          outcome: "Clear understanding of user needs, behaviors, and opportunities that guide strategic decisions",
          methods: ["Precise Recruitment", "User Research", "Ethnographic Studies", "Customer Journey Mapping", "Data Analysis", "AI-assisted Research", "Behavioral Data Modeling"],
        },
        {
          title: "Design",
          desc: "When you need to build or improve products, services, and experiences that actually work",
          body: ["We design products, services, and processes from concept to prototype.", "We combine human creativity and AI to shape experiences, workflows, and systems that are useful, usable, and scalable."],
          outcome: "Tangible solutions that solve real problems and drive measurable business results",
          methods: ["UX Design", "Service Design", "Product Design", "Product Concept", "Product Strategy", "Prototyping", "Usability Testing", "AI Product Design", "Conversational Interfaces", "AI Prototyping", "Workflow & Process Design"],
        },
        {
          title: "Transformation",
          desc: "When you need to scale better decisions, processes, and ways of working across your organization",
          body: ["We drive organizational transformation by embedding innovation, UX maturity, and AI capabilities into ways of working."],
          outcome: "Organizations with strong UX and AI capabilities and empowered teams",
          methods: ["Digital Transformation", "Innovation Workshops", "Team Enablement", "Change Management", "Strategic Planning", "OKR Workshops", "UX Maturity Development", "AI Enablement", "AI Strategy", "Human + AI Workflows"],
        },
      ],
    },
    cases: {
      label: "Selected Work",
      h2: "Case Highlights",
      contextLabel: "Context",
      whatLabel: "What We Did",
      resultsLabel: "Results",
      seeCase: "View full case",
      seeAll: "View all cases",
      items: [
        {
          label: "Financial Services",
          title: "Elderly Customer Service Benchmark in Bank Branches",
          context: "A financial institution needed to deeply understand how leading banks structured in-person service for the elderly customer base on benefit payment days, across different regional contexts.",
          whatWeDid: "Combined deep desk research with ethnographic visits to 15+ branches across multiple regions during benefit payment days. Analyzed accessibility, communication, queue management and full physical journey.",
          results: [{ highlight: "36 improvement opportunities", text: "mapped for the 60+ audience" }, { text: "Comparative benchmark across institutions with 12+ experience criteria" }, { text: "Up to 40% waiting time reduction observed with pre-opening ticket distribution" }],
          visual: "branchResearch",
        },
        {
          label: "Healthcare Operations",
          title: "Strategic Contact Center Diagnosis",
          context: "A healthcare organization needed to improve efficiency, reduce regulatory risk and prioritize automation opportunities across a complex Contact Center operation.",
          whatWeDid: "Mapped 8 critical journeys end-to-end, ran deep qualitative research with 40+ agents, audited tools and systems, and built a prioritized 18-month roadmap of improvements.",
          results: [{ highlight: "100+ inefficiency points", text: "mapped across 8 critical journeys" }, { text: "Projected 40–50% reduction in average handling time" }, { text: "35% reduction in regulatory risk via process standardization" }],
          visual: "contactCenter",
        },
        {
          label: "Consumer Goods",
          title: "Strategic B2B Marketplace Expansion in Emerging Markets",
          context: "A global consumer goods company sought to expand its digital B2B marketplace into new international territories with distinct cultural, economic and operational characteristics.",
          whatWeDid: "Ran deep ethnographic research across South Africa, South Korea and Turkey. Visited 30+ small retailers, corner shops, spaza shops and wholesalers. Mapped purchase behaviors, intermediary roles and digitalization barriers per market.",
          results: [{ highlight: "39 optimization opportunities", text: "identified across 3 emerging markets" }, { text: "30+ establishments visited and documented" }, { text: "Replicable expansion framework for future markets" }],
          visual: "marketplaceExpansion",
        },
      ],
    },
    testimonials: {
      label: "What Clients Say",
      items: [
        { quote: "Sensorama helped us transform complex challenges into clear, actionable solutions. Their human-centered approach made a real difference in how we design and scale our products.", name: "Fernando Melo", role: "Head of Digital Innovation, BEES / AB InBev", initials: "FM" },
        { quote: "The team brought deep expertise in user experience and strategy, helping us improve performance and align our solutions with real user needs.", name: "Theo Vieira", role: "Director of Digital Innovation, Johnson & Johnson Innovative Medicine", initials: "TV" },
        { quote: "Sensorama combines strategic thinking with deep user understanding, helping us make better decisions and deliver more effective digital solutions.", name: "Sergio Lagoa", role: "Director of Digital Innovation, Johnson & Johnson Innovative Medicine", initials: "SL" },
      ],
    },
    about: {
      label: "About Us",
      h2: "Design the present to change the future",
      p1: "Sensorama is a Brazilian women-led innovation consultancy specializing in UX design, research, and AI.",
      p2: "We are a global team with Brazilian roots, working across cultures and bringing together diverse perspectives to solve complex challenges.\n\nWe believe the best solutions come from collaboration, not imposition. That's why we work side by side with our clients, combining deep UX research, strategic design, and AI to create meaningful and lasting change.",
      p3: "",
      p4: "Our strength is not only in what we deliver, but in how we operate.",
      features: [
        { title: "From insight to action", desc: "We turn complexity into clear direction, delivering structured roadmaps that guide real decisions." },
        { title: "Precise Recruitment", desc: "We design recruitment as a strategy, with predefined paths and adaptations, ensuring speed and results." },
        { title: "Built to adapt, designed to deliver", desc: "Senior team, partner-led, with flexible execution and strong outcomes." },
      ],
    },
    cta: {
      label: "Start a conversation",
      h2: "Let's work together?",
      sub: "Ready to turn insights into impact? Talk to our team about your innovation challenges.",
      button: "Start a conversation",
      emailText: "Or email us at",
    },
    footer: {
      tagline: "Make business human again_",
      navLabel: "Pages",
      contactLabel: "Let's talk!",
      navLinks: [{ label: "Home", href: "/en/" }, { label: "Services", href: "#services" }, { label: "Cases", href: "#cases" }, { label: "Contact", href: "#contact" }],
      copyright: "© 2026 Sensorama Design. All rights reserved.",
      manageCookies: "Manage cookies",
      legalLinks: [
        { label: "Privacy Policy", href: "/en/privacy-policy" },
        { label: "Cookie Policy", href: "/en/cookie-policy" },
        { label: "Terms of Use", href: "/en/terms-of-use" },
      ],
      socials: [
        { label: "Instagram", url: "https://www.instagram.com/sensoramadesign/" },
        { label: "LinkedIn", url: "https://www.linkedin.com/company/sensoramadesign/" },
        { label: "Medium", url: "https://inspiredbypeople.medium.com/" },
      ],
    },
  },

  pt: {
    nav: { links: ["Sobre", "Serviços", "Cases", "Contato"] },
    hero: {
      label: "Consultoria brasileira de design e inovação",
      h1: "De insights a impacto mensurável com UX design e inteligência artificial",
      sub: "Ajudamos organizações a tomar melhores e mais rápidas decisões, combinando pesquisa aprofundada, design estratégico e IA para resolver problemas reais.",
      cta: "Comece uma conversa",
      badge: "Confiado por empresas Fortune 500 em todo o mundo",
      weconnect: "Certificado WEConnect International Women-Owned Business",
      lgpd: "Empresa verificada LGPD Data Guide",
    },
    social: {
      context1: "13+ anos focados em pesquisa, design e transformação.",
      context2: "Atuamos no Brasil, LATAM, Estados Unidos e Europa",
    },
    approach: {
      label: "Nossa Abordagem",
      text: "Nossa abordagem integra pesquisa, design e transformação por meio de sistemas híbridos onde a expertise humana e agentes de IA trabalham juntos.",
    },
    services: {
      label: "O Que Fazemos",
      h2: "Nossos Serviços",
      items: [
        {
          title: "Pesquisa",
          desc: "Quando você precisa de clareza para focar nos problemas certos e avançar com confiança",
          body: ["Descobrimos o que importa por meio de pesquisa com usuários, análise comportamental e insights assistidos por IA.", "Transformando complexidade em entendimento acionável que revela problemas reais."],
          outcome: "Compreensão clara das necessidades, comportamentos e oportunidades que guiam decisões estratégicas",
          methods: ["Recrutamento Preciso", "Pesquisa com Usuários", "Estudos Etnográficos", "Mapeamento de Jornada", "Análise de Dados", "Pesquisa Assistida por IA", "Modelagem Comportamental"],
        },
        {
          title: "Design",
          desc: "Quando você precisa construir ou melhorar produtos, serviços e experiências que realmente funcionam",
          body: ["Projetamos produtos, serviços e processos do conceito ao protótipo.", "Combinamos criatividade humana e IA para moldar experiências e sistemas que são úteis, utilizáveis e escaláveis."],
          outcome: "Soluções tangíveis que resolvem problemas reais e geram resultados mensuráveis de negócio",
          methods: ["UX Design", "Design de Serviços", "Design de Produto", "Conceito de Produto", "Estratégia de Produto", "Prototipagem", "Testes de Usabilidade", "Design com IA", "Interfaces Conversacionais", "Prototipagem com IA", "Design de Processos"],
        },
        {
          title: "Transformação",
          desc: "Quando você precisa escalar melhores decisões, processos e formas de trabalho em toda a organização",
          body: ["Impulsionamos a transformação organizacional incorporando inovação, maturidade em UX e capacidades de IA."],
          outcome: "Organizações com fortes capacidades de UX e IA e equipes empoderadas",
          methods: ["Transformação Digital", "Workshops de Inovação", "Capacitação de Equipes", "Gestão de Mudança", "Planejamento Estratégico", "Workshops de OKR", "Maturidade UX", "Habilitação em IA", "Estratégia de IA", "Fluxos Humano + IA"],
        },
      ],
    },
    cases: {
      label: "Trabalhos Selecionados",
      h2: "Cases em Destaque",
      contextLabel: "Contexto",
      whatLabel: "O Que Fizemos",
      resultsLabel: "Resultados",
      seeCase: "Acessar case completo",
      seeAll: "Todos os cases",
      items: [
        {
          label: "Serviços Financeiros",
          title: "Benchmark de Atendimento em Agências Bancárias",
          context: "Uma instituição financeira precisava compreender em profundidade como os principais bancos estruturavam o atendimento ao público aposentado em agências físicas durante dias de pagamento de benefícios, em diferentes contextos regionais.",
          whatWeDid: "Combinamos desk research aprofundado com visitas etnográficas a 15+ agências em múltiplas regiões durante dias de pagamento de benefícios. Analisamos acessibilidade, comunicação, gestão de filas e jornada física completa.",
          results: [{ highlight: "36 oportunidades de melhoria", text: "mapeadas para o público 60+" }, { text: "Benchmark comparativo entre instituições com 12+ critérios de experiência" }, { text: "Redução de até 40% no tempo de espera observada com distribuição antecipada de senhas" }],
          visual: "branchResearch",
        },
        {
          label: "Healthcare Operations",
          title: "Diagnóstico Estratégico de Contact Center",
          context: "Uma organização de healthcare precisava melhorar eficiência, reduzir risco regulatório e priorizar oportunidades de automação em uma operação complexa de Contact Center.",
          whatWeDid: "Mapeamos 8 jornadas críticas ponta a ponta, realizamos pesquisa qualitativa profunda com 40+ agentes, auditamos ferramentas e sistemas, e construímos um roadmap priorizado de 18 meses.",
          results: [{ highlight: "100+ pontos de ineficiência", text: "mapeados em 8 jornadas críticas" }, { text: "Redução projetada de 40–50% no tempo médio de atendimento" }, { text: "35% de redução no risco regulatório por padronização" }],
          visual: "contactCenter",
        },
        {
          label: "Bens de Consumo",
          title: "Expansão Estratégica de Marketplace B2B em Mercados Emergentes",
          context: "Uma empresa global de consumer goods buscava expandir seu marketplace B2B digital para novos territórios internacionais com características culturais, econômicas e operacionais distintas.",
          whatWeDid: "Conduzimos pesquisa etnográfica profunda em África do Sul, Coreia do Sul e Turquia. Visitamos 30+ pequenos mercados, corner shops, spaza shops e atacadistas. Mapeamos comportamentos de compra, papel de intermediários e barreiras à digitalização por mercado.",
          results: [{ highlight: "39 oportunidades de otimização", text: "identificadas em 3 mercados emergentes" }, { text: "30+ estabelecimentos visitados e documentados" }, { text: "Framework de expansão replicável para futuros mercados" }],
          visual: "marketplaceExpansion",
        },
      ],
    },
    testimonials: {
      label: "O Que Nossos Clientes Dizem",
      items: [
        { quote: "A Sensorama nos ajudou a transformar desafios complexos em soluções claras e acionáveis. A abordagem centrada no ser humano fez uma diferença real.", name: "Fernando Melo", role: "Head de Inovação Digital, BEES / AB InBev", initials: "FM" },
        { quote: "A equipe trouxe profunda expertise em experiência do usuário e estratégia, ajudando a melhorar a performance e alinhar nossas soluções com as necessidades reais.", name: "Theo Vieira", role: "Diretor de Inovação Digital, Johnson & Johnson Innovative Medicine", initials: "TV" },
        { quote: "A Sensorama combina pensamento estratégico com profundo entendimento do usuário, nos ajudando a tomar melhores decisões.", name: "Sergio Lagoa", role: "Diretor de Inovação Digital, Johnson & Johnson Innovative Medicine", initials: "SL" },
      ],
    },
    about: {
      label: "Sobre Nós",
      h2: "Design the present to change the future",
      p1: "A Sensorama é uma consultoria brasileira de inovação liderada por mulheres, especializada em UX design, pesquisa e inteligência artificial.",
      p2: "Somos uma equipe global com raízes brasileiras, trabalhando entre culturas e reunindo diferentes perspectivas para resolver desafios complexos.\n\nAcreditamos que as melhores soluções vêm da colaboração, não da imposição. Por isso, trabalhamos lado a lado com nossos clientes, combinando UX research aprofundado, design estratégico e IA para criar mudanças significativas e duradouras.",
      p3: "",
      p4: "Nossa força não está apenas no que entregamos, mas em como operamos.",
      features: [
        { title: "Do insight à ação", desc: "Transformamos complexidade em direção clara, entregando roadmaps estruturados que guiam decisões reais." },
        { title: "Recrutamento Preciso", desc: "Desenhamos o recrutamento como estratégia, garantindo velocidade e resultados." },
        { title: "Feito para adaptar, desenhado para entregar", desc: "Time sênior, liderado por sócias, com execução flexível e resultados sólidos." },
      ],
    },
    cta: {
      label: "Comece uma conversa",
      h2: "Vamos trabalhar juntos?",
      sub: "Pronto para transformar insights em impacto? Fale com nossa equipe sobre seus desafios de inovação.",
      button: "Comece uma conversa",
      emailText: "Ou envie um e-mail para",
    },
    footer: {
      tagline: "Make business human again_",
      navLabel: "Páginas",
      contactLabel: "Fale conosco!",
      navLinks: [{ label: "Início", href: "/" }, { label: "Serviços", href: "#services" }, { label: "Cases", href: "#cases" }, { label: "Contato", href: "#contact" }],
      copyright: "© 2026 Sensorama Design. Todos os direitos reservados.",
      manageCookies: "Gerenciar cookies",
      legalLinks: [
        { label: "Política de Privacidade", href: "/privacy-policy" },
        { label: "Política de Cookies", href: "/cookie-policy" },
        { label: "Termos de Uso", href: "/terms-of-use" },
      ],
      socials: [
        { label: "Instagram", url: "https://www.instagram.com/sensoramadesign/" },
        { label: "LinkedIn", url: "https://www.linkedin.com/company/sensoramadesign/" },
        { label: "Medium", url: "https://inspiredbypeople.medium.com/" },
      ],
    },
  },

  es: {
    nav: { links: ["Sobre Nosotros", "Servicios", "Casos", "Contacto"] },
    hero: {
      label: "Consultoría brasileña de diseño e innovación",
      h1: "De insights a impacto medible con UX design e inteligencia artificial",
      sub: "Ayudamos a las organizaciones a tomar mejores y más rápidas decisiones combinando investigación profunda, diseño estratégico e IA para resolver problemas reales.",
      cta: "Inicia una conversación",
      badge: "De confianza para empresas Fortune 500 en todo el mundo",
      weconnect: "Certificado WEConnect International Women-Owned Business",
      lgpd: "Empresa verificada LGPD Data Guide",
    },
    social: {
      context1: "13+ años enfocados en investigación, diseño y transformación.",
      context2: "Actuamos en Brasil, LATAM, Estados Unidos y Europa",
    },
    approach: {
      label: "Nuestro Enfoque",
      text: "Nuestro enfoque integra investigación, diseño y transformación a través de sistemas híbridos donde la expertise humana y los agentes de IA trabajan juntos.",
    },
    services: {
      label: "Lo Que Hacemos",
      h2: "Nuestros Servicios",
      items: [
        {
          title: "Investigación",
          desc: "Cuando necesitas claridad para enfocarte en los problemas correctos y avanzar con confianza",
          body: ["Descubrimos lo que importa a través de investigación de usuarios, análisis conductual e insights asistidos por IA.", "Convirtiendo complejidad en comprensión accionable que revela problemas reales."],
          outcome: "Comprensión clara de las necesidades, comportamientos y oportunidades que guían decisiones estratégicas",
          methods: ["Reclutamiento Preciso", "Investigación de Usuarios", "Estudios Etnográficos", "Mapeo de Journey", "Análisis de Datos", "Investigación con IA", "Modelado Conductual"],
        },
        {
          title: "Diseño",
          desc: "Cuando necesitas construir o mejorar productos, servicios y experiencias que realmente funcionen",
          body: ["Diseñamos productos, servicios y procesos del concepto al prototipo.", "Combinamos creatividad humana e IA para moldear experiencias y sistemas útiles, usables y escalables."],
          outcome: "Soluciones tangibles que resuelven problemas reales y generan resultados de negocio medibles",
          methods: ["UX Design", "Diseño de Servicios", "Diseño de Producto", "Concepto de Producto", "Estrategia de Producto", "Prototipado", "Pruebas de Usabilidad", "Diseño con IA", "Interfaces Conversacionales", "Prototipado con IA", "Diseño de Procesos"],
        },
        {
          title: "Transformación",
          desc: "Cuando necesitas escalar mejores decisiones, procesos y formas de trabajo en toda tu organización",
          body: ["Impulsamos la transformación organizacional incorporando innovación, madurez en UX y capacidades de IA."],
          outcome: "Organizaciones con sólidas capacidades de UX e IA y equipos empoderados",
          methods: ["Transformación Digital", "Talleres de Innovación", "Capacitación de Equipos", "Gestión del Cambio", "Planificación Estratégica", "Talleres de OKR", "Madurez UX", "Habilitación en IA", "Estrategia de IA", "Flujos Humano + IA"],
        },
      ],
    },
    cases: {
      label: "Trabajos Seleccionados",
      h2: "Casos Destacados",
      contextLabel: "Contexto",
      whatLabel: "Lo Que Hicimos",
      resultsLabel: "Resultados",
      seeCase: "Ver caso completo",
      seeAll: "Ver todos los casos",
      items: [
        {
          label: "Servicios Financieros",
          title: "Benchmark de Atención en Sucursales Bancarias",
          context: "Una institución financiera necesitaba comprender en profundidad cómo los principales bancos estructuraban la atención al público jubilado en sucursales físicas durante días de pago de beneficios, en distintos contextos regionales.",
          whatWeDid: "Combinamos desk research profundo con visitas etnográficas a 15+ sucursales en múltiples regiones durante días de pago de beneficios. Analizamos accesibilidad, comunicación, gestión de filas y jornada física completa.",
          results: [{ highlight: "36 oportunidades de mejora", text: "mapeadas para el público 60+" }, { text: "Benchmark comparativo entre instituciones con 12+ criterios de experiencia" }, { text: "Reducción de hasta 40% en tiempo de espera observada con distribución anticipada de tickets" }],
          visual: "branchResearch",
        },
        {
          label: "Healthcare Operations",
          title: "Diagnóstico Estratégico de Contact Center",
          context: "Una organización de healthcare necesitaba mejorar eficiencia, reducir riesgo regulatorio y priorizar oportunidades de automatización en una operación compleja de Contact Center.",
          whatWeDid: "Mapeamos 8 jornadas críticas de extremo a extremo, realizamos investigación cualitativa profunda con 40+ agentes, auditamos herramientas y sistemas, y construimos un roadmap priorizado de 18 meses.",
          results: [{ highlight: "100+ puntos de ineficiencia", text: "mapeados en 8 jornadas críticas" }, { text: "Reducción proyectada de 40–50% en el tiempo medio de atención" }, { text: "35% de reducción en riesgo regulatorio por estandarización" }],
          visual: "contactCenter",
        },
        {
          label: "Bienes de Consumo",
          title: "Expansión Estratégica de Marketplace B2B en Mercados Emergentes",
          context: "Una empresa global de consumer goods buscaba expandir su marketplace B2B digital a nuevos territorios internacionales con características culturales, económicas y operacionales distintas.",
          whatWeDid: "Realizamos investigación etnográfica profunda en Sudáfrica, Corea del Sur y Turquía. Visitamos 30+ pequeños comercios, corner shops, spaza shops y mayoristas. Mapeamos comportamientos de compra, rol de intermediarios y barreras a la digitalización por mercado.",
          results: [{ highlight: "39 oportunidades de optimización", text: "identificadas en 3 mercados emergentes" }, { text: "30+ establecimientos visitados y documentados" }, { text: "Framework de expansión replicable para futuros mercados" }],
          visual: "marketplaceExpansion",
        },
      ],
    },
    testimonials: {
      label: "Lo Que Dicen Nuestros Clientes",
      items: [
        { quote: "Sensorama nos ayudó a transformar desafíos complejos en soluciones claras y accionables. Su enfoque centrado en el ser humano marcó una diferencia real.", name: "Fernando Melo", role: "Head de Innovación Digital, BEES / AB InBev", initials: "FM" },
        { quote: "El equipo aportó profunda expertise en experiencia de usuario y estrategia, ayudándonos a mejorar el rendimiento y alinear nuestras soluciones.", name: "Theo Vieira", role: "Director de Innovación Digital, Johnson & Johnson Innovative Medicine", initials: "TV" },
        { quote: "Sensorama combina pensamiento estratégico con profundo entendimiento del usuario, ayudándonos a tomar mejores decisiones.", name: "Sergio Lagoa", role: "Director de Innovación Digital, Johnson & Johnson Innovative Medicine", initials: "SL" },
      ],
    },
    about: {
      label: "Sobre Nosotros",
      h2: "Design the present to change the future",
      p1: "Sensorama es una consultoría brasileña de innovación liderada por mujeres, especializada en UX design, investigación e IA.",
      p2: "Somos un equipo global con raíces brasileñas, trabajando entre culturas y reuniendo diferentes perspectivas para resolver desafíos complejos.\n\nCreemos que las mejores soluciones provienen de la colaboración, no de la imposición. Por eso trabajamos codo a codo con nuestros clientes, combinando investigación UX profunda, diseño estratégico e IA para crear cambios significativos y duraderos.",
      p3: "",
      p4: "Nuestra fortaleza no está solo en lo que entregamos, sino en cómo operamos.",
      features: [
        { title: "Del insight a la acción", desc: "Transformamos la complejidad en dirección clara, entregando roadmaps que guían decisiones reales." },
        { title: "Reclutamiento Preciso", desc: "Diseñamos el reclutamiento como estrategia, garantizando velocidad y resultados." },
        { title: "Hecho para adaptarse, diseñado para entregar", desc: "Equipo sénior, liderado por socias, con ejecución flexible y resultados sólidos." },
      ],
    },
    cta: {
      label: "Inicia una conversación",
      h2: "¿Trabajemos juntos?",
      sub: "¿Listo para convertir insights en impacto? Habla con nuestro equipo sobre tus desafíos de innovación.",
      button: "Inicia una conversación",
      emailText: "O escríbenos a",
    },
    footer: {
      tagline: "Make business human again_",
      navLabel: "Páginas",
      contactLabel: "¡Hablemos!",
      navLinks: [{ label: "Inicio", href: "/es/" }, { label: "Servicios", href: "#services" }, { label: "Casos", href: "#cases" }, { label: "Contacto", href: "#contact" }],
      copyright: "© 2026 Sensorama Design. Todos los derechos reservados.",
      manageCookies: "Gestionar cookies",
      legalLinks: [
        { label: "Política de Privacidad", href: "/es/privacy-policy" },
        { label: "Política de Cookies", href: "/es/cookie-policy" },
        { label: "Términos de Uso", href: "/es/terms-of-use" },
      ],
      socials: [
        { label: "Instagram", url: "https://www.instagram.com/sensoramadesign/" },
        { label: "LinkedIn", url: "https://www.linkedin.com/company/sensoramadesign/" },
        { label: "Medium", url: "https://inspiredbypeople.medium.com/" },
      ],
    },
  },
};

/* ═══════════════════════════════════════════════════════════════
   LANGUAGE CONTEXT
═══════════════════════════════════════════════════════════════ */
type TType = typeof T.en;
export const LangCtx = createContext<TType>(T.en);
export function useT() { return useContext(LangCtx); }

/* ═══════════════════════════════════════════════════════════════
   UI CONTEXT  (modal + cookie page openers)
═══════════════════════════════════════════════════════════════ */
interface UiActions { openModal: () => void; openCookiePage: () => void; }
export const UiCtx = createContext<UiActions>({ openModal: () => {}, openCookiePage: () => {} });
export function useUi() { return useContext(UiCtx); }

/* ═══════════════════════════════════════════════════════════════
   SHARED PRIMITIVES
═══════════════════════════════════════════════════════════════ */
function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16, color: light ? "rgba(255,255,255,0.5)" : B.medGray }}>
      {children}
    </p>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div style={{ width: 44, height: 44, borderRadius: "50%", backgroundColor: "rgba(47,91,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ color: B.blue, fontFamily: F.body, fontWeight: 600, fontSize: 13 }}>{initials}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CLIENT LOGOS — carousel data
═══════════════════════════════════════════════════════════════ */
interface LogoItem {
  src: string;
  alt: string;
  whiteBg?: boolean;
}

const CLIENT_LOGOS: LogoItem[] = [
  { src: logoItau,     alt: "Itaú" },
  { src: logoUnilever, alt: "Unilever" },
  { src: logoAbInBev,  alt: "AB InBev" },
  { src: logo99,       alt: "99", whiteBg: true },
  { src: logoNestle,   alt: "Nestlé" },
  { src: logoNubank,   alt: "Nubank" },
  { src: logoTotvs,    alt: "TOTVS" },
  { src: logoVale,     alt: "Vale" },
  { src: logoMondelez, alt: "Mondelēz" },
  { src: logoRandon,   alt: "Randon" },
  { src: logoCogna,    alt: "Cogna" },
  { src: logoEngie,    alt: "Engie" },
  { src: logoThomson,  alt: "Thomson Reuters" },
];

/* ═══════════════════════════════════════════════════════════════
   CASE VISUALS
═══════════════════════════════════════════════════════════════ */
function CaseVisualJJ() {
  return (
    <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", aspectRatio: "16/10", backgroundColor: "#EAE8FF", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <img src={caseImgJJ} alt="Contact Center Operations case study by Sensorama Design" width="400" height="250" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
    </div>
  );
}
function CaseVisualNubank() {
  return (
    <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", aspectRatio: "16/10", backgroundColor: "#000000", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <img src={caseImgNubank} alt="Credit & Financial Experience case study by Sensorama Design" width="400" height="250" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
    </div>
  );
}
function CaseVisualBees() {
  return (
    <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", aspectRatio: "16/10", backgroundColor: "#F5F5F5", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <img src={caseImgBees} alt="Operational UX & Journey case study by Sensorama Design" width="400" height="250" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
    </div>
  );
}
function CaseVisualContactCenter() {
  return (
    <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", aspectRatio: "16/10", backgroundColor: "#0A0F2C", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <svg viewBox="0 0 400 250" width="100%" height="100%" role="img" aria-label="Contact Center journey diagnosis — process map illustration" style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <defs>
          <linearGradient id="ccArrow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BFF" />
            <stop offset="100%" stopColor="#43E58E" />
          </linearGradient>
        </defs>
        {[1,2,3,4,5,6,7,8].map((_, i) => (
          <g key={i} transform={`translate(${30 + i * 45}, 100)`}>
            <rect x="0" y="0" width="34" height="34" rx="6" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
            <circle cx="17" cy="17" r="5" fill={i % 3 === 0 ? "#43E58E" : "#2F5BFF"} />
          </g>
        ))}
        <line x1="30" y1="117" x2="395" y2="117" stroke="url(#ccArrow)" strokeWidth="2" strokeDasharray="4 4" opacity="0.6" />
        <text x="30" y="60" fontFamily="'Unbounded', sans-serif" fontSize="14" fontWeight="700" fill="#FFFFFF">8 Critical Journeys</text>
        <text x="30" y="80" fontFamily="'Open Sans', sans-serif" fontSize="11" fill="rgba(255,255,255,0.6)">100+ inefficiency points mapped</text>
        <g transform="translate(30, 175)">
          {[
            { label: "Risk", color: "#FF6B6B" },
            { label: "Efficiency", color: "#43E58E" },
            { label: "Automation", color: "#2F5BFF" },
          ].map((tag, i) => (
            <g key={tag.label} transform={`translate(${i * 110}, 0)`}>
              <rect x="0" y="0" width="100" height="26" rx="13" fill="rgba(255,255,255,0.06)" stroke={tag.color} strokeWidth="1" />
              <circle cx="14" cy="13" r="4" fill={tag.color} />
              <text x="26" y="17" fontFamily="'Open Sans', sans-serif" fontSize="11" fontWeight="600" fill="#FFFFFF">{tag.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
function CaseVisualBranchResearch() {
  return (
    <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", aspectRatio: "16/10", backgroundColor: "#0A0F2C", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <svg viewBox="0 0 400 250" width="100%" height="100%" role="img" aria-label="Bank branch ethnographic research illustration" style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <defs>
          <linearGradient id="brCardLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BFF" />
            <stop offset="100%" stopColor="#43E58E" />
          </linearGradient>
        </defs>
        <text x="20" y="40" fontFamily="'Unbounded', sans-serif" fontSize="14" fontWeight="700" fill="#FFFFFF">Branch Ethnographic Research</text>
        <text x="20" y="58" fontFamily="'Open Sans', sans-serif" fontSize="11" fill="rgba(255,255,255,0.6)">15+ branches · 60+ audience · 36 opportunities</text>

        <g transform="translate(20, 90)">
          <rect x="0" y="20" width="120" height="100" rx="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" />
          <rect x="0" y="20" width="120" height="16" fill="rgba(47,91,255,0.4)" />
          <text x="60" y="32" textAnchor="middle" fontFamily="'Open Sans', sans-serif" fontSize="9" fontWeight="700" fill="#FFFFFF" letterSpacing="0.15em">BRANCH</text>
          <rect x="50" y="86" width="20" height="34" fill="rgba(67,229,142,0.3)" stroke="#43E58E" strokeWidth="1" />
          <rect x="10" y="48" width="22" height="22" fill="rgba(255,255,255,0.1)" />
          <rect x="38" y="48" width="22" height="22" fill="rgba(255,255,255,0.1)" />
          <rect x="66" y="48" width="22" height="22" fill="rgba(255,255,255,0.1)" />
          <rect x="94" y="48" width="22" height="22" fill="rgba(255,255,255,0.1)" />
          <polygon points="0,120 -16,128 0,128" fill="rgba(67,229,142,0.4)" stroke="#43E58E" strokeWidth="1" />
        </g>

        <g transform="translate(170, 145)">
          {[0,1,2,3,4].map((i) => (
            <g key={i} transform={`translate(${i * 42}, 0)`}>
              <circle cx="10" cy="0" r="8" fill={i === 2 ? "#43E58E" : "rgba(255,255,255,0.85)"} />
              <rect x="3" y="10" width="14" height="28" rx="3" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" />
              {i % 2 === 0 && <line x1="20" y1="14" x2="22" y2="40" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2" />}
            </g>
          ))}
          <line x1="-5" y1="52" x2="215" y2="52" stroke="url(#brCardLine)" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
        </g>

        <g transform="translate(20, 210)">
          {[
            { label: "Accessibility", color: "#43E58E" },
            { label: "60+ Support", color: "#FF6B6B" },
            { label: "Queue Mgmt", color: "#2F5BFF" },
          ].map((tag, i) => (
            <g key={tag.label} transform={`translate(${i * 122}, 0)`}>
              <rect x="0" y="0" width="112" height="24" rx="12" fill="rgba(255,255,255,0.06)" stroke={tag.color} strokeWidth="1" />
              <circle cx="14" cy="12" r="4" fill={tag.color} />
              <text x="24" y="16" fontFamily="'Open Sans', sans-serif" fontSize="10" fontWeight="600" fill="#FFFFFF">{tag.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function CaseVisualMarketplaceExpansion() {
  const markets = [
    { code: "ZA", x: 50, color: "#43E58E" },
    { code: "KR", x: 170, color: "#2F5BFF" },
    { code: "TR", x: 290, color: "#FFB84D" },
  ];
  return (
    <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", aspectRatio: "16/10", backgroundColor: "#0A0F2C", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <svg viewBox="0 0 400 250" width="100%" height="100%" role="img" aria-label="International B2B marketplace expansion illustration" style={{ maxWidth: "100%", maxHeight: "100%" }}>
        <defs>
          <linearGradient id="mpCardLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2F5BFF" />
            <stop offset="100%" stopColor="#43E58E" />
          </linearGradient>
        </defs>
        <text x="20" y="40" fontFamily="'Unbounded', sans-serif" fontSize="14" fontWeight="700" fill="#FFFFFF">B2B Marketplace Expansion</text>
        <text x="20" y="58" fontFamily="'Open Sans', sans-serif" fontSize="11" fill="rgba(255,255,255,0.6)">3 markets · 30+ establishments · 39 opportunities</text>
        <line x1="80" y1="135" x2="350" y2="135" stroke="url(#mpCardLine)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
        {markets.map((m) => (
          <g key={m.code} transform={`translate(${m.x}, 100)`}>
            <circle cx="35" cy="35" r="28" fill="rgba(255,255,255,0.06)" stroke={m.color} strokeWidth="1.4" />
            <text x="35" y="40" textAnchor="middle" fontFamily="'Unbounded', sans-serif" fontSize="14" fontWeight="700" fill="#FFFFFF">{m.code}</text>
          </g>
        ))}
        <g transform="translate(20, 200)">
          {[0,1,2,3,4,5,6].map((i) => (
            <g key={i} transform={`translate(${i * 52}, 0)`}>
              <rect x="0" y="0" width="36" height="26" rx="2" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
              <rect x="0" y="0" width="36" height="6" fill="rgba(47,91,255,0.35)" />
              <rect x="14" y="14" width="8" height="12" fill="rgba(67,229,142,0.3)" stroke="#43E58E" strokeWidth="0.6" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}

function CaseVisual({ type }: { type: string }) {
  if (type === "jj") return <CaseVisualJJ />;
  if (type === "nubank") return <CaseVisualNubank />;
  if (type === "contactCenter") return <CaseVisualContactCenter />;
  if (type === "branchResearch") return <CaseVisualBranchResearch />;
  if (type === "marketplaceExpansion") return <CaseVisualMarketplaceExpansion />;
  return <CaseVisualBees />;
}

/* ═══════════════════════════════════════════════════════════════
   NAVBAR — semantic <header> with crawlable lang links
═══════════════════════════════════════════════════════════════ */
export const LANG_URLS: Record<Lang, string> = { pt: "/", en: "/en/", es: "/es/" };

export function Navbar({ lang, langUrls, sectionHrefPrefix = "" }: { lang: Lang; langUrls?: Record<Lang, string>; sectionHrefPrefix?: string }) {
  const t = useT();
  const { openModal } = useUi();
  const ids = ["about", "services", "cases", "contact"];
  const langs: Lang[] = ["en", "pt", "es"];
  const [mobileOpen, setMobileOpen] = useState(false);
  const urls = langUrls ?? LANG_URLS;
  const casesUrl = lang === "pt" ? "/cases" : `/${lang}/cases`;
  const navLinkStyle = { color: "rgba(255,255,255,0.7)", fontFamily: F.body, fontSize: 14, fontWeight: 500, textDecoration: "none" } as const;

  return (
    <header
      role="banner"
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: B.black, borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      {/* Main bar */}
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64, boxSizing: "border-box" }}>
        {/* Logo — desktop only */}
        <Link href={LANG_URLS[lang]} aria-label="Sensorama Design — Home" className="hidden md:block" style={{ flexShrink: 0 }}>
          <SensoramaLogo height={22} fill="#FFFFFF" />
        </Link>

        {/* Desktop nav links */}
        <nav aria-label="Main navigation" className="hidden md:flex" style={{ alignItems: "center", gap: 32 }}>
          {t.nav.links.map((link, i) =>
            ids[i] === "cases" ? (
              <Link key={link} href={casesUrl} style={navLinkStyle}>
                {link}
              </Link>
            ) : (
              <a
                key={link}
                href={`${sectionHrefPrefix}#${ids[i]}`}
                style={navLinkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Right group */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Lang switcher — crawlable links */}
          <div role="navigation" aria-label="Language selection" style={{ display: "flex", gap: 2, fontFamily: F.body, fontSize: 12 }}>
            {langs.map((l, i) => (
              <span key={l} style={{ display: "flex", alignItems: "center", gap: 2 }}>
                {i > 0 && <span aria-hidden="true" style={{ color: "rgba(255,255,255,0.2)" }}>|</span>}
                <Link
                  href={urls[l]}
                  aria-label={`Switch to ${l === "en" ? "English" : l === "pt" ? "Português" : "Español"}`}
                  aria-current={lang === l ? "page" : undefined}
                  style={{
                    color: lang === l ? B.green : "rgba(255,255,255,0.45)",
                    fontWeight: lang === l ? 700 : 400,
                    textDecoration: "none",
                    fontFamily: F.body,
                    padding: "2px 4px",
                  }}
                >
                  {l.toUpperCase()}
                </Link>
              </span>
            ))}
          </div>
          {/* CTA — desktop only */}
          <button
            onClick={openModal}
            className="hidden md:block"
            aria-label="Open contact form"
            style={{ backgroundColor: B.green, color: B.black, padding: "10px 22px", borderRadius: 8, fontFamily: F.body, fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer" }}>
            {t.hero.cta}
          </button>
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{ width: 36, height: 36, background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6, cursor: "pointer", color: B.white }}>
            {mobileOpen
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <nav aria-label="Mobile navigation" style={{ backgroundColor: B.black, borderTop: "1px solid rgba(255,255,255,0.08)", padding: "16px 24px 24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 20 }}>
            {t.nav.links.map((link, i) => {
              const mobileLinkStyle = { color: "rgba(255,255,255,0.75)", fontFamily: F.body, fontSize: 15, fontWeight: 500, textDecoration: "none", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "block" } as const;
              return ids[i] === "cases" ? (
                <Link key={link} href={casesUrl} onClick={() => setMobileOpen(false)} style={mobileLinkStyle}>
                  {link}
                </Link>
              ) : (
                <a key={link} href={`${sectionHrefPrefix}#${ids[i]}`} onClick={() => setMobileOpen(false)} style={mobileLinkStyle}>
                  {link}
                </a>
              );
            })}
          </div>
          <button
            onClick={() => { openModal(); setMobileOpen(false); }}
            aria-label="Open contact form"
            style={{ width: "100%", backgroundColor: B.green, color: B.black, padding: "13px 24px", borderRadius: 8, fontFamily: F.body, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer" }}>
            {t.hero.cta} →
          </button>
        </nav>
      )}
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════
   1. HERO  (dark bg)
═══════════════════════════════════════════════════════════════ */
function HeroSection() {
  const t = useT();
  const { openModal } = useUi();
  return (
    <section id="about" aria-labelledby="hero-heading" style={{ backgroundColor: B.black, paddingTop: 64, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "72px 32px 64px" }}>
        {/* Two-column: visual + content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left — illustration (desktop) / logo (mobile) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Desktop: eye illustration */}
            <img
              src={imgEye}
              alt="Sensorama Design — innovation consultancy visual identity"
              width="440"
              height="440"
              className="hidden md:block"
              style={{ width: "100%", maxWidth: 440 }}
            />
            {/* Mobile: logo */}
            <div className="md:hidden" style={{ padding: "24px 0 8px" }}>
              <SensoramaLogo height={44} fill="#FFFFFF" />
            </div>
          </div>
          {/* Right — copy */}
          <div>
            <SectionLabel light>{t.hero.label}</SectionLabel>
            <h1 id="hero-heading" style={{ fontFamily: F.heading, fontWeight: 800, fontSize: "clamp(1.9rem, 3vw, 2.9rem)", lineHeight: 1.12, color: B.white, marginBottom: 24 }}>
              {t.hero.h1}
            </h1>
            <p style={{ fontFamily: F.body, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontSize: "1.05rem", marginBottom: 36 }}>
              {t.hero.sub}
            </p>
            <div style={{ marginBottom: 28 }}>
              <button
                onClick={openModal}
                aria-label="Open contact form to start a conversation"
                style={{ display: "inline-block", backgroundColor: B.green, color: B.black, padding: "14px 32px", borderRadius: 8, fontFamily: F.body, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "none", cursor: "pointer" }}>
                {t.hero.cta} →
              </button>
            </div>
            {/* Trust badges */}
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[t.hero.badge, t.hero.weconnect, t.hero.lgpd].map((text) => (
                <li key={text} style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", gap: 6 }}>
                  <svg style={{ width: 14, height: 14, flexShrink: 0 }} viewBox="0 0 24 24" fill="none" stroke={B.green} strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Video — full width */}
        <div style={{ width: "100%", borderRadius: 16, overflow: "hidden", aspectRatio: "16/9", boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}>
          <iframe
            src="https://www.youtube.com/embed/ceRBPMGFtnI?autoplay=1&mute=1&playsinline=1&loop=1&playlist=ceRBPMGFtnI"
            title="Sensorama Design — Innovation Consultancy Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   2. CLIENT LOGOS  — auto-scrolling marquee
═══════════════════════════════════════════════════════════════ */
function SocialProofSection() {
  const t = useT();
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section aria-label="Clients and partners" style={{ backgroundColor: "#000000", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "48px 0" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", paddingLeft: 32, paddingRight: 32, textAlign: "center", marginBottom: 40 }}>
        <p style={{ fontFamily: F.body, color: B.white, fontWeight: 600, fontSize: "clamp(1rem, 1.5vw, 1.2rem)", marginBottom: 8 }}>{t.social.context1}</p>
        <p style={{ fontFamily: F.body, color: "rgba(255,255,255,0.45)", fontSize: "clamp(0.9rem, 1.2vw, 1rem)" }}>{t.social.context2}</p>
      </div>
      {/* Client logos list — static for crawlers */}
      <p className="sr-only">
        Clients include: Itaú, Unilever, AB InBev, 99, Nestlé, Nubank, TOTVS, Vale, Mondelēz, Randon, Cogna, Engie, Thomson Reuters.
      </p>
      {/* Marquee wrapper */}
      <div style={{ overflow: "hidden", width: "100%" }} aria-hidden="true">
        <div className="marquee-track" style={{ display: "flex", alignItems: "center", gap: 56, width: "max-content", paddingLeft: 32 }}>
          {doubled.map((logo, idx) => (
            <div key={idx} style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 36,
              ...(logo.whiteBg ? { backgroundColor: B.white, borderRadius: 6, padding: "4px 10px" } : {}),
            }}>
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.whiteBg ? 80 : 130}
                height={logo.whiteBg ? 28 : 34}
                style={{
                  maxHeight: logo.whiteBg ? 28 : 34,
                  maxWidth: logo.whiteBg ? 80 : 130,
                  objectFit: "contain",
                  opacity: logo.whiteBg ? 1 : 0.82,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   3. CASE HIGHLIGHTS
═══════════════════════════════════════════════════════════════ */
const CASE_SLUG_BY_VISUAL: Record<string, string> = {
  branchResearch: "agencias-aposentados-benchmark",
  contactCenter: "contact-center-diagnostico",
  marketplaceExpansion: "marketplace-b2b-expansao-internacional",
  jj: "jnj-contact-center",
  nubank: "nubank-credit-experience",
};

function CaseHighlightsSection({ lang }: { lang: Lang }) {
  const t = useT();
  // Sincroniza com o cases-data: só mostra no carrossel os cases não-ocultos (hidden)
  const cases = t.cases.items.filter((c) => {
    const slug = CASE_SLUG_BY_VISUAL[c.visual];
    const rec = slug ? getCaseBySlug(slug) : undefined;
    return !!rec && !rec.hidden;
  });
  const langPrefix = lang === "pt" ? "" : `/${lang}`;
  const casesIndexHref = `${langPrefix}/cases`;
  const [idx, setIdx] = useState(0);
  const total = cases.length;

  const dragStartX = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const dragDeltaX = useRef(0);
  const isDragging = useRef(false);
  const isHorizontal = useRef<boolean | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const applyDrag = (delta: number) => {
    if (trackRef.current) {
      trackRef.current.style.transition = "none";
      trackRef.current.style.transform = `translateX(calc(-${idx * (100 / total)}% + ${delta}px))`;
    }
  };

  const snapTo = (newIdx: number) => {
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)";
      trackRef.current.style.transform = `translateX(-${newIdx * (100 / total)}%)`;
    }
    setIdx(newIdx);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragStartY.current = e.touches[0].clientY;
    dragDeltaX.current = 0;
    isDragging.current = true;
    isHorizontal.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || dragStartX.current === null || dragStartY.current === null) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    const dy = e.touches[0].clientY - dragStartY.current;
    if (isHorizontal.current === null) {
      isHorizontal.current = Math.abs(dx) > Math.abs(dy);
    }
    if (!isHorizontal.current) return;
    e.preventDefault();
    dragDeltaX.current = dx;
    applyDrag(dx);
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = dragDeltaX.current;
    const threshold = (trackRef.current?.offsetWidth ?? 200) * 0.25;
    if (delta < -threshold && idx < total - 1) {
      snapTo(idx + 1);
    } else if (delta > threshold && idx > 0) {
      snapTo(idx - 1);
    } else {
      snapTo(idx);
    }
    dragStartX.current = null;
    dragDeltaX.current = 0;
    isHorizontal.current = null;
  };

  const goTo = (newIdx: number) => snapTo(newIdx);

  return (
    <section id="cases" aria-labelledby="cases-heading" style={{ backgroundColor: B.white, borderBottom: "1px solid #EBEBEB" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "96px 32px" }}>
        <SectionLabel>{t.cases.label}</SectionLabel>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
          <h2 id="cases-heading" style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.15, color: B.black, margin: 0 }}>{t.cases.h2}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => goTo((idx - 1 + total) % total)} aria-label="Previous case" style={{ width: 40, height: 40, borderRadius: "50%", border: `1.5px solid ${B.blue}`, background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: B.blue }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>
            </button>
            <span style={{ fontFamily: F.body, fontSize: 13, color: B.medGray }}>{idx + 1} / {total}</span>
            <button onClick={() => goTo((idx + 1) % total)} aria-label="Next case" style={{ width: 40, height: 40, borderRadius: "50%", border: "none", backgroundColor: B.blue, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: B.white }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
            </button>
          </div>
        </div>

        {/* Viewport */}
        <div
          style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", border: "1px solid #F0F0F0", touchAction: "pan-y" }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Sliding track */}
          <div
            ref={trackRef}
            style={{
              display: "flex",
              width: `${total * 100}%`,
              transform: `translateX(-${idx * (100 / total)}%)`,
              transition: "transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
              willChange: "transform",
            }}
          >
            {cases.map((cas, i) => (
              <article key={i} style={{ width: `${100 / total}%`, flexShrink: 0 }}>
                <div className="grid md:grid-cols-2">
                  <div style={{ backgroundColor: B.lightGray, padding: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #F0F0F0" }}>
                    <div style={{ width: "100%" }}><CaseVisual type={cas.visual} /></div>
                  </div>
                  <div style={{ padding: "40px 44px", backgroundColor: B.white }}>
                    <span style={{ display: "inline-block", backgroundColor: "#E8ECFF", color: B.blue, padding: "4px 14px", borderRadius: 20, fontFamily: F.body, fontSize: 12, fontWeight: 600, marginBottom: 20 }}>{cas.label}</span>
                    <h3 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "1.25rem", lineHeight: 1.35, color: B.black, marginBottom: 28 }}>{cas.title}</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                      {[{ label: t.cases.contextLabel, text: cas.context }, { label: t.cases.whatLabel, text: cas.whatWeDid }].map(({ label, text }) => (
                        <div key={label}>
                          <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: B.medGray, marginBottom: 6 }}>{label}</p>
                          <p style={{ fontFamily: F.body, fontSize: 14, color: B.darkGray, lineHeight: 1.7 }}>{text}</p>
                        </div>
                      ))}
                      <div>
                        <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: B.medGray, marginBottom: 10 }}>{t.cases.resultsLabel}</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                          {cas.results.map((r, ri) => (
                            <li key={ri} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontFamily: F.body, fontSize: 14, color: B.darkGray }}>
                              <span style={{ marginTop: 6, width: 6, height: 6, borderRadius: "50%", backgroundColor: B.green, flexShrink: 0 }} aria-hidden="true" />
                              <span>{"highlight" in r && r.highlight && <strong style={{ color: B.black }}>{r.highlight} </strong>}{r.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {CASE_SLUG_BY_VISUAL[cas.visual] && (
                        <Link
                          href={`${langPrefix}/cases/${CASE_SLUG_BY_VISUAL[cas.visual]}`}
                          style={{
                            marginTop: 8,
                            alignSelf: "flex-start",
                            fontFamily: F.body,
                            fontSize: 13,
                            fontWeight: 600,
                            color: B.white,
                            backgroundColor: B.blue,
                            padding: "10px 18px",
                            borderRadius: 8,
                            textDecoration: "none",
                            display: "inline-block",
                          }}
                        >
                          {t.cases.seeCase} →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div role="tablist" aria-label="Case navigation" style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
          {cases.map((cas, i) => (
            <button key={i} role="tab" aria-selected={i === idx} aria-label={`View case: ${cas.title}`} onClick={() => goTo(i)} style={{ width: 8, height: 8, borderRadius: "50%", border: "none", cursor: "pointer", backgroundColor: i === idx ? B.blue : "#CBD5E1", transform: i === idx ? "scale(1.3)" : "scale(1)", transition: "all 0.2s" }} />
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <Link
            href={casesIndexHref}
            style={{
              fontFamily: F.body,
              fontSize: 14,
              fontWeight: 600,
              color: B.blue,
              backgroundColor: "transparent",
              border: `1.5px solid ${B.blue}`,
              padding: "14px 28px",
              borderRadius: 10,
              textDecoration: "none",
            }}
          >
            {t.cases.seeAll} →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OUR APPROACH  (dark section)
═══════════════════════════════════════════════════════════════ */
function OurApproachSection() {
  const t = useT();
  return (
    <section aria-labelledby="approach-heading" style={{ backgroundColor: "#000000", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "96px 32px" }}>
        <div style={{ marginBottom: 48 }}>
          <SectionLabel light>{t.approach.label}</SectionLabel>
          <p id="approach-heading" style={{ fontFamily: F.body, color: B.white, fontSize: "clamp(1.15rem, 2vw, 1.45rem)", lineHeight: 1.8, fontWeight: 400, margin: 0 }}>
            {t.approach.text}
          </p>
        </div>
        <img
          src={imgWorkshop}
          alt="Sensorama Design team workshop — collaborative innovation session"
          width="1088"
          height="600"
          style={{ width: "100%", borderRadius: 16, display: "block" }}
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   4. SERVICES  (blue section)
═══════════════════════════════════════════════════════════════ */
const serviceIcons = [
  <svg key="r" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z"/></svg>,
  <svg key="d" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"/></svg>,
  <svg key="t" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>,
];

function ServicesSection() {
  const t = useT();
  return (
    <section id="services" aria-labelledby="services-heading" style={{ backgroundColor: B.blue, borderBottom: "none" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "96px 32px" }}>
        <SectionLabel light>{t.services.label}</SectionLabel>
        <h2 id="services-heading" style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.15, color: B.white, marginBottom: 56 }}>
          {t.services.h2}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => (
            <article key={s.title} style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: 32, display: "flex", flexDirection: "column" }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, backgroundColor: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: B.white, marginBottom: 20 }}>
                {serviceIcons[i]}
              </div>
              <h3 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "1.25rem", color: B.white, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.65)", fontStyle: "italic", lineHeight: 1.55, marginBottom: 20 }}>{s.desc}</p>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                {s.body.map((para, pi) => (
                  <p key={pi} style={{ fontFamily: F.body, fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, margin: 0 }}>{para}</p>
                ))}
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 20, marginBottom: 20 }}>
                <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>Outcome</p>
                <p style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0 }}>{s.outcome}</p>
              </div>
              <div>
                <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>Methods</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.methods.map((m) => (
                    <li key={m} style={{ fontFamily: F.body, fontSize: 12, color: B.white, backgroundColor: "rgba(255,255,255,0.15)", padding: "4px 12px", borderRadius: 20 }}>{m}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   5. TESTIMONIALS  (light gray)
═══════════════════════════════════════════════════════════════ */
function TestimonialsSection() {
  const t = useT();
  return (
    <section aria-labelledby="testimonials-heading" style={{ backgroundColor: B.lightGray, borderBottom: "1px solid #E5E5E5" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "96px 32px" }}>
        <SectionLabel>{t.testimonials.label}</SectionLabel>
        <h2 id="testimonials-heading" className="sr-only">{t.testimonials.label}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((te) => (
            <article key={te.name} style={{ backgroundColor: B.white, borderRadius: 14, padding: 32, display: "flex", flexDirection: "column", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
              <div style={{ marginBottom: 20 }}><Avatar initials={te.initials} /></div>
              <svg style={{ width: 24, height: 24, marginBottom: 12 }} fill={B.blue} opacity={0.2} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <blockquote style={{ fontFamily: F.body, fontSize: 14, color: B.darkGray, lineHeight: 1.8, flex: 1, marginBottom: 24 }}>&quot;{te.quote}&quot;</blockquote>
              <footer style={{ borderTop: "1px solid #F0F0F0", paddingTop: 16 }}>
                <cite style={{ fontStyle: "normal" }}>
                  <div style={{ fontFamily: F.body, fontSize: 14, color: B.black, fontWeight: 600 }}>{te.name}</div>
                  <div style={{ fontFamily: F.body, fontSize: 12, color: B.medGray, marginTop: 2 }}>{te.role}</div>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   6. ABOUT  (white, with real photos + feature blocks)
═══════════════════════════════════════════════════════════════ */
function AboutSection() {
  const t = useT();
  const featureIcons = [
    <svg key="a" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke={B.blue} strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>,
    <svg key="b" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke={B.blue} strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    <svg key="c" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke={B.blue} strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
  ];
  return (
    <section style={{ backgroundColor: B.white, borderBottom: "1px solid #EBEBEB" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "96px 32px" }}>
        {/* Label + title */}
        <div style={{ marginBottom: 48 }}>
          <SectionLabel>{t.about.label}</SectionLabel>
          <h2 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", lineHeight: 1.15, color: B.black, maxWidth: 700 }}>
            {t.about.h2}
          </h2>
        </div>
        {/* Text block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 720, marginBottom: 48 }}>
          <p style={{ fontFamily: F.body, fontSize: "1.05rem", color: B.darkGray, lineHeight: 1.8, margin: 0 }}>{t.about.p1}</p>
          {t.about.p2.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontFamily: F.body, color: B.medGray, lineHeight: 1.8, margin: 0 }}>{para}</p>
          ))}
          <p style={{ fontFamily: F.body, color: B.black, lineHeight: 1.75, margin: 0, fontWeight: 700 }}>{t.about.p4}</p>
        </div>
        {/* Feature blocks — 3 col grid */}
        <div className="grid md:grid-cols-3 gap-6" style={{ marginBottom: 96 }}>
          {t.about.features.map((f, i) => (
            <article key={f.title} style={{ backgroundColor: B.lightGray, borderRadius: 14, padding: 32, border: "1px solid #E5E5E5" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: "#E8ECFF", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                {featureIcons[i]}
              </div>
              <h4 style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "0.9rem", color: B.black, marginBottom: 8 }}>{f.title}</h4>
              <p style={{ fontFamily: F.body, fontSize: 14, color: B.medGray, lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
            </article>
          ))}
        </div>
        {/* Team image */}
        <img
          src={imgTeam}
          alt="Sensorama Design team — women-led innovation consultancy working across cultures"
          width="1088"
          height="600"
          style={{ width: "100%", borderRadius: 16, display: "block" }}
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   7. CTA  (green section)
═══════════════════════════════════════════════════════════════ */
function CTASection() {
  const t = useT();
  const { openModal } = useUi();
  return (
    <section id="contact" aria-labelledby="cta-heading" style={{ backgroundColor: B.green }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "96px 32px", textAlign: "center" }}>
        <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(0,0,0,0.5)", marginBottom: 20 }}>{t.cta.label}</p>
        <h2 id="cta-heading" style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, color: B.black, marginBottom: 24 }}>
          {t.cta.h2}
        </h2>
        <p style={{ fontFamily: F.body, color: "rgba(0,0,0,0.6)", lineHeight: 1.7, fontSize: "1.05rem", maxWidth: 480, margin: "0 auto 48px" }}>
          {t.cta.sub}
        </p>
        <button
          onClick={openModal}
          aria-label="Open contact form"
          style={{ display: "inline-block", backgroundColor: B.black, color: B.white, padding: "14px 32px", borderRadius: 8, fontFamily: F.body, fontWeight: 700, fontSize: 15, textDecoration: "none", border: "none", cursor: "pointer" }}>
          {t.cta.button} →
        </button>
        <p style={{ fontFamily: F.body, fontSize: 14, color: "rgba(0,0,0,0.5)", marginTop: 24 }}>
          {t.cta.emailText}{" "}
          <a href="mailto:contato@sensoramadesign.com" style={{ color: "rgba(0,0,0,0.7)", textDecoration: "underline" }}>
            contato@sensoramadesign.com
          </a>
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   8. FOOTER
═══════════════════════════════════════════════════════════════ */
export function FooterSection() {
  const t = useT();
  const { openCookiePage } = useUi();
  return (
    <footer role="contentinfo" style={{ backgroundColor: B.black, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "64px 32px 48px" }}>
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <SensoramaLogo height={22} fill="#FFFFFF" />
            <p style={{ fontFamily: F.heading, fontWeight: 700, fontSize: "1.3rem", color: B.white, marginTop: 20, lineHeight: 1.3 }}>
              {t.footer.tagline}
            </p>
          </div>
          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>{t.footer.navLabel}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {t.footer.navLinks.map((l) => {
                const footerLinkStyle = { fontFamily: F.body, fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none" } as const;
                return (
                  <li key={l.label}>
                    {l.href.startsWith("#") ? (
                      <a href={l.href} style={footerLinkStyle}>{l.label} →</a>
                    ) : (
                      <Link href={l.href} style={footerLinkStyle}>{l.label} →</Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <div style={{ marginTop: 24, display: "flex", gap: 16 }}>
              {t.footer.socials.map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                   style={{ fontFamily: F.body, fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
                  {s.label}
                </a>
              ))}
            </div>
          </nav>
          {/* Contact + certifications */}
          <div>
            <p style={{ fontFamily: F.body, fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 20 }}>{t.footer.contactLabel}</p>
            <a href="mailto:contato@sensoramadesign.com" style={{ fontFamily: F.body, fontSize: 14, color: B.green, textDecoration: "none" }}>
              contato@sensoramadesign.com
            </a>
            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 20 }}>
              <img
                src={imgWeconnect}
                alt="WEConnect International — Women's Business Enterprise certified"
                width="150"
                height="50"
                style={{ maxWidth: 150, opacity: 0.75, filter: "grayscale(1) brightness(1.6)" }}
                loading="lazy"
              />
              <img
                src={imgLgpdSeal}
                alt="Empresa Verificada LGPD Data Guide — LGPD compliant company"
                width="200"
                height="60"
                style={{ maxWidth: 200 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,0.25)" }}>{t.footer.copyright}</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
            {t.footer.legalLinks.map((l) => (
              <Link key={l.label} href={l.href} style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; }}
              >{l.label}</Link>
            ))}
            <button
              onClick={openCookiePage}
              style={{ fontFamily: F.body, fontSize: 12, color: "rgba(255,255,255,0.3)", background: "none", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 5, cursor: "pointer", padding: "3px 10px" }}
              onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            >
              {t.footer.manageCookies}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════
   LANDING PAGE EXPORT
═══════════════════════════════════════════════════════════════ */
export function LandingPage({ lang }: { lang: Lang }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [cookiePageOpen, setCookiePageOpen] = useState(false);
  const t = T[lang];

  const uiActions: UiActions = {
    openModal: () => setModalOpen(true),
    openCookiePage: () => setCookiePageOpen(true),
  };

  return (
    <LangCtx.Provider value={t}>
      <UiCtx.Provider value={uiActions}>
        <style>{GLOBAL_CSS}</style>

        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          style={{
            position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden",
          }}
          onFocus={e => { e.currentTarget.style.cssText = "position:fixed;top:8px;left:8px;width:auto;height:auto;overflow:visible;background:#43E58E;color:#000;padding:8px 16px;borderRadius:6px;fontFamily:Open Sans,sans-serif;fontSize:14px;fontWeight:600;zIndex:9999;"; }}
          onBlur={e => { e.currentTarget.style.cssText = "position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;"; }}
        >
          Skip to main content
        </a>

        <div style={{ fontFamily: F.body, backgroundColor: B.black, color: B.black }}>
          {/* Site header with navigation */}
          <Navbar lang={lang} />

          {/* Main page content */}
          <main id="main-content">
            <HeroSection />
            <SocialProofSection />
            <CaseHighlightsSection lang={lang} />
            <OurApproachSection />
            <ServicesSection />
            {/* <TestimonialsSection /> */}
            <AboutSection />
            <CTASection />
          </main>

          {/* Site footer */}
          <FooterSection />
        </div>

        {/* Overlays — modals */}
        <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} lang={lang} />
        <CookieBanner lang={lang} onOpenPolicy={() => setCookiePageOpen(true)} />
        <CookiePage open={cookiePageOpen} onClose={() => setCookiePageOpen(false)} lang={lang} />
        {/* Consent manager — floating button + script gating */}
        <ConsentManager lang={lang} />
      </UiCtx.Provider>
    </LangCtx.Provider>
  );
}
