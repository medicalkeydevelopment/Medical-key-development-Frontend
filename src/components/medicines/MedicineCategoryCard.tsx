import type { MedicineCategory } from "@/data/medicineCategories";
import { Button } from "@/components/ui/Button";

export function MedicineCategoryCard({ name, description, itemCount, icon: Icon }: MedicineCategory) {
  return (
    <article className="bg-white rounded-card border border-brand-100 shadow-soft hover:shadow-panel hover:-translate-y-1 transition-all duration-200 p-5 flex flex-col gap-3">
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-50 text-brand">
        <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="text-base font-bold text-ink">{name}</h3>
      <p className="text-sm text-ink-muted flex-1">{description}</p>
      <div className="flex items-center justify-between pt-2 border-t border-brand-50">
        <span className="text-xs text-ink-muted">{itemCount}+ products</span>
        <Button size="sm" variant="outline">
          Browse
        </Button>
      </div>
    </article>
  );
}
