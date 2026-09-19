import {
  Stethoscope,
  Hospital,
  Home,
  FlaskConical,
  Ambulance,
  Pill,
  Accessibility,
  HeartPulse,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  { title: "Find Doctor", href: "/doctors", icon: Stethoscope },
  { title: "Find Hospital", href: "/hospitals", icon: Hospital },
  { title: "Home Healthcare", href: "/services", icon: Home },
  { title: "Diagnostics", href: "/diagnostics", icon: FlaskConical },
  { title: "Ambulance", href: "/services", icon: Ambulance },
  { title: "Medicines", href: "/medicines", icon: Pill },
  { title: "Medical Equipment", href: "/equipment", icon: Accessibility },
  { title: "Health Packages", href: "/services", icon: HeartPulse },
  { title: "Career & Placement", href: "/services", icon: GraduationCap },
];
