import React from "react";
import Image from "next/image";

// Components
import Grid from "@mui/material/Grid2";

// Images & Icons
import store from "../../../../public/images/store/store.png";
import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import { goToWhatsApp } from "@/util/lib";

const HeroSecion = () => {
  const t = useTranslations("ECommerce.HeroSection");

  const scrollToPackages = () => {
    const packagesSection = document.getElementById("packages");
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="heroSection" id="goToHome">
      <div>
        <Grid
          container
          spacing={{ xs: 4, sm: 8, lg: 12 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "20rem 10rem 0px",
            "@media (max-width: 1340px)": {
              padding: "20rem 7.5rem 0px 2rem",
            },
            "@media (max-width: 1240px)": {
              padding: "15rem 7.5rem 0px 1rem",
            },
            "@media (max-width: 992px)": {
              padding: "12rem 7.5rem 100px 2rem",
              ".store_img": {
                height: "300px",
                img: {
                  height: "100%",
                },
              },
            },
            "@media (max-width: 560px)": {
              ".store_img": {
                height: "250px",
                img: {
                  height: "100%",
                },
              },
            },
            "@media (max-width: 480px)": {
              padding: "12rem 2rem 0px",
            },
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <div>
              <h1>{t("title")}</h1>

              <p>{t("description")}</p>

              <div className="actions">
                <Button onClick={scrollToPackages}>{t("startButton")}</Button>
                <Button
                  onClick={goToWhatsApp}
                  sx={{ background: "transparent" }}
                  className="transparent"
                >
                  {t("contactButton")}
                </Button>
              </div>
            </div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <div className="store_img">
              <Image src={store} alt="store" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeroSecion;
