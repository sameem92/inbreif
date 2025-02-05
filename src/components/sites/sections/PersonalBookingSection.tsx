import { Container } from "@mui/material";

import ticket from "../../../../public/images/ticket.png";

import BadgesList from "../shared/BadgesList";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import MainContainer from "../shared/MainContainer";
import MainList from "../shared/MainList";
import MainSwiper from "../shared/MainSwiper";

const items = [
  "حجز مواعيد مرن وسهل",
  "دفع إلكتروني آمن",
  "إشعارات وتذكير بالحجز",
  "حساب شخصي للعميل",
  "إدارة الحجز",
  "إمكانية تحديد الوقت المسبق للاستشارة",
];

const badges = [
  "محامي",
  "متخصص موارد بشرية",
  "استشاري",
  "مهندس ديكور",
  "مصور",
  "مدرب",
];

import caro from "../../../../public/images/caro.png";

const images = [caro, caro, caro, caro, caro];

const PersonalBookingSection = () => {
  return (
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
        <div className="section card-section">
          <MainCard
            title="موقع حجوزات شخصية"
            description="خدمات إنشاء مواقع الحجوزات الشخصية توفر حلولاً مخصصة تلبي احتياجات مختلف المجالات. تتيح هذه الحلول للمستخدمين تنظيم مواعيدهم بسهولة، مما يعزز الكفاءة ويُحسن تجربة العملاء."
            imageUrl={ticket}
          />
          <MainList items={items} />
          <BadgesList badges={badges} />
        </div>

        <MainSwiper images={images} key="swiper3" />
      </Container>
      <MainButton title="للاستفسار وطلب نسخة تجريبية" />
    </MainContainer>
  );
};

export default PersonalBookingSection;
