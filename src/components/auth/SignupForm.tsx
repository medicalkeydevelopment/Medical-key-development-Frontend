"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { User, Mail, Phone, Calendar } from "lucide-react";
import { RoleSelector } from "./RoleSelector";
import { AuthDivider } from "./AuthDivider";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { FormInput } from "./FormInput";
import { PasswordInput } from "./PasswordInput";
import { PasswordStrength } from "./PasswordStrength";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { DEFAULT_ROLE_ID } from "@/data/auth";

interface SignupFormValues {
  fullName: string;
  email: string;
  phone: string;
  dob: string;
  password: string;
  confirmPassword: string;
}

type SignupFormErrors = Partial<Record<keyof SignupFormValues, string>> & {
  role?: string;
  terms?: string;
  form?: string;
};

const initialValues: SignupFormValues = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  password: "",
  confirmPassword: "",
};

export function SignupForm() {
  const [selectedRole, setSelectedRole] = useState(DEFAULT_ROLE_ID);
  const [values, setValues] = useState<SignupFormValues>(initialValues);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<SignupFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const passwordsMismatch =
    values.confirmPassword.length > 0 && values.password !== values.confirmPassword;

  function setField<K extends keyof SignupFormValues>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validate(): boolean {
    const next: SignupFormErrors = {};
    if (!selectedRole) next.role = "Please select a role.";
    if (!values.fullName.trim()) next.fullName = "Full name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.phone.trim()) next.phone = "Phone number is required.";
    if (!values.dob) next.dob = "Date of birth is required.";
    if (!values.password) next.password = "Password is required.";
    else if (values.password.length < 8) next.password = "Password must be at least 8 characters.";
    if (!values.confirmPassword) next.confirmPassword = "Please confirm your password.";
    else if (values.password !== values.confirmPassword) next.confirmPassword = "Passwords do not match.";
    if (!agreedToTerms) next.terms = "You must agree to the Terms & Conditions and Privacy Policy.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // TODO: connect to real auth API — e.g. POST /api/auth/signup
      // const res = await fetch("/api/auth/signup", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ role: selectedRole, ...values }),
      // });
      // if (!res.ok) throw new Error("Signup failed");
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
    } catch {
      setStatus("idle");
      setErrors((prev) => ({ ...prev, form: "Something went wrong. Please try again." }));
    }
  }

  const canSubmit = useMemo(() => agreedToTerms, [agreedToTerms]);

  return (
    <div>
      <h1 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F1B3D]">Sign Up</h1>
      <p className="text-sm text-[#64708A] mt-1.5">Create your account to get started</p>

      <form className="mt-6" onSubmit={handleSubmit} noValidate>
        <RoleSelector selectedRole={selectedRole} onChange={setSelectedRole} error={errors.role} />

        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <FormInput
            id="signup-fullname"
            label="Full Name"
            icon={User}
            placeholder="Enter full name"
            autoComplete="name"
            value={values.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
            error={errors.fullName}
          />
          <FormInput
            id="signup-email"
            label="Email"
            icon={Mail}
            type="email"
            placeholder="Enter email address"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            error={errors.email}
          />
          <FormInput
            id="signup-phone"
            label="Phone Number"
            icon={Phone}
            type="tel"
            placeholder="Enter phone number"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            error={errors.phone}
          />
          <FormInput
            id="signup-dob"
            label="Date of Birth"
            icon={Calendar}
            type="date"
            placeholder="DD / MM / YYYY"
            autoComplete="bday"
            value={values.dob}
            onChange={(e) => setField("dob", e.target.value)}
            error={errors.dob}
          />
        </div>

        <div className="mt-4">
          <PasswordInput
            id="signup-password"
            label="Password"
            placeholder="Create a password"
            autoComplete="new-password"
            value={values.password}
            onChange={(val) => setField("password", val)}
            error={errors.password}
          />
          <PasswordStrength password={values.password} />
        </div>

        <div className="mt-4">
          <PasswordInput
            id="signup-confirm-password"
            label="Confirm Password"
            placeholder="Confirm your password"
            autoComplete="new-password"
            value={values.confirmPassword}
            onChange={(val) => setField("confirmPassword", val)}
            error={errors.confirmPassword ?? (passwordsMismatch ? "Passwords do not match." : undefined)}
          />
        </div>

        <Checkbox
          id="agree-terms"
          className="mt-5"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          error={errors.terms}
          label={
            <>
              I agree to the{" "}
              <Link href="/terms" className="text-brand font-medium hover:underline">
                Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-brand font-medium hover:underline">
                Privacy Policy
              </Link>
            </>
          }
        />

        {errors.form && <p className="text-sm text-medred mt-4">{errors.form}</p>}

        {status === "success" ? (
          <p className="mt-6 text-sm font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-[8px] px-4 py-3">
            Account created successfully. Redirecting…
          </p>
        ) : (
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-6 h-12"
            disabled={status === "submitting" || !canSubmit}
          >
            {status === "submitting" ? "Creating account…" : "Sign Up"}
          </Button>
        )}

        <AuthDivider label="or continue with" />
        <SocialAuthButtons />
      </form>

      <p className="text-center text-sm text-[#64708A] mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-brand font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
