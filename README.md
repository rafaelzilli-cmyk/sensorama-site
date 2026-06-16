# Sensorama Site

Site institucional da Sensorama Design, reconstruído em **Next.js 14 (App Router)** com SEO completo, SSG, multilíngue PT/EN/ES.

Substitui a versão anterior em Figma Make (Vite + React SPA) que tinha problemas de indexação por ser 100% Client-Side Rendering.

---

## ⚡ Início rápido

```bash
# Instalar dependências
npm install

# Rodar dev
npm run dev

# Build de produção
npm run build

# Rodar build localmente
npm start
```

Acesse: `http://localhost:3000`

---

## 📁 Estrutura

```
sensorama-site/
├── src/
│   ├── app/                        # App Router do Next.js
│   │   ├── layout.tsx              # Layout raiz com SEO + Schema
│   │   ├── page.tsx                # Home PT
│   │   ├── sitemap.ts              # Sitemap dinâmico
│   │   ├── robots.ts               # robots.txt dinâmico
│   │   ├── not-found.tsx           # Página 404
│   │   ├── cases/                  # PT cases (listagem + detalhe)
│   │   ├── privacy-policy/
│   │   ├── cookie-policy/
│   │   ├── terms-of-use/
│   │   ├── en/                     # Inglês (todas as páginas)
│   │   └── es/                     # Espanhol (todas as páginas)
│   ├── components/                 # Componentes React
│   │   ├── LandingPage.tsx         # ⚠️ Placeholder (completar do reference/)
│   │   ├── CasesListingPage.tsx    # Funcional, com filtro
│   │   ├── CaseDetailPage.tsx      # Funcional, renderiza conteúdo
│   │   ├── PrivacyPolicyPage.tsx   # ⚠️ Placeholder
│   │   ├── CookiePolicyPage.tsx    # ⚠️ Placeholder
│   │   └── TermsOfUsePage.tsx      # ⚠️ Placeholder
│   ├── lib/
│   │   ├── constants.ts            # Brand tokens, idiomas
│   │   └── cases-data.ts           # Dados completos dos 3 cases (PT/EN/ES)
│   └── styles/
│       └── globals.css             # CSS global + fonts
├── public/
│   ├── images/                     # Imagens (exportar do Figma Make)
│   ├── google62502e77*.html        # Verificação Google
│   └── googlevdqTU6*.html          # Verificação Google
├── reference/                      # Código original do Figma Make (referência)
│   ├── LandingPage.original.tsx
│   ├── CasesListingPage.original.tsx
│   ├── CaseDetailPage.original.tsx
│   ├── MarketplaceGlobalCasePage.original.tsx
│   ├── PrivacyPolicyPage.original.tsx
│   ├── CookiePolicyPage.original.tsx
│   ├── TermsOfUsePage.original.tsx
│   └── components.original/        # Componentes (Modal, CookieBanner, etc.)
├── PROMPT_CLAUDE_CODE.txt          # Prompt para completar o trabalho
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── .env.example
└── .gitignore
```

---

## 🎯 O que já está pronto

✅ Estrutura Next.js 14 com App Router
✅ Multilíngue PT/EN/ES via rotas (`/`, `/en`, `/es`)
✅ SEO técnico completo:
   - Meta tags estáticas por página (renderizadas no HTML pelo servidor)
   - Canonical e hreflang corretos em todas as páginas
   - Open Graph e Twitter Card
   - Schema JSON-LD (Organization + FAQ)
   - Sitemap.xml dinâmico (cobre PT/EN/ES + cases)
   - robots.txt dinâmico
✅ Páginas de cases com SSG (`generateStaticParams`) — HTML pré-gerado
✅ Dados dos 3 cases visíveis com conteúdo completo em PT/EN/ES
✅ Componente CasesListingPage funcional com filtro por indústria
✅ Componente CaseDetailPage funcional renderizando conteúdo
✅ Google Analytics + ContentSquare configurados

## ⚠️ O que precisa ser completado pelo Claude Code

❌ LandingPage completa (1650 linhas no arquivo de referência)
   - Hero com texto + vídeo
   - Marquee de logos de clientes
   - Case highlights
   - Services
   - Testimonials
   - About + team
   - CTA final
   - Header com navegação
   - Footer

❌ Páginas de políticas com conteúdo jurídico oficial:
   - PrivacyPolicyPage (14 seções, conteúdo da Data Guide)
   - CookiePolicyPage (7 seções, conteúdo da Data Guide)
   - TermsOfUsePage

❌ Componentes funcionais:
   - ContactModal (formulário de contato com EmailJS)
   - CookieBanner (banner LGPD)
   - ConsentManager (gerenciamento de cookies)

❌ Heroes SVG customizados por case (ContactCenterHero, BranchResearchHero, MarketplaceExpansionHero)

