import building from "../../../../public/images/building.png";

import BadgesList from "../shared/BadgesList";
import MainButton from "../shared/MainButton";
import MainCard from "../shared/MainCard";
import MainContainer from "../shared/MainContainer";
import MainSwiper from "../shared/MainSwiper";

const badges = [
  "شركات استيراد وتصدير",
  "المصانع",
  "الشركات الهندسية",
  "الشركات العقارية",
  "شركات تجارة عامة",
  "خدمات لوجيستية",
];

import caro from "../../../../public/images/caro.png";
import SwiperCardContainer from "../shared/SwiperCardContainer";

const infoImages = [caro, caro, caro, caro, caro];

const InformationalSection = () => {
  return (
    <MainContainer>
      <SwiperCardContainer>
        <div className="section card-section">
          <MainCard
            title="مواقع تعريفية"
            description="تعتبر المواقع التعريفية للشركات والمؤسسات منصة رئيسية لعرض الهوية المؤسسية والمعلومات الأساسية. تُسهم في بناء الثقة مع العملاء من خلال تقديم معلومات دقيقة حول الخدمات والرؤية. كما توفر وسيلة فعالة للتواصل، مما يُعزز من فرص التعاون والنمو."
            imageUrl={building}
          />
          <BadgesList badges={badges} />
        </div>

        <MainSwiper images={infoImages} key="swiper5" />
      </SwiperCardContainer>

      <MainButton title="للاستفسار وطلب نسخة تجريبية" />
    </MainContainer>
  );
};

export default InformationalSection;
