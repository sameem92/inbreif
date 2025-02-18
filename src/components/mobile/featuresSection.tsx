"use client";

import Image from "next/image";

// Components
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

// Icons
import { Button, useMediaQuery } from "@mui/material";
import { useTranslations } from "next-intl";
import feature1 from "../../../public/images/features/feature1.png";
import feature10 from "../../../public/images/features/feature10.png";
import feature11 from "../../../public/images/features/feature11.png";
import feature12 from "../../../public/images/features/feature12.png";
import feature13 from "../../../public/images/features/feature13.png";
import feature14 from "../../../public/images/features/feature14.png";
import feature15 from "../../../public/images/features/feature15.png";
import feature16 from "../../../public/images/features/feature16.png";
import feature2 from "../../../public/images/features/feature2.png";
import feature3 from "../../../public/images/features/feature3.png";
import feature4 from "../../../public/images/features/feature4.png";
import feature5 from "../../../public/images/features/feature5.png";
import feature6 from "../../../public/images/features/feature6.png";
import feature7 from "../../../public/images/features/feature7.png";
import feature8 from "../../../public/images/features/feature8.png";
import feature9 from "../../../public/images/features/feature9.png";

const features = [
  {
    icon: feature1,
    title: "feature1",
  },
  {
    icon: feature2,
    title: "feature2",
  },
  {
    icon: feature3,
    title: "feature3",
  },
  {
    icon: feature4,
    title: "feature4",
  },
  {
    icon: feature5,
    title: "feature5",
  },
  {
    icon: feature6,
    title: "feature6",
  },
  {
    icon: feature7,
    title: "feature7",
  },
  {
    icon: feature8,
    title: "feature8",
  },
  {
    icon: feature9,
    title: "feature9",
  },
  {
    icon: feature10,
    title: "feature10",
  },
  {
    icon: feature11,
    title: "feature11",
  },
  {
    icon: feature12,
    title: "feature12",
  },
  {
    icon: feature13,
    title: "feature13",
  },
  {
    icon: feature14,
    title: "feature14",
  },
  {
    icon: feature15,
    title: "feature15",
  },
  {
    icon: feature16,
    title: "feature16",
  },
];

const FeaturesSection = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 };
  const goToWhatsApp = () => {
    window.open("http://wa.me/96877276659", "_target");
  };
  const t = useTranslations("MobileApps");

  return (
    <div className="featuresSection">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap="42px"
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
        }}
      >
        <Grid size={{ xs: 12 }}>
          <div className="sectionHead">
            <h2>{t("features.title")}</h2>
          </div>
        </Grid>
        <Grid
          size={{ xs: 12 }}
          container
          rowSpacing={{ xs: 2, lg: 3 }}
          columnSpacing={{ xs: 2, lg: 3 }}
        >
          {features.map((feature) => (
            <Grid key={feature.title} size={{ xs: 6, sm: 3 }}>
              <motion.div
                style={{ height: "100%", width: "100%" }}
                whileHover={{ scale: 1.02 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={animation}
              >
                <div className="feature">
                  <div className="content">
                    <div className="img">
                      <Image src={feature.icon} alt={feature.title} />
                    </div>
                    <h4>{t(`features.list.${feature.title}`)}</h4>
                  </div>
                </div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Button onClick={goToWhatsApp}>{t("features.button")}</Button>
      </Grid>
    </div>
  );
};

export default FeaturesSection;
