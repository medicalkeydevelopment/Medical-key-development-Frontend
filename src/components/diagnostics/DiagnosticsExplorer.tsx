"use client";

import { useMemo, useState } from "react";
import { TestCard } from "./TestCard";
import { diagnosticCategories, diagnosticTests } from "@/data/diagnosticTests";
import { cn } from "@/lib/utils";

export function DiagnosticsExplorer() {
  const [category, setCategory] = useState<(typeof diagnosticCategories)[number]>("All");

  const filtered = useMemo(
    () => (category === "All" ? diagnosticTests : diagnosticTests.filter((t) => t.category === category)),
    [category]
  );

  return (
    <div>
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 mb-8">
        {diagnosticCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            className={cn(
              "flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors",
              category === cat
                ? "bg-brand text-white border-brand"
                : "bg-white text-ink-muted border-brand-100 hover:border-brand/40 hover:text-brand"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((test) => (
          <TestCard key={test.id} {...test} />
        ))}
      </div>
    </div>
  );
}
