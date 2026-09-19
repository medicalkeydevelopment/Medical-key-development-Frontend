import { MapPin, ShieldAlert, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function TopBar() {
  return (
    <div className="bg-brand text-white text-xs">
      <div className="container flex items-center justify-between gap-4 py-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Patna, Bihar, India</span>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldAlert className="w-3.5 h-3.5 text-medred" aria-hidden="true" />
            24x7 Emergency Support
          </span>
          <a href="tel:+917209872098" className="hidden sm:flex items-center gap-1.5 hover:text-white/80">
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            +91 72098 72098
          </a>
          <a
            href="mailto:support@medicalkey.in"
            className="hidden md:flex items-center gap-1.5 hover:text-white/80"
          >
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
            support@medicalkey.in
          </a>
          <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-white/20">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-white/80 transition-colors"
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
