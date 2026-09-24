export interface Faq {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = ["All", "Appointments", "Payments", "Medicines", "Account"] as const;

export const faqs: Faq[] = [
  {
    id: "book-appointment",
    category: "Appointments",
    question: "How do I book a doctor appointment?",
    answer:
      "Go to the Doctors page, choose a specialty or search for a doctor by name, then select an available time slot and confirm your booking. You'll receive a confirmation on email and SMS.",
  },
  {
    id: "cancel-appointment",
    category: "Appointments",
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes. Open the appointment from your account dashboard and choose Reschedule or Cancel. Cancellations made more than 2 hours before the slot are fully refundable.",
  },
  {
    id: "payment-methods",
    category: "Payments",
    question: "What payment methods are accepted?",
    answer:
      "We accept UPI, credit/debit cards, net banking, and popular wallets. Cash payment is also available for in-clinic consultations.",
  },
  {
    id: "refund-timeline",
    category: "Payments",
    question: "How long do refunds take to process?",
    answer:
      "Refunds are initiated within 24 hours of approval and typically reflect in your account within 5–7 business days, depending on your bank or payment provider.",
  },
  {
    id: "medicine-delivery-time",
    category: "Medicines",
    question: "How fast is medicine delivery?",
    answer:
      "Most orders in Patna are delivered within 2–4 hours. For other locations, standard delivery takes 1–2 business days.",
  },
  {
    id: "upload-prescription",
    category: "Medicines",
    question: "Do I need a prescription to order medicines?",
    answer:
      "Prescription medicines require a valid prescription, which you can upload during checkout. Over-the-counter products don't require one.",
  },
  {
    id: "create-account",
    category: "Account",
    question: "Do I need an account to use Medical Key?",
    answer:
      "You can browse doctors, hospitals, and services without an account, but booking appointments or ordering medicines requires a free Medical Key account.",
  },
  {
    id: "change-role",
    category: "Account",
    question: "I signed up as the wrong role (e.g. Doctor instead of Patient). Can I change it?",
    answer:
      "Yes, contact our support team from the Help Center and we'll help update your account role after verification.",
  },
];
