import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { clsx } from "clsx";
import type { Plan } from "@/data/site";

type PlanCardProps = {
  plan: Plan;
};

export function PlanCard({ plan }: PlanCardProps) {
  return (
    <article
      className={clsx(
        "flex h-full flex-col rounded-lg border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft",
        plan.highlighted
          ? "border-gold-400 bg-ink-950 text-white"
          : "border-smoke-100 bg-white text-ink-950",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={clsx("text-sm font-semibold", plan.highlighted ? "text-gold-300" : "text-gold-600")}>
            {plan.badge}
          </p>
          <h3 className="mt-3 text-2xl font-bold">{plan.name}</h3>
        </div>
        <p className="font-serif text-3xl text-gold-400">{plan.price}</p>
      </div>
      <p className={clsx("mt-4 text-sm leading-7", plan.highlighted ? "text-smoke-300" : "text-smoke-500")}>
        {plan.description}
      </p>
      <ul className="mt-6 grid gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-gold-400" aria-hidden />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={`/inscripcion?plan=${encodeURIComponent(plan.name)}`}
        className={clsx(
          "focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-bold transition",
          plan.highlighted
            ? "bg-gold-400 text-ink-950 hover:bg-gold-300"
            : "bg-ink-950 text-white hover:bg-ink-800",
        )}
      >
        Elegir plan
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </article>
  );
}
