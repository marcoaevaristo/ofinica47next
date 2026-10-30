import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import GoogleAds from "@/components/GoogleAds";
import WhatsAppFlutuante from "@/components/WhatsAppFlutuante";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.oficina47.com.br"),
  title: "Torrador de Café 5kg, 10kg e 15kg | Oficina 47 — Ouro Fino, MG",
  description:
    "Fabricante de torradores de café artesanais em Ouro Fino, Minas Gerais. Modelos de 05kg, 10kg e 15kg para torrefações, cafeterias e produções artesanais. Peça orçamento pelo WhatsApp.",
  keywords: [
    "torrador de café",
    "torrador de café artesanal",
    "torrador de café 5kg",
    "torrador de café 10kg",
    "torrador de café 15kg",
    "torrador para torrefação",
    "fabricante de torrador de café",
    "torrador de café Minas Gerais",
    "Ouro Fino",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  // Código do Google Search Console (opcional — ver README).
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    title: "Oficina 47 — Torradores de Café Artesanais",
    description:
      "Torradores de café de 05kg, 10kg e 15kg, fabricados artesanalmente em Ouro Fino, Minas Gerais.",
    url: "/",
    siteName: "Oficina 47",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-oficina47.jpg",
        width: 1200,
        height: 630,
        alt: "Linha de torradores de café Oficina 47",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">
        {children}
        <WhatsAppFlutuante />
        <Analytics />
        {googleAdsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-tag" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${googleAdsId}');`}
            </Script>
            <GoogleAds />
          </>
        ) : null}
      </body>
    </html>
  );
}
