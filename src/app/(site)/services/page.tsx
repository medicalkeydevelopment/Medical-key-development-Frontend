import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "All Services | Medical Key",
  description: "Explore every service Medical Key offers, from doctor consultations to home healthcare.",
};

export default function ServicesPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="All Services"
        description="Everything you need for your healthcare, all under one trusted platform."
      />
      <div className="container py-10 md:py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
