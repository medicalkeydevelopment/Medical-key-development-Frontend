export function AuthDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-5" role="separator">
      <span className="h-px flex-1 bg-[#DCE4F2]" />
      <span className="text-xs text-[#64708A] whitespace-nowrap">{label}</span>
      <span className="h-px flex-1 bg-[#DCE4F2]" />
    </div>
  );
}
