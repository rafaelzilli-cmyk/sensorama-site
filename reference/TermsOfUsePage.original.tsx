import { Helmet } from "react-helmet-async";

type Lang = "en" | "pt" | "es";

const Fnt = { heading: "'Unbounded', sans-serif", body: "'Open Sans', sans-serif" };
const Clr = {
  blue: "#2F5BFF", green: "#43E58E", black: "#000000",
  medGray: "#6B6B6B", darkGray: "#2A2A2A", lightGray: "#F5F5F5", white: "#FFFFFF",
};

const BASE = "https://www.sensoramadesign.com";

const meta = {
  en: { title: "Terms of Use — Sensorama Design", description: "Terms governing use of the Sensorama Design website, including intellectual property, user responsibilities, limitation of liability, privacy, and applicable law.", canonical: `${BASE}/en/terms-of-use`, lang: "en" },
  pt: { title: "Termos de Uso — Sensorama Design", description: "Termos que regem o uso do site da Sensorama Design, incluindo propriedade intelectual, responsabilidades do usuário, limitação de responsabilidade, privacidade e lei aplicável.", canonical: `${BASE}/terms-of-use`, lang: "pt-BR" },
  es: { title: "Términos de Uso — Sensorama Design", description: "Términos que rigen el uso del sitio web de Sensorama Design, incluyendo propiedad intelectual, responsabilidades del usuario, limitación de responsabilidad, privacidad y ley aplicable.", canonical: `${BASE}/es/terms-of-use`, lang: "es" },
};

