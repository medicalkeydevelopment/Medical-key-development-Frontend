"use client";

import { useState, type FormEvent } from "react";
import { User, Mail, Phone, MessageSquare } from "lucide-react";
import { FormInput } from "@/components/auth/FormInput";
import { Button } from "@/components/ui/Button";

interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: ContactValues = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<Partial<ContactValues>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function setField<K extends keyof ContactValues>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<ContactValues> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.phone.trim()) next.phone = "Phone number is required.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // TODO: connect to real API — e.g. POST /api/contact
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
    setValues(initialValues);
  }

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-100 rounded-card p-6 text-center">
        <p className="text-base font-semibold text-emerald-700">Message sent successfully!</p>
        <p className="text-sm text-emerald-700/80 mt-1">
          Our team will get back to you within 24 hours.
        </p>
        <Button variant="outline" size="sm" className="mt-4" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <FormInput
        id="contact-name"
        label="Full Name"
        icon={User}
        placeholder="Enter your name"
        value={values.name}
        onChange={(e) => setField("name", e.target.value)}
        error={errors.name}
      />
      <div className="grid sm:grid-cols-2 gap-4">
        <FormInput
          id="contact-email"
          label="Email"
          icon={Mail}
          type="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          error={errors.email}
        />
        <FormInput
          id="contact-phone"
          label="Phone Number"
          icon={Phone}
          type="tel"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={(e) => setField("phone", e.target.value)}
          error={errors.phone}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-semibold text-[#0F1B3D] mb-1.5">
          Message
        </label>
        <div className="relative">
          <MessageSquare
            className="absolute left-3.5 top-3.5 w-4 h-4 text-[#64708A] pointer-events-none"
            aria-hidden="true"
          />
          <textarea
            id="contact-message"
            rows={5}
            placeholder="How can we help you?"
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            className="w-full pl-10 pr-3.5 py-3 rounded-[8px] border border-[#DCE4F2] bg-white text-sm text-[#0F1B3D] placeholder:text-[#9AA4BC] focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-colors resize-none"
          />
        </div>
        {errors.message && (
          <p id="contact-message-error" className="text-xs text-medred mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto self-start mt-2" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
