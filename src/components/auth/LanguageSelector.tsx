"use client";

import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

const languages = ["English", "हिंदी", "বাংলা"];

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(languages[0]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 bg-white border border-[#DCE4F2] rounded-[9px] px-3.5 py-2 text-sm font-medium text-[#0F1B3D] hover:border-brand/40 transition-colors"
      >
        <Globe className="w-4 h-4 text-[#64708A]" aria-hidden="true" />
        {selected}
        <ChevronDown className={`w-3.5 h-3.5 text-[#64708A] transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-32 bg-white border border-[#DCE4F2] rounded-[9px] shadow-panel py-1 z-20 animate-fade-in"
        >
          {languages.map((lang) => (
            <li key={lang}>
              <button
                type="button"
                role="option"
                aria-selected={lang === selected}
                onClick={() => {
                  setSelected(lang);
                  setOpen(false);
                }}
                className="w-full text-left px-3.5 py-2 text-sm text-[#0F1B3D] hover:bg-brand-50"
              >
                {lang}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
