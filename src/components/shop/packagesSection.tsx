/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck

// Components
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

// Icons
import { useLocale, useTranslations } from "next-intl";
import Checked from "../../../public/icons/checkedIcon.svg";
import { useCurrency } from "@/context/CurrencyContext";

const plans = [
  {
    title: "bronze.title",
    USD: "400",
    SAR: "1500",
    KD: "125",
    OMR: "155",
    label: "bronze.description",
    features: [
      "bronze.feature1",
      "bronze.feature2",
      "bronze.feature3",
      "bronze.feature4",
      "bronze.feature5",
      "bronze.feature6",
      "bronze.feature7",
      "bronze.feature8",
      "bronze.feature9",
      "bronze.feature10",
      "bronze.feature11",
      "bronze.feature12",
    ],
  },
  {
    title: "gold.title",
    USD: "930",
    SAR: "3500",
    KD: "290",
    OMR: "360",
    label: "gold.description",
    features: [
      "gold.feature1",
      "gold.feature2",
      "gold.feature3",
      "gold.feature4",
      "gold.feature5",
      "gold.feature6",
      "gold.feature7",
      "gold.feature8",
      "gold.feature9",
      "gold.feature10",
      "gold.feature11",
      "gold.feature12",
      "gold.feature13",
      "gold.feature14",
      "gold.feature15",
    ],
  },
  {
    title: "silver.title",
    USD: "670",
    SAR: "2500",
    KD: "210",
    OMR: "255",
    label: "silver.description",
    features: [
      "silver.feature1",
      "silver.feature2",
      "silver.feature3",
      "silver.feature4",
      "silver.feature5",
      "silver.feature6",
      "silver.feature7",
      "silver.feature8",
      "silver.feature9",
      "silver.feature10",
      "silver.feature11",
      "silver.feature12",
      "silver.feature13",
      "silver.feature14",
    ],
  },
];

const PackagesSection = () => {
  const t = useTranslations("MarketingCampaigns.PackagesSection");
  const locale = useLocale();
  const { currency } = useCurrency();

  const goToSite = (link) => {
    window.open(link, "_target");
  };

  return (
    <div className="package" id="packages">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="80px"
        sx={{
          padding: "100px 10rem 100px",
          "@media (max-width: 1340px)": {
            padding: "100px 2rem",
          },
          "@media (max-width: 1240px)": {
            padding: "100px 1rem",
          },
          "@media (max-width: 992px)": {
            padding: "100px 2rem",
          },
          "@media (max-width: 480px)": {
            padding: "5rem 2rem",
            gap: "40px",
            ".main-secandry-title": {
              fontSize: "3rem",
              lineHeight: "5rem",
            },
          },
        }}
      >
        <Grid size={{ xs: 12 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <h2 className="main-secandry-title">{t("title")}</h2>
          </motion.div>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Box
              sx={{
                width: "100%",
                "& .MuiTabs-flexContainer": {
                  gap: "3.2rem",
                },
              }}
            >
              <Grid
                container
                columnSpacing={2}
                rowSpacing={6}
                alignItems="flex-end"
              >
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
                      <div
                        className={`plancard withMinHeight ${
                          i === 1 ? "gold" : ""
                        }`}
                      >
                        <div className="content">
                          <h4>{t(plan.title)}</h4>
                          {currency &&
                            currency.symbol !== "not shown" &&
                            locale !== "de" && (
                              <div className="plan_price">
                                <span>{plan[currency.code]}</span>
                                <span>{t(currency.symbol)}</span>
                              </div>
                            )}
                          {plan.label && (
                            <div className="label">{t(plan.label)}</div>
                          )}
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
                              background: i === 1 ? "#E0E324" : "transparent",
                              borderColor: i === 1 ? "transparent" : "#e1e42a",
                            }}
                            onClick={() => goToSite("http://wa.me/96877276659")}
                          >
                            {t("button")}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PackagesSection;
