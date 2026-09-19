import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { BookConsultationForm } from "@/components/booking/BookConsultationForm";

export const metadata: Metadata = {
  title: "Book Consultation | Medical Key",
  description: "Book a doctor consultation with Medical Key in just a few clicks.",
};

export default function BookConsultationPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Book Consultation"
        description="Tell us a bit about what you need and we'll match you with the right doctor."
      />
      <div className="container py-10 md:py-14 max-w-2xl">
        <div className="bg-white border border-brand-100 rounded-card p-6 sm:p-8 shadow-soft">
          <BookConsultationForm />
        </div>
      </div>
    </div>
  );
}
