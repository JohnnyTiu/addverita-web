import { NextResponse } from "next/server";
import {
  createSupabaseServerClient,
  type EnrollmentPayload,
} from "@/lib/supabase/server";

const requiredFields: Array<keyof EnrollmentPayload> = [
  "fullName",
  "email",
  "phone",
  "university",
  "plan",
  "preferredModality",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizePayload(payload: EnrollmentPayload) {
  return {
    fullName: payload.fullName?.trim(),
    email: payload.email?.trim().toLowerCase(),
    phone: payload.phone?.trim(),
    university: payload.university?.trim(),
    plan: payload.plan?.trim(),
    preferredModality: payload.preferredModality?.trim(),
    message: payload.message?.trim() ?? "",
  };
}

export async function POST(request: Request) {
  try {
    const payload = sanitizePayload((await request.json()) as EnrollmentPayload);

    const missingField = requiredFields.find((field) => !payload[field]);

    if (missingField) {
      return NextResponse.json(
        { message: "Completa todos los campos obligatorios." },
        { status: 400 },
      );
    }

    if (!isValidEmail(payload.email)) {
      return NextResponse.json(
        { message: "Ingresa un correo electrónico válido." },
        { status: 400 },
      );
    }

    const supabase = createSupabaseServerClient();
    
    const { data: existingInscripciones } = await supabase
      .from("inscripciones")
      .select("id")
      .eq("email", payload.email)
      .limit(1);

    if (existingInscripciones && existingInscripciones.length > 0) {
      return NextResponse.json(
        { message: "Ya existe una inscripción registrada con este correo electrónico." },
        { status: 409 },
      );
    }

    const { error } = await supabase.from("inscripciones").insert({
      full_name: payload.fullName,
      email: payload.email,
      phone: payload.phone,
      university: payload.university,
      plan: payload.plan,
      preferred_modality: payload.preferredModality,
      message: payload.message,
    });

    if (error) {
      return NextResponse.json(
        { message: "No pudimos guardar tu inscripción. Intenta de nuevo." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Tu inscripción fue recibida. Te contactaremos pronto.",
    });
  } catch (error) {
    const isMissingConfig =
      error instanceof Error && error.message.includes("Supabase environment variables");

    return NextResponse.json(
      {
        message: isMissingConfig
          ? "Faltan variables de entorno de Supabase."
          : "Ocurrió un error inesperado.",
      },
      { status: 500 },
    );
  }
}
