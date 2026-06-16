import { Helmet } from "react-helmet-async";

type Lang = "en" | "pt" | "es";

const Fnt = { heading: "'Unbounded', sans-serif", body: "'Open Sans', sans-serif" };
const Clr = {
  blue: "#2F5BFF", green: "#43E58E", black: "#000000",
  medGray: "#6B6B6B", darkGray: "#2A2A2A", lightGray: "#F5F5F5", white: "#FFFFFF",
};

const BASE = "https://www.sensoramadesign.com";

const meta = {
  en: {
    title: "Privacy Notice — Sensorama Design",
    description: "Privacy Notice of the Sensorama Design website, explaining how we collect, process and protect personal data under Brazilian LGPD (Law No. 13,709/2018) and the ANPD guidelines.",
    canonical: `${BASE}/en/privacy-policy`,
    lang: "en",
  },
  pt: {
    title: "Aviso de Privacidade — Sensorama Design",
    description: "Aviso de Privacidade do site da Sensorama Design, explicando como coletamos, tratamos e protegemos dados pessoais conforme a LGPD (Lei nº 13.709/2018) e as diretrizes da ANPD.",
    canonical: `${BASE}/privacy-policy`,
    lang: "pt-BR",
  },
  es: {
    title: "Aviso de Privacidad — Sensorama Design",
    description: "Aviso de Privacidad del sitio de Sensorama Design, que explica cómo recopilamos, tratamos y protegemos los datos personales conforme a la LGPD (Ley n.º 13.709/2018) y las directrices de la ANPD.",
    canonical: `${BASE}/es/privacy-policy`,
    lang: "es",
  },
};

type TableData = { headers: string[]; rows: string[][] };

type Section = {
  heading: string;
  body: string;
  tableData?: TableData;
  bodyAfter?: string;
};

