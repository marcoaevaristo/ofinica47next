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
