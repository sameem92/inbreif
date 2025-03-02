import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "ECommerce.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

import style from "@/components/stores/styles/storesComponent.module.scss";

import HeroSection from "@/components/stores/sections/HeroSection";
import ServicesSection from "@/components/stores/sections/servicesSection";
import TemplatesSection from "@/components/stores/sections/templatesSection";
import FeaturesSection from "@/components/stores/sections/featuresSection";
import DeliverySection from "@/components/stores/sections/deliverySection";
import PaymentSection from "@/components/stores/sections/paymentSection";
import ExpansionSection from "@/components/stores/sections/ExpansionSection";
import TopServicesSection from "@/components/stores/sections/TopServicesSection";
import MainFeaturesSection from "@/components/stores/sections/mainFeaturesSection";
import PackagesSection from "@/components/stores/sections/PackagesSection";
import Social from "@/components/tools/social/social";

export default function StoresPage() {
  return (
    <div className={style.storesComponent}>
      <Social />

      <HeroSection />

      <MainFeaturesSection />

      <PackagesSection />

      <ServicesSection />

      <TemplatesSection />

      <FeaturesSection />

      <DeliverySection />

      <PaymentSection />

      <ExpansionSection />

      <TopServicesSection />
    </div>
  );
}
