import Social from "@/components/tools/social/social";
import ClinicsSection from "@/components/sites/sections/ClinicsSection";
import HeroSection from "@/components/sites/sections/HeroSection";
import InformationalSection from "@/components/sites/sections/InformationalSection";
import NonProfitSection from "@/components/sites/sections/NonProfitSection";
import PersonalBookingSection from "@/components/sites/sections/PersonalBookingSection";
import ProceduresSection from "@/components/sites/sections/ProceduresSection";
import ReservationsSection from "@/components/sites/sections/ReservationsSection";
import style from "@/components/sites/styles/sitesComponent.module.scss";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "InformationalReservation.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function SitesPage() {
  return (
    <div className={style.sitesComponent}>
      <Social />

      <HeroSection />

      <ProceduresSection />

      <ReservationsSection />

      <ClinicsSection />

      <PersonalBookingSection />

      <NonProfitSection />

      <InformationalSection />
    </div>
  );
}
