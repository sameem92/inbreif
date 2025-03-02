import { Grid, Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import FooterLink from "./FooterLink";

const FooterLinks = () => {
  const t = useTranslations("footer");

  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        display: "flex",
        alignItems: { xs: "flex-start", md: "center" },

        gap: "3.2rem",

        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: { xs: "2rem", md: "3.2rem" },
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            // fontFamily: "var(--font-ibm-plex-sans-arabic)",
            fontSize: { xs: "2rem", md: "1.6rem" },
            fontWeight: 700,
            lineHeight: "2.2rem",
            color: "#e1e42a",
          }}
        >
          {t("links.title")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2.4rem",
          }}
        >
          <FooterLink title={t("links.link1")} path="/about-us" />
          <FooterLink title={t("links.link2")} path="/mobile-apps" />
          <FooterLink title={t("links.link3")} path="/web-apps" />
          <FooterLink
            title={t("links.link4")}
            path="/informational-and-reservation-sites"
          />
          <FooterLink title={t("links.link5")} path="/design-and-marketing" />
          <FooterLink
            title={t("links.link6")}
            path="/marketing-and-campaigns"
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default FooterLinks;
