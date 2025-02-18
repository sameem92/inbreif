import ticket from "../../../../public/images/ticket.png";

import BadgesList from "../shared/BadgesList";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import MainContainer from "../shared/MainContainer";
import MainList from "../shared/MainList";
import MainSwiper from "../shared/MainSwiper";

const items = [
  "PersonalBookingSection.feature1",
  "PersonalBookingSection.feature2",
  "PersonalBookingSection.feature3",
  "PersonalBookingSection.feature4",
  "PersonalBookingSection.feature5",
  "PersonalBookingSection.feature6",
];

const badges = [
  "PersonalBookingSection.category1",
  "PersonalBookingSection.category2",
  "PersonalBookingSection.category3",
  "PersonalBookingSection.category4",
  "PersonalBookingSection.category5",
  "PersonalBookingSection.category6",
];

import { useTranslations } from "next-intl";
import caro from "../../../../public/images/caro.png";
import SwiperCardContainer from "../shared/SwiperCardContainer";

const images = [caro, caro, caro, caro, caro];

const PersonalBookingSection = () => {
  const t = useTranslations("InformationalReservation.PersonalBookingSection");
  return (
    <MainContainer>
      <SwiperCardContainer>
        <div className="section card-section">
          <MainCard
            title={t("title")}
            description={t("description")}
            imageUrl={ticket}
          />
          <MainList items={items} />
          <BadgesList badges={badges} />
        </div>

        <MainSwiper images={images} key="swiper3" />
      </SwiperCardContainer>
      <MainButton />
    </MainContainer>
  );
};

export default PersonalBookingSection;
