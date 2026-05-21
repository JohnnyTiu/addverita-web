import { ArrowRight, BookOpen, CalendarDays, GraduationCap } from "lucide-react";
import { EventCard } from "@/components/cards/EventCard";
import { PlanCard } from "@/components/cards/PlanCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Hero } from "@/components/layout/sections/Hero";
import { events, plans, stats } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-ink-950 text-white">
        <div className="container-page grid gap-6 py-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-gold-400/50 pl-5">
              <p className="font-serif text-3xl text-gold-300">{stat.value}</p>
              <p className="mt-1 text-sm text-smoke-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-smoke-50">
        <div className="container-page">
          <SectionHeader
            eyebrow="Tutorías"
            title="Acompañamiento académico claro, exigente y cercano."
            description="Refuerza teoría, prepara evaluaciones y desarrolla criterio jurídico con planes pensados para estudiantes que quieren avanzar con estructura."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="animate-fade-up">
            <p className="eyebrow">Método Addveritas</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-ink-950 sm:text-4xl">
              Derecho explicado con método, casos y conversación.
            </h2>
            <p className="mt-5 text-base leading-8 text-smoke-500">
              Integramos tutorías, debates y eventos para convertir la carga
              académica en una ruta más ordenada. Cada espacio prioriza
              fundamentos, práctica y seguridad para participar en clase.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: BookOpen, label: "Guías de estudio" },
                { icon: GraduationCap, label: "Acompañamiento" },
                { icon: CalendarDays, label: "Agenda jurídica" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-smoke-100 bg-smoke-50 p-5"
                >
                  <item.icon className="h-6 w-6 text-gold-500" aria-hidden />
                  <p className="mt-4 text-sm font-semibold text-ink-900">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-ink-950 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"
              alt="Biblioteca jurídica con mesas de estudio"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/72 to-transparent p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-gold-300">
                Café Jurídico
              </p>
              <p className="mt-3 max-w-md text-2xl font-semibold">
                Conversaciones para aprender a pensar, argumentar y sostener una postura.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-ink-950 text-white">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Agenda"
              title="Eventos jurídicos para ampliar perspectiva."
              description="Charlas, talleres y encuentros con temas actuales para estudiantes que quieren conectar la universidad con la práctica profesional."
              inverted
            />
            <Link
              href="/eventos"
              className="focus-ring inline-flex w-fit items-center gap-2 rounded-md border border-gold-400 px-5 py-3 text-sm font-semibold text-gold-300 transition hover:bg-gold-400 hover:text-ink-950"
            >
              Ver eventos
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {events.slice(0, 3).map((event) => (
              <EventCard key={event.title} event={event} dark />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
