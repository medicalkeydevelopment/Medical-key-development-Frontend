export interface Hospital {
  id: string;
  name: string;
  type: string;
  location: string;
  beds: number;
  rating: number;
  reviews: number;
  specialties: string[];
  emergency: boolean;
}

export const hospitals: Hospital[] = [
  {
    id: "medical-key-super-speciality",
    name: "Medical Key Super Speciality Hospital",
    type: "Multi-Speciality",
    location: "Boring Road, Patna",
    beds: 250,
    rating: 4.7,
    reviews: 612,
    specialties: ["Cardiology", "Neurology", "Orthopedics", "Oncology"],
    emergency: true,
  },
  {
    id: "patliputra-general",
    name: "Patliputra General Hospital",
    type: "General Hospital",
    location: "Patliputra Colony, Patna",
    beds: 180,
    rating: 4.5,
    reviews: 389,
    specialties: ["General Medicine", "Surgery", "Gynecology"],
    emergency: true,
  },
  {
    id: "sunrise-womens-hospital",
    name: "Sunrise Women's & Children's Hospital",
    type: "Specialty Hospital",
    location: "Kankarbagh, Patna",
    beds: 120,
    rating: 4.8,
    reviews: 445,
    specialties: ["Gynecology", "Pediatrics", "Maternity"],
    emergency: true,
  },
  {
    id: "city-care-hospital",
    name: "City Care Hospital",
    type: "Multi-Speciality",
    location: "Fraser Road, Patna",
    beds: 200,
    rating: 4.6,
    reviews: 301,
    specialties: ["Cardiology", "Nephrology", "Urology"],
    emergency: true,
  },
  {
    id: "rajendra-nagar-clinic",
    name: "Rajendra Nagar Multispeciality Clinic",
    type: "Clinic",
    location: "Rajendra Nagar, Patna",
    beds: 40,
    rating: 4.4,
    reviews: 156,
    specialties: ["General Medicine", "Dermatology", "ENT"],
    emergency: false,
  },
  {
    id: "lifeline-trauma-center",
    name: "Lifeline Trauma & Emergency Center",
    type: "Trauma Center",
    location: "Bailey Road, Patna",
    beds: 90,
    rating: 4.7,
    reviews: 223,
    specialties: ["Emergency Medicine", "Orthopedics", "Neurosurgery"],
    emergency: true,
  },
];
