import { useTranslations } from "next-intl";
import Grid from "@mui/material/Grid2";
import FeaturesList from "./FeaturesList";
import OrderAppBtn from "./OrderAppBtn";

const FeaturesSection = () => {
  const t = useTranslations("MobileApps");

  return (
    <div className="featuresSection">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        gap="42px"
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
        }}
      >
        <Grid size={{ xs: 12 }}>
          <div className="sectionHead">
            <h2>{t("features.title")}</h2>
          </div>
        </Grid>
        <FeaturesList />

        <OrderAppBtn />
      </Grid>
    </div>
  );
};

export default FeaturesSection;
