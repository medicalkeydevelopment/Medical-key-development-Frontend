import { Calendar } from "lucide-react";
import type { Campaign } from "@/data/campaigns";
import { Button } from "./Button";

const accentBg: Record<Campaign["accent"], string> = {
  red: "bg-gradient-to-br from-rose-50 to-orange-50",
  blue: "bg-gradient-to-br from-sky-50 to-blue-50",
  purple: "bg-gradient-to-br from-violet-50 to-indigo-50",
};

const accentButton: Record<Campaign["accent"], "primary" | "secondary" | "outline"> = {
  red: "primary",
  blue: "outline",
  purple: "secondary",
};

export function CampaignCard({
  badge,
  badgeColor,
  title,
  date,
  location,
  description,
  buttonLabel,
  accent,
}: Campaign) {
  return (
    <article
      className={`rounded-card overflow-hidden border border-black/5 shadow-soft hover:shadow-panel hover:-translate-y-1 transition-all duration-200 ${accentBg[accent]}`}
    >
      <div className="p-6 flex flex-col gap-3 h-full">
        <span
          className={`self-start text-[11px] font-bold tracking-wide px-3 py-1 rounded-full ${badgeColor}`}
        >
          {badge}
        </span>
        <h3 className="text-lg font-bold text-brand leading-snug">{title}</h3>
        <p className="flex items-center gap-1.5 text-xs text-ink-muted font-medium">
          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
          {date}
          {location && <span>&middot; {location}</span>}
        </p>
        <p className="text-sm text-ink-muted flex-1">{description}</p>
        <Button variant={accentButton[accent]} size="sm" className="self-start mt-2">
          {buttonLabel}
        </Button>
      </div>
    </article>
  );
}
