"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { goToWhatsApp } from "@/util/lib";
import { Button } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const ContactBtn = () => {
  const t = useTranslations("ECommerce.HeroSection");
  const locale = useLocale();
  const { currency } = useCurrency();

  const isGermanNumber = locale === "de" || currency.code === "DE";

  return (
    <Button
      onClick={() => goToWhatsApp(isGermanNumber)}
      sx={{
        color: "#fff",
        paddingX: "24px",
        paddingY: "12px",
        borderRadius: 60,
        fontWeight: 600,
        fontSize: { sm: 18, md: 22 },
        background: "transparent",
        borderColor: "#e1e42a",
        borderWidth: 1,
        borderStyle: "solid",
        margin: 0,
      }}
    >
      {t("contactButton")}
    </Button>
  );
};

export default ContactBtn;
