// Components
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

// Icons
import { useCurrency } from "@/context/CurrencyContext";
import { useLocale, useTranslations } from "next-intl";
import Checked from "../../../../public/icons/checkedIcon.svg";

const Packages = ({ plans, className, more, buttonText }) => {
  const t = useTranslations("ECommerce.PackagesSection.plans");
  const locale = useLocale();

  const { currency } = useCurrency();
  console.log(currency);

  const goToWhatsApp = () => {
    window.open("http://wa.me/96877276659", "_target");
  };

  const goToSite = (link) => {
    window.open(link, "_target");
  };

  return (
    <>
      {plans?.map((plan, i) => (
        <Grid key={plan.title} size={{ xs: 12, sm: 4 }}>
          <motion.div
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
          </motion.div>
        </Grid>
      ))}

      <Grid size={{ xs: 12, sm: 4 }}>
        <motion.div
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
                onClick={goToWhatsApp}
                sx={{
                  background: "transparent",
                }}
              >
                {t("customPlan.button")}
              </Button>
            </div>
          </div>
        </motion.div>
      </Grid>
    </>
  );
};

export default Packages;
