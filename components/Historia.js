const ETAPAS = [
  {
    needle: "-80deg",
    titulo: "Seleção da matéria-prima",
    texto:
      "Os componentes metálicos chegam à fábrica e passam por um rigoroso processo de inspeção antes de seguir para produção.",
  },
  {
    needle: "-35deg",
    titulo: "Corte e moldagem",
    texto:
      "Cada peça é moldada e cortada com precisão em máquinas de última geração, garantindo resistência e durabilidade.",
  },
  {
    needle: "10deg",
    titulo: "Montagem especializada",
    texto:
      "Técnicos acompanham cada etapa com atenção aos detalhes, da soldagem estrutural ao acabamento final das chapas.",
  },
  {
    needle: "55deg",
    titulo: "Bateria de testes",
    texto:
      "Aquecimento, fluxo de ar, uniformidade de torra e segurança são avaliados antes de qualquer equipamento sair da fábrica.",
  },
  {
    needle: "95deg",
    titulo: "Selo de qualidade",
    texto:
      "Só após validação completa o torrador recebe o selo final e é embalado — pronto para o mestre de torra.",
  },
];

export default function Historia() {
  return (
    <section id="historia" className="bg-paper px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-gauge text-xs uppercase tracking-[0.3em] text-copper">
              Da chapa ao selo
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Torrador fabricado em Ouro Fino — MG
            </h2>
            <p className="mt-6 font-body leading-relaxed text-ink/75">
              O nosso torrador é produzido em uma região reconhecida pela
              tradição no café, pela excelência no trabalho artesanal e pela
              forte vocação industrial. O resultado é um produto robusto,
              confiável e pensado para oferecer a melhor experiência ao
              mestre de torra.
            </p>
            <p className="mt-4 font-display italic text-ink/60">
              Tradição, qualidade e cuidado em cada detalhe.
            </p>
          </div>

          <ol className="relative space-y-10 border-l border-brass/30 pl-10">
            {ETAPAS.map((etapa) => (
              <li key={etapa.titulo} className="relative">
                <span
                  className="gauge absolute -left-[3.35rem] top-0"
                  style={{ "--needle": etapa.needle }}
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-semibold text-ink">
                  {etapa.titulo}
                </h3>
                <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-ink/70">
                  {etapa.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
