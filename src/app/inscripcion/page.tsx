import { Suspense } from "react";
import { EnrollmentForm } from "@/components/forms/EnrollmentForm";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata = {
  title: "Inscripción",
};

export default function InscripcionPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="container-page py-16">
          <SectionHeader
            eyebrow="Inscripción"
            title="Cuéntanos qué necesitas reforzar y coordinamos tu espacio."
            description="Completa el formulario y el equipo de ADDVERITAS/ADDLEGAL te contactará para confirmar modalidad, horario y próximos pasos."
            inverted
          />
        </div>
      </section>

      <section className="section-pad bg-smoke-50">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-lg border border-smoke-100 bg-white p-6 shadow-sm">
            <p className="eyebrow">Datos útiles</p>
            <h2 className="mt-4 text-2xl font-bold text-ink-950">
              Ten a mano tu curso y disponibilidad.
            </h2>
            <p className="mt-4 text-sm leading-7 text-smoke-500">
              Mientras más claro sea el tema que quieres preparar, más precisa
              será la ruta de estudio que podamos proponerte.
            </p>
          </aside>
          <Suspense fallback={<div className="rounded-lg bg-white p-8">Cargando formulario...</div>}>
            <EnrollmentForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
