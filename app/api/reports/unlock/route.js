import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { Resend } from "resend";
import {
  createReportsToken,
  reportsCookieOptions,
} from "../../../lib/reports-access";
import { getReport } from "../../../lib/reports";
import { subscribeToSubstack } from "../../../lib/substack";
import {
  CONTACT_TO_EMAIL,
  isResendConfigured,
  isSupabaseConfigured,
  LEADS_TABLE,
  RESEND_FROM_EMAIL,
} from "../../../lib/contact";

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function newsletterLine(newsletter, newsletterStatus) {
  if (!newsletter) return "Newsletter: skipped";
  if (newsletterStatus === "subscribed") {
    return "Newsletter: opted in · added to Substack";
  }
  return "Newsletter: opted in · add to Substack if they are not already on the list";
}

async function saveUnlockLead({ name, email, slug, title, newsletter }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );

  const message = newsletter
    ? `Unlocked Report: ${title} · Newsletter opt-in`
    : `Unlocked Report: ${title}`;

  const payload = {
    name,
    email,
    company: null,
    interest: "Reports",
    message,
    source: `reports:${slug}`,
    newsletter_opt_in: newsletter,
  };

  let { error } = await supabase.from(LEADS_TABLE).insert(payload);

  if (error && /newsletter_opt_in/.test(error.message)) {
    delete payload.newsletter_opt_in;
    ({ error } = await supabase.from(LEADS_TABLE).insert(payload));
  }

  if (error) {
    throw new Error(error.message);
  }
}

async function sendUnlockEmail({
  name,
  email,
  title,
  newsletter,
  newsletterStatus,
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const subject = `Report download: ${name}`;

  const { error } = await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: email,
    subject,
    text: [
      "Someone unlocked a Playbook report",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Report: ${title}`,
      newsletterLine(newsletter, newsletterStatus),
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const slug = String(body.slug ?? "").trim();
  const website = String(body.website ?? "").trim();
  const newsletter = Boolean(body.newsletter);

  if (website) {
    return Response.json({ ok: true });
  }

  const report = getReport(slug);
  if (!report) {
    return Response.json({ error: "Choose a report." }, { status: 400 });
  }

  if (!name || !email) {
    return Response.json(
      { error: "Name and email are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  if (name.length > 120 || email.length > 254) {
    return Response.json({ error: "One or more fields are too long." }, { status: 400 });
  }

  let newsletterStatus = "skipped";
  if (newsletter) {
    try {
      await subscribeToSubstack({ email, name });
      newsletterStatus = "subscribed";
    } catch {
      newsletterStatus = "pending";
    }
  }

  if (isSupabaseConfigured()) {
    try {
      await saveUnlockLead({
        name,
        email,
        slug: report.slug,
        title: report.title,
        newsletter,
      });
    } catch {
      return Response.json(
        { error: "We couldn't unlock this just now. Please try again." },
        { status: 502 }
      );
    }

    if (isResendConfigured()) {
      try {
        await sendUnlockEmail({
          name,
          email,
          title: report.title,
          newsletter,
          newsletterStatus,
        });
      } catch {
        // Lead is saved; don't block the visitor if the alert email fails.
      }
    }
  }

  cookies().set({
    ...reportsCookieOptions(),
    value: createReportsToken(),
  });

  return Response.json({ ok: true, download: `/api/reports/file/${report.slug}` });
}
