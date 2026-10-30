// Dados estruturados (schema.org) — ajudam o Google a entender que o site é
// de um fabricante de torradores em Ouro Fino/MG e quais produtos ele vende.
import { PERGUNTAS } from "@/lib/perguntas";

const SITE_URL = "https://www.oficina47.com.br";
const TELEFONE = "+55-35-98441-0099";

const capacidades = ["05kg", "10kg", "15kg"];

const dados = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#empresa`,
      name: "Oficina 47",
      description:
        "Fabricante de torradores de café artesanais de 05kg, 10kg e 15kg em Ouro Fino, Minas Gerais.",
      url: SITE_URL,
      telephone: TELEFONE,
      image: `${SITE_URL}/images/oficina/torrador-oficina-1.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Luís Bolognani, 152 - Palomos",
        addressLocality: "Ouro Fino",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -22.292719,
        longitude: -46.381836,
      },
      hasMap: "https://maps.google.com/?q=-22.292719,-46.381836",
      areaServed: { "@type": "Country", name: "Brasil" },
      taxID: "16.882.837/0001-41",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: TELEFONE,
        contactType: "sales",
        availableLanguage: "Portuguese",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: SITE_URL,
      name: "Oficina 47",
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#empresa` },
    },
    ...capacidades.map((cap) => ({
      "@type": "Product",
      name: `Torrador de Café ${cap} Oficina 47`,
      description: `Torrador de café comercial com capacidade de ${cap} por lote, a gás GLP, 220V bifásico, com resfriador acoplado, ciclone coletor de película e controle de velocidade do tambor e do fluxo de ar. Fabricado em Ouro Fino - MG, apto para financiamento bancário.`,
      image: [
        `${SITE_URL}/images/oficina/torrador-oficina-1.jpg`,
        `${SITE_URL}/images/oficina/torrador-oficina-2.jpg`,
        `${SITE_URL}/images/oficina/torrador-oficina-3.jpg`,
        `${SITE_URL}/images/oficina/torrador-oficina-4.jpg`,
      ],
      brand: { "@type": "Brand", name: "Oficina 47" },
      manufacturer: { "@id": `${SITE_URL}/#empresa` },
      category: "Torrador de café",
    })),
    {
      "@type": "FAQPage",
      mainEntity: PERGUNTAS.map((item) => ({
        "@type": "Question",
        name: item.pergunta,
        acceptedAnswer: { "@type": "Answer", text: item.resposta },
      })),
    },
  ],
};

export default function DadosEstruturados() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados) }}
    />
  );
}