/* ─────────────────────────────────────────────────────────────
   PORTUGUESE — official Data Guide text (15/05/2026), verbatim
───────────────────────────────────────────────────────────── */
const contentPT: { back: string; backHref: string; updated: string; title: string; sections: Section[] } = {
  back: "← Voltar ao site",
  backHref: "/",
  updated: "Última atualização: 15/05/2026",
  title: "AVISO DE PRIVACIDADE | SITE SENSORAMA",
  sections: [
    {
      heading: "1. OBJETIVO DESTE AVISO",
      body: `Nós, da Sensorama, estamos comprometidos com o cumprimento das leis de proteção de dados pessoais, com a garantia dos direitos dos Titulares de Dados ("Você") e com as diretrizes da Agência Nacional de Proteção de Dados (ANPD). Por isso, elaboramos este Aviso de Privacidade ("Aviso") com o objetivo de informar de maneira clara e objetiva como coletamos, tratamos e protegemos seus dados pessoais no âmbito da prestação de nossos serviços.\n\nDessa forma, para garantir a transparência sobre o tratamento dos dados pessoais realizado pela Sensorama tornamos público este Aviso.\n\nLembrando que, caso você tenha qualquer dúvida, sempre pode nos contatar por meio do seguinte e-mail: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br].`,
    },
    {
      heading: "2. DEFINIÇÕES",
      body: `Para a compreensão deste Aviso, a seguir apresentamos algumas definições:\n\n**Agência Nacional de Proteção de Dados (ANPD):** é o órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento da LGPD;\n\n**Controlador:** pessoa natural ou jurídica a quem compete as decisões referentes ao tratamento de dados pessoais. Quando a Sensorama coletar dados pessoais de leads e clientes neste site ou por meio de outras interações para a prestação de seus serviços a Sensorama atuará como Controlador dos Dados.\n\n**Dado pessoal:** informação relacionada a pessoa natural identificada ou identificável;\n\n**Dado pessoal sensível:** dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico, quando vinculado a uma pessoa natural;\n\n**Encarregado pelo Tratamento de Dados Pessoais ou "Encarregado":** pessoa física ou jurídica indicada pelo controlador e operador, para atuar como canal de comunicação com os titulares dos dados e a Agência Nacional de Proteção de Dados (ANPD);\n\n**Lei Geral de Proteção de Dados Pessoais ou "LGPD":** refere-se a Lei nº 13.708/2018 que dispõe sobre o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural ou por pessoa jurídica de direito público ou privado;\n\n**Operador:** pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador.\n\n**Titular:** pessoa natural identificada ou identificável a quem se referem os Dados Pessoais tratados, incluindo leads e clientes da Sensorama, a depender do caso concreto;\n\n**Tratamento:** toda operação realizada com dados pessoais, como as que se referem a coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração;\n\n**Site:** refere-se à página web oficial gerenciada e administrada pela Sensorama, incluindo todos os seus conteúdos, funcionalidades e serviços disponibilizados por meio deste endereço eletrônico.`,
    },
    {
      heading: "3. QUAIS SÃO OS SEUS DIREITOS?",
      body: `Em relação aos seus dados pessoais, você possui os seguintes direitos:\n\n• **Direito de confirmação:** confirmar se há tratamento de dados pessoais a seu respeito realizado pela Sensorama;\n• **Direito de acesso:** acessar os dados pessoais a seu respeito tratados pela Sensorama;\n• **Direito de correção:** corrigir seus dados pessoais caso estejam incompletos, inexatos ou desatualizados;\n• **Direito de anonimização, bloqueio ou eliminação:** solicitar a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em desacordo com a LGPD;\n• **Direito à portabilidade:** se aplicável, solicitar a portabilidade dos dados pessoais que lhe digam respeito a outra empresa, mediante requisição expressa, observados os limites relativos ao segredo comercial e industrial da Sensorama;\n• **Direito de eliminação:** solicitar a eliminação dos dados pessoais que lhe digam respeito tratados com seu consentimento, conforme exceções previstas no artigo 16 da LGPD;\n• **Direito de informação sobre uso compartilhado:** solicitar informação das empresas públicas e privadas com as quais a Sensorama realizou o uso compartilhado de dados pessoais;\n• **Direito de revogação do consentimento:** se aplicável, revogar o consentimento dado para o tratamento de dados pessoais pela Sensorama, a qualquer momento, mediante manifestação expressa.\n• **Direito de petição à ANPD:** peticionar em relação aos dados pessoais que lhe digam respeito, contra a Sensorama, perante a Autoridade Nacional de Proteção de Dados (ANPD);\n• **Direito de oposição:** opor-se ao tratamento de dados pessoais realizado pela Sensorama, com base nas hipóteses previstas nos artigos 7º e 11 da LGPD, que não o consentimento, em caso da referida lei;\n• **Direito de revisão de decisões automatizadas:** se aplicável, solicitar à Sensorama a revisão de decisões tomadas unicamente com tratamento automatizado de dados que lhe digam respeito e que afetem seus interesses.\n\nQuando a Sensorama for Controladora dos dados, esses direitos poderão ser exercidos via e-mail: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]\n\nNo caso em que a Sensorama figurar como Operadora dos Dados e receber alguma requisição de direitos de Titular, encaminharemos o pedido ao Controlador responsável.\n\nGarantimos, adicionalmente, que o tratamento dos seus dados pessoais observará os seguintes princípios:\n\n• **Limitação da finalidade:** os dados pessoais serão tratados somente para finalidades legítimas, específicas, explícitas e informadas, sendo vedado seu tratamento posterior de forma incompatível com essas finalidades;\n• **Tratamento adequado:** os dados pessoais serão tratados de maneira compatível com as finalidades informadas, respeitando o contexto em que são coletados e utilizados;\n• **Necessidade:** os dados serão limitados ao mínimo necessário para a realização de suas finalidades, abrangendo apenas os dados pertinentes, proporcionais e não excessivos;\n• **Transparência:** os titulares terão acesso a informações claras, precisas e facilmente acessíveis sobre o tratamento de seus dados pessoais;\n• **Livre acesso:** os titulares terão garantido o direito de consultar, de forma facilitada, as informações sobre a forma e a duração do tratamento de seus dados pessoais;\n• **Qualidade dos dados:** os titulares terão assegurada a exatidão, clareza e atualização dos seus dados, conforme necessário e para o cumprimento das finalidades da coleta;\n• **Segurança:** a Sensorama utilizará medidas técnicas e administrativas aptas à proteção dos dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão;\n• **Prevenção:** a Sensorama implementará medidas para prevenir danos decorrentes do tratamento de dados pessoais;\n• **Não discriminação:** a Sensorama não utilizará dados pessoais para fins discriminatórios ilícitos ou abusivos.\n• **Responsabilização e prestação de contas:** a Sensorama demonstrará a adoção de medidas eficazes para comprovar que observa e cumpre as normas de proteção de dados pessoais.`,
    },
    {
      heading: "4. QUAIS DADOS E INFORMAÇÕES TRATAMOS E PARA QUAL FINALIDADE?",
      body: `Todos os seus dados coletados e/ou fornecidos por meio do nosso site, de outras interações ou diretamente a nós, estarão em conformidade com as legislações de proteção de dados e com este Aviso de Privacidade. Esses dados serão tratados como confidenciais e utilizados exclusivamente para os fins aqui descritos e/ou autorizados por você.\n\n**Dados Pessoais.** Os Dados Pessoais tratados pela Sensorama podem envolver:\n\n• **Informações de contato,** como nome completo, endereço de e-mail, liderança, empresa, cargo e telefone;\n• **Informações profissionais,** como cargo, nome da empresa na qual o Titular trabalha ou mantém relação profissional, CNPJ e Razão Social da empresa;\n• **Informações de acesso,** como histórico de navegação, interação com conteúdo e visualização de páginas;\n• **Informações de acesso aos e-mails,** como data e abertura de e-mails, taxa de cliques e interação com conteúdos da caixa de entrada;\n• **Informações tratadas no contexto de pesquisas e projetos conduzidos pela Sensorama,** como nome, idade, gênero, grau de instrução, raça/etnia, orientação sexual, dados relacionados à saúde, restrições alimentares, condição gestacional, classe social, imagem e áudio/voz, conforme aplicável ao projeto;\n• **Informações de recrutamento e seleção,** como nome completo, foto, voz e e-mail, através do linkedin.\n\n**Titulares de Dados Pessoais.** Nós tratamos os Dados Pessoais de algumas categorias de Titulares. Isso significa que o nosso Titular ("Você") pode se encaixar em uma ou mais dessas categorias, que dividimos entre: (a) Visitantes, (b) Leads, (c) Candidatos e (d) Entrevistados.\n\n• Os **Visitantes** são aqueles titulares de Dados Pessoais que visitam ou acessam o Site ou páginas da Sensorama;\n• Os **Leads** são os potenciais clientes da Sensorama, isto é, Titulares de Dados Pessoais que, por si ou representando uma empresa, (i) interagem com os conteúdos da Sensorama (como baixar um e-book ou se inscrever em uma newsletter); ou (ii) preenchem um formulário de contato para saber mais sobre nossos serviços.\n• Os **Candidatos** são os Titulares de Dados Pessoais que participam de processos seletivos conduzidos pela Sensorama, inclusive por meio de plataformas profissionais, como o LinkedIn, para avaliação de perfil profissional e recrutamento.\n• Os **Entrevistados** são os Titulares de Dados Pessoais que participam de pesquisas, entrevistas, estudos ou demais iniciativas conduzidas pela Sensorama em nome de seus clientes. Nessas situações, a Sensorama poderá tratar dados pessoais fornecidos diretamente pelos titulares ou recebidos de terceiros, exclusivamente para viabilizar a execução das atividades relacionadas aos projetos contratados, como seleção de participantes, realização de entrevistas, análises estatísticas e interpretação dos resultados das pesquisas.\n\nA Sensorama pode tratar os seguintes dados pessoais, para as finalidades explícitas abaixo:\n\n**Tabela 1 — Dados coletados via site e uso:**`,
      tableData: {
        headers: ["Dados Pessoais Tratados", "Categoria de Titulares", "Finalidade do Tratamento", "Hipótese legal que justifica o tratamento"],
        rows: [
          [
            "Dados de contato — nome completo, endereço de e-mail, telefone, empresa e cargo",
            "Clientes e Leads",
            "Através do site o lead interessado fornece seus dados pessoais para receber contato da Sensorama.",
            "Legítimo Interesse",
          ],
          [
            "Dados de contato — Nome completo, e-mail, telefone, imagem/foto, voz e informações profissionais disponibilizadas pelo titular",
            "Candidatos",
            "Condução de processos seletivos e avaliação de perfil profissional para oportunidades na Sensorama",
            "Execução de contrato ou de procedimentos preliminares relacionados a contrato do qual seja parte o titular, a pedido do titular dos dados",
          ],
          [
            "Dados de Navegação — Endereço IP, Registros de interações com o website, Logs, tipo e versão de navegador, tipo e versão do sistema operacional",
            "Através do uso do site por parte do Visitante.",
            "Obediência ao artigo 15 da Lei n.º 12.965/2014, que impõe o dever da Sensorama de manter os respectivos registros de acesso a aplicações de internet, sob sigilo, em ambiente controlado e de segurança.",
            "Cumprimento de obrigação legal ou regulatória pelo controlador",
          ],
        ],
      },
      bodyAfter: `Para a prestação de nossos serviços, tratamos os seguintes dados, que podem ser obtidos diretamente do titular por meio de e-mail e outras ferramentas de comunicação. Em determinadas situações, também podemos receber dados por meio de terceiros.\n\n**Tabela 2 — Dados tratados na prestação de serviços:**\n[[TABLE2]]\nEventualmente, poderemos utilizar seus dados para finalidades não previstas nesta Política, mas estas estarão dentro das suas legítimas expectativas. O eventual uso dos seus dados para as finalidades que não cumpram com essa prerrogativa será feito mediante a sua autorização prévia.\n\nAlém disso, outros tipos de dados não previstos expressamente nesta Política de Privacidade poderão ser coletados, desde que sejam fornecidos com o consentimento do titular, ou, ainda, que a coleta seja permitida ou imposta por lei.`,
    },
    {
      heading: "5. DADOS PESSOAIS DE MENORES DE IDADE",
      body: `A Sensorama não realiza intencionalmente a coleta de dados pessoais de menores de 18 anos sem a observância dos requisitos legais aplicáveis e autorização do responsável legal, quando necessária. Se você for pai ou responsável legal de um menor e souber que o menor forneceu seus dados pessoais em nosso website ou por outro meio, entre em contato conosco através do seguinte endereço de e-mail [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br].`,
    },
    {
      heading: "6. COOKIES",
      body: `Nós utilizamos cookies! Mas afinal, o que são cookies? Cookies são pequenos arquivos de texto enviados pelo site ao seu computador onde são armazenados. Esses arquivos contêm informações relacionadas à sua navegação no site.\n\nA Sensorama utiliza cookies para aprimorar a experiência de uso em nossa página. Para saber mais sobre os cookies que utilizamos, suas finalidades e como você pode gerenciar suas preferências, consulte nosso [Aviso de Cookies|/cookie-policy].`,
    },
    {
      heading: "7. COMPARTILHAMENTO OU DIVULGAÇÃO DE DADOS PESSOAIS",
      body: `As informações coletadas são de nosso uso exclusivo para as finalidades aqui referidas, portanto, não serão vendidas a terceiros em qualquer hipótese.\n\nPoderão ter acesso interno às informações dos titulares apenas pessoas estritamente necessárias para a prestação do serviço.\n\nNo entanto, podemos compartilhar os seus dados pessoais se necessário para:\n\n**Conformidade legal.** compreendendo (i) processos e requisições legais; (ii) estabelecimento ou exercício de nossos direitos legais ou defesa em processos judiciais; ou (iii) conforme requerido por lei;\n\n**Colaboradores.** podemos compartilhar seus dados pessoais com nossos colaboradores, no qual eles apenas tratarão os dados para a execução do serviço necessário;\n\n**Prestação de Serviços por terceiros.** podemos, ainda, atuar em conjunto com outras empresas em diversas atividades para viabilizar o nosso serviço, para executar serviços relacionados ao site ou à Sensorama, ou, ainda, para nos auxiliar na análise de como nosso serviço é utilizado, a exemplo das empresas que fornecem os cookies que utilizamos em nosso site. Esses recebem seus dados apenas na medida do necessário para a prestação dos serviços contratados. Ressaltamos que nossos contratos são orientados pelas normas de proteção de dados do ordenamento jurídico brasileiro, proibindo estes terceiros de divulgar ou usar os dados para qualquer outra finalidade.\n\n**Aquisição ou fusão.** no caso de uma fusão, aquisição ou outro tipo de transação corporativa, podemos compartilhar seus dados pessoais com as partes envolvidas no processo, incluindo as empresas compradoras ou adquirentes, para fins de continuidade e integração dos produtos, sempre em conformidade com as normas de proteção de dados aplicáveis. Nesses cenários, garantimos que o tratamento dos dados continuará em conformidade com as regulamentações aplicáveis e que os titulares serão informados sobre quaisquer mudanças relevantes que possam impactar o uso de suas informações pessoais.`,
    },
    {
      heading: "8. SEGURANÇA NO TRATAMENTO DOS SEUS DADOS PESSOAIS",
      body: `Nos comprometemos a proteger sua privacidade aplicando medidas técnicas e organizacionais aptas a proteger os seus dados pessoais de acessos não autorizados e de situações de destruição, perda, alteração, comunicação ou difusão de tais dados.\n\nPara a garantia da segurança, serão adotadas soluções que levem em consideração: as técnicas adequadas; os custos de aplicação; a natureza, o âmbito, o contexto e as finalidades do tratamento; e os riscos para os direitos e liberdades do titular.`,
    },
    {
      heading: "9. TRANSFERÊNCIA INTERNACIONAL DE DADOS PESSOAIS",
      body: `A Sensorama está sediada no Brasil e os dados pessoais por Nós tratados estão sujeitos à legislação brasileira. No entanto, esses dados podem vir a ser transferidos para fora do território nacional, em razão de a Sensorama utilizar fornecedores que armazenam dados pessoais localizados em outros países, o que implica a Transferência Internacional de Dados Pessoais, conforme definição da Lei Geral de Proteção de Dados Pessoais (LGPD) e da Resolução CD/ANPD nº 19/2024.\n\nSempre priorizamos a contratação de fornecedores que adotem medidas de segurança necessárias para proteger os dados pessoais e que realizem transferências internacionais em conformidade com a LGPD e as resoluções e/ou diretrizes oficiais publicadas pela Autoridade Nacional de Proteção de Dados (ANPD) ou órgão competente, e com fundamento nas hipóteses de tratamento previstas nos artigos 7º ou 11 da LGPD e nas seguintes salvaguardas da Resolução CD/ANPD nº 19/2024: (i) para países ou organismos internacionais que garantam um nível de proteção de dados pessoais adequado à LGPD, (ii) cláusulas-padrão contratuais, normas corporativas globais ou cláusulas contratuais específicas, ou (iii) nas situações previstas nos incisos II, "d", e III a IX do artigo 33 da LGPD.`,
    },
    {
      heading: "10. ARMAZENAMENTO E ELIMINAÇÃO DOS DADOS PESSOAIS",
      body: `Os dados pessoais serão armazenados pelo período necessário para atingir a finalidade para a qual eles foram coletados ou até o fim do período de tratamento. Após esse prazo, eles serão eliminados, salvo nos seguintes casos: (i) quando necessário mantê-los para o cumprimento de obrigações legais ou regulatórias, como o disposto no art. 15 do Marco Civil da Internet, art. 206 do Código Civil e art. 27 do Código de Defesa do Consumidor; (ii) para o exercício regular de direitos, inclusive em contratos e em processos judiciais, administrativos ou arbitrais ou (iii) quando os dados forem anonimizados para uso exclusivo da Sensorama.`,
    },
    {
      heading: "11. RESPONSÁVEL PELO TRATAMENTO DE DADOS PESSOAIS",
      body: `Neste site, o responsável pelo tratamento dos dados pessoais é a SENSORAMA DESING LTDA ME, pessoa jurídica de direito privado, inscrita no CNPJ sob o nº 19064607000163, com sede na Rua Souza Dutra, 145, sala 807 Centro Exec Beira Mar Continental, CEP: 88070-605.\n\nEste Aviso não se aplica a eventuais endereços de sites citados ou direcionados através da nossa página, por isso é necessário que sejam lidos os Avisos de Privacidade do site em questão quando houver algum tipo de redirecionamento para endereço que não seja de propriedade da Sensorama.`,
    },
    {
      heading: "12. ENCARREGADO PELO TRATAMENTO DE DADOS PESSOAIS OU \"ENCARREGADO\"",
      body: `Nosso Encarregado pelo Tratamento de Dados Pessoais, também conhecido como Data Protection Officer (DPO) é a DATA GUIDE CONSULTORIA E SOLUÇÕES EM PROTEÇÃO DE DADOS LTDA, pessoa jurídica de direito privado inscrita no CNPJ sob o nº 39.317.591/0001-60, representada pela Taynara Rodrigues Bernardo, que pode ser contatada pelo endereço de e-mail [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br].`,
    },
    {
      heading: "13. ALTERAÇÕES NO PRESENTE AVISO",
      body: `Nos reservamos o direito de modificar este Aviso de Privacidade a qualquer tempo e quantas vezes forem necessárias, em razão de alterações em nosso site, atualizações em nosso processos internos, ou mudanças em âmbito legislativo, com o objetivo de garantir cada vez mais segurança e conveniência para você. Por isso, recomendamos que você o revise sempre que possível.\n\nCom a finalidade de facilitar, sempre indicaremos no fim do documento a data da última atualização, e se alterações substanciais forem feitas, notificaremos você sobre tais alterações antes que entrem em vigor.`,
    },
    {
      heading: "14. AGRADECEMOS POR LER NOSSO AVISO DE PRIVACIDADE!",
      body: `Estaremos sempre à disposição para atendê-lo. Caso tenha restado alguma dúvida ou deseje obter mais informações sobre este Aviso, por favor, entre em contato conosco: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]\n\n**Última atualização: 15/05/2026**`,
    },
  ],
};

