import { useTranslations } from "next-intl";
import CtaButton from "./CtaButton";
import TrustBar from "./TrustBar";

export default function Hero() {
  const t = useTranslations("hero");
  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <h1>{t("h1")}</h1>
        <p>{t("sub")}</p>
        <div className="hero-cta">
          <CtaButton href="#contact" className="btn btn-primary" source="hero_quote">
            {t("cta1")}
          </CtaButton>
          <a href="#caps" className="btn btn-ghost">
            {t("cta2")}
          </a>
        </div>
      </div>
      <TrustBar />
    </section>
  );
}
