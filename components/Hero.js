import Image from "next/image";

export default function Hero() {
  return (
    <section id="topo" className="relative flex min-h-[92vh] items-end overflow-hidden bg-espresso">
      <Image
        src="/images/torrador-hero.png"
        alt="Torrador de café Oficina 47 despejando grãos recém-torrados"
        fill
        priority
        className="object-cover object-[70%_35%] opacity-80"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
        <p className="font-gauge text-xs uppercase tracking-[0.3em] text-brass">
          Ouro Fino · Minas Gerais
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-5xl font-semibold leading-[1.05] text-paper md:text-7xl">
          Torradores de café,
          <br />
          <span className="italic text-copper">forjados</span> à mão.
        </h1>
        <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-paper/80">
          Cada torrador nasce em um processo que combina tecnologia, mão de obra
          qualificada e o cuidado típico do interior mineiro — para pequenas
          torrefações, cafeterias e produções artesanais.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#produtos"
            className="focus-ring rounded-full bg-copper px-7 py-3 font-body text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
          >
            Ver torradores
          </a>
          <a
            href="#historia"
            className="focus-ring rounded-full border border-paper/30 px-7 py-3 font-body text-sm text-paper/90 transition-colors hover:border-copper hover:text-copper"
          >
            Conheça a produção
          </a>
        </div>
      </div>
    </section>
  );
}
