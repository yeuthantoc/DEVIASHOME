import { useTranslations } from "next-intl";
import { StarIcon } from "./icons";

export default function Products() {
  const t = useTranslations("products");

  const cards = [
    { key: "cat_boards",   img: "/images/prod-boards.jpg" },
    { key: "cat_bowls",    img: "/images/prod-bowls.jpg" },
    { key: "cat_trays",    img: "/images/prod-trays.jpg" },
    { key: "cat_utensils", img: "/images/prod-utensils.jpg" }
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
          {cards.map(({ key, img }) => (
            <div className="pcard reveal" key={key}>
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={t(key)} />
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