const TABLE2_PT: TableData = {
  headers: ["Dados pessoais tratados", "Categoria de Titulares", "Finalidade do Tratamento", "Hipótese legal que justifica o tratamento"],
  rows: [
    [
      "Nome, Idade, Gênero, Grau de instrução, Raça/Etnia, Orientação Sexual, Dados de restrição alimentar, condição gestacional, informações relacionadas à vida sexual, Classe social, Imagem e Áudio/Voz",
      "Entrevistado",
      "Coletar e interpretar dados para compreender padrões, comportamentos e percepções dos participantes, contribuindo para a análise e compreensão dos resultados da pesquisa",
      "O agente enquadra-se como operador dos dados, e por isso a indicação da base legal cabe ao controlador",
    ],
    [
      "Nome, Idade, Gênero, Grau de instrução, Raça/Etnia, Orientação Sexual, Dados de restrição alimentar, condição gestacional, informações relacionadas à vida sexual, Classe social, Imagem e Áudio/Voz",
      "Entrevistado",
      "Estruturar e processar dados estatísticos para identificar tendências, correlações e métricas relevantes dentro do estudo.",
      "O agente enquadra-se como operador dos dados, e por isso a indicação da base legal cabe ao controlador",
    ],
    [
      "Nome, Idade, Telefone, Classe Social, Áudio/Voz e Imagem",
      "Entrevistado",
      "Identificar e selecionar fornecedores que atendam aos critérios estabelecidos pelo cliente, garantindo a adequação do perfil às necessidades do projeto.",
      "O agente enquadra-se como operador dos dados, e por isso a indicação da base legal cabe ao controlador",
    ],
    [
      "Nome, Idade, Telefone, Classe Social, Endereço, E-mail, Data de Nascimento, Áudio/Voz e Imagem",
      "Entrevistado",
      "Selecionar e contatar consumidores indicados pelo cliente para participação em pesquisas ou outras iniciativas, garantindo que atendam aos critérios definidos para o projeto.",
      "O agente enquadra-se como operador dos dados, e por isso a indicação da base legal cabe ao controlador",
    ],
  ],
};

