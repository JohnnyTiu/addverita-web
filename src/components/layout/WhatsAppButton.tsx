import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "50242026792";
  const message = encodeURIComponent("Hola, quiero información sobre Addlegal/Addveritas.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-md bg-gold-400 text-ink-950 shadow-glow transition hover:-translate-y-1 hover:bg-gold-300"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
