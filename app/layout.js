import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";
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
  title: "Oficina 47 — Torradores de Café Artesanais",
  description:
    "Torradores de café fabricados em Ouro Fino, Minas Gerais. Capacidades de 05kg, 10kg e 15kg, feitos à mão para torrefações, cafeterias e produções artesanais.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
