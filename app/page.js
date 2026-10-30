import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Produtos from "@/components/Produtos";
import FichaTecnica from "@/components/FichaTecnica";
import Financiamento from "@/components/Financiamento";
import NaOficina from "@/components/NaOficina";
import Perguntas from "@/components/Perguntas";
import Detalhe from "@/components/Detalhe";
import Footer from "@/components/Footer";
import DadosEstruturados from "@/components/DadosEstruturados";

export default function Home() {
  return (
    <main>
      <DadosEstruturados />
      <Header />
      <Hero />
      <Historia />
      <Produtos />
      <FichaTecnica />
      <Financiamento />
      <NaOficina />
      <Detalhe />
      <Perguntas />
      <Footer />
    </main>
  );
}
