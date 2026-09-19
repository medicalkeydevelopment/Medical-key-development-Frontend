"use client";

import { useState, type FormEvent } from "react";
import { User, Phone, Mail, Stethoscope, Calendar, Clock } from "lucide-react";
import { FormInput } from "@/components/auth/FormInput";
import { Button } from "@/components/ui/Button";
import { specialties } from "@/data/doctors";

interface BookingValues {
  name: string;
  phone: string;
  email: string;
  specialty: string;
  date: string;
  time: string;
}

const initialValues: BookingValues = {
  name: "",
  phone: "",
  email: "",
  specialty: "",
  date: "",
  time: "",
};

export function BookConsultationForm() {
  const [values, setValues] = useState<BookingValues>(initialValues);
  const [errors, setErrors] = useState<Partial<BookingValues>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function setField<K extends keyof BookingValues>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<BookingValues> = {};
    if (!values.name.trim()) next.name = "Name is required.";
    if (!values.phone.trim()) next.phone = "Phone number is required.";
    if (!values.email.trim()) next.email = "Email is required.";
    if (!values.specialty) next.specialty = "Please choose a specialty.";
    if (!values.date) next.date = "Please choose a preferred date.";
    if (!values.time) next.time = "Please choose a preferred time.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // TODO: connect to real API — e.g. POST /api/consultations
    await new Promise((resolve) => setTimeout(resolve, 800));
    setStatus("success");
    setValues(initialValues);
  }

  if (status === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-100 rounded-card p-6 text-center">
        <p className="text-base font-semibold text-emerald-700">Consultation request received!</p>
        <p className="text-sm text-emerald-700/80 mt-1">
          Our team will confirm your slot over phone or email shortly.
        </p>
        <Button variant="outline" size="sm" className="mt-4" onClick={() => setStatus("idle")}>
          Book another consultation
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <FormInput
          id="booking-name"
          label="Full Name"
          icon={User}
          placeholder="Enter your name"
          value={values.name}
          onChange={(e) => setField("name", e.target.value)}
          error={errors.name}
        />
        <FormInput
          id="booking-phone"
          label="Phone Number"
          icon={Phone}
          type="tel"
          placeholder="Enter your phone number"
          value={values.phone}
          onChange={(e) => setField("phone", e.target.value)}
          error={errors.phone}
        />
      </div>

      <FormInput
        id="booking-email"
        label="Email"
        icon={Mail}
        type="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={(e) => setField("email", e.target.value)}
        error={errors.email}
      />

      <div>
        <label htmlFor="booking-specialty" className="block text-xs font-semibold text-[#0F1B3D] mb-1.5">
          Specialty
        </label>
        <div className="relative">
          <Stethoscope
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64708A] pointer-events-none"
            aria-hidden="true"
          />
          <select
            id="booking-specialty"
            value={values.specialty}
            onChange={(e) => setField("specialty", e.target.value)}
            aria-invalid={!!errors.specialty}
            className="w-full h-11 sm:h-12 pl-10 pr-3.5 rounded-[8px] border border-[#DCE4F2] bg-white text-sm text-[#0F1B3D] focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-colors appearance-none"
          >
            <option value="">Select a specialty</option>
            {specialties
              .filter((s) => s !== "All")
              .map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
          </select>
        </div>
        {errors.specialty && <p className="text-xs text-medred mt-1.5">{errors.specialty}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <FormInput
          id="booking-date"
          label="Preferred Date"
          icon={Calendar}
          type="date"
          value={values.date}
          onChange={(e) => setField("date", e.target.value)}
          error={errors.date}
        />
        <FormInput
          id="booking-time"
          label="Preferred Time"
          icon={Clock}
          type="time"
          value={values.time}
          onChange={(e) => setField("time", e.target.value)}
          error={errors.time}
        />
      </div>

      <Button type="submit" size="lg" className="w-full mt-2" disabled={status === "submitting"}>
        {status === "submitting" ? "Booking…" : "Book Consultation"}
      </Button>
    </form>
  );
}
