"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { RoleSelector } from "./RoleSelector";
import { AuthDivider } from "./AuthDivider";
import { SocialAuthButtons } from "./SocialAuthButtons";
import { FormInput } from "./FormInput";
import { PasswordInput } from "./PasswordInput";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { DEFAULT_ROLE_ID } from "@/data/auth";

interface LoginFormValues {
  identifier: string;
  password: string;
}

interface LoginFormErrors {
  role?: string;
  identifier?: string;
  password?: string;
  form?: string;
}

export function LoginForm() {
  const [selectedRole, setSelectedRole] = useState(DEFAULT_ROLE_ID);
  const [values, setValues] = useState<LoginFormValues>({ identifier: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function validate(): boolean {
    const next: LoginFormErrors = {};
    if (!selectedRole) next.role = "Please select a role.";
    if (!values.identifier.trim()) next.identifier = "Email or phone number is required.";
    if (!values.password) next.password = "Password is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // TODO: connect to real auth API — e.g. POST /api/auth/login
      // const res = await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ role: selectedRole, ...values, rememberMe }),
      // });
      // if (!res.ok) throw new Error("Invalid credentials");
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
    } catch {
      setStatus("idle");
      setErrors((prev) => ({ ...prev, form: "Something went wrong. Please try again." }));
    }
  }

  return (
    <div>
      <h1 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F1B3D]">Login</h1>
      <p className="text-sm text-[#64708A] mt-1.5">Welcome back! Please login to continue</p>

      <form className="mt-6" onSubmit={handleSubmit} noValidate>
        <RoleSelector selectedRole={selectedRole} onChange={setSelectedRole} error={errors.role} />

        <AuthDivider label="or continue with" />
        <SocialAuthButtons />

        <AuthDivider label="or login with email" />

        <div className="flex flex-col gap-4">
          <FormInput
            id="login-identifier"
            label="Email or phone number"
            hideLabel
            icon={Mail}
            type="text"
            autoComplete="username"
            placeholder="Enter email or phone number"
            value={values.identifier}
            onChange={(e) => setValues((v) => ({ ...v, identifier: e.target.value }))}
            error={errors.identifier}
          />
          <PasswordInput
            id="login-password"
            label="Password"
            hideLabel
            placeholder="Enter your password"
            value={values.password}
            onChange={(val) => setValues((v) => ({ ...v, password: val }))}
            error={errors.password}
          />
        </div>

        <div className="flex items-center justify-between mt-4">
          <Checkbox
            id="remember-me"
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <Link href="/forgot-password" className="text-sm font-medium text-brand hover:underline">
            Forgot Password?
          </Link>
        </div>

        {errors.form && <p className="text-sm text-medred mt-4">{errors.form}</p>}

        {status === "success" ? (
          <p className="mt-6 text-sm font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-[8px] px-4 py-3">
            Logged in successfully. Redirecting…
          </p>
        ) : (
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="w-full mt-6 h-12"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Logging in…" : "Login"}
          </Button>
        )}
      </form>

      <p className="text-center text-sm text-[#64708A] mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-brand font-semibold hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
