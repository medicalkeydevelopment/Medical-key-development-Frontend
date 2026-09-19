import { Clock, Home, Droplet } from "lucide-react";
import type { DiagnosticTest } from "@/data/diagnosticTests";
import { Button } from "@/components/ui/Button";

export function TestCard({
  name,
  category,
  price,
  originalPrice,
  turnaround,
  fasting,
  homeCollection,
}: DiagnosticTest) {
  return (
    <article className="bg-white rounded-card border border-brand-100 shadow-soft hover:shadow-panel hover:-translate-y-1 transition-all duration-200 p-5 flex flex-col gap-3">
      <span className="self-start text-[11px] font-bold text-brand bg-brand-50 px-2.5 py-1 rounded-full">
        {category}
      </span>
      <h3 className="text-base font-bold text-ink leading-snug">{name}</h3>

      <div className="flex flex-wrap items-center gap-3 text-xs text-ink-muted">
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
          {turnaround}
        </span>
        {fasting && (
          <span className="flex items-center gap-1">
            <Droplet className="w-3.5 h-3.5" aria-hidden="true" />
            Fasting required
          </span>
        )}
        {homeCollection && (
          <span className="flex items-center gap-1 text-emerald-600 font-medium">
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            Home collection
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-brand-50">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-extrabold text-ink">{price}</span>
          {originalPrice && (
            <span className="text-xs text-ink-muted line-through">{originalPrice}</span>
          )}
        </div>
        <Button size="sm">Book Now</Button>
      </div>
    </article>
  );
}