const content = {
  en: {
    back: "← Back to site", backHref: "/en/",
    updated: "Last updated: April 29, 2026",
    title: "Terms of Use",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        body: `By accessing and using the Sensorama Design website (sensoramadesign.com), you agree to be fully bound by these Terms of Use ("Terms"). If you do not agree with any part of these Terms, please discontinue use of this website immediately.\n\nThese Terms apply to all visitors, users, and others who access or use this website, regardless of the device or method of access. Access from outside Brazil does not exempt users from compliance with applicable local laws.`,
      },
      {
        heading: "2. About Sensorama Design",
        body: `Sensorama Design is a Brazilian innovation consultancy specializing in UX Design, UX Research, Service Design, and Digital Transformation. Founded in 2012 and led by women, we serve clients across multiple sectors and countries.\n\nThis website is provided for informational purposes about our services, capabilities, portfolio, and institutional identity. It does not constitute a contractual offer.`,
      },
      {
        heading: "3. Permitted and Prohibited Use",
        body: `**Permitted use:**\nYou may use this website for lawful, personal, and non-commercial informational purposes, subject to these Terms.\n\n**You agree NOT to:**\n• Use the website for any unlawful, fraudulent, or harmful purpose\n• Attempt to gain unauthorized access to any portion, feature, or system of the website\n• Transmit, distribute, or upload any viruses, malware, or other harmful code or materials\n• Scrape, crawl, index, or extract any content from this website without prior written permission from Sensorama Design\n• Impersonate Sensorama Design, its team members, clients, or partners\n• Use the website or its content to defame, harass, or infringe the rights of any third party\n• Use automated tools or scripts to interact with the website without authorization\n• Reproduce, distribute, or exploit any content for commercial purposes without written consent`,
      },
      {
        heading: "4. Intellectual Property",
        body: `All content on this website — including but not limited to texts, graphics, logos, brand identity, images, photographs, videos, case studies, design elements, UX artifacts, methodologies, and software — is the exclusive property of Sensorama Design and/or its licensors, and is protected under Brazilian intellectual property law (Law No. 9,610/1998) and applicable international conventions.\n\n**You may not, without prior written consent of Sensorama Design:**\n• Reproduce, publish, or distribute any content from this website\n• Modify, create derivative works of, or translate any content\n• Use any content for commercial purposes\n• Frame or mirror any portion of this website on another website\n• Remove or alter any copyright, trademark, or proprietary rights notices\n\nThe Sensorama Design name, logo, visual identity, and related marks are trademarks of Sensorama Design. Unauthorized use of these marks is strictly prohibited and may constitute trademark infringement under applicable law.`,
      },
      {
        heading: "5. Contact Form and Communications",
        body: `When you use the contact form on our website, you agree that:\n• The information you provide is accurate, complete, and lawfully given\n• We may contact you in response to your inquiry via the email address provided\n• Your personal data will be processed in accordance with our Privacy Policy (/en/privacy-policy) and Cookie Policy (/en/cookie-policy)\n\nSubmitting a contact form constitutes an expression of interest only. It does not create any contractual, employment, partnership, or agency relationship between you and Sensorama Design. Any commercial engagement requires a separate written agreement signed by authorized representatives of both parties.`,
      },
      {
        heading: "6. Third-Party Links and Content",
        body: `This website may contain hyperlinks to third-party websites, platforms, or resources. These links are provided for informational convenience only and do not constitute an endorsement, sponsorship, or recommendation of the linked site or its content.\n\nSensorama Design has no control over, and assumes no responsibility for, the content, accuracy, availability, privacy practices, or policies of any third-party website. You access linked websites at your own risk and are subject to their respective terms of use and privacy policies.\n\nIf you identify a broken or inappropriate link on our website, please contact us at contato@sensoramadesign.com.`,
      },
      {
        heading: "7. Disclaimer of Warranties",
        body: `This website and all its content, information, and materials are provided "as is" and "as available," without warranties of any kind, express or implied, to the maximum extent permitted by applicable law.\n\nSensorama Design expressly disclaims all warranties, including but not limited to:\n• Implied warranties of merchantability or fitness for a particular purpose\n• Warranties of accuracy, completeness, reliability, or timeliness of content\n• Warranties of uninterrupted, error-free, or secure operation of the website\n• Warranties that the website is free from viruses, malware, or other harmful components\n\nSensorama Design does not warrant that the information on this website is up to date, and reserves the right to modify content at any time without notice.`,
      },
      {
        heading: "8. Limitation of Liability",
        body: `To the fullest extent permitted by applicable law, Sensorama Design, its directors, employees, partners, agents, suppliers, and licensors shall not be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages arising from or related to:\n\n• Your access to, use of, or inability to use this website\n• Any content, data, or information obtained through the website\n• Unauthorized access to or alteration of your transmissions or data\n• Statements or conduct of any third party on or through the website\n• Any other matter relating to the website\n\nIn no event shall Sensorama Design's aggregate liability to you exceed BRL 100 (one hundred Brazilian reais) or the equivalent amount you paid, if any, to access the website.`,
      },
      {
        heading: "9. Privacy and Data Protection",
        body: `Your use of this website is also governed by our:\n\n• **Privacy Policy:** /en/privacy-policy — explains how we collect, use, share, and protect personal data in accordance with LGPD and GDPR.\n• **Cookie Policy:** /en/cookie-policy — explains how we use cookies and similar technologies, and how you can manage your preferences.\n\nThese documents are incorporated into these Terms of Use by reference. By using this website, you acknowledge and accept our privacy and cookie practices as described therein.\n\nFor privacy-related matters or to exercise your data subject rights, contact our DPO at: dpo@sensoramadesign.com.br`,
      },
      {
        heading: "10. Governing Law and Jurisdiction",
        body: `These Terms of Use shall be governed by and construed exclusively in accordance with the laws of the Federative Republic of Brazil, including the Brazilian Civil Code (Law No. 10,406/2002), the Consumer Protection Code (Law No. 8,078/1990) where applicable, and the LGPD (Law No. 13,709/2018).\n\nAny dispute, controversy, or claim arising out of or in connection with these Terms, or the breach, termination, or invalidity thereof, shall be submitted to the exclusive jurisdiction of the courts of Brazil, with venue in the city of São Paulo, State of São Paulo, without prejudice to the right to seek urgent injunctive relief in any competent court.\n\nIf you are accessing this website from outside Brazil, you are solely responsible for ensuring compliance with all local laws applicable to your use of this website.`,
      },
      {
        heading: "11. Changes to These Terms",
        body: `Sensorama Design reserves the right to modify, update, or replace these Terms of Use at any time without prior notice. Changes are effective immediately upon posting to this page, with the updated date reflected at the top of this document.\n\nYour continued access to or use of the website following the posting of any changes constitutes your acceptance of the revised Terms. If you do not agree to the updated Terms, you must discontinue use of the website.\n\nWe encourage you to review these Terms periodically. The current version is always available at: https://www.sensoramadesign.com/en/terms-of-use`,
      },
      {
        heading: "12. Severability and Waiver",
        body: `If any provision of these Terms of Use is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, that provision shall be modified to the minimum extent necessary to make it enforceable, or severed from these Terms. The remaining provisions shall continue in full force and effect.\n\nThe failure of Sensorama Design to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision unless acknowledged and agreed to by us in writing.`,
      },
      {
        heading: "13. Entire Agreement",
        body: `These Terms of Use, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Sensorama Design regarding your use of this website and supersede all prior agreements, representations, or understandings relating to the same subject matter.`,
      },
      {
        heading: "14. Contact",
        body: `For questions or concerns about these Terms of Use:\n\n**Sensorama Design**\nWebsite: https://www.sensoramadesign.com\nGeneral inquiries: contato@sensoramadesign.com\n\nFor privacy-specific matters:\nDPO: dpo@sensoramadesign.com.br`,
      },
    ],
  },

  pt: {
    back: "← Voltar ao site", backHref: "/",
    updated: "Última atualização: 29 de abril de 2026",
    title: "Termos de Uso",
    sections: [
      {
        heading: "1. Aceitação dos Termos",
        body: `Ao acessar e utilizar o site da Sensorama Design (sensoramadesign.com), você concorda em estar plenamente vinculado a estes Termos de Uso ("Termos"). Se você não concordar com qualquer parte destes Termos, por favor, interrompa imediatamente o uso deste site.\n\nEstes Termos se aplicam a todos os visitantes, usuários e pessoas que acessam ou utilizam este site, independentemente do dispositivo ou método de acesso. O acesso a partir de fora do Brasil não isenta os usuários do cumprimento das leis locais aplicáveis.`,
      },
      {
        heading: "2. Sobre a Sensorama Design",
        body: `A Sensorama Design é uma consultoria brasileira de inovação especializada em UX Design, UX Research, Service Design e Transformação Digital. Fundada em 2012 e liderada por mulheres, atendemos clientes em múltiplos setores e países.\n\nEste site é fornecido para fins informativos sobre nossos serviços, capacidades, portfólio e identidade institucional. Não constitui uma oferta contratual.`,
      },
      {
        heading: "3. Uso Permitido e Proibido",
        body: `**Uso permitido:**\nVocê pode utilizar este site para fins legais, pessoais e informativos não comerciais, sujeito a estes Termos.\n\n**Você concorda em NÃO:**\n• Usar o site para qualquer finalidade ilegal, fraudulenta ou prejudicial\n• Tentar obter acesso não autorizado a qualquer parte, funcionalidade ou sistema do site\n• Transmitir, distribuir ou fazer upload de vírus, malware ou qualquer código ou material prejudicial\n• Fazer scraping, rastreamento, indexação ou extração de qualquer conteúdo deste site sem permissão prévia por escrito da Sensorama Design\n• Fazer-se passar pela Sensorama Design, seus colaboradores, clientes ou parceiros\n• Usar o site ou seu conteúdo para difamar, assediar ou infringir os direitos de terceiros\n• Utilizar ferramentas ou scripts automatizados para interagir com o site sem autorização\n• Reproduzir, distribuir ou explorar qualquer conteúdo para fins comerciais sem consentimento por escrito`,
      },
      {
        heading: "4. Propriedade Intelectual",
        body: `Todo o conteúdo deste site — incluindo, mas não se limitando a textos, gráficos, logotipos, identidade visual, imagens, fotografias, vídeos, estudos de caso, elementos de design, artefatos de UX, metodologias e software — é propriedade exclusiva da Sensorama Design e/ou de seus licenciadores, protegido pela lei brasileira de direitos autorais (Lei nº 9.610/1998) e convenções internacionais aplicáveis.\n\n**Sem o consentimento prévio por escrito da Sensorama Design, você não pode:**\n• Reproduzir, publicar ou distribuir qualquer conteúdo deste site\n• Modificar, criar obras derivadas ou traduzir qualquer conteúdo\n• Usar qualquer conteúdo para fins comerciais\n• Enquadrar ou espelhar qualquer parte deste site em outro site\n• Remover ou alterar avisos de direitos autorais, marcas registradas ou direitos de propriedade\n\nO nome Sensorama Design, logotipo, identidade visual e marcas relacionadas são marcas registradas da Sensorama Design. O uso não autorizado é estritamente proibido e pode constituir infração de marca registrada nos termos da lei aplicável.`,
      },
      {
        heading: "5. Formulário de Contato e Comunicações",
        body: `Ao utilizar o formulário de contato em nosso site, você concorda que:\n• As informações fornecidas são precisas, completas e legalmente fornecidas\n• Podemos entrar em contato com você em resposta à sua consulta pelo endereço de e-mail informado\n• Seus dados pessoais serão tratados de acordo com nosso Aviso de Privacidade (/privacy-policy) e Política de Cookies (/cookie-policy)\n\nO envio do formulário de contato constitui apenas uma manifestação de interesse. Não cria qualquer relação contratual, empregatícia, de parceria ou de agência entre você e a Sensorama Design. Qualquer engajamento comercial requer um acordo escrito separado assinado por representantes autorizados de ambas as partes.`,
      },
      {
        heading: "6. Links e Conteúdo de Terceiros",
        body: `Este site pode conter hiperlinks para sites, plataformas ou recursos de terceiros. Esses links são fornecidos apenas por conveniência informativa e não constituem endosso, patrocínio ou recomendação do site vinculado ou de seu conteúdo.\n\nA Sensorama Design não tem controle sobre, e não assume responsabilidade por, o conteúdo, a precisão, a disponibilidade, as práticas de privacidade ou as políticas de qualquer site de terceiros. Você acessa sites vinculados por sua conta e risco e está sujeito aos respectivos termos de uso e políticas de privacidade.\n\nSe identificar um link quebrado ou inadequado em nosso site, entre em contato conosco pelo e-mail contato@sensoramadesign.com.`,
      },
      {
        heading: "7. Isenção de Garantias",
        body: `Este site e todo o seu conteúdo, informações e materiais são fornecidos "no estado em que se encontram" e "conforme disponíveis", sem garantias de qualquer tipo, expressas ou implícitas, na máxima extensão permitida pela lei aplicável.\n\nA Sensorama Design declina expressamente todas as garantias, incluindo, mas não se limitando a:\n• Garantias implícitas de comercialização ou adequação a uma finalidade específica\n• Garantias de precisão, integridade, confiabilidade ou atualidade do conteúdo\n• Garantias de operação ininterrupta, sem erros ou segura do site\n• Garantias de que o site está livre de vírus, malware ou outros componentes prejudiciais\n\nA Sensorama Design não garante que as informações neste site estejam atualizadas e reserva-se o direito de modificar o conteúdo a qualquer momento sem aviso prévio.`,
      },
      {
        heading: "8. Limitação de Responsabilidade",
        body: `Na máxima extensão permitida pela lei aplicável, a Sensorama Design, seus diretores, funcionários, parceiros, agentes, fornecedores e licenciadores não serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequentes, punitivos ou exemplares decorrentes de ou relacionados a:\n\n• Seu acesso, uso ou incapacidade de usar este site\n• Qualquer conteúdo, dado ou informação obtida por meio do site\n• Acesso não autorizado ou alteração de suas transmissões ou dados\n• Declarações ou conduta de terceiros no ou por meio do site\n• Qualquer outro assunto relacionado ao site\n\nEm nenhuma hipótese a responsabilidade total da Sensorama Design perante você excederá R$ 100,00 (cem reais) ou o valor equivalente que você pagou, se houver, para acessar o site.`,
      },
      {
        heading: "9. Privacidade e Proteção de Dados",
        body: `O uso deste site também é regido por:\n\n• **Aviso de Privacidade:** /privacy-policy — explica como coletamos, usamos, compartilhamos e protegemos dados pessoais em conformidade com a LGPD e o RGPD.\n• **Política de Cookies:** /cookie-policy — explica como utilizamos cookies e tecnologias similares e como você pode gerenciar suas preferências.\n\nEstes documentos são incorporados a estes Termos de Uso por referência. Ao utilizar este site, você reconhece e aceita nossas práticas de privacidade e cookies conforme descritas nesses documentos.\n\nPara assuntos relacionados à privacidade ou para exercer seus direitos como titular de dados, entre em contato com nosso Encarregado (DPO): dpo@sensoramadesign.com.br`,
      },
      {
        heading: "10. Lei Aplicável e Jurisdição",
        body: `Estes Termos de Uso serão regidos e interpretados exclusivamente de acordo com as leis da República Federativa do Brasil, incluindo o Código Civil Brasileiro (Lei nº 10.406/2002), o Código de Defesa do Consumidor (Lei nº 8.078/1990) onde aplicável, e a LGPD (Lei nº 13.709/2018).\n\nQualquer disputa, controvérsia ou reclamação decorrente de ou relacionada a estes Termos, ou à sua violação, rescisão ou invalidade, será submetida à jurisdição exclusiva dos tribunais do Brasil, com foro na cidade de São Paulo, Estado de São Paulo, sem prejuízo do direito de buscar medidas cautelares urgentes em qualquer tribunal competente.\n\nSe você estiver acessando este site de fora do Brasil, é de sua exclusiva responsabilidade garantir a conformidade com todas as leis locais aplicáveis ao seu uso.`,
      },
      {
        heading: "11. Alterações nestes Termos",
        body: `A Sensorama Design reserva-se o direito de modificar, atualizar ou substituir estes Termos de Uso a qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente após a publicação nesta página, com a data atualizada refletida no topo deste documento.\n\nO uso continuado do site após a publicação de qualquer alteração constitui sua aceitação dos Termos revisados. Se você não concordar com os Termos atualizados, deverá interromper o uso do site.\n\nRecomendamos que você revise estes Termos periodicamente. A versão atual está sempre disponível em: https://www.sensoramadesign.com/terms-of-use`,
      },
      {
        heading: "12. Divisibilidade e Renúncia",
        body: `Se qualquer disposição destes Termos de Uso for considerada inválida, ilegal ou inexequível por um tribunal competente, essa disposição será modificada na extensão mínima necessária para torná-la aplicável, ou excluída destes Termos. As disposições restantes continuarão em pleno vigor e efeito.\n\nA falha da Sensorama Design em fazer cumprir qualquer direito ou disposição destes Termos não constituirá renúncia a esse direito ou disposição, salvo reconhecimento e acordo expresso por escrito.`,
      },
      {
        heading: "13. Acordo Integral",
        body: `Estes Termos de Uso, em conjunto com nosso Aviso de Privacidade e Política de Cookies, constituem o acordo integral entre você e a Sensorama Design em relação ao uso deste site e substituem todos os acordos, representações ou entendimentos anteriores relativos ao mesmo objeto.`,
      },
      {
        heading: "14. Contato",
        body: `Para dúvidas ou preocupações sobre estes Termos de Uso:\n\n**Sensorama Design**\nSite: https://www.sensoramadesign.com\nContato geral: contato@sensoramadesign.com\n\nPara assuntos relacionados à privacidade:\nDPO: dpo@sensoramadesign.com.br`,
      },
    ],
  },

  es: {
    back: "← Volver al sitio", backHref: "/es/",
    updated: "Última actualización: 29 de abril de 2026",
    title: "Términos de Uso",
    sections: [
      {
        heading: "1. Aceptación de los Términos",
        body: `Al acceder y utilizar el sitio web de Sensorama Design (sensoramadesign.com), aceptas estar plenamente sujeto a estos Términos de Uso ("Términos"). Si no estás de acuerdo con alguna parte de estos Términos, interrumpe el uso de este sitio web de inmediato.\n\nEstos Términos se aplican a todos los visitantes, usuarios y personas que acceden o utilizan este sitio web, independientemente del dispositivo o método de acceso. El acceso desde fuera de Brasil no exime a los usuarios del cumplimiento de las leyes locales aplicables.`,
      },
      {
        heading: "2. Sobre Sensorama Design",
        body: `Sensorama Design es una consultora brasileña de innovación especializada en UX Design, UX Research, Service Design y Transformación Digital. Fundada en 2012 y liderada por mujeres, atendemos a clientes en múltiples sectores y países.\n\nEste sitio web se proporciona con fines informativos sobre nuestros servicios, capacidades, portafolio e identidad institucional. No constituye una oferta contractual.`,
      },
      {
        heading: "3. Uso Permitido y Prohibido",
        body: `**Uso permitido:**\nPuedes utilizar este sitio web con fines legales, personales e informativos no comerciales, sujeto a estos Términos.\n\n**Aceptas NO:**\n• Usar el sitio web para cualquier propósito ilegal, fraudulento o perjudicial\n• Intentar obtener acceso no autorizado a cualquier parte, función o sistema del sitio\n• Transmitir, distribuir o cargar virus, malware u otro código o material dañino\n• Hacer scraping, rastreo, indexación o extracción de contenido del sitio sin permiso previo por escrito de Sensorama Design\n• Hacerte pasar por Sensorama Design, sus colaboradores, clientes o socios\n• Usar el sitio web o su contenido para difamar, acosar o infringir los derechos de terceros\n• Utilizar herramientas o scripts automatizados para interactuar con el sitio sin autorización\n• Reproducir, distribuir o explotar cualquier contenido con fines comerciales sin consentimiento por escrito`,
      },
      {
        heading: "4. Propiedad Intelectual",
        body: `Todo el contenido de este sitio web — incluyendo pero no limitado a textos, gráficos, logotipos, identidad de marca, imágenes, fotografías, videos, casos de estudio, elementos de diseño, artefactos de UX, metodologías y software — es propiedad exclusiva de Sensorama Design y/o sus licenciantes, protegida por la ley de propiedad intelectual brasileña (Ley n.º 9.610/1998) y los convenios internacionales aplicables.\n\n**Sin el consentimiento previo por escrito de Sensorama Design, no puedes:**\n• Reproducir, publicar ni distribuir ningún contenido de este sitio\n• Modificar, crear obras derivadas ni traducir ningún contenido\n• Usar ningún contenido con fines comerciales\n• Enmarcar ni reflejar ninguna parte de este sitio en otro sitio web\n• Eliminar ni alterar avisos de derechos de autor, marcas registradas ni derechos de propiedad\n\nEl nombre Sensorama Design, el logotipo, la identidad visual y las marcas relacionadas son marcas comerciales de Sensorama Design. Su uso no autorizado está estrictamente prohibido y puede constituir infracción de marca bajo la ley aplicable.`,
      },
      {
        heading: "5. Formulario de Contacto y Comunicaciones",
        body: `Al utilizar el formulario de contacto en nuestro sitio web, aceptas que:\n• La información proporcionada es exacta, completa y legalmente otorgada\n• Podemos contactarte en respuesta a tu consulta a través del correo electrónico proporcionado\n• Tus datos personales serán tratados de conformidad con nuestro Aviso de Privacidad (/es/privacy-policy) y Política de Cookies (/es/cookie-policy)\n\nEnviar el formulario de contacto constituye únicamente una manifestación de interés. No crea ninguna relación contractual, laboral, de asociación ni de agencia entre tú y Sensorama Design. Cualquier relación comercial requiere un acuerdo escrito separado firmado por representantes autorizados de ambas partes.`,
      },
      {
        heading: "6. Enlaces y Contenido de Terceros",
        body: `Este sitio web puede contener hipervínculos a sitios web, plataformas o recursos de terceros. Estos enlaces se proporcionan únicamente por conveniencia informativa y no constituyen un respaldo, patrocinio o recomendación del sitio vinculado o su contenido.\n\nSensorama Design no tiene control sobre, y no asume ninguna responsabilidad por, el contenido, la exactitud, la disponibilidad, las prácticas de privacidad o las políticas de ningún sitio web de terceros. Accedes a los sitios vinculados bajo tu propio riesgo y estás sujeto a sus respectivos términos de uso y políticas de privacidad.\n\nSi identificas un enlace roto o inadecuado en nuestro sitio, contáctanos en contato@sensoramadesign.com.`,
      },
      {
        heading: "7. Exclusión de Garantías",
        body: `Este sitio web y todo su contenido, información y materiales se proporcionan "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas ni implícitas, en la máxima medida permitida por la ley aplicable.\n\nSensorama Design renuncia expresamente a todas las garantías, incluyendo pero no limitadas a:\n• Garantías implícitas de comerciabilidad o idoneidad para un propósito particular\n• Garantías de exactitud, integridad, fiabilidad o puntualidad del contenido\n• Garantías de operación ininterrumpida, sin errores o segura del sitio\n• Garantías de que el sitio está libre de virus, malware u otros componentes dañinos\n\nSensorama Design no garantiza que la información en este sitio esté actualizada y se reserva el derecho de modificar el contenido en cualquier momento sin previo aviso.`,
      },
      {
        heading: "8. Limitación de Responsabilidad",
        body: `En la máxima medida permitida por la ley aplicable, Sensorama Design, sus directores, empleados, socios, agentes, proveedores y licenciantes no serán responsables de ningún daño indirecto, incidental, especial, consecuente, punitivo o ejemplar derivado de o relacionado con:\n\n• Tu acceso, uso o incapacidad para usar este sitio web\n• Cualquier contenido, dato o información obtenida a través del sitio\n• Acceso no autorizado o alteración de tus transmisiones o datos\n• Declaraciones o conductas de terceros en o a través del sitio\n• Cualquier otro asunto relacionado con el sitio\n\nEn ningún caso la responsabilidad total de Sensorama Design hacia ti superará BRL 100 (cien reales brasileños) o el importe equivalente que hayas pagado, si lo hubiera, para acceder al sitio.`,
      },
      {
        heading: "9. Privacidad y Protección de Datos",
        body: `El uso de este sitio web también está regulado por:\n\n• **Aviso de Privacidad:** /es/privacy-policy — explica cómo recopilamos, usamos, compartimos y protegemos los datos personales de conformidad con la LGPD y el RGPD.\n• **Política de Cookies:** /es/cookie-policy — explica cómo usamos cookies y tecnologías similares, y cómo puedes gestionar tus preferencias.\n\nEstos documentos se incorporan a estos Términos de Uso por referencia. Al usar este sitio web, reconoces y aceptas nuestras prácticas de privacidad y cookies tal como se describen en ellos.\n\nPara asuntos relacionados con la privacidad o para ejercer tus derechos como titular de datos, contacta a nuestro DPO: dpo@sensoramadesign.com.br`,
      },
      {
        heading: "10. Ley Aplicable y Jurisdicción",
        body: `Estos Términos de Uso se regirán e interpretarán exclusivamente conforme a las leyes de la República Federativa de Brasil, incluyendo el Código Civil Brasileño (Ley n.º 10.406/2002), el Código de Defensa del Consumidor (Ley n.º 8.078/1990) donde aplique, y la LGPD (Ley n.º 13.709/2018).\n\nCualquier disputa, controversia o reclamación derivada de o relacionada con estos Términos, o su incumplimiento, resolución o invalidez, se someterá a la jurisdicción exclusiva de los tribunales de Brasil, con sede en la ciudad de São Paulo, Estado de São Paulo, sin perjuicio del derecho a buscar medidas cautelares urgentes en cualquier tribunal competente.\n\nSi accedes a este sitio desde fuera de Brasil, eres el único responsable de garantizar el cumplimiento de todas las leyes locales aplicables a tu uso.`,
      },
      {
        heading: "11. Cambios en Estos Términos",
        body: `Sensorama Design se reserva el derecho de modificar, actualizar o reemplazar estos Términos de Uso en cualquier momento sin previo aviso. Los cambios son efectivos de inmediato tras su publicación en esta página, con la fecha actualizada reflejada en la parte superior de este documento.\n\nEl uso continuado del sitio web después de la publicación de cualquier cambio constituye tu aceptación de los Términos revisados. Si no estás de acuerdo con los Términos actualizados, debes dejar de usar el sitio web.\n\nTe recomendamos revisar estos Términos periódicamente. La versión actual siempre está disponible en: https://www.sensoramadesign.com/es/terms-of-use`,
      },
      {
        heading: "12. Divisibilidad y Renuncia",
        body: `Si alguna disposición de estos Términos de Uso es declarada inválida, ilegal o inaplicable por un tribunal competente, dicha disposición se modificará en la mínima medida necesaria para hacerla aplicable, o se excluirá de estos Términos. Las demás disposiciones continuarán en plena vigencia y efecto.\n\nLa falta de Sensorama Design de hacer cumplir cualquier derecho o disposición de estos Términos no constituirá una renuncia a dicho derecho o disposición, salvo reconocimiento y acuerdo expreso por escrito.`,
      },
      {
        heading: "13. Acuerdo Integral",
        body: `Estos Términos de Uso, junto con nuestro Aviso de Privacidad y Política de Cookies, constituyen el acuerdo completo entre tú y Sensorama Design en relación con el uso de este sitio web, y reemplazan todos los acuerdos, representaciones o entendimientos anteriores sobre el mismo objeto.`,
      },
      {
        heading: "14. Contacto",
        body: `Para preguntas o inquietudes sobre estos Términos de Uso:\n\n**Sensorama Design**\nWeb: https://www.sensoramadesign.com\nContacto general: contato@sensoramadesign.com\n\nPara asuntos relacionados con la privacidad:\nDPO: dpo@sensoramadesign.com.br`,
      },
    ],
  },
};

