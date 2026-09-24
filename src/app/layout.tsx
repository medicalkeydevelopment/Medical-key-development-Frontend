import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medical Key | Complete Healthcare Solution",
  description:
    "Medical Key is your trusted healthcare platform for doctor consultations, hospitals, diagnostics, medicines, home healthcare, medical equipment and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 bg-white text-brand px-4 py-2 rounded-btn shadow-panel"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
