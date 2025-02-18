"use client";

import { Box } from "@mui/material";
import BadgesList from "../shared/BadgesList";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import MainContainer from "../shared/MainContainer";
import MainList from "../shared/MainList";
import MainSwiper from "../shared/MainSwiper";

import stethoscope from "../../../../public/images/stethoscope.png";

const items = [
  "clinicalSection.feature1",
  "clinicalSection.feature2",
  "clinicalSection.feature3",
  "clinicalSection.feature4",
  "clinicalSection.feature5",
];

const badges = [
  "clinicalSection.category1",
  "clinicalSection.category2",
  "clinicalSection.category3",
  "clinicalSection.category4",
];

import { useTranslations } from "next-intl";
import caro from "../../../../public/images/caro.png";
import SwiperCardContainer2 from "../shared/SwiperCardContainer2";

const images = [caro, caro, caro, caro, caro];

const ClinicsSection = () => {
  const t = useTranslations("InformationalReservation.clinicalSection");
  return (
    <Box
      sx={{
        background: "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
      }}
    >
      <MainContainer>
        <SwiperCardContainer2>
          <MainSwiper images={images} />

          <div className="section card-section">
            <MainCard
              title={t("title")}
              description={t("description")}
              imageUrl={stethoscope}
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

export default ClinicsSection;
