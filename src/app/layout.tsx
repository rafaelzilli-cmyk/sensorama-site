import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { SITE_URL } from '@/lib/constants';
import '@/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Sensorama | UX Research, Service Design, Product Design & Digital Transformation',
    template: '%s | Sensorama Design',
  },
  description: 'Sensorama is an innovation consultancy helping companies solve complex problems through UX research, service design, product design, and digital transformation.',
  keywords: ['UX design', 'UX research', 'service design', 'digital transformation', 'AI', 'innovation consultancy', 'Brazilian consultancy', 'women-led', 'design thinking', 'product design', 'Brazil', 'LATAM'],
  authors: [{ name: 'Sensorama Design' }],
  creator: 'Sensorama Design',
  publisher: 'Sensorama Design',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'vdqTU6GP-uLvayyHdQuiUMBxgVlRZDTzCHMKWc0HZMI',
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en': '/en',
      'es': '/es',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Sensorama Design',
    title: 'Sensorama | UX Research, Service Design, Product Design & Digital Transformation',
    description: 'Sensorama is an innovation consultancy helping companies solve complex problems through UX research, service design, product design, and digital transformation.',
    url: SITE_URL,
    locale: 'pt_BR',
    alternateLocale: ['en_US', 'es_ES'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sensoramadesign',
    title: 'Sensorama | UX Research, Service Design, Product Design & Digital Transformation',
    description: 'Sensorama is an innovation consultancy helping companies solve complex problems through UX research, service design, product design, and digital transformation.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sensorama Design',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  description: 'Brazilian innovation consultancy specializing in UX research, service design, product design and digital transformation.',
  foundingDate: '2012',
  sameAs: [
    'https://www.linkedin.com/company/sensoramadesign',
    'https://www.instagram.com/sensoramadesign',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contato@sensoramadesign.com',
    contactType: 'Customer Service',
    availableLanguage: ['Portuguese', 'English', 'Spanish'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt-BR',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Como a Sensorama ajuda empresas a tomar melhores decisões em produtos, serviços e transformação digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Sensorama ajuda empresas a tomar decisões mais assertivas em produtos digitais, serviços e transformação digital. Combinamos pesquisa com usuários (UX research), design estratégico (design thinking) com design de produto (UI/UX) e inteligência artificial (AI) para estruturar soluções viáveis e testadas antes de implementações em larga escala. Através de product strategy e análise de dados, garantimos que cada decisão seja orientada por evidências e não por suposições, minimizando riscos e maximizando o impacto no negócio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como são as soluções de Inteligência Artificial que a Sensorama Design projeta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Na Sensorama, trazemos a Inteligência Artificial para otimizar processos e tornar produtos mais inteligentes de acordo com as dores e necessidades dos usuários. Nossas soluções são centradas nos usuários e alavancadas por tecnologia, tendo a Inteligência Artificial nos momentos que realmente fazem sentido para aumentar a eficiência operacional dos times e reduzir custos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais problemas indicam que uma empresa precisa da Sensorama?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se sua empresa está enfrentando desafios como produtos digitais que não performam como esperado, decisões baseadas em opinião e não em dados, ou iniciativas de IA e transformação digital sem resultados claros, a Sensorama pode ajudar. Também atuamos em empresas que enfrentam retrabalho constante entre áreas, dificuldades em priorizar investimentos ou na implementação de estratégias centradas no usuário (user-centered design). Nossa abordagem orientada a evidências e pesquisa com usuários (UX research) estrutura soluções claras e focadas no negócio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como a Sensorama reduz risco antes de grandes investimentos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Sensorama reduz risco antes de grandes investimentos ao estruturar ciclos de validação rápida que combinam entendimento profundo do problema, desenvolvimento de soluções e testes. Utilizamos prototipação, UX research e testes de usabilidade para validar soluções com base em dados reais antes de escalar. Esse processo garante que a estratégia de produto (product strategy) esteja alinhada às necessidades do mercado e do usuário, minimizando riscos de falhas e desperdício de recursos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como os projetos são estruturados da Sensorama?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada projeto da Sensorama Design é especialmente pensado para o briefing que é nos passado. Fazemos um plano de trabalho que atende exatamente os objetivos dos clientes. Eles geralmente começam com entendimento profundo do problema, seguido por definição de estratégia (product strategy), design de soluções (UI/UX design) e validação contínua. Utilizamos metodologias ágeis e centradas no usuário (user-centered design), sempre garantindo que as decisões sejam tomadas com base em dados reais e com um foco claro em resultados mensuráveis de negócio.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona o modelo de atuação com times alocados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nosso modelo de atuação com times alocados é um diferencial importante. Ao contrário do modelo tradicional de consultorias, onde há apenas a entrega de recursos (body shop), nossos profissionais são alocados diretamente no cliente, com supervisão contínua e orientação estratégica da Sensorama. Isso inclui reuniões internas de acompanhamento, design critiques antes de entregas e 1:1 com o cliente para captação de feedbacks, garantindo alinhamento e qualidade em todas as fases do projeto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que impacto a Sensorama gera no negócio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Sensorama gera impacto mensurável no negócio ao aumentar a performance de produtos digitais, reduzir custos operacionais e melhorar a experiência do usuário (UX). Nossos projetos resultam em maior clareza estratégica, melhoria na adoção de produtos digitais, eficiência operacional e redução de riscos em decisões importantes. Ao trabalhar com dados reais, evidências e pesquisa com usuários, garantimos que cada ação contribua diretamente para KPIs de negócio como faturamento, retenção de clientes e ROI.',
      },
    },
    {
      '@type': 'Question',
      name: 'Por que escolher a Sensorama e não outra consultoria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Sensorama se destaca de outras consultorias por combinar pesquisa com usuários (UX research), design estratégico (design thinking), design de produto (UI/UX design) e inteligência artificial (AI), com foco em decisões baseadas em evidências e resultados concretos. Nosso trabalho é orientado a resolver problemas reais, com um modelo de atuação mais próximo ao cliente, com times alocados e a participação das sócias da Sensorama desde a estratégia até a supervisão dos projetos. Temos alta capacidade de adaptação às necessidades do cliente, com modelos flexíveis de contratação e entrega.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como a Sensorama garante a conformidade com a LGPD nas pesquisas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Sensorama tem um processo robusto de LGPD (Lei Geral de Proteção de Dados), com gestores de dados por projeto que acompanham o recrutamento, fazem a anonimização dos dados e a gestão das informações pessoais dos usuários que participam das pesquisas. Este processo é verificado e certificado pela empresa Data Guide, garantindo conformidade com a legislação e segurança nas informações pessoais.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais são os entregáveis dos projetos da Sensorama Design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Os entregáveis da Sensorama variam por projeto. Em todos eles, nós realizamos o relatório do projeto com todos os resultados de pesquisa, definições e detalhamento da solução. Ele é apresentado aos stakeholders em formato executivo. Em projetos de design de produto, também entregamos o arquivo do Figma organizado com todas as interfaces, interações necessárias e comentários para os desenvolvedores. Os projetos de design de serviço incluem ainda jornadas do usuário e service blueprints detalhadas no Miro, Figma ou outra plataforma solicitada pelo cliente.',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-19STK4PSKH';
  const csId = process.env.NEXT_PUBLIC_CONTENTSQUARE_ID || '6dfc7208f63b6';

  return (
    <html lang="pt-BR">
      <head>
        {/* JSON-LD: Organization (static) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* JSON-LD: FAQ (static) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>

        {/* ContentSquare */}
        <Script
          src={`https://t.contentsquare.net/uxa/${csId}.js`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
