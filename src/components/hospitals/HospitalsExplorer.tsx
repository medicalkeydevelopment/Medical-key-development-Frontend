"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { HospitalCard } from "./HospitalCard";
import { hospitals } from "@/data/hospitals";
import { cn } from "@/lib/utils";

type Filter = "all" | "emergency";

export function HospitalsExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return hospitals.filter((h) => {
      const matchesFilter = filter === "all" || h.emergency;
      const matchesQuery =
        query.trim() === "" || h.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <label className="flex-1 flex items-center gap-2.5 bg-white rounded-btn px-4 py-3 border border-brand-100">
          <Search className="w-4 h-4 text-ink-muted flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">Search hospitals by name</span>
          <input
            type="text"
            placeholder="Search hospitals by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none text-sm w-full placeholder:text-ink-muted"
          />
        </label>
      </div>

      <div className="flex items-center gap-2 mb-8">
        {(["all", "emergency"] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors",
              filter === f
                ? "bg-brand text-white border-brand"
                : "bg-white text-ink-muted border-brand-100 hover:border-brand/40 hover:text-brand"
            )}
          >
            {f === "all" ? "All Hospitals" : "24x7 Emergency"}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((h) => (
            <HospitalCard key={h.id} {...h} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white border border-brand-100 rounded-card">
          <p className="text-base font-semibold text-ink">No hospitals found</p>
          <p className="text-sm text-ink-muted mt-1">Try a different search term.</p>
        </div>
      )}
    </div>
  );
}
