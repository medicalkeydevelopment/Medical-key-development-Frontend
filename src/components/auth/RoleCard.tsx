import type { Role } from "@/data/auth";
import { cn } from "@/lib/utils";

interface RoleCardProps {
  role: Role;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function RoleCard({ role, selected, onSelect }: RoleCardProps) {
  const { id, label, icon: Icon } = role;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={() => onSelect(id)}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-[10px] border-2 px-3 py-4 transition-all duration-150",
        "shadow-[0_2px_10px_rgba(46,49,146,0.04)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/20",
        selected
          ? "border-brand bg-brand-50 text-brand"
          : "border-[#DCE4F2] bg-white text-[#0F1B3D] hover:border-brand/30"
      )}
    >
      <Icon
        className={cn("w-5 h-5", selected ? "text-brand" : "text-[#64708A]")}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <span className="text-xs sm:text-sm font-medium">{label}</span>
    </button>
  );
}
