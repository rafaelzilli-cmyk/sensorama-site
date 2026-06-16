import { Helmet } from "react-helmet-async";

type Lang = "en" | "pt" | "es";

const Fnt = { heading: "'Unbounded', sans-serif", body: "'Open Sans', sans-serif" };
const Clr = {
  blue: "#2F5BFF", green: "#43E58E", black: "#000000",
  medGray: "#6B6B6B", darkGray: "#2A2A2A", lightGray: "#F5F5F5", white: "#FFFFFF",
};

const BASE = "https://www.sensoramadesign.com";

const meta = {
  en: { title: "Cookie Notice — Sensorama Design", description: "Sensorama Design Cookie Notice: categories, purposes, durations, the cookies we set, and how to manage your preferences in the consent banner and your browser.", canonical: `${BASE}/en/cookie-policy`, lang: "en" },
  pt: { title: "Aviso de Cookies — Sensorama Design", description: "Aviso de Cookies da Sensorama Design: categorias, finalidades, durações, cookies utilizados e como gerenciar suas preferências no banner e no navegador.", canonical: `${BASE}/cookie-policy`, lang: "pt-BR" },
  es: { title: "Aviso de Cookies — Sensorama Design", description: "Aviso de Cookies de Sensorama Design: categorías, finalidades, duraciones, cookies utilizadas y cómo gestionar tus preferencias en el banner y en el navegador.", canonical: `${BASE}/es/cookie-policy`, lang: "es" },
};

type TableData = { headers: string[]; rows: string[][] };

type Section = {
  heading: string;
  body: string;
  tableData?: TableData;
  bodyAfter?: string;
};

const BROWSER_LINKS = {
  firefox: "https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer",
  chrome: "https://support.google.com/chrome/answer/95647",
  safari: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
  edge: "https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
};

