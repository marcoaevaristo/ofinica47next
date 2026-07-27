import Image from "next/image";

export default function Detalhe() {
  return (
    <section className="bg-paper px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <p className="font-gauge text-xs uppercase tracking-[0.3em] text-copper">
            Acabamento
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Cada chapa, cada rebite, no lugar certo.
          </h2>
          <p className="mt-6 font-body leading-relaxed text-ink/75">
            Da estrutura em aço aos botões de comando, o torrador Oficina 47
            é pensado para durar décadas de torra — resistente ao uso diário
            de uma torrefação e bonito o suficiente para ficar à vista dos
            seus clientes.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <span className="rivet" />
            <span className="rivet" />
            <span className="rivet" />
            <p className="font-gauge text-xs uppercase tracking-widest text-ink/50">
              Estrutura em aço · pintura industrial · comando manual
            </p>
          </div>
        </div>

        <div className="order-1 overflow-hidden rounded-2xl border border-brass/30 md:order-2">
          <Image
            src="/images/torradores-estudio.png"
            alt="Renderização de estúdio dos torradores Oficina 47 em preto e amarelo"
            width={1200}
            height={1400}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
