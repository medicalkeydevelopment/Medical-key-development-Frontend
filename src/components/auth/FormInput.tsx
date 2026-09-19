import type { InputHTMLAttributes } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: LucideIcon;
  error?: string;
  hideLabel?: boolean;
}

export function FormInput({
  id,
  label,
  icon: Icon,
  error,
  hideLabel = false,
  className,
  ...props
}: FormInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={cn(
          "block text-xs font-semibold text-[#0F1B3D] mb-1.5",
          hideLabel && "sr-only"
        )}
      >
        {label}
      </label>
      <div className="relative">
        <Icon
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64708A] pointer-events-none"
          aria-hidden="true"
        />
        <input
          id={id}
          className={cn(
            "w-full h-11 sm:h-12 pl-10 pr-3.5 rounded-[8px] border text-sm text-[#0F1B3D]",
            "border-[#DCE4F2] bg-white placeholder:text-[#9AA4BC]",
            "focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10",
            "transition-colors",
            error && "border-medred focus:border-medred focus:ring-medred/10"
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className="text-xs text-medred mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}
