// Analytics helper — fires GA4 `generate_lead` + Meta Pixel `Lead`.
// Mirrors the legacy trackLead(source) exactly. Safe to call on the server
// (no-ops) and degrades gracefully if either tag failed to load.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackLead(source: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { source });
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", { content_name: source });
  }
}
