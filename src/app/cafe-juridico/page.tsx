import { Coffee, MessageSquareQuote, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";
import { cafeTopics } from "@/data/site";

export const metadata = {
  title: "Café Jurídico",
};

export default function CafeJuridicoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <Image
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1500&q=80"
          alt="Grupo de estudiantes conversando en una mesa"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-ink-950/70" />
        <div className="container-page relative grid min-h-[520px] items-center py-16">
          <SectionHeader
            eyebrow="Café Jurídico"
            title="Conversaciones para pensar el Derecho fuera del aula."
            description="Un espacio relajado, crítico y bien guiado para discutir casos, sentencias y temas actuales con estudiantes que quieren afinar su criterio."
            inverted
          />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Formato</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-ink-950 sm:text-4xl">
              Debate guiado, preguntas buenas y conclusiones útiles.
            </h2>
            <p className="mt-5 text-base leading-8 text-smoke-500">
              Cada sesión parte de un tema concreto y avanza hacia discusión,
              contraste de posturas y herramientas para argumentar mejor en clase,
              exámenes orales y trabajos escritos.
            </p>
            <Link
              href="/inscripcion"
              className="focus-ring mt-8 inline-flex rounded-md bg-ink-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-ink-800"
            >
              Reservar cupo
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Coffee, title: "Ambiente cercano", text: "Conversación seria sin perder naturalidad." },
              { icon: Users, title: "Comunidad", text: "Conecta con estudiantes de distintos ciclos." },
              { icon: MessageSquareQuote, title: "Criterio", text: "Aprende a sostener una postura con mejores razones." },
            ].map((item) => (
              <article key={item.title} className="rounded-lg border border-smoke-100 bg-smoke-50 p-6">
                <item.icon className="h-7 w-7 text-gold-500" aria-hidden />
                <h3 className="mt-4 text-lg font-bold text-ink-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-smoke-500">{item.text}</p>
              </article>
            ))}
            <article className="rounded-lg border border-gold-400 bg-ink-950 p-6 text-white">
              <h3 className="text-lg font-bold">Temas frecuentes</h3>
              <ul className="mt-4 grid gap-2 text-sm text-smoke-300">
                {cafeTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