/* ─────────────────────────────────────────────────────────────
   PORTUGUESE — official Data Guide text (20/05/2026), verbatim
───────────────────────────────────────────────────────────── */
const contentPT: { back: string; backHref: string; updated: string; title: string; sections: Section[] } = {
  back: "← Voltar ao site",
  backHref: "/",
  updated: "Última atualização: 20/05/2026",
  title: "AVISO DE COOKIES | SITE SENSORAMA",
  sections: [
    {
      heading: "1. OBJETIVO DESTE AVISO",
      body: `Estamos atentos às disposições das leis de proteção de dados pessoais e aos direitos dos titulares de dados pessoais ("Você"). Por isso, elaboramos este Aviso de Cookies para informar sobre a utilização de cookies em nosso site.\n\nDessa forma, dando transparência ao tratamento dos dados pessoais realizado por meio de cookies tornamos público este Aviso. Para que você tenha uma compreensão completa sobre como tratamos seus dados pessoais, recomendamos que este documento seja lido em conjunto com nosso [Aviso de Privacidade|/privacy-policy].\n\nLembrando que, caso você tenha qualquer dúvida, sempre pode nos contatar por meio do seguinte e-mail: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]`,
    },
    {
      heading: "2. O QUE SÃO COOKIES?",
      body: `Cookies são arquivos de texto enviados pelo site e armazenados no seu dispositivo (computador, celular, por exemplo). Esses arquivos contêm informações relacionadas à navegação da página.`,
    },
    {
      heading: "3. CATEGORIA DE COOKIES",
      body: `Listamos abaixo as principais categorias e finalidades de cookies:`,
      tableData: {
        headers: ["Categoria", "Descrição"],
        rows: [
          ["Cookies proprietários", "São cookies definidos por nós ou por terceiros em nosso nome."],
          ["Cookies de terceiros", "São cookies definidos por terceiros confiáveis em nossa aplicação."],
          ["Cookies de sessão ou temporários", "São cookies que expiram assim que você fecha o seu navegador, encerrando a sessão."],
          ["Cookies persistentes ou permanentes", "São cookies que permanecem no seu dispositivo durante um período determinado ou até que você os exclua"],
          ["Cookies essenciais ou necessários", "São cookies essenciais que possibilitam a navegação em nossas aplicações e o acesso a todos os recursos, com todas suas funcionalidades; sem estes, nossos serviços podem apresentar mal desempenho ou não funcionar;"],
          ["Cookies de funcionalidade", "São cookies que memorizam suas preferências e escolhas (como seu nome de usuário e idioma preferido, por exemplo) para o melhor funcionamento do site;"],
          ["Cookies analíticos ou de desempenho", "São cookies que otimizam a forma que nossas aplicações funcionam, coletando informações anônimas sobre as páginas acessadas;"],
          ["Cookies de publicidade e marketing", "São cookies que direcionam anúncios em função dos seus interesses e limitam a quantidade de vezes que o anúncio aparece."],
        ],
      },
    },
    {
      heading: "4. QUAIS COOKIES UTILIZAMOS?",
      body: `Em nosso site utilizamos os seguintes cookies:`,
      tableData: {
        headers: ["Nome do cookie", "Domínio", "Descrição", "Duração", "Tipo"],
        rows: [
          ["__cf_bm", ".sensoramadesign.com", "Este cookie, definido pela Cloudflare, é usado para dar suporte ao gerenciamento de bots da Cloudflare.", "1 hora", "Necessário"],
          ["_ga_*", ".sensoramadesign.com", "O Google Analytics define esse cookie para armazenar e contabilizar as visualizações de página.", "1 ano, 1 mês e 4 dias", "Análises"],
          ["_ga", ".sensoramadesign.com", "O cookie _ga, instalado pelo Google Analytics, calcula dados de visitantes, sessões e campanhas, além de monitorar o uso do site para gerar relatórios analíticos. O cookie armazena informações de forma anônima e atribui um número gerado aleatoriamente para identificar visitantes únicos.", "1 ano, 1 mês e 4 dias", "Análises"],
          ["_cs_c", ".sensoramadesign.com", "O cookie é usado pelo Content Square para salvar o consentimento do usuário em ser rastreado.", "1 ano e 1 mês", "Funcional"],
          ["_cs_id", ".sensoramadesign.com", "Este cookie é usado para armazenar o ID de identificação do usuário do ContentSquare. Este é um cookie persistente e expira após 13 meses.", "1 ano e 1 mês", "Análises"],
          ["_cs_s", ".sensoramadesign.com", "Este cookie é usado para armazenar o número de páginas visualizadas por um visitante durante a sessão da solução ContentSquare.", "1 hora", "Análises"],
        ],
      },
    },
    {
      heading: "5. GERENCIAMENTO DE COOKIES",
      body: `Você pode gerenciar o uso de cookies da(s) seguinte(s) forma(s):\n\n**Banner de cookies:** você pode optar por aceitar ou não a utilização de cookies (gerencie suas preferências em nosso banner de cookies), exceto os estritamente necessários para o funcionamento do site.\n\n**Configurações no navegador:** você pode ajustar as configurações do seu navegador para desabilitar os cookies ou deletá-los. Para isso, basta clicar nos links abaixo, conforme o navegador que você utiliza:\n\n[Firefox|${BROWSER_LINKS.firefox}]   [Chrome|${BROWSER_LINKS.chrome}]   [Safari|${BROWSER_LINKS.safari}]   [Edge|${BROWSER_LINKS.edge}]\n\nÉ importante observar que, ao desativar todos os cookies em seu navegador, algumas funções essenciais para o funcionamento do site podem ficar indisponíveis.`,
    },
    {
      heading: "6. ALTERAÇÕES NO PRESENTE AVISO",
      body: `Nos reservamos o direito de modificar este Aviso de Cookies a qualquer tempo e quantas vezes forem necessárias, em função da adequação a eventuais alterações feitas em nosso site ou em âmbito legislativo, visando fornecer a você cada vez mais segurança e conveniência.\n\nPara tanto, é recomendado que você a revise sempre que possível. Com a finalidade de facilitar, sempre indicaremos no fim do documento a data da última atualização, e se alterações substanciais forem feitas, notificaremos você sobre tais alterações antes que entrem em vigor.`,
    },
    {
      heading: "7. AGRADECEMOS POR LER NOSSO AVISO DE COOKIES!",
      body: `Estaremos sempre à disposição para atendê-lo. Caso tenha restado alguma dúvida ou deseje obter mais informações sobre este Aviso, por favor, entre em contato conosco: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]\n\n**Última atualização: 20/05/2026**`,
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   ENGLISH — faithful translation
───────────────────────────────────────────────────────────── */
const contentEN: typeof contentPT = {
  back: "← Back to site",
  backHref: "/en/",
  updated: "Last updated: 20/05/2026",
  title: "COOKIE NOTICE | SENSORAMA WEBSITE",
  sections: [
    {
      heading: "1. PURPOSE OF THIS NOTICE",
      body: `We are attentive to the provisions of the personal data protection laws and to the rights of personal data subjects ("You"). For this reason, we have prepared this Cookie Notice to inform you about the use of cookies on our site.\n\nThus, providing transparency to the processing of personal data carried out through cookies, we make this Notice public. So that you have a complete understanding of how we process your personal data, we recommend that this document be read together with our [Privacy Notice|/en/privacy-policy].\n\nIf you have any questions, you can always contact us at: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]`,
    },
    {
      heading: "2. WHAT ARE COOKIES?",
      body: `Cookies are text files sent by the site and stored on your device (computer, mobile phone, for example). These files contain information related to the navigation of the page.`,
    },
    {
      heading: "3. COOKIE CATEGORIES",
      body: `Below we list the main categories and purposes of cookies:`,
      tableData: {
        headers: ["Category", "Description"],
        rows: [
          ["First-party cookies", "Cookies set by us or by third parties on our behalf."],
          ["Third-party cookies", "Cookies set by trusted third parties on our application."],
          ["Session or temporary cookies", "Cookies that expire as soon as you close your browser, ending the session."],
          ["Persistent or permanent cookies", "Cookies that remain on your device for a determined period or until you delete them."],
          ["Essential or necessary cookies", "Essential cookies that enable navigation on our applications and access to all resources with all their functionalities; without these, our services may perform poorly or not work at all;"],
          ["Functionality cookies", "Cookies that remember your preferences and choices (such as your username and preferred language, for example) for the better functioning of the site;"],
          ["Analytics or performance cookies", "Cookies that optimise the way our applications work, collecting anonymous information about the pages accessed;"],
          ["Advertising and marketing cookies", "Cookies that direct advertisements based on your interests and limit the number of times the ad appears."],
        ],
      },
    },
    {
      heading: "4. WHICH COOKIES DO WE USE?",
      body: `On our site we use the following cookies:`,
      tableData: {
        headers: ["Cookie name", "Domain", "Description", "Duration", "Type"],
        rows: [
          ["__cf_bm", ".sensoramadesign.com", "This cookie, set by Cloudflare, is used to support Cloudflare bot management.", "1 hour", "Necessary"],
          ["_ga_*", ".sensoramadesign.com", "Google Analytics sets this cookie to store and count page views.", "1 year, 1 month and 4 days", "Analytics"],
          ["_ga", ".sensoramadesign.com", "The _ga cookie, installed by Google Analytics, calculates visitor, session and campaign data and tracks site usage to generate analytics reports. The cookie stores information anonymously and assigns a randomly generated number to identify unique visitors.", "1 year, 1 month and 4 days", "Analytics"],
          ["_cs_c", ".sensoramadesign.com", "The cookie is used by Content Square to save the user's consent to be tracked.", "1 year and 1 month", "Functional"],
          ["_cs_id", ".sensoramadesign.com", "This cookie is used to store the ContentSquare user identification ID. This is a persistent cookie and expires after 13 months.", "1 year and 1 month", "Analytics"],
          ["_cs_s", ".sensoramadesign.com", "This cookie is used to store the number of pages viewed by a visitor during the ContentSquare solution session.", "1 hour", "Analytics"],
        ],
      },
    },
    {
      heading: "5. COOKIE MANAGEMENT",
      body: `You can manage the use of cookies in the following way(s):\n\n**Cookie banner:** you may choose whether or not to accept the use of cookies (manage your preferences in our cookie banner), except those strictly necessary for the operation of the site.\n\n**Browser settings:** you may adjust your browser settings to disable cookies or delete them. To do so, just click on the links below, according to the browser you use:\n\n[Firefox|${BROWSER_LINKS.firefox}]   [Chrome|${BROWSER_LINKS.chrome}]   [Safari|${BROWSER_LINKS.safari}]   [Edge|${BROWSER_LINKS.edge}]\n\nIt is important to note that, by disabling all cookies in your browser, some functions essential for the operation of the site may become unavailable.`,
    },
    {
      heading: "6. CHANGES TO THIS NOTICE",
      body: `We reserve the right to modify this Cookie Notice at any time and as many times as necessary, due to the adequacy of any changes made to our site or in the legislative scope, aiming to provide you with ever more security and convenience.\n\nTherefore, it is recommended that you review it whenever possible. To facilitate this, we will always indicate at the end of the document the date of the last update, and if substantial changes are made, we will notify you of such changes before they come into effect.`,
    },
    {
      heading: "7. THANK YOU FOR READING OUR COOKIE NOTICE!",
      body: `We will always be available to assist you. Should you have any remaining questions or wish to obtain more information about this Notice, please contact us: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]\n\n**Last updated: 20/05/2026**`,
    },
  ],
};

/* ─────────────────────────────────────────────────────────────
   SPANISH — faithful translation
───────────────────────────────────────────────────────────── */
const contentES: typeof contentPT = {
  back: "← Volver al sitio",
  backHref: "/es/",
  updated: "Última actualización: 20/05/2026",
  title: "AVISO DE COOKIES | SITIO SENSORAMA",
  sections: [
    {
      heading: "1. OBJETIVO DE ESTE AVISO",
      body: `Estamos atentos a las disposiciones de las leyes de protección de datos personales y a los derechos de los titulares de datos personales ("Usted"). Por ello, elaboramos este Aviso de Cookies para informar sobre la utilización de cookies en nuestro sitio.\n\nDe esta forma, dando transparencia al tratamiento de los datos personales realizado a través de cookies, hacemos público este Aviso. Para que tenga una comprensión completa sobre cómo tratamos sus datos personales, recomendamos que este documento sea leído en conjunto con nuestro [Aviso de Privacidad|/es/privacy-policy].\n\nRecordando que, si tiene alguna duda, siempre puede contactarnos a través del siguiente correo electrónico: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]`,
    },
    {
      heading: "2. ¿QUÉ SON LAS COOKIES?",
      body: `Las cookies son archivos de texto enviados por el sitio y almacenados en su dispositivo (computadora, celular, por ejemplo). Estos archivos contienen información relacionada con la navegación de la página.`,
    },
    {
      heading: "3. CATEGORÍA DE COOKIES",
      body: `Listamos a continuación las principales categorías y finalidades de cookies:`,
      tableData: {
        headers: ["Categoría", "Descripción"],
        rows: [
          ["Cookies propias", "Son cookies definidas por nosotros o por terceros en nuestro nombre."],
          ["Cookies de terceros", "Son cookies definidas por terceros confiables en nuestra aplicación."],
          ["Cookies de sesión o temporales", "Son cookies que expiran tan pronto como cierra su navegador, finalizando la sesión."],
          ["Cookies persistentes o permanentes", "Son cookies que permanecen en su dispositivo durante un período determinado o hasta que las elimine."],
          ["Cookies esenciales o necesarias", "Son cookies esenciales que posibilitan la navegación en nuestras aplicaciones y el acceso a todos los recursos, con todas sus funcionalidades; sin estas, nuestros servicios pueden presentar mal desempeño o no funcionar;"],
          ["Cookies de funcionalidad", "Son cookies que memorizan sus preferencias y elecciones (como su nombre de usuario e idioma preferido, por ejemplo) para el mejor funcionamiento del sitio;"],
          ["Cookies analíticas o de rendimiento", "Son cookies que optimizan la forma en que nuestras aplicaciones funcionan, recopilando información anónima sobre las páginas accedidas;"],
          ["Cookies de publicidad y marketing", "Son cookies que direccionan anuncios en función de sus intereses y limitan la cantidad de veces que el anuncio aparece."],
        ],
      },
    },
    {
      heading: "4. ¿QUÉ COOKIES UTILIZAMOS?",
      body: `En nuestro sitio utilizamos las siguientes cookies:`,
      tableData: {
        headers: ["Nombre de la cookie", "Dominio", "Descripción", "Duración", "Tipo"],
        rows: [
          ["__cf_bm", ".sensoramadesign.com", "Esta cookie, definida por Cloudflare, se utiliza para dar soporte a la gestión de bots de Cloudflare.", "1 hora", "Necesaria"],
          ["_ga_*", ".sensoramadesign.com", "Google Analytics define esta cookie para almacenar y contabilizar las visualizaciones de página.", "1 año, 1 mes y 4 días", "Analítica"],
          ["_ga", ".sensoramadesign.com", "La cookie _ga, instalada por Google Analytics, calcula datos de visitantes, sesiones y campañas, además de monitorear el uso del sitio para generar informes analíticos. La cookie almacena información de forma anónima y asigna un número generado aleatoriamente para identificar visitantes únicos.", "1 año, 1 mes y 4 días", "Analítica"],
          ["_cs_c", ".sensoramadesign.com", "La cookie es usada por Content Square para guardar el consentimiento del usuario en ser rastreado.", "1 año y 1 mes", "Funcional"],
          ["_cs_id", ".sensoramadesign.com", "Esta cookie se utiliza para almacenar el ID de identificación del usuario de ContentSquare. Es una cookie persistente y expira después de 13 meses.", "1 año y 1 mes", "Analítica"],
          ["_cs_s", ".sensoramadesign.com", "Esta cookie se utiliza para almacenar el número de páginas visualizadas por un visitante durante la sesión de la solución ContentSquare.", "1 hora", "Analítica"],
        ],
      },
    },
    {
      heading: "5. GESTIÓN DE COOKIES",
      body: `Puede gestionar el uso de cookies de la(s) siguiente(s) forma(s):\n\n**Banner de cookies:** puede optar por aceptar o no la utilización de cookies (gestione sus preferencias en nuestro banner de cookies), excepto las estrictamente necesarias para el funcionamiento del sitio.\n\n**Configuración en el navegador:** puede ajustar la configuración de su navegador para deshabilitar las cookies o eliminarlas. Para ello, basta con hacer clic en los enlaces a continuación, según el navegador que utilice:\n\n[Firefox|${BROWSER_LINKS.firefox}]   [Chrome|${BROWSER_LINKS.chrome}]   [Safari|${BROWSER_LINKS.safari}]   [Edge|${BROWSER_LINKS.edge}]\n\nEs importante observar que, al desactivar todas las cookies en su navegador, algunas funciones esenciales para el funcionamiento del sitio pueden quedar no disponibles.`,
    },
    {
      heading: "6. ALTERACIONES EN EL PRESENTE AVISO",
      body: `Nos reservamos el derecho de modificar este Aviso de Cookies en cualquier momento y cuantas veces sean necesarias, en función de la adecuación a eventuales alteraciones realizadas en nuestro sitio o en el ámbito legislativo, con el objetivo de proporcionarle cada vez más seguridad y conveniencia.\n\nPara ello, se recomienda que lo revise siempre que sea posible. Con la finalidad de facilitar, siempre indicaremos al final del documento la fecha de la última actualización, y si se realizan alteraciones sustanciales, le notificaremos sobre tales alteraciones antes de que entren en vigor.`,
    },
    {
      heading: "7. ¡GRACIAS POR LEER NUESTRO AVISO DE COOKIES!",
      body: `Estaremos siempre a disposición para atenderlo. Si quedó alguna duda o desea obtener más información sobre este Aviso, por favor, contáctenos: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]\n\n**Última actualización: 20/05/2026**`,
    },
  ],
};

const allContent: Record<Lang, typeof contentPT> = { pt: contentPT, en: contentEN, es: contentES };

/* ─── Renderers ──────────────────────────────────────────────── */

function renderBody(text: string) {
  return text.split("\n").map((line, i) => {
    if (!line.trim()) return <br key={i} />;
    const tokens = line.split(/(\*\*[^*]+\*\*|\[[^\]]+\|[^\]]+\])/g);
    return (
      <span key={i} style={{ display: "block", marginBottom: 4 }}>
        {tokens.map((token, j) => {
          if (token.startsWith("**") && token.endsWith("**")) {
            return <strong key={j} style={{ color: Clr.darkGray }}>{token.slice(2, -2)}</strong>;
          }
          const linkMatch = token.match(/^\[([^\]]+)\|([^\]]+)\]$/);
          if (linkMatch) {
            const href = linkMatch[2];
            const isExternal = href.startsWith("http");
            return (
              <a key={j} href={href}
                style={{ color: Clr.blue, textDecoration: "underline", marginRight: isExternal ? 8 : 0 }}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}>
                {linkMatch[1]}
              </a>
            );
          }
          return <span key={j}>{token}</span>;
        })}
      </span>
    );
  });
}

