import { Box, Container, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import MotionWrapper from "../tools/MotionWrapper";
import SectionInfo from "./components/SectionInfo";
import SeoServicesList from "./components/SeoServicesList";
import SeoServicesList2 from "./components/SeoServicesList2";

const SeoSection = () => {
  const t = useTranslations("MarketingCampaigns.SeoSection");
  return (
    <Box
      sx={{
        backgroundColor: "#00000017",
      }}
    >
      <MotionWrapper
        style={{ width: "100%" }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: "6rem 2rem", md: "10rem 2rem", xl: "15rem 2rem" },
            gap: { xs: "100px", sm: "130px", md: "150px", xl: "170px" },
          }}
          maxWidth="lg"
        >
          <Stack spacing="115px">
            <SectionInfo title={t("title")} description={t("description")} />
            <SeoServicesList />
          </Stack>

          <Stack spacing="75px">
            <SectionInfo
              title={t("services.title")}
              description={t("services.description")}
            />
            <SeoServicesList2 />
          </Stack>
        </Container>
      </MotionWrapper>
    </Box>
  );
};

export default SeoSection;
