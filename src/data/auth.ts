import {
  User,
  Stethoscope,
  Building2,
  BriefcaseMedical,
  Handshake,
  ShieldCheck,
  Lock,
  HeartPulse,
  Star,
  Clock,
  type LucideIcon,
} from "lucide-react";

export interface Role {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const roles: Role[] = [
  { id: "patient", label: "Patient", icon: User },
  { id: "doctor", label: "Doctor", icon: Stethoscope },
  { id: "hospital", label: "Hospital", icon: Building2 },
  { id: "pharmacy", label: "Pharmacy", icon: BriefcaseMedical },
  { id: "partner", label: "Partner", icon: Handshake },
  { id: "admin", label: "Admin", icon: ShieldCheck },
];

export const DEFAULT_ROLE_ID = "patient";

export interface LoginBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SignupBenefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const loginBenefits: LoginBenefit[] = [
  {
    title: "Secure & Safe",
    description: "Your data is protected with advanced security.",
    icon: ShieldCheck,
  },
  {
    title: "24x7 Support",
    description: "We are always here for you anytime.",
    icon: Clock,
  },
  {
    title: "Complete Healthcare",
    description: "All healthcare services in one trusted platform.",
    icon: HeartPulse,
  },
];

export const signupBenefits: SignupBenefit[] = [
  {
    title: "Easy Registration",
    description: "Create your account in just a few minutes.",
    icon: User,
  },
  {
    title: "Secure & Reliable",
    description: "Your information is safe with us.",
    icon: Lock,
  },
  {
    title: "Better Experience",
    description: "Personalized services just for you.",
    icon: Star,
  },
];
