"use client";

import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Image from "next/image";

import MotionWrapper from "@/components/tools/MotionWrapper";
import { useLocale, useTranslations } from "next-intl";
import SiteHeroImageForeign from "../../../../public/foreign/SiteHeroImageForeign.png";
import Circles from "../../../../public/images/circles.png";
import SiteHeroImage from "../../../../public/images/siteHero.png";
import ContactBtn from "../shared/ContactBtn";
import StartBtn from "../shared/StartBtn";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const t = useTranslations("InformationalReservation.HeroSection");
  const locale = useLocale();
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

  return (
    <div className="heroSection">
      <MotionWrapper
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
        id="goToHome"
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "42px",
            padding: "20rem 10rem 100px",
            "@media (max-width: 1024px)": {
              padding: "155px 1rem 100px",
            },
            "@media (max-width: 768px)": {
              padding: "155px 2rem 100px",
            },
            "@media (max-width: 480px)": {
              padding: "155 2rem",
              gap: "22px",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "116px",
              "@media (max-width: 480px)": { display: "none" },
            }}
          >
            <Image src={Circles} alt="Circles" style={{ maxWidth: "100%" }} />
          </Box>

          <Box
            ref={ref1}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              flex: "1",
              width: "100%",
              maxWidth: "780px",
            }}
          >
            <MotionWrapper
              initial={{ y: 100, opacity: 0 }}
              animate={isInView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Stack gap={"12px"}>
                <h1>{t("title")}</h1>
                <Box
                  sx={{
                    position: "relative",
                    aspectRatio: "16/9",
                    width: "100%",
                  }}
                >
                  <Image
                    src={locale === "ar" ? SiteHeroImage : SiteHeroImageForeign}
                    fill
                    alt="Site Hero Image"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <p>
                  {t("description1")} <br />
                  {t("description2")}
                </p>

                <Stack
                  direction="row"
                  sx={{
                    marginX: "auto",
                    marginTop: "45px",
                    gap: "8px",
                    "@media only screen and (max-width: 320px)": {
                      flexDirection: "column",
                      alignItems: "center",
                    },
                  }}
                >
                  <StartBtn />
                  <ContactBtn />
                </Stack>
              </Stack>
            </MotionWrapper>
          </Box>
        </Container>
      </MotionWrapper>
    </div>
  );
};

export default HeroSection;
