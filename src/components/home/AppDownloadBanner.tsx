import { Smartphone } from "lucide-react";

export default function AppDownloadBanner() {
  return (
    <section className="container py-14">
      <div className="rounded-panel bg-gradient-to-r from-brand to-[#4B2E9E] px-6 sm:px-10 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div className="text-center md:text-left max-w-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Healthcare at Your Fingertips
          </h2>
          <p className="text-white/85 mt-3 text-sm sm:text-base">
            Download the Medical Key App
          </p>
          <p className="text-white/70 mt-1 text-sm">
            Book appointments, order medicines, track orders &amp; more.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-6 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white text-xs font-semibold px-4 py-2.5 rounded-btn hover:bg-black/80 transition-colors"
            >
              <Smartphone className="w-4 h-4" aria-hidden="true" />
              <span className="text-left leading-tight">
                GET IT ON
                <br />
                <span className="text-sm">Google Play</span>
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white text-xs font-semibold px-4 py-2.5 rounded-btn hover:bg-black/80 transition-colors"
            >
              <Smartphone className="w-4 h-4" aria-hidden="true" />
              <span className="text-left leading-tight">
                Download on the
                <br />
                <span className="text-sm">App Store</span>
              </span>
            </a>
            <span className="hidden sm:flex items-center justify-center w-16 h-16 bg-white rounded-btn p-1.5">
              {/* QR code placeholder — replace with a generated QR image in /public/images/app */}
              <span className="w-full h-full grid grid-cols-4 grid-rows-4 gap-0.5">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span
                    key={i}
                    className={`${[0,1,3,4,6,9,11,12,14,15].includes(i) ? "bg-brand-900" : "bg-transparent"} rounded-[1px]`}
                  />
                ))}
              </span>
            </span>
          </div>
        </div>

        <div className="flex items-end gap-3 flex-shrink-0" aria-hidden="true">
          <div className="w-24 h-44 sm:w-28 sm:h-52 bg-white/95 rounded-2xl shadow-panel translate-y-3" />
          <div className="w-24 h-52 sm:w-28 sm:h-60 bg-white rounded-2xl shadow-panel" />
          <div className="w-24 h-44 sm:w-28 sm:h-52 bg-white/95 rounded-2xl shadow-panel translate-y-3" />
        </div>
      </div>
    </section>
  );
}
