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
              <p className="font-bold">ADDVERITAS/ADDLEGAL</p>
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
            <a
              href="mailto:addverita@gmail.com"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 text-gold-300" aria-hidden />
              addverita@gmail.com
            </a>
            <a
              href="https://wa.me/50242026792"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 text-gold-300" aria-hidden />
              +502 4202 6792
            </a>
            <a
              href="https://maps.app.goo.gl/eWChq4oUaCf2wuhf8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <MapPin className="h-4 w-4 text-gold-300" aria-hidden />
              7ma Calle, 4A-06 Zona 9 Los Cerezos 1, Quetzaltenango
            </a>
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
          © {new Date().getFullYear()} Insituto de Estudios Jurídicos ADDVERITAS. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
