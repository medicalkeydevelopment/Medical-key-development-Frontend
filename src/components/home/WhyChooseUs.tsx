import { SectionHeader } from "@/components/ui/SectionHeader";
import { whyChooseUs } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section className="container py-14">
      <SectionHeader title="Why Choose Medical Key?" centered />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {whyChooseUs.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-brand-100 rounded-card p-6 text-center shadow-soft hover:shadow-panel hover:-translate-y-1 transition-all duration-200"
          >
            <span className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-brand-50 text-brand mb-4">
              <item.icon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="text-base font-bold text-ink mb-2">{item.title}</h3>
            <p className="text-sm text-ink-muted leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
