import Image from "next/image";

const WHATSAPP_BASE = "https://wa.me/5535984410099?text=";

const PRODUTOS = [
  {
    nome: "Torrador 05kg",
    capacidade: "05 kg",
    descricao: "Ideal para pequenas torrefações e cafeterias que estão começando.",
    mensagem: "Ol%C3%A1!%20Quero%20consultar%20valores%20do%20Torrador%20de%20Caf%C3%A9%2005kg.",
  },
  {
    nome: "Torrador 10kg",
    capacidade: "10 kg",
    descricao: "Perfeito para produção média, com fluxo constante de torra.",
    mensagem: "Ol%C3%A1!%20Quero%20consultar%20valores%20do%20Torrador%20de%20Caf%C3%A9%2010kg.",
  },
  {
    nome: "Torrador 15kg",
    capacidade: "15 kg",
    descricao: "Para operações maiores, sem abrir mão do acabamento artesanal.",
    mensagem: "Ol%C3%A1!%20Quero%20consultar%20valores%20do%20Torrador%20de%20Caf%C3%A9%2015kg.",
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="bg-espresso px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-gauge text-xs uppercase tracking-[0.3em] text-brass">
              Linha completa
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-paper md:text-5xl">
              Nossos torradores
            </h2>
          </div>
          <p className="max-w-sm font-body text-sm leading-relaxed text-paper/70">
            Oferecemos torradores nas capacidades de 05kg, 10kg e 15kg — cada
            um construído sob medida para o ritmo da sua torrefação.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-brass/20">
          <Image
            src="/images/torradores-linha.png"
            alt="Linha de torradores de café Oficina 47 lado a lado, com grãos sendo despejados"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PRODUTOS.map((produto) => (
            <div
              key={produto.nome}
              className="flex flex-col rounded-2xl border border-brass/25 bg-espresso p-7 transition-colors hover:border-copper/60"
            >
              <div className="flex items-center gap-3">
                <span className="gauge" style={{ "--needle": "30deg" }} aria-hidden="true" />
                <span className="font-gauge text-xs uppercase tracking-widest text-brass">
                  Capacidade {produto.capacidade}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold text-paper">
                {produto.nome}
              </h3>
              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-paper/70">
                {produto.descricao}
              </p>

              <div className="mt-7 flex flex-col gap-2.5">
                <a
                  href={`${WHATSAPP_BASE}${produto.mensagem}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-full bg-copper py-2.5 text-center font-body text-sm font-semibold text-paper transition-transform hover:scale-[1.02]"
                >
                  Comprar no WhatsApp
                </a>
                <a
                  href={`${WHATSAPP_BASE}${produto.mensagem}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring rounded-full border border-brass/40 py-2.5 text-center font-body text-sm text-paper/80 transition-colors hover:border-brass"
                >
                  Consultar valores
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
