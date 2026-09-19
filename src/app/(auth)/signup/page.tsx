import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthBrandPanel } from "@/components/auth/AuthBrandPanel";
import { SignupIllustration } from "@/components/auth/HealthcareIllustration";
import { SignupForm } from "@/components/auth/SignupForm";
import { signupBenefits } from "@/data/auth";

export const metadata: Metadata = {
  title: "Sign Up | Medical Key",
  description: "Create your Medical Key account and access complete healthcare services.",
};

export default function SignupPage() {
  return (
    <AuthLayout
      brandPanel={
        <AuthBrandPanel
          heading="Create Your Account"
          description="Join Medical Key and access complete healthcare services."
          benefits={signupBenefits}
          illustration={<SignupIllustration />}
        />
      }
    >
      <SignupForm />
    </AuthLayout>
  );
}
