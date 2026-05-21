"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { activities, categories, type Activity } from "@/data/activities";

const categoryDescriptions: Record<string, string> = {
  "Formación jurídica":
    "Aprende y refuerza conocimientos del Derecho a través de análisis, conversación y cine.",
  "Habilidades profesionales":
    "Mejora capacidades útiles para la carrera: oratoria, escritura, reacción y criterio técnico.",
  "Práctica jurídica":
    "Aplica el Derecho en escenarios simulados de audiencias, mediación, negociación y casos.",
  "Liderazgo y participación ciudadana":
    "Debate, propone y comunica ideas jurídicas con responsabilidad pública.",
};

type ActivityButtonProps = {
  activity: Activity;
  isSelected: boolean;
  onSelect: () => void;
};

function ActivityButton({ activity, isSelected, onSelect }: ActivityButtonProps) {
  const Icon = activity.benefits[0]?.icon;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`focus-ring group w-full rounded-lg border p-4 text-left transition duration-300 ${
        isSelected
          ? "border-gold-400 bg-ink-950 text-white shadow-soft"
          : "border-smoke-100 bg-white text-ink-950 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-sm"
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-md ${
            isSelected ? "bg-gold-400 text-ink-950" : "bg-smoke-50 text-gold-600"
          }`}
        >
          {Icon ? <Icon className="h-5 w-5" aria-hidden /> : null}
        </span>
        <span>
          <span className="block text-sm font-bold">{activity.title}</span>
          <span
            className={`mt-1 block text-xs leading-5 ${
              isSelected ? "text-smoke-300" : "text-smoke-500"
            }`}
          >
            {activity.shortDescription}
          </span>
        </span>
      </div>
    </button>
  );
}

export function ActivityExplorer() {
  const [selectedSlug, setSelectedSlug] = useState(activities[0].slug);
  const selectedActivity = useMemo(
    () => activities.find((activity) => activity.slug === selectedSlug) ?? activities[0],
    [selectedSlug],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div className="grid gap-8">
        {categories.map((category) => {
          const categoryActivities = activities.filter(
            (activity) => activity.category === category,
          );

          return (
            <section key={category} aria-labelledby={`category-${category}`}>
              <div className="mb-4">
                <p className="eyebrow" id={`category-${category}`}>
                  {category}
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-smoke-500">
                  {categoryDescriptions[category]}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {categoryActivities.map((activity) => (
                  <ActivityButton
                    key={activity.slug}
                    activity={activity}
                    isSelected={selectedActivity.slug === activity.slug}
                    onSelect={() => setSelectedSlug(activity.slug)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <aside className="lg:sticky lg:top-24">
        <article className="overflow-hidden rounded-lg border border-smoke-100 bg-white shadow-soft">
          <div className="relative min-h-72 bg-ink-950">
            <Image
              src={selectedActivity.image}
              alt={selectedActivity.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                {selectedActivity.category}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight">
                {selectedActivity.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-smoke-100">
                {selectedActivity.longDescription}
              </p>
            </div>
          </div>

          <div className="grid gap-6 p-5 sm:p-6">
            <div>
              <p className="eyebrow">Formato</p>
              <h3 className="mt-3 text-2xl font-bold text-ink-950">
                {selectedActivity.formatTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-smoke-500">
                {selectedActivity.formatDescription}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {selectedActivity.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-lg border border-smoke-100 bg-smoke-50 p-4"
                >
                  {benefit.icon ? (
                    <benefit.icon className="h-6 w-6 text-gold-500" aria-hidden />
                  ) : (
                    <CheckCircle2 className="h-6 w-6 text-gold-500" aria-hidden />
                  )}
                  <h4 className="mt-3 text-sm font-bold text-ink-950">
                    {benefit.title}
                  </h4>
                  <p className="mt-2 text-xs leading-5 text-smoke-500">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-lg border border-gold-400 bg-ink-950 p-5 text-white">
              <h3 className="text-lg font-bold">{selectedActivity.examplesTitle}</h3>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-smoke-300">
                {selectedActivity.examples.map((example) => (
                  <li key={example} className="flex gap-2">
                    <CheckCircle2
                      className="mt-1 h-4 w-4 flex-none text-gold-300"
                      aria-hidden
                    />
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={`/inscripcion?actividad=${encodeURIComponent(selectedActivity.title)}`}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-gold-400 px-5 py-3 text-sm font-bold text-ink-950 transition hover:bg-gold-300"
            >
              Inscribirme a esta actividad
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </article>
      </aside>
    </div>
  );
}
