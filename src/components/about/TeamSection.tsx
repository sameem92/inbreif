import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const TeamSection = () => {
  const t = useTranslations("AboutPage");

  return (
    <Box
      className="border"
      sx={{
        width: { xs: "100%" },
        margin: "0 auto",
        gap: { xs: "2rem", lg: "3.6rem" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "4.8rem",
        padding: {
          xs: "5rem 2rem",
          lg: "8rem 5rem",
          xl: "10rem 5rem",
        },
        background:
          "linear-gradient(137.34deg, rgba(27, 54, 44, 0.16) 23.98%, rgba(112, 113, 122, 0.16) 65.73%)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.8rem", lg: "3.6rem" },
          fontWeight: 600,
          lineHeight: "5.6rem",
          textAlign: "center",
          color: "#E1E42A",
          letterSpacing: "-1.44px",
        }}
      >
        {t("team.title")}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "2rem", lg: "2.7rem" },
          fontWeight: 600,
          lineHeight: "3.7rem",
          textAlign: "center",
          color: "#fff",
          width: { xs: "100%", lg: "85%" },
        }}
      >
        {t("team.description")}
      </Typography>
    </Box>
  );
};

export default TeamSection;
