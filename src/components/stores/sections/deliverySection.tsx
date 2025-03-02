"use client";

import MotionWrapper from "@/components/tools/MotionWrapper";
import Grid from "@mui/material/Grid2";
import { useInView } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import delivery from "../../../../public/images/store/delivery.png";
import OurCompanies from "../shared/OurCompanies";

const DeliverySection = () => {
  const t = useTranslations("ECommerce.DeliverySection");
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

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
            ref={ref1}
            size={{ xs: 12 }}
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 5 }}>
              <MotionWrapper
                initial={{ y: 100 }}
                animate={isInView1 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="delivery_img">
                  <Image src={delivery} alt="الشحن والتوصيل" />
                </div>
              </MotionWrapper>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <MotionWrapper
                initial={{ y: 100 }}
                animate={isInView1 ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="info">
                  <h2>{t("title")}</h2>
                  <p>{t("subtitle1")}</p>
                  <p>{t("subtitle2")}</p>
                </div>
              </MotionWrapper>
            </Grid>
          </Grid>
        </Grid>

        <OurCompanies />
      </div>
    </div>
  );
};

export default DeliverySection;
