import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SITE_URL } from "@/lib/site";
import { locales } from "@/i18n/config";
import { articles } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import RevealInit from "@/components/RevealInit";
import { Link } from "@/i18n/routing";

const SLUGS = [
  "food-safety-standards-wooden-kitchenware",
  "oem-vs-odm-wooden-kitchenware",
  "acacia-wood-oil-finish-durability"
];

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = articles[locale]?.[slug];
  if (!article) return {};
  const t = await getTranslations({ locale, namespace: "insights" });
  return {
    metadataBase: new URL(SITE_URL),
    title: `${article.title} — DEVIAS HOME`,
    description: article.excerpt,
    alternates: {
      canonical: `/${locale}/insights/${slug}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}/insights/${slug}`]))
    },
    openGraph: {
      title: `${article.title} — DEVIAS HOME`,
      description: article.excerpt,
      url: `/${locale}/insights/${slug}`,
      type: "article"
    }
  };
}

export default async function ArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = articles[locale]?.[slug];
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "insights" });

  return (
    <>
      <Header />
      <main>
        {/* Article header */}
        <section className="article-hero">
          <div className="wrap article-hero-inner">
            <Link href="/insights" className="article-back">← {t("eyebrow")}</Link>
            <span className="article-cat">{article.category}</span>
            <h1>{article.title}</h1>
            <p className="article-excerpt">{article.excerpt}</p>
            <span className="article-meta">{article.readTime} · DEVIAS HOME</span>
          </div>
        </section>

        {/* Article body */}
        <article className="article-body wrap">
          {article.sections.map((section, i) => (
            <div key={i} className="article-section reveal">
              <h2>{section.h2}</h2>
              {section.body.split("\n\n").map((para, j) => (
                <p key={j}>{para}</p>
              ))}
            </div>
          ))}

          {/* CTA inline */}
          <div className="article-cta reveal">
            <p>{t("sub")}</p>
            <a href="#contact" className="btn btn-primary">{t("read").replace("→", "").trim()}</a>
          </div>
        </article>

        <LeadForm />
      </main>
      <Footer />
      <RevealInit />
    </>
  );
}
