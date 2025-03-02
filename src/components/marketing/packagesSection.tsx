/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck

// Components
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Icons
import { plans } from "@/constants/motion";
import { useLocale, useTranslations } from "next-intl";

import MotionWrapper from "../tools/MotionWrapper";
import PlanCard from "./shared/PlanCard";
import { useInView } from "motion/react";
import { useRef } from "react";

const PackagesSection = () => {
  const t = useTranslations("DesignMotion.DesignVideoPackages");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = useLocale();

  return (
    <div className="package" id="packages">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="80px"
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
          "@media (max-width: 480px)": {
            padding: "5rem 2rem",
          },
        }}
      >
        <Grid size={{ xs: 12 }}>
          <MotionWrapper
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <h2 className="main-secandry-title">{t("title")}</h2>
          </MotionWrapper>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <MotionWrapper
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <Box
              sx={{
                width: "100%",
                "& .MuiTabs-flexContainer": {
                  gap: "3.2rem",
                },
              }}
            >
              <Grid
                container
                columnSpacing={2}
                rowSpacing={6}
                ref={ref}
                alignItems={"flex-end"}
              >
                {plans?.map((plan, i) => (
                  <Grid key={plan.title} size={{ xs: 12, sm: 4 }}>
                    <MotionWrapper
                      initial={{
                        x:
                          i === 0
                            ? locale === "ar"
                              ? 100
                              : -100
                            : i === 2
                            ? locale === "ar"
                              ? -100
                              : 100
                            : 0,
                        y: i === 1 ? 100 : 0,
                        opacity: 0,
                      }}
                      animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <PlanCard plan={plan} index={i} />
                    </MotionWrapper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </MotionWrapper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PackagesSection;
