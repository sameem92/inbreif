"use client";
import { goToWhatsApp } from "@/util/lib";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";

const MainButton = () => {
  const t = useTranslations("InformationalReservation");
  return (
    <Button
      onClick={goToWhatsApp}
      sx={{
        paddingX: "18px",
        borderRadius: 60,
        fontWeight: 600,
        fontSize: "1.375",
        background: "transparent",
        borderColor: "#e1e42a",
        color: "#e1e42a",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      {t("cta")}
    </Button>
  );
};

export default MainButton;
