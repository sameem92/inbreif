import { Stack } from "@mui/material";

import ticket from "../../../../public/images/ticket.png";

import BadgesList from "../shared/BadgesList";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import MainContainer from "../shared/MainContainer";
import MainList from "../shared/MainList";
import MainSwiper from "../shared/MainSwiper";

const items = [
  "حجز مرن وسهل",
  "دفع إلكتروني آمن",
  "إشعارات وتذكير بالحجز",
  "مقارنة الأسعار و الفلترة السهلة",
  "إدارة الحجز",
];

const badges = [
  "فندق",
  "تأجير سيارات",
  "حجز رحلات سفر",
  "تأجير يخوت",
  "تأجير شقق فندقية",
];

import caro from "../../../../public/images/caro.png";

const images = [caro, caro, caro, caro, caro];

const ReservationsSection = () => {
  return (
    <MainContainer>
      <Stack
        // sx={{
        //   maxWidth: "200px",
        // }}
        alignItems="center"
      >
        <h2 className="section-header">
          احصل على موقع إلكتروني لكافة المجالات
        </h2>
        <p>مواقع إلكترونية تناسب كل احتياجاتك، أيًا كان مجالك</p>
        <div className="container">
          <div className="section card-section">
            <MainCard
              title="موقع حجوزات وتأجير"
              description="تُعتبر مواقع الحجوزات أداة فعالة لتسهيل عملية البحث والحجز، حيث توفر
              خيارات متعددة ومقارنة الأسعار بسهولة. تتيح هذه المنصات تقييمات وتجارب
              المستخدمين، مما يساعد العملاء في اتخاذ قرارات مستنيرة تناسب احتياجاتهم.
              كما تعزز من راحة العملية بفضل إمكانية الحجز الفوري."
              imageUrl={ticket}
            />
            <MainList items={items} />
            <BadgesList badges={badges} />
          </div>
          <MainSwiper images={images} key="swiper1" />
        </div>

        <MainButton title="للاستفسار وطلب نسخة تجريبية" />
      </Stack>
    </MainContainer>
  );
};

export default ReservationsSection;
