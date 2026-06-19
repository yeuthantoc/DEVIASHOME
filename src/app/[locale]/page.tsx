import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Capabilities from "@/components/Capabilities";
import Process from "@/components/Process";
import Insights from "@/components/Insights";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Capabilities />
        <Process />
        <Insights />
        <LeadForm />
      </main>
      <Footer />
      <RevealInit />
    </>
  );
}
