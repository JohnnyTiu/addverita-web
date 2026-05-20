"use client";

import { Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { plans } from "@/data/site";

const modalities = ["Online", "Presencial", "Híbrido"];
const submitTimeoutMs = 15000;

type FormState = {
  status: "idle" | "loading" | "success" | "error";
  message: string;
};

const fieldClass =
  "focus-ring w-full rounded-md border border-smoke-100 bg-white px-4 py-3 text-sm text-ink-950 shadow-sm transition placeholder:text-smoke-500 focus:border-gold-400";

export function EnrollmentForm() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get("plan");
  const defaultPlan = useMemo(() => {
    return plans.some((plan) => plan.name === selectedPlan)
      ? selectedPlan ?? plans[0].name
      : plans[0].name;
  }, [selectedPlan]);
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), submitTimeoutMs);

    setState({
      status: "loading",
      message: "Estamos enviando tu inscripción. Esto puede tardar unos segundos.",
    });

    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      university: String(formData.get("university") ?? ""),
      plan: String(formData.get("plan") ?? ""),
      preferredModality: String(formData.get("preferredModality") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/inscripciones", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      const result = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        setState({
          status: "error",
          message:
            result?.message ??
            "No pudimos confirmar tu inscripción. Revisa tu conexión e intenta de nuevo.",
        });
        return;
      }

      form.reset();
      setState({
        status: "success",
        message:
          result?.message ??
          "Tu inscripción fue recibida. Te contactaremos pronto.",
      });
    } catch (error) {
      const isTimeout = error instanceof DOMException && error.name === "AbortError";

      setState({
        status: "error",
        message: isTimeout
          ? "La inscripción está tardando más de lo normal. Intenta de nuevo o escríbenos por WhatsApp."
          : "No pudimos enviar tu inscripción. Revisa tu conexión e intenta nuevamente.",
      });
    } finally {
      window.clearTimeout(timeoutId);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-smoke-100 bg-white p-5 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink-900">
          Nombre completo
          <input
            className={fieldClass}
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Tu nombre"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink-900">
          Correo
          <input
            className={fieldClass}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="correo@ejemplo.com"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink-900">
          WhatsApp
          <input
            className={fieldClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+502 0000 0000"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink-900">
          Universidad
          <input
            className={fieldClass}
            name="university"
            type="text"
            placeholder="Nombre de tu universidad"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink-900">
          Plan
          <select className={fieldClass} name="plan" defaultValue={defaultPlan} required>
            {plans.map((plan) => (
              <option key={plan.name} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink-900">
          Modalidad
          <select className={fieldClass} name="preferredModality" defaultValue="Online" required>
            {modalities.map((modality) => (
              <option key={modality} value={modality}>
                {modality}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink-900 sm:col-span-2">
          Mensaje
          <textarea
            className={`${fieldClass} min-h-32 resize-y`}
            name="message"
            placeholder="Cuéntanos qué curso o tema quieres reforzar"
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-smoke-500">
          Al enviar aceptas que te contactemos para coordinar tu inscripción.
        </p>
        <button
          type="submit"
          disabled={state.status === "loading"}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-ink-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.status === "loading" ? "Enviando..." : "Enviar inscripción"}
          <Send className="h-4 w-4" aria-hidden />
        </button>
      </div>

      {state.message ? (
        <p
          className={`mt-5 rounded-md px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-emerald-50 text-emerald-700"
              : state.status === "error"
                ? "bg-red-50 text-red-700"
                : "bg-smoke-50 text-smoke-500"
          }`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
