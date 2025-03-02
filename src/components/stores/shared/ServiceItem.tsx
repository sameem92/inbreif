import MotionWrapper from "@/components/tools/MotionWrapper";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PriceBox from "./PriceBox";

const ServiceItem = ({ service, index }) => {
  const t = useTranslations("ECommerce.ServicesSection");

  return (
    <MotionWrapper
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "tween",
        stiffness: 400,
        damping: 10,
      }}
    >
      <div className="service">
        <div className="content">
          <PriceBox index={index} service={service} />
          <div className="img">
            <Image
              height={100}
              width={100}
              src={service.icon}
              alt={service.title}
            />
          </div>
          <h4>{t(service.title)}</h4>
          <p>{t(service.description)}</p>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default ServiceItem;
