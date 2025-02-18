"use client";

import Social from "@/components/tools/social/social";
import {
  Box,
  Container,
  Grid2,
  List,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

import { useLocation } from "@/context/LocationContext";
import { useLocale, useTranslations } from "next-intl";
import distinguishesForeign from "../../../public/foreign/distinguishesForeign.png";
import ValuesForeign from "../../../public/foreign/valuesForeign.png";
import distinguishes from "../../../public/images/about/distinguishes.png";
import values from "../../../public/images/about/values.png";
import ValueItem from "./ValueItem";

export default function Home() {
  const isMobile = useMediaQuery("(max-width:768px)");

  const t = useTranslations("AboutPage");
  const locale = useLocale();
  const { location } = useLocation();

  return (
    <>
      <Social />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Box
          className="home"
          sx={{
            direction: locale === "ar" ? "ltr" : "rtl",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            gap: "4.8rem",
            padding: "10px 10rem 100px",
            "@media (max-width: 1340px)": {
              padding: "10px 2rem 100px",
            },
            "@media (max-width: 1240px)": {
              padding: "10px 1rem 100px",
            },
            "@media (max-width: 992px)": {
              padding: "10px 2rem 100px",
            },
          }}
        >
          {/* Main Title */}
          <Container
            sx={{
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.9rem",
              zIndex: 1,
              position: "relative",
            }}
            maxWidth="lg"
          >
            <h1 className="main-title-2 text-primary">{t("welcome")}</h1>
            <p className="title-h3-2">{t("heroDescription")}</p>
          </Container>

          <Container
            sx={{
              display: "flex",
              gap: { xs: "5rem", lg: "10rem" },
              flexDirection: "column",
            }}
            maxWidth="lg"
          >
            {/* Features Section */}
            <Grid2
              container
              alignItems="center"
              justifyContent="space-between"
              gap="20px"
            >
              <Grid2 size={{ xs: 12, md: 5 }}>
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
                      fontSize: { xs: "2rem", lg: "2.7rem" },
                      fontWeight: 400,
                      lineHeight: "3.7rem",
                      color: "#fff",
                    }}
                  >
                    {t("whatSetsUsApart.description")}
                  </Typography>
                </Box>
              </Grid2>

              {/* Image */}
              <Grid2
                size={{ xs: 12, md: 6 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={
                    isMobile ? { once: true } : { once: true, amount: 0.3 }
                  }
                  transition={{ duration: 0.4, ease: "easeIn" }}
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
                    />
                  ) : (
                    <Image
                      src={distinguishesForeign}
                      style={{
                        maxWidth: "100%",
                      }}
                      alt="one"
                    />
                  )}
                </motion.div>
              </Grid2>
            </Grid2>

            {/* Values Section */}
            <Grid2
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
                {locale === "ar" && location === "not_foreign" ? (
                  <Image
                    src={values}
                    style={{
                      maxWidth: "55rem",
                      width: "100%",
                      height: "auto",
                    }}
                    alt="two"
                  />
                ) : (
                  <Image
                    src={ValuesForeign}
                    style={{
                      maxWidth: "100%",
                    }}
                    alt="two"
                  />
                )}
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
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={
                    isMobile ? { once: true } : { once: true, amount: 0.3 }
                  }
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
                </motion.div>
              </Grid2>
            </Grid2>

            {/* Team Section */}
            <Box
              className="border"
              sx={{
                width: { xs: "100%" },
                margin: "0 auto",
                gap: { xs: "2rem", lg: "3.6rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "4.8rem",
                padding: {
                  xs: "5rem 2rem",
                  lg: "8rem 5rem",
                  xl: "10rem 5rem",
                },
                background:
                  "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.8rem", lg: "3.6rem" },
                  fontWeight: 600,
                  lineHeight: "5.6rem",
                  textAlign: "center",
                  color: "#E1E42A",
                  letterSpacing: "-1.44px",
                }}
              >
                {t("team.title")}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "2rem", lg: "2.7rem" },
                  fontWeight: 600,
                  lineHeight: "3.7rem",
                  textAlign: "center",
                  color: "#fff",
                  width: { xs: "100%", lg: "85%" },
                }}
              >
                {t("team.description")}
              </Typography>
            </Box>
          </Container>
        </Box>
      </motion.div>
    </>
  );
}
