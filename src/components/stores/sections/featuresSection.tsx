"use client";

import { FEATURES, PACKAGES } from "@/constants/web";
import Grid from "@mui/material/Grid2";
import { useTranslations } from "next-intl";
import Available from "../../../../public/icons/availableIcon.svg";
import Checked from "../../../../public/icons/checkedIcon.svg";
import GoToSiteBtn from "../shared/GoToSiteBtn";
import MotionWrapper from "@/components/tools/MotionWrapper";
import { useRef } from "react";
import { useInView } from "motion/react";

const FeaturesSection = () => {
  const t = useTranslations("ECommerce.FeaturesSection");
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <div className="featuresSection" id="features">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="115px"
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
          <div style={{ margin: "0 auto" }}>
            <div className="sectionHead">
              <h2>{t("title")}</h2>
              <p>{t("subtitle")}</p>
            </div>
          </div>
        </Grid>

        <Grid
          ref={ref2}
          size={{ xs: 12 }}
          container
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{
            "@media (max-width: 992px)": {
              justifyContent: "center",
              gap: "25px",
            },
            "@media (max-width: 767px)": {
              justifyContent: "space-between",
            },
          }}
        >
          <Grid size={{ xs: 4 }}>
            <MotionWrapper
              initial={{ opacity: 0, y: 100 }}
              animate={
                isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              }
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <div>
                <div className="featuresCard">
                  <h3>{t("features.title")}</h3>

                  <ul>
                    {FEATURES.map((feature, index) => (
                      <li key={index}>
                        <Checked /> <span>{t(feature)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionWrapper>
          </Grid>

          {PACKAGES.map((item) => (
            <Grid key={item.title} size={{ xs: 4 }}>
              <MotionWrapper
                initial={{ opacity: 0, y: 100 }}
                animate={
                  isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                }
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <div>
                  <div className="features">
                    <div className="content">
                      <div className="packageHead">
                        <h4>{t(item.title)}</h4>
                      </div>
                      <GoToSiteBtn link={item.link} />
                      <ul>
                        {item.features.map((feature, index) => (
                          <li key={`${feature}-${index}`}>
                            {feature === "checked" ? (
                              <Available />
                            ) : feature === "" ? (
                              ""
                            ) : (
                              t(feature)
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default FeaturesSection;
