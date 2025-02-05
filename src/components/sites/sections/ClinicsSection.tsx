"use client";

import { Box, Container } from "@mui/material";
import BadgesList from "../shared/BadgesList";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import MainContainer from "../shared/MainContainer";
import MainList from "../shared/MainList";
import MainSwiper from "../shared/MainSwiper";

import stethoscope from "../../../../public/images/stethoscope.png";

const items = [
  "حجز مواعيد مرن وسهل",
  "دفع إلكتروني آمن",
  "إشعارات وتذكير بالمواعيد",
  "استشارات طبية أونلاين",
  "متابعة ملفات المرضى من خلال لوحة التحكم",
];

const badges = ["العيادات", "المراكز الطبية", "عيادة شخصية", "مركز طبي"];

import caro from "../../../../public/images/caro.png";

const images = [caro, caro, caro, caro, caro];

const ClinicsSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
      }}
    >
      <MainContainer>
        <Container
          sx={{
            marginTop: "86px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "@media (min-width:1440px)": {
              flexDirection: "row",
              alignItems: "start",
            },
            gap: "44px",
          }}
        >
          <MainSwiper images={images} />

          <div className="section card-section">
            <MainCard
              title="موقع للعيادات والمراكز الطبية"
              description="تسهل المواقع الطبية عملية حجز المواعيد، مما يوفر الوقت والجهد للمرضى. كما تقدم معلومات دقيقة عن الأطباء والتخصصات، بالإضافة إلى خيار الاستشارات عبر الإنترنت، مما يعزز من تجربة الرعاية الصحية."
              imageUrl={stethoscope}
            />
            <MainList items={items} />
            <BadgesList badges={badges} />
          </div>
        </Container>

        <MainButton title="للاستفسار وطلب نسخة تجريبية" />
      </MainContainer>
    </Box>
  );
};

export default ClinicsSection;
