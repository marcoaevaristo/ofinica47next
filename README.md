# Oficina 47 — site em Next.js

Migração do site institucional para Next.js (React), pronto para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Deploy na Vercel

1. Crie um repositório no GitHub e suba esta pasta.
2. Em vercel.com, clique em **Add New → Project** e importe o repositório.
3. A Vercel detecta Next.js automaticamente — não precisa configurar nada.
4. Depois do deploy, configure o domínio `oficina47.com.br` em **Project Settings → Domains**.

## Google Ads

O site mede como conversão os cliques nos botões que abrem o WhatsApp. Antes do
deploy, crie uma conversão de tipo **Contato** no Google Ads e adicione estas
variáveis em **Vercel → Project Settings → Environment Variables**:

```env
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXXXXXXXXX
```

Use os valores fornecidos pelo Google Ads, publique uma nova versão e confirme
o disparo com a extensão Tag Assistant. O evento só é carregado quando o ID
está configurado, então o site continua funcionando durante o desenvolvimento.

Para anunciar, também configure no Google Ads o domínio final publicado, a
localização atendida, o orçamento e palavras-chave coerentes com os modelos de
05kg, 10kg e 15kg. Não use o número de telefone como conversão até confirmar
que ele está correto.

## Aparecer no Google sem pagar (SEO)

O site já gera automaticamente:

- `https://www.oficina47.com.br/sitemap.xml` (app/sitemap.js)
- `https://www.oficina47.com.br/robots.txt` (app/robots.js)
- título, descrição, URL canônica e imagem de compartilhamento (app/layout.js)
- dados estruturados da empresa e dos 3 torradores (components/DadosEstruturados.js)

Para cadastrar no Google Search Console:

1. Acesse https://search.google.com/search-console e clique em **Adicionar propriedade**.
2. Escolha **Prefixo do URL** e digite `https://www.oficina47.com.br`.
3. Em **Tag HTML**, copie só o valor de `content="..."`.
4. Na Vercel, em **Settings → Environment Variables**, crie
   `GOOGLE_SITE_VERIFICATION` com esse valor e faça um novo deploy.
5. Volte ao Search Console e clique em **Verificar**.
6. Em **Sitemaps**, envie `sitemap.xml`.
7. Em **Inspeção de URL**, cole `https://www.oficina47.com.br/` e clique em
   **Solicitar indexação**.

Também vale criar o **Perfil da Empresa no Google** (https://business.google.com),
grátis, com endereço em Ouro Fino, telefone, fotos e link do site — é o que faz
a empresa aparecer no Maps e em buscas como "torrador de café perto de mim".

## Estrutura

```
app/
  layout.js       — fontes (Fraunces, Work Sans, IBM Plex Mono) e metadata
  page.js          — monta a página com as seções
  globals.css      — estilos globais + motivo do "dial" (mostrador analógico)
components/
  Header.js        — navegação fixa + WhatsApp
  Hero.js          — abertura com foto do torrador
  Historia.js       — texto da produção em Ouro Fino, como sequência de etapas
  Produtos.js       — cards dos torradores 05kg / 10kg / 15kg
  Detalhe.js         — seção de acabamento com o render de estúdio
  Footer.js          — CTA final + contato
public/images/       — as 3 fotos de produto que você enviou
```

## O que ajustar antes de publicar

- **Número do WhatsApp**: está como `5535997500438` (baseado no (35) 99750-0438 do site atual). Confirme se é esse mesmo.
- **Textos**: reaproveitei a copy do site atual (história da produção, capacidades). Vale revisar com calma.
- **Imagens dos produtos**: os cards de 05kg/10kg/15kg ainda apontam para a imagem de linha — se você tiver fotos individuais de cada modelo, dá pra trocar por card.
