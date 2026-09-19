import Link from "next/link";
import {
  Plus,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
} from "lucide-react";
import { quickLinks, ourServices, supportLinks } from "@/data/footerLinks";

const socials = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-white font-semibold text-sm mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="container py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-1 sm:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
              <Plus className="w-5 h-5 text-medred" aria-hidden="true" />
            </span>
            <span className="text-lg font-extrabold tracking-tight">
              MEDICAL <span className="text-medred">KEY</span>
            </span>
          </Link>
          <p className="text-sm text-white/70 leading-relaxed max-w-xs">
            Your trusted partner for all healthcare needs. We provide complete medical care with
            one simple platform.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-medred transition-colors"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links" links={quickLinks} />
        <FooterColumn title="Our Services" links={ourServices} />
        <FooterColumn title="Support" links={supportLinks} />

        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>Boring Road, Patna
                <br />
                Bihar - 800001, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <a href="tel:+917209872098" className="hover:text-white">+91 72098 72098</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              <a href="mailto:support@medicalkey.in" className="hover:text-white">support@medicalkey.in</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              Mon - Sun : 24x7 Open
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© 2025 Medical Key. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-medred fill-medred" aria-hidden="true" /> for Better Healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
