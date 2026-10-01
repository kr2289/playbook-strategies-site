import { SUBSTACK_URL } from "./site";

export async function subscribeToSubstack({ email, name }) {
  const body = new URLSearchParams({
    email,
    source: "subscribe_page",
  });

  const firstName = String(name ?? "")
    .trim()
    .split(/\s+/)[0];
  if (firstName) {
    body.set("first_name", firstName);
  }

  const response = await fetch(`${SUBSTACK_URL}/api/v1/free?nojs=true`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/x-www-form-urlencoded",
      Origin: SUBSTACK_URL,
      Referer: `${SUBSTACK_URL}/`,
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(`Substack subscribe failed (${response.status})`);
  }
}