function renderTable(tableData: TableData) {
  return (
    <div style={{ overflowX: "auto", borderRadius: 10, border: "1px solid #EBEBEB", marginTop: 20, marginBottom: 20 }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: Fnt.body, fontSize: 13 }}>
        <thead>
          <tr style={{ backgroundColor: Clr.lightGray }}>
            {tableData.headers.map((h, i) => (
              <th key={i} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600, color: Clr.darkGray, borderBottom: "1px solid #EBEBEB" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, ri) => (
            <tr key={ri} style={{ borderBottom: ri < tableData.rows.length - 1 ? "1px solid #F0F0F0" : "none" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "10px 14px", color: ci === 0 ? Clr.black : Clr.darkGray, fontWeight: ci === 0 ? 600 : 400, verticalAlign: "top", lineHeight: 1.6 }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Page component ─────────────────────────────────────────── */
export function CookiePolicyPage({ lang }: { lang: Lang }) {
  const m = meta[lang];
  const c = allContent[lang];

  return (
    <>
      <Helmet>
        <html lang={m.lang} />
        <title>{m.title}</title>
        <meta name="description" content={m.description} />
        <link rel="canonical" href={m.canonical} />
        <link rel="alternate" hrefLang="pt-BR" href={`${BASE}/cookie-policy`} />
        <link rel="alternate" hrefLang="en" href={`${BASE}/en/cookie-policy`} />
        <link rel="alternate" hrefLang="es" href={`${BASE}/es/cookie-policy`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE}/cookie-policy`} />
      </Helmet>

      <div style={{ fontFamily: Fnt.body, backgroundColor: Clr.white, minHeight: "100vh" }}>
        <header style={{ backgroundColor: Clr.black, borderBottom: "1px solid rgba(255,255,255,0.08)", position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href={c.backHref} style={{ fontFamily: Fnt.body, fontSize: 14, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{c.back}</a>
            <a href={c.backHref} style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "0.8rem", color: Clr.white, textDecoration: "none" }}>Sensorama Design</a>
          </div>
        </header>

        <main style={{ maxWidth: 860, margin: "0 auto", padding: "56px 32px 96px" }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
            {(["pt", "en", "es"] as Lang[]).map(l => (
              <a key={l} href={l === "pt" ? "/cookie-policy" : `/${l}/cookie-policy`}
                style={{ fontFamily: Fnt.body, fontSize: 12, color: l === lang ? Clr.blue : Clr.medGray, fontWeight: l === lang ? 700 : 400, textDecoration: l === lang ? "none" : "underline" }}>
                {l.toUpperCase()}
              </a>
            ))}
          </div>

          <p style={{ fontFamily: Fnt.body, fontSize: 12, color: Clr.medGray, marginBottom: 12 }}>{c.updated}</p>
          <h1 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "clamp(1.4rem, 2.6vw, 2rem)", color: Clr.black, lineHeight: 1.25, marginBottom: 48 }}>{c.title}</h1>

          {c.sections.map((s, i) => (
            <section key={i} style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "0.95rem", color: Clr.black, marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid #EBEBEB" }}>
                {s.heading}
              </h2>
              <div style={{ fontFamily: Fnt.body, fontSize: 15, color: Clr.darkGray, lineHeight: 1.8 }}>
                {renderBody(s.body)}
                {s.tableData && renderTable(s.tableData)}
                {s.bodyAfter && renderBody(s.bodyAfter)}
              </div>
            </section>
          ))}

          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #EBEBEB", display: "flex", gap: 24, flexWrap: "wrap" }}>
            <a href={c.backHref} style={{ fontFamily: Fnt.body, fontSize: 14, color: Clr.blue, textDecoration: "underline" }}>{c.back}</a>
            <a href={lang === "pt" ? "/privacy-policy" : `/${lang}/privacy-policy`}
              style={{ fontFamily: Fnt.body, fontSize: 14, color: Clr.medGray, textDecoration: "underline" }}>
              {lang === "pt" ? "Aviso de Privacidade" : lang === "es" ? "Aviso de Privacidad" : "Privacy Notice"}
            </a>
            <a href={lang === "pt" ? "/terms-of-use" : `/${lang}/terms-of-use`}
              style={{ fontFamily: Fnt.body, fontSize: 14, color: Clr.medGray, textDecoration: "underline" }}>
              {lang === "pt" ? "Termos de Uso" : lang === "es" ? "Términos de Uso" : "Terms of Use"}
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
