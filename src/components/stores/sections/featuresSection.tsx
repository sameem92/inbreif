import React from "react";

// Components
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";

// Images & Icons
import Checked from "../../../../public/icons/checkedIcon.svg";
import Available from "../../../../public/icons/availableIcon.svg";
import { useTranslations } from "next-intl";

const features = [
  "features.feature1",
  "features.feature2",
  "features.feature3",
  "features.feature4",
  "features.feature5",
  "features.feature6",
  "features.feature7",
  "features.feature8",
  "features.feature9",
  "features.feature10",
  "features.feature11",
  "features.feature12",
  "features.feature13",
  "features.feature14",
  "features.feature15",
  "features.feature16",
  "features.feature17",
  "features.feature18",
  "features.feature19",
  "features.feature20",
  "features.feature21",
  "features.feature22",
  "features.feature23",
  "features.feature24",
  "features.feature25",
  "features.feature26",
  "features.feature27",
  "features.feature28",
];

const packages = [
  {
    title: "silver",
    features: [
      "Unlimited",
      "Unlimited",
      "Unlimited",
      "1",
      "checked",
      "checked",
      "checked",
      "OneLanguage",
      "",
      "threePages",
      "checked",
      "checked",
      "checked",
      "checked",
      "",
      "checked",
      "checked",
      "checked",
      "branch",
      "",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "workingHours",
    ],
    link: "https://store.inbrief.click/subsription/منتج/الباقة-الفضية/",
  },
  {
    title: "gold",
    features: [
      "Unlimited",
      "Unlimited",
      "Unlimited",
      "3",
      "checked",
      "MultipleGateways",
      "checked",
      "twoLanguages",
      "checked",
      "tenPages",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "threeBranches",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "checked",
      "24Hours",
    ],
    link: "https://store.inbrief.click/subsription/منتج/الباقة-الذهبية/",
  },
];

const FeaturesSection = () => {
  const t = useTranslations("ECommerce.FeaturesSection");
  const goToSite = (link) => {
    window.open(link, "_target");
  };

  return (
    <div className="featuresSection" id="features">
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        justifyContent="center"
        alignItems="center"
        gap="115px"
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
          <div style={{ margin: "0 auto" }}>
            <div className="sectionHead">
              <h2>{t("title")}</h2>
              <p>{t("subtitle")}</p>
            </div>
          </div>
        </Grid>

        <Grid
          size={{ xs: 12 }}
          container
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{
            "@media (max-width: 992px)": {
              justifyContent: "center",
              gap: "25px",
            },
            "@media (max-width: 767px)": {
              justifyContent: "center",
              gap: "10px",
            },
          }}
        >
          <Grid size={{ xs: 4 }}>
            <div>
              <div className="featuresCard">
                <h3>{t("features.title")}</h3>

                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>
                      <Checked /> <span>{t(feature)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>

          {packages.map((item) => (
            <Grid key={item.title} size={{ xs: 4 }}>
              <div>
                <div className={`features`}>
                  <div className="content">
                    <div className="packageHead">
                      <h4>{t(item.title)}</h4>

                      <Button
                        sx={{
                          color: "#e1e42a",
                          background: "transparent",
                          borderColor: "#e1e42a",
                        }}
                        onClick={() => goToSite(item.link)}
                      >
                        {t("button")}
                      </Button>
                    </div>

                    <ul>
                      {item.features.map((feature, index) => (
                        <li key={`${feature}-${index}`}>
                          {feature === "checked" ? (
                            <Available />
                          ) : feature === "" ? (
                            ""
                          ) : (
                            t(feature)
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default FeaturesSection;
