import { ShieldCheck, HeartPulse, CalendarCheck, BadgePercent, Clock, type LucideIcon } from "lucide-react";

export interface WhyItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const whyChooseUs: WhyItem[] = [
  {
    title: "Trusted & Verified",
    description: "All doctors & partners are verified for your safety.",
    icon: ShieldCheck,
  },
  {
    title: "Comprehensive Care",
    description: "All healthcare services under one roof.",
    icon: HeartPulse,
  },
  {
    title: "Easy & Quick Booking",
    description: "Book appointments, tests & services in just a few clicks.",
    icon: CalendarCheck,
  },
  {
    title: "Affordable Pricing",
    description: "Best prices & exclusive offers to save more on healthcare.",
    icon: BadgePercent,
  },
  {
    title: "24x7 Support",
    description: "We are always here to help you anytime, anywhere.",
    icon: Clock,
  },
];
