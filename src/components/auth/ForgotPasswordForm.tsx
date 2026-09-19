"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import { FormInput } from "@/components/auth/FormInput";
import { Button } from "@/components/ui/Button";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) {
      setError("Email or phone number is required.");
      return;
    }
    setError(undefined);
    setStatus("submitting");
    // TODO: connect to real API — e.g. POST /api/auth/forgot-password
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
  }

  return (
    <div>
      <h1 className="text-[28px] sm:text-[32px] font-extrabold text-[#0F1B3D]">Forgot Password?</h1>
      <p className="text-sm text-[#64708A] mt-1.5">
        Enter your email or phone number and we&apos;ll send you a link to reset your password.
      </p>

      {status === "success" ? (
        <p className="mt-6 text-sm font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-[8px] px-4 py-3">
          If an account exists for that email or phone number, a reset link has been sent.
        </p>
      ) : (
        <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <FormInput
            id="forgot-password-email"
            label="Email or phone number"
            hideLabel
            icon={Mail}
            type="text"
            placeholder="Enter email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />
          <Button type="submit" variant="secondary" size="lg" className="w-full h-12" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Send Reset Link"}
          </Button>
        </form>
      )}

      <Link
        href="/login"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
      >
        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
        Back to Login
      </Link>
    </div>
  );
}
