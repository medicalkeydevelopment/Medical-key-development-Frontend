import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { EquipmentExplorer } from "@/components/equipment/EquipmentExplorer";

export const metadata: Metadata = {
  title: "Medical Equipment | Medical Key",
  description: "Buy or rent medical equipment for home care, mobility, monitoring, and more.",
};

export default function EquipmentPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Medical Equipment"
        description="Buy or rent mobility aids, monitoring devices, and home-care equipment."
      />
      <div className="container py-10 md:py-14">
        <EquipmentExplorer />
      </div>
    </div>
  );
}
