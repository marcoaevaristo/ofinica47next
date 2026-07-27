const WHATSAPP_LINK =
  "https://wa.me/5535984410099?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20torradores%20Oficina%2047.";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brass/30 bg-espresso/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#topo" className="flex items-center gap-3 focus-ring rounded">
          <span className="gauge" style={{ "--needle": "-40deg" }} aria-hidden="true" />
          <span className="font-display text-xl font-semibold tracking-tight text-paper">
            Oficina <span className="text-copper">47</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-body text-sm text-paper/80 md:flex">
          <a href="#historia" className="hover:text-copper transition-colors focus-ring rounded">
            História
          </a>
          <a href="#produtos" className="hover:text-copper transition-colors focus-ring rounded">
            Torradores
          </a>
          <a href="#contato" className="hover:text-copper transition-colors focus-ring rounded">
            Contato
          </a>
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring rounded-full border border-brass/60 px-4 py-2 font-gauge text-xs uppercase tracking-widest text-paper transition-colors hover:border-copper hover:text-copper"
        >
          (35) 98441-0099
        </a>
      </div>
    </header>
  );
}
