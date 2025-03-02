"use client";

import MotionWrapper from "@/components/tools/MotionWrapper";
import Checked from "../../../../public/icons/checkedIcon.svg";
import { useCurrency } from "@/context/CurrencyContext";
import { goToSite } from "@/util/lib";
import { Button } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

const PlanCard = ({ plan, index }) => {
  const locale = useLocale();
  const { currency } = useCurrency();
  const t = useTranslations("MarketingCampaigns.PackagesSection");

  return (
    <MotionWrapper
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "tween",
        stiffness: 400,
        damping: 10,
      }}
    >
      <div className={`plancard withMinHeight ${index === 1 ? "gold" : ""}`}>
        <div className="content">
          <h4>{t(plan.title)}</h4>
          {currency && currency.symbol !== "not shown" && locale !== "de" && (
            <div className="plan_price">
              <span>{plan[currency.code]}</span>{" "}
              <span>{t(currency.symbol)}</span>
            </div>
          )}
          {plan.label && <div className="label">{t(plan.label)}</div>}
          <ul>
            {plan?.features?.map((feature) => (
              <li key={feature}>
                <Checked /> <span>{t(feature)}</span>
              </li>
            ))}
          </ul>
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
        </div>
      </div>
    </MotionWrapper>
  );
};

export default PlanCard;
