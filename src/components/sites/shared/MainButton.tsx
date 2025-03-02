"use client";
import { useCurrency } from "@/context/CurrencyContext";
import { goToWhatsApp } from "@/util/lib";
import { Button } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

const MainButton = () => {
  const t = useTranslations("InformationalReservation");
  const locale = useLocale();
  const { currency } = useCurrency();

  const isGermanNumber = locale === "de" || currency.code === "DE";
  return (
    <Button
      onClick={() => goToWhatsApp(isGermanNumber)}
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

        ":hover": {
          border: "none",
        },
      }}
    >
      {t("cta")}
    </Button>
  );
};

export default MainButton;
