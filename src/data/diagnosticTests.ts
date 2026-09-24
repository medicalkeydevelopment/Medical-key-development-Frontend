export interface DiagnosticTest {
  id: string;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  turnaround: string;
  fasting: boolean;
  homeCollection: boolean;
}

export const diagnosticCategories = [
  "All",
  "Blood Tests",
  "Imaging",
  "Cardiac",
  "Full Body",
] as const;

export const diagnosticTests: DiagnosticTest[] = [
  {
    id: "cbc",
    name: "Complete Blood Count (CBC)",
    category: "Blood Tests",
    price: "₹299",
    originalPrice: "₹450",
    turnaround: "Same day",
    fasting: false,
    homeCollection: true,
  },
  {
    id: "lipid-profile",
    name: "Lipid Profile",
    category: "Blood Tests",
    price: "₹499",
    originalPrice: "₹700",
    turnaround: "Same day",
    fasting: true,
    homeCollection: true,
  },
  {
    id: "thyroid-profile",
    name: "Thyroid Profile (T3, T4, TSH)",
    category: "Blood Tests",
    price: "₹399",
    originalPrice: "₹600",
    turnaround: "24 hours",
    fasting: false,
    homeCollection: true,
  },
  {
    id: "hba1c",
    name: "HbA1c (Diabetes Screening)",
    category: "Blood Tests",
    price: "₹399",
    turnaround: "24 hours",
    fasting: false,
    homeCollection: true,
  },
  {
    id: "chest-xray",
    name: "Chest X-Ray",
    category: "Imaging",
    price: "₹399",
    turnaround: "Same day",
    fasting: false,
    homeCollection: false,
  },
  {
    id: "abdomen-usg",
    name: "Whole Abdomen Ultrasound",
    category: "Imaging",
    price: "₹899",
    originalPrice: "₹1200",
    turnaround: "Same day",
    fasting: true,
    homeCollection: false,
  },
  {
    id: "ecg",
    name: "ECG (Electrocardiogram)",
    category: "Cardiac",
    price: "₹249",
    turnaround: "Same day",
    fasting: false,
    homeCollection: true,
  },
  {
    id: "2d-echo",
    name: "2D Echocardiography",
    category: "Cardiac",
    price: "₹1499",
    originalPrice: "₹2000",
    turnaround: "Same day",
    fasting: false,
    homeCollection: false,
  },
  {
    id: "full-body-checkup",
    name: "Full Body Health Checkup (72 parameters)",
    category: "Full Body",
    price: "₹1999",
    originalPrice: "₹3500",
    turnaround: "24–48 hours",
    fasting: true,
    homeCollection: true,
  },
  {
    id: "senior-citizen-checkup",
    name: "Senior Citizen Health Checkup",
    category: "Full Body",
    price: "₹2499",
    originalPrice: "₹4000",
    turnaround: "24–48 hours",
    fasting: true,
    homeCollection: true,
  },
];
