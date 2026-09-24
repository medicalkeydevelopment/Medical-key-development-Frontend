import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-brand-50 to-surface-light border-b border-brand-100">
      <div className="container py-10 md:py-14">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-ink-muted mb-4">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-brand font-medium">{title}</span>
        </nav>
        <h1 className="text-[28px] md:text-[36px] font-extrabold text-brand leading-tight">{title}</h1>
        {description && (
          <p className="text-sm md:text-base text-ink-muted mt-3 max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
}
