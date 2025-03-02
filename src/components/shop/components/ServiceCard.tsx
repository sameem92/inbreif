"use client";

import MotionWrapper from "@/components/tools/MotionWrapper";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export const ServiceCard = ({ item }) => {
  const t = useTranslations("MarketingCampaigns.SeoSection.benefits");
  const locale = useLocale();
  return (
    <Box
      sx={{
        width: { xs: "80%", sm: locale === "ar" ? "237px" : "255px" },
        height: {
          xs: "auto",
          sm: locale === "ar" ? "324px" : locale === "de" ? "380px" : "340px",
        },
      }}
    >
      <MotionWrapper
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
            padding: "53px 0 12px 0",
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
                fontWeight: 600,
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
      </MotionWrapper>
    </Box>
  );
};
