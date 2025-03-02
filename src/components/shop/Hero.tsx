"use client";

import { Box, Container, Grid } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import MotionWrapper from "../tools/MotionWrapper";
import HeroButton from "./components/HeroButton";
import HeroImage from "./components/HeroImage";
import ItemWrapper from "@/components/tools/ItemWrapper";
import circles from "../../../public/foreign/circles.png";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const t = useTranslations("MarketingCampaigns.HeroSection");
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const locale = useLocale();

  return (
    <MotionWrapper
      style={{ paddingTop: "7rem" }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
      id="goToHome"
    >
      <Box
        className="home"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          gap: "4.8rem",
          paddingBottom: "48px",
        }}
      >
        <Container
          sx={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "4rem",
            zIndex: 1,
            position: "relative",
          }}
          maxWidth="lg"
        >
          <Image
            src={circles}
            alt="circles"
            style={{
              position: "absolute",
              width: "450px",
              height: "auto",
              maxWidth: "100%",
            }}
          />
          <Grid
            container
            rowSpacing={4}
            columnSpacing={4}
            alignItems="center"
            sx={{
              backgroundImage: 'url("/images/store/bg.png")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "100% center",
              backgroundSize: "80% 90%",
              "@media(max-width:900px)": {
                backgroundPosition: "center",
              },
            }}
          >
            <Grid item xs={12} md={6}>
              <ItemWrapper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: { xs: "center", md: "flex-start" },
                  justifyContent: { xs: "center", md: "flex-start" },
                  width: "100%",
                  gap: { xs: "2rem", md: "4rem" },
                  ".main-title": {
                    lineHeight: "4rem",
                  },
                  "@media(max-width:900px)": {
                    ".main-title": {
                      textAlign: "center",
                    },
                  },
                  "@media(max-width:480px)": {
                    ".main-title": {
                      fontSize: "3.5rem",
                    },
                  },
                }}
              >
                <MotionWrapper
                  type="h1"
                  className="main-title mobile-title text-center"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                >
                  {t("title")}
                </MotionWrapper>
                <MotionWrapper
                  type="p"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeIn" }}
                  className="paragrph-another"
                >
                  {t("description")}
                </MotionWrapper>
                <HeroButton />
              </ItemWrapper>
            </Grid>
            <Grid item xs={12} md={6} ref={ref1}>
              <MotionWrapper
                initial={{ x: locale !== "ar" ? 100 : -100, opacity: 0 }}
                animate={isInView1 ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <ItemWrapper>
                  <HeroImage />
                </ItemWrapper>
              </MotionWrapper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </MotionWrapper>
  );
};

export default Hero;
