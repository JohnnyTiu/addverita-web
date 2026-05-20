"use client";

import { Menu, Scale, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { navigation } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/95 text-white backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold-400 text-ink-950">
            <Scale className="h-5 w-5" aria-hidden />
          </span>
          <span>
            <span className="block text-sm font-bold leading-4">Addlegal</span>
            <span className="block text-xs text-gold-300">Addveritas</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "focus-ring rounded-md px-3 py-2 text-sm font-medium transition",
                pathname === item.href
                  ? "bg-white text-ink-950"
                  : "text-smoke-100 hover:bg-white/10 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/inscripcion"
          className="focus-ring hidden rounded-md bg-gold-400 px-4 py-2 text-sm font-bold text-ink-950 transition hover:bg-gold-300 lg:inline-flex"
        >
          Inscribirme
        </Link>

        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 lg:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-ink-950 lg:hidden">
          <div className="container-page grid gap-1 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "focus-ring rounded-md px-3 py-3 text-sm font-medium",
                  pathname === item.href
                    ? "bg-white text-ink-950"
                    : "text-smoke-100 hover:bg-white/10",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
