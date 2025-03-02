"use client";

import { useLocation } from "@/context/LocationContext";
import { Box, Grid2, List, Typography, useMediaQuery } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import ValuesForeign from "../../../public/foreign/valuesForeign.png";
import values from "../../../public/images/about/values.png";
import MotionWrapper from "../tools/MotionWrapper";
import ValueItem from "./ValueItem";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ValuesSection = () => {
  const t = useTranslations("AboutPage");
  const locale = useLocale();
  const { location } = useLocation();
  const isMobile = useMediaQuery("(max-width:768px)");
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

  return (
    <Grid2
      ref={ref1}
      container
      alignItems="center"
      justifyContent="space-between"
      gap="20px"
    >
      <Grid2
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          alignItems: "center",
          order: { xs: 2, md: 1 },
        }}
      >
        <MotionWrapper
          initial={{ x: locale === "ar" ? 100 : -100, opacity: 0 }}
          animate={
            isInView1
              ? { x: 0, opacity: 1 }
              : { x: locale === "ar" ? 100 : -100, opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {locale === "ar" && location === "not_foreign" ? (
            <Image
              src={values}
              style={{
                maxWidth: "100%",
                width: "50rem",
                height: "auto",
              }}
              alt="two"
            />
          ) : (
            <Image
              src={ValuesForeign}
              style={{
                maxWidth: "100%",
                width: "55rem",
                height: "auto",
              }}
              alt="two"
            />
          )}
        </MotionWrapper>
      </Grid2>

      {/* Values Text */}
      <Grid2
        size={{ xs: 12, md: 5 }}
        sx={{
          order: { xs: 1, md: 2 },
          marginTop: "150px",
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
        <MotionWrapper
          initial={{ x: locale !== "ar" ? 100 : -100, opacity: 0 }}
          animate={
            isInView1
              ? { x: 0, opacity: 1 }
              : { x: locale !== "ar" ? 100 : -100, opacity: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <MotionWrapper
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={isMobile ? { once: true } : { once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: { xs: "2rem", lg: "3.6rem" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "2.8rem", lg: "3.6rem" },
                  fontWeight: 600,
                  lineHeight: "4rem",
                  letterSpacing: "-1.44px",
                  color: "#E1E42A",
                }}
              >
                {t("values.title")}
              </Typography>
              <List
                sx={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                }}
              >
                <ValueItem
                  title={t("values.value1.title")}
                  description={t("values.value1.description")}
                />
                <ValueItem
                  title={t("values.value2.title")}
                  description={t("values.value2.description")}
                />
                <ValueItem
                  title={t("values.value3.title")}
                  description={t("values.value3.description")}
                />
              </List>
            </Box>
          </MotionWrapper>
        </MotionWrapper>
      </Grid2>
    </Grid2>
  );
};

export default ValuesSection;
