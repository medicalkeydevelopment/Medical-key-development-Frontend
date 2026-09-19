import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  linkLabel?: string;
  linkHref?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  linkLabel,
  linkHref,
  centered = false,
}: SectionHeaderProps) {
  if (centered) {
    return (
      <div className="text-center mb-10">
        <h2 className="text-[28px] md:text-[32px] font-bold text-brand relative inline-block">
          {title}
          <span className="block w-16 h-1 bg-medred rounded-full mx-auto mt-3" />
        </h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-[24px] md:text-[28px] font-bold text-brand">{title}</h2>
      {linkLabel && linkHref && (
        <Link
          href={linkHref}
          className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-brand hover:text-medred transition-colors"
        >
          {linkLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
