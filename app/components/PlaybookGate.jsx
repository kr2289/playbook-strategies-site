"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SUBSTACK_URL } from "../lib/site";

const INITIAL_FORM = {
  name: "",
  email: "",
  company: "",
  website: "",
  newsletter: true,
};

export default function PlaybookGate({ slug }) {
  const router = useRouter();
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
      const response = await fetch("/api/playbook/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, slug }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "generate_lead", {
          method: "playbook_unlock",
          content_id: slug,
        });
        if (form.newsletter) {
          window.gtag("event", "sign_up", { method: "playbook_unlock" });
        }
      }

      setStatus("success");
      router.refresh();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="playbook-gate">
      <p className="playbook-gate-lead">
        Leave your name and email to open this piece. One unlock opens the full
        Playbook library.
      </p>
      <form className="playbook-gate-form" onSubmit={handleSubmit} noValidate>
        <div className="playbook-gate-row">
          <label className="playbook-field">
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
          <label className="playbook-field">
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
        <label className="playbook-field">
          <span>Company (optional)</span>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={updateField("company")}
          />
        </label>
        <label className="playbook-check">
          <input
            type="checkbox"
            name="newsletter"
            checked={form.newsletter}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                newsletter: event.target.checked,
              }))
            }
          />
          <span>
            Also send me the weekly newsletter on{" "}
            <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
              Substack
            </a>
          </span>
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
          <p className="playbook-gate-error" role="alert">
            {errorMessage}
          </p>
        )}
        <button
          className="btn"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Unlocking..." : "Unlock the piece"}
        </button>
      </form>
    </div>
  );
}
