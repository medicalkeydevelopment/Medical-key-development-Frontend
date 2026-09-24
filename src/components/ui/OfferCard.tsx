import type { Offer } from "@/data/offers";
import { Button } from "./Button";

export function OfferCard({
  headline,
  subtitle,
  code,
  buttonLabel,
  bg,
  icon: Icon,
  iconColor,
  validTill,
}: Offer) {
  return (
    <article
      className={`rounded-card p-5 flex flex-col gap-3 border border-black/5 shadow-soft hover:shadow-panel hover:-translate-y-1 transition-all duration-200 ${bg}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg font-extrabold text-ink leading-tight">{headline}</p>
          <p className="text-sm text-ink-muted mt-0.5">{subtitle}</p>
        </div>
        <span className={`flex items-center justify-center w-10 h-10 rounded-full bg-white ${iconColor}`}>
          <Icon className="w-5 h-5" aria-hidden="true" />
        </span>
      </div>
      <p className="text-xs font-semibold text-ink-muted">
        USE CODE:{" "}
        <span className="text-ink font-bold tracking-wide">{code}</span>
      </p>
      {validTill && <p className="text-[11px] text-ink-muted -mt-1.5">Valid till {validTill}</p>}
      <Button variant="outline" size="sm" className="self-start bg-white">
        {buttonLabel}
      </Button>
    </article>
  );
}
