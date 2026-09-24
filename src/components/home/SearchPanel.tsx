"use client";

import { useState } from "react";
import { Search, MapPin, Stethoscope, Hospital, FlaskConical, Pill, Ambulance } from "lucide-react";
import { Button } from "@/components/ui/Button";

const tabs = [
  { key: "doctor", label: "Find Doctor", icon: Stethoscope, placeholder: "Search doctor, specialty, hospital..." },
  { key: "hospital", label: "Find Hospital", icon: Hospital, placeholder: "Search hospital by name or specialty..." },
  { key: "diagnostics", label: "Diagnostics", icon: FlaskConical, placeholder: "Search lab test or diagnostic center..." },
  { key: "medicines", label: "Medicines", icon: Pill, placeholder: "Search medicines or health products..." },
  { key: "ambulance", label: "Ambulance", icon: Ambulance, placeholder: "Search ambulance service near you..." },
];

const popularSearches = ["Cardiologist", "Gynecologist", "Neurologist", "Pediatrician", "Orthopedic"];

export default function SearchPanel() {
  const [active, setActive] = useState(tabs[0].key);
  const activeTab = tabs.find((t) => t.key === active) ?? tabs[0];

  return (
    <div className="bg-white rounded-panel shadow-panel border border-black/5 p-3 sm:p-5">
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Search category"
        className="flex items-center gap-1 overflow-x-auto no-scrollbar border-b border-brand-50 mb-4"
      >
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab.key)}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                isActive
                  ? "text-medred border-medred"
                  : "text-ink-muted border-transparent hover:text-brand"
              }`}
            >
              <tab.icon className={`w-4 h-4 ${isActive ? "text-medred" : "text-ink-muted"}`} aria-hidden="true" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Inputs */}
      <form className="flex flex-col md:flex-row items-stretch gap-3" onSubmit={(e) => e.preventDefault()}>
        <label className="flex-1 flex items-center gap-2.5 bg-surface-light rounded-btn px-4 py-3 border border-brand-100">
          <Search className="w-4 h-4 text-ink-muted flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">{activeTab.placeholder}</span>
          <input
            type="text"
            placeholder={activeTab.placeholder}
            className="bg-transparent outline-none text-sm w-full placeholder:text-ink-muted"
          />
        </label>
        <label className="md:w-56 flex items-center gap-2.5 bg-surface-light rounded-btn px-4 py-3 border border-brand-100">
          <MapPin className="w-4 h-4 text-medred flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">Location</span>
          <input
            type="text"
            defaultValue="Patna, Bihar"
            className="bg-transparent outline-none text-sm w-full placeholder:text-ink-muted"
          />
        </label>
        <Button type="submit" size="lg" className="md:w-auto w-full">
          Search Now
        </Button>
      </form>

      {/* Popular searches */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <span className="text-xs font-semibold text-ink-muted">Popular Searches:</span>
        {popularSearches.map((term) => (
          <button
            key={term}
            type="button"
            className="text-xs font-medium text-brand bg-brand-50 hover:bg-brand-100 px-3 py-1.5 rounded-full transition-colors"
          >
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
