"use client";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";

import { HomeServices } from "@/constants/page";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import service1 from "../../../public/image/service1.png";
import service2 from "../../../public/image/service2.png";
import ServiceBox from "./ServiceBox";

export default function Services() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 };
  const t = useTranslations();

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
      <motion.div
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
              container
              columnSpacing={{ xs: 2, md: 3, xl: 0 }}
              rowSpacing={{ xs: 6, md: 4, xl: 10 }}
            >
              <ServiceBox
                imgSrc={service1}
                title={t("Shared.Mobile")}
                href="/mobile-apps"
              />
              <ServiceBox
                imgSrc={service2}
                title={t("Shared.E_commerce")}
                href="/web-apps"
              />
            </Grid>
          </Box>
        </Container>
      </motion.div>

      <motion.div
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
          <Box sx={{ width: { xs: "90%", lg: "100%" }, margin: "auto" }}>
            <Grid
              container
              columnSpacing={{ xs: 2, md: 3, xl: 0 }}
              rowSpacing={{ xs: 3, sm: 2, md: 4, xl: 10 }}
            >
              {HomeServices.map((item, index) => (
                <ServiceBox
                  key={index}
                  imgSrc={item.img}
                  title={t(`Home.${item.title}`)}
                  href={item.href}
                />
              ))}
            </Grid>
          </Box>
        </Container>
      </motion.div>
    </Container>
  );
}
