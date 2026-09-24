export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "anjali-sharma",
    name: "Anjali Sharma",
    location: "Patna",
    quote:
      "Medical Key helped me find the right doctor instantly. The experience was excellent and the staff is very supportive.",
    rating: 5,
    initials: "AS",
  },
  {
    id: "vikash-kumar",
    name: "Vikash Kumar",
    location: "Patna",
    quote: "Very easy to book appointments and get medicines at home. Highly recommended!",
    rating: 5,
    initials: "VK",
  },
  {
    id: "ravi-prakash",
    name: "Ravi Prakash",
    location: "Patna",
    quote: "Their ambulance service is very fast and reliable. They truly care about patients.",
    rating: 4,
    initials: "RP",
  },
  {
    id: "sunita-devi",
    name: "Sunita Devi",
    location: "Kankarbagh, Patna",
    quote:
      "Booked a full body checkup at a great price and the home sample collection was right on time.",
    rating: 5,
    initials: "SD",
  },
  {
    id: "rohit-kumar",
    name: "Rohit Kumar",
    location: "Boring Road, Patna",
    quote:
      "The app makes it so simple to compare doctors and read reviews before booking. Saved me a lot of time.",
    rating: 4,
    initials: "RK",
  },
  {
    id: "meena-kumari",
    name: "Meena Kumari",
    location: "Rajendra Nagar, Patna",
    quote:
      "Ordered my mother's monthly medicines online and they arrived within a few hours. Great service.",
    rating: 5,
    initials: "MK",
  },
  {
    id: "arjun-verma",
    name: "Arjun Verma",
    location: "Patliputra Colony, Patna",
    quote: "Rented a hospital bed for my grandfather's recovery — smooth process, fair pricing.",
    rating: 4,
    initials: "AV",
  },
  {
    id: "pooja-singh",
    name: "Pooja Singh",
    location: "Fraser Road, Patna",
    quote:
      "The doctors are genuinely attentive and the follow-up reminders keep me on track with my treatment.",
    rating: 5,
    initials: "PS",
  },
];