/* ─────────────────────────────────────────────────────────────
   ENGLISH — faithful translation; legal references preserved
───────────────────────────────────────────────────────────── */
const contentEN: typeof contentPT = {
  back: "← Back to site",
  backHref: "/en/",
  updated: "Last updated: 15/05/2026",
  title: "PRIVACY NOTICE | SENSORAMA WEBSITE",
  sections: [
    {
      heading: "1. PURPOSE OF THIS NOTICE",
      body: `We, at Sensorama, are committed to compliance with personal data protection laws, to safeguarding the rights of Data Subjects ("You") and to the guidelines of the Brazilian National Data Protection Authority (ANPD). For this reason, we have prepared this Privacy Notice ("Notice") in order to inform you, in a clear and objective manner, how we collect, process and protect your personal data in the context of providing our services.\n\nThus, to ensure transparency about the personal data processing carried out by Sensorama, we make this Notice public.\n\nIf you have any questions, you can always contact us at: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br].`,
    },
    {
      heading: "2. DEFINITIONS",
      body: `For the understanding of this Notice, we present below some definitions:\n\n**National Data Protection Authority (ANPD):** the public administration body responsible for overseeing, implementing and supervising compliance with the LGPD;\n\n**Controller:** natural or legal person responsible for decisions regarding the processing of personal data. When Sensorama collects personal data of leads and clients on this site or through other interactions for the provision of its services, Sensorama will act as Data Controller.\n\n**Personal data:** information related to an identified or identifiable natural person;\n\n**Sensitive personal data:** personal data on racial or ethnic origin, religious belief, political opinion, trade-union membership or membership in a religious, philosophical or political organisation, data concerning health or sex life, genetic or biometric data, when linked to a natural person;\n\n**Data Protection Officer or "DPO":** natural or legal person designated by the controller and processor to act as a communication channel with data subjects and the Brazilian National Data Protection Authority (ANPD);\n\n**Brazilian General Data Protection Law or "LGPD":** refers to Law No. 13,708/2018, which governs the processing of personal data, including by digital means, by a natural person or a legal entity of public or private law;\n\n**Processor:** natural or legal person, of public or private law, that processes personal data on behalf of the controller.\n\n**Data Subject:** identified or identifiable natural person to whom the processed Personal Data refers, including Sensorama's leads and clients, as applicable;\n\n**Processing:** any operation carried out with personal data, such as collection, production, reception, classification, use, access, reproduction, transmission, distribution, processing, archiving, storage, deletion, evaluation or control of information, modification, communication, transfer, dissemination or extraction;\n\n**Site:** refers to the official web page managed and administered by Sensorama, including all of its content, functionalities and services made available through this electronic address.`,
    },
    {
      heading: "3. WHAT ARE YOUR RIGHTS?",
      body: `In relation to your personal data, you have the following rights:\n\n• **Right to confirmation:** to confirm whether Sensorama is processing personal data concerning you;\n• **Right of access:** to access the personal data concerning you that Sensorama processes;\n• **Right to correction:** to correct your personal data if it is incomplete, inaccurate or out of date;\n• **Right to anonymisation, blocking or deletion:** to request the anonymisation, blocking or deletion of unnecessary or excessive data, or data processed in non-compliance with the LGPD;\n• **Right to portability:** where applicable, to request the portability of personal data concerning you to another company, by express request, subject to limits relating to Sensorama's commercial and industrial secrets;\n• **Right to deletion:** to request the deletion of personal data concerning you that is processed based on your consent, subject to the exceptions provided in Article 16 of the LGPD;\n• **Right to information on shared use:** to request information about the public and private entities with which Sensorama has shared personal data;\n• **Right to revoke consent:** where applicable, to revoke at any time the consent given for the processing of personal data by Sensorama, by express manifestation.\n• **Right to petition the ANPD:** to petition concerning personal data relating to you, against Sensorama, before the National Data Protection Authority (ANPD);\n• **Right to object:** to object to the processing of personal data carried out by Sensorama based on the hypotheses set forth in Articles 7 and 11 of the LGPD, other than consent, in the event of non-compliance with the said law;\n• **Right to review automated decisions:** where applicable, to request Sensorama's review of decisions taken solely on the basis of automated data processing that affect your interests.\n\nWhen Sensorama acts as Controller of the data, these rights may be exercised via email: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]\n\nIn cases where Sensorama acts as Data Processor and receives a Data Subject request, we will forward the request to the responsible Controller.\n\nWe additionally guarantee that the processing of your personal data will observe the following principles:\n\n• **Purpose limitation:** personal data will be processed only for legitimate, specific, explicit and informed purposes, with subsequent processing in a manner incompatible with those purposes being prohibited;\n• **Adequate processing:** personal data will be processed in a manner compatible with the informed purposes, respecting the context in which it is collected and used;\n• **Necessity:** data will be limited to the minimum necessary to fulfil its purposes, covering only relevant, proportional and non-excessive data;\n• **Transparency:** data subjects will have access to clear, precise and easily accessible information about the processing of their personal data;\n• **Free access:** data subjects will be guaranteed the right to consult, in a facilitated manner, information about the form and duration of the processing of their personal data;\n• **Data quality:** data subjects will be assured of the accuracy, clarity and updating of their data, as necessary and for the fulfilment of the purposes of collection;\n• **Security:** Sensorama will use technical and administrative measures suited to protect personal data from unauthorised access and from accidental or unlawful situations of destruction, loss, alteration, communication or dissemination;\n• **Prevention:** Sensorama will implement measures to prevent damages arising from the processing of personal data;\n• **Non-discrimination:** Sensorama will not use personal data for unlawful or abusive discriminatory purposes.\n• **Accountability:** Sensorama will demonstrate the adoption of effective measures to prove that it observes and complies with the personal data protection rules.`,
    },
    {
      heading: "4. WHAT DATA AND INFORMATION DO WE PROCESS AND FOR WHAT PURPOSE?",
      body: `All your data collected and/or provided through our site, other interactions or directly to us, will be in compliance with data protection laws and this Privacy Notice. Such data will be treated as confidential and used exclusively for the purposes described herein and/or authorised by you.\n\n**Personal Data.** The Personal Data processed by Sensorama may involve:\n\n• **Contact information,** such as full name, e-mail address, leadership, company, role and telephone;\n• **Professional information,** such as role, name of the company in which the Data Subject works or maintains a professional relationship, company CNPJ and corporate name;\n• **Access information,** such as browsing history, interaction with content and page views;\n• **E-mail access information,** such as date and opening of e-mails, click-through rate and interaction with inbox content;\n• **Information processed in the context of research and projects conducted by Sensorama,** such as name, age, gender, education level, race/ethnicity, sexual orientation, health-related data, dietary restrictions, pregnancy status, social class, image and audio/voice, as applicable to the project;\n• **Recruitment and selection information,** such as full name, photo, voice and e-mail, via LinkedIn.\n\n**Personal Data Subjects.** We process the Personal Data of certain categories of Data Subjects. This means that our Data Subject ("You") may fall into one or more of these categories, which we divide between: (a) Visitors, (b) Leads, (c) Candidates and (d) Interviewees.\n\n• **Visitors** are Data Subjects who visit or access the Site or Sensorama pages;\n• **Leads** are Sensorama's potential clients, that is, Data Subjects who, by themselves or representing a company, (i) interact with Sensorama's content (such as downloading an e-book or subscribing to a newsletter); or (ii) fill out a contact form to learn more about our services.\n• **Candidates** are Data Subjects who participate in selection processes conducted by Sensorama, including through professional platforms such as LinkedIn, for evaluation of professional profile and recruitment.\n• **Interviewees** are Data Subjects who participate in research, interviews, studies or other initiatives conducted by Sensorama on behalf of its clients. In these situations, Sensorama may process personal data provided directly by data subjects or received from third parties, exclusively to enable the execution of activities related to the contracted projects, such as participant selection, conducting interviews, statistical analyses and interpretation of research results.\n\nSensorama may process the following personal data for the explicit purposes below:\n\n**Table 1 — Data collected via site and usage:**`,
      tableData: {
        headers: ["Personal Data Processed", "Category of Data Subjects", "Purpose of Processing", "Legal basis justifying the processing"],
        rows: [
          [
            "Contact data — full name, e-mail address, telephone, company and role",
            "Clients and Leads",
            "Through the site the interested lead provides their personal data to receive contact from Sensorama.",
            "Legitimate Interest",
          ],
          [
            "Contact data — Full name, e-mail, telephone, image/photo, voice and professional information made available by the subject",
            "Candidates",
            "Conducting selection processes and evaluating professional profile for opportunities at Sensorama",
            "Execution of contract or preliminary procedures related to a contract to which the subject is a party, at the subject's request",
          ],
          [
            "Browsing Data — IP address, Records of interactions with the website, Logs, type and version of browser, type and version of operating system",
            "Through the use of the site by the Visitor.",
            "Compliance with Article 15 of Law No. 12,965/2014, which imposes on Sensorama the duty to maintain the respective records of access to internet applications, under secrecy, in a controlled and secure environment.",
            "Compliance with legal or regulatory obligation by the controller",
          ],
        ],
      },
      bodyAfter: `For the provision of our services, we process the following data, which may be obtained directly from the subject through e-mail and other communication tools. In certain situations, we may also receive data through third parties.\n\n**Table 2 — Data processed in the provision of services:**\n[[TABLE2]]\nOccasionally, we may use your data for purposes not foreseen in this Policy, but these will be within your legitimate expectations. Any use of your data for purposes that do not comply with this prerogative will be made with your prior authorisation.\n\nIn addition, other types of data not expressly provided for in this Privacy Policy may be collected, provided that they are supplied with the subject's consent, or that the collection is permitted or imposed by law.`,
    },
    {
      heading: "5. PERSONAL DATA OF MINORS",
      body: `Sensorama does not intentionally collect personal data of minors under 18 years of age without observing applicable legal requirements and authorisation of the legal guardian, when required. If you are a parent or legal guardian of a minor and become aware that the minor has provided their personal data on our website or by other means, please contact us at the following e-mail address [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br].`,
    },
    {
      heading: "6. COOKIES",
      body: `We use cookies! But what are cookies? Cookies are small text files sent by the website to your computer where they are stored. These files contain information related to your browsing of the site.\n\nSensorama uses cookies to enhance the user experience on our page. To learn more about the cookies we use, their purposes and how you can manage your preferences, see our [Cookie Notice|/en/cookie-policy].`,
    },
    {
      heading: "7. SHARING OR DISCLOSURE OF PERSONAL DATA",
      body: `The information collected is for our exclusive use for the purposes referred to herein, therefore, it will not be sold to third parties under any circumstances.\n\nOnly persons strictly necessary for the provision of the service may have internal access to the data subjects' information.\n\nHowever, we may share your personal data if necessary for:\n\n**Legal compliance.** comprising (i) legal processes and requests; (ii) establishment or exercise of our legal rights or defence in legal proceedings; or (iii) as required by law;\n\n**Collaborators.** we may share your personal data with our collaborators, where they will only process the data for the execution of the necessary service;\n\n**Provision of Services by third parties.** we may also act jointly with other companies in various activities to enable our service, to execute services related to the site or Sensorama, or to assist us in analysing how our service is used, such as the companies that provide the cookies we use on our site. These receive your data only to the extent necessary for the provision of the contracted services. We emphasise that our contracts are guided by the data protection rules of the Brazilian legal system, prohibiting these third parties from disclosing or using the data for any other purpose.\n\n**Acquisition or merger.** in the case of a merger, acquisition or other type of corporate transaction, we may share your personal data with the parties involved in the process, including the purchasing or acquiring companies, for the purposes of continuity and integration of the products, always in compliance with the applicable data protection rules. In such scenarios, we ensure that the processing of the data will continue in compliance with the applicable regulations and that the data subjects will be informed about any relevant changes that may impact the use of their personal information.`,
    },
    {
      heading: "8. SECURITY IN THE PROCESSING OF YOUR PERSONAL DATA",
      body: `We commit to protecting your privacy by applying technical and organisational measures suited to protect your personal data from unauthorised access and from situations of destruction, loss, alteration, communication or dissemination of such data.\n\nTo guarantee security, solutions will be adopted that take into account: appropriate techniques; application costs; the nature, scope, context and purposes of the processing; and the risks to the rights and freedoms of the data subject.`,
    },
    {
      heading: "9. INTERNATIONAL TRANSFER OF PERSONAL DATA",
      body: `Sensorama is headquartered in Brazil and the personal data processed by Us is subject to Brazilian legislation. However, this data may be transferred outside the national territory, due to Sensorama's use of suppliers that store personal data located in other countries, which entails the International Transfer of Personal Data, as defined by the Brazilian General Data Protection Law (LGPD) and Resolution CD/ANPD No. 19/2024.\n\nWe always prioritise the engagement of suppliers that adopt the security measures necessary to protect personal data and that carry out international transfers in compliance with the LGPD and the official resolutions and/or guidelines published by the National Data Protection Authority (ANPD) or competent body, and on the basis of the processing hypotheses set forth in Articles 7 or 11 of the LGPD and the following safeguards of Resolution CD/ANPD No. 19/2024: (i) for countries or international organisations that guarantee a level of personal data protection adequate to the LGPD, (ii) standard contractual clauses, global corporate rules or specific contractual clauses, or (iii) in the situations provided for in items II, "d", and III to IX of Article 33 of the LGPD.`,
    },
    {
      heading: "10. STORAGE AND DELETION OF PERSONAL DATA",
      body: `Personal data will be stored for the period necessary to achieve the purpose for which it was collected or until the end of the processing period. After this period, it will be deleted, except in the following cases: (i) when necessary to keep it for compliance with legal or regulatory obligations, such as those provided for in Art. 15 of the Brazilian Internet Civil Framework, Art. 206 of the Civil Code and Art. 27 of the Consumer Protection Code; (ii) for the regular exercise of rights, including in contracts and in judicial, administrative or arbitration proceedings; or (iii) when the data is anonymised for Sensorama's exclusive use.`,
    },
    {
      heading: "11. PERSON RESPONSIBLE FOR THE PROCESSING OF PERSONAL DATA",
      body: `On this site, the person responsible for the processing of personal data is SENSORAMA DESING LTDA ME, a private-law legal entity, registered under CNPJ No. 19064607000163, with headquarters at Rua Souza Dutra, 145, sala 807 Centro Exec Beira Mar Continental, CEP: 88070-605.\n\nThis Notice does not apply to any addresses of sites cited or directed through our page; therefore, it is necessary to read the Privacy Notices of the site in question whenever there is any type of redirection to an address that is not owned by Sensorama.`,
    },
    {
      heading: "12. DATA PROTECTION OFFICER (\"ENCARREGADO\")",
      body: `Our Data Protection Officer (DPO) is DATA GUIDE CONSULTORIA E SOLUÇÕES EM PROTEÇÃO DE DADOS LTDA, a private-law legal entity registered under CNPJ No. 39.317.591/0001-60, represented by Taynara Rodrigues Bernardo, who may be contacted at the e-mail address [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br].`,
    },
    {
      heading: "13. CHANGES TO THIS NOTICE",
      body: `We reserve the right to modify this Privacy Notice at any time and as many times as necessary, due to changes in our site, updates to our internal processes, or changes in the legislative scope, in order to guarantee ever more security and convenience for you. Therefore, we recommend that you review it whenever possible.\n\nTo make things easier, we will always indicate at the end of the document the date of the last update, and if substantial changes are made, we will notify you of such changes before they come into effect.`,
    },
    {
      heading: "14. THANK YOU FOR READING OUR PRIVACY NOTICE!",
      body: `We will always be available to assist you. Should you have any remaining questions or wish to obtain more information about this Notice, please contact us: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]\n\n**Last updated: 15/05/2026**`,
    },
  ],
};

