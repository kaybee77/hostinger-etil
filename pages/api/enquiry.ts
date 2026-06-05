import type { NextApiRequest, NextApiResponse } from "next";
import { contactConfig, isValidEmail } from "../../lib/contactConfig";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  const payload = req.body ?? {};
  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const company = String(payload.company || "").trim();
  const phone = String(payload.phone || "").trim();
  const message = String(payload.message || "").trim();
  const honeypot = String(payload.website || "").trim();

  if (honeypot) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Please provide your name, email, and a message." });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const apiKey = contactConfig.resendApiKey;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact form submission was not delivered.");
    return res.status(503).json({
      error: "Our messaging service is not configured yet. Please email us directly.",
    });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    phone ? `Phone: ${phone}` : null,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: contactConfig.fromEmail,
        to: [contactConfig.toEmail],
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        text,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("Resend API error:", response.status, detail);
      return res.status(502).json({ error: "We couldn't send your message. Please email us directly." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(502).json({ error: "We couldn't send your message. Please email us directly." });
  }
}
