import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Insights() {
  const t = useTranslations("insights");
  const articles = [
    { cat: "cat1", title: "t1", img: "/images/article-trends.jpg",   slug: t("slug1") },
    { cat: "cat2", title: "t2", img: "/images/article-sourcing.jpg", slug: t("slug2") },
    { cat: "cat3", title: "t3", img: "/images/article-packaging.jpg",slug: t("slug3") }
  ] as const;

  return (
    <section className="insights" id="insights">
      <div className="section-head reveal">
        <span className="eyebrow" style={{ display: "block" }}>
          {t("eyebrow")}
        </span>
        <h2>{t("h2")}</h2>
        <p>{t("sub")}</p>
      </div>
      <div className="wrap">
        <div className="grid3">
          {articles.map(({ cat, title, img, slug }) => (
            <article className="acard reveal" key={cat}>
              <div className="ph">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={t(title)} />
              </div>
              <div className="body">
                <span className="cat">{t(cat)}</span>
                <h3>{t(title)}</h3>
                <Link className="read" href={`/insights/${slug}`}>
                  {t("read")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
