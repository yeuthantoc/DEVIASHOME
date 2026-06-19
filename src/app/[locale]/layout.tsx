import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Playfair_Display,
  Inter,
  Noto_Serif_KR,
  Noto_Sans_KR
} from "next/font/google";
import { routing } from "@/i18n/routing";
import { locales } from "@/i18n/config";
import { SITE_URL } from "@/lib/site";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import "../globals.css";

// Display: Playfair Display (Latin/Vietnamese) + Noto Serif KR (Korean)
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
  display: "swap"
});
// Body: Inter (Latin/Vietnamese) + Noto Sans KR (Korean)
const inter = Inter({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap"
});
// Korean Noto fonts: no `subsets` + preload:false → full glyph coverage,
// loaded only when Korean text is shown (avoids preloading large CJK files).
const notoSerifKr = Noto_Serif_KR({
  weight: ["500", "600", "700"],
  variable: "--font-noto-serif-kr",
  display: "swap",
  preload: false
});
const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
  preload: false
});

const fontVars = [
  playfair.variable,
  inter.variable,
  notoSerifKr.variable,
  notoSansKr.variable
].join(" ");

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ko: "/ko",
        vi: "/vi",
        "x-default": "/en"
      }
    },
    openGraph: {
      type: "website",
      siteName: "DEVIAS HOME",
      url: `/${locale}`,
      title,
      description,
      images: ["/og-image.jpg"]
    }
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} className={fontVars}>
      <body suppressHydrationWarning>
        <JsonLd />
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
