"use client";

import { Box, Container, Grid, useMediaQuery } from "@mui/material";

import { HomeServices } from "@/constants/page";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import service1 from "../../../public/image/service1.png";
import service2 from "../../../public/image/service2.png";
import service3 from "../../../public/image/service3.png";
import MotionWrapper from "../tools/MotionWrapper";
import ServiceBox from "./ServiceBox";

const SoftwareServices = [
  { imgSrc: service1, title: "Shared.Mobile", href: "/mobile-apps" },
  { imgSrc: service2, title: "Shared.E_commerce", href: "/wep-apps" },
  {
    imgSrc: service3,
    title: "Shared.Web",
    href: "/informational-and-reservation-sites",
  },
];

export default function Services() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 };
  const t = useTranslations();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <Container
      sx={{
        padding: "100px 10rem 100px",
        "@media (max-width: 1340px)": { padding: "100px 2rem" },
        "@media (max-width: 1240px)": { padding: "100px 1rem" },
        "@media (max-width: 992px)": { padding: "100px 2rem" },
        "@media (max-width: 480px)": { padding: "50px 2rem" },
      }}
    >
      <MotionWrapper
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={animation}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Container>
          <h1 className="secondry-title" style={{ margin: "84px auto 4.6rem" }}>
            {t("Home.softwareServices")}
          </h1>
          <Box sx={{ width: { xs: "90%", lg: "100%" }, margin: "auto" }}>
            <Grid
              ref={ref}
              container
              columnSpacing={{ xs: 2, md: 3, xl: 0 }}
              rowSpacing={{ xs: 6, md: 4, xl: 10 }}
              sx={{ alignItems: "stretch" }}
            >
              {SoftwareServices.map((service, index) => (
                <Grid item xs={6} custom992={4} lg={4} key={index}>
                  <MotionWrapper
                    initial={{ y: 100, opacity: 0 }}
                    animate={
                      isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }
                    }
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    style={{ height: "100%" }}
                  >
                    <ServiceBox
                      imgSrc={service.imgSrc}
                      title={t(`${service.title}`)}
                      href={service.href}
                    />
                  </MotionWrapper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </MotionWrapper>

      <MotionWrapper
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={animation}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Container
          sx={{
            ".secondry-title": { margin: "84px auto 4.6rem" },
            "@media(max-width:480px)": {
              ".secondry-title": { margin: "42px auto 4.6rem" },
            },
          }}
        >
          <h1 className="secondry-title">
            {t("Home.designMarketingSolution")}
          </h1>
          <Box
            sx={{
              width: { xs: "90%", lg: "100%" },
              margin: "auto",
            }}
          >
            <Grid
              ref={ref2}
              container
              columnSpacing={{ xs: 2, md: 3, xl: 0 }}
              rowSpacing={{ xs: 3, sm: 2, md: 4, xl: 10 }}
              sx={{ alignItems: "stretch" }}
            >
              {HomeServices.map((item, index) => (
                <Grid item xs={6} custom992={4} lg={4} key={index}>
                  <MotionWrapper
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    animate={
                      isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                    }
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    style={{ height: "100%" }}
                  >
                    <ServiceBox
                      imgSrc={item.img}
                      title={t(`Home.${item.title}`)}
                      href={item.href}
                    />
                  </MotionWrapper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </MotionWrapper>
    </Container>
  );
}
