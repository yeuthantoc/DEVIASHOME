import { SITE_URL, CONTACT } from "@/lib/site";

// Structured data — Organization (with both VN addresses), mirroring the
// JSON-LD block from the legacy <head>. Helps Google understand the business.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DEVIAS HOME",
    description:
      "Vietnamese manufacturer and B2B exporter of food-safe wooden kitchenware (OEM/ODM).",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "183/14/5 Nguyen Van Khoi, Ward 8, Go Vap District",
        addressLocality: "Ho Chi Minh City",
        addressCountry: "VN"
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Nghi Lam Commune, Nghi Loc District",
        addressRegion: "Nghe An Province",
        addressCountry: "VN"
      }
    ],
    email: CONTACT.email,
    telephone: CONTACT.phone
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
