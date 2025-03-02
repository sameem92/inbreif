"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { goToWhatsApp } from "@/util/lib";
import { Button } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

const StartBtn = () => {
  const t = useTranslations("InformationalReservation.HeroSection");
  const locale = useLocale();
  const { currency } = useCurrency();

  const isGermanNumber = locale === "de" || currency.code === "DE";

  return (
    <Button
      onClick={() => goToWhatsApp(isGermanNumber)}
      sx={{
        paddingX: "24px",
        borderRadius: 60,
        fontWeight: 600,
        fontSize: { sm: 18, md: 22 },
      }}
    >
      {t("startButton")}
    </Button>
  );
};

export default StartBtn;
