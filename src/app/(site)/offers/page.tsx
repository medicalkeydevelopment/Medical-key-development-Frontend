import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { OfferCard } from "@/components/ui/OfferCard";
import { offers } from "@/data/offers";

export const metadata: Metadata = {
  title: "Exclusive Offers | Medical Key",
  description: "Save more on lab tests, medicines, health packages, and medical equipment.",
};

export default function OffersPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Exclusive Offers"
        description="Limited-time discounts on the services you use most — apply the code at checkout."
      />
      <div className="container py-10 md:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {offers.map((offer) => (
            <OfferCard key={offer.id} {...offer} />
          ))}
        </div>
      </div>
    </div>
  );
}
