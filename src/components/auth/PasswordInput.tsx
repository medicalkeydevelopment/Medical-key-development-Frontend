"use client";

import { useId, useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordInputProps {
  id?: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  hideLabel?: boolean;
  autoComplete?: string;
}

export function PasswordInput({
  id,
  label,
  placeholder,
  value,
  onChange,
  error,
  hideLabel = false,
  autoComplete = "current-password",
}: PasswordInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label
        htmlFor={inputId}
        className={cn("block text-xs font-semibold text-[#0F1B3D] mb-1.5", hideLabel && "sr-only")}
      >
        {label}
      </label>
      <div className="relative">
        <Lock
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64708A] pointer-events-none"
          aria-hidden="true"
        />
        <input
          id={inputId}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className={cn(
            "w-full h-11 sm:h-12 pl-10 pr-11 rounded-[8px] border text-sm text-[#0F1B3D]",
            "border-[#DCE4F2] bg-white placeholder:text-[#9AA4BC]",
            "focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10",
            "transition-colors",
            error && "border-medred focus:border-medred focus:ring-medred/10"
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64708A] hover:text-brand transition-colors rounded-full p-1"
        >
          {visible ? <EyeOff className="w-4 h-4" aria-hidden="true" /> : <Eye className="w-4 h-4" aria-hidden="true" />}
        </button>
      </div>
      {error && (
        <p id={`${inputId}-error`} className="text-xs text-medred mt-1.5">
          {error}
        </p>
      )}
    </div>
  );
}
