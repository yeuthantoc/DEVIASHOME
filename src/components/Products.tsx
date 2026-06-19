import { useTranslations } from "next-intl";
import { BoardIcon, BowlIcon, TrayIcon, UtensilIcon, StarIcon } from "./icons";

export default function Products() {
  const t = useTranslations("products");

  const cards = [
    { key: "cat_boards", Icon: BoardIcon },
    { key: "cat_bowls", Icon: BowlIcon },
    { key: "cat_trays", Icon: TrayIcon },
    { key: "cat_utensils", Icon: UtensilIcon }
  ] as const;

  return (
    <section className="products" id="products">
      <div className="section-head reveal">
        <h2>{t("h2")}</h2>
        <p>{t("sub")}</p>
      </div>
      <div className="top-link reveal">
        <a href="#contact">
          <span>{t("viewall")}</span> →
        </a>
      </div>
      <div className="wrap">
        <div className="grid4">
          {cards.map(({ key, Icon }) => (
            <div className="pcard reveal" key={key}>
              <div className="ph">
                <Icon />
              </div>
              <h3>{t(key)}</h3>
              <span className="tag">
                <StarIcon />
                <span>{t("oem_tag")}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
