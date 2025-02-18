import React from "react";
import Image from "next/image";

// Components
import Grid from "@mui/material/Grid2";

// Images & Icons
import delivery from "../../../../public/images/store/delivery.png";
import SliderS3 from "@/components/tools/sliders/sliderS3";

import Company1 from "../../../../public/images/store/companies/company1.svg";
import Company2 from "../../../../public/images/store/companies/company2.svg";
import Company3 from "../../../../public/images/store/companies/company3.svg";
import Company4 from "../../../../public/images/store/companies/company4.svg";
import Company5 from "../../../../public/images/store/companies/company5.svg";
import Company6 from "../../../../public/images/store/companies/company6.svg";
import Company7 from "../../../../public/images/store/companies/company7.svg";
import Company8 from "../../../../public/images/store/companies/company8.svg";
import { useTranslations } from "next-intl";

const companies = [
  <Company1 key="company1" />,
  <Company2 key="company2" />,
  <Company3 key="company3" />,
  <Company4 key="company4" />,
  <Company5 key="company5" />,
  <Company6 key="company6" />,
  <Company7 key="company7" />,
  <Company8 key="company8" />,
];

const DeliverySection = () => {
  const t = useTranslations("ECommerce.DeliverySection");

  return (
    <div className="deliverySection package">
      <div>
        <Grid
          container
          spacing={{ xs: 6, md: 12 }}
          justifyContent="center"
          alignItems="center"
          gap="115px"
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
          <Grid
            size={{ xs: 12 }}
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <div className="delivery_img">
                <Image src={delivery} alt="الشحن والتوصيل" />
              </div>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <div className="info">
                <h2>{t("title")}</h2>
                <p>{t("subtitle1")}</p>

                <p>{t("subtitle2")}</p>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <SliderS3 images={companies} className="swiper-y" />
      </div>
    </div>
  );
};

export default DeliverySection;
