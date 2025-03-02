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
import info1 from "../../../../public/images/sites/info_1.png";
import info2 from "../../../../public/images/sites/info_2.png";

import SwiperCardContainer from "../shared/SwiperCardContainer";

const infoImages = [info1, info2];

const InformationalSection = () => {
  const t = useTranslations("InformationalReservation.InformationalSection");

  return (
    <MainContainer>
      <SwiperCardContainer>
        <div className="card-section">
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
