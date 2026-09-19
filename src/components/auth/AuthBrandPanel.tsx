import Link from "next/link";
import { Plus } from "lucide-react";
import type { ReactNode } from "react";
import type { LoginBenefit } from "@/data/auth";

interface AuthBrandPanelProps {
  heading: string;
  description: string;
  benefits: LoginBenefit[];
  illustration: ReactNode;
}

export function AuthBrandPanel({ heading, description, benefits, illustration }: AuthBrandPanelProps) {
  return (
    <div className="relative hidden lg:flex lg:w-[43%] flex-col bg-gradient-to-b from-[#EAF2FF] to-[#F4F8FF] overflow-hidden">
      {/* Decorative dotted pattern, top-right */}
      <svg
        className="absolute top-10 right-8 w-24 h-24 text-brand/10 pointer-events-none"
        aria-hidden="true"
      >
        <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      <div className="relative z-10 px-9 pt-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-brand-100 shadow-soft">
            <Plus className="w-6 h-6 text-medred" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold text-brand tracking-tight">
              MEDICAL <span className="text-medred">KEY</span>
            </span>
            <span className="block text-[10px] font-medium text-[#64708A] -mt-0.5">
              A Complete Healthcare Solution
            </span>
          </span>
        </Link>

        {/* Heading */}
        <h1 className="mt-9 text-[28px] xl:text-[32px] font-extrabold text-[#0F1B3D] leading-tight">
          {heading}
        </h1>
        <p className="mt-2.5 text-sm text-[#64708A] leading-relaxed max-w-xs">{description}</p>

        {/* Benefits */}
        <div className="mt-8 flex flex-col gap-5">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-3.5">
              <span className="flex items-center justify-center w-11 h-11 rounded-full bg-white border border-brand-100 text-brand flex-shrink-0">
                <benefit.icon className="w-5 h-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-[#0F1B3D]">{benefit.title}</p>
                <p className="text-xs text-[#64708A] leading-relaxed mt-0.5">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom illustration area */}
      <div className="relative flex-1 mt-8">{illustration}</div>
    </div>
  );
}
