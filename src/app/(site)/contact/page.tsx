import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Medical Key",
  description: "Get in touch with Medical Key's support team for any questions or feedback.",
};

const contactDetails = [
  { icon: MapPin, label: "Boring Road, Patna, Bihar - 800001, India" },
  { icon: Phone, label: "+91 72098 72098" },
  { icon: Mail, label: "support@medicalkey.in" },
  { icon: Clock, label: "Mon - Sun : 24x7 Open" },
];

export default function ContactPage() {
  return (
    <div className="bg-surface-light">
      <PageHeader
        title="Contact Us"
        description="Have a question or feedback? Our team typically responds within 24 hours."
      />

      <div className="container py-10 md:py-14 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {contactDetails.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 bg-white border border-brand-100 rounded-card p-4"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-50 text-brand flex-shrink-0">
                <item.icon className="w-[18px] h-[18px]" aria-hidden="true" />
              </span>
              <p className="text-sm text-ink pt-2">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3 bg-white border border-brand-100 rounded-card p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
