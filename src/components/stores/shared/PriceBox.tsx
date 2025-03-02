"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { useLocale, useTranslations } from "next-intl";

const PriceBox = ({ index, service }) => {
  const locale = useLocale();
  const { currency } = useCurrency();
  const t = useTranslations("ECommerce.ServicesSection");

  return (
    <>
      {currency && currency.symbol !== "not shown" && locale !== "de" && (
        <div className="service_price">
          <span>{service[currency.code]}</span>
          <span>{t(currency.symbol)}</span>
          {index !== 7 && <span>/ {t("month")}</span>}
        </div>
      )}
    </>
  );
};

export default PriceBox;
