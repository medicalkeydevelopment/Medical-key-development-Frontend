import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";
import { LanguageSelector } from "./LanguageSelector";

interface AuthLayoutProps {
  brandPanel: ReactNode;
  children: ReactNode;
}

export function AuthLayout({ brandPanel, children }: AuthLayoutProps) {
  return (
    <div
      id="main-content"
      className="min-h-screen w-full bg-gradient-to-br from-[#F4F8FF] via-white to-[#EEF4FF] flex items-center justify-center px-3 py-6 sm:px-6 sm:py-10"
    >
      <div className="w-full max-w-[1500px] lg:h-[900px] lg:max-h-[92vh] bg-white rounded-[20px] sm:rounded-[24px] shadow-[0_20px_60px_rgba(46,49,146,0.10)] overflow-hidden flex flex-col lg:flex-row">
        {brandPanel}

        <div className="relative flex-1 lg:w-[57%] overflow-y-auto">
          {/* Mobile-only compact logo */}
          <div className="lg:hidden flex items-center justify-between px-5 pt-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-50 border border-brand-100">
                <Plus className="w-5 h-5 text-medred" aria-hidden="true" />
              </span>
              <span className="text-sm font-extrabold text-brand tracking-tight">
                MEDICAL <span className="text-medred">KEY</span>
              </span>
            </Link>
            <LanguageSelector />
          </div>

          <div className="px-5 py-6 sm:px-10 sm:py-8 lg:px-12 lg:py-10">
            {/* Desktop-only language selector, top-right */}
            <div className="hidden lg:flex justify-end mb-2">
              <LanguageSelector />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
