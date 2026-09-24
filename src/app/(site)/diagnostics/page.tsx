import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { DiagnosticsExplorer } from "@/components/diagnostics/DiagnosticsExplorer";

export const metadata: Metadata = {
  title: "Diagnostics & Lab Tests | Medical Key",
  description: "Book lab tests and diagnostic scans with home sample collection and fast reports.",
};

export default function DiagnosticsPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Diagnostics & Lab Tests"
        description="Book tests and scans with home sample collection, fast reports, and trusted labs."
      />
      <div className="container py-10 md:py-14">
        <DiagnosticsExplorer />
      </div>
    </div>
  );
}
