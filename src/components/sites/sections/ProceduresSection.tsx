"use client";

import { FEATURES } from "@/constants/sites";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslations } from "next-intl";
import ProcedureCard from "../shared/ProcedureCard";
import { useInView } from "motion/react";
import { useRef } from "react";
import MotionWrapper from "@/components/tools/MotionWrapper";

const ProceduresSection = () => {
  const t = useTranslations("InformationalReservation.ProceduresSection");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            <div className="grid-container" ref={ref}>
              {FEATURES.map((feature, index) => (
                <MotionWrapper
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                  }
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  <ProcedureCard feature={feature} />
                </MotionWrapper>
              ))}
            </div>
          </Stack>
        </Grid>
      </div>
    </Box>
  );
};

export default ProceduresSection;
