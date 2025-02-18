/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck

import Image from "next/image";

// Components
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion"; // Import framer-motion

// Icons
import { useCurrency } from "@/context/CurrencyContext";
import { useTranslations } from "next-intl";
import ScrollIcon from "../../../../public/icons/scrollIcon.svg";
import service1 from "../../../../public/icons/service1.png";
import service10 from "../../../../public/icons/service10.png";
import service11 from "../../../../public/icons/service11.png";
import service12 from "../../../../public/icons/service12.png";
import service2 from "../../../../public/icons/service2.png";
import service3 from "../../../../public/icons/service3.png";
import service4 from "../../../../public/icons/service4.png";
import service5 from "../../../../public/icons/service5.png";
import service6 from "../../../../public/icons/service6.png";
import service7 from "../../../../public/icons/service7.png";
import service8 from "../../../../public/icons/service8.png";
import service9 from "../../../../public/icons/service9.png";

const services = [
  {
    icon: service1,
    title: "addons.whatsapp",
    description: "addons.whatsapp_desc",
    USD: "18",
    SAR: "70",
    OMR: "7",
    KD: "6",
  },
  {
    icon: service2,
    title: "addons.sms",
    description: "addons.sms_desc",
    USD: "10",
    SAR: "35",
    OMR: "4",
    KD: "4",
  },
  {
    icon: service3,
    title: "addons.chatbot",
    description: "addons.chatbot_desc",
    USD: "18",
    SAR: "70",
    OMR: "7",
    KD: "6",
  },
  {
    icon: service4,
    title: "addons.pos",
    description: "addons.pos_desc",
    USD: "18",
    SAR: "70",
    OMR: "7",
    KD: "6",
  },
  {
    icon: service5,
    title: "addons.driver",
    description: "addons.driver_desc",
    USD: "18",
    SAR: "70",
    OMR: "7",
    KD: "6",
  },
  {
    icon: service6,
    title: "addons.mobile_app",
    description: "addons.mobile_app_desc",
    USD: "120",
    SAR: "425",
    OMR: "35",
    KD: "35",
  },
  {
    icon: service7,
    title: "addons.consultant",
    description: "addons.consultant_desc",
    USD: "130",
    SAR: "500",
    OMR: "40",
    KD: "40",
  },
  {
    icon: service8,
    title: "addons.content_upload",
    description: "addons.content_upload_desc",
    USD: "85",
    SAR: "300",
    OMR: "25",
    KD: "25",
  },
  {
    icon: service9,
    title: "addons.seo",
    description: "addons.seo_desc",
    USD: "130",
    SAR: "500",
    OMR: "40",
    KD: "40",
  },
  {
    icon: service10,
    title: "addons.marketing_consultant",
    description: "addons.marketing_consultant_desc",
    USD: "130",
    SAR: "500",
    OMR: "40",
    KD: "40",
  },
  {
    icon: service11,
    title: "addons.table_reservation",
    description: "addons.table_reservation_desc",
    USD: "18",
    SAR: "70",
    OMR: "7",
    KD: "6",
  },
  {
    icon: service12,
    title: "addons.multi_vendor",
    description: "addons.multi_vendor_desc",
    USD: "50",
    SAR: "200",
    OMR: "18",
    KD: "16",
  },
];

const ServicesSection = () => {
  const t = useTranslations("ECommerce.ServicesSection");
  const { currency } = useCurrency();

  return (
    <div className="servicesSection">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="82px"
        sx={{
          padding: "100px 10rem 100px",
          "@media (max-width: 1340px)": {
            padding: "100px 2rem",
          },
          "@media (max-width: 1240px)": {
            padding: "100px 1rem",
          },
          "@media (max-width: 992px)": {
            padding: "100px 2rem",
          },
          "@media (max-width: 480px)": {
            padding: "5rem 2rem",
          },
        }}
      >
        <Grid size={{ xs: 12 }}>
          <div style={{ margin: "0 auto" }}>
            <div className="sectionHead">
              <a href="#features">
                <ScrollIcon />
              </a>
              <h2>{t("title")}</h2>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12 }} container spacing={{ xs: 2, md: 4 }}>
          {services.map((service, i) => (
            <Grid key={service.title} size={{ xs: 6, sm: 4, md: 3 }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{
                  type: "tween",
                  stiffness: 400,
                  damping: 10,
                }}
              >
                <div className="service">
                  <div className="content">
                    {currency && (
                      <div className="service_price">
                        <span>{service[currency.code]}</span>
                        <span>{t(currency.symbol)}</span>
                        {i !== 7 && <span>/{t("month")}</span>}
                      </div>
                    )}
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
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesSection;
