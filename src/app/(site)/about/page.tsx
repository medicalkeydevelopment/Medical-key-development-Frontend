import type { Metadata } from "next";
import { ShieldCheck, HeartPulse, Users, Award } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = {
  title: "About Us | Medical Key",
  description: "Learn about Medical Key's mission to make complete healthcare accessible to everyone.",
};

const stats = [
  { icon: Users, value: "25,000+", label: "Patients Served" },
  { icon: Award, value: "500+", label: "Expert Doctors" },
  { icon: ShieldCheck, value: "200+", label: "Partner Hospitals" },
  { icon: HeartPulse, value: "8+", label: "Years of Trust" },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <PageHeader
        title="About Medical Key"
        description="A complete healthcare solution built around one simple idea: every service you need, in one trusted platform."
      />

      <div className="container py-10 md:py-14 max-w-3xl">
        <h2 className="text-xl font-bold text-brand mb-3">Our Story</h2>
        <p className="text-sm text-ink-muted leading-relaxed mb-6">
          Medical Key started in Patna with a simple goal: make it easier for people to find
          the right doctor, book a hospital bed, order medicines, or schedule a lab test —
          without juggling five different apps and phone numbers. Today, we connect patients
          with verified doctors, partner hospitals, diagnostic centers, and pharmacies across
          the city, all through one platform.
        </p>

        <h2 className="text-xl font-bold text-brand mb-3">Our Mission</h2>
        <p className="text-sm text-ink-muted leading-relaxed mb-10">
          We believe healthcare should be simple, transparent, and affordable. Every doctor on
          our platform is verified, every price is upfront, and support is available around the
          clock — because healthcare decisions shouldn't come with extra stress.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface-light border border-brand-100 rounded-card p-5 text-center"
            >
              <span className="mx-auto flex items-center justify-center w-11 h-11 rounded-full bg-white text-brand mb-3">
                <stat.icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <p className="text-lg font-extrabold text-ink">{stat.value}</p>
              <p className="text-xs text-ink-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
