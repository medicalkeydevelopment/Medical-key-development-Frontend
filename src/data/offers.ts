import {
  FlaskConical,
  Pill,
  HeartPulse,
  Accessibility,
  Stethoscope,
  Ambulance,
  type LucideIcon,
} from "lucide-react";

export interface Offer {
  id: string;
  headline: string;
  subtitle: string;
  code: string;
  buttonLabel: string;
  bg: string;
  icon: LucideIcon;
  iconColor: string;
  validTill: string;
}

export const offers: Offer[] = [
  {
    id: "lab-20",
    headline: "Up to 20% OFF",
    subtitle: "On Lab Tests",
    code: "LAB20",
    buttonLabel: "Book Now",
    bg: "bg-emerald-50",
    icon: FlaskConical,
    iconColor: "text-emerald-600",
    validTill: "30 Sep 2026",
  },
  {
    id: "med-15",
    headline: "Flat 15% OFF",
    subtitle: "On Medicines",
    code: "MED15",
    buttonLabel: "Order Now",
    bg: "bg-amber-50",
    icon: Pill,
    iconColor: "text-amber-600",
    validTill: "30 Sep 2026",
  },
  {
    id: "health-30",
    headline: "Up to 30% OFF",
    subtitle: "On Health Packages",
    code: "HEALTH30",
    buttonLabel: "Explore Now",
    bg: "bg-rose-50",
    icon: HeartPulse,
    iconColor: "text-medred",
    validTill: "15 Oct 2026",
  },
  {
    id: "equip-10",
    headline: "10% OFF",
    subtitle: "On Medical Equipment",
    code: "EQUIP10",
    buttonLabel: "Shop Now",
    bg: "bg-sky-50",
    icon: Accessibility,
    iconColor: "text-brand",
    validTill: "31 Oct 2026",
  },
  {
    id: "consult-25",
    headline: "Flat ₹100 OFF",
    subtitle: "On First Consultation",
    code: "FIRST100",
    buttonLabel: "Book Now",
    bg: "bg-violet-50",
    icon: Stethoscope,
    iconColor: "text-violet-600",
    validTill: "30 Sep 2026",
  },
  {
    id: "ambulance-free",
    headline: "Free Standby",
    subtitle: "On Ambulance Booking (10km)",
    code: "SAFE10",
    buttonLabel: "Know More",
    bg: "bg-orange-50",
    icon: Ambulance,
    iconColor: "text-orange-600",
    validTill: "31 Dec 2026",
  },
];
