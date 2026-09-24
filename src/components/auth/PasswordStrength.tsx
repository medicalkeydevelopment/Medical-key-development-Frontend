import { cn } from "@/lib/utils";

export type StrengthLevel = "empty" | "weak" | "medium" | "strong";

export function getPasswordStrength(password: string): StrengthLevel {
  if (!password) return "empty";

  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return "weak";
  if (score <= 3) return "medium";
  return "strong";
}

const config: Record<Exclude<StrengthLevel, "empty">, { label: string; color: string; bars: number }> = {
  weak: { label: "Weak", color: "bg-medred", bars: 1 },
  medium: { label: "Medium", color: "bg-amber-500", bars: 2 },
  strong: { label: "Strong", color: "bg-emerald-500", bars: 3 },
};

export function PasswordStrength({ password }: { password: string }) {
  const level = getPasswordStrength(password);
  if (level === "empty") return null;

  const { label, color, bars } = config[level];

  return (
    <div className="flex items-center gap-2 mt-2" role="status">
      <span className="text-[11px] text-[#64708A] whitespace-nowrap">Password strength:</span>
      <div className="flex items-center gap-1 flex-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full bg-[#EAF2FF]",
              i < bars && color
            )}
          />
        ))}
      </div>
      <span
        className={cn(
          "text-[11px] font-semibold whitespace-nowrap",
          level === "weak" && "text-medred",
          level === "medium" && "text-amber-600",
          level === "strong" && "text-emerald-600"
        )}
      >
        {label}
      </span>
    </div>
  );
}
