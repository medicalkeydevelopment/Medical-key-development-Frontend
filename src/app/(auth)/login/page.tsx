import type { Metadata } from "next";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthBrandPanel } from "@/components/auth/AuthBrandPanel";
import { LoginIllustration } from "@/components/auth/HealthcareIllustration";
import { LoginForm } from "@/components/auth/LoginForm";
import { loginBenefits } from "@/data/auth";

export const metadata: Metadata = {
  title: "Login | Medical Key",
  description: "Login to your Medical Key account to manage healthcare services easily.",
};

export default function LoginPage() {
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
      <LoginForm />
    </AuthLayout>
  );
}
