import { CalendarCheck, ShoppingBag, FlaskConical, Plus } from "lucide-react";

/**
 * Login illustration: a stylized trio of healthcare professionals rendered in
 * SVG so the layout never depends on an external photo asset.
 *
 * To use real photography instead, drop a file at
 * /public/images/auth/login-doctors.png and replace the <svg> below with:
 *   <Image src="/images/auth/login-doctors.png" alt="Medical Key healthcare team" fill className="object-contain object-bottom" />
 */
export function LoginIllustration() {
  return (
    <div className="relative h-full min-h-[260px] xl:min-h-[300px]">
      {/* Abstract wave */}
      <svg
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-32 text-brand-100"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,60 C80,110 160,10 240,50 C300,80 340,40 400,60 L400,120 L0,120 Z"
        />
      </svg>
      <Plus className="absolute bottom-24 left-6 w-8 h-8 text-brand/20" aria-hidden="true" />
      <span className="absolute bottom-28 right-10 w-16 h-16 rounded-full border-2 border-dashed border-brand/10" aria-hidden="true" />

      <svg
        viewBox="0 0 340 260"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[92%] h-auto"
        role="img"
        aria-label="Illustration of a Medical Key healthcare team: a doctor flanked by two clinicians"
      >
        {/* back-left professional */}
        <g transform="translate(10,40)">
          <rect x="20" y="90" width="70" height="130" rx="22" fill="#AFC2F0" />
          <circle cx="55" cy="60" r="34" fill="#E7B896" />
        </g>
        {/* back-right professional */}
        <g transform="translate(250,40)">
          <rect x="0" y="90" width="70" height="130" rx="22" fill="#AFC2F0" />
          <circle cx="35" cy="60" r="34" fill="#D9A578" />
        </g>
        {/* front-center doctor */}
        <g transform="translate(95,10)">
          <rect x="10" y="110" width="130" height="150" rx="26" fill="#FFFFFF" stroke="#DCE4F2" strokeWidth="2" />
          <rect x="55" y="120" width="40" height="80" fill="#2E3192" opacity="0.12" />
          <circle cx="75" cy="60" r="46" fill="#F0C29B" />
          <path d="M40 150 Q75 175 110 150" stroke="#2E3192" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

const signupCards = [
  { icon: CalendarCheck, title: "Book Appointment", subtitle: "Find and book doctors", offset: "left-0 top-6" },
  { icon: ShoppingBag, title: "Order Medicines", subtitle: "Get medicines at your doorstep", offset: "left-2 bottom-8" },
  { icon: FlaskConical, title: "Diagnostics", subtitle: "Book lab tests and scans", offset: "right-0 bottom-2" },
];

/**
 * Signup illustration: blue medical shield with floating service cards.
 * Swap the <svg> shield for /public/images/auth/signup-shield.png via
 * next/image if a real graphic is provided later.
 */
export function SignupIllustration() {
  return (
    <div className="relative h-full min-h-[300px] xl:min-h-[340px] px-6">
      <svg
        viewBox="0 0 400 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-28 text-brand-100"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,50 C90,100 180,20 260,55 C320,80 360,50 400,65 L400,120 L0,120 Z" />
      </svg>
      <span className="absolute top-2 right-8 w-20 h-20 rounded-full border-2 border-dashed border-brand/10" aria-hidden="true" />
      <svg className="absolute bottom-6 left-4 w-16 h-16 text-brand/10" aria-hidden="true">
        <pattern id="dots-signup" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="1.4" cy="1.4" r="1.4" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots-signup)" />
      </svg>

      {/* Shield */}
      <div className="flex justify-center pt-2">
        <svg viewBox="0 0 120 132" className="w-32 h-36" role="img" aria-label="Shield with a medical cross, representing Medical Key's protection">
          <path
            d="M60 4 L110 22 V60 C110 92 88 116 60 128 C32 116 10 92 10 60 V22 Z"
            fill="#2E3192"
          />
          <path
            d="M60 4 L110 22 V60 C110 92 88 116 60 128 C32 116 10 92 10 60 V22 Z"
            fill="url(#shieldGradient)"
            opacity="0.35"
          />
          <defs>
            <linearGradient id="shieldGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.5" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="50" y="34" width="20" height="62" rx="4" fill="#FFFFFF" />
          <rect x="29" y="55" width="62" height="20" rx="4" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Floating cards */}
      <div className="relative mt-2 h-40">
        {signupCards.map((card) => (
          <div
            key={card.title}
            className={`absolute ${card.offset} w-40 bg-white rounded-[10px] border border-[#DCE4F2] shadow-[0_8px_25px_rgba(46,49,146,0.12)] px-3 py-2.5 flex items-start gap-2`}
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-50 text-brand flex-shrink-0">
              <card.icon className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-[11px] font-bold text-[#0F1B3D] leading-tight">{card.title}</p>
              <p className="text-[10px] text-[#64708A] leading-tight mt-0.5">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
