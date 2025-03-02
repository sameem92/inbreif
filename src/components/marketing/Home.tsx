"use client";

import SliderS1 from "@/components/tools/sliders/sliderS1";
import {
  items,
  logos,
  profiles,
  socials,
  visualIdentities,
} from "@/constants/motion";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import MotionWrapper from "../tools/MotionWrapper";
import { CustomTabPanel } from "./shared/CustomTabPanel";
import { useInView } from "motion/react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState<string | number>(0);
  const t = useTranslations("DesignMotion");
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: string | number
  ) => {
    setValue(newValue);
  };

  useEffect(() => {
    const hash = window.location.href.split("#")[1];
    if (hash) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, []);
  return (
    <>
      <MotionWrapper
        style={{ paddingTop: "7rem" }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        id="goToHome"
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Box
          className="home"
          sx={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            gap: "4.8rem",
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
            <h1 className="main-secandry-title">{t("Hero.title")}</h1>
            <p className="paragrph">{t("Hero.description")}</p>
          </Container>

          <div>
            <Container
              sx={{ display: "flex", justifyContent: "center", gap: "2.4rem" }}
              maxWidth="lg"
            >
              <Box
                sx={{
                  width: { xs: "90%", lg: "74%" },
                  paddingBottom: { xs: "8rem", lg: "4.8rem" },

                  position: "relative",
                  top: "5.8rem",
                  zIndex: 10,
                  margin: "0 auto",
                }}
              >
                <Grid container spacing={{ xs: 2, md: 4, lg: 6 }}>
                  {items.map((item, index) => (
                    <Grid item key={index} xs={6} sm={6} md={4} ref={ref}>
                      <MotionWrapper
                        initial={{
                          y: 100,
                          opacity: 0,
                        }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <MotionWrapper
                          whileHover={{ scale: 1.02 }}
                          transition={{
                            type: "tween",
                            stiffness: 400,
                            damping: 10,
                          }}
                          className="hover"
                        >
                          <Card
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              padding: {
                                xs: "1.6rem 0.5rem",
                                md: "1rem",
                                lg: "1.1rem",
                              },
                              height: "100%",
                              minHeight: locale === "ar" ? "auto" : "196px",
                              gap: { xs: ".6rem", md: "1rem", lg: "1.6rem" },
                            }}
                            className="content"
                          >
                            <CardContent
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "1rem",
                              }}
                            >
                              <Image
                                src={item.icon}
                                alt={item.title}
                                width={50}
                                height={50}
                              />
                              <Typography
                                variant="h6"
                                sx={{
                                  // fontFamily: "var(--font-ibm-plex-sans-arabic)",
                                  fontSize: {
                                    xs: "2rem",
                                    md: "1.8rem",
                                    lg: locale === "ar" ? "2.4rem" : "2rem",
                                  },
                                  fontWeight: 400,
                                  lineHeight: { xs: "3rem", lg: "3.7rem" },
                                  display: "flex",
                                  alignItems: "center",
                                  textAlign: "center",
                                  letterSpacing: "-0.03em",
                                  color: "#ffffff",
                                }}
                              >
                                {t(`Hero.list.${item.title}`)}
                              </Typography>
                            </CardContent>
                          </Card>
                        </MotionWrapper>
                      </MotionWrapper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </div>
        </Box>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Box
          className="tabs"
          sx={{
            width: "100%",
            "& .MuiTabs-flexContainer": {
              gap: "3.2rem",
            },
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              alignItems: "center",
              mt: { xs: 5, md: "15rem" },

              justifyContent: "center",
            }}
          >
            <Tab
              className="tab"
              label={t("Hero.tabs.tab1")}
              {...a11yProps(0)}
            />
            <Tab
              className="tab"
              label={t("Hero.tabs.tab2")}
              {...a11yProps(1)}
            />
            <Tab
              className="tab"
              label={t("Hero.tabs.tab3")}
              {...a11yProps(2)}
            />
            <Tab
              className="tab"
              label={t("Hero.tabs.tab4")}
              {...a11yProps(3)}
            />
          </Tabs>
          <CustomTabPanel value={value} index={0}>
            <SliderS1 images={logos} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <SliderS1 images={visualIdentities} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <SliderS1 images={socials} />
          </CustomTabPanel>

          <CustomTabPanel value={value} index={3}>
            <SliderS1 images={profiles} />
          </CustomTabPanel>
        </Box>
      </MotionWrapper>
    </>
  );
}
