"use client";

import Grid from "@mui/material/Grid2";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { memo } from "react";
import store from "../../../../public/images/store/store.png";
import ContactBtn from "../shared/ContactBtn";
import ScrollToPackagesBtn from "../shared/ScrollToPackagesBtn";

const gridStyles = {
  padding: "20rem 10rem 2rem",
  "@media (max-width: 1340px)": {
    padding: "20rem 7.5rem 2rem 2rem",
  },
  "@media (max-width: 1240px)": {
    padding: "15rem 7.5rem 2rem 1rem",
  },
  "@media (max-width: 992px)": {
    padding: "12rem 2rem 100px 2rem",
    ".store_img": {
      height: "300px",
      img: {
        height: "100%",
      },
    },
  },
  "@media (max-width: 560px)": {
    ".store_img": {
      height: "250px",
      img: {
        height: "100%",
      },
    },
  },
  "@media (max-width: 480px)": {
    padding: "12rem 2rem 0px",
  },
};

import MotionWrapper from "@/components/tools/MotionWrapper";
import { useInView } from "motion/react";
import { useRef } from "react";

const HeroSection = () => {
  const t = useTranslations("ECommerce.HeroSection");
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

  return (
    <div className="heroSection" id="goToHome">
      <div>
        <Grid
          ref={ref1}
          container
          spacing={{ xs: 4, sm: 8, lg: 12 }}
          justifyContent="center"
          alignItems="center"
          sx={gridStyles}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionWrapper
              initial={{ y: 100 }}
              animate={isInView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="hero">
                <h1>{t("title")}</h1>
                <p>{t("description")}</p>
                <div className="actions">
                  <ScrollToPackagesBtn />
                  <ContactBtn />
                </div>
              </div>
            </MotionWrapper>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionWrapper
              initial={{ y: 100 }}
              animate={isInView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="store_img">
                <Image src={store} alt="store" />
              </div>
            </MotionWrapper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default memo(HeroSection);
