// Dados estruturados (schema.org) — ajudam o Google a entender que o site é
// de um fabricante de torradores em Ouro Fino/MG e quais produtos ele vende.
const SITE_URL = "https://oficina47.com.br";
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
        addressLocality: "Ouro Fino",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      areaServed: { "@type": "Country", name: "Brasil" },
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
      description: `Torrador de café artesanal com capacidade de ${cap}, fabricado em Ouro Fino - MG.`,
      image: [
        `${SITE_URL}/images/oficina/torrador-oficina-1.jpg`,
        `${SITE_URL}/images/oficina/torrador-oficina-2.jpg`,
        `${SITE_URL}/images/oficina/torrador-oficina-3.jpg`,
      ],
      brand: { "@type": "Brand", name: "Oficina 47" },
      manufacturer: { "@id": `${SITE_URL}/#empresa` },
      category: "Torrador de café",
    })),
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
