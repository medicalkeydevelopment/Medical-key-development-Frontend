import { Check } from "lucide-react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
  error?: string;
}

export function Checkbox({ id, label, error, className, ...props }: CheckboxProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-start gap-2.5 cursor-pointer select-none">
        <span className="relative flex-shrink-0 mt-0.5 w-[18px] h-[18px]">
          <input
            id={id}
            type="checkbox"
            className="peer sr-only"
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            {...props}
          />
          <span
            className="absolute inset-0 rounded-[5px] border-2 border-[#DCE4F2] bg-white
              peer-checked:bg-brand peer-checked:border-brand
              peer-focus-visible:ring-4 peer-focus-visible:ring-brand/25
              transition-colors"
            aria-hidden="true"
          />
          <Check
            className="absolute inset-0 m-auto w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
            strokeWidth={3}
            aria-hidden="true"
          />
        </span>
        <span className="text-sm text-[#64708A] leading-snug">{label}</span>
      </label>
      {error && (
        <p id={`${id}-error`} className="text-xs text-medred mt-1 ml-[26px]">
          {error}
        </p>
      )}
    </div>
  );
}
