"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { goToWhatsApp } from "@/util/lib";
import { Button } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

const HeroButton = () => {
  const t = useTranslations("MarketingCampaigns.HeroSection");
  const locale = useLocale();
  const { currency } = useCurrency();

  const isGermanNumber = locale === "de" || currency.code === "DE";

  return (
    <Button
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "5rem",
        padding: "1rem 2rem",
        gap: "6px",
        borderRadius: "52px",
        background: "#E0E324",
        backdropFilter: "blur(24px)",
        color: "#001014",
        textAlign: "center",
        fontSize: "1.6rem",
        fontWeight: 600,
        lineHeight: "1.6rem",
      }}
      onClick={() => goToWhatsApp(isGermanNumber)}
    >
      {t("button")}
    </Button>
  );
};

export default HeroButton;
