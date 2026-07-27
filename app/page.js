import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Historia from "@/components/Historia";
import Produtos from "@/components/Produtos";
import Detalhe from "@/components/Detalhe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Historia />
      <Produtos />
      <Detalhe />
      <Footer />
    </main>
  );
}
