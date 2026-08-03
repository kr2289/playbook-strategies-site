"use client";

import { useState } from "react";

const INTEREST_OPTIONS = [
  "Assessment",
  "Project",
  "Fractional advisory",
];

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  interest: "",
  message: "",
  website: "",
};

export default function ContactForm({ fallbackEmail }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setForm(INITIAL_FORM);
      setStatus("success");

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", { method: "contact_form" });
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form-success" role="status">
        <p className="contact-form-success-title">Message sent.</p>
        <p>
          Thanks for reaching out — I&apos;ll get back to you within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-row">
        <label className="contact-field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={updateField("name")}
          />
        </label>
        <label className="contact-field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={updateField("email")}
          />
        </label>
      </div>

      <label className="contact-field">
        <span>Company</span>
        <input
          type="text"
          name="company"
          autoComplete="organization"
          value={form.company}
          onChange={updateField("company")}
        />
      </label>

      <label className="contact-field">
        <span>I&apos;m interested in</span>
        <select
          name="interest"
          required
          value={form.interest}
          onChange={updateField("interest")}
        >
          <option value="" disabled>
            Select one
          </option>
          {INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="contact-field">
        <span>Tell me more</span>
        <textarea
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={updateField("message")}
        />
      </label>

      <label className="contact-honeypot" aria-hidden="true">
        <span>Website</span>
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={updateField("website")}
        />
      </label>

      {status === "error" && (
        <p className="contact-form-error" role="alert">
          {errorMessage} You can also email{" "}
          <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>.
        </p>
      )}

      <button
        className="btn light contact-form-submit"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
