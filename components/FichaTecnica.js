const ITENS = [
  { titulo: "Combustível", texto: "Gás GLP com queimador micro chamas" },
  { titulo: "Tensão elétrica", texto: "220V bifásico" },
  { titulo: "Resfriador", texto: "Bandeja de resfriamento acoplada ao equipamento" },
  { titulo: "Ciclone", texto: "Ciclone coletor de película" },
  { titulo: "Tambor", texto: "Controle de velocidade do tambor" },
  { titulo: "Fluxo de ar", texto: "Controle de velocidade do fluxo de ar" },
  { titulo: "Estrutura", texto: "Aço carbono com chapas robustas" },
  { titulo: "Capacidades", texto: "05 kg, 10 kg e 15 kg por lote" },
];

export default function FichaTecnica() {
  return (
    <section id="ficha-tecnica" className="bg-paper px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-gauge text-xs uppercase tracking-[0.3em] text-copper">
              Ficha técnica
            </p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              O que vem em todo torrador Oficina 47
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-ink/70">
            Torrador de café comercial e industrial, de fabricação 100%
            nacional. Os mesmos sistemas em todas as capacidades.
          </p>
        </div>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-brass/30 bg-brass/30 sm:grid-cols-2 lg:grid-cols-4">
          {ITENS.map((item) => (
            <div key={item.titulo} className="bg-paper p-6">
              <dt className="font-gauge text-xs uppercase tracking-widest text-copper">
                {item.titulo}
              </dt>
              <dd className="mt-2 font-body text-base leading-snug text-ink">
                {item.texto}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
