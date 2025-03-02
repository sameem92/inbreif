// Components
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Icons
import { useCurrency } from "@/context/CurrencyContext";
import { goToSite, goToWhatsApp } from "@/util/lib";
import { useLocale, useTranslations } from "next-intl";
import Checked from "../../../../public/icons/checkedIcon.svg";
import MotionWrapper from "../MotionWrapper";

const Packages = ({ plans, className = "", more, buttonText }) => {
  const t = useTranslations("ECommerce.PackagesSection.plans");
  const locale = useLocale();
  const { currency } = useCurrency();
  const isGermanNumber = locale === "de" || currency.code === "DE";

  return (
    <>
      {plans?.map((plan, i) => (
        <Grid key={plan.title} size={{ xs: 12, sm: 4 }}>
          <MotionWrapper
            whileHover={{ scale: 1.02 }}
            transition={{
              type: "tween",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div className={`plancard ${i === 1 ? "gold" : ""}`}>
              <div className="content">
                <h4>{t(plan.title)}</h4>
                {currency &&
                  currency.symbol !== "not shown" &&
                  locale !== "de" && (
                    <div className="plan_price">
                      <span>{plan[currency.code]}</span>{" "}
                      <span>{t(currency.symbol)}</span>
                    </div>
                  )}
                {plan.label && <div className="label">{plan.label}</div>}
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
                    background:
                      className !== "planCardS2" && i === 1
                        ? "#E0E324"
                        : "transparent",
                    borderColor:
                      className !== "planCardS2" && i === 1
                        ? "transparent"
                        : "#e1e42a",
                  }}
                  onClick={() => goToSite(plan?.link)}
                >
                  {buttonText}
                </Button>
                {more && <a href="#features">{t("moreButton")}</a>}
              </div>
            </div>
          </MotionWrapper>
        </Grid>
      ))}

      <Grid size={{ xs: 12, sm: 4 }}>
        <MotionWrapper
          whileHover={{ scale: 1.02 }}
          transition={{
            type: "tween",
            stiffness: 400,
            damping: 10,
          }}
        >
          <div className="plancard custom">
            <div className="content">
              <h4>{t("customPlan.title")}</h4>

              <p>{t("customPlan.description")}</p>

              <Button
                onClick={() => goToWhatsApp(isGermanNumber)}
                sx={{
                  background: "transparent",
                }}
              >
                {t("customPlan.button")}
              </Button>
            </div>
          </div>
        </MotionWrapper>
      </Grid>
    </>
  );
};

export default Packages;
