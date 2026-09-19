import { roles } from "@/data/auth";
import { RoleCard } from "./RoleCard";

interface RoleSelectorProps {
  selectedRole: string;
  onChange: (id: string) => void;
  error?: string;
}

export function RoleSelector({ selectedRole, onChange, error }: RoleSelectorProps) {
  return (
    <div>
      <span className="block text-sm font-semibold text-[#0F1B3D] mb-3" id="role-selector-label">
        Select Your Role
      </span>
      <div
        role="radiogroup"
        aria-labelledby="role-selector-label"
        aria-invalid={!!error}
        className="grid grid-cols-2 sm:grid-cols-3 gap-3"
      >
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} selected={selectedRole === role.id} onSelect={onChange} />
        ))}
      </div>
      {error && <p className="text-xs text-medred mt-2">{error}</p>}
    </div>
  );
}
