// Botão fixo no canto da tela para chamar no WhatsApp a qualquer momento.
// O clique é medido pelo GoogleAds.js (procura links com "wa.me").
const WHATSAPP_LINK =
  "https://wa.me/5535984410099?text=Ol%C3%A1!%20Vi%20o%20site%20e%20quero%20saber%20mais%20sobre%20os%20torradores%20Oficina%2047.";

export default function WhatsAppFlutuante() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Oficina 47 no WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full bg-[#1f9d55] px-4 py-3 font-body text-sm font-semibold text-white shadow-lg shadow-black/30 transition-transform hover:scale-105 md:bottom-7 md:right-7 md:px-5"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.3A8.4 8.4 0 1 1 21 11.5z" />
        <path d="M8.5 10.5h7M8.5 13.5h4.5" />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
