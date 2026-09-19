import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Pill, CreditCard, User, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "Help Center | Medical Key",
  description: "Find help with appointments, payments, medicine orders, and your Medical Key account.",
};

const topics = [
  {
    icon: CalendarCheck,
    title: "Appointments",
    description: "Booking, rescheduling, and canceling doctor appointments.",
  },
  {
    icon: CreditCard,
    title: "Payments & Refunds",
    description: "Payment methods, billing issues, and refund timelines.",
  },
  {
    icon: Pill,
    title: "Medicine Orders",
    description: "Prescription uploads, delivery tracking, and order issues.",
  },
  {
    icon: User,
    title: "Account & Profile",
    description: "Managing your account, role, and personal information.",
  },
];

export default function SupportPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Help Center"
        description="Browse common topics below, or check our FAQs and contact page for more help."
      />

      <div className="container py-10 md:py-14">
        <div className="grid sm:grid-cols-2 gap-5">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="bg-white border border-brand-100 rounded-card p-6 flex items-start gap-4 shadow-soft"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 text-brand flex-shrink-0">
                <topic.icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-ink">{topic.title}</h3>
                <p className="text-sm text-ink-muted mt-1">{topic.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 bg-white border border-brand-100 rounded-card p-6">
          <p className="text-sm text-ink">
            Still need help? Check our <strong className="font-semibold">FAQs</strong> or reach
            out to our support team directly.
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-medred transition-colors"
            >
              View FAQs
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-medred transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
