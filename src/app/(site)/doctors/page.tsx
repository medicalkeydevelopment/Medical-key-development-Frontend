import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { DoctorsExplorer } from "@/components/doctors/DoctorsExplorer";

export const metadata: Metadata = {
  title: "Find Doctors | Medical Key",
  description: "Search and book appointments with verified doctors across specialties.",
};

export default function DoctorsPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Find Doctors"
        description="Browse verified doctors by specialty and book an appointment in a few clicks."
      />
      <div className="container py-10 md:py-14">
        <DoctorsExplorer />
      </div>
    </div>
  );
}
