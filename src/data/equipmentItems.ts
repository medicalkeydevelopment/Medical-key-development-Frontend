export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  price: string;
  rentPrice?: string;
  inStock: boolean;
}

export const equipmentCategories = [
  "All",
  "Mobility",
  "Monitoring",
  "Respiratory",
  "Home Care",
] as const;

export const equipmentItems: EquipmentItem[] = [
  {
    id: "wheelchair-standard",
    name: "Standard Wheelchair",
    category: "Mobility",
    price: "₹4,999",
    rentPrice: "₹499/week",
    inStock: true,
  },
  {
    id: "walking-stick",
    name: "Adjustable Walking Stick",
    category: "Mobility",
    price: "₹599",
    inStock: true,
  },
  {
    id: "bp-monitor",
    name: "Digital BP Monitor",
    category: "Monitoring",
    price: "₹1,299",
    inStock: true,
  },
  {
    id: "pulse-oximeter",
    name: "Fingertip Pulse Oximeter",
    category: "Monitoring",
    price: "₹899",
    inStock: true,
  },
  {
    id: "glucometer",
    name: "Glucometer with 25 Strips",
    category: "Monitoring",
    price: "₹999",
    inStock: true,
  },
  {
    id: "nebulizer",
    name: "Compact Nebulizer",
    category: "Respiratory",
    price: "₹1,799",
    rentPrice: "₹250/week",
    inStock: true,
  },
  {
    id: "oxygen-concentrator",
    name: "Oxygen Concentrator (5L)",
    category: "Respiratory",
    price: "₹42,000",
    rentPrice: "₹1,500/week",
    inStock: false,
  },
  {
    id: "hospital-bed",
    name: "Adjustable Hospital Bed",
    category: "Home Care",
    price: "₹18,999",
    rentPrice: "₹999/week",
    inStock: true,
  },
  {
    id: "air-mattress",
    name: "Anti-Bedsore Air Mattress",
    category: "Home Care",
    price: "₹2,499",
    rentPrice: "₹350/week",
    inStock: true,
  },
];
