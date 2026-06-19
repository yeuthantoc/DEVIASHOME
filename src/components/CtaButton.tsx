"use client";

import { trackLead } from "@/lib/track";

type Props = {
  href: string;
  className?: string;
  /** When set, clicking fires trackLead(source) — GA4 + Pixel. */
  source?: string;
  children: React.ReactNode;
};

// Anchor CTA that fires lead tracking on click (replaces the legacy
// data-cta="..." attribute wiring). Same-page hash links keep smooth scroll.
export default function CtaButton({ href, className, source, children }: Props) {
  return (
    <a
      href={href}
      className={className}
      data-cta={source}
      onClick={source ? () => trackLead(source) : undefined}
    >
      {children}
    </a>
  );
}
