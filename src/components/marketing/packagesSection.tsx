/* eslint-disable @typescript-eslint/ban-ts-comment */

//@ts-nocheck

// Components
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

// Icons
import { useCurrency } from "@/context/CurrencyContext";
import { useLocale, useTranslations } from "next-intl";
import Checked from "../../../public/icons/checkedIcon.svg";

const plans = [
  {
    title: "packages.package1.title",
    USD: "210",
    SAR: "800",
    KD: "65",
    OMR: "80",
    features: [
      "packages.package1.features.feature1",
      "packages.package1.features.feature2",
      "packages.package1.features.feature3",
      "packages.package1.features.feature4",
      "packages.package1.features.feature5",
      "packages.package1.features.feature6",
      "packages.package1.features.feature7",
    ],
  },
  {
    title: "packages.package2.title",
    USD: "320",
    SAR: "1200",
    KD: "100",
    OMR: "120",
    features: [
      "packages.package2.features.feature1",
      "packages.package2.features.feature2",
      "packages.package2.features.feature3",
      "packages.package2.features.feature4",
      "packages.package2.features.feature5",
      "packages.package2.features.feature6",
      "packages.package2.features.feature7",
    ],
  },
  {
    title: "packages.package3.title",
    USD: "135",
    SAR: "500",
    KD: "40",
    OMR: "50",
    features: [
      "packages.package3.features.feature1",
      "packages.package3.features.feature2",
      "packages.package3.features.feature3",
      "packages.package3.features.feature4",
      "packages.package3.features.feature5",
      "packages.package3.features.feature6",
      "packages.package3.features.feature7",
    ],
  },
];

const PackagesSection = () => {
  const locale = useLocale();
  const t = useTranslations("DesignMotion.DesignVideoPackages");
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
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <Box
              sx={{
                width: "100%",
                "& .MuiTabs-flexContainer": {
                  gap: "3.2rem",
                },
              }}
            >
              <Grid container columnSpacing={2} rowSpacing={6}>
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
                        className={`plancard planCardS2 ${
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
