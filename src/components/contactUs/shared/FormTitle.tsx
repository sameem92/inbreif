import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const FormTitle = () => {
  const t = useTranslations("ContactUs");

  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: "3.6rem", md: "4rem" },
        fontWeight: 700,
        lineHeight: "6rem",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {t("title")}
      <br />
      {t("subtitle")}
    </Typography>
  );
};

export default FormTitle;
