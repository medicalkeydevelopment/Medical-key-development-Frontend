import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | Medical Key",
  description: "The terms and conditions governing your use of the Medical Key platform.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updatedOn="1 August 2026"
      intro="These Terms & Conditions ('Terms') govern your access to and use of the Medical Key platform, including our website, mobile app, and related services. By creating an account or using our services, you agree to these Terms. This is placeholder content for demonstration purposes and should be replaced with terms reviewed by legal counsel before launch."
      sections={[
        {
          heading: "1. Use of the Platform",
          body: (
            <p>
              Medical Key connects patients with doctors, hospitals, diagnostic centers, and
              pharmacies. You agree to use the platform only for lawful purposes and to provide
              accurate information when creating an account or booking a service.
            </p>
          ),
        },
        {
          heading: "2. Appointments & Bookings",
          body: (
            <p>
              Appointment availability is subject to change by the doctor or facility. Medical
              Key facilitates bookings but is not responsible for the medical advice, diagnosis,
              or treatment provided by any doctor or hospital listed on the platform.
            </p>
          ),
        },
        {
          heading: "3. Payments",
          body: (
            <p>
              All fees are displayed before checkout. Payments are processed through secure
              third-party payment gateways. Medical Key does not store your full card details.
            </p>
          ),
        },
        {
          heading: "4. User Responsibilities",
          body: (
            <p>
              You are responsible for maintaining the confidentiality of your account
              credentials and for all activity that occurs under your account.
            </p>
          ),
        },
        {
          heading: "5. Limitation of Liability",
          body: (
            <p>
              Medical Key is a booking and discovery platform. We are not liable for the
              quality of care, outcomes, or actions of any third-party doctor, hospital,
              pharmacy, or delivery partner listed on the platform.
            </p>
          ),
        },
        {
          heading: "6. Changes to These Terms",
          body: (
            <p>
              We may update these Terms from time to time. Continued use of the platform after
              changes are posted constitutes acceptance of the revised Terms.
            </p>
          ),
        },
      ]}
    />
  );
}
