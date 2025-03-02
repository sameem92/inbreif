/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck

"use client";

import { SERVICES } from "@/constants/web";
import Grid from "@mui/material/Grid2";
import { useTranslations } from "next-intl";
import ScrollIcon from "../../../../public/icons/scrollIcon.svg";
import ServiceItem from "../shared/ServiceItem";
import MotionWrapper from "@/components/tools/MotionWrapper";
import { useInView } from "motion/react";
import { useRef } from "react";

const ServicesSection = () => {
  const t = useTranslations("ECommerce.ServicesSection");
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <div className="servicesSection">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap={{ xs: "48px", md: "82px" }}
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
        <Grid
          size={{ xs: 12 }}
          container
          spacing={{ xs: 2, md: 3, xl: 4 }}
          ref={ref2}
        >
          {SERVICES.map((service, i) => (
            <Grid
              size={{ xs: 6, sm: 6, md: 4, lg: 3 }}
              sx={{
                "@media (max-width: 400px)": {
                  flexBasis: "100%",
                  maxWidth: "100%",
                },
              }}
              key={service.title}
            >
              <MotionWrapper
                initial={{ opacity: 0, y: 100 }}
                animate={
                  isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                }
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
                style={{ width: "100%" }}
              >
                <ServiceItem service={service} index={i} />
              </MotionWrapper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesSection;
