"use client";
import { Box, Grid2, Typography, useMediaQuery } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

import { useRef } from "react";
import { useInView } from "motion/react";
import MotionWrapper from "../tools/MotionWrapper";
import { useLocation } from "@/context/LocationContext";
import Image from "next/image";
import distinguishesForeign from "../../../public/foreign/distinguishesForeign.png";
import distinguishes from "../../../public/images/about/distinguishes.png";

const FeaturesSection = () => {
  const t = useTranslations("AboutPage");
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isMobile = useMediaQuery("(max-width:768px)");
  const { location } = useLocation();
  const locale = useLocale();

  return (
    <Grid2
      ref={ref1}
      container
      alignItems="center"
      justifyContent="space-between"
      gap="20px"
    >
      <Grid2 size={{ xs: 12, md: 5 }}>
        <MotionWrapper
          initial={{ x: locale === "ar" ? 100 : -100, opacity: 0 }}
          animate={isInView1 ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { xs: "2rem", lg: "3.6rem" },
              marginTop: "140px",
              "@media(max-width:1100px)": {
                marginTop: "120px",
              },
              "@media(max-width:991px)": {
                marginTop: "100px",
              },
              "@media(max-width:900px)": {
                marginTop: "0px",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2.8rem", lg: "3.6rem" },
                fontWeight: 600,
                lineHeight: "5.6rem",
                letterSpacing: "-1.44px",
                color: "#E1E42A",
              }}
            >
              {t("whatSetsUsApart.title")}
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", lg: "2.5rem" },
                fontWeight: 400,
                lineHeight: {
                  xs: "3rem",
                  md: "2.8rem",
                  lg: "3.2rem",
                  xl: "3.7rem",
                },
                color: "#fff",
              }}
            >
              {t("whatSetsUsApart.description")}
            </Typography>
          </Box>
        </MotionWrapper>
      </Grid2>

      <Grid2
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <MotionWrapper
          initial={{ x: locale !== "ar" ? 100 : -100, opacity: 0 }}
          animate={isInView1 ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <MotionWrapper
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            {locale === "ar" && location === "not_foreign" ? (
              <Image
                src={distinguishes}
                style={{
                  maxWidth: "55rem",
                  width: "100%",
                  height: "auto",
                }}
                alt="one"
                priority
                placeholder="blur"
              />
            ) : (
              <Image
                src={distinguishesForeign}
                style={{
                  maxWidth: "100%",
                  width: "50rem",
                  height: "auto",
                }}
                alt="one"
              />
            )}
          </MotionWrapper>
        </MotionWrapper>
      </Grid2>
    </Grid2>
  );
};

export default FeaturesSection;
