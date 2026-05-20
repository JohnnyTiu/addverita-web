import { Mail, MapPin, Phone, Scale } from "lucide-react";
import Link from "next/link";
import { navigation, socialLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white">
      <div className="container-page grid gap-10 border-t border-white/10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-400 text-ink-950">
              <Scale className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="font-bold">Addlegal/Addveritas</p>
              <p className="text-sm text-gold-300">Formación jurídica para estudiantes</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-smoke-300">
            Tutorías académicas, Café Jurídico y eventos para estudiar Derecho
            con método, criterio y comunidad.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gold-300">Navegación</p>
          <div className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md text-sm text-smoke-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-gold-300">Contacto</p>
          <div className="mt-4 grid gap-3 text-sm text-smoke-300">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold-300" aria-hidden />
              hola@addveritas.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold-300" aria-hidden />
              +502 0000 0000
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold-300" aria-hidden />
              Guatemala
            </p>
          </div>
          <div className="mt-5 flex gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="focus-ring rounded-md border border-white/15 px-3 py-2 text-xs text-smoke-100 transition hover:border-gold-300 hover:text-gold-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="container-page text-xs text-smoke-300">
          © {new Date().getFullYear()} Addlegal/Addveritas. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
