import { NextResponse } from "next/server";

// Receives the lead form payload and forwards it to the n8n webhook.
// The webhook URL is server-only (never exposed to the client).
export async function POST(request: Request) {
  const webhook = process.env.N8N_WEBHOOK_URL;

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // If no webhook is configured yet, accept the lead so the UI still works
  // in local/dev, but make it visible in the server logs.
  if (!webhook) {
    console.warn("[lead] N8N_WEBHOOK_URL is not set — lead not forwarded:", payload);
    return NextResponse.json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...(payload as Record<string, unknown>),
        source: "deviashome-website",
        receivedAt: new Date().toISOString()
      })
    });

    if (!res.ok) {
      console.error("[lead] webhook responded with", res.status);
      return NextResponse.json({ ok: false, error: "Upstream error" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, forwarded: true });
  } catch (err) {
    console.error("[lead] failed to reach webhook:", err);
    return NextResponse.json({ ok: false, error: "Network error" }, { status: 502 });
  }
}
