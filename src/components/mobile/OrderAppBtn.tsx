"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { goToWhatsApp } from "@/util/lib";
import { Button } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

const OrderAppBtn = () => {
  const t = useTranslations("MobileApps");
  const locale = useLocale();
  const { currency } = useCurrency();

  const isGermanNumber = locale === "de" || currency.code === "DE";

  return (
    <Button onClick={() => goToWhatsApp(isGermanNumber)}>
      {t("features.button")}
    </Button>
  );
};

export default OrderAppBtn;