const TABLE2_EN: TableData = {
  headers: ["Personal data processed", "Category of Data Subjects", "Purpose of Processing", "Legal basis justifying the processing"],
  rows: [
    [
      "Name, Age, Gender, Education level, Race/Ethnicity, Sexual Orientation, Dietary restriction data, pregnancy status, information related to sex life, Social class, Image and Audio/Voice",
      "Interviewee",
      "To collect and interpret data to understand patterns, behaviours and perceptions of participants, contributing to the analysis and understanding of research results",
      "The agent qualifies as data processor, and therefore the indication of the legal basis is the controller's responsibility",
    ],
    [
      "Name, Age, Gender, Education level, Race/Ethnicity, Sexual Orientation, Dietary restriction data, pregnancy status, information related to sex life, Social class, Image and Audio/Voice",
      "Interviewee",
      "To structure and process statistical data to identify trends, correlations and relevant metrics within the study.",
      "The agent qualifies as data processor, and therefore the indication of the legal basis is the controller's responsibility",
    ],
    [
      "Name, Age, Telephone, Social Class, Audio/Voice and Image",
      "Interviewee",
      "To identify and select suppliers that meet the criteria established by the client, ensuring the suitability of the profile to the project's needs.",
      "The agent qualifies as data processor, and therefore the indication of the legal basis is the controller's responsibility",
    ],
    [
      "Name, Age, Telephone, Social Class, Address, E-mail, Date of Birth, Audio/Voice and Image",
      "Interviewee",
      "To select and contact consumers indicated by the client for participation in research or other initiatives, ensuring they meet the criteria defined for the project.",
      "The agent qualifies as data processor, and therefore the indication of the legal basis is the controller's responsibility",
    ],
  ],
};

