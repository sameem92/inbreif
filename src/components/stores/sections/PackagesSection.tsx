"use client";

import React, { useRef, useState } from "react";

// Components
import Grid from "@mui/material/Grid2";
import { Box, Tab, Tabs } from "@mui/material";
import Packages from "@/components/tools/package/packages";
import { useTranslations } from "next-intl";
import { plansM, plansY } from "@/constants/web";
import { useInView } from "framer-motion";
import MotionWrapper from "@/components/tools/MotionWrapper";

// Types
interface TabPanelProps {
  index: number | string;
  value: number | string;
  children: React.ReactNode;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props: TabPanelProps) {
  const { value, index, children, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      sx={{
        width: "100%",
        paddingTop: "3rem",
      }}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </Box>
  );
}

const PackagesSection = () => {
  const [value, setValue] = useState<string | number>(0);
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: string | number
  ) => {
    setValue(newValue);
  };

  const t = useTranslations("ECommerce.PackagesSection");

  return (
    <div className="packagesSection package" id="packages">
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
          <div>
            <div className="sectionHead">
              <h2>{t("title")}</h2>
              <p>{t("description")}</p>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <MotionWrapper
            initial={{
              y: 100,
              opacity: 0,
            }}
            animate={isInView1 ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <div>
              <Box
                ref={ref1}
                sx={{
                  width: "100%",
                  "& .MuiTabs-flexContainer": {
                    gap: "3.2rem",
                  },
                }}
              >
                <Tabs
                  className="tabs"
                  value={value}
                  onChange={handleChange}
                  sx={{
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Tab label={t("yearLabel")} {...a11yProps(0)} />
                  <Tab label={t("monthLabel")} {...a11yProps(1)} />
                </Tabs>

                <CustomTabPanel value={value} index={0}>
                  <Grid
                    container
                    alignItems="flex-end"
                    columnSpacing={2}
                    rowSpacing={6}
                  >
                    <Packages plans={plansY} more buttonText={t("button")} />
                  </Grid>
                </CustomTabPanel>

                <CustomTabPanel value={value} index={1}>
                  <Grid
                    container
                    alignItems="flex-end"
                    columnSpacing={2}
                    rowSpacing={6}
                  >
                    <Packages plans={plansM} more buttonText={t("button")} />
                  </Grid>
                </CustomTabPanel>
              </Box>
            </div>
          </MotionWrapper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PackagesSection;
