import { NextResponse } from "next/server";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "info@exceltradeint.com";
// Resend's shared sender works with no domain setup; override once a domain is verified.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "ETIL Website <onboarding@resend.dev>";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const company = String(payload.company || "").trim();
  const phone = String(payload.phone || "").trim();
  const message = String(payload.message || "").trim();
  const honeypot = String(payload.website || "").trim();

  // Bots fill the hidden honeypot field; humans never see it. Pretend success.
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please provide your name, email, and a message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured yet — surface a clear message rather than silently dropping it.
    console.error("RESEND_API_KEY is not set; contact form submission was not delivered.");
    return NextResponse.json(
      { error: "Our messaging service is not configured yet. Please email us directly." },
      { status: 503 },
    );
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
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend API error:", res.status, detail);
      return NextResponse.json(
        { error: "We couldn't send your message. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please email us directly." },
      { status: 502 },
    );
  }
}
