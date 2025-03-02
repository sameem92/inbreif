"use client";

import { FEATURES } from "@/constants/mobile";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslations } from "next-intl";
import Image from "next/image";
import MotionWrapper from "../tools/MotionWrapper";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FeaturesList = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const animation = isMobile ? { once: true } : { once: true, amount: 0.3 };
  const t = useTranslations("MobileApps");
  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  return (
    <Grid
      ref={ref2}
      size={{ xs: 12 }}
      container
      rowSpacing={{ xs: 2, lg: 3 }}
      columnSpacing={{ xs: 2, lg: 3 }}
    >
      {FEATURES.map((feature, index) => (
        <Grid key={feature.title} size={{ xs: 6, sm: 3 }}>
          <MotionWrapper
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.1,
            }}
          >
            <MotionWrapper
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
            </MotionWrapper>
          </MotionWrapper>
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturesList;
