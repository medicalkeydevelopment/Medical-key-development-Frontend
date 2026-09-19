import { ShieldCheck, Lock, Headphones, Phone, User } from "lucide-react";
import SearchPanel from "./SearchPanel";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-surface-light to-white overflow-hidden">
      <div className="container pt-10 md:pt-14 pb-32 md:pb-40 grid lg:grid-cols-2 gap-10 items-center relative">
        {/* Left column */}
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 bg-white border border-brand-100 text-brand text-xs font-bold px-4 py-2 rounded-full shadow-soft">
            <ShieldCheck className="w-3.5 h-3.5 text-medred" aria-hidden="true" />
            TRUSTED BY 25,000+ PATIENTS
          </span>

          <h1 className="mt-5 text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.15] text-brand">
            Complete Healthcare
            <br />
            Solution, <span className="text-medred">All in One Place</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-ink-muted max-w-lg leading-relaxed">
            Book doctors, find hospitals, order medicines, book tests, avail{" "}
            <strong className="text-ink font-semibold">
              home healthcare, medical equipment &amp; more
            </strong>{" "}
            — all through one trusted platform.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 text-xs sm:text-sm font-medium text-ink">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-brand" aria-hidden="true" />
              Verified Doctors
            </span>
            <span className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-brand" aria-hidden="true" />
              Secure Booking
            </span>
            <span className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-brand" aria-hidden="true" />
              24x7 Support
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button size="lg">Book Consultation</Button>
            <Button variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Right column: hero image + emergency card */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-[4/5] rounded-panel bg-gradient-to-br from-brand-100 via-brand-50 to-white overflow-hidden flex items-end justify-center">
            {/* Placeholder illustration for the healthcare team photo.
               Replace with next/image pointing to /images/hero/team.jpg when the real asset is available. */}
            <div className="flex items-end gap-[-8px] px-6 pb-0">
              <div className="w-28 sm:w-32 h-64 sm:h-72 rounded-t-full bg-brand-200/70 flex items-start justify-center pt-6 -mr-6">
                <User className="w-10 h-10 text-brand" aria-hidden="true" />
              </div>
              <div className="w-32 sm:w-36 h-72 sm:h-80 rounded-t-full bg-white shadow-panel flex items-start justify-center pt-6 z-10">
                <User className="w-12 h-12 text-medred" aria-hidden="true" />
              </div>
              <div className="w-28 sm:w-32 h-64 sm:h-72 rounded-t-full bg-brand-200/70 flex items-start justify-center pt-6 -ml-6">
                <User className="w-10 h-10 text-brand" aria-hidden="true" />
              </div>
            </div>
            <span className="sr-only">
              Team of Medical Key doctors and healthcare professionals
            </span>
          </div>

          {/* Emergency floating card */}
          <div className="absolute -bottom-6 -right-2 sm:right-0 md:-right-6 w-52 bg-white rounded-card shadow-panel p-4 flex flex-col gap-2 border border-black/5">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-50">
              <Phone className="w-5 h-5 text-medred" aria-hidden="true" />
            </span>
            <p className="text-lg font-extrabold text-brand leading-none">24x7</p>
            <p className="text-sm font-bold text-ink">Emergency Care</p>
            <p className="text-xs text-ink-muted">We&apos;re always here for you</p>
            <Button variant="secondary" size="sm" className="mt-1 w-full">
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Floating search panel */}
      <div className="container relative -mt-24 md:-mt-28 pb-4">
        <SearchPanel />
      </div>
    </section>
  );
}
