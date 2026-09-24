import { Star, MapPin } from "lucide-react";
import type { Doctor } from "@/data/doctors";
import { Button } from "@/components/ui/Button";

export function DoctorCard({
  name,
  specialty,
  qualification,
  experience,
  rating,
  reviews,
  location,
  fee,
  initials,
}: Doctor) {
  return (
    <article className="bg-white rounded-card border border-brand-100 shadow-soft hover:shadow-panel hover:-translate-y-1 transition-all duration-200 p-5 flex flex-col gap-3">
      <div className="flex items-start gap-3">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand font-bold text-lg flex-shrink-0">
          {initials}
        </span>
        <div className="min-w-0">
          <h3 className="text-base font-bold text-ink truncate">{name}</h3>
          <p className="text-sm text-brand font-medium">{specialty}</p>
          <p className="text-xs text-ink-muted mt-0.5">{qualification}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs text-ink-muted">
        <span className="flex items-center gap-1 font-semibold text-amber-600">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
          {rating.toFixed(1)}
          <span className="text-ink-muted font-normal">({reviews})</span>
        </span>
        <span>&middot;</span>
        <span>{experience} experience</span>
      </div>

      <p className="flex items-center gap-1.5 text-xs text-ink-muted">
        <MapPin className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
        {location}
      </p>

      <div className="flex items-center justify-between pt-2 border-t border-brand-50">
        <div>
          <p className="text-[11px] text-ink-muted">Consultation fee</p>
          <p className="text-sm font-bold text-ink">{fee}</p>
        </div>
        <Button size="sm">Book Appointment</Button>
      </div>
    </article>
  );
}
