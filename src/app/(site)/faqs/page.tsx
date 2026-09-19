import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { FaqAccordion } from "@/components/faqs/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQs | Medical Key",
  description: "Answers to common questions about appointments, payments, medicines, and your account.",
};

export default function FaqsPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Frequently Asked Questions"
        description="Quick answers to the questions we hear most often."
      />
      <div className="container py-10 md:py-14 max-w-3xl">
        <FaqAccordion />
      </div>
    </div>
  );
}
