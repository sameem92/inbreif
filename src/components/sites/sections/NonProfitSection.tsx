import { Box } from "@mui/material";
import BadgesList from "../shared/BadgesList";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import MainContainer from "../shared/MainContainer";
import MainList from "../shared/MainList";
import MainSwiper from "../shared/MainSwiper";

import family from "../../../../public/images/family.png";

const items = [
  "قسم للتبرعات",
  "إصدار تقارير وإحصائيات",
  "استطلاعات الرأي",
  "إمكانية التطوع",
  "تسجيل المستفيدين",
  "مشاركة الفعاليات والمناسبات",
];

const badges = [
  "دور رعاية المسنين",
  "رعاية أيتام",
  "جمعية خيرية",
  "حضانة أطفال",
  "دليل",
];

import caro from "../../../../public/images/caro.png";
import SwiperCardContainer from "../shared/SwiperCardContainer";

const images = [caro, caro, caro, caro, caro];

const NonProfitSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
      }}
    >
      <MainContainer>
        <SwiperCardContainer>
          <MainSwiper images={images} key="swiper4" />

          <div className="section card-section">
            <MainCard
              title="مواقع إلكترونية احترافية لمنظماتك غير الربحية"
              description="تهدف المواقع إلى تعزيز الرسالة الاجتماعية، وتحتضن قيم مؤسستكم وتعكس رؤيتها."
              imageUrl={family}
            />
            <MainList items={items} />
            <BadgesList badges={badges} />
          </div>
        </SwiperCardContainer>

        <MainButton title="للاستفسار وطلب نسخة تجريبية" />
      </MainContainer>
    </Box>
  );
};

export default NonProfitSection;
