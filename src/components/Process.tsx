import { useTranslations } from "next-intl";
import { ClipboardIcon, PencilRulerIcon, ShieldCheckIcon, TruckIcon } from "./icons";

export default function Process() {
  const t = useTranslations("process");

  const steps = [
    { key: "step1", num: "01", Icon: ClipboardIcon },
    { key: "step2", num: "02", Icon: PencilRulerIcon },
    { key: "step3", num: "03", Icon: ShieldCheckIcon },
    { key: "step4", num: "04", Icon: TruckIcon }
  ] as const;

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
          {steps.map(({ key, num, Icon }) => (
            <div className="step reveal" key={key}>
              <div className="step-badge">
                <div className="step-icon-wrap">
                  <Icon />
                </div>
                <span className="step-num">{num}</span>
              </div>
              <div className="step-body">
                <h3>{t(`${key}_h`)}</h3>
                <p>{t(`${key}_p`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
