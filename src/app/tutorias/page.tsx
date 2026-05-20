import { PlanCard } from "@/components/cards/PlanCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { plans } from "@/data/site";

export const metadata = {
  title: "Tutorías",
};

export default function TutoriasPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="container-page grid gap-8 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeader
            eyebrow="Tutorías"
            title="Planes para avanzar sin estudiar a ciegas."
            description="Elige la frecuencia que se adapta a tu carga académica y recibe una ruta de estudio clara para reforzar tus cursos de Derecho."
            inverted
          />
          <div className="rounded-lg border border-white/10 bg-white/10 p-6">
            <p className="text-sm leading-7 text-smoke-300">
              Trabajamos con teoría, casos, preguntas de examen y esquemas.
              Puedes preparar cursos como Introducción al Derecho, Constitucional,
              Penal, Civil, Mercantil, Procesal y materias afines.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-smoke-50">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>
    </>
  );
}
