"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqCategories, faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [category, setCategory] = useState<(typeof faqCategories)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  const filtered = useMemo(
    () => (category === "All" ? faqs : faqs.filter((f) => f.category === category)),
    [category]
  );

  return (
    <div>
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 mb-8">
        {faqCategories.map((cat) => (
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

      <div className="flex flex-col gap-3">
        {filtered.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white border border-brand-100 rounded-card overflow-hidden shadow-soft"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${faq.id}`}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-ink">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-brand flex-shrink-0 transition-transform",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div id={`faq-panel-${faq.id}`} className="px-5 pb-4 text-sm text-ink-muted leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
