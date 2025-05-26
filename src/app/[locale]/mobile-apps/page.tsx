import FeaturesSection from "@/components/mobile/featuresSection";
import Hero from "@/components/mobile/Hero";
import Work from "@/components/mobile/work";
import Social from "@/components/tools/social/social";

import style from "@/components/mobile/styles/mobileComponent.module.scss";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,

}: {
  params : { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "MobileApps.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}
export default function Main() {
  return (
    <div className={style.mobileComponent}>
      <Social />

      <Hero />

      <Work />

      <FeaturesSection />
    </div>
  );
}