/* ─────────────────────────────────────────────────────────────
   SPANISH — faithful translation; legal references preserved
───────────────────────────────────────────────────────────── */
const contentES: typeof contentPT = {
  back: "← Volver al sitio",
  backHref: "/es/",
  updated: "Última actualización: 15/05/2026",
  title: "AVISO DE PRIVACIDAD | SITIO SENSORAMA",
  sections: [
    {
      heading: "1. OBJETIVO DE ESTE AVISO",
      body: `Nosotros, de Sensorama, estamos comprometidos con el cumplimiento de las leyes de protección de datos personales, con la garantía de los derechos de los Titulares de Datos ("Usted") y con las directrices de la Autoridad Nacional de Protección de Datos brasileña (ANPD). Por ello, elaboramos este Aviso de Privacidad ("Aviso") con el objetivo de informar de manera clara y objetiva cómo recopilamos, tratamos y protegemos sus datos personales en el ámbito de la prestación de nuestros servicios.\n\nDe esta forma, para garantizar la transparencia sobre el tratamiento de los datos personales realizado por Sensorama, hacemos público este Aviso.\n\nRecordando que, si tiene alguna duda, siempre puede contactarnos a través del siguiente correo electrónico: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br].`,
    },
    {
      heading: "2. DEFINICIONES",
      body: `Para la comprensión de este Aviso, presentamos a continuación algunas definiciones:\n\n**Autoridad Nacional de Protección de Datos (ANPD):** es el órgano de la administración pública responsable de velar, implementar y fiscalizar el cumplimiento de la LGPD;\n\n**Responsable (Controlador):** persona natural o jurídica a quien compete las decisiones referentes al tratamiento de datos personales. Cuando Sensorama recopile datos personales de leads y clientes en este sitio o a través de otras interacciones para la prestación de sus servicios, Sensorama actuará como Responsable de los Datos.\n\n**Dato personal:** información relacionada con una persona natural identificada o identificable;\n\n**Dato personal sensible:** dato personal sobre origen racial o étnico, convicción religiosa, opinión política, afiliación sindical o a organización de carácter religioso, filosófico o político, dato relativo a la salud o a la vida sexual, dato genético o biométrico, cuando esté vinculado a una persona natural;\n\n**Encargado del Tratamiento de Datos Personales o "Encargado":** persona física o jurídica indicada por el responsable y operador, para actuar como canal de comunicación con los titulares de los datos y la Autoridad Nacional de Protección de Datos (ANPD);\n\n**Ley General de Protección de Datos Personales o "LGPD":** se refiere a la Ley n.º 13.708/2018 que dispone sobre el tratamiento de datos personales, incluso en los medios digitales, por persona natural o por persona jurídica de derecho público o privado;\n\n**Operador (Encargado del tratamiento):** persona natural o jurídica, de derecho público o privado, que realiza el tratamiento de datos personales en nombre del responsable.\n\n**Titular:** persona natural identificada o identificable a quien se refieren los Datos Personales tratados, incluyendo leads y clientes de Sensorama, según corresponda;\n\n**Tratamiento:** toda operación realizada con datos personales, como las que se refieren a recopilación, producción, recepción, clasificación, utilización, acceso, reproducción, transmisión, distribución, procesamiento, archivo, almacenamiento, eliminación, evaluación o control de la información, modificación, comunicación, transferencia, difusión o extracción;\n\n**Sitio:** se refiere a la página web oficial gestionada y administrada por Sensorama, incluyendo todos sus contenidos, funcionalidades y servicios disponibles a través de esta dirección electrónica.`,
    },
    {
      heading: "3. ¿CUÁLES SON SUS DERECHOS?",
      body: `En relación con sus datos personales, usted posee los siguientes derechos:\n\n• **Derecho de confirmación:** confirmar si Sensorama realiza tratamiento de datos personales sobre usted;\n• **Derecho de acceso:** acceder a los datos personales sobre usted tratados por Sensorama;\n• **Derecho de corrección:** corregir sus datos personales en caso de que estén incompletos, inexactos o desactualizados;\n• **Derecho de anonimización, bloqueo o eliminación:** solicitar la anonimización, el bloqueo o la eliminación de datos innecesarios, excesivos o tratados en desacuerdo con la LGPD;\n• **Derecho a la portabilidad:** si corresponde, solicitar la portabilidad de los datos personales que le conciernen a otra empresa, mediante solicitud expresa, observados los límites relativos al secreto comercial e industrial de Sensorama;\n• **Derecho de eliminación:** solicitar la eliminación de los datos personales que le conciernen, tratados con su consentimiento, conforme a las excepciones previstas en el artículo 16 de la LGPD;\n• **Derecho de información sobre uso compartido:** solicitar información de las empresas públicas y privadas con las cuales Sensorama realizó el uso compartido de datos personales;\n• **Derecho de revocación del consentimiento:** si corresponde, revocar el consentimiento dado para el tratamiento de datos personales por Sensorama, en cualquier momento, mediante manifestación expresa.\n• **Derecho de petición ante la ANPD:** peticionar en relación con los datos personales que le conciernen, contra Sensorama, ante la Autoridad Nacional de Protección de Datos (ANPD);\n• **Derecho de oposición:** oponerse al tratamiento de datos personales realizado por Sensorama, con base en las hipótesis previstas en los artículos 7º y 11 de la LGPD, distintas al consentimiento, en caso de incumplimiento de dicha ley;\n• **Derecho de revisión de decisiones automatizadas:** si corresponde, solicitar a Sensorama la revisión de decisiones tomadas únicamente con tratamiento automatizado de datos que le conciernen y que afecten sus intereses.\n\nCuando Sensorama sea Responsable de los datos, estos derechos podrán ejercerse vía correo electrónico: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]\n\nEn el caso en que Sensorama figure como Operador de los Datos y reciba alguna solicitud de derechos de Titular, encaminaremos el pedido al Responsable correspondiente.\n\nGarantizamos, adicionalmente, que el tratamiento de sus datos personales observará los siguientes principios:\n\n• **Limitación de la finalidad:** los datos personales serán tratados solo para finalidades legítimas, específicas, explícitas e informadas, estando prohibido su tratamiento posterior de forma incompatible con dichas finalidades;\n• **Tratamiento adecuado:** los datos personales serán tratados de manera compatible con las finalidades informadas, respetando el contexto en que se recopilan y utilizan;\n• **Necesidad:** los datos se limitarán al mínimo necesario para la realización de sus finalidades, abarcando solo los datos pertinentes, proporcionales y no excesivos;\n• **Transparencia:** los titulares tendrán acceso a información clara, precisa y fácilmente accesible sobre el tratamiento de sus datos personales;\n• **Libre acceso:** los titulares tendrán garantizado el derecho de consultar, de forma facilitada, las informaciones sobre la forma y duración del tratamiento de sus datos personales;\n• **Calidad de los datos:** los titulares tendrán asegurada la exactitud, claridad y actualización de sus datos, según sea necesario y para el cumplimiento de las finalidades de la recopilación;\n• **Seguridad:** Sensorama utilizará medidas técnicas y administrativas aptas para la protección de los datos personales de accesos no autorizados y de situaciones accidentales o ilícitas de destrucción, pérdida, alteración, comunicación o difusión;\n• **Prevención:** Sensorama implementará medidas para prevenir daños derivados del tratamiento de datos personales;\n• **No discriminación:** Sensorama no utilizará datos personales para fines discriminatorios ilícitos o abusivos.\n• **Responsabilización y rendición de cuentas:** Sensorama demostrará la adopción de medidas eficaces para comprobar que observa y cumple las normas de protección de datos personales.`,
    },
    {
      heading: "4. ¿QUÉ DATOS E INFORMACIÓN TRATAMOS Y CON QUÉ FINALIDAD?",
      body: `Todos sus datos recopilados y/o proporcionados a través de nuestro sitio, de otras interacciones o directamente a nosotros, estarán en conformidad con las legislaciones de protección de datos y con este Aviso de Privacidad. Estos datos serán tratados como confidenciales y utilizados exclusivamente para los fines aquí descritos y/o autorizados por usted.\n\n**Datos Personales.** Los Datos Personales tratados por Sensorama pueden involucrar:\n\n• **Información de contacto,** como nombre completo, dirección de correo electrónico, liderazgo, empresa, cargo y teléfono;\n• **Información profesional,** como cargo, nombre de la empresa en la cual el Titular trabaja o mantiene relación profesional, CNPJ y razón social de la empresa;\n• **Información de acceso,** como historial de navegación, interacción con contenido y visualización de páginas;\n• **Información de acceso a los correos electrónicos,** como fecha y apertura de correos, tasa de clics e interacción con contenidos de la bandeja de entrada;\n• **Información tratada en el contexto de investigaciones y proyectos conducidos por Sensorama,** como nombre, edad, género, grado de instrucción, raza/etnia, orientación sexual, datos relacionados con la salud, restricciones alimentarias, condición gestacional, clase social, imagen y audio/voz, conforme aplicable al proyecto;\n• **Información de reclutamiento y selección,** como nombre completo, foto, voz y correo electrónico, a través de LinkedIn.\n\n**Titulares de Datos Personales.** Tratamos los Datos Personales de algunas categorías de Titulares. Esto significa que nuestro Titular ("Usted") puede encajar en una o más de estas categorías, que dividimos entre: (a) Visitantes, (b) Leads, (c) Candidatos y (d) Entrevistados.\n\n• Los **Visitantes** son aquellos titulares de Datos Personales que visitan o acceden al Sitio o a páginas de Sensorama;\n• Los **Leads** son los potenciales clientes de Sensorama, es decir, Titulares de Datos Personales que, por sí mismos o representando a una empresa, (i) interactúan con los contenidos de Sensorama (como descargar un e-book o suscribirse a un boletín); o (ii) completan un formulario de contacto para saber más sobre nuestros servicios.\n• Los **Candidatos** son los Titulares de Datos Personales que participan en procesos selectivos conducidos por Sensorama, incluso a través de plataformas profesionales, como LinkedIn, para evaluación de perfil profesional y reclutamiento.\n• Los **Entrevistados** son los Titulares de Datos Personales que participan en investigaciones, entrevistas, estudios u otras iniciativas conducidas por Sensorama en nombre de sus clientes. En estas situaciones, Sensorama podrá tratar datos personales proporcionados directamente por los titulares o recibidos de terceros, exclusivamente para viabilizar la ejecución de las actividades relacionadas con los proyectos contratados, como selección de participantes, realización de entrevistas, análisis estadísticos e interpretación de los resultados de las investigaciones.\n\nSensorama puede tratar los siguientes datos personales para las finalidades explícitas a continuación:\n\n**Tabla 1 — Datos recopilados vía sitio y uso:**`,
      tableData: {
        headers: ["Datos Personales Tratados", "Categoría de Titulares", "Finalidad del Tratamiento", "Hipótesis legal que justifica el tratamiento"],
        rows: [
          [
            "Datos de contacto — nombre completo, dirección de correo electrónico, teléfono, empresa y cargo",
            "Clientes y Leads",
            "A través del sitio el lead interesado proporciona sus datos personales para recibir contacto de Sensorama.",
            "Interés Legítimo",
          ],
          [
            "Datos de contacto — Nombre completo, correo electrónico, teléfono, imagen/foto, voz e información profesional disponible por el titular",
            "Candidatos",
            "Conducción de procesos selectivos y evaluación de perfil profesional para oportunidades en Sensorama",
            "Ejecución de contrato o de procedimientos preliminares relacionados con un contrato del cual sea parte el titular, a petición del titular de los datos",
          ],
          [
            "Datos de Navegación — Dirección IP, Registros de interacciones con el sitio, Logs, tipo y versión de navegador, tipo y versión del sistema operativo",
            "A través del uso del sitio por parte del Visitante.",
            "Obediencia al artículo 15 de la Ley n.º 12.965/2014, que impone el deber de Sensorama de mantener los respectivos registros de acceso a aplicaciones de internet, bajo secreto, en ambiente controlado y de seguridad.",
            "Cumplimiento de obligación legal o regulatoria por el responsable",
          ],
        ],
      },
      bodyAfter: `Para la prestación de nuestros servicios, tratamos los siguientes datos, que pueden ser obtenidos directamente del titular a través de correo electrónico y otras herramientas de comunicación. En determinadas situaciones, también podemos recibir datos a través de terceros.\n\n**Tabla 2 — Datos tratados en la prestación de servicios:**\n[[TABLE2]]\nEventualmente, podremos utilizar sus datos para finalidades no previstas en esta Política, pero estas estarán dentro de sus expectativas legítimas. El eventual uso de sus datos para finalidades que no cumplan con esta prerrogativa se realizará con su autorización previa.\n\nAdemás, otros tipos de datos no previstos expresamente en esta Política de Privacidad podrán ser recopilados, siempre que sean proporcionados con el consentimiento del titular, o, también, que la recopilación esté permitida o impuesta por ley.`,
    },
    {
      heading: "5. DATOS PERSONALES DE MENORES DE EDAD",
      body: `Sensorama no realiza intencionalmente la recopilación de datos personales de menores de 18 años sin la observancia de los requisitos legales aplicables y autorización del responsable legal, cuando sea necesaria. Si usted es padre o responsable legal de un menor y sabe que el menor proporcionó sus datos personales en nuestro sitio web o por otro medio, contáctenos a través de la siguiente dirección de correo electrónico [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br].`,
    },
    {
      heading: "6. COOKIES",
      body: `¡Utilizamos cookies! Pero, ¿qué son las cookies? Las cookies son pequeños archivos de texto enviados por el sitio a su computadora donde se almacenan. Estos archivos contienen información relacionada con su navegación en el sitio.\n\nSensorama utiliza cookies para mejorar la experiencia de uso en nuestra página. Para saber más sobre las cookies que utilizamos, sus finalidades y cómo puede gestionar sus preferencias, consulte nuestro [Aviso de Cookies|/es/cookie-policy].`,
    },
    {
      heading: "7. COMPARTICIÓN O DIVULGACIÓN DE DATOS PERSONALES",
      body: `La información recopilada es de nuestro uso exclusivo para las finalidades aquí referidas, por lo tanto, no será vendida a terceros bajo ninguna hipótesis.\n\nPodrán tener acceso interno a la información de los titulares solo personas estrictamente necesarias para la prestación del servicio.\n\nSin embargo, podemos compartir sus datos personales si es necesario para:\n\n**Cumplimiento legal.** comprendiendo (i) procesos y requisiciones legales; (ii) establecimiento o ejercicio de nuestros derechos legales o defensa en procesos judiciales; o (iii) conforme requerido por ley;\n\n**Colaboradores.** podemos compartir sus datos personales con nuestros colaboradores, en el cual ellos solo tratarán los datos para la ejecución del servicio necesario;\n\n**Prestación de Servicios por terceros.** podemos, además, actuar en conjunto con otras empresas en diversas actividades para viabilizar nuestro servicio, para ejecutar servicios relacionados con el sitio o con Sensorama, o, también, para auxiliarnos en el análisis de cómo se utiliza nuestro servicio, como ejemplo las empresas que proporcionan las cookies que utilizamos en nuestro sitio. Estos reciben sus datos solo en la medida de lo necesario para la prestación de los servicios contratados. Resaltamos que nuestros contratos están orientados por las normas de protección de datos del ordenamiento jurídico brasileño, prohibiendo a estos terceros divulgar o usar los datos para cualquier otra finalidad.\n\n**Adquisición o fusión.** en el caso de una fusión, adquisición u otro tipo de transacción corporativa, podemos compartir sus datos personales con las partes involucradas en el proceso, incluyendo las empresas compradoras o adquirentes, para fines de continuidad e integración de los productos, siempre en conformidad con las normas de protección de datos aplicables. En estos escenarios, garantizamos que el tratamiento de los datos continuará en conformidad con las regulaciones aplicables y que los titulares serán informados sobre cualesquiera cambios relevantes que puedan impactar el uso de su información personal.`,
    },
    {
      heading: "8. SEGURIDAD EN EL TRATAMIENTO DE SUS DATOS PERSONALES",
      body: `Nos comprometemos a proteger su privacidad aplicando medidas técnicas y organizacionales aptas para proteger sus datos personales de accesos no autorizados y de situaciones de destrucción, pérdida, alteración, comunicación o difusión de tales datos.\n\nPara la garantía de la seguridad, se adoptarán soluciones que tengan en consideración: las técnicas adecuadas; los costos de aplicación; la naturaleza, el ámbito, el contexto y las finalidades del tratamiento; y los riesgos para los derechos y libertades del titular.`,
    },
    {
      heading: "9. TRANSFERENCIA INTERNACIONAL DE DATOS PERSONALES",
      body: `Sensorama está sediada en Brasil y los datos personales tratados por Nosotros están sujetos a la legislación brasileña. Sin embargo, estos datos pueden llegar a ser transferidos fuera del territorio nacional, en razón de que Sensorama utiliza proveedores que almacenan datos personales localizados en otros países, lo que implica la Transferencia Internacional de Datos Personales, conforme a la definición de la Ley General de Protección de Datos Personales (LGPD) y de la Resolución CD/ANPD n.º 19/2024.\n\nSiempre priorizamos la contratación de proveedores que adopten las medidas de seguridad necesarias para proteger los datos personales y que realicen transferencias internacionales en conformidad con la LGPD y las resoluciones y/o directrices oficiales publicadas por la Autoridad Nacional de Protección de Datos (ANPD) u órgano competente, y con fundamento en las hipótesis de tratamiento previstas en los artículos 7º o 11 de la LGPD y en las siguientes salvaguardas de la Resolución CD/ANPD n.º 19/2024: (i) para países u organismos internacionales que garanticen un nivel de protección de datos personales adecuado a la LGPD, (ii) cláusulas estándar contractuales, normas corporativas globales o cláusulas contractuales específicas, o (iii) en las situaciones previstas en los incisos II, "d", y III a IX del artículo 33 de la LGPD.`,
    },
    {
      heading: "10. ALMACENAMIENTO Y ELIMINACIÓN DE LOS DATOS PERSONALES",
      body: `Los datos personales serán almacenados por el período necesario para alcanzar la finalidad para la cual fueron recopilados o hasta el fin del período de tratamiento. Después de este plazo, serán eliminados, salvo en los siguientes casos: (i) cuando sea necesario mantenerlos para el cumplimiento de obligaciones legales o regulatorias, como lo dispuesto en el art. 15 del Marco Civil de Internet, art. 206 del Código Civil y art. 27 del Código de Defensa del Consumidor; (ii) para el ejercicio regular de derechos, inclusive en contratos y en procesos judiciales, administrativos o arbitrales o (iii) cuando los datos sean anonimizados para uso exclusivo de Sensorama.`,
    },
    {
      heading: "11. RESPONSABLE POR EL TRATAMIENTO DE DATOS PERSONALES",
      body: `En este sitio, el responsable por el tratamiento de los datos personales es SENSORAMA DESING LTDA ME, persona jurídica de derecho privado, inscrita en el CNPJ bajo el n.º 19064607000163, con sede en Rua Souza Dutra, 145, sala 807 Centro Exec Beira Mar Continental, CEP: 88070-605.\n\nEste Aviso no se aplica a eventuales direcciones de sitios citados o direccionados a través de nuestra página, por eso es necesario que sean leídos los Avisos de Privacidad del sitio en cuestión cuando haya algún tipo de redireccionamiento para dirección que no sea de propiedad de Sensorama.`,
    },
    {
      heading: "12. ENCARGADO DEL TRATAMIENTO DE DATOS PERSONALES O \"ENCARREGADO\"",
      body: `Nuestro Encargado del Tratamiento de Datos Personales, también conocido como Data Protection Officer (DPO), es DATA GUIDE CONSULTORIA E SOLUÇÕES EM PROTEÇÃO DE DADOS LTDA, persona jurídica de derecho privado inscrita en el CNPJ bajo el n.º 39.317.591/0001-60, representada por Taynara Rodrigues Bernardo, que puede ser contactada a través de la dirección de correo electrónico [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br].`,
    },
    {
      heading: "13. ALTERACIONES EN EL PRESENTE AVISO",
      body: `Nos reservamos el derecho de modificar este Aviso de Privacidad en cualquier momento y cuantas veces sean necesarias, en razón de alteraciones en nuestro sitio, actualizaciones en nuestros procesos internos, o cambios en el ámbito legislativo, con el objetivo de garantizar cada vez más seguridad y conveniencia para usted. Por eso, recomendamos que lo revise siempre que sea posible.\n\nCon la finalidad de facilitar, siempre indicaremos al final del documento la fecha de la última actualización, y si se realizan alteraciones sustanciales, le notificaremos sobre tales alteraciones antes de que entren en vigor.`,
    },
    {
      heading: "14. ¡GRACIAS POR LEER NUESTRO AVISO DE PRIVACIDAD!",
      body: `Estaremos siempre a disposición para atenderlo. Si quedó alguna duda o desea obtener más información sobre este Aviso, por favor, contáctenos: [dpo@sensoramadesign.com.br|mailto:dpo@sensoramadesign.com.br]\n\n**Última actualización: 15/05/2026**`,
    },
  ],
};

