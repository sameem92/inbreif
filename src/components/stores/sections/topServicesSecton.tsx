import Image from "next/image";

// Components
import Grid from "@mui/material/Grid2";

// Images & Icons
import { useLocation } from "@/context/LocationContext";
import { useLocale, useTranslations } from "next-intl";
import service1Foreign from "../../../../public/foreign/service1Foreign.png";
import service1 from "../../../../public/images/store/services/service1.png";
import service2 from "../../../../public/images/store/services/service2.png";
import service3 from "../../../../public/images/store/services/service3.png";

const TopServicesSecton = () => {
  const t = useTranslations("ECommerce.TopServicesSection");
  const locale = useLocale();
  const { location } = useLocation();

  return (
    <div className="topServicesSecton">
      <div style={{ margin: "0 auto" }}>
        <Grid
          container
          spacing={{ xs: 4, sm: 2 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "100px 15rem ",
            "@media (max-width: 1400px)": {
              padding: "80px 10rem 50px",
            },
            "@media (max-width: 1240px)": {
              padding: "50px 4rem",
            },
            "@media (max-width: 992px)": {
              padding: "50px 4rem 0px",
            },
            "@media (max-width: 767px)": {
              padding: "50px 4rem",
            },
            "@media (max-width: 600px)": {
              padding: "80px 4rem 0px",
            },
            "@media (max-width: 480px)": {
              padding: "5rem 4rem 0px",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <div>
              <div className="sectionHead">
                <h2>{t("service1.title")}</h2>
              </div>
              <ul>
                <li>{t("service1.feature1")}</li>
                <li>{t("service1.feature2")}</li>
                <li>{t("service1.feature3")}</li>
                <li>{t("service1.feature4")}</li>
                <li>{t("service1.feature5")}</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <div className="img">
              {locale === "ar" && location === "not_foreign" ? (
                <Image src={service1} alt="service1" />
              ) : (
                <Image src={service1Foreign} alt="service1" />
              )}
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ margin: "0 auto" }}>
        <Grid
          container
          spacing={{ xs: 4, sm: 2 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "0px 15rem 100px 0rem",
            "@media (max-width: 1340px)": {
              padding: "0px 10rem 50px 0rem",
            },
            "@media (max-width: 1240px)": {
              padding: "0rem 4rem 50px 0rem",
            },
            "@media (max-width: 992px)": {
              padding: "0rem 4rem 50px 0rem",
            },
            "@media (max-width: 480px)": {
              padding: "0px 2rem 48px 0rem",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }} order={{ xs: 2, sm: 1 }}>
            <div className="img">
              <Image src={service2} height={365} width={400} alt="service2" />
            </div>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }}
            order={{ xs: 1, sm: 2 }}
            sx={{
              "@media (max-width: 992px)": {
                padding: "0 2rem",
              },
            }}
          >
            <div>
              <div className="sectionHead">
                <h2>{t("service2.title")}</h2>
                <p>{t("service2.description")}</p>
              </div>
              <ul>
                <li>{t("service2.feature1")}</li>
                <li>{t("service2.feature2")}</li>
                <li>{t("service2.feature3")}</li>
                <li>{t("service2.feature4")}</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>

      <div style={{ margin: "0 auto" }}>
        <Grid
          container
          spacing={{ xs: 2 }}
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "0px 15rem 100px",
            "@media (max-width: 1340px)": {
              padding: "0px 10rem 50px",
            },
            "@media (max-width: 1240px)": {
              padding: "0px 4rem 50px",
            },
            "@media (max-width: 992px)": {
              padding: "0px 4rem 50px",
            },
            "@media (max-width: 767px)": {
              padding: "0px 4rem 80px",
            },
            "@media (max-width: 600px)": {
              padding: "0px 4rem 80px",
            },
            "@media (max-width: 480px)": {
              padding: "0px 2rem 0rem",
            },
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <div>
              <div className="sectionHead">
                <h2>{t("service3.title")}</h2>
                <p>{t("service3.description")}</p>
              </div>
              <ul>
                <li>{t("service3.feature1")}</li>
                <li>{t("service3.feature2")}</li>
                <li>{t("service3.feature3")}</li>
                <li>{t("service3.feature4")}</li>
                <li>{t("service3.feature5")}</li>
                <li>{t("service3.feature6")}</li>
              </ul>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <div className="img">
              <Image src={service3} height={365} width={400} alt="service3" />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default TopServicesSecton;
