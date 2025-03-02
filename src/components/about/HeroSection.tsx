import { Container } from "@mui/material";
import { useTranslations } from "next-intl";
import MotionWrapper from "../tools/MotionWrapper";

const HeroSection = () => {
  const t = useTranslations("AboutPage");

  return (
    <MotionWrapper
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      <Container
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.9rem",
          zIndex: 1,
          position: "relative",
        }}
        maxWidth="lg"
      >
        <h1 className="main-title-2 text-primary">{t("welcome")}</h1>
        <p className="title-h3-2">{t("heroDescription")}</p>
      </Container>
    </MotionWrapper>
  );
};

export default HeroSection;
