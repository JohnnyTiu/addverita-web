import { ArrowRight, CalendarCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <Image
        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80"
        alt="Libros jurídicos y mazo de juez sobre una mesa de estudio"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/88 to-ink-950/32" />
      <div className="container-page relative grid min-h-[calc(100svh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow">Addlegal/Addveritas</p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Tutorías jurídicas para estudiar con criterio y seguridad.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-smoke-100 sm:text-lg">
            Formación académica, Café Jurídico y eventos diseñados para
            estudiantes de Derecho que buscan orden, práctica y comunidad.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/inscripcion"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3 text-sm font-bold text-ink-950 transition hover:-translate-y-0.5 hover:bg-gold-300"
            >
              Inscribirme
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/tutorias"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-gold-300 hover:text-gold-300"
            >
              Ver planes
              <CalendarCheck className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>

        <div className="animate-fade-up rounded-lg border border-white/15 bg-white/10 p-5 shadow-soft backdrop-blur md:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm text-smoke-300">Plataforma juvenil</p>
              <p className="mt-1 text-xl font-semibold">Actividades jurídicas</p>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gold-400 text-ink-950">
              <Sparkles className="h-5 w-5" aria-hidden />
            </span>
          </div>
          <div className="grid gap-4 py-5">
            {[
              ["Áreas", "Formación, práctica y liderazgo"],
              ["Modalidad", "Online y presencial"],
              ["Formato", "Talleres, retos y debates"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4">
                <span className="text-sm text-smoke-300">{label}</span>
                <span className="text-right text-sm font-semibold text-white">{value}</span>
              </div>
            ))}
          </div>
          <Link
            href="/actividades"
            className="focus-ring inline-flex w-full items-center justify-center rounded-md border border-gold-400 px-4 py-3 text-sm font-semibold text-gold-300 transition hover:bg-gold-400 hover:text-ink-950"
          >
            Ver actividades
          </Link>
        </div>
      </div>
    </section>
  );
}