❌ Imagens (exportar do Figma Make antigo e colocar em `public/images/`)

**O `PROMPT_CLAUDE_CODE.txt` na raiz do projeto tem todas as instruções para completar isso.**

---

## 🖼️ Como exportar e adicionar as imagens

### Imagens originais no Figma Make

No projeto antigo (Figma Make), as imagens são referenciadas via `figma:asset/[hash].png`. Para migrar:

1. **No painel do Figma Make:**
   - Ou abre o projeto original e exporta cada imagem manualmente
   - Ou pega do código antigo (cada `figma:asset/hash` aponta pra um arquivo em `src/assets/`)

2. **Adicione no projeto novo em `public/images/` com nomes legíveis:**

```
public/images/
├── logos/
│   ├── itau.png
│   ├── unilever.png
│   ├── ambev.png
│   ├── 99.png
│   ├── nestle.png
│   ├── nubank.png
│   ├── totvs.png
│   ├── vale.png
│   ├── mondelez.png
│   ├── randon.png
│   ├── cogna.png
│   ├── engie.png
│   └── thomson-reuters.png
├── brand/
│   ├── eye.png
│   ├── lgpd-seal.png
│   ├── team.png
│   ├── workshop.png
│   └── weconnect.png
├── cases/
│   ├── contact-center-diagnostico/hero.jpg
│   ├── agencias-aposentados-benchmark/hero.jpg
│   └── marketplace-b2b-expansao-internacional/hero.jpg
└── logo.png                        # Logo principal Sensorama
```

3. **Quando trocar nas referências:**
   - `figma:asset/abc123.png` → `/images/logos/itau.png`

---

## 🚀 Deploy no Vercel

### 1. Subir no GitHub

```bash
git init
git add .
git commit -m "Initial commit: Sensorama site (Next.js)"
git branch -M main
git remote add origin https://github.com/[org-sensorama]/sensorama-site.git
git push -u origin main
```

### 2. Conectar no Vercel

1. Acesse [vercel.com](https://vercel.com) (criar conta com email da Sensorama)
2. Click em **Add New Project**
3. Importar do GitHub
4. Configurar variáveis de ambiente (vide `.env.example`)
5. Deploy

### 3. Conectar o domínio

1. No painel Vercel, ir em **Settings > Domains**
2. Adicionar `sensoramadesign.com` e `www.sensoramadesign.com`
3. O Vercel mostra os DNS records necessários
4. **No GoDaddy:**
   - Excluir CNAME `www → sites.figma.net` (era do Figma Make)
   - Adicionar CNAME `www → cname.vercel-dns.com` (ou o que Vercel indicar)
   - Manter o redirect `sensoramadesign.com → www.sensoramadesign.com`
   - Manter CNAME `sensoai → ghs.googlehosted.com` (ferramenta do outro time)
5. Aguardar propagação DNS (1-4h)

### 4. Validar no Google Search Console

1. Adicionar propriedade `sensoramadesign.com`
2. Validar via DNS (mais robusto) ou via arquivo HTML (já incluído em `public/`)
3. Submeter sitemap: `https://www.sensoramadesign.com/sitemap.xml`
4. Solicitar reindexação

---

## 🔧 Variáveis de ambiente

Copiar `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Preencher:
- `NEXT_PUBLIC_SITE_URL` — URL de produção
- `NEXT_PUBLIC_GA_ID` — Google Analytics
- `NEXT_PUBLIC_CONTENTSQUARE_ID` — ContentSquare
- `NEXT_PUBLIC_EMAILJS_*` — EmailJS (formulário de contato)

No Vercel, configurar as mesmas variáveis em **Settings > Environment Variables**.

---

## 📊 SEO técnico — o que muda em relação ao Figma Make

| Item | Figma Make (antigo) | Next.js (este projeto) |
|---|---|---|
| Renderização | 100% CSR (JS no browser) | SSG (HTML estático pré-gerado) |
| Meta tags | Via react-helmet (JS) | No HTML estático |
| Sitemap | Inexistente | Dinâmico em `/sitemap.xml` |
| robots.txt | Inexistente | Dinâmico em `/robots.txt` |
| Schema | Renderizado por JS (parcial) | Estático no HTML |
| First Paint | Lento (JS bundle 643KB) | Instantâneo (HTML pronto) |
| Indexação Google | Limitada (render queue) | Imediata |
| Leitura por IAs | Não consegue ler conteúdo | Lê tudo do HTML |
| Performance | Lighthouse ~60 | Lighthouse 95+ esperado |

---

## 📞 Suporte

Dúvidas: contato@sensoramadesign.com
DPO: dpo@sensoramadesign.com.br

---

**Última atualização da estrutura:** Junho 2026
