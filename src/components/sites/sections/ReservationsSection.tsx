import { Box } from "@mui/material";
import { useTranslations } from "next-intl";
import reserve1 from "../../../../public/images/sites/reserve_1.png";
import reserve2 from "../../../../public/images/sites/reserve_2.png";
import ticket from "../../../../public/images/ticket.png";
import BadgesList from "../shared/BadgesList";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import MainContainer from "../shared/MainContainer";
import MainList from "../shared/MainList";
import MainSwiper from "../shared/MainSwiper";
import SwiperCardContainer from "../shared/SwiperCardContainer";

const items = [
  "reservationSection.feature1",
  "reservationSection.feature2",
  "reservationSection.feature3",
  "reservationSection.feature4",
  "reservationSection.feature5",
];

const badges = [
  "reservationSection.category1",
  "reservationSection.category2",
  "reservationSection.category3",
  "reservationSection.category4",
  "reservationSection.category5",
];

const images = [reserve1, reserve2];

const ReservationsSection = () => {
  const t = useTranslations("InformationalReservation");

  return (
    <MainContainer>
      <Box marginBottom="86px">
        <h2 className="section-header">{t("title")}</h2>
        <p>{t("subtitle")}</p>
      </Box>
      <SwiperCardContainer>
        <div className="card-section">
          <MainCard
            title={t("reservationSection.title")}
            description={t("reservationSection.description")}
            imageUrl={ticket}
          />
          <MainList items={items} />
          <BadgesList badges={badges} />
        </div>
        <MainSwiper images={images} key="swiper1" />
      </SwiperCardContainer>

      <MainButton />
    </MainContainer>
  );
};

export default ReservationsSection;
