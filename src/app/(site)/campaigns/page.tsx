import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { CampaignsExplorer } from "@/components/campaigns/CampaignsExplorer";
import { campaigns } from "@/data/campaigns";

export const metadata: Metadata = {
  title: "Campaigns & Events | Medical Key",
  description:
    "Explore Medical Key's health camps, awareness drives, and expert webinars happening near you.",
};

export default function CampaignsPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Campaigns & Events"
        description="Free health camps, awareness drives, and expert-led webinars from Medical Key — find one near you and register in a few clicks."
      />
      <div className="container py-10 md:py-14">
        <CampaignsExplorer campaigns={campaigns} />
      </div>
    </div>
  );
}
