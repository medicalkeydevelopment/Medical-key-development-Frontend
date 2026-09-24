import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Patient Reviews | Medical Key",
  description: "Read what patients across Patna are saying about Medical Key's doctors and services.",
};

export default function ReviewsPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Patient Reviews"
        description="Real feedback from patients who've used Medical Key for consultations, medicines, and more."
      />
      <div className="container py-10 md:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}
