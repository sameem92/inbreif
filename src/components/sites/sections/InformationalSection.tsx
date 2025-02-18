import building from "../../../../public/images/building.png";

import BadgesList from "../shared/BadgesList";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import MainContainer from "../shared/MainContainer";
import MainSwiper from "../shared/MainSwiper";

const badges = [
  "InformationalSection.category1",
  "InformationalSection.category2",
  "InformationalSection.category3",
  "InformationalSection.category4",
  "InformationalSection.category5",
  "InformationalSection.category6",
];

import { useTranslations } from "next-intl";
import caro from "../../../../public/images/caro.png";
import SwiperCardContainer from "../shared/SwiperCardContainer";

const infoImages = [caro, caro, caro, caro, caro];

const InformationalSection = () => {
  const t = useTranslations("InformationalReservation.InformationalSection");

  return (
    <MainContainer>
      <SwiperCardContainer>
        <div className="section card-section">
          <MainCard
            title={t("title")}
            description={t("description")}
            imageUrl={building}
          />
          <BadgesList badges={badges} />
        </div>

        <MainSwiper images={infoImages} key="swiper5" />
      </SwiperCardContainer>

      <MainButton />
    </MainContainer>
  );
};

export default InformationalSection;
