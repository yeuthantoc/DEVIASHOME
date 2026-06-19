import { useTranslations } from "next-intl";

export default function Insights() {
  const t = useTranslations("insights");
  const articles = [
    { cat: "cat1", title: "t1" },
    { cat: "cat2", title: "t2" },
    { cat: "cat3", title: "t3" }
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
          {articles.map(({ cat, title }) => (
            <article className="acard reveal" key={cat}>
              <div className="ph"></div>
              <div className="body">
                <span className="cat">{t(cat)}</span>
                <h3>{t(title)}</h3>
                <a className="read" href="#">
                  {t("read")}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
