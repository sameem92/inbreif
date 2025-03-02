import MotionWrapper from "@/components/tools/MotionWrapper";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";

const DesignSection = ({ section }) => {
  const t = useTranslations("MarketingCampaigns");

  return (
    <>
      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "90%", xl: "100%" },
          gap: { xs: "3rem", md: "5rem", lg: "7rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "2.9rem",
          }}
        >
          <MotionWrapper
            type="h1"
            className="main-shop-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {t(section.title)}
          </MotionWrapper>
          <Typography
            sx={{
              textAlign: "center !important",
            }}
            className="paragrph-shop"
          >
            {t(section.subtitle)}
          </Typography>
        </Box>

        <MotionWrapper
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: "4rem", md: "5rem", lg: "6rem" },
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Grid container spacing={3} justifyContent="center">
                {section.items.map((item, index) => (
                  <Grid
                    item
                    key={index}
                    xs={12}
                    sm={6}
                    md={4}
                    alignSelf="stretch"
                  >
                    <MotionWrapper
                      whileHover={{ scale: 1.02 }}
                      transition={{
                        type: "tween",
                        stiffness: 200,
                        damping: 10,
                      }}
                      style={{ height: "100%" }}
                      className="hover"
                    >
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          padding: { xs: "1.2rem", xl: "1.6rem 3rem" },
                          gap: "2.4rem",
                          "@media(max-width:900px": {
                            minHeight: "330px",
                          },
                          "@media(max-width:480px": {
                            minHeight: "auto",
                          },
                        }}
                        className="content"
                      >
                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.6rem",
                          }}
                        >
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={50}
                            height={50}
                          />
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: {
                                xs: "2rem",
                                md: "1.6rem",
                                lg: "2rem",
                              },
                              fontWeight: 600,
                              lineHeight: "2.2rem",
                              color: "#ffffff",
                              margin: "1.2rem 0",
                              opacity: "0.9",
                            }}
                          >
                            {t(item.title)}
                          </Typography>
                          <ul className="shop-list">
                            {item.list.map((li, i) => (
                              <li key={i}>{t(li)}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </MotionWrapper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </MotionWrapper>
      </Box>
    </>
  );
};

export default DesignSection;
