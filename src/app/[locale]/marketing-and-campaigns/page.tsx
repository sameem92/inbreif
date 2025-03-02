import Design from "@/components/shop/Design";
import Hero from "@/components/shop/Hero";
import PackagesSection from "@/components/shop/packagesSection";
import SeoSection from "@/components/shop/SeoSection";
import Social from "@/components/tools/social/social";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "MarketingCampaigns.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Main() {
  return (
    <>
      <Social />
      <Hero />
      <PackagesSection />
      <SeoSection />
      <Design />
    </>
  );
}
