import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const services = [
  { title: "analysis.title" },
  { title: "keyword_optimization.title" },
  { title: "keyword_research.title" },
  { title: "performance_tracking.title" },
  { title: "on_page_seo.title" },
  { title: "local_seo.title" },
  { title: "technical_seo.title" },
  { title: "off_page_seo.title" },
];

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
  padding: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
  gap: { xs: "1rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" },
  "@media(max-width:900px)": {
    minHeight: "112px",
  },
  "@media(max-width:480px)": {
    minHeight: "auto",
  },
};

const cardContentStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.6rem",
  height: "100%",
};

const SeoServicesList = () => {
  const t = useTranslations("MarketingCampaigns.SeoSection.services");

  const locale = useLocale();

  const typographyStyles = {
    fontWeight: 700,
    fontSize: locale === "ar" ? "20px" : "18px",
    lineHeight: locale === "ar" ? "30px" : "24px",
    letterSpacing: "0%",
    textAlign: "center",
    color: "#FFFFFF82",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{ width: "100%" }}
    >
      <Box sx={containerStyles}>
        <Box sx={cardContainerStyles}>
          {services.map((service, index) => (
            <Box key={index} width="256px" height="112px">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween", stiffness: 200, damping: 10 }}
                style={{ height: "100%" }}
                className="hover"
              >
                <Card sx={cardStyles} className="content">
                  <CardContent sx={cardContentStyles}>
                    <Typography variant="h6" sx={typographyStyles}>
                      {t(service.title)}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default SeoServicesList;
