"use client";
import marketingForeign from "../../../public/foreign/marketingForeign.png";
import marketing from "../../../public/images/marketing.png";

import Design from "@/components/shop/Design";
import Social from "@/components/tools/social/social";
import { useLocation } from "@/context/LocationContext";
import { Box, Button, Container, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import PackagesSection from "./packagesSection";
import SeoSection from "./SeoSection";

const Item = styled(Paper)(() => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: "none",
}));

export default function Home() {
  const t = useTranslations("MarketingCampaigns.HeroSection");
  const locale = useLocale();
  const { location } = useLocation();

  const goToWhatsApp = () => {
    window.open("http://wa.me/96877276659", "_target");
  };

  return (
    <>
      <Social />

      <motion.div
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
                <Item
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
                  <motion.h1
                    className="main-title mobile-title text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeIn" }}
                  >
                    {t("title")}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeIn" }}
                    className="paragrph-another"
                  >
                    {t("description")}
                  </motion.p>
                  <Button
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "5rem",
                      padding: "1rem 2rem",
                      gap: "6px",
                      borderRadius: "52px",
                      background: "#E0E324",
                      backdropFilter: "blur(24px)",
                      color: "#001014",
                      textAlign: "center",
                      fontSize: "1.6rem",
                      fontWeight: 600,
                      lineHeight: "1.6rem",
                    }}
                    onClick={goToWhatsApp}
                  >
                    {t("button")}
                  </Button>
                </Item>
              </Grid>
              <Grid item xs={12} md={6}>
                <Item>
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeIn" }}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {locale === "ar" && location === "not_foreign" ? (
                      <Image
                        style={{ maxWidth: "100%" }}
                        height={450}
                        width={400}
                        src={marketing}
                        alt="mobile-apps"
                      />
                    ) : (
                      <Image
                        style={{ maxWidth: "100%" }}
                        height={450}
                        width={400}
                        src={marketingForeign}
                        alt="mobile-apps"
                      />
                    )}
                  </motion.div>
                </Item>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      <PackagesSection />
      <SeoSection />
      <Design />
    </>
  );
}
