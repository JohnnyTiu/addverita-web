import { ActivityExplorer } from "@/components/activities/ActivityExplorer";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actividades",
  description:
    "Explora las actividades de formación jurídica, habilidades profesionales, práctica y liderazgo que ofrece Addlegal/Addveritas.",
};

export default function ActividadesPage() {
  return (
    <>
      <section className="bg-ink-950 text-white">
        <div className="container-page py-16">
          <SectionHeader
            eyebrow="Actividades"
            title="Plataforma Juvenil de Formación Jurídica."
            description="Más que tutorías: espacios para debatir, argumentar, practicar y crecer como jurista. Selecciona una actividad y mira su dinámica, temas y beneficios."
            inverted
          />
        </div>
      </section>

      <section className="section-pad bg-smoke-50">
        <div className="container-page">
          <ActivityExplorer />
        </div>
      </section>
    </>
  );
}
