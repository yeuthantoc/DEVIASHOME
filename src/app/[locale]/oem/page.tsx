import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE_URL } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import RevealInit from "@/components/RevealInit";
import { ClipboardIcon, PencilRulerIcon, StarIcon, ShieldCheckIcon, TruckIcon } from "@/components/icons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "oem" });
  return {
    metadataBase: new URL(SITE_URL),
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: {
      canonical: `/${locale}/oem`,
      languages: { en: "/en/oem", ko: "/ko/oem", vi: "/vi/oem", "x-default": "/en/oem" }
    },
    openGraph: { title: t("meta_title"), description: t("meta_desc"), url: `/${locale}/oem` }
  };
}

export default async function OemPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "oem" });

  const services = [
    { key: "s1", Icon: ClipboardIcon },
    { key: "s2", Icon: PencilRulerIcon },
    { key: "s3", Icon: StarIcon }
  ] as const;

  const moqItems = [
    { label: t("moq_sample"), value: t("moq_sample_v") },
    { label: t("moq_min"),    value: t("moq_min_v") },
    { label: t("moq_prod"),   value: t("moq_prod_v") },
    { label: t("moq_ship"),   value: t("moq_ship_v") }
  ];

  const whyItems = [
    { key: "why1", Icon: StarIcon },
    { key: "why2", Icon: PencilRulerIcon },
    { key: "why3", Icon: ShieldCheckIcon },
    { key: "why4", Icon: TruckIcon }
  ] as const;

  const certs = ["cert1", "cert2", "cert3", "cert4"] as const;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="page-hero">
          <div className="wrap">
            <span className="eyebrow" style={{ color: "var(--sage)" }}>{t("eyebrow")}</span>
            <h1>{t("h1")}</h1>
            <p className="page-hero-sub">{t("sub")}</p>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: "8px" }}>{t("cta")}</a>
          </div>
        </section>

        {/* Services */}
        <section style={{ background: "#fff", padding: "80px 0" }}>
          <div className="wrap">
            <div className="section-head reveal" style={{ marginBottom: "52px" }}>
              <h2>{t("services_h")}</h2>
            </div>
            <div className="grid3 oem-services">
              {services.map(({ key, Icon }) => (
                <div className="oem-service-card reveal" key={key}>
                  <div className="oem-icon-wrap"><Icon /></div>
                  <h3>{t(`${key}_h`)}</h3>
                  <p>{t(`${key}_p`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOQ table */}
        <section style={{ background: "var(--cream)", padding: "80px 0" }}>
          <div className="wrap">
            <div className="section-head reveal">
              <h2>{t("moq_h")}</h2>
            </div>
            <div className="moq-grid reveal">
              {moqItems.map(({ label, value }) => (
                <div className="moq-item" key={label}>
                  <span className="moq-label">{label}</span>
                  <span className="moq-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Vietnam */}
        <section style={{ background: "#fff", padding: "80px 0" }}>
          <div className="wrap">
            <div className="section-head reveal">
              <h2>{t("why_h")}</h2>
            </div>
            <div className="grid4 oem-why-grid">
              {whyItems.map(({ key, Icon }) => (
                <div className="oem-why-card reveal" key={key}>
                  <div className="oem-why-icon"><Icon /></div>
                  <h3>{t(`${key}_h`)}</h3>
                  <p>{t(`${key}_p`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section style={{ background: "var(--charcoal)", padding: "64px 0" }}>
          <div className="wrap">
            <h2 style={{ color: "#fff", textAlign: "center", marginBottom: "36px" }}>{t("cert_h")}</h2>
            <div className="oem-certs reveal">
              {certs.map((c) => (
                <div className="oem-cert-item" key={c}>
                  <span className="badge" style={{ background: "var(--leaf)", border: "none", color: "#fff" }}>✓</span>
                  {t(c)}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section style={{ background: "var(--cream)", padding: "72px 0", textAlign: "center" }}>
          <div className="wrap">
            <h2 className="reveal">{t("cta2_h")}</h2>
            <p className="reveal" style={{ color: "var(--charcoal-soft)", maxWidth: "560px", margin: "16px auto 32px" }}>{t("cta2_p")}</p>
            <a href="#contact" className="btn btn-primary reveal">{t("cta")}</a>
          </div>
        </section>

        <LeadForm />
      </main>
      <Footer />
      <RevealInit />
    </>
  );
}
