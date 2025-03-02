"use client";

import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const ScrollToPackagesBtn = () => {
  const t = useTranslations("ECommerce.HeroSection");

  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={scrollToPackages}
      sx={{ paddingX: "24px", paddingY: "12px" }}
    >
      {t("startButton")}
    </Button>
  );
};

export default ScrollToPackagesBtn;
