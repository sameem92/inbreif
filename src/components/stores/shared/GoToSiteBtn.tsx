import { goToSite } from "@/util/lib";
import { Button } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

const GoToSiteBtn = ({ link }) => {
  const t = useTranslations("ECommerce.FeaturesSection");
  const locale = useLocale();

  return (
    <Button
      sx={{
        color: "#e1e42a",
        background: "transparent",
        borderColor: "#e1e42a",
        display: "block",
        width: "100%",
        maxWidth: "326px",
        margin: "0 auto",
        border: "2px solid",
        borderRadius: "60px",
        fontSize: {
          xs: "8px",
          sm: "14px",
          md: "18px",
          lg: "20px",
          xl: "22px",
        },
        "@media (max-width: 432px)": {
          fontSize: locale === "de" ? "6px" : "8px",
        },
        fontWeight: "600",
        marginBottom: "32px",
        textAlign: "center",
      }}
      onClick={() => goToSite(link)}
    >
      {t("button")}
    </Button>
  );
};

export default GoToSiteBtn;
