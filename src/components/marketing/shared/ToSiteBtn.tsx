"use client";

import { goToSite } from "@/util/lib";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";

const ToSiteBtn = ({ index }) => {
  const t = useTranslations("DesignMotion.DesignVideoPackages");

  return (
    <Button
      sx={{
        color: "#001014",
        background: index === 1 ? "#E0E324" : "transparent",
        borderColor: index === 1 ? "transparent" : "#e1e42a",
      }}
      onClick={() => goToSite("http://wa.me/96877276659")}
    >
      {t("button")}
    </Button>
  );
};

export default ToSiteBtn;
