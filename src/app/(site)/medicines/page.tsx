import type { Metadata } from "next";
import { Search, Upload } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { MedicineCategoryCard } from "@/components/medicines/MedicineCategoryCard";
import { Button } from "@/components/ui/Button";
import { medicineCategories } from "@/data/medicineCategories";

export const metadata: Metadata = {
  title: "Order Medicines | Medical Key",
  description: "Order prescription and everyday medicines online with fast doorstep delivery.",
};

export default function MedicinesPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Order Medicines"
        description="Browse medicine categories or upload your prescription for fast doorstep delivery."
      />

      <div className="container py-10 md:py-14">
        {/* Search + prescription upload */}
        <div className="bg-white rounded-panel shadow-soft border border-brand-100 p-5 sm:p-6 flex flex-col sm:flex-row gap-3 mb-10">
          <label className="flex-1 flex items-center gap-2.5 bg-surface-light rounded-btn px-4 py-3 border border-brand-100">
            <Search className="w-4 h-4 text-ink-muted flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Search medicines</span>
            <input
              type="text"
              placeholder="Search medicines, brands, or health products..."
              className="bg-transparent outline-none text-sm w-full placeholder:text-ink-muted"
            />
          </label>
          <Button size="lg" className="sm:w-auto w-full">
            <Search className="w-4 h-4" aria-hidden="true" />
            Search
          </Button>
          <Button variant="outline" size="lg" className="sm:w-auto w-full">
            <Upload className="w-4 h-4" aria-hidden="true" />
            Upload Prescription
          </Button>
        </div>

        <h2 className="text-xl font-bold text-brand mb-5">Shop by Category</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {medicineCategories.map((cat) => (
            <MedicineCategoryCard key={cat.id} {...cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
