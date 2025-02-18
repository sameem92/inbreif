import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const services = [
  {
    icon: ".././icons/seo/seo1.svg",
    title: "increase_visibility.title",
    description: "increase_visibility.description",
  },
  {
    icon: ".././icons/seo/seo2.svg",
    title: "targeted_visitors.title",
    description: "targeted_visitors.description",
  },
  {
    icon: ".././icons/seo/seo3.svg",
    title: "better_user_experience.title",
    description: "better_user_experience.description",
  },
  {
    icon: ".././icons/seo/seo4.svg",
    title: "increase_sales.title",
    description: "increase_sales.description",
  },
  {
    icon: ".././icons/seo/seo5.svg",
    title: "performance_tracking.title",
    description: "performance_tracking.description",
  },
];

const SeoServicesList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: "4rem", md: "5rem", lg: "6rem" },
          width: "100%",
        }}
      >
        <Stack
          sx={{
            display: "grid",
            rowGap: { xs: "8rem", md: "6rem" },
            gridAutoFlow: "dense",
            gridTemplateColumns: {
              xs: "1fr", // 1 column on extra small screens
              sm: "repeat(2, minmax(250px, 1fr))", // 2 columns
              md: "repeat(3, minmax(250px, 1fr))", // 3 columns
              lg: "repeat(4, minmax(250px, 1fr))", // 4 columns
              xl: "repeat(5, minmax(250px, 1fr))", // 5 columns
            },

            columnGap: "3rem",
            justifyItems: "center", // Center the cards horizontally
            alignItems: "center", // Center the cards vertically
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {services.map((item, index) => (
            <ServiceCard key={index} item={item} />
          ))}
        </Stack>
      </Box>
    </motion.div>
  );
};

const ServiceCard = ({ item }) => {
  const t = useTranslations("MarketingCampaigns.SeoSection.benefits");
  const locale = useLocale();
  return (
    <Box
      width={locale === "ar" ? "237px" : "255px"}
      height={locale === "ar" ? "324px" : locale === "de" ? "380px" : "340px"}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "tween", stiffness: 200, damping: 10 }}
        style={{ height: "100%" }}
        className="hover"
      >
        <Box
          sx={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#E1E42A",
            position: "absolute",
            right: "50%",
            top: "0",
            transform: "translate(50%, -50%)",
            zIndex: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: 40, height: 40, position: "relative" }}>
            <Image
              src={item.icon}
              alt="icon"
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
        <Card
          sx={{
            display: "flex",
            zIndex: 0,
            flexDirection: "column",
            padding: "53px 0 0 0",
            gap: "2.4rem",

            "@media(max-width:480px)": {
              minHeight: "auto",
            },
          }}
          className="content"
        >
          <CardContent
            sx={{
              display: "grid",
              gridTemplateRows: "30% 70%",
              gap: "1.6rem",
              height: "100%",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize:
                  locale === "ar" ? "22px" : locale === "en" ? "20px" : "18px",
                lineHeight: locale === "ar" ? "33px" : "24px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#E1E42A",
              }}
            >
              {t(item.title)}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize:
                  locale === "ar" ? "20px" : locale === "en" ? "18px" : "16px",
                lineHeight: locale === "ar" ? "30px" : "22px",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#FFFFFF82",
              }}
            >
              {t(item.description)}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default SeoServicesList;
