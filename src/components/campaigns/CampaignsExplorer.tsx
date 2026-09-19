"use client";

import { useMemo, useState } from "react";
import { Calendar } from "lucide-react";
import { CampaignCard } from "@/components/ui/CampaignCard";
import { campaignCategories, type Campaign, type CampaignCategory } from "@/data/campaigns";
import { cn } from "@/lib/utils";

type FilterValue = CampaignCategory | "all";

interface CampaignsExplorerProps {
  campaigns: Campaign[];
}

export function CampaignsExplorer({ campaigns }: CampaignsExplorerProps) {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(
    () => (filter === "all" ? campaigns : campaigns.filter((c) => c.category === filter)),
    [campaigns, filter]
  );

  const counts = useMemo(() => {
    const map = new Map<FilterValue, number>();
    map.set("all", campaigns.length);
    for (const cat of campaignCategories) {
      map.set(cat.id, campaigns.filter((c) => c.category === cat.id).length);
    }
    return map;
  }, [campaigns]);

  return (
    <div>
      {/* Filter tabs */}
      <div
        role="tablist"
        aria-label="Filter campaigns by category"
        className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 mb-8"
      >
        <FilterTab
          label="All"
          count={counts.get("all") ?? 0}
          active={filter === "all"}
          onClick={() => setFilter("all")}
        />
        {campaignCategories.map((cat) => (
          <FilterTab
            key={cat.id}
            label={cat.label}
            count={counts.get(cat.id) ?? 0}
            active={filter === cat.id}
            onClick={() => setFilter(cat.id)}
          />
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((campaign) => (
            <CampaignCard key={campaign.id} {...campaign} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-20 bg-white border border-brand-100 rounded-card">
          <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand mb-4">
            <Calendar className="w-6 h-6" aria-hidden="true" />
          </span>
          <p className="text-base font-semibold text-ink">No campaigns in this category yet</p>
          <p className="text-sm text-ink-muted mt-1">Check back soon or explore another category.</p>
        </div>
      )}
    </div>
  );
}

function FilterTab({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors",
        active
          ? "bg-brand text-white border-brand"
          : "bg-white text-ink-muted border-brand-100 hover:border-brand/40 hover:text-brand"
      )}
    >
      {label}
      <span
        className={cn(
          "text-xs font-bold rounded-full px-1.5 py-0.5",
          active ? "bg-white/20 text-white" : "bg-brand-50 text-brand"
        )}
      >
        {count}
      </span>
    </button>
  );
}
