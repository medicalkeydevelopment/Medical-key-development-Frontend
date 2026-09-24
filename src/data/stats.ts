import { HeartHandshake, Stethoscope, Building2, FlaskConical, PackageCheck, Clock, type LucideIcon } from "lucide-react";

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
  bg: string;
}

export const stats: Stat[] = [
  { value: "25,000+", label: "Happy Patients", icon: HeartHandshake, bg: "bg-rose-500" },
  { value: "500+", label: "Expert Doctors", icon: Stethoscope, bg: "bg-emerald-500" },
  { value: "200+", label: "Partner Hospitals", icon: Building2, bg: "bg-amber-500" },
  { value: "100+", label: "Diagnostics Centers", icon: FlaskConical, bg: "bg-sky-500" },
  { value: "50,000+", label: "Orders Delivered", icon: PackageCheck, bg: "bg-orange-500" },
  { value: "24/7", label: "Emergency Support", icon: Clock, bg: "bg-indigo-500" },
];
