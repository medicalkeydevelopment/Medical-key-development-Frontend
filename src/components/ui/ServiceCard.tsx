import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ title, href, icon: Icon }: Service) {
  return (
    <Link
      href={href}
      className="group flex-shrink-0 w-[140px] sm:w-auto flex flex-col items-center text-center gap-3 bg-white border border-brand-100 rounded-card px-4 py-6 shadow-soft hover:shadow-panel hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/30"
    >
      <span className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-200">
        <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold text-ink leading-tight">{title}</span>
    </Link>
  );
}
