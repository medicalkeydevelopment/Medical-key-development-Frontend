import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ name, location, quote, rating, initials }: Testimonial) {
  return (
    <article className="bg-white rounded-card border border-brand-100 shadow-soft p-6 flex flex-col gap-4 h-full">
      <Quote className="w-7 h-7 text-brand-100 fill-brand-50" aria-hidden="true" />
      <p className="text-sm text-ink-muted leading-relaxed flex-1">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-2 border-t border-brand-50">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-50 text-brand font-bold text-sm">
          {initials}
        </span>
        <div className="flex-1">
          <p className="text-sm font-bold text-ink">{name}</p>
          <p className="text-xs text-ink-muted">{location}</p>
        </div>
        <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < rating ? "fill-amber-400 text-amber-400" : "text-brand-100"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </article>
  );
}
