import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE_URL } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import RevealInit from "@/components/RevealInit";
import { ShieldCheckIcon, StarIcon, TruckIcon, GearIcon } from "@/components/icons";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    metadataBase: new URL(SITE_URL),
    title: t("meta_title"),
    description: t("meta_desc"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: "/en/about", ko: "/ko/about", vi: "/vi/about", "x-default": "/en/about" }
    },
    openGraph: { title: t("meta_title"), description: t("meta_desc"), url: `/${locale}/about` }
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  const factoryDetails = ["factory_detail1", "factory_detail2", "factory_detail3", "factory_detail4"] as const;

  const whyItems = [
    { key: "why1", Icon: StarIcon },
    { key: "why2", Icon: GearIcon },
    { key: "why3", Icon: TruckIcon },
    { key: "why4", Icon: ShieldCheckIcon }
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
          </div>
        </section>

        {/* Mission */}
        <section style={{ background: "#fff", padding: "80px 0" }}>
          <div className="wrap about-mission reveal">
            <div>
              <h2>{t("mission_h")}</h2>
              <p style={{ color: "var(--charcoal-soft)", fontSize: "1.1rem", lineHeight: "1.75", marginTop: "18px" }}>
                {t("mission_p")}
              </p>
            </div>
            <div className="about-mission-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/factory.jpg" alt="DEVIAS HOME factory" />
            </div>
          </div>
        </section>

        {/* Factory */}
        <section style={{ background: "var(--cream)", padding: "80px 0" }}>
          <div className="wrap">
            <div className="section-head reveal">
              <h2>{t("factory_h")}</h2>
              <p>{t("factory_p")}</p>
            </div>
            <div className="about-factory-details reveal">
              {factoryDetails.map((d) => (
                <div className="about-fact" key={d}>
                  <span className="badge" style={{ background: "var(--leaf)", border: "none", color: "#fff", width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".7rem" }}>✓</span>
                  <span>{t(d)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Korea trust */}
        <section style={{ background: "var(--charcoal)", color: "#fff", padding: "80px 0" }}>
          <div className="wrap about-korea reveal">
            <div>
              <h2 style={{ color: "#fff" }}>{t("korea_h")}</h2>
              <p style={{ color: "rgba(255,255,255,.7)", marginTop: "18px", fontSize: "1.05rem", lineHeight: "1.75" }}>
                {t("korea_p")}
              </p>
            </div>
            <div className="about-korea-certs">
              {certs.map((c) => (
                <div className="oem-cert-item" key={c} style={{ color: "rgba(255,255,255,.85)", borderColor: "rgba(255,255,255,.15)" }}>
                  <span className="badge" style={{ background: "var(--leaf)", border: "none", color: "#fff" }}>✓</span>
                  {t(c)}
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

        {/* CTA */}
        <section style={{ background: "var(--cream)", padding: "72px 0", textAlign: "center" }}>
          <div className="wrap">
            <h2 className="reveal">{t("cta_h")}</h2>
            <p className="reveal" style={{ color: "var(--charcoal-soft)", maxWidth: "520px", margin: "16px auto 32px" }}>{t("cta_p")}</p>
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
