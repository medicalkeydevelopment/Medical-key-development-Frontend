import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthBrandPanel } from "@/components/auth/AuthBrandPanel";
import { LoginIllustration } from "@/components/auth/HealthcareIllustration";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { loginBenefits } from "@/data/auth";

export const metadata: Metadata = {
  title: "Forgot Password | Medical Key",
  description: "Reset your Medical Key account password.",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      brandPanel={
        <AuthBrandPanel
          heading="Welcome Back!"
          description="Login to your account and continue to manage healthcare services easily."
          benefits={loginBenefits}
          illustration={<LoginIllustration />}
        />
      }
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
