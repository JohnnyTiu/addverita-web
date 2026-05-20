import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "50200000000";

  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="container-page py-16">
          <SectionHeader
            eyebrow="Contacto"
            title="Hablemos de tu ruta académica."
            description="Escríbenos para resolver dudas sobre planes, eventos, horarios o modalidad."
            inverted
          />
        </div>
      </section>

      <section className="section-pad bg-smoke-50">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {[
            { icon: Mail, label: "Correo", value: "hola@addveritas.com" },
            { icon: Phone, label: "WhatsApp", value: "+502 0000 0000" },
            { icon: MapPin, label: "Ubicación", value: "Guatemala" },
          ].map((item) => (
            <article key={item.label} className="rounded-lg border border-smoke-100 bg-white p-6 shadow-sm">
              <item.icon className="h-7 w-7 text-gold-500" aria-hidden />
              <h2 className="mt-5 text-lg font-bold text-ink-950">{item.label}</h2>
              <p className="mt-2 text-sm text-smoke-500">{item.value}</p>
            </article>
          ))}
        </div>
        <div className="container-page mt-10">
          <Link
            href={`https://wa.me/${phone}`}
            target="_blank"
            className="focus-ring inline-flex rounded-md bg-gold-400 px-5 py-3 text-sm font-bold text-ink-950 transition hover:bg-gold-300"
          >
            Abrir WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
