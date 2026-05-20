import { clsx } from "clsx";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  inverted = false,
}: SectionHeaderProps) {
  return (
    <div className="max-w-3xl animate-fade-up">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={clsx(
          "mt-4 font-serif text-3xl leading-tight sm:text-4xl",
          inverted ? "text-white" : "text-ink-950",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={clsx(
            "mt-4 max-w-2xl text-base leading-8",
            inverted ? "text-smoke-300" : "text-smoke-500",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
