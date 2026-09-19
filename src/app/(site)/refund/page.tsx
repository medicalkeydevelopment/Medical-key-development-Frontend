import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | Medical Key",
  description: "Medical Key's refund and cancellation policy for appointments, tests, and orders.",
};

export default function RefundPage() {
  return (
    <LegalPage
      title="Refund Policy"
      updatedOn="1 August 2026"
      intro="We want you to feel confident booking through Medical Key. This policy outlines when and how refunds are processed. This is placeholder content for demonstration purposes and should be replaced with a policy reviewed by legal counsel before launch."
      sections={[
        {
          heading: "1. Doctor Appointments",
          body: (
            <p>
              Appointments canceled more than 2 hours before the scheduled slot are eligible
              for a full refund. Cancellations made within 2 hours, or missed appointments, are
              non-refundable.
            </p>
          ),
        },
        {
          heading: "2. Diagnostic Tests",
          body: (
            <p>
              Lab tests can be canceled up to 4 hours before the scheduled home collection or
              lab visit for a full refund. Refunds are not available once a sample has been
              collected.
            </p>
          ),
        },
        {
          heading: "3. Medicine Orders",
          body: (
            <p>
              Orders can be canceled before they are dispatched for a full refund. Once
              dispatched, medicines can only be returned if they arrive damaged, expired, or
              incorrect — please contact support within 48 hours of delivery.
            </p>
          ),
        },
        {
          heading: "4. Medical Equipment",
          body: (
            <p>
              Purchased equipment can be returned within 7 days if unused and in original
              packaging. Rented equipment refunds are prorated based on the unused rental
              period.
            </p>
          ),
        },
        {
          heading: "5. Refund Timelines",
          body: (
            <p>
              Approved refunds are initiated within 24 hours and typically reflect in your
              original payment method within 5–7 business days.
            </p>
          ),
        },
      ]}
    />
  );
}
