import {
  Pill,
  Heart,
  Baby,
  Eye,
  Brain,
  Bone,
  Thermometer,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export interface MedicineCategory {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  icon: LucideIcon;
}

export const medicineCategories: MedicineCategory[] = [
  {
    id: "prescription",
    name: "Prescription Medicines",
    description: "Upload your prescription and get medicines delivered to your door.",
    itemCount: 2400,
    icon: Pill,
  },
  {
    id: "cardiac-care",
    name: "Cardiac Care",
    description: "Blood pressure, cholesterol, and heart health medication.",
    itemCount: 180,
    icon: Heart,
  },
  {
    id: "mother-baby",
    name: "Mother & Baby Care",
    description: "Prenatal vitamins, baby care, and maternal health essentials.",
    itemCount: 210,
    icon: Baby,
  },
  {
    id: "eye-ear-care",
    name: "Eye & Ear Care",
    description: "Eye drops, ear drops, and vision care products.",
    itemCount: 95,
    icon: Eye,
  },
  {
    id: "neuro-care",
    name: "Neuro & Mental Wellness",
    description: "Medication for migraines, anxiety, and neurological conditions.",
    itemCount: 130,
    icon: Brain,
  },
  {
    id: "orthopedic-care",
    name: "Orthopedic & Pain Relief",
    description: "Pain relief gels, supports, and bone health supplements.",
    itemCount: 160,
    icon: Bone,
  },
  {
    id: "fever-cold",
    name: "Fever, Cold & Flu",
    description: "Everyday essentials for fever, cold, cough, and seasonal flu.",
    itemCount: 220,
    icon: Thermometer,
  },
  {
    id: "diabetes-care",
    name: "Diabetes Care",
    description: "Glucometers, test strips, and diabetes management medication.",
    itemCount: 140,
    icon: Stethoscope,
  },
];
