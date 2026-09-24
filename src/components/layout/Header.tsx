"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Plus,
} from "lucide-react";
import { mainNavLinks, moreLinks } from "@/data/footerLinks";
import { Button, LinkButton } from "@/components/ui/Button";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <header className="bg-white border-b border-black/5 sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3 gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Medical Key home">
          <Image
            src="/images/logo/logo.png"
            alt="Medical Key Logo"
            width={45}
            height={45}
          />
          <span className="leading-tight">
            <span className="block text-lg font-extrabold text-brand tracking-tight">
              MEDICAL <span className="text-medred">KEY</span>
            </span>
            <span className="block text-[10px] font-medium text-ink-muted -mt-0.5">
              A Complete Healthcare Solution
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-7">
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative text-sm font-medium py-1 transition-colors ${
                link.label === "Home"
                  ? "text-brand after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-medred"
                  : "text-ink hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 text-sm font-medium text-ink hover:text-brand transition-colors"
            >
              More
              <ChevronDown className={`w-4 h-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-3 w-52 bg-white rounded-card shadow-panel border border-black/5 py-2 animate-fade-in">
                {moreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-ink hover:bg-brand-50 hover:text-brand"
                    onClick={() => setMoreOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          {/* <button
            type="button"
            aria-label="Search"
            className="flex items-center justify-center w-10 h-10 rounded-full text-ink hover:bg-brand-50 hover:text-brand transition-colors"
          >
            <Search className="w-5 h-5" aria-hidden="true" />
          </button> */}
          <LinkButton href="/login" variant="outline" size="sm">
            Login / Sign Up
          </LinkButton>
          <LinkButton href="/book-consultation" variant="primary" size="sm">
            Book Consultation
          </LinkButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-btn text-brand"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          aria-label="Mobile primary"
          className="lg:hidden border-t border-black/5 bg-white px-4 py-4 flex flex-col gap-1 animate-fade-in"
        >
          {[...mainNavLinks, ...moreLinks].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-2 py-2.5 text-sm font-medium text-ink hover:text-brand rounded-btn hover:bg-brand-50"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-3">
            <LinkButton href="/login" variant="outline" size="sm" className="w-full">
              Login / Sign Up
            </LinkButton>
            <LinkButton href="/book-consultation" variant="primary" size="sm" className="w-full">
              Book Consultation
            </LinkButton>
          </div>
        </nav>
      )}
    </header>
  );
}