const TABLE2_ES: TableData = {
  headers: ["Datos personales tratados", "Categoría de Titulares", "Finalidad del Tratamiento", "Hipótesis legal que justifica el tratamiento"],
  rows: [
    [
      "Nombre, Edad, Género, Grado de instrucción, Raza/Etnia, Orientación Sexual, Datos de restricción alimentaria, condición gestacional, información relacionada con la vida sexual, Clase social, Imagen y Audio/Voz",
      "Entrevistado",
      "Recopilar e interpretar datos para comprender patrones, comportamientos y percepciones de los participantes, contribuyendo al análisis y comprensión de los resultados de la investigación",
      "El agente se enmarca como operador de los datos, y por eso la indicación de la base legal corresponde al responsable",
    ],
    [
      "Nombre, Edad, Género, Grado de instrucción, Raza/Etnia, Orientación Sexual, Datos de restricción alimentaria, condición gestacional, información relacionada con la vida sexual, Clase social, Imagen y Audio/Voz",
      "Entrevistado",
      "Estructurar y procesar datos estadísticos para identificar tendencias, correlaciones y métricas relevantes dentro del estudio.",
      "El agente se enmarca como operador de los datos, y por eso la indicación de la base legal corresponde al responsable",
    ],
    [
      "Nombre, Edad, Teléfono, Clase Social, Audio/Voz e Imagen",
      "Entrevistado",
      "Identificar y seleccionar proveedores que atiendan los criterios establecidos por el cliente, garantizando la adecuación del perfil a las necesidades del proyecto.",
      "El agente se enmarca como operador de los datos, y por eso la indicación de la base legal corresponde al responsable",
    ],
    [
      "Nombre, Edad, Teléfono, Clase Social, Dirección, Correo electrónico, Fecha de Nacimiento, Audio/Voz e Imagen",
      "Entrevistado",
      "Seleccionar y contactar a consumidores indicados por el cliente para participación en investigaciones u otras iniciativas, garantizando que atiendan los criterios definidos para el proyecto.",
      "El agente se enmarca como operador de los datos, y por eso la indicación de la base legal corresponde al responsable",
    ],
  ],
};

