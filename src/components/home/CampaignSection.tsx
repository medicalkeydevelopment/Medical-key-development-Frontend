import { SectionHeader } from "@/components/ui/SectionHeader";
import { CampaignCard } from "@/components/ui/CampaignCard";
import { campaigns } from "@/data/campaigns";

const FEATURED_COUNT = 3;

export default function CampaignSection() {
  const featured = campaigns.slice(0, FEATURED_COUNT);

  return (
    <section className="bg-surface-light py-14">
      <div className="container">
        <SectionHeader title="Campaigns & Events" linkLabel="View All" linkHref="/campaigns" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      </div>
    </section>
  );
}
