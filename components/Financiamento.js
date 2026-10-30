const WHATSAPP_PROPOSTA =
  "https://wa.me/5535984410099?text=Ol%C3%A1!%20Quero%20uma%20proposta%20comercial%20do%20torrador%20para%20apresentar%20ao%20meu%20banco%20(financiamento).";

const CONDICOES = [
  { valor: "45 a 50 dias", rotulo: "Prazo de fabricação, após pagamento ou liberação do crédito" },
  { valor: "6 meses", rotulo: "Garantia contra defeito de fabricação" },
  { valor: "Todo o Brasil", rotulo: "Frete por conta do comprador (FOB)" },
];

export default function Financiamento() {
  return (
    <section id="financiamento" className="bg-espresso px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="font-gauge text-xs uppercase tracking-[0.3em] text-brass">
            Financiamento
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-paper md:text-5xl">
            Compre seu torrador com{" "}
            <span className="italic text-copper">crédito do banco</span>.
          </h2>
          <p className="mt-6 max-w-lg font-body leading-relaxed text-paper/75">
            Somos indústria fabricante nacional, com nota fiscal (NF-e) emitida
            direto da fábrica. Enviamos uma proposta comercial técnica pronta
            para análise de crédito, para linhas de investimento
            industrial e rural como <strong className="text-paper">PRONAMPE</strong> e{" "}
            <strong className="text-paper">PRONAF Mais Alimentos</strong>.
          </p>
          <p className="mt-3 max-w-lg font-body text-sm text-paper/50">
            A aprovação do crédito depende da análise do seu banco.
          </p>
          <a
            href={WHATSAPP_PROPOSTA}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-9 inline-block rounded-full bg-copper px-8 py-4 font-body text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
          >
            Pedir proposta para o meu banco
          </a>
        </div>

        <ul className="space-y-4">
          {CONDICOES.map((c) => (
            <li
              key={c.valor}
              className="flex items-center gap-5 rounded-2xl border border-brass/25 p-6"
            >
              <span className="gauge" style={{ "--needle": "40deg" }} aria-hidden="true" />
              <div>
                <p className="font-display text-2xl font-semibold text-paper">{c.valor}</p>
                <p className="mt-1 font-body text-sm text-paper/65">{c.rotulo}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
