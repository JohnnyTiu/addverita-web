import Link from "next/link";
import { EventCard } from "@/components/cards/EventCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { events } from "@/data/site";

export const metadata = {
  title: "Eventos",
};

export default function EventosPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="container-page py-16">
          <SectionHeader
            eyebrow="Eventos"
            title="Agenda jurídica para estudiantes con curiosidad profesional."
            description="Encuentra talleres, conversatorios y bootcamps que conectan teoría universitaria con problemas jurídicos reales."
            inverted
          />
        </div>
      </section>

      <section className="section-pad bg-smoke-50">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>
        <div className="container-page mt-10">
          <Link
            href="/inscripcion"
            className="focus-ring inline-flex rounded-md bg-ink-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-ink-800"
          >
            Inscribirme a un evento
          </Link>
        </div>
      </section>
    </>
  );
}
