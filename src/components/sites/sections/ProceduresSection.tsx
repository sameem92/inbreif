"use client";

import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const features = [
  {
    title: "Feature1.title",
    description: "Feature1.description",
    imageURL: ".././images/procedures/1.svg",
    imageWidth: 76,
    imageHeight: 80,
  },
  {
    title: "Feature2.title",
    description: "Feature2.description",
    imageURL: ".././images/procedures/2.svg",
    imageWidth: 81,
    imageHeight: 76,
  },
  {
    title: "Feature3.title",
    description: "Feature3.description",
    imageURL: ".././images/procedures/3.svg",
    imageWidth: 80,
    imageHeight: 67,
  },
  {
    title: "Feature4.title",
    description: "Feature4.description",
    imageURL: ".././images/procedures/4.svg",
    imageWidth: 87,
    imageHeight: 76,
  },
  {
    title: "Feature5.title",
    description: "Feature5.description",
    imageURL: ".././images/procedures/5.svg",
    imageWidth: 88,
    imageHeight: 88,
  },
  {
    title: "Feature6.title",
    description: "Feature6.description",
    imageURL: ".././images/procedures/6.svg",
    imageWidth: 88,
    imageHeight: 85,
  },
];

const ProceduresSection = () => {
  const t = useTranslations("InformationalReservation.ProceduresSection");

  return (
    <Box
      sx={{
        padding: "100px 10rem 100px",
        "@media (max-width: 1340px)": {
          padding: "100px 2rem",
        },
        "@media (max-width: 1240px)": {
          padding: "100px 1rem",
        },
        "@media (max-width: 992px)": {
          padding: "100px 2rem",
        },
        background: "linear-gradient(rgba(0, 0, 0, 0.21), rgba(0, 0, 0, 0.21))",
      }}
    >
      <div className="proceduresSection">
        <Grid
          container
          sx={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Stack>
            <h2 className="section-header">{t("title")}</h2>
            <p>{t("subtitle")}</p>
            <div className="grid-container">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    type: "tween",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  <div className="card">
                    <div className="content">
                      <div className="circle"></div>
                      <img
                        src={feature.imageURL}
                        alt={feature.title}
                        width={feature.imageWidth}
                        height={feature.imageHeight}
                      />
                      <h3>{t(feature.title)}</h3>
                      <p>{t(feature.description)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Stack>
        </Grid>
      </div>
    </Box>
  );
};

export default ProceduresSection;
