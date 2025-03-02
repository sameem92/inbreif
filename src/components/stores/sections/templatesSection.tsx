import SliderS2 from "@/components/tools/sliders/sliderS2";
import Grid from "@mui/material/Grid2";
import { useTranslations } from "next-intl";

const TemplatesSection = () => {
  const t = useTranslations("ECommerce.TemplatesSection");

  return (
    <div className="templatesSection package">
      <div style={{ margin: "0 auto" }}>
        <Grid
          container
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
          <Grid size={{ xs: 12 }} marginBottom="82px">
            <div className="sectionHead">
              <h2>{t("title")}</h2>
              <p>{t("subtitle")}</p>
            </div>
          </Grid>
          <Grid size={{ xs: 12 }} marginBottom="28px">
            <SliderS2 />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <a
              href="http://wa.me/96877276659"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("order")}
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TemplatesSection;
