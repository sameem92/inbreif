"use client";

import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { FeatureBox } from "../shared/FeatureBox";

// Images & Icons
import Icon1 from "../../../../public/icons/icon1.svg";
import Icon10 from "../../../../public/icons/icon10.svg";
import Icon11 from "../../../../public/icons/icon11.svg";
import Icon12 from "../../../../public/icons/icon12.svg";
import Icon13 from "../../../../public/icons/icon13.svg";
import Icon2 from "../../../../public/icons/icon2.svg";
import Icon3 from "../../../../public/icons/icon3.svg";
import Icon4 from "../../../../public/icons/icon4.svg";
import Icon5 from "../../../../public/icons/icon5.svg";
import Icon6 from "../../../../public/icons/icon6.svg";
import Icon7 from "../../../../public/icons/icon7.svg";
import Icon8 from "../../../../public/icons/icon8.svg";
import Icon9 from "../../../../public/icons/icon9.svg";
import Feat1 from "../../../../public/images/store/feat1.svg";
import Feat2 from "../../../../public/images/store/feat2.svg";
import feat3 from "../../../../public/images/store/feat3.png";

import ForeignFeat1 from "../../../../public/foreign/foreginFeet1.svg";
import ForeignFeat2 from "../../../../public/foreign/foreignFeet2.svg";
import ForeignFeat3 from "../../../../public/foreign/foreignFeet3.png";
import { useLocale } from "next-intl";
import { useRef } from "react";
import { useInView } from "motion/react";
import MotionWrapper from "@/components/tools/MotionWrapper";
// Feature Data

const MainFeaturesSection = () => {
  const locale = useLocale();
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

  const FEATURES = [
    {
      titleKey: "feature1.title",
      descKey: "feature1.description",
      image: locale === "ar" ? <Feat1 /> : <ForeignFeat1 />,
      listItems: [
        { icon: <Icon1 />, key: "feature1.list.item1" },
        { icon: <Icon2 />, key: "feature1.list.item2" },
        { icon: <Icon3 />, key: "feature1.list.item3" },
      ],
    },
    {
      titleKey: "feature2.title",
      descKey: "feature2.description",
      image: locale === "ar" ? <Feat2 /> : <ForeignFeat2 />,
      listItems: [
        { icon: <Icon4 />, key: "feature2.list.item1" },
        { icon: <Icon5 />, key: "feature2.list.item2" },
        { icon: <Icon6 />, key: "feature2.list.item3" },
        { icon: <Icon7 />, key: "feature2.list.item4" },
      ],
    },
    {
      titleKey: "feature3.title",
      descKey: "feature3.description",
      image: (
        <Image src={locale === "ar" ? feat3 : ForeignFeat3} alt="Feature 3" />
      ),
      listItems: [
        { icon: <Icon8 />, key: "feature3.list.item1" },
        { icon: <Icon9 />, key: "feature3.list.item2" },
        { icon: <Icon10 />, key: "feature3.list.item3" },
        { icon: <Icon11 />, key: "feature3.list.item4" },
        { icon: <Icon12 />, key: "feature3.list.item5" },
        { icon: <Icon13 />, key: "feature3.list.item6" },
      ],
    },
  ];

  return (
    <div className="mainFeaturesSection">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: {
            xs: "15px 2rem 5rem",
            sm: "15px 10rem 10rem",
            md: "100px 6rem",
            lg: "100px 20rem",
          },
        }}
      >
        <Grid
          size={{ xs: 12 }}
          display="flex"
          flexDirection="column"
          gap="50px"
          className="feats"
          ref={ref1}
        >
          {FEATURES.map((feature, index) => (
            <MotionWrapper
              key={index}
              initial={{ y: 100 }}
              animate={isInView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <FeatureBox {...feature} />
            </MotionWrapper>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default MainFeaturesSection;
