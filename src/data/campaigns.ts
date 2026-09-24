export type CampaignCategory = "event" | "awareness" | "webinar";

export interface Campaign {
  id: string;
  category: CampaignCategory;
  badge: string;
  badgeColor: string;
  title: string;
  date: string;
  location?: string;
  description: string;
  buttonLabel: string;
  accent: "red" | "blue" | "purple";
}

export const campaignCategories: { id: CampaignCategory; label: string }[] = [
  { id: "event", label: "Events" },
  { id: "awareness", label: "Awareness" },
  { id: "webinar", label: "Webinars" },
];

export const campaigns: Campaign[] = [
  {
    id: "mega-health-camp",
    category: "event",
    badge: "EVENT",
    badgeColor: "bg-medred text-white",
    title: "Free Mega Health Camp",
    date: "25 May 2025",
    location: "Patna",
    description: "Free Consultation & Basic Health Checkup for All",
    buttonLabel: "Register Now",
    accent: "red",
  },
  {
    id: "world-hypertension-day",
    category: "awareness",
    badge: "AWARENESS",
    badgeColor: "bg-brand text-white",
    title: "World Hypertension Day",
    date: "17 May 2025",
    location: "Patna",
    description: "Free BP Checkup & Expert Consultation",
    buttonLabel: "Know More",
    accent: "blue",
  },
  {
    id: "diabetes-awareness-webinar",
    category: "webinar",
    badge: "WEBINAR",
    badgeColor: "bg-purple-600 text-white",
    title: "Diabetes Awareness Webinar",
    date: "31 May 2025 | 5:00 PM",
    description: "Join our expert session on Diabetes Prevention",
    buttonLabel: "Join Now",
    accent: "purple",
  },
  {
    id: "blood-donation-drive",
    category: "event",
    badge: "EVENT",
    badgeColor: "bg-medred text-white",
    title: "Blood Donation Drive",
    date: "8 June 2025",
    location: "Boring Road, Patna",
    description: "Donate blood and help save lives. Every donor gets a free health checkup.",
    buttonLabel: "Register Now",
    accent: "red",
  },
  {
    id: "world-heart-day",
    category: "awareness",
    badge: "AWARENESS",
    badgeColor: "bg-brand text-white",
    title: "World Heart Day Awareness",
    date: "29 September 2025",
    location: "Patna",
    description: "Free cardiac screening and consultation with our cardiologists.",
    buttonLabel: "Know More",
    accent: "blue",
  },
  {
    id: "child-nutrition-webinar",
    category: "webinar",
    badge: "WEBINAR",
    badgeColor: "bg-purple-600 text-white",
    title: "Child Nutrition Webinar",
    date: "12 June 2025 | 6:00 PM",
    description: "Pediatric experts share guidance on nutrition for growing children.",
    buttonLabel: "Join Now",
    accent: "purple",
  },
  {
    id: "senior-citizen-camp",
    category: "event",
    badge: "EVENT",
    badgeColor: "bg-medred text-white",
    title: "Senior Citizen Health Camp",
    date: "20 June 2025",
    location: "Patna",
    description: "Complete health screening and free consultations for senior citizens.",
    buttonLabel: "Register Now",
    accent: "red",
  },
  {
    id: "world-cancer-day",
    category: "awareness",
    badge: "AWARENESS",
    badgeColor: "bg-brand text-white",
    title: "World Cancer Day Awareness",
    date: "4 February 2026",
    location: "Patna",
    description: "Early detection screening camp and awareness talk with oncologists.",
    buttonLabel: "Know More",
    accent: "blue",
  },
  {
    id: "mental-health-webinar",
    category: "webinar",
    badge: "WEBINAR",
    badgeColor: "bg-purple-600 text-white",
    title: "Mental Health & Wellness Webinar",
    date: "10 October 2025 | 5:30 PM",
    description: "A candid session on managing stress and building healthy habits.",
    buttonLabel: "Join Now",
    accent: "purple",
  },
];
