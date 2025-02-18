import React from "react";

// Components
import Grid from "@mui/material/Grid2";
import SliderS2 from "@/components/tools/sliders/sliderS2";

// Images & Icons
import product1 from "../../../../public/images/store/products/product1.png";
import product2 from "../../../../public/images/store/products/product2.png";
import product3 from "../../../../public/images/store/products/product3.png";
import product4 from "../../../../public/images/store/products/product4.png";
import product5 from "../../../../public/images/store/products/product5.png";
import product6 from "../../../../public/images/store/products/product6.png";
import product7 from "../../../../public/images/store/products/product7.png";
import product8 from "../../../../public/images/store/products/product8.png";
import product9 from "../../../../public/images/store/products/product9.png";
import product10 from "../../../../public/images/store/products/product10.png";
import { useTranslations } from "next-intl";

const TemplatesSection = () => {
  const t = useTranslations("ECommerce.TemplatesSection");

  const products = [
    { title: t("perfumes"), image: product1 },
    { title: t("electronic_devices"), image: product2 },
    { title: t("abayas_fashion"), image: product3 },
    { title: t("furniture_home"), image: product4 },
    { title: t("children_toys"), image: product5 },
    { title: t("restaurants_cafes"), image: product6 },
    { title: t("digital_products"), image: product7 },
    { title: t("accessories"), image: product8 },
    { title: t("gifts_decor"), image: product9 },
    { title: t("household_items"), image: product10 },
  ];

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
            <SliderS2 products={products} />
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
