import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { HospitalsExplorer } from "@/components/hospitals/HospitalsExplorer";

export const metadata: Metadata = {
  title: "Find Hospitals | Medical Key",
  description: "Browse partner hospitals with verified ratings, specialties, and emergency care availability.",
};

export default function HospitalsPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Find Hospitals"
        description="Explore our network of partner hospitals and choose the right one for your care."
      />
      <div className="container py-10 md:py-14">
        <HospitalsExplorer />
      </div>
    </div>
  );
}
