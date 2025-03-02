import { Box } from "@mui/material";
import BadgesList from "../shared/BadgesList";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import MainContainer from "../shared/MainContainer";
import MainList from "../shared/MainList";
import MainSwiper from "../shared/MainSwiper";

import family from "../../../../public/images/family.png";

const items = [
  "NonProfitSection.feature1",
  "NonProfitSection.feature2",
  "NonProfitSection.feature3",
  "NonProfitSection.feature4",
  "NonProfitSection.feature5",
  "NonProfitSection.feature6",
];

const badges = [
  "NonProfitSection.category1",
  "NonProfitSection.category2",
  "NonProfitSection.category3",
  "NonProfitSection.category4",
  "NonProfitSection.category5",
];

import { useTranslations } from "next-intl";
import nonProfit1 from "../../../../public/images/sites/non_profit_1.png";
import nonProfit2 from "../../../../public/images/sites/non_profit_2.png";
import nonProfit3 from "../../../../public/images/sites/non_profit_3.png";

import SwiperCardContainer2 from "../shared/SwiperCardContainer2";

const images = [nonProfit1, nonProfit2, nonProfit3];

const NonProfitSection = () => {
  const t = useTranslations("InformationalReservation.NonProfitSection");
  return (
    <Box
      sx={{
        background: "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
      }}
    >
      <MainContainer>
        <SwiperCardContainer2>
          <MainSwiper images={images} key="swiper4" />

          <div className="section card-section">
            <MainCard
              title={t("title")}
              description={t("description")}
              imageUrl={family}
            />
            <MainList items={items} />
            <BadgesList badges={badges} />
          </div>
        </SwiperCardContainer2>

        <MainButton />
      </MainContainer>
    </Box>
  );
};

export default NonProfitSection;
