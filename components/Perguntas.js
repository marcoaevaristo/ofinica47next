import { PERGUNTAS } from "@/lib/perguntas";

export default function Perguntas() {
  return (
    <section id="duvidas" className="border-t border-brass/20 bg-paper px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-gauge text-xs uppercase tracking-[0.3em] text-copper">
            Dúvidas frequentes
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Antes de comprar o seu torrador
          </h2>
        </div>

        <div className="divide-y divide-brass/25 border-y border-brass/25">
          {PERGUNTAS.map((item) => (
            <details key={item.pergunta} className="group py-5">
              <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-6 rounded font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.pergunta}
                <span
                  aria-hidden="true"
                  className="mt-1 font-gauge text-xl leading-none text-copper transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl font-body leading-relaxed text-ink/75">
                {item.resposta}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
