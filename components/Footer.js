const WHATSAPP_LINK =
  "https://wa.me/5535984410099?text=Ol%C3%A1!%20Quero%20falar%20sobre%20os%20torradores%20Oficina%2047.";

export default function Footer() {
  return (
    <footer id="contato" className="bg-espresso px-6 pb-10 pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-brass/20 pb-14 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-md font-display text-4xl font-semibold leading-tight text-paper md:text-5xl">
              Vamos torrar o seu <span className="italic text-copper">próximo lote</span>?
            </h2>
            <p className="mt-5 max-w-sm font-body text-sm leading-relaxed text-paper/70">
              Fale direto com a nossa equipe pelo WhatsApp e receba valores e
              prazos para o torrador ideal para a sua operação.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring shrink-0 rounded-full bg-copper px-8 py-4 font-body text-sm font-semibold text-paper transition-transform hover:scale-[1.03]"
          >
            Falar no WhatsApp — (35) 98441-0099
          </a>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-paper/50 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="gauge scale-75" style={{ "--needle": "-20deg" }} aria-hidden="true" />
            <span className="font-display text-base text-paper/80">
              Oficina <span className="text-copper">47</span>
            </span>
          </div>
          <address className="font-gauge not-italic">
            <a
              href="https://maps.google.com/?q=-22.292719,-46.381836"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded transition-colors hover:text-copper"
            >
              Rua Luís Bolognani, 152 · Palomos · Ouro Fino — MG
            </a>
          </address>
          <p>
            © {new Date().getFullYear()} Oficina 47 · CNPJ 16.882.837/0001-41
          </p>
        </div>
      </div>
    </footer>
  );
}
