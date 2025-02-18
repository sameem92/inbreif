import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Container from "@mui/material/Container";
import Image from "next/image";
import Fade from "@mui/material/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import footer from "../../../public/image/fo.png";
import timer from "../../../public/image/time.png";

import up from "../../../public/image/up.png";
import { useLocale, useTranslations } from "next-intl";
import SocialMediaLinks from "./components/SocialMediaLinks";
import FooterLinks from "./components/FooterLinks";
import FooterLocations from "./components/FooterLocations";
import { displayCurrentYear } from "@/util/lib";

function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10, // Try setting a low threshold for testing
  });

  // Log to check when the trigger fires
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#goToHome");
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        <Image
          onClick={handleClick}
          width={50}
          height={50}
          src={up}
          alt="up"
          style={{ cursor: "pointer", width: "5rem", height: "5rem" }}
        />
      </Box>
    </Fade>
  );
}

export default function ResponsiveFooter() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const year = displayCurrentYear();

  return (
    <Box
      component="footer"
      className="footer"
      sx={{
        color: "white",
        padding: { xs: "5rem 0", lg: "10rem 10rem 3rem 10rem" },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1.6rem",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Grid
            container
            direction={"row"}
            spacing={{ xs: 3, md: 3 }}
            style={{ alignItems: "flex-start" }}
          >
            {/* Column 1 */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: { xs: "2rem", md: "3.2rem" },
                  flexDirection: "column",
                }}
              >
                <Image
                  src={footer}
                  alt="footer"
                  width={172}
                  height={60}
                  className="footer-logo"
                />
                <Typography
                  variant="body2"
                  sx={{
                    // fontFamily: "var(--font-ibm-plex-sans-arabic)",
                    fontSize: "2.4rem",
                    fontWeight: 600,
                    lineHeight: "3.6rem",
                  }}
                >
                  {t("title")}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "Kumbh Sans, sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 500,
                    lineHeight: "2rem",
                    textAlign: "right",
                  }}
                >
                  ⁠{t("license.title")} : ⁠{t("license.number")}
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
                >
                  <Image src={timer} alt="timer" width={36} height={36} />

                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Kumbh Sans, sans-serif",
                      fontSize: "1.6rem",
                      fontWeight: 400,
                      lineHeight: locale === "ar" ? "2rem" : "2.2rem",
                      textAlign: locale === "ar" ? "left" : "right",
                    }}
                  >
                    <strong>{t("workingHours.title")}</strong>:{" "}
                    {t("workingHours.time")}
                  </Typography>
                </Box>
                <SocialMediaLinks />
              </Box>
            </Grid>

            <FooterLinks />

            <FooterLocations />
          </Grid>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1.6rem",
            }}
          >
            <ScrollTop />
          </Box>
          <div
            style={{
              width: "100%",
              height: "1px",
              background: "#FFFFFF1F",
              marginBottom: "2rem",
            }}
          ></div>

          <Typography
            variant="body2"
            sx={{
              fontFamily: "Kumbh Sans, sans-serif",
              fontSize: "1.6rem",
              fontWeight: 400,
              lineHeight: "1.6rem",
              textAlign: "center",
            }}
          >
            {t("rights")} {year}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
