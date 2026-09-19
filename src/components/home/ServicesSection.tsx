import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="container py-14">
      <SectionHeader title="Explore Our Services" linkLabel="View All Services" linkHref="/services" />
      <div className="flex lg:grid lg:grid-cols-9 gap-4 overflow-x-auto no-scrollbar pb-2">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
