"use client";

import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { useLocale, useTranslations } from "next-intl";

import MotionWrapper from "../tools/MotionWrapper";
import HeroImg from "./shared/HeroImg";
import ItemWrapper from "@/components/tools/ItemWrapper";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const t = useTranslations("MobileApps");
  const locale = useLocale();
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

  return (
    <MotionWrapper
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className="add-padding"
      transition={{ duration: 0.4, ease: "easeIn" }}
      id="goToHome"
    >
      <Grid
        ref={ref1}
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "20rem 10rem 10rem",
          gap: "50px 0px",
          "@media (max-width: 1340px)": {
            padding: "20rem 2rem 10rem",
          },
          "@media (max-width: 1240px)": {
            padding: "15rem 1rem 7rem",
          },
          "@media (max-width: 992px)": {
            padding: "15rem 2rem 6rem",
          },
          "@media (max-width: 900px)": {
            padding: "0rem 2rem 6rem",
          },
          "@media (max-width: 768px)": {
            backgroundPosition: "50% 75%",
            backgroundSize: "contain",
          },
        }}
      >
        <Grid
          size={{ xs: 12, lg: 6 }}
          sx={{
            "@media (min-width:480px) and (max-width: 768px)": {
              marginBottom: "4rem",
            },
          }}
        >
          <MotionWrapper
            initial={{ x: locale === "ar" ? 100 : -100, opacity: 0 }}
            animate={isInView1 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ItemWrapper
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: { xs: "center", lg: "flex-start" },
                margin: "auto",
                gap: { xs: "1.6rem", md: "3rem" },
                "@media (max-width:991px)": {
                  ".main-secandry-title": { lineHeight: "normal" },
                },
              }}
            >
              <Box
                className="main-secandry-title"
                sx={{
                  textAlign: { xs: "center", sm: "start", xl: "end" },
                  position: "relative",
                  left: { xs: "", lg: locale === "ar" ? "45%" : undefined },
                  right: { xs: "", lg: locale !== "ar" ? "45%" : undefined },
                  top: { xs: "", lg: "-4rem" },
                  width: "100%",
                }}
              >
                {t("mainTitle")}
              </Box>
              <Box
                sx={{
                  "@media (max-width:1240px)": {
                    ".mobile-title": { textAlign: "center" },
                    ".paragrph-another": {
                      textAlign: "center",
                      maxWidth: "90%",
                      margin: "0 auto",
                    },
                  },
                  "@media (max-width:767px)": {
                    ".mobile-title": { marginTop: "0px" },
                  },
                }}
              >
                <h1 className="main-title mobile-title">
                  {t("mainDescription.title")}
                </h1>
                <p className="paragrph-another">
                  {t("mainDescription.description")}
                </p>
              </Box>
            </ItemWrapper>
          </MotionWrapper>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <MotionWrapper
            initial={{ x: locale !== "ar" ? 100 : -100, opacity: 0 }}
            animate={isInView1 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HeroImg />
          </MotionWrapper>
        </Grid>
      </Grid>
    </MotionWrapper>
  );
};

export default Hero;
