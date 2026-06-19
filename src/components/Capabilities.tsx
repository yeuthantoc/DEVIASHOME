import { useTranslations } from "next-intl";
import { DropIcon, FlaskIcon, GearIcon, BoxIcon } from "./icons";

export default function Capabilities() {
  const t = useTranslations("caps");

  const feats = [
    { key: "feat1", Icon: DropIcon },
    { key: "feat2", Icon: FlaskIcon },
    { key: "feat3", Icon: GearIcon },
    { key: "feat4", Icon: BoxIcon }
  ] as const;

  return (
    <section className="caps" id="caps">
      <div className="wrap">
        <div className="photo reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/factory.jpg" alt="DEVIAS HOME workshop" />
        </div>
        <div className="reveal">
          <span className="eyebrow">{t("eyebrow")}</span>
          <h2>{t("h2")}</h2>
          <p className="caps-body">{t("lead")}</p>

          {feats.map(({ key, Icon }) => (
            <div className="feat" key={key}>
              <div className="ic">
                <Icon />
              </div>
              <span>{t(key)}</span>
            </div>
          ))}

          <div className="cap-certs">
            <div>
              <span className="badge">ISO</span> ISO 9001
            </div>
            <div>
              <span className="badge">FSC</span> FSC
            </div>
            <div>
              <span className="badge">✓</span> <span>{t("foodtest")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
