import Social from "../tools/social/social";
import ClinicsSection from "./sections/ClinicsSection";
import HeroSection from "./sections/HeroSection";
import InformationalSection from "./sections/InformationalSection";
import NonProfitSection from "./sections/NonProfitSection";
import PersonalBookingSection from "./sections/PersonalBookingSection";
import ProceduresSection from "./sections/ProceduresSection";
import ReservationsSection from "./sections/ReservationsSection";
import style from "./styles/sitesComponent.module.scss";

const SitesComponent = () => {
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
};

export default SitesComponent;
