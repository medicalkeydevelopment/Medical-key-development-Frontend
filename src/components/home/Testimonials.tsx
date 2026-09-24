"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const FEATURED_COUNT = 3;

export default function Testimonials() {
  const featured = testimonials.slice(0, FEATURED_COUNT);
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-surface-light py-14">
      <div className="container">
        <SectionHeader title="What Our Patients Say" linkLabel="View All Reviews" linkHref="/reviews" />

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {featured.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <TestimonialCard {...featured[index]} />
          <div className="flex items-center justify-center gap-2 mt-5">
            {featured.map((t, i) => (
              <button
                key={t.id}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-medred" : "w-2 bg-brand-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
