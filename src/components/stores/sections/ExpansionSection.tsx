"use client";

import MotionWrapper from "@/components/tools/MotionWrapper";
import Grid from "@mui/material/Grid2";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import gif from "../../../../public/expantion.gif";
import ExpansionCard from "../shared/ExpansionCard";

const ExpansionSection = () => {
  const t = useTranslations("ECommerce.ExpansionSection");
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });

  return (
    <div className="expansionSecton package">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap="62px"
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
            gap: 0,
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
          size={{ xs: 12 }}
          container
          alignItems="center"
          gap="50px 0px"
          ref={ref1}
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ textAlign: "center" }}>
            <MotionWrapper
              initial={{ y: 100 }}
              animate={isInView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image src={gif} height={504} width={270} alt="expantion" />
            </MotionWrapper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <MotionWrapper
              initial={{ y: 100 }}
              animate={isInView1 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ display: "grid", gap: "30px" }}
            >
              <ExpansionCard
                title={t("list1.title")}
                item1={t("list1.item1")}
                item2={t("list1.item2")}
              />
              <ExpansionCard
                title={t("list2.title")}
                item1={t("list2.item1")}
                item2={t("list2.item2")}
              />
            </MotionWrapper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExpansionSection;
