"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <p>Thank you — your enquiry has been sent. We&apos;ll be in touch shortly.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label className="form-field">
          <span>Name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="form-field">
          <span>Email</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>
      <div className="form-row">
        <label className="form-field">
          <span>Company</span>
          <input type="text" name="company" autoComplete="organization" />
        </label>
        <label className="form-field">
          <span>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>
      <label className="form-field">
        <span>Message</span>
        <textarea name="message" rows={5} required />
      </label>

      {/* Honeypot field for basic spam protection — hidden from users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      />

      {status === "error" && (
        <p className="form-error" role="alert">
          {error}{" "}
          <a href="mailto:info@exceltradeint.com">Or email us directly</a>.
        </p>
      )}

      <button type="submit" className="btn btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
