"use client";

import { useLocation } from "@/context/LocationContext";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import mobileForeign from "../../../public/foreign/mobAppForeign.png";
import mobile from "../../../public/images/mobHero.png";

const Item = styled(Paper)(() => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
}));

const Hero = () => {
  const t = useTranslations("MobileApps");
  const locale = useLocale();

  const { location } = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      className="add-padding"
      transition={{ duration: 0.4, ease: "easeIn" }}
      id="goToHome"
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: "20rem 10rem 10rem",
          backgroundImage: 'url("/images/store/bg.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "65% 90%",
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
          <Item
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
          </Item>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Item
            sx={{
              "@media (max-width:767px)": {
                img: {
                  maxHeight: "400px !important",
                },
              },
            }}
          >
            <div style={{ textAlign: "center" }}>
              {locale === "ar" && location === "not_foreign" ? (
                <Image
                  src={mobile}
                  style={{
                    width: "500px",
                    maxWidth: "100%",
                    maxHeight: "528px",
                  }}
                  alt="mobile-apps"
                />
              ) : (
                <Image
                  src={mobileForeign}
                  style={{
                    maxWidth: "100%",
                  }}
                  alt="mobile-apps"
                />
              )}
            </div>
          </Item>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Hero;
