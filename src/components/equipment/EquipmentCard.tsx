import { PackageCheck, PackageX } from "lucide-react";
import type { EquipmentItem } from "@/data/equipmentItems";
import { Button } from "@/components/ui/Button";

export function EquipmentCard({ name, category, price, rentPrice, inStock }: EquipmentItem) {
  return (
    <article className="bg-white rounded-card border border-brand-100 shadow-soft hover:shadow-panel hover:-translate-y-1 transition-all duration-200 p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] font-bold text-brand bg-brand-50 px-2.5 py-1 rounded-full">
          {category}
        </span>
        {inStock ? (
          <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
            <PackageCheck className="w-3.5 h-3.5" aria-hidden="true" />
            In Stock
          </span>
        ) : (
          <span className="flex items-center gap-1 text-[11px] font-semibold text-medred">
            <PackageX className="w-3.5 h-3.5" aria-hidden="true" />
            Out of Stock
          </span>
        )}
      </div>

      <h3 className="text-base font-bold text-ink leading-snug">{name}</h3>

      <div className="flex items-baseline gap-2 mt-auto">
        <span className="text-lg font-extrabold text-ink">{price}</span>
        {rentPrice && <span className="text-xs text-ink-muted">or rent {rentPrice}</span>}
      </div>

      <Button size="sm" disabled={!inStock} className="mt-1">
        {inStock ? "Add to Cart" : "Notify Me"}
      </Button>
    </article>
  );
}
