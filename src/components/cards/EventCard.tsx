import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";
import type { Event } from "@/data/site";

type EventCardProps = {
  event: Event;
  dark?: boolean;
};

export function EventCard({ event, dark = false }: EventCardProps) {
  return (
    <article
      className={clsx(
        "overflow-hidden rounded-lg border transition duration-300 hover:-translate-y-1",
        dark
          ? "border-white/10 bg-white/10 text-white hover:border-gold-400/70"
          : "border-smoke-100 bg-white text-ink-950 shadow-sm hover:shadow-soft",
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover opacity-90 transition duration-500 hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-md bg-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-ink-950">
          {event.type}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p className={clsx("mt-3 text-sm leading-7", dark ? "text-smoke-300" : "text-smoke-500")}>
          {event.description}
        </p>
        <div className={clsx("mt-5 grid gap-2 text-sm", dark ? "text-smoke-300" : "text-smoke-500")}>
          <p className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-gold-400" aria-hidden />
            {event.date}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold-400" aria-hidden />
            {event.location}
          </p>
        </div>
      </div>
    </article>
  );
}
