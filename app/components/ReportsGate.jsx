"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SUBSTACK_URL } from "../lib/site";

const INITIAL_FORM = {
  name: "",
  email: "",
  website: "",
  newsletter: true,
};

export default function ReportsGate({ slug }) {
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
      const response = await fetch("/api/reports/unlock", {
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
          method: "reports_unlock",
          content_id: slug,
        });
        if (form.newsletter) {
          window.gtag("event", "sign_up", { method: "reports_unlock" });
        }
      }

      const downloadUrl = data.download
        ? `${data.download}?download=1`
        : `/api/reports/file/${slug}?download=1`;
      const fileResponse = await fetch(downloadUrl);
      if (fileResponse.ok) {
        const blob = await fileResponse.blob();
        const objectUrl = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = objectUrl;
        link.download = `${slug}.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(objectUrl);
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
        Leave your name and email to download this report. Check the box if you
        also want the weekly newsletter.
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
            Subscribe me to the weekly newsletter on{" "}
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
          {status === "submitting" ? "Unlocking..." : "Download the PDF"}
        </button>
      </form>
    </div>
  );
}
