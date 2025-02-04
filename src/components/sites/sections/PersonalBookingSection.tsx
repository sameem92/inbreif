import { Stack } from "@mui/material";

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
      <Stack alignItems="center">
        <div className="container">
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
        </div>

        <MainButton title="للاستفسار وطلب نسخة تجريبية" />
      </Stack>
    </MainContainer>
  );
};

export default PersonalBookingSection;
