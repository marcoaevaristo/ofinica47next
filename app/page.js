import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Produtos from "@/components/Produtos";
import NaOficina from "@/components/NaOficina";
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
      <NaOficina />
      <Detalhe />
      <Footer />
    </main>
  );
}
