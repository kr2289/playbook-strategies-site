import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import {
  CONTACT_TO_EMAIL,
  isResendConfigured,
  isSupabaseConfigured,
  LEADS_TABLE,
  RESEND_FROM_EMAIL,
} from "../../lib/contact";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildEmailText({ name, email, company, interest, message }) {
  return [
    "New inquiry from Playbook Strategies",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    `Interest: ${interest}`,
    "",
    "Message:",
    message,
  ]
    .filter(Boolean)
    .join("\n");
}

async function saveLead({ name, email, company, interest, message }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const { error } = await supabase.from(LEADS_TABLE).insert({
    name,
    email,
    company: company || null,
    interest,
    message,
    source: "website",
  });

  if (error) {
    throw new Error(error.message);
  }
}

async function sendLeadEmail({ name, email, company, interest, message }) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const subject = company
    ? `New lead: ${name} · ${company} · ${interest}`
    : `New lead: ${name} · ${interest}`;

  const { error } = await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject,
    text: buildEmailText({ name, email, company, interest, message }),
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function POST(request) {
  if (!isSupabaseConfigured()) {
    return Response.json(
      { error: "Contact form is not configured yet." },
      { status: 503 }
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const interest = String(body.interest ?? "").trim();
  const message = String(body.message ?? "").trim();
  const website = String(body.website ?? "").trim();

  if (website) {
    return Response.json({ ok: true });
  }

  if (!name || !email || !interest || !message) {
    return Response.json(
      { error: "Name, email, interest, and message are required." },
      { status: 400 }
    );
  }

  const validInterests = ["Assessment", "Project", "Fractional advisory"];
  if (!validInterests.includes(interest)) {
    return Response.json({ error: "Select a valid interest." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (
    name.length > 120 ||
    email.length > 254 ||
    company.length > 160 ||
    interest.length > 80 ||
    message.length > 4000
  ) {
    return Response.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  const payload = { name, email, company, interest, message };

  try {
    await saveLead(payload);
  } catch {
    return Response.json(
      { error: "We couldn't send your message. Please email directly." },
      { status: 502 }
    );
  }

  if (isResendConfigured()) {
    try {
      await sendLeadEmail(payload);
    } catch {
      // Lead is saved in Supabase; don't fail the visitor if email notification fails.
    }
  }

  return Response.json({ ok: true });
}
