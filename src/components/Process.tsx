import { useTranslations } from "next-intl";

export default function Process() {
  const t = useTranslations("process");
  const steps = ["step1", "step2", "step3", "step4"] as const;

  return (
    <section className="process" id="process">
      <div className="section-head reveal">
        <span className="eyebrow" style={{ display: "block" }}>
          {t("eyebrow")}
        </span>
        <h2>{t("h2")}</h2>
        <p>{t("sub")}</p>
      </div>
      <div className="wrap">
        <div className="steps">
          {steps.map((s) => (
            <div className="step reveal" key={s}>
              <h3>{t(`${s}_h`)}</h3>
              <p>{t(`${s}_p`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
