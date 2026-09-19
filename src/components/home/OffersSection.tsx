import { SectionHeader } from "@/components/ui/SectionHeader";
import { OfferCard } from "@/components/ui/OfferCard";
import { offers } from "@/data/offers";

const FEATURED_COUNT = 4;

export default function OffersSection() {
  const featured = offers.slice(0, FEATURED_COUNT);

  return (
    <section className="container py-14">
      <SectionHeader title="Exclusive Offers" linkLabel="View All Offers" linkHref="/offers" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {featured.map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </div>
    </section>
  );
}
