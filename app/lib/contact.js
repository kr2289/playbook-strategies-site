export const CONTACT_TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? "katherine@katherinerowe.com";

export const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL ?? "Playbook Strategies <onboarding@resend.dev>";

export function isResendConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export function isSupabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

export const LEADS_TABLE = "playbook_leads";
