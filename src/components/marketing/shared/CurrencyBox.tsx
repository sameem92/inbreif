"use client";

import { useCurrency } from "@/context/CurrencyContext";
import { useLocale, useTranslations } from "next-intl";

const CurrencyBox = ({ plan }) => {
  const t = useTranslations("DesignMotion.DesignVideoPackages");
  const locale = useLocale();
  const { currency } = useCurrency();

  return (
    <>
      {currency && currency.symbol !== "not shown" && locale !== "de" && (
        <div className="plan_price">
          <span>{plan[currency.code]}</span> <span>{t(currency.symbol)}</span>
        </div>
      )}
    </>
  );
};

export default CurrencyBox;