const allContent: Record<Lang, typeof contentPT> = { pt: contentPT, en: contentEN, es: contentES };
const table2ByLang: Record<Lang, TableData> = { pt: TABLE2_PT, en: TABLE2_EN, es: TABLE2_ES };

/* ─── Renderers ──────────────────────────────────────────────── */

function renderBody(text: string, table2?: TableData) {
  const blocks: React.ReactNode[] = [];
  const lines = text.split("\n");
  let buffer: string[] = [];
  const flush = (key: string) => {
    if (buffer.length === 0) return;
    const joined = buffer.join("\n");
    buffer = [];
    blocks.push(<div key={key}>{renderLines(joined)}</div>);
  };
  lines.forEach((line, i) => {
    if (line.trim() === "[[TABLE2]]" && table2) {
      flush(`b-${i}`);
      blocks.push(<div key={`t-${i}`}>{renderTable(table2)}</div>);
    } else {
      buffer.push(line);
    }
  });
  flush("b-end");
  return <>{blocks}</>;
}

function renderLines(text: string) {
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
                style={{ color: Clr.blue, textDecoration: "underline" }}
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
                <td key={ci} style={{ padding: "10px 14px", color: ci === 0 ? Clr.black : Clr.darkGray, fontWeight: ci === 0 ? 600 : 400, verticalAlign: "top", lineHeight: 1.6, whiteSpace: "pre-line" }}>
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
export function PrivacyPolicyPage({ lang }: { lang: Lang }) {
  const m = meta[lang];
  const c = allContent[lang];
  const table2 = table2ByLang[lang];

  return (
    <>
      <Helmet>
        <html lang={m.lang} />
        <title>{m.title}</title>
        <meta name="description" content={m.description} />
        <link rel="canonical" href={m.canonical} />
        <link rel="alternate" hrefLang="pt-BR" href={`${BASE}/privacy-policy`} />
        <link rel="alternate" hrefLang="en" href={`${BASE}/en/privacy-policy`} />
        <link rel="alternate" hrefLang="es" href={`${BASE}/es/privacy-policy`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE}/privacy-policy`} />
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
              <a key={l}
                href={l === "pt" ? "/privacy-policy" : `/${l}/privacy-policy`}
                style={{
                  fontFamily: Fnt.body, fontSize: 12,
                  color: l === lang ? Clr.blue : Clr.medGray,
                  fontWeight: l === lang ? 700 : 400,
                  textDecoration: l === lang ? "none" : "underline",
                }}>
                {l.toUpperCase()}
              </a>
            ))}
          </div>

          <p style={{ fontFamily: Fnt.body, fontSize: 12, color: Clr.medGray, marginBottom: 12 }}>{c.updated}</p>
          <h1 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "clamp(1.4rem, 2.6vw, 2rem)", color: Clr.black, lineHeight: 1.25, marginBottom: 48 }}>
            {c.title}
          </h1>

          {c.sections.map((s, i) => (
            <section key={i} style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "0.95rem", color: Clr.black, marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid #EBEBEB" }}>
                {s.heading}
              </h2>
              <div style={{ fontFamily: Fnt.body, fontSize: 15, color: Clr.darkGray, lineHeight: 1.8 }}>
                {renderBody(s.body, table2)}
                {s.tableData && renderTable(s.tableData)}
                {s.bodyAfter && renderBody(s.bodyAfter, table2)}
              </div>
            </section>
          ))}

          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #EBEBEB", display: "flex", gap: 24, flexWrap: "wrap" }}>
            <a href={c.backHref} style={{ fontFamily: Fnt.body, fontSize: 14, color: Clr.blue, textDecoration: "underline" }}>{c.back}</a>
            <a href={lang === "pt" ? "/cookie-policy" : `/${lang}/cookie-policy`}
              style={{ fontFamily: Fnt.body, fontSize: 14, color: Clr.medGray, textDecoration: "underline" }}>
              {lang === "pt" ? "Aviso de Cookies" : lang === "es" ? "Aviso de Cookies" : "Cookie Notice"}
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
