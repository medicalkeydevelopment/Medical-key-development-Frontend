import { Star, MapPin, BedDouble, ShieldAlert } from "lucide-react";
import type { Hospital } from "@/data/hospitals";
import { Button } from "@/components/ui/Button";

export function HospitalCard({
  name,
  type,
  location,
  beds,
  rating,
  reviews,
  specialties,
  emergency,
}: Hospital) {
  return (
    <article className="bg-white rounded-card border border-brand-100 shadow-soft hover:shadow-panel hover:-translate-y-1 transition-all duration-200 p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="text-base font-bold text-ink leading-snug">{name}</h3>
          <p className="text-sm text-brand font-medium mt-0.5">{type}</p>
        </div>
        {emergency && (
          <span className="flex-shrink-0 flex items-center gap-1 text-[10px] font-bold text-medred bg-red-50 px-2 py-1 rounded-full">
            <ShieldAlert className="w-3 h-3" aria-hidden="true" />
            24x7 Emergency
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 text-xs text-ink-muted">
        <span className="flex items-center gap-1 font-semibold text-amber-600">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
          {rating.toFixed(1)}
          <span className="text-ink-muted font-normal">({reviews})</span>
        </span>
        <span>&middot;</span>
        <span className="flex items-center gap-1">
          <BedDouble className="w-3.5 h-3.5" aria-hidden="true" />
          {beds} beds
        </span>
      </div>

      <p className="flex items-center gap-1.5 text-xs text-ink-muted">
        <MapPin className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
        {location}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {specialties.map((s) => (
          <span key={s} className="text-[11px] font-medium text-brand bg-brand-50 px-2.5 py-1 rounded-full">
            {s}
          </span>
        ))}
      </div>

      <Button size="sm" variant="outline" className="self-start mt-1">
        View Details
      </Button>
    </article>
  );
}