function renderBody(text: string) {
  return text.split("\n").map((line, i) => {
    if (!line.trim()) return <br key={i} />;
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <span key={i} style={{ display: "block", marginBottom: 4 }}>
        {parts.map((part, j) =>
          part.startsWith("**") && part.endsWith("**")
            ? <strong key={j} style={{ color: Clr.darkGray }}>{part.slice(2, -2)}</strong>
            : <span key={j}>{part}</span>
        )}
      </span>
    );
  });
}

export function TermsOfUsePage({ lang }: { lang: Lang }) {
  const m = meta[lang];
  const c = content[lang];

  return (
    <>
      <Helmet>
        <html lang={m.lang} />
        <title>{m.title}</title>
        <meta name="description" content={m.description} />
        <link rel="canonical" href={m.canonical} />
        <link rel="alternate" hrefLang="pt-BR" href={`${BASE}/terms-of-use`} />
        <link rel="alternate" hrefLang="en" href={`${BASE}/en/terms-of-use`} />
        <link rel="alternate" hrefLang="es" href={`${BASE}/es/terms-of-use`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE}/terms-of-use`} />
      </Helmet>

      <div style={{ fontFamily: Fnt.body, backgroundColor: Clr.white, minHeight: "100vh" }}>
        {/* Top bar */}
        <header style={{ backgroundColor: Clr.black, borderBottom: "1px solid rgba(255,255,255,0.08)", position: "sticky", top: 0, zIndex: 50 }}>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a href={c.backHref} style={{ fontFamily: Fnt.body, fontSize: 14, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>{c.back}</a>
            <a href={c.backHref} style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "0.8rem", color: Clr.white, textDecoration: "none" }}>Sensorama Design</a>
          </div>
        </header>

        <main style={{ maxWidth: 860, margin: "0 auto", padding: "56px 32px 96px" }}>
          {/* Lang switcher */}
          <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
            {(["pt", "en", "es"] as Lang[]).map(l => (
              <a key={l} href={l === "pt" ? "/terms-of-use" : `/${l}/terms-of-use`}
                style={{ fontFamily: Fnt.body, fontSize: 12, color: l === lang ? Clr.blue : Clr.medGray, fontWeight: l === lang ? 700 : 400, textDecoration: l === lang ? "none" : "underline" }}>
                {l === "pt" ? "PT" : l === "en" ? "EN" : "ES"}
              </a>
            ))}
          </div>

          <p style={{ fontFamily: Fnt.body, fontSize: 12, color: Clr.medGray, marginBottom: 12 }}>{c.updated}</p>
          <h1 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: Clr.black, lineHeight: 1.2, marginBottom: 48 }}>
            {c.title}
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {c.sections.map((s, i) => (
              <section key={i} style={{ marginBottom: 40 }}>
                <h2 style={{ fontFamily: Fnt.heading, fontWeight: 700, fontSize: "0.95rem", color: Clr.black, marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid #EBEBEB" }}>
                  {s.heading}
                </h2>
                <div style={{ fontFamily: Fnt.body, fontSize: 15, color: Clr.darkGray, lineHeight: 1.8 }}>
                  {renderBody(s.body)}
                </div>
              </section>
            ))}
          </div>

          {/* Footer links */}
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid #EBEBEB", display: "flex", gap: 24, flexWrap: "wrap" }}>
            <a href={c.backHref} style={{ fontFamily: Fnt.body, fontSize: 14, color: Clr.blue, textDecoration: "underline" }}>{c.back}</a>
            <a href={lang === "pt" ? "/privacy-policy" : `/${lang}/privacy-policy`} style={{ fontFamily: Fnt.body, fontSize: 14, color: Clr.medGray, textDecoration: "underline" }}>Privacy Policy</a>
            <a href={lang === "pt" ? "/cookie-policy" : `/${lang}/cookie-policy`} style={{ fontFamily: Fnt.body, fontSize: 14, color: Clr.medGray, textDecoration: "underline" }}>Cookie Policy</a>
          </div>
        </main>
      </div>
    </>
  );
}
