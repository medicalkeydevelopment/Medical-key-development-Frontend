export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualification: string;
  experience: string;
  rating: number;
  reviews: number;
  location: string;
  fee: string;
  initials: string;
}

export const specialties = [
  "All",
  "Cardiologist",
  "Gynecologist",
  "Neurologist",
  "Pediatrician",
  "Orthopedic",
  "Dermatologist",
] as const;

export const doctors: Doctor[] = [
  {
    id: "dr-anil-kumar",
    name: "Dr. Anil Kumar",
    specialty: "Cardiologist",
    qualification: "MBBS, MD (Cardiology)",
    experience: "15 years",
    rating: 4.8,
    reviews: 320,
    location: "Boring Road, Patna",
    fee: "₹700",
    initials: "AK",
  },
  {
    id: "dr-priya-verma",
    name: "Dr. Priya Verma",
    specialty: "Gynecologist",
    qualification: "MBBS, MS (Gynecology)",
    experience: "12 years",
    rating: 4.9,
    reviews: 415,
    location: "Kankarbagh, Patna",
    fee: "₹600",
    initials: "PV",
  },
  {
    id: "dr-rajesh-singh",
    name: "Dr. Rajesh Singh",
    specialty: "Neurologist",
    qualification: "MBBS, DM (Neurology)",
    experience: "18 years",
    rating: 4.7,
    reviews: 268,
    location: "Fraser Road, Patna",
    fee: "₹900",
    initials: "RS",
  },
  {
    id: "dr-sneha-gupta",
    name: "Dr. Sneha Gupta",
    specialty: "Pediatrician",
    qualification: "MBBS, MD (Pediatrics)",
    experience: "10 years",
    rating: 4.9,
    reviews: 501,
    location: "Rajendra Nagar, Patna",
    fee: "₹500",
    initials: "SG",
  },
  {
    id: "dr-manish-thakur",
    name: "Dr. Manish Thakur",
    specialty: "Orthopedic",
    qualification: "MBBS, MS (Orthopedics)",
    experience: "14 years",
    rating: 4.6,
    reviews: 189,
    location: "Patliputra Colony, Patna",
    fee: "₹650",
    initials: "MT",
  },
  {
    id: "dr-kavita-sharma",
    name: "Dr. Kavita Sharma",
    specialty: "Dermatologist",
    qualification: "MBBS, MD (Dermatology)",
    experience: "9 years",
    rating: 4.8,
    reviews: 237,
    location: "Boring Road, Patna",
    fee: "₹550",
    initials: "KS",
  },
  {
    id: "dr-vikram-mehta",
    name: "Dr. Vikram Mehta",
    specialty: "Cardiologist",
    qualification: "MBBS, DM (Cardiology)",
    experience: "20 years",
    rating: 4.9,
    reviews: 402,
    location: "Fraser Road, Patna",
    fee: "₹1000",
    initials: "VM",
  },
  {
    id: "dr-neha-agarwal",
    name: "Dr. Neha Agarwal",
    specialty: "Gynecologist",
    qualification: "MBBS, DGO",
    experience: "8 years",
    rating: 4.7,
    reviews: 156,
    location: "Kankarbagh, Patna",
    fee: "₹550",
    initials: "NA",
  },
  {
    id: "dr-amit-ranjan",
    name: "Dr. Amit Ranjan",
    specialty: "Pediatrician",
    qualification: "MBBS, MD (Pediatrics)",
    experience: "11 years",
    rating: 4.8,
    reviews: 289,
    location: "Rajendra Nagar, Patna",
    fee: "₹500",
    initials: "AR",
  },
];
