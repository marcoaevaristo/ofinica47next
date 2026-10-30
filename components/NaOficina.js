import Image from "next/image";

const FOTOS = [
  {
    src: "/images/oficina/torrador-oficina-1.jpg",
    alt: "Torrador de café Oficina 47 laranja e preto pronto na oficina, com painel de controle e resfriador",
  },
  {
    src: "/images/oficina/torrador-oficina-2.jpg",
    alt: "Vista lateral do torrador de café Oficina 47 com funil de carga e bandeja de resfriamento",
  },
  {
    src: "/images/oficina/torrador-oficina-3.jpg",
    alt: "Torrador de café Oficina 47 finalizado na fábrica em Ouro Fino, Minas Gerais",
  },
];

export default function NaOficina() {
  return (
    <section id="oficina" className="bg-paper px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-gauge text-xs uppercase tracking-[0.3em] text-copper">
              Direto da oficina
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Veja o torrador de verdade, saindo da fábrica.
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-ink/70">
            Fotos e vídeo de um torrador recém-finalizado na nossa oficina em
            Ouro Fino — painel de controle, funil de carga e bandeja de
            resfriamento com agitador.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-3 md:grid-cols-4 md:gap-5">
          <figure className="col-span-3 overflow-hidden rounded-2xl border border-brass/30 bg-espresso md:col-span-1">
            <video
              className="aspect-[9/16] h-full w-full object-cover"
              src="/videos/torrador-funcionando.mp4"
              poster="/images/oficina/video-capa.jpg"
              controls
              muted
              loop
              playsInline
              preload="none"
              aria-label="Vídeo do torrador de café Oficina 47 na oficina"
            />
          </figure>

          {FOTOS.map((foto) => (
            <figure
              key={foto.src}
              className="overflow-hidden rounded-2xl border border-brass/30"
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                width={1200}
                height={1600}
                sizes="(min-width: 768px) 25vw, 33vw"
                className="aspect-[3/4] h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
