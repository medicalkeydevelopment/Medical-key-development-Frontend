"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { DoctorCard } from "./DoctorCard";
import { doctors, specialties } from "@/data/doctors";
import { cn } from "@/lib/utils";

export function DoctorsExplorer() {
  const [specialty, setSpecialty] = useState<(typeof specialties)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return doctors.filter((doc) => {
      const matchesSpecialty = specialty === "All" || doc.specialty === specialty;
      const matchesQuery =
        query.trim() === "" || doc.name.toLowerCase().includes(query.trim().toLowerCase());
      return matchesSpecialty && matchesQuery;
    });
  }, [specialty, query]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <label className="flex-1 flex items-center gap-2.5 bg-white rounded-btn px-4 py-3 border border-brand-100">
          <Search className="w-4 h-4 text-ink-muted flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">Search doctors by name</span>
          <input
            type="text"
            placeholder="Search doctors by name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent outline-none text-sm w-full placeholder:text-ink-muted"
          />
        </label>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 mb-8">
        {specialties.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSpecialty(s)}
            className={cn(
              "flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold border transition-colors",
              specialty === s
                ? "bg-brand text-white border-brand"
                : "bg-white text-ink-muted border-brand-100 hover:border-brand/40 hover:text-brand"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((doc) => (
            <DoctorCard key={doc.id} {...doc} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white border border-brand-100 rounded-card">
          <p className="text-base font-semibold text-ink">No doctors found</p>
          <p className="text-sm text-ink-muted mt-1">Try a different specialty or search term.</p>
        </div>
      )}
    </div>
  );
}
