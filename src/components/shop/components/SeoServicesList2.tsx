import MotionWrapper from "@/components/tools/MotionWrapper";
import { services2 } from "@/constants/campaigns";
import { Box, Card, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  gap: { xs: "2rem", sm: "3rem", md: "4rem", lg: "5rem" },
  width: "100%",
};

const cardContainerStyles = {
  display: "flex",
  gap: { xs: "2rem", sm: "2rem", md: "3rem", lg: "4rem" },
  flexWrap: "wrap",
  justifyContent: "center",
};

const cardStyles = {
  height: "100%",
  position: "relative",
  display: "flex",
  zIndex: 0,
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
  gap: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
  "@media(max-width:900px)": {
    minHeight: "112px",
  },
  "@media(max-width:480px)": {
    minHeight: "auto",
  },
};

const SeoServicesList = () => {
  const t = useTranslations("MarketingCampaigns.SeoSection.services");

  const locale = useLocale();

  const typographyStyles = {
    fontWeight: 600,
    fontSize: { xs: "16px", sm: locale === "ar" ? "20px" : "18px" },
    lineHeight: locale === "ar" ? "30px" : "24px",
    letterSpacing: "0%",
    textAlign: "center",
    color: "#FFFFFF82",
  };

  return (
    <MotionWrapper
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{ width: "100%" }}
    >
      <Box sx={containerStyles}>
        <Box sx={cardContainerStyles}>
          {services2.map((service, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: "175px", sm: "256px" },
                height: { xs: "auto", sm: "112px" },
                minHeight: "112px",
              }}
            >
              <MotionWrapper
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween", stiffness: 200, damping: 10 }}
                style={{ height: "100%" }}
                className="hover"
              >
                <Card sx={cardStyles} className="content">
                  <Typography variant="h6" sx={typographyStyles}>
                    {t(service.title)}
                  </Typography>
                </Card>
              </MotionWrapper>
            </Box>
          ))}
        </Box>
      </Box>
    </MotionWrapper>
  );
};

export default SeoServicesList;
